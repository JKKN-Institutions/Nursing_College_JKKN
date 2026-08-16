// DEP-34 — the CRM programme list for JKKN College of Nursing and Research.
//
// WHY THIS IS ITS OWN FILE AND NOT PART OF THE SERVER ACTION.
// A Next.js `'use server'` module may only export async functions. On the Arts build this array
// lived inside the action file, the build stripped it, and the page died at prerender with
// `TypeError: j.map is not a function` — while `tsc --noEmit` reported zero errors. Measured
// 2026-08-16. Plain data stays out of 'use server' files.
//
// Verified live against GET https://www.jkkn.ai/api/public/forms/jkkn-admission-2026 on
// 2026-08-16: these are exactly the 7 rows the CRM holds for this institution — none missing,
// none extra, none dead. Re-check before each deploy: a dead program_id is a lead that never lands.
//
// UNLIKE ARTS, NOTHING HERE IS AMBIGUOUS. The Arts list carries three byte-identical duplicate
// names (ENGLISH, COMPUTER SCIENCE, MATHEMATICS) plus COMMERCE, so its UG/PG split is a guess.
// Nursing's seven rows are each distinct and each maps to exactly one programme, so these labels
// are a reading of the CRM, not an assumption about it.

export const NURSING_INSTITUTION_ID = "70e54e51-9b98-4e07-9534-a85310609bfd"

export type NursingProgramme = { id: string; label: string }

// Ordered by measured demand, not by the CRM's own ordering: B.Sc Nursing first because
// /admissions/bsc-nursing carries 55,424 impressions over 90 days against 17,347 for M.Sc
// and 5,999 for Post Basic (GSC, 2026-05-15..2026-08-13).
export const NURSING_PROGRAMMES: ReadonlyArray<NursingProgramme> = [
  { id: "35412f80-1100-4be9-ba82-92111eac57fc", label: "B.Sc Nursing (4 years)" },
  { id: "23b838dd-49b7-4f0e-afe4-72af411f7724", label: "Post Basic B.Sc Nursing" },
  { id: "e46c9707-be99-453e-a411-9bac83e806ee", label: "M.Sc Nursing — Medical Surgical Nursing" },
  { id: "432ea38a-947a-4959-98c5-fbcef4068252", label: "M.Sc Nursing — Child Health Nursing" },
  { id: "bf8a9692-7543-4af8-b0db-d45d8eff32be", label: "M.Sc Nursing — Community Health Nursing" },
  { id: "52edf664-720c-4dd6-917d-f531c05375b9", label: "M.Sc Nursing — Mental Health Nursing" },
  { id: "a878c1b4-a610-4750-b69b-51002ce91252", label: "M.Sc Nursing — Obstetrics and Gynaecological Nursing" },
]

export const VALID_NURSING_PROGRAMME_IDS: ReadonlySet<string> = new Set(
  NURSING_PROGRAMMES.map((p) => p.id)
)

// Pre-selects the dropdown when the form sits on a course page, so a parent on the B.Sc page
// does not have to pick B.Sc again. M.Sc is deliberately absent: it has five specialisations in
// the CRM and no single correct default, so that page opens on "Select a Programme" and the
// parent chooses. Guessing one would file the lead under a specialisation nobody asked for.
export const DEFAULT_PROGRAMME_BY_COURSE_KEY: Readonly<Record<string, string>> = {
  bsc: "35412f80-1100-4be9-ba82-92111eac57fc",
  pbsc: "23b838dd-49b7-4f0e-afe4-72af411f7724",
}
