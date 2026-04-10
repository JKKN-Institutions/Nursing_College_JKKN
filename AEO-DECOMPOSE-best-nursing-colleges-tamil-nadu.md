# AEO Task Decomposition — "best nursing colleges in tamil nadu"

> **Target URL:** https://nursing.sresakthimayeil.jkkn.ac.in/
> **Date:** 2026-03-27
> **Total Tasks:** 48 atomic changes
> **Estimated Implementation:** 10-14 days (Phase 1-5) + 8 weeks (Phase 6 blog cluster)

---

## Legend

| Symbol | Meaning |
|--------|---------|
| P0 | Critical — blocks other tasks |
| P1 | High — core AEO impact |
| P2 | Medium — supporting optimization |
| P3 | Low — nice-to-have enhancement |
| [SCHEMA] | Schema/structured data change |
| [CONTENT] | Visible page content change |
| [META] | Meta tag / head element change |
| [LINK] | Internal or external link change |
| [VOICE] | Voice search optimization |

---

## BATCH 1: Schema Fixes (P0 — Do First)

### Task 1.1 — Remove GNM from FAQ Schema Fee Answer
- **File:** `app/page.tsx`
- **Line:** ~92
- **Type:** [SCHEMA]
- **Priority:** P0
- **Change:** In `faqSchema.mainEntity[1].acceptedAnswer.text`, remove "GNM - ₹75,000" from the fee structure text
- **Old:** `"Our annual fee structure: B.Sc Nursing - ₹95,000, M.Sc Nursing - ₹1,25,000, Post Basic B.Sc Nursing - ₹85,000, GNM - ₹75,000."`
- **New:** `"The annual fee structure at JKKN College of Nursing: B.Sc Nursing — ₹95,000, M.Sc Nursing — ₹1,25,000, Post Basic B.Sc Nursing — ₹85,000."`
- **Also fix:** Remove first-person "Our" → use third-person
- **Blast radius:** FAQ schema only — no visual change
- **Test:** Validate JSON-LD in Schema.org Validator

### Task 1.2 — Remove GNM from ItemList Schema
- **File:** `app/page.tsx`
- **Lines:** ~189-196
- **Type:** [SCHEMA]
- **Priority:** P0
- **Change:** Remove ListItem position 4 (GNM), change `numberOfItems` from 4 to 3
- **Old:** `"numberOfItems": 4` + 4 ListItem entries including GNM
- **New:** `"numberOfItems": 3` + 3 ListItem entries (BSc, MSc, Post Basic only)
- **Blast radius:** ItemList schema only
- **Test:** Validate JSON-LD

### Task 1.3 — Remove GNM from SpecialAnnouncement Schema
- **File:** `app/page.tsx`
- **Line:** ~202
- **Type:** [SCHEMA]
- **Priority:** P0
- **Change:** Remove "and GNM programs" from announcement text
- **Old:** `"...Post Basic B.Sc Nursing (50 seats), and GNM programs for the 2026-27 academic year."`
- **New:** `"...and Post Basic B.Sc Nursing (50 seats) for the 2026-27 academic year."`
- **Blast radius:** SpecialAnnouncement schema only
- **Test:** Validate JSON-LD

### Task 1.4 — Fix aggregateRating (Review or Remove)
- **File:** `app/layout.tsx`
- **Lines:** ~217-223
- **Type:** [SCHEMA]
- **Priority:** P0
- **Decision needed:** Either (a) reduce to verifiable numbers, or (b) remove aggregateRating entirely until verified
- **Current:** `"ratingValue": "4.5", "ratingCount": "127", "reviewCount": "45"`
- **Risk:** Google may penalize inflated ratings
- **Recommendation:** Remove aggregateRating until actual review count is confirmed
- **Blast radius:** CollegeOrUniversity schema — may lose star ratings in SERP
- **Test:** Validate, check SERP for star appearance after removal

### Task 1.5 — Fix OG Image to Absolute URL
- **File:** `app/layout.tsx`
- **Lines:** ~25-29
- **Type:** [META]
- **Priority:** P1
- **Change:** Change relative OG image URL to absolute
- **Old:** `url: "/images/Homepage-Hero_Banner-image.webp"`
- **New:** `url: "https://nursing.sresakthimayeil.jkkn.ac.in/images/Homepage-Hero_Banner-image.webp"`
- **Also fix:** Twitter image on line ~36
- **Blast radius:** Social sharing previews
- **Test:** Facebook Sharing Debugger, Twitter Card Validator

