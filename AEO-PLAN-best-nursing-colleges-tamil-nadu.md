# AEO Implementation Plan — "best nursing colleges in tamil nadu"

> **Target URL:** https://nursing.sresakthimayeil.jkkn.ac.in/
> **Date:** 2026-03-27
> **Current AEO Score:** 20/100 (Critical Gap)
> **Target AEO Score:** 60+/100 (Competitive) within 8 weeks
> **Strategy:** Gate C — Long-term play with immediate PAA/AI Overview wins

---

## Execution Timeline

| Phase | Timeline | Goal | Expected Impact |
|-------|----------|------|-----------------|
| **Phase 1: Schema Fixes** | Week 1 (Day 1-2) | Fix existing schema errors | Schema validation: 0 errors → FAQ rich results eligible |
| **Phase 2: Content Addition** | Week 1-2 (Day 2-5) | Add snippet section + expand FAQ | +15 points AEO score (content structure + PAA coverage) |
| **Phase 3: Technical SEO** | Week 2 (Day 5-7) | Meta tags, internal links, negative triggers | +10 points AEO score (technical completeness) |
| **Phase 4: Voice Optimization** | Week 2-3 (Day 7-10) | Voice answers, Speakable schema, local queries | +5 points AEO score (voice readiness) |
| **Phase 5: Monitoring Setup** | Week 3 (Day 10-14) | GSC connection, tracking cadence | Measurement infrastructure ready |
| **Phase 6: Content Cluster** | Week 4-12 | Blog posts for topical authority | Organic position improvement → top 20 |

---

## Phase 1: Schema Fixes (Day 1-2) — CRITICAL

### Priority: P0 (Blocking — must fix before any content changes)

| # | Task | File | Line(s) | Risk | Dependencies |
|---|------|------|---------|------|--------------|
| 1.1 | Remove GNM from faqSchema answer #2 | app/page.tsx | ~92 | LOW — single line text edit | None |
| 1.2 | Remove GNM from itemListSchema (position 4) + change numberOfItems to 3 | app/page.tsx | ~189-196 | LOW — remove array item | None |
| 1.3 | Remove GNM from specialAnnouncementSchema text | app/page.tsx | ~202 | LOW — text edit | None |
| 1.4 | Review aggregateRating values (127 ratings, 45 reviews) — reduce or remove if unverified | app/layout.tsx | ~217-223 | MEDIUM — affects rich results | Verify actual review count first |
| 1.5 | Fix OG image URL to absolute | app/layout.tsx | ~25-29 | LOW — URL change | None |
| 1.6 | Fix Speakable cssSelector to match actual DOM | app/page.tsx | ~270-271 | LOW — selector change | Verify actual class names in DOM |

**Success Metrics:**
- Google Rich Results Test: 0 schema errors
- All JSON-LD blocks validate in Schema.org Validator
- No GNM references in any schema block

---

## Phase 2: Content Addition (Day 2-5) — HIGH PRIORITY

### 2A: Add "Best Nursing Colleges in Tamil Nadu" Section (Day 2-3)

| # | Task | File | Position | Risk | Dependencies |
|---|------|------|----------|------|--------------|
| 2.1 | Add new H2 section "Best Nursing Colleges in Tamil Nadu" | app/page.tsx | After About section (~line 628), before Programs section | MEDIUM — inserting new section in page flow | Phase 1 complete |
| 2.2 | Write snippet-optimized paragraph (42 words, third-person, no hedging) | app/page.tsx | Immediately after new H2 | LOW — new content | 2.1 |
| 2.3 | Create comparison table (JKKN vs top TN nursing colleges — 7 factors) | app/page.tsx | Below snippet paragraph | LOW — new content | 2.1 |
| 2.4 | Add "Nursing Education in Tamil Nadu" overview content (AI Overview target) | app/page.tsx | Below comparison table | LOW — new content | 2.1 |
| 2.5 | Add Key Information table (regulatory body, affiliating university, fee range) | app/page.tsx | Within new section | LOW — new content | 2.4 |
| 2.6 | Add JKKN institution paragraph with full entity names (AI citation target) | app/page.tsx | Within new section | LOW — new content | 2.4 |

**Content rules for this section:**
- ZERO first-person language (no "Our", "We", "Us")
- ZERO hedging (no "may", "might", "could", "among the best")
- ALL statistics must be verifiable or tagged [UNVERIFIED]
- Full entity names on first use: "JKKN College of Nursing (Sresakthimayeil Institute of Nursing and Research)"
- Include 2026 year reference naturally
- Add `className="speakable-summary"` to the voice-optimized paragraph
- Add `id="best-nursing-colleges"` for internal linking

### 2B: Expand FAQ Section (Day 3-4)

