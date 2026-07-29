-- ─────────────────────────────────────────────────────────────────────────────
-- Blog draft preview — shareable secret link
--
-- Run this once in the Supabase SQL editor.
--
-- What it does:
--   1. Adds blogs.preview_token — a random secret generated per post.
--   2. Adds get_blog_preview(id, token) — a SECURITY DEFINER function that
--      returns a single blog row ONLY when the token matches exactly.
--
-- The app calls it from /blog/preview/[id]?token=<secret>. Without the exact
-- token, anon users get nothing (normal RLS still blocks direct table reads),
-- and the preview page is noindex + force-dynamic so Google never sees it.
-- ─────────────────────────────────────────────────────────────────────────────

-- 1 ── Secret token column ────────────────────────────────────────────────────

-- NOTE: on this database the column already exists and is of type uuid,
-- so everything below stays uuid-native.
alter table public.blogs
  add column if not exists preview_token uuid;

-- Backfill existing rows (random v4 uuid, 122 bits of entropy)
update public.blogs
   set preview_token = gen_random_uuid()
 where preview_token is null;

-- New rows get a token automatically
alter table public.blogs
  alter column preview_token set default gen_random_uuid();

create unique index if not exists blogs_preview_token_key
  on public.blogs (preview_token);


-- 2 ── Token-gated read ───────────────────────────────────────────────────────

create or replace function public.get_blog_preview(p_id uuid, p_token text)
returns setof public.blogs
language sql
stable
security definer
set search_path = public
as $$
  select *
    from public.blogs
   where id = p_id
     and p_token is not null
     and length(p_token) >= 32
     and preview_token is not null
     and preview_token::text = lower(p_token)
   limit 1;
$$;

revoke all on function public.get_blog_preview(uuid, text) from public;
grant execute on function public.get_blog_preview(uuid, text) to anon, authenticated;


-- 3 ── Rotate a token (optional — kills every previously shared link) ──────────
-- update public.blogs
--    set preview_token = gen_random_uuid()
--  where id = '<blog-id>';
