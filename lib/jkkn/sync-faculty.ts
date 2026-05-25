/**
 * Orchestrates a full sync: JKKN Staff API → Supabase `faculty` table.
 *
 * Target audience (by default): Professors + Associate Professors +
 * Assistant Professors at the configured nursing institution.
 *
 * Strategy:
 *   1. Pull `role_type=faculty` (active + inactive) — covers all teaching staff.
 *   2. Optionally pull any extra `role_key` values configured via
 *      JKKN_SYNC_ROLE_KEYS (empty by default) and merge them in.
 *   3. Dedupe by id.
 *   4. Filter to keep only rows whose designation (case-insensitive, trimmed)
 *      matches the allowed list — defaults: Professor, Associate Professor,
 *      Assistant Professor. Rows matching any allowed role_key are also kept.
 *   5. Upsert by `id` (the API id == our DB primary key).
 *   6. Soft-delete (set is_active=false) any DB rows that previously matched
 *      the filter but were not returned by the API this run.
 *
 * Runs with the Supabase SERVICE ROLE key to bypass RLS. NEVER call from a
 * browser — only from server routes / cron / scripts.
 *
 * Override via env vars (comma-separated, case-insensitive on designations):
 *   JKKN_SYNC_DESIGNATIONS=Professor,Associate Professor,Assistant Professor
 *   JKKN_SYNC_ROLE_KEYS=principal,hod
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { fetchNursingStaff, type StaffApiRecord } from './staff-api';
import { mapStaffToFaculty, type FacultyRow } from './staff-mapper';

export const DEFAULT_SYNC_DESIGNATIONS = [
  'Principal',
  'Professor',
  'Associate Professor',
  'Assistant Professor',
  'Nursing Tutor',
] as const;

// The Principal is sometimes tagged with role_type=management instead of
// role_type=faculty, so we also pull by role_key=principal as a safety net.
export const DEFAULT_SYNC_ROLE_KEYS = ['principal'] as const;

export interface SyncSummary {
  designations: string[];
  roleKeys: string[];
  fetched: number;            // Total returned by API (before filter)
  matched: number;            // Rows that passed the designation/role filter
  perDesignation: Record<string, number>;
  /** Unique designation strings returned by the API — for debugging mismatches. */
  apiDesignationsSeen: Record<string, number>;
  /** Unique role_type values returned by the API — to spot mis-tagged faculty. */
  apiRoleTypesSeen: Record<string, number>;
  /** Unique role_key values returned by the API. */
  apiRoleKeysSeen: Record<string, number>;
  upserted: number;
  softDeleted: number;
  skipped: number;
  errors: string[];
  durationMs: number;
}

