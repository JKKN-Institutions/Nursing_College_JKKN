# CLAUDE.md — JKKN College of Nursing Website

> **Project:** Sresakthimayeil Institute of Nursing & Research (JKKN College of Nursing)
> **URL:** https://nursing.sresakthimayeil.jkkn.ac.in/
> **Framework:** Next.js 16.1.4 (App Router) + TypeScript + Tailwind CSS
> **Last Updated:** 2026-03-16

---

## PROJECT OVERVIEW

Production website for JKKN College of Nursing — 85-page institutional site with course pages, facility pages, city landing pages, blog system, and compliance sections. Server-first architecture with strategic client components. Local data files (no CMS). Deployed on Vercel.

---

## TECH STACK

| Component | Technology | Version |
|-----------|-----------|---------|
| Framework | Next.js (App Router) | 16.1.4 |
| Language | TypeScript (strict) | 5.9.3 |
| React | React 19 (server + client) | 19.2.3 |
| Styling | Tailwind CSS | 3.4.19 |
| Animations | Framer Motion | 12.29.2 |
| Icons | lucide-react + react-icons + @heroicons/react | Mixed |
| State | Zustand (minimal use) + useState | 5.0.11 |
| Backend | Supabase (SSR + JS client) | 0.8.0 / 2.98.0 |
| Utilities | clsx + tailwind-merge (via cn()) | — |
| Linting | ESLint (next/core-web-vitals) | 9.39.2 |
| Font | Poppins (Google Fonts, 6 weights) | — |
| Deployment | Vercel | — |

---

## DIRECTORY STRUCTURE

```
├── app/                    # Next.js App Router pages (85 routes)
│   ├── layout.tsx          # Root layout — metadata, schema, fonts
│   ├── page.tsx            # Homepage (14 sections, ~1016 lines)
│   ├── globals.css         # Global styles + custom utilities
│   ├── bsc-nursing/        # B.Sc Nursing course page
│   ├── msc-nursing/        # M.Sc Nursing course page
│   ├── pbsc-nursing/       # Post Basic B.Sc Nursing page
│   ├── course-msc-*/       # 5 M.Sc specialization pages
│   ├── dept-*/             # 5 department overview pages
│   ├── blog/               # Blog listing + [slug] dynamic routes
│   ├── blog/campus/[slug]/ # Campus blog dynamic routes
│   ├── coimbatore/ erode/ salem/ namakkal/ tiruppur/  # City landing pages
│   └── [50+ more routes]   # Facilities, compliance, committees, etc.
│
├── components/             # React components
│   ├── Header.tsx          # Fixed navigation header (client)
│   ├── Footer.tsx          # Footer with maps embed (server)
│   ├── ClientLayout.tsx    # Client wrapper for hooks
│   ├── FloatingButtons.tsx # Sticky CTA buttons (call, WhatsApp)
│   ├── BreadcrumbSchema.tsx # JSON-LD breadcrumb generation
│   ├── ScrollToTop.tsx     # Back-to-top button
│   ├── BottomNav/          # Mobile bottom navigation system
│   │   ├── bottom-navbar.tsx
│   │   ├── bottom-nav-item.tsx
│   │   ├── bottom-nav-submenu.tsx
│   │   └── bottom-nav-more-menu.tsx
│   ├── [14 Homepage sections] # HeroSection, CoursesSection, etc.
│   └── ui/                 # Shadcn/ui (accordion, sheet)
│
├── data/                   # All content data (no CMS/database)
│   ├── siteData.ts         # Site config, navigation, courses, hero slides
│   ├── eventsData.ts       # News, events, stories, videos
│   ├── partnersData.ts     # Partners, certifications, alumni
│   └── facilitiesData.ts   # Facilities, departments, institutions
│
├── hooks/                  # Custom React hooks
│   ├── use-mobile.tsx      # Mobile detection (breakpoint: 1024px)
│   └── use-bottom-nav.ts   # Bottom nav state management
│
├── lib/                    # Utilities
│   ├── supabase/client.ts  # Supabase browser client
│   ├── supabase/server.ts  # Supabase server client
│   └── utils.ts            # cn() — clsx + tailwind-merge
│
├── public/                 # Static assets (~140 MB)
│   ├── images/             # 81 images (hero, courses, facilities, alumni)
│   ├── pdf/                # 50+ PDF documents
│   ├── robots.txt          # AI-friendly crawler rules
│   ├── sitemap.xml         # Main sitemap
│   ├── sitemap-blog.xml    # Blog sitemap
│   ├── sitemap-courses.xml # Course sitemap
│   └── sitemap-pages.xml   # Pages sitemap
│
├── next.config.ts          # Images, redirects, CSP security headers
├── tailwind.config.ts      # Custom theme colors + fonts
├── tsconfig.json           # TypeScript config (@ path alias)
└── vercel.json             # Vercel deployment config
```

