# Course-Wise Blog Post Drafts — JKKN College of Nursing

7 pillar blog posts (1500–2500 words each) for course pages. Tamil Nadu audience, English only. Ready to upload to Supabase `blogs` table via the JKKN admin panel.

---

## Posts

| # | File | Course | Slug | Read Time | Category |
|---|------|--------|------|-----------|----------|
| 1 | `01-bsc-nursing-tamil-nadu-complete-guide.md` | B.Sc Nursing | `bsc-nursing-tamil-nadu-complete-guide-2026` | 10 min | Course Guide |
| 2 | `02-msc-medical-surgical-nursing-tamil-nadu.md` | M.Sc Medical Surgical | `msc-medical-surgical-nursing-tamil-nadu-scope-salary` | 9 min | Course Guide |
| 3 | `03-msc-child-health-paediatric-nursing-tamil-nadu.md` | M.Sc Child Health | `msc-child-health-paediatric-nursing-tamil-nadu` | 9 min | Course Guide |
| 4 | `04-msc-obg-nursing-tamil-nadu.md` | M.Sc OBG | `msc-obg-nursing-tamil-nadu-scope-salary-career` | 9 min | Course Guide |
| 5 | `05-msc-psychiatric-mental-health-nursing-tamil-nadu.md` | M.Sc Psychiatric | `msc-psychiatric-mental-health-nursing-tamil-nadu` | 9 min | Course Guide |
| 6 | `06-msc-community-health-nursing-tamil-nadu.md` | M.Sc Community Health | `msc-community-health-nursing-tamil-nadu` | 9 min | Course Guide |
| 7 | `07-post-basic-bsc-nursing-tamil-nadu.md` | Post Basic B.Sc | `post-basic-bsc-nursing-tamil-nadu-gnm-upgrade` | 9 min | Course Guide |

---

## How to Upload to Supabase Blog System

Each markdown file has two parts:

1. **Frontmatter** (between the `---` lines at the top) — metadata fields for the Supabase `blogs` table
2. **HTML body** (everything below the closing `---`) — goes into the `content` column

### Field Mapping (frontmatter → Supabase `blogs` table)

| Frontmatter Key | Supabase Column |
|-----------------|-----------------|
| `title` | `title` |
| `slug` | `slug` |
| `excerpt` | `excerpt` |
| `meta_description` | `meta_description` |
| `category` | `category` |
| `author_name` | `author_name` |
| `read_time` | `read_time` |
| `cover_image_suggestion` | `cover_image_url` (upload your cover image first, then paste the URL) |
| `tags` | `tags` (if your schema has this column) |
| HTML body | `content` |

### Required Manual Steps Before Publishing

1. **Add cover images** — Each post references a suggested cover image path. Upload an actual image and replace `cover_image_suggestion` with the real public URL.
2. **Set `college_id`** — Match the `NEXT_PUBLIC_COLLEGE_ID` environment variable used by the blog routes (`app/blog/page.tsx` line 11).
3. **Set `is_published = true`** when ready to go live.
4. **Set `published_at`** to the date you want to display.
5. **Verify internal links** — Each post links to the corresponding course page on the live site. Confirm those URLs match your live routes.

---

## SEO Notes (per post)

Each post is built around:

- **Targeted primary keyword** + location modifier (Tamil Nadu)
- **Long-tail H2/H3 structure** matching common nursing student search intent (eligibility, fees, salary, scope, government jobs, abroad)
- **Internal link to the matching course page** at the end of every post
- **Phone CTA** with the official `+91 93458 55001` number
- **FAQ section** of 5–6 Q&A's per post for AEO / FAQPage schema (can be added later via the blog system if it supports structured data)
- **Salary tables in `<ul>` form** — kept scannable for snippet pickup
- **Realistic, non-inflated numbers** — no [UNVERIFIED] claims like exact placement % or highest packages are used. Salary ranges are realistic India and TN benchmarks.

---

## Suggested Publishing Order

For best topical cluster impact:

1. **Week 1:** B.Sc Nursing (post 1) — the pillar.
2. **Week 2:** M.Sc Medical Surgical (post 2) — most-searched MSc spec.
3. **Week 3:** Post Basic B.Sc Nursing (post 7) — captures GNM upgrade audience.
4. **Week 4:** M.Sc Child Health (post 3).
5. **Week 5:** M.Sc OBG (post 4).
6. **Week 6:** M.Sc Community Health (post 6) — strong govt-job angle.
7. **Week 7:** M.Sc Psychiatric (post 5).

Staggering 1 post per week signals consistent publishing to Google and gives each post a clean window to index.

---

## What's Not Included (Optional Next Steps)

- Cover images — need to be designed/sourced and uploaded.
- FAQPage JSON-LD schema for each post — can be added if the blog system supports schema injection.
- Internal links *between* the 7 posts (link cluster) — can be added in a second pass once all are uploaded and live URLs are known.
- Localised pages for each city (Coimbatore, Salem, Erode, Namakkal, Tiruppur) — those would be a separate programmatic SEO project, not a blog post.
