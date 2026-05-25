/**
 * Map a JKKN Staff API record to a row for the local Supabase `faculty` table.
 *
 * Critical renames vs the API shape:
 *   API field              → DB column
 *   ─────────────────────  ────────────────────────────
 *   qualification_summary  → qualification
 *   professional_summary   → summary
 *   research_papers        → research_papers_count
 *   phd_scholars (scalar)  → phd_scholars_count
 *   phd_scholars_list (arr)→ phd_scholars
 *   awards_won             → awards_won_count
 *   qualifications         → academic_qualifications
 *   specialisations        → areas_of_specialisation
 *   experience_entries     → experience
 *   research_focus_areas   → research_focus
 *   funded_projects        → funded_research
 *
 * Local-only fields (not in API):
 *   - college_id  (injected per-college)
 */

import type { StaffApiRecord } from './staff-api';

export interface FacultyRow {
  id: string;
  college_id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  slug: string | null;
  experience_years: number;
  email: string;
  display_order: number;
  is_active: boolean;
  photo_url: string;
  summary: string | null;
  research_papers_count: number;
  phd_scholars_count: number;
  awards_won_count: number;
  google_scholar_url: string | null;
  researchgate_url: string | null;
  orcid_url: string | null;
  mentoring_description: string | null;
  pg_dissertations_guided: number;
  ug_projects_guided: number;
  badges: unknown[];
  academic_qualifications: unknown[];
  areas_of_specialisation: unknown[];
  experience: unknown[];
  research_focus: unknown[];
  publications: unknown[];
  funded_research: unknown[];
  certifications: unknown[];
  awards: unknown[];
  memberships: unknown[];
  phd_scholars: unknown[];
  faqs: unknown[];
  role_key: string | null;
  role_name: string | null;
  source: 'jkkn';
  created_at: string;
  updated_at: string;
}

function fullName(s: StaffApiRecord): string {
  return [s.first_name, s.last_name].filter(Boolean).join(' ').trim();
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Decide whether the row should be publicly visible on /faculty.
 * We require all three:
 *   - active in MyJKKN
 *   - extended profile filled out
 *   - publication state === 'published'
 */
function isPublishable(s: StaffApiRecord): boolean {
  return (
    s.is_active === true &&
    s.has_extended_profile === true &&
    (s.status ?? 'draft') === 'published'
  );
}

export function mapStaffToFaculty(s: StaffApiRecord, collegeId: string): FacultyRow {
  const name = fullName(s);
  const now = new Date().toISOString();
  const apiUpdatedAt = s.updated_at ?? now;
  const apiCreatedAt = s.created_at ?? now;

  return {
    id: s.id,
    college_id: collegeId,
    name,
    designation: (s.designation ?? '').trim(),
    department: (s.department?.department_name ?? '').trim(),
    qualification: (s.qualification_summary ?? '').trim(),
    slug: (s.slug && s.slug.trim()) || (name ? slugify(name) : null),
    experience_years: s.experience_years ?? 0,
    email: (s.institution_email ?? s.email ?? '').trim(),
    display_order: s.display_order ?? 0,
    is_active: isPublishable(s),
    photo_url: (s.profile_picture ?? '').trim(),
    summary: s.professional_summary?.trim() || null,
    research_papers_count: s.research_papers ?? 0,
    phd_scholars_count: s.phd_scholars ?? 0,
    awards_won_count: s.awards_won ?? 0,
    google_scholar_url: s.google_scholar_url?.trim() || null,
    researchgate_url: s.researchgate_url?.trim() || null,
    orcid_url: s.orcid_url?.trim() || null,
    mentoring_description: s.mentoring_description?.trim() || null,
    pg_dissertations_guided: s.pg_dissertations_guided ?? 0,
    ug_projects_guided: s.ug_projects_guided ?? 0,
    badges: s.badges ?? [],
    academic_qualifications: s.qualifications ?? [],
    areas_of_specialisation: s.specialisations ?? [],
    experience: s.experience_entries ?? [],
    research_focus: s.research_focus_areas ?? [],
    publications: s.publications ?? [],
    funded_research: s.funded_projects ?? [],
    certifications: s.certifications ?? [],
    awards: s.awards ?? [],
    memberships: s.memberships ?? [],
    phd_scholars: s.phd_scholars_list ?? [],
    faqs: s.faqs ?? [],
    role_key: s.role?.role_key ?? s.role_key ?? null,
    role_name: s.role?.role_name ?? null,
    source: 'jkkn',
    created_at: apiCreatedAt,
    updated_at: apiUpdatedAt,
  };
}