| # | Task | File | Position | Risk | Dependencies |
|---|------|------|----------|------|--------------|
| 2.7 | Change FAQ from `<details>` accordion to always-visible format | app/page.tsx | ~1354-1409 | MEDIUM — visual layout change, test all breakpoints | None |
| 2.8 | Add PAA Q1: "Which is the best nursing college in Tamil Nadu?" | app/page.tsx | FAQ section (top of list) | LOW | 2.7 |
| 2.9 | Add PAA Q2: "What is the fee for BSc nursing in Tamil Nadu?" | app/page.tsx | FAQ section | LOW | 2.7 |
| 2.10 | Add PAA Q3: "Is NEET required for nursing in Tamil Nadu?" | app/page.tsx | FAQ section | LOW | 2.7 |
| 2.11 | Add PAA Q4: "Which nursing college has the best placement in Tamil Nadu?" | app/page.tsx | FAQ section | LOW | 2.7 |
| 2.12 | Add PAA Q5: "What is the eligibility for BSc nursing?" | app/page.tsx | FAQ section | LOW | 2.7 |
| 2.13 | Add PAA Q6: "What is the salary of a nurse in Tamil Nadu?" | app/page.tsx | FAQ section | LOW | 2.7 |
| 2.14 | Update existing FAQ answer #2 to remove GNM fee reference | app/page.tsx | ~1363-1365 | LOW | Phase 1.1 |
| 2.15 | Update faqSchema to include all 13 questions (7 existing + 6 new) with voice-optimized answers (≤29 words each) | app/page.tsx | ~75-136 | MEDIUM — large schema update | 2.8-2.13 |

**FAQ format change (2.7):**
- FROM: `<details><summary>Question</summary><p>Answer</p></details>` (hidden by default)
- TO: `<div><h3>Question</h3><p>Answer</p></div>` (always visible in DOM)
- Reason: Google cannot extract snippet content from collapsed `<details>` elements
- Verify: All breakpoints (320px, 768px, 1024px) after change

### 2C: Fix First-Person Language (Day 4-5)

| # | Task | File | Scope | Risk |
|---|------|------|-------|------|
| 2.16 | Replace "Our Learners" → "JKKN nursing students" throughout page.tsx | app/page.tsx | Multiple locations | MEDIUM — verify all instances |
| 2.17 | Replace "We offer/provide" → "JKKN College of Nursing offers/provides" | app/page.tsx | Multiple locations | MEDIUM — verify context |
| 2.18 | Replace "Our hostels" → "JKKN hostels" in FAQ answers | app/page.tsx | FAQ section | LOW |
| 2.19 | Replace "our attached" → "the attached" in clinical training FAQ | app/page.tsx | FAQ section | LOW |

**Success Metrics:**
- New "Best Nursing Colleges in Tamil Nadu" section visible in first 30% of page
- 13 FAQ questions visible in DOM (not hidden in `<details>`)
- ZERO first-person language in snippet-target sections
- Page word count: 3,000+ words

---

## Phase 3: Technical SEO (Day 5-7)

| # | Task | File | Risk | Dependencies |
|---|------|------|------|--------------|
| 3.1 | Update meta title to "JKKN College of Nursing \| Best Nursing College Tamil Nadu 2026" | app/layout.tsx | LOW — metadata change | None |
| 3.2 | Update meta description with location + NAAC + CTA (155 chars max) | app/layout.tsx | LOW | None |
| 3.3 | Add `max-snippet:-1, max-image-preview:large` to robots meta | app/layout.tsx | LOW | None |
| 3.4 | Add internal links to new section: /msc-nursing, /pbsc-nursing, /admissions, /faculty-details, /hostel, /clinical-exposure | app/page.tsx | LOW | Phase 2 complete |
| 3.5 | Add external authority links: tnmgrmu.ac.in, indiannursingcouncil.org | app/page.tsx | LOW | Phase 2 complete |
| 3.6 | Review and update image alt text to include keywords | app/page.tsx | LOW | None |
| 3.7 | Add backlinks from /bsc-nursing, /msc-nursing, /salem pages to homepage | app/bsc-nursing/page.tsx, etc. | LOW — per page | None |
| 3.8 | Verify canonical URL is correct | app/layout.tsx | LOW | None |

**Success Metrics:**
- Meta title ≤60 chars with target keyword + year
- Meta description ≤155 chars with location, accreditation, CTA
- 8+ internal links on homepage
- 2 external authority links
- 3+ backlinks from course/city pages to homepage

---

## Phase 4: Voice Optimization (Day 7-10)

