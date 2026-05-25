-- Ensures every column written by lib/jkkn/staff-mapper.ts exists in the
-- `faculty` table. The original base schema predates the extended-profile
-- fields, so upserts were failing with "column does not exist".
--
-- Fully idempotent (ADD COLUMN IF NOT EXISTS) — safe to re-run.
--
-- Run via: npm run db:migrate

ALTER TABLE public.faculty
  ADD COLUMN IF NOT EXISTS slug                     TEXT,
  ADD COLUMN IF NOT EXISTS summary                  TEXT,
  ADD COLUMN IF NOT EXISTS photo_url                TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS research_papers_count    INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS phd_scholars_count       INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS awards_won_count         INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS pg_dissertations_guided  INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS ug_projects_guided       INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS google_scholar_url       TEXT,
  ADD COLUMN IF NOT EXISTS researchgate_url         TEXT,
  ADD COLUMN IF NOT EXISTS orcid_url                TEXT,
  ADD COLUMN IF NOT EXISTS mentoring_description    TEXT,
  ADD COLUMN IF NOT EXISTS badges                   JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS academic_qualifications  JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS areas_of_specialisation  JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS experience               JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS research_focus           JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS publications             JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS funded_research          JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS certifications           JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS awards                   JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS memberships              JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS phd_scholars             JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS faqs                     JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS experience_years         INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS display_order            INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS is_active                BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS created_at               TIMESTAMPTZ NOT NULL DEFAULT now(),
  ADD COLUMN IF NOT EXISTS updated_at               TIMESTAMPTZ NOT NULL DEFAULT now();