---

## KEY PATTERNS & CONVENTIONS

### Server vs Client Components
- **Default = Server Component** — All pages (page.tsx) are server components
- **Client only when needed** — Components with state, event listeners, or animations use `"use client"`
- Client components: Header, ClientLayout, BottomNav, FloatingButtons, ScrollToTop, HeroSection, ImageCarousel
- Server components: Footer, all page.tsx files, BreadcrumbSchema, most section components

### Data Flow
- **No CMS/database for content** — All site content lives in `/data/*.ts` files
- **Supabase** — Configured for blog system (blog posts stored in Supabase)
- **Static imports** — Components import data directly from data files

### Styling Rules
- **Tailwind first** — Use Tailwind utility classes for all styling
- **cn() helper** — Use `cn()` from `lib/utils.ts` for conditional classes
- **Custom classes in globals.css** — Only for complex utilities (.container-custom, .btn-primary, etc.)
- **Responsive prefixes** — Mobile-first: default → `sm:` (640) → `md:` (768) → `lg:` (1024) → `xl:` (1280) → `2xl:` (1536)

### Color Palette (Tailwind Config)
```
Primary Green:    #0b7845 (buttons, highlights)     → primary / primary-dark (#095d36)
Secondary Gold:   #FFD700 (accents)                  → secondary / secondary-dark (#e6c54f)
Brand Teal:       #0b5d6f (teal variants)            → brand-teal / brand-teal-dark / brand-teal-light
Brand Orange:     #ff5722 (orange variants)           → brand-orange / brand-orange-dark / brand-orange-light
Cream Background: #fbfbee                             → cream
Dark Text:        #002309                             → dark
```

### Component Naming
- Pages: `app/{route}/page.tsx`
- Homepage sections: `components/{Name}Section.tsx`
- UI primitives: `components/ui/{name}.tsx` (Shadcn/ui pattern)
- Bottom nav: `components/BottomNav/{name}.tsx`

### Image Handling
- Use Next.js `<Image>` component (from `next/image`) — never raw `<img>`
- Remote images: All HTTPS URLs allowed via `next.config.ts` remotePatterns
- Local images: Place in `/public/images/` with descriptive names

### Schema / SEO
- Root schema in `app/layout.tsx` — EducationalOrganization + CollegeOrUniversity
- Per-page breadcrumbs via `<BreadcrumbSchema items={[...]} />`
- Metadata exported from each page.tsx where needed
- Sitemaps: 4 separate XML files in `/public/`

---

## CRITICAL FILES — READ BEFORE EDITING

| File | Why Critical | Impact |
|------|-------------|--------|
| `app/layout.tsx` | Root layout, metadata, schema, fonts | ALL pages affected |
| `app/globals.css` | Global styles, custom utilities | ALL pages affected |
| `components/Header.tsx` | Navigation on every page | ALL pages affected |
| `components/Footer.tsx` | Footer on every page | ALL pages affected |
| `components/ClientLayout.tsx` | Client wrapper for all pages | ALL pages affected |
| `next.config.ts` | Security headers, redirects, images | Build + runtime |
| `tailwind.config.ts` | Theme colors, fonts, content paths | ALL styling |
| `data/siteData.ts` | Navigation menu, courses, contact | Multiple components |