| # | Task | File | Risk | Dependencies |
|---|------|------|------|--------------|
| 4.1 | Add `className="speakable-summary"` to snippet paragraph | app/page.tsx | LOW | Phase 2.2 |
| 4.2 | Add `className="voice-answer"` to each FAQ short answer | app/page.tsx | LOW | Phase 2.7-2.13 |
| 4.3 | Update Speakable schema cssSelector to target new classes | app/page.tsx | LOW | 4.1, 4.2 |
| 4.4 | Add location proximity content for voice "near me" queries | app/page.tsx | LOW | Phase 2 section |
| 4.5 | Ensure all FAQ answers have a ≤29-word lead sentence (voice TTS friendly) | app/page.tsx | LOW | Phase 2.7-2.13 |
| 4.6 | Add Course schema for BSc, MSc, Post Basic on homepage | app/page.tsx | MEDIUM — new schema blocks | None |

**Success Metrics:**
- Speakable schema cssSelector targets elements that exist in DOM
- All FAQ lead sentences ≤29 words
- Location mentions: Komarapalayam, Namakkal, Erode, Salem
- Voice answer test: read aloud, verify it sounds natural

---

## Phase 5: Monitoring Setup (Day 10-14)

| # | Task | Tool | Frequency |
|---|------|------|-----------|
| 5.1 | Connect Google Search Console for nursing.sresakthimayeil.jkkn.ac.in | GSC | One-time setup |
| 5.2 | Run Google Rich Results Test on live homepage | Google Rich Results Test | After publishing |
| 5.3 | Run Mobile-Friendly Test | Google Mobile Test | After publishing |
| 5.4 | Run PageSpeed Insights — check Core Web Vitals impact | PSI | After publishing |
| 5.5 | Manual incognito SERP check — note JKKN position for target query | Google Incognito | Weekly for 4 weeks |
| 5.6 | Check for FAQ rich results | GSC Search Appearance | Weekly for 4 weeks |
| 5.7 | Check AI Overview citation | Google Incognito | Bi-weekly |
| 5.8 | Re-calculate AEO Readiness Score (target: 50+) | Manual | 4 weeks after publish |

---

## Phase 6: Content Cluster (Week 4-12) — LONG TERM

Blog posts to build topical authority:

| # | Blog Topic | Target Query | Priority | Est. Effort |
|---|-----------|-------------|----------|-------------|
| 6.1 | "Top 10 Nursing Colleges in Tamil Nadu 2026 — Complete Guide" | top 10 nursing colleges tamil nadu | HIGH | 2,000 words |
| 6.2 | "BSc Nursing Admission in Tamil Nadu 2026 — Eligibility, Fees, Process" | bsc nursing admission tamil nadu 2026 | HIGH | 1,500 words |
| 6.3 | "Nursing College Fees in Tamil Nadu 2026 — Government vs Private Comparison" | nursing college fees tamil nadu | MEDIUM | 1,500 words |
| 6.4 | "Best Nursing Colleges Near Salem — Complete Guide" | nursing colleges near salem | MEDIUM | 1,500 words |
| 6.5 | "BSc Nursing vs GNM — Which is Better for Your Career?" | bsc nursing vs gnm | MEDIUM | 1,200 words |
| 6.6 | "Nursing Career Salary in Tamil Nadu 2026 — Entry to International" | nursing salary tamil nadu | LOW | 1,200 words |
| 6.7 | "NCLEX Preparation Guide for Indian Nursing Students" | nclex preparation india | LOW | 1,500 words |
| 6.8 | "International Nursing Career After BSc Nursing — NHS UK, UAE, Singapore" | international nursing career india | LOW | 1,500 words |

Each blog post MUST:
- Link to homepage with anchor "best nursing colleges in Tamil Nadu"
- Include FAQPage schema
- Target 1-2 PAA questions per post
- Mention JKKN with specific data in relevant context

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| FAQ format change breaks mobile layout | MEDIUM | HIGH | Test all breakpoints before deploying |
| New content section pushes Programs section below fold | LOW | MEDIUM | Keep new section concise (400-500 words) |
| Schema changes cause validation errors | LOW | HIGH | Validate all JSON-LD blocks before deploying |
| Aggregators update their content in response | LOW | LOW | Monitor weekly, maintain freshness advantage |
| JKKN data (98% placement, 500 beds) is unverified | MEDIUM | HIGH | Tag as [UNVERIFIED] until confirmed by admin |
| Page speed degradation from added content | LOW | MEDIUM | Run PageSpeed after deploy, optimize if needed |

---

## Success Criteria

| Metric | Current | 4-Week Target | 12-Week Target |
|--------|---------|---------------|----------------|
| AEO Readiness Score | 20/100 | 50/100 | 65/100 |
| Google position (target query) | Not ranking | Top 30 | Top 10 |
| FAQ rich results | Not showing | Showing for 3+ queries | Showing for 8+ queries |
| AI Overview citation | Not cited | — | Cited for 1+ query |
| PAA presence | None | — | Present for 2+ queries |
| Schema errors | Multiple (GNM, ratings) | 0 errors | 0 errors |
| Homepage word count | ~2,500 | 3,200+ | 3,200+ |
| Blog cluster posts | 0 | 2 published | 6 published |