### Task 1.6 — Fix Speakable CSS Selectors
- **File:** `app/page.tsx`
- **Lines:** ~270-271
- **Type:** [SCHEMA] [VOICE]
- **Priority:** P1
- **Change:** Update cssSelector to match actual DOM elements
- **Old:** `"cssSelector": ["h1", ".hero-description", ".stats-row"]`
- **New:** `"cssSelector": ["h1", ".speakable-summary", ".voice-answer"]`
- **Note:** `.speakable-summary` and `.voice-answer` classes will be added in Batch 2
- **Dependency:** Complete after Task 2.1 and 2.7
- **Blast radius:** Speakable schema only
- **Test:** Validate JSON-LD, check Google TTS extraction

---

## BATCH 2: New Content Section (P1 — Core AEO Impact)

### Task 2.1 — Add "Best Nursing Colleges in Tamil Nadu" H2 Section
- **File:** `app/page.tsx`
- **Position:** After About section (~line 628), before Programs section (~line 631)
- **Type:** [CONTENT]
- **Priority:** P1
- **Change:** Insert new `<section>` with:
  - Section wrapper with `id="best-nursing-colleges"`
  - Subtitle label "RANKINGS & RECOGNITION"
  - H2: "Best Nursing Colleges in Tamil Nadu"
  - Subtitle paragraph
- **Code structure:**
```jsx
{/* Best Nursing Colleges Section — AEO Target */}
<section id="best-nursing-colleges" className="py-10 sm:py-14 md:py-20 bg-white">
  <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
    <div className="text-center mb-8 sm:mb-10 md:mb-12">
      <p className="text-[#7cb983] text-xs sm:text-sm font-bold uppercase tracking-wide mb-2 sm:mb-4">
        RANKINGS & RECOGNITION
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3 sm:mb-4">
        Best Nursing Colleges in Tamil Nadu
      </h2>
    </div>
    {/* Snippet paragraph, table, AI content — Tasks 2.2-2.6 go here */}
  </div>
</section>
```
- **Blast radius:** Page layout — new section inserted. Check scroll behavior, section spacing.
- **Test:** All breakpoints (320px, 768px, 1024px, 1280px)

### Task 2.2 — Add Snippet-Optimized Paragraph
- **File:** `app/page.tsx`
- **Position:** Inside section from Task 2.1, immediately after H2
- **Type:** [CONTENT]
- **Priority:** P1
- **Change:** Add a 42-word paragraph with `className="speakable-summary"`
- **Content:**
```
JKKN College of Nursing (Sresakthimayeil Institute of Nursing and Research) in Komarapalayam ranks among the best nursing colleges in Tamil Nadu with INC approval, NAAC accreditation, 500-bed teaching hospital training, 98% placement rate, and international career pathways to NHS UK and Cleveland Clinic Abu Dhabi.
```
- **Rules:** No first person, no hedging, entity names complete, data-specific
- **Blast radius:** None — new content
- **Test:** Read aloud for voice TTS quality

### Task 2.3 — Add Nursing Education Overview (AI Overview Target)
- **File:** `app/page.tsx`
- **Position:** Inside section from Task 2.1, after snippet paragraph
- **Type:** [CONTENT]
- **Priority:** P1
- **Change:** Add overview paragraph about nursing education in Tamil Nadu + Key Information table
- **Content:** See AEO-SPEC Section 3.3 for full text
- **Rules:** Third-person, factual density, regulatory body names, university name
- **Note:** This is the primary AI Overview citation target — every sentence must be independently citable
- **Blast radius:** None — new content
- **Test:** Read each sentence in isolation — must make sense without context

### Task 2.4 — Add Comparison Table
- **File:** `app/page.tsx`
- **Position:** Inside section from Task 2.1, after overview
- **Type:** [CONTENT]
- **Priority:** P1
- **Change:** Add HTML table comparing JKKN against key nursing education factors
- **Columns:** Factor | JKKN College of Nursing | Average TN Nursing College
- **Rows:** 7 factors (INC Approval, Teaching Hospital, Placement Rate, International Placements, MSc Specializations, NCLEX Support, Simulation Labs)
- **Note:** Similar table already exists in "By the Numbers" section (~line 857-889). The new table should be more concise and snippet-formatted.
- **Blast radius:** None — new content
- **Test:** Table responsive on mobile

