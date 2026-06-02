-- Adds role_key + role_name columns to the faculty table so we can:
--   1. Display the staff role (Principal / HOD / Facilitator) in the admin table.
--   2. Scope the sync's soft-delete to only the roles we actually fetch.
--
-- Safe to run multiple times (IF NOT EXISTS).
--
-- Run via: npm run db:migrate   (requires DATABASE_URL in .env.local)

ALTER TABLE public.faculty
  ADD COLUMN IF NOT EXISTS role_key  TEXT,
  ADD COLUMN IF NOT EXISTS role_name TEXT;

-- Optional: index for faster filtering by role.
CREATE INDEX IF NOT EXISTS faculty_role_key_idx ON public.faculty (role_key);
