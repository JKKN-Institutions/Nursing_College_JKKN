/**
 * JKKN Staff API client.
 *
 * Talks to the MyJKKN `/api-management/staff` endpoint. Requires three
 * server-only env vars:
 *
 *   - JKKN_API_BASE_URL              e.g. https://www.jkkn.ai/api
 *   - JKKN_API_KEY                   Bearer token (format: jk_xxxxx_xxxxx)
 *   - JKKN_NURSING_INSTITUTION_ID    UUID — filters to nursing-college staff only
 */

export type StaffCategory = {
  id: string;
  category_name: string;
  is_teaching: boolean;
  shows_extended_profile: boolean;
};

export type StaffInstitution = {
  id: string;
  name: string;
  counselling_code?: string | null;
};

export type StaffDepartment = {
  id: string;
  department_name: string;
};

export type StaffRole = {
  id: string;
  role_key: string;
  role_name: string;
  description?: string | null;
  is_system_role?: boolean;
};

export type StaffQualification = {
  degree?: string;
  specialisation?: string;
  university?: string;
  institution?: string;
  year?: number | string;
};

export type StaffPublication = Record<string, unknown>;
export type StaffFundedProject = Record<string, unknown>;
export type StaffCertification = Record<string, unknown>;
export type StaffAward = Record<string, unknown>;
export type StaffMembership = Record<string, unknown>;
export type StaffPhdScholar = Record<string, unknown>;
export type StaffFaq = { question?: string; answer?: string };
export type StaffExperienceEntry = Record<string, unknown>;

export interface StaffApiRecord {
  id: string;
  first_name: string;
  last_name: string;
  gender?: string | null;
  date_of_birth?: string | null;
  marital_status?: string | null;
  blood_group?: string | null;
  email?: string | null;
  institution_email?: string | null;
  phone?: string | null;
  staff_id?: string | null;
  profile_picture?: string | null;
  address?: string | null;
  state?: string | null;
  district?: string | null;
  pincode?: string | null;
  date_of_joining?: string | null;
  designation?: string | null;
  role_type?: string | null;
  role_key?: string | null;
  category_id?: string | null;
  institution_id: string;
  department_id?: string | null;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;

  // Extended-profile (gated by has_extended_profile + category.shows_extended_profile)
  has_extended_profile: boolean;
  slug?: string | null;
  status?: 'draft' | 'published' | string;
  display_order?: number;
  experience_years?: number;
  research_papers?: number;
  phd_scholars?: number;
  awards_won?: number;
  pg_dissertations_guided?: number;
  ug_projects_guided?: number;
  qualification_summary?: string | null;
  professional_summary?: string | null;
  mentoring_description?: string | null;
  google_scholar_url?: string | null;
  researchgate_url?: string | null;
  orcid_url?: string | null;
  badges?: string[];
  qualifications?: StaffQualification[];
  specialisations?: string[];
  experience_entries?: StaffExperienceEntry[];
  research_focus_areas?: string[];
  publications?: StaffPublication[];
  funded_projects?: StaffFundedProject[];
  certifications?: StaffCertification[];
  awards?: StaffAward[];
  memberships?: StaffMembership[];
  phd_scholars_list?: StaffPhdScholar[];
  faqs?: StaffFaq[];
  achievements?: unknown[];

  // Embedded named-entity objects
  category?: StaffCategory | null;
  institution?: StaffInstitution | null;
  department?: StaffDepartment | null;
  role?: StaffRole | null;
}

export interface StaffListResponse {
  data: StaffApiRecord[];
  metadata: {
    total: number;
    all?: boolean;
    page?: number;
    limit?: number;
    totalPages?: number;
    returned: number;
  };
}

export interface FetchStaffOptions {
  /** Override the env-provided institution_id. */
  institutionId?: string;
  /** Restrict to a coarse role taxonomy (e.g. 'faculty'). Mutually exclusive with `roleKey`. */
  roleType?: string;
  /** Restrict to a fine-grained role key (e.g. 'principal', 'hod', 'facilitator'). */
  roleKey?: string;
  /** Restrict to active staff. Defaults to `undefined` (no filter — returns both). */
  isActive?: boolean;
  /** Restrict to staff with `has_extended_profile = true`. */
  hasExtendedProfile?: boolean;
  /** Per-request abort signal. */
  signal?: AbortSignal;
}

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

/**
 * Fetch nursing-college staff with the given filters in a single call (`all=true`).
 * Always runs server-side — never expose the API key to the browser.
 *
 * Pass `roleKey` for fine-grained role filtering (e.g. 'principal', 'hod',
 * 'facilitator'). `roleKey` is single-valued per request — for multiple roles,
 * use `fetchNursingStaffByRoleKeys` to fan-out and merge.
 */
export async function fetchNursingStaff(
  options: FetchStaffOptions = {}
): Promise<StaffApiRecord[]> {
  const baseUrl = requireEnv('JKKN_API_BASE_URL');
  const apiKey = requireEnv('JKKN_API_KEY');
  const institutionId =
    options.institutionId ?? requireEnv('JKKN_NURSING_INSTITUTION_ID');

  const url = new URL(`${baseUrl.replace(/\/+$/, '')}/api-management/staff`);
  url.searchParams.set('institution_id', institutionId);
  if (options.roleKey) {
    url.searchParams.set('role_key', options.roleKey);
  } else if (options.roleType) {
    url.searchParams.set('role_type', options.roleType);
  }
  if (options.isActive !== undefined) {
    url.searchParams.set('is_active', String(options.isActive));
  }
  if (options.hasExtendedProfile !== undefined) {
    url.searchParams.set('has_extended_profile', String(options.hasExtendedProfile));
  }
  url.searchParams.set('all', 'true');

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: 'application/json',
    },
    cache: 'no-store',
    signal: options.signal,
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Staff API ${res.status} ${res.statusText}: ${body}`);
  }

  const payload = (await res.json()) as StaffListResponse;
  return payload.data ?? [];
}

/**
 * Fan-out across multiple role_keys (the API only accepts one per request),
 * dedupe by id, and return the merged result.
 */
export async function fetchNursingStaffByRoleKeys(
  roleKeys: string[],
  options: Omit<FetchStaffOptions, 'roleKey' | 'roleType'> = {}
): Promise<StaffApiRecord[]> {
  if (roleKeys.length === 0) return [];

  const lists = await Promise.all(
    roleKeys.map((roleKey) => fetchNursingStaff({ ...options, roleKey }))
  );

  const byId = new Map<string, StaffApiRecord>();
  for (const list of lists) {
    for (const staff of list) byId.set(staff.id, staff);
  }
  return [...byId.values()];
}

/** @deprecated Use `fetchNursingStaff({ roleType: 'faculty' })` instead. */
export const fetchNursingFaculty = (options: FetchStaffOptions = {}) =>
  fetchNursingStaff({ roleType: 'faculty', isActive: true, ...options });