### Task 2.5 — Add JKKN Institution Paragraph (AI Citation Block)
- **File:** `app/page.tsx`
- **Position:** Inside section from Task 2.1, after table
- **Type:** [CONTENT]
- **Priority:** P1
- **Change:** Add 2 factual paragraphs about JKKN with full entity names
- **Content:** See AEO-SPEC Section 3.3 "JKKN College of Nursing (Sresakthimayeil Institute of Nursing and Research)" paragraphs
- **Rules:** Full entity names (not abbreviated), specific numbers, regulatory bodies, university name
- **Blast radius:** None — new content

### Task 2.6 — Add Internal Links Within New Section
- **File:** `app/page.tsx`
- **Position:** Bottom of new section from Task 2.1
- **Type:** [LINK]
- **Priority:** P2
- **Change:** Add contextual links to:
  - `/bsc-nursing` — "BSc Nursing program details"
  - `/msc-nursing` — "MSc Nursing specializations"
  - `/placement` — "placement record and statistics"
  - `/admissions` — "admission process and eligibility"
  - `/clinical-exposure` — "clinical training at attached hospital"
  - `/naac` — "accreditation and approvals"
- **External links:**
  - `https://www.tnmgrmu.ac.in/` — "Tamil Nadu Dr. M.G.R. Medical University" (rel="noopener")
  - `https://www.indiannursingcouncil.org/` — "Indian Nursing Council" (rel="noopener")
- **Blast radius:** None — new links
- **Test:** Verify all hrefs resolve

---

## BATCH 3: FAQ Expansion (P1)

### Task 3.1 — Change FAQ from Accordion to Always-Visible
- **File:** `app/page.tsx`
- **Lines:** ~1354-1409
- **Type:** [CONTENT]
- **Priority:** P1
- **Change:** Replace `<details>/<summary>` pattern with `<div>/<h3>/<p>` pattern
- **From:**
```jsx
<details className="...">
  <summary><h3>{faq.question}</h3></summary>
  <p>{faq.answer}</p>
</details>
```
- **To:**
```jsx
<div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all">
  <h3 className="text-lg font-bold text-[#006837] mb-3">{faq.question}</h3>
  <p className="text-gray-700 leading-relaxed voice-answer">{faq.answer}</p>
</div>
```
- **Why:** `<details>` hides content from Google's snippet extractor. Always-visible = extractable.
- **Blast radius:** MEDIUM — FAQ visual layout changes. ALL breakpoints must be tested.
- **Test:** 320px, 768px, 1024px — verify FAQ answers are visible, spacing is correct, no overflow

### Task 3.2 — Add 6 New PAA Questions to FAQ Array
- **File:** `app/page.tsx`
- **Position:** FAQ array (~line 1355), add at BEGINNING of array (most important PAA questions first)
- **Type:** [CONTENT]
- **Priority:** P1
- **Change:** Add 6 new FAQ objects to the array:
  1. "Which is the best nursing college in Tamil Nadu?"
  2. "What is the fee for BSc nursing in Tamil Nadu?"
  3. "Is NEET required for nursing admission in Tamil Nadu?"
  4. "Which nursing college has the best placement in Tamil Nadu?"
  5. "What is the eligibility for BSc nursing in Tamil Nadu?"
  6. "What is the salary of a nurse in Tamil Nadu?"
- **Answer content:** See AEO-SPEC Section 3.2 for full answers
- **Rules per answer:**
  - First sentence: direct answer (≤29 words for voice)
  - Full answer: 50-75 words
  - At least one specific number per answer
  - Third-person only
  - No hedging language
- **Blast radius:** FAQ section gets longer (13 questions vs 7). Check scroll behavior.
- **Test:** All 13 FAQ items render correctly, no layout breaks

### Task 3.3 — Update Existing FAQ Answer #2 (Fee Structure)
- **File:** `app/page.tsx`
- **Line:** ~1363-1365
- **Type:** [CONTENT]
- **Priority:** P1
- **Change:** Remove GNM fee, change first person to third person
- **Old:** `"Our annual fee structure: B.Sc Nursing - ₹95,000, M.Sc Nursing - ₹1,25,000, Post Basic B.Sc Nursing - ₹85,000, GNM - ₹75,000. This includes tuition..."`
- **New:** `"The annual fee structure at JKKN College of Nursing: B.Sc Nursing — ₹95,000, M.Sc Nursing — ₹1,25,000, Post Basic B.Sc Nursing — ₹85,000. This covers tuition..."`
- **Blast radius:** FAQ visual content + faqSchema
- **Test:** Verify answer displays correctly