**Rule:** Always grep for usages before modifying any shared component or data file.

---

## ENVIRONMENT VARIABLES

```env
NEXT_PUBLIC_SITE_URL=https://nursing.sresakthimayeil.jkkn.ac.in/
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/jkknnursing
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/jkknnursing
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/school/jkknnursing
NEXT_PUBLIC_YOUTUBE_URL=https://www.youtube.com/playlist?list=PL6QsTq-__HhteTB3-dqN_8hzc7EKycZnY
NEXT_PUBLIC_PHONE=+91 93458 55001
NEXT_PUBLIC_EMAIL=nursing@jkkn.ac.in
NEXT_PUBLIC_SUPABASE_URL=<supabase-project-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<supabase-anon-key>
```

---

## NPM SCRIPTS

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm start        # Production server
npm run lint     # ESLint check
```

---

## INSTITUTION DATA

- **Full Name:** Sresakthimayeil Institute of Nursing and Research
- **Brand Name:** JKKN College of Nursing
- **Parent:** JKKN Institutions
- **Founded:** 2007
- **Campus:** Natarajapuram, NH-544 (Salem-Coimbatore Highway), Komarapalayam, Namakkal, Tamil Nadu 638183
- **Coordinates:** 11.4333°N, 77.7167°E
- **Phone:** +91 93458 55001
- **Email:** nursing@jkkn.ac.in
- **Affiliation:** Tamil Nadu Dr. MGR Medical University (TNMGRMU)
- **Accreditation:** INC Approved, NAAC Accredited [exact grade UNVERIFIED]
- **Courses:** B.Sc Nursing (4 years), M.Sc Nursing (2 years), Post Basic B.Sc Nursing (2 years)
- **GBP:** https://maps.app.goo.gl/4m3Ec1pdsirbMiuE6

---

## KNOWN ISSUES & GAPS

### Critical (P0)
- H1 tag says "SRESAKTHIMAYEIL" instead of "JKKN College of Nursing" — SEO entity mismatch
- Meta descriptions need deployment per-page (currently root-level only)

### High (P1)
- Per-course Schema.org markup missing (no Course schema on individual course pages)
- FAQ Schema missing on course pages
- Google Business Profile needs verification
- No WhatsApp/chat widget integration

### Medium (P2)
- llms.txt needs enrichment for AI crawler visibility
- Long-term subdomain migration planned: `nursing.sresakthimayeil.jkkn.ac.in` → shorter URL
- Blog system using Supabase — verify data connection is active
- Review/Rating schema not implemented

### Data Gaps
- Nursing-specific placement rate [UNVERIFIED]
- Exact NAAC grade [UNVERIFIED]
- Highest package placement [UNVERIFIED]
- Faculty count [UNVERIFIED]
- Pass rate [UNVERIFIED]

---

## BUG FIX RULES (MANDATORY)

1. **Surgical fixes only** — Change the minimum lines needed to fix the issue. No refactoring, no "improvements", no cleanup of surrounding code
2. **No shared class/component modifications** — If a CSS class or component is used in 3+ places, NEVER modify it directly. Create a new variant or override instead
3. **Before editing any file, grep for all usages** — Run `Grep` to check where the component/class/function is used BEFORE changing it. Understand the blast radius first
4. **No layout changes during bug fixes** — padding, margin, flex, grid changes are HIGH RISK. After any layout edit, verify all breakpoints: mobile (320px), tablet (768px), desktop (1024px+)
5. **One fix = one commit** — Never bundle multiple fixes in a single commit. If fix A breaks something, it must be easy to revert without losing fix B
6. **Test adjacent pages** — After fixing page X, check pages Y and Z that share the same component or layout
7. **No global file edits during fixes** — `globals.css`, `tailwind.config.ts`, `layout.tsx` changes are FORBIDDEN during bug fixes unless the bug is specifically in those files
8. **Show impact before editing** — Before making any change, list: (a) files to be modified, (b) components affected, (c) pages that use those components
9. **Preserve responsive behavior** — Never remove or modify responsive classes (`sm:`, `md:`, `lg:`, `xl:`) without checking all breakpoints
10. **No dependency changes during fixes** — Do not add, remove, or update packages while fixing a bug

### High-Risk Danger Zones

| Risk Area | Why Dangerous | Rule |
|-----------|--------------|------|
| Shared components (Header, Footer, Layout) | Used on EVERY page | Grep all usages first, test all pages after |
| `globals.css` | Affects entire site | Never edit during bug fix |
| `tailwind.config.ts` | Affects all Tailwind classes | Never edit during bug fix |
| `layout.tsx` files | Affects all child routes | Full child page verification required |
| Responsive classes | Breaking one breakpoint breaks mobile/tablet | Check 320px, 640px, 768px, 1024px, 1280px |
| Framer Motion animations | Complex state interactions | Test enter/exit/hover states after changes |
| z-index changes | Can hide/overlap other elements | Check all overlapping sections |

### Project-Specific Danger Zones

| Risk Area | Why Dangerous | Rule |
|-----------|--------------|------|
| `data/siteData.ts` | Feeds Header nav, homepage, multiple pages | Grep all imports before editing |
| `components/BottomNav/` (4 files) | Interconnected mobile nav system | Test all mobile interactions after any change |
| `app/layout.tsx` schema | Affects Google's understanding of entire site | Never edit schema during bug fixes |
| Supabase client files (`lib/supabase/`) | Blog system depends on connection | Never modify connection config during fixes |

---

## CONTENT UPDATE GUIDE

To update site content (no code changes needed):
- **Courses, navigation, hero slides, contact:** Edit `data/siteData.ts`
- **News, events, stories, videos:** Edit `data/eventsData.ts`
- **Partners, certifications, alumni:** Edit `data/partnersData.ts`
- **Facilities, departments:** Edit `data/facilitiesData.ts`
- **Blog posts:** Managed via Supabase database
- **PDFs:** Add to `public/pdf/` and link from relevant pages
- **Images:** Add to `public/images/` with descriptive filenames

---

## ROUTE MAP (85 Pages)

### Course Pages
`/bsc-nursing` `/msc-nursing` `/pbsc-nursing`

### M.Sc Specializations
`/course-msc-medical-surgical` `/course-msc-child-health` `/course-msc-obstetric-gynecological` `/course-msc-psychiatric` `/course-msc-community-health`

### Departments
`/dept-medical-surgical` `/dept-community-health` `/dept-child-health` `/dept-obstetric-gynecological` `/dept-psychiatric`

### City Landing Pages
`/coimbatore` `/erode` `/salem` `/namakkal` `/tiruppur`

### Blog
`/blog` `/blog/[slug]` `/blog/campus/[slug]`

### Facilities
`/library` `/laboratories` `/hostel` `/transport` `/sports` `/wifi` `/cafeteria` `/auditorium` `/hospital` `/smart-classroom`

### Compliance & Committees
`/naac` `/ariia` `/aishe` `/iic` `/iqac` `/anti-ragging-committee` `/research-committee` `/internal-complaints-committee` `/grievance-redressal-committee`

### Institutional
`/about` `/contact` `/admissions` `/placement` `/gallery` `/faculty-details` `/our-institutions` `/our-management` `/our-trust` `/vision-mission`

### Other
`/scholarship` `/eligibility-criteria` `/recognition-approvals` `/nss` `/curriculum` `/student-life` `/international-collaboration` `/hospital-training` `/clinical-exposure` `/alumni` `/values-ethics` `/campus-life`