function getServiceRoleClient(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url) throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL');
  if (!serviceKey) {
    throw new Error(
      'Missing SUPABASE_SERVICE_ROLE_KEY — required for the sync route to bypass RLS'
    );
  }
  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function parseList(env: string | undefined, fallback: readonly string[]): string[] {
  if (!env) return [...fallback];
  return env
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function norm(s: string | null | undefined): string {
  return (s ?? '').trim().toLowerCase();
}

/**
 * Loose categorisation — handles common variations like "Asst. Professor",
 * "Assoc Professor", "PROFESSOR", "Sr. Professor", etc. Returns the canonical
 * bucket label or `null` if the designation doesn't fit any allowed bucket.
 */
function categoriseDesignation(designation: string | null | undefined): string | null {
  const d = norm(designation);
  if (!d) return null;
  if (d.includes('principal')) return 'Principal';

  const isAssistant = /\b(assistant|asst\.?)\b/.test(d);
  const isAssociate = /\b(associate|assoc\.?)\b/.test(d);
  const isProfessor = /\b(professor|prof\.?)\b/.test(d);

  if (isAssistant && isProfessor) return 'Assistant Professor';
  if (isAssociate && isProfessor) return 'Associate Professor';
  if (isProfessor) return 'Professor';
  if (/\b(nursing\s+tutor|tutor)\b/.test(d)) return 'Nursing Tutor';
  return null;
}

/**
 * Pull active + inactive for a given filter so we can reconcile deactivations
 * in step 6.
 */
async function fetchActiveAndInactive(filter: {
  roleType?: string;
  roleKey?: string;
}): Promise<StaffApiRecord[]> {
  const [active, inactive] = await Promise.all([
    fetchNursingStaff({ ...filter, isActive: true }),
    fetchNursingStaff({ ...filter, isActive: false }),
  ]);
  return [...active, ...inactive];
}

export async function syncFacultyFromJkkn(collegeId: string): Promise<SyncSummary> {
  const t0 = Date.now();
  const errors: string[] = [];

  const designations = parseList(process.env.JKKN_SYNC_DESIGNATIONS, DEFAULT_SYNC_DESIGNATIONS);
  const roleKeys = parseList(process.env.JKKN_SYNC_ROLE_KEYS, DEFAULT_SYNC_ROLE_KEYS);
  const allowedRoleKeys = new Set(roleKeys.map(norm));

  // Pull EVERY staff member at the institution (no role_type filter) so we
  // catch professors regardless of whether MyJKKN tagged them as 'faculty',
  // 'management', or something else. Active + inactive in parallel.
  const allStaff = await fetchActiveAndInactive({});

  // Dedupe by id (defensive — active/inactive lists should already be disjoint).
  const byId = new Map<string, StaffApiRecord>();
  for (const s of allStaff) byId.set(s.id, s);
  const merged = [...byId.values()];

  // Diagnostic: count every distinct designation / role_type / role_key.
  const apiDesignationsSeen: Record<string, number> = {};
  const apiRoleTypesSeen: Record<string, number> = {};
  const apiRoleKeysSeen: Record<string, number> = {};
  for (const s of merged) {
    const designation = (s.designation ?? '').trim() || '(blank)';
    apiDesignationsSeen[designation] = (apiDesignationsSeen[designation] ?? 0) + 1;
    const roleType = (s.role_type ?? '').trim() || '(blank)';
    apiRoleTypesSeen[roleType] = (apiRoleTypesSeen[roleType] ?? 0) + 1;
    const roleKey = (s.role?.role_key ?? s.role_key ?? '').trim() || '(blank)';
    apiRoleKeysSeen[roleKey] = (apiRoleKeysSeen[roleKey] ?? 0) + 1;
  }

  // Filter: loose categorisation OR allowed role_key.
  const matched = merged.filter((s) => {
    if (categoriseDesignation(s.designation)) return true;
    const roleKey = norm(s.role?.role_key ?? s.role_key);
    return allowedRoleKeys.has(roleKey);
  });

  // Per-designation breakdown using the canonical bucket from categoriseDesignation.
  const perDesignation: Record<string, number> = Object.fromEntries(
    designations.map((d) => [d, 0])
  );
  for (const s of matched) {
    const bucket = categoriseDesignation(s.designation);
    if (bucket && bucket in perDesignation) {
      perDesignation[bucket] += 1;
    } else {
      perDesignation['Other roles'] = (perDesignation['Other roles'] ?? 0) + 1;
    }
  }

  const rows: FacultyRow[] = matched.map((s) => mapStaffToFaculty(s, collegeId));
  const supabase = getServiceRoleClient();

  let upserted = 0;
  let skipped = 0;

  // Batch upsert in chunks of 100 to keep payloads small.
  const CHUNK = 100;
  for (let i = 0; i < rows.length; i += CHUNK) {
    const chunk = rows.slice(i, i + CHUNK);
    const { error, count } = await supabase
      .from('faculty')
      .upsert(chunk, { onConflict: 'id', count: 'exact' });
    if (error) {
      errors.push(`Upsert chunk ${i / CHUNK}: ${error.message}`);
      skipped += chunk.length;
    } else {
      upserted += count ?? chunk.length;
    }
  }

  // Soft-delete: a row qualifies for soft-delete if it WOULD have been picked
  // up by this sync (designation OR role_key in the allowed lists) but wasn't
  // returned by the API. Manual rows with unrelated designations stay untouched.
  const apiIds = new Set(rows.map((r) => r.id));
  let softDeleted = 0;

  const { data: existing, error: listError } = await supabase
    .from('faculty')
    .select('id, is_active, designation, role_key, source')
    .eq('college_id', collegeId);

  if (listError) {
    errors.push(`List existing: ${listError.message}`);
  } else if (existing) {
    const orphans = existing
      .filter((r) => {
        if (apiIds.has(r.id)) return false;
        if (r.is_active === false) return false;
        if (r.source !== 'jkkn') return false;
        if (categoriseDesignation(r.designation)) return true;
        const roleKey = norm(r.role_key);
        return allowedRoleKeys.has(roleKey);
      })
      .map((r) => r.id);

    if (orphans.length > 0) {
      const { error: delError, count: delCount } = await supabase
        .from('faculty')
        .update(
          { is_active: false, updated_at: new Date().toISOString() },
          { count: 'exact' }
        )
        .in('id', orphans);
      if (delError) errors.push(`Soft delete: ${delError.message}`);
      else softDeleted = delCount ?? orphans.length;
    }
  }

  return {
    designations,
    roleKeys,
    fetched: merged.length,
    matched: matched.length,
    perDesignation,
    apiDesignationsSeen,
    apiRoleTypesSeen,
    apiRoleKeysSeen,
    upserted,
    softDeleted,
    skipped,
    errors,
    durationMs: Date.now() - t0,
  };
}