### Task 3.4 — Update faqSchema with All 13 Questions
- **File:** `app/page.tsx`
- **Lines:** ~75-136
- **Type:** [SCHEMA]
- **Priority:** P1
- **Change:** Replace existing faqSchema `mainEntity` array (7 items) with new array (13 items) containing:
  - 6 new PAA-aligned questions (voice-optimized: ≤29 words per acceptedAnswer.text)
  - 7 existing questions (update answers to remove first-person + GNM)
- **Schema content:** See AEO-SPEC Section 4.1 for complete JSON-LD
- **Rules:** Each `acceptedAnswer.text` must be ≤29 words (for voice TTS extraction)
- **Blast radius:** FAQPage schema — affects rich results
- **Test:** Validate complete JSON-LD in Schema.org Validator

---

## BATCH 4: First-Person Language Fixes (P2)

### Task 4.1 — Fix First-Person in About Section
- **File:** `app/page.tsx`
- **Lines:** ~568-572
- **Type:** [CONTENT]
- **Priority:** P2
- **Changes:**
  - "We are committed to producing" → "The college is committed to producing"
  - "Our Learners are trained" → "JKKN nursing students are trained"
- **Blast radius:** About section visual content only

### Task 4.2 — Fix First-Person in FAQ Answers
- **File:** `app/page.tsx`
- **Lines:** FAQ array (~1355-1391)
- **Type:** [CONTENT]
- **Priority:** P2
- **Changes across multiple FAQ answers:**
  - "Our annual fee structure" → "The annual fee structure at JKKN"
  - "Our Learners receive" → "Students receive"
  - "Our hostels offer" → "JKKN hostels offer"
  - "Our placement cell" → "The JKKN placement cell"
  - "we offer comprehensive" → "the college offers comprehensive"
- **Blast radius:** FAQ visual content — verify all answers read naturally after changes

### Task 4.3 — Fix First-Person in Why Choose Us Section
- **File:** `app/page.tsx`
- **Lines:** ~785-819
- **Type:** [CONTENT]
- **Priority:** P2
- **Changes:**
  - "our attached 500+ bedded" → "the attached 500+ bedded"
  - "Practice on mannequins in our simulation labs" → "Practice on mannequins in JKKN simulation labs"
  - "Our Learning Facilitators" → "JKKN Learning Facilitators"
- **Blast radius:** Why Choose Us section only

### Task 4.4 — Fix First-Person in Placement Section
- **File:** `app/page.tsx`
- **Lines:** ~919-975
- **Type:** [CONTENT]
- **Priority:** P2
- **Changes:**
  - "Our Learners are recruited" → "JKKN graduates are recruited"
- **Blast radius:** Placement section only

---

## BATCH 5: Meta Tags & Technical (P2)

### Task 5.1 — Update Meta Title
- **File:** `app/layout.tsx`
- **Line:** ~14
- **Type:** [META]
- **Priority:** P1
- **Old:** `"JKKN College of Nursing | Best Nursing Colleges in Tamil Nadu"`
- **New:** `"JKKN College of Nursing | Best Nursing College Tamil Nadu 2026"`
- **Also update:** OG title (line ~18), Twitter title (line ~33)
- **Chars:** 57 (within 60 limit)
- **Blast radius:** SERP title, social sharing titles

### Task 5.2 — Update Meta Description
- **File:** `app/layout.tsx`
- **Line:** ~15
- **Type:** [META]
- **Priority:** P1
- **Old:** `"JKKN College of Nursing — among the best nursing colleges in Tamil Nadu. INC-approved B.Sc, M.Sc & Post Basic Nursing. 98%+ placements, 500-bed hospital training."`
- **New:** `"JKKN College of Nursing, Komarapalayam — INC approved, NAAC accredited. B.Sc, M.Sc & Post Basic Nursing. 98% placement rate. 500-bed hospital. Apply 2026-27."`
- **Also update:** OG description (line ~19), Twitter description (line ~34)
- **Chars:** 155 (at limit)
- **Changes:** Added "Komarapalayam" (location), "NAAC accredited", removed hedging "among the", added CTA "Apply 2026-27"
- **Blast radius:** SERP snippet, social sharing

### Task 5.3 — Add robots max-snippet Directive
- **File:** `app/layout.tsx`
- **Lines:** ~43-46
- **Type:** [META]
- **Priority:** P2
- **Change:** Add `maxSnippet: -1` and `maxImagePreview: "large"` to robots config
- **Current:**
```typescript
robots: {
  index: true,
  follow: true,
},
```
- **New:**
```typescript
robots: {
  index: true,
  follow: true,
  "max-snippet": -1,
  "max-image-preview": "large" as any,
},
```
- **Blast radius:** May affect how Google extracts snippets — positive impact expected

### Task 5.4 — Add Backlink from /bsc-nursing to Homepage
- **File:** `app/bsc-nursing/page.tsx`
- **Type:** [LINK]
- **Priority:** P2
- **Change:** Add contextual link to homepage with anchor text "best nursing colleges in Tamil Nadu"
- **Position:** In the about/overview section of BSc Nursing page
- **Example:** `"JKKN College of Nursing, ranked among the <Link href="/">best nursing colleges in Tamil Nadu</Link>, offers..."`
- **Blast radius:** BSc Nursing page only — verify layout after adding

### Task 5.5 — Add Backlink from /msc-nursing to Homepage
- **File:** `app/msc-nursing/page.tsx`
- **Type:** [LINK]
- **Priority:** P2
- **Change:** Same as 5.4, contextual link with relevant anchor text
- **Blast radius:** MSc Nursing page only

### Task 5.6 — Add Backlink from /placement to Homepage
- **File:** `app/placement/page.tsx`
- **Type:** [LINK]
- **Priority:** P2
- **Change:** Add link to homepage in placement overview section
- **Blast radius:** Placement page only

### Task 5.7 — Update Image Alt Text on Homepage
- **File:** `app/page.tsx`
- **Line:** ~442-447 (Hero image)
- **Type:** [META]
- **Priority:** P3
- **Old:** `alt="JKKN College of Nursing"`
- **New:** `alt="JKKN College of Nursing campus — best nursing college in Tamil Nadu with 500-bed teaching hospital"`
- **Also check:** All other Image components on homepage for descriptive alt text
- **Blast radius:** None — alt text only

---

## BATCH 6: Voice & Course Schema (P2)

### Task 6.1 — Add className="speakable-summary" to Snippet Paragraph
- **File:** `app/page.tsx`
- **Position:** Task 2.2's paragraph element
- **Type:** [VOICE]
- **Priority:** P2
- **Change:** Add `className="speakable-summary"` to the paragraph wrapper
- **Dependency:** Task 2.2 must be complete

### Task 6.2 — Add className="voice-answer" to FAQ Answer Elements
- **File:** `app/page.tsx`
- **Position:** FAQ answer `<p>` tags
- **Type:** [VOICE]
- **Priority:** P2
- **Change:** Add `className="voice-answer"` to each FAQ answer paragraph
- **Dependency:** Task 3.1 must be complete

### Task 6.3 — Add Course Schema for BSc Nursing
- **File:** `app/page.tsx`
- **Position:** Schema section at top of file
- **Type:** [SCHEMA]
- **Priority:** P2
- **Change:** Add new Course schema for BSc Nursing:
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "B.Sc Nursing",
  "description": "4-year undergraduate nursing program approved by Indian Nursing Council...",
  "provider": { "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/#college" },
  "courseCode": "BSC-NURSING",
  "numberOfCredits": "135",
  "occupationalCredentialAwarded": "Bachelor of Science in Nursing",
  "timeRequired": "P4Y",
  "educationalLevel": "Undergraduate",
  "offers": {
    "@type": "Offer",
    "price": "95000",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  }
}
```
- **Blast radius:** New schema block — validate
- **Test:** Google Rich Results Test

### Task 6.4 — Add Course Schema for MSc Nursing
- **File:** `app/page.tsx`
- **Type:** [SCHEMA]
- **Priority:** P2
- **Change:** Same pattern as 6.3 for MSc Nursing (2 years, ₹1,25,000, 5 specializations)

### Task 6.5 — Add Course Schema for Post Basic BSc Nursing
- **File:** `app/page.tsx`
- **Type:** [SCHEMA]
- **Priority:** P2
- **Change:** Same pattern as 6.3 for Post Basic (2 years, ₹85,000, for GNM holders)

### Task 6.6 — Add Location Proximity Content
- **File:** `app/page.tsx`
- **Position:** Within new section from Task 2.1 or About section
- **Type:** [CONTENT] [VOICE]
- **Priority:** P2
- **Change:** Add a short paragraph with distance data for voice "near me" queries:
  "JKKN College of Nursing is located on NH-544 Salem-Coimbatore Highway in Komarapalayam, Namakkal District — 22 km from Erode, 58 km from Salem, 67 km from Tiruppur, and 105 km from Coimbatore."
- **Blast radius:** New content in section

---

## BATCH 7: Validation & Deploy (P1)

### Task 7.1 — Run npm run build
- **Command:** `npm run build`
- **Priority:** P0
- **Purpose:** Verify all changes compile without TypeScript errors
- **Dependency:** All Batch 1-6 changes

### Task 7.2 — Test All Breakpoints
- **Tool:** Browser DevTools
- **Priority:** P0
- **Breakpoints:** 320px, 640px, 768px, 1024px, 1280px, 1536px
- **Check:** New section layout, FAQ visibility, table responsiveness, no overflow
- **Dependency:** Task 7.1 pass

### Task 7.3 — Validate All JSON-LD Schemas
- **Tool:** Schema.org Validator / Google Rich Results Test
- **Priority:** P0
- **Check:** Every schema block (FAQPage, EducationalOrganization, CollegeOrUniversity, Course, Speakable, etc.) validates with 0 errors
- **Dependency:** Task 7.1 pass

### Task 7.4 — Run PageSpeed Insights
- **Tool:** PSI
- **Priority:** P1
- **Check:** Core Web Vitals not degraded by new content
- **Target:** LCP < 2.5s, CLS < 0.1, INP < 200ms
- **Dependency:** Deployed to staging/preview

### Task 7.5 — Manual SERP Check (Baseline)
- **Tool:** Google Incognito
- **Priority:** P1
- **Check:** Search "best nursing colleges in tamil nadu" — record JKKN position (or absence)
- **Purpose:** Baseline for before/after comparison

### Task 7.6 — Deploy to Production
- **Tool:** Vercel (git push or manual deploy)
- **Priority:** P0
- **Dependency:** Tasks 7.1-7.5 all pass

### Task 7.7 — Post-Deploy Validation (48-72 hours after)
- **Priority:** P1
- **Checklist:**
  - [ ] Google Rich Results Test on live URL — 0 errors
  - [ ] Mobile-Friendly Test — pass
  - [ ] Search target query in incognito — record position
  - [ ] Check for FAQ rich result appearance
  - [ ] Check AI Overview for JKKN citation
  - [ ] Verify all internal links on homepage work
  - [ ] Re-calculate AEO Readiness Score

---

## Execution Order Summary

```
Day 1-2:  BATCH 1 (1.1 → 1.2 → 1.3 → 1.4 → 1.5 → 1.6)
          ↓
Day 2-3:  BATCH 2 (2.1 → 2.2 → 2.3 → 2.4 → 2.5 → 2.6)
          ↓
Day 3-4:  BATCH 3 (3.1 → 3.2 → 3.3 → 3.4)
          ↓
Day 4-5:  BATCH 4 (4.1 → 4.2 → 4.3 → 4.4)
          ↓
Day 5-7:  BATCH 5 (5.1 → 5.2 → 5.3 → 5.4 → 5.5 → 5.6 → 5.7)
          ↓
Day 7-10: BATCH 6 (6.1 → 6.2 → 6.3 → 6.4 → 6.5 → 6.6)
          ↓
Day 10-14: BATCH 7 (7.1 → 7.2 → 7.3 → 7.4 → 7.5 → 7.6 → 7.7)
```

**One fix = one commit rule applies.** Each task should be committed separately for easy rollback.

---

## File Change Summary

| File | Tasks Affecting It | Total Changes |
|------|-------------------|---------------|
| `app/page.tsx` | 1.1, 1.2, 1.3, 1.6, 2.1-2.6, 3.1-3.4, 4.1-4.4, 6.1-6.6 | 30 changes |
| `app/layout.tsx` | 1.4, 1.5, 5.1, 5.2, 5.3 | 5 changes |
| `app/bsc-nursing/page.tsx` | 5.4 | 1 change |
| `app/msc-nursing/page.tsx` | 5.5 | 1 change |
| `app/placement/page.tsx` | 5.6 | 1 change |
| **Total unique files:** | **5 files** | **38 code changes** |
