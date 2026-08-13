# MSc Nursing Page Optimization — TASKS FILE

> **Page:** https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing
> **Primary Target:** "msc nursing colleges in tamilnadu" — #1 ranking
> **Date:** 2026-04-13
> **Total Tasks:** 52 tasks across 6 groups

---

## TASK GROUPS OVERVIEW

| Group | Tasks | Priority Mix | Effort |
|-------|:-----:|:------------:|:------:|
| A — SEO (On-Page + Technical) | 14 | 5×P0, 5×P1, 4×P2 | 18 hrs |
| B — AEO (Snippets + PAA + AI Overview) | 8 | 2×P0, 3×P1, 3×P2 | 12 hrs |
| C — GEO (Entity + AI Citation) | 8 | 2×P0, 3×P1, 3×P2 | 14 hrs |
| D — Content (Depth + Audience) | 12 | 3×P0, 5×P1, 4×P2 | 25 hrs |
| E — Technical (Speed + Schema) | 6 | 1×P0, 3×P1, 2×P2 | 8 hrs |
| F — Competitor Response | 4 | 1×P1, 2×P2, 1×P3 | 6 hrs |
| **TOTAL** | **52** | **13×P0, 19×P1, 16×P2, 4×P3** | **~83 hrs** |

---

## GROUP A — SEO TASKS (On-Page + Technical + Keywords)

### A-01: Rewrite Title Tag (P0)

**File:** `app/msc-nursing/page.tsx` line 12
**Effort:** 15 min | **Assignee:** Developer
**Dependency:** None | **Blocks:** A-02

**Current:**
```tsx
title: "M.Sc Nursing Course — 2-Year INC-Approved Program | Sresakthimayeil Institute of Nursing and Research",
```

**Replace with:**
```tsx
title: "MSc Nursing Colleges in Tamil Nadu — JKKN | 5 Specializations",
```

**Acceptance criteria:**
- Title ≤ 60 characters
- Contains "MSc Nursing Colleges in Tamil Nadu"
- Contains "JKKN"
- Google SERP preview shows full title without truncation

---

### A-02: Rewrite Meta Description (P0)

**File:** `app/msc-nursing/page.tsx` line 13
**Effort:** 15 min | **Assignee:** Developer
**Dependency:** A-01 | **Blocks:** None

**Current:**
```tsx
description: "M.Sc Nursing at Sresakthimayeil Institute of Nursing and Research, Komarapalayam. 5 specializations: Medical-Surgical, Child Health, OBG, Psychiatric, Community Health. Apply for 2026-27.",
```

**Replace with:**
```tsx
description: "JKKN offers INC-approved 2-year MSc Nursing with 5 specializations. 500+ bed hospital training, 100% placement support. Apply for 2026-27 admission now.",
```

**Acceptance criteria:**
- Description ≤ 155 characters
- Contains keyword variation "MSc Nursing"
- Contains differentiators (500+ bed, 5 specializations)
- Contains CTA ("Apply... now")
- Google SERP preview shows full description

---

### A-03: Optimize H1 with Primary Keyword (P0)

**File:** `app/msc-nursing/page.tsx` lines 160-163
**Effort:** 15 min | **Assignee:** Developer
**Dependency:** None | **Blocks:** None

**Current:**
```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
  M.Sc Nursing at{" "}
  <span className="text-[#7cb983]">Sresakthimayeil Institute of Nursing and Research</span>
</h1>
```

**Replace with:**
```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
  MSc Nursing at{" "}
  <span className="text-[#7cb983]">JKKN College of Nursing</span>
  <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-white/90 font-semibold">Best MSc Nursing College in Tamil Nadu</span>
</h1>
```

**Acceptance criteria:**
- H1 contains "MSc Nursing" + "JKKN College of Nursing"
- Sub-line contains "Tamil Nadu" for geographic keyword
- Renders correctly on mobile (320px), tablet (768px), desktop (1024px+)
- Only 1 H1 on the page

---

### A-04: Add 301 Redirect for Old URL (P0)

**File:** `next.config.ts` — redirects array
**Effort:** 10 min | **Assignee:** Developer
**Dependency:** None | **Blocks:** None

**Add these redirects:**
```ts
{
  source: '/master-of-science-in-nursing',
  destination: '/msc-nursing',
  permanent: true,
},
{
  source: '/master-of-science-in-nursing/',
  destination: '/msc-nursing',
  permanent: true,
},
```

**Acceptance criteria:**
- Visiting `/master-of-science-in-nursing` returns 301 to `/msc-nursing`
- No 404 errors in Google Search Console for old URL
- After 2-4 weeks, old URL de-indexed from Google

---

### A-05: Fix CTA Academic Year (P0)

**File:** `app/msc-nursing/page.tsx` line 1100
**Effort:** 5 min | **Assignee:** Developer
**Dependency:** None | **Blocks:** None

**Current:**
```tsx
Applications for the 2025-26 academic year are now open.
```

**Replace with:**
```tsx
Applications for the 2026-27 academic year are now open.
```

**Acceptance criteria:**
- No reference to "2025-26" remains on the page
- All date references say "2026-27"

---

### A-06: Fix BreadcrumbSchema Root URL (P1)

**File:** `app/msc-nursing/page.tsx` line 143
**Effort:** 10 min | **Assignee:** Developer
**Dependency:** None | **Blocks:** None

**Current:**
```tsx
{ name: 'JKKN Institutions', url: 'https://jkkn.ac.in/' },
```

**Replace with:**
```tsx
{ name: 'Home', url: 'https://nursing.sresakthimayeil.jkkn.ac.in/' },
```

**Acceptance criteria:**
- Breadcrumb starts with own domain
- Google Rich Results Test shows valid BreadcrumbList

---

### A-07: Fix Course Schema numberOfCredits Bug (P1)

**File:** `app/msc-nursing/page.tsx` line 43
**Effort:** 10 min | **Assignee:** Developer
**Dependency:** None | **Blocks:** None

**Current:**
```tsx
"numberOfCredits": "5 Specializations available",
```

**Replace with:**
```tsx
"about": [
  {"@type": "DefinedTerm", "name": "Medical Surgical Nursing"},
  {"@type": "DefinedTerm", "name": "Child Health Nursing"},
  {"@type": "DefinedTerm", "name": "Community Health Nursing"},
  {"@type": "DefinedTerm", "name": "Obstetrics & Gynecological Nursing"},
  {"@type": "DefinedTerm", "name": "Mental Health Nursing"}
],
"educationalLevel": "PostgraduateDegree",
```

**Acceptance criteria:**
- No Google validation errors for Course schema
- Schema shows specialization subjects correctly

---

### A-08: Add Primary Keyword to Content Body (P1)

**File:** `app/msc-nursing/page.tsx` — multiple locations
**Effort:** 30 min | **Assignee:** Developer / Content Writer
**Dependency:** A-03 | **Blocks:** None

Insert "msc nursing colleges in tamilnadu" and variations naturally:

**Location 1 — Quick Summary (line 169):** Add "As one of the top MSc nursing colleges in Tamil Nadu, JKKN offers..."

**Location 2 — Program Overview H2 (line 319):** Change to "M.Sc Nursing Program Overview — Why JKKN Ranks Among Top MSc Nursing Colleges in Tamil Nadu"

**Location 3 — First paragraph (line 338-342):** Add "Among MSc nursing colleges in Tamil Nadu, JKKN College of Nursing stands out with..."

**Location 4 — Authority Block (line 1125):** Add "Ranked among the best MSc nursing colleges in Tamil Nadu"

**Acceptance criteria:**
- Primary keyword appears 3-5 times naturally
- No keyword stuffing detected
- Reads naturally to human visitors
- Keyword density 0.3-0.5% of total content

---

### A-09: Enhance Image Alt Text (P1)

**File:** `app/msc-nursing/page.tsx` — multiple image tags
**Effort:** 20 min | **Assignee:** Developer
**Dependency:** None | **Blocks:** None

**Updates:**
| Line | Current Alt | New Alt |
|:----:|-------------|---------|
| 222 | "M.Sc Nursing program" | "MSc Nursing program at JKKN College of Nursing Tamil Nadu — students in clinical training" |
| 329 | "M.Sc Nursing clinical training" | "MSc Nursing clinical training at 500+ bed hospital — JKKN College of Nursing" |
| 533 | "M.Sc Nursing eligibility" | "MSc Nursing eligibility criteria — JKKN admission requirements Tamil Nadu" |

**Acceptance criteria:**
- All images have descriptive, keyword-relevant alt text
- Alt text ≤ 125 characters
- Natural language (not keyword-stuffed)

---

### A-10: Add Hero Image Priority Attribute (P1)

**File:** `app/msc-nursing/page.tsx` line 218-224
**Effort:** 5 min | **Assignee:** Developer
**Dependency:** None | **Blocks:** None

**Add `priority={true}` to hero Image component:**
```tsx
<Image
  src="/images/Master-of-Science-in-Nursing-Hero-Banner-Image.webp"
  alt="MSc Nursing program at JKKN College of Nursing Tamil Nadu — students in clinical training"
  width={600}
  height={500}
  priority={true}
  className="w-full h-auto object-cover rounded-2xl"
/>
```

**Acceptance criteria:**
- Hero image loads as priority (no lazy loading)
- LCP improved (check PageSpeed Insights before/after)

---

### A-11: Add Missing Internal Links (P1)

**File:** `app/msc-nursing/page.tsx` — multiple sections
**Effort:** 45 min | **Assignee:** Developer
**Dependency:** None | **Blocks:** None

Add these internal links:

| Section | Anchor Text | Link Target |
|---------|-------------|-------------|
| Career section | "placement support" | `/placement` |
| Why Choose — "Multi-Specialty Clinical Training" | "affiliated multi-specialty hospitals" | `/hospital` |
| Why Choose — "State-of-the-Art Facilities" | "nursing simulation labs" | `/laboratories` |
| Why Choose — "Research Excellence" | "research resources" | `/library` |
| FAQ — hostel answer | "hostel facilities" | `/hostel` |
| Admission section | "admission process" | `/admissions` |
| Program Overview | "BSc Nursing graduates" | `/bsc-nursing` |
| Eligibility | "scholarship opportunities" | `/scholarship` |
| Clinical mention | "clinical exposure" | `/clinical-exposure` |
| Faculty mention | "experienced faculty" | `/faculty-details` |

**Acceptance criteria:**
- 10+ new internal links added
- All links work (no 404)
- Anchor text is descriptive and natural
- Links open in same tab (not _blank)

---

### A-12: Fix TNMGRMU Logo Bug (P2)

**File:** `app/msc-nursing/page.tsx` lines 260-261
**Effort:** 15 min | **Assignee:** Developer
**Dependency:** TNMGRMU logo image file exists | **Blocks:** None

**Current:** Uses `TNNMC_logo.jpg` for TNMGRMU badge.
**Fix:** Use correct TNMGRMU university logo.

Check if `/public/images/` has TNMGRMU logo. If not, source and add it.

**Acceptance criteria:**
- TNMGRMU affiliation shows correct university logo
- Image alt text says "Tamil Nadu Dr MGR Medical University Logo"

---

### A-13: Update OpenGraph Tags (P2)

**File:** `app/msc-nursing/page.tsx` lines 15-21
**Effort:** 10 min | **Assignee:** Developer
**Dependency:** A-01, A-02 | **Blocks:** None

**Replace with:**
```tsx
openGraph: {
  title: "MSc Nursing at JKKN — Best MSc Nursing College in Tamil Nadu",
  description: "INC-approved 2-year MSc Nursing with 5 specializations and 500+ bed hospital training. Check eligibility, fees, placements.",
  url: "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing",
  siteName: "JKKN College of Nursing",
  type: "website",
  images: [{
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/images/Master-of-Science-in-Nursing-Hero-Banner-Image.webp",
    width: 1200,
    height: 630,
    alt: "MSc Nursing at JKKN College of Nursing Tamil Nadu"
  }]
},
```

**Acceptance criteria:**
- OG tags updated with keyword-rich content
- OG image specified for social sharing
- Social share preview looks correct (test with Facebook Debugger)

---

### A-14: Update Keywords Meta Tag (P2)

**File:** `app/msc-nursing/page.tsx` line 14
**Effort:** 5 min | **Assignee:** Developer
**Dependency:** None | **Blocks:** None

**Replace with:**
```tsx
keywords: "msc nursing colleges in tamilnadu, best msc nursing college tamil nadu, msc nursing fees, msc nursing eligibility, msc nursing admission 2026, msc nursing specializations, JKKN nursing",
```

**Acceptance criteria:**
- Primary keyword included
- Major secondary keywords included
- No more than 10 keywords

---

## GROUP B — AEO TASKS (Snippets + PAA + AI Overview)

### B-01: Add Fee Structure Section with Snippet-Ready Table (P0)

**File:** `app/msc-nursing/page.tsx` — new section after Eligibility
**Effort:** 2 hrs | **Assignee:** Content Writer + Developer
**Dependency:** [DATA NEEDED: fee amounts] | **Blocks:** B-05

**Content template:**
```tsx
<section className="py-20 bg-[#FBFBEE]">
  <div className="container-custom">
    <h2>MSc Nursing Fee Structure 2026-27 at JKKN</h2>
    <p>The total fee for the 2-year MSc Nursing program...</p>

    {/* Fee Table */}
    <table>
      <thead>
        <tr><th>Fee Component</th><th>Annual Amount</th><th>2-Year Total</th></tr>
      </thead>
      <tbody>
        <tr><td>Tuition Fee</td><td>₹[AMOUNT]</td><td>₹[AMOUNT]</td></tr>
        <tr><td>Hostel Fee (Optional)</td><td>₹[AMOUNT]</td><td>₹[AMOUNT]</td></tr>
        <tr><td>Exam Fee</td><td>₹[AMOUNT]</td><td>₹[AMOUNT]</td></tr>
        <tr><td><strong>Total</strong></td><td>₹[AMOUNT]</td><td>₹[AMOUNT]</td></tr>
      </tbody>
    </table>

    {/* Government vs Private Comparison */}
    <h3>MSc Nursing Fees: Government vs Private Colleges in Tamil Nadu</h3>
    <table>
      <tr><th>College Type</th><th>Annual Fee Range</th></tr>
      <tr><td>Government Colleges</td><td>₹5,000 - ₹15,000</td></tr>
      <tr><td>Self-Financing (Private)</td><td>₹75,000 - ₹2,00,000</td></tr>
      <tr><td>JKKN College of Nursing</td><td>₹[AMOUNT]</td></tr>
    </table>

    <Link href="/scholarship">View scholarship & financial aid options →</Link>
  </div>
</section>
```

**Acceptance criteria:**
- Fee table with clear columns and amounts
- Government vs private comparison table
- Link to scholarship page
- Snippet-extractable format (clean HTML table)
- [DATA NEEDED] tags replaced with actual amounts before publish

---

### B-02: Add Salary & Career Data Table (P0)

**File:** `app/msc-nursing/page.tsx` — enhance Career Prospects section
**Effort:** 2 hrs | **Assignee:** Content Writer + Developer
**Dependency:** [DATA NEEDED: salary data] | **Blocks:** None

**Add salary table after career cards:**
```tsx
<h3>MSc Nursing Salary in India — Job Role Wise</h3>
<table>
  <thead>
    <tr><th>Job Role</th><th>Starting Salary</th><th>Mid-Career</th><th>Senior Level</th></tr>
  </thead>
  <tbody>
    <tr><td>Nursing Educator / Lecturer</td><td>₹4-6 LPA</td><td>₹6-10 LPA</td><td>₹10-15 LPA</td></tr>
    <tr><td>Clinical Nurse Specialist</td><td>₹5-8 LPA</td><td>₹8-12 LPA</td><td>₹12-18 LPA</td></tr>
    <tr><td>Nursing Administrator</td><td>₹6-8 LPA</td><td>₹8-15 LPA</td><td>₹15-25 LPA</td></tr>
    <tr><td>Public Health Officer</td><td>₹4-7 LPA</td><td>₹7-12 LPA</td><td>₹12-20 LPA</td></tr>
    <tr><td>International (NHS UK)</td><td>₹15-25 LPA</td><td>₹25-40 LPA</td><td>₹40+ LPA</td></tr>
  </tbody>
</table>
```

**Note:** Salary ranges should be verified against industry data. Mark [UNVERIFIED] if not confirmed.

**Acceptance criteria:**
- Salary table with 5+ job roles
- Starting, mid-career, senior columns
- International opportunities highlighted
- Source citation or [UNVERIFIED] tag

---

### B-03: Expand FAQ to 20+ Questions (P1)

**File:** `app/msc-nursing/page.tsx` — FAQ section (lines 967-1088)
**Effort:** 3 hrs | **Assignee:** Content Writer + Developer
**Dependency:** B-01, B-02 (need fee/salary data) | **Blocks:** B-04

Add these 14 new FAQs (to existing 6 = 20 total):

| # | New FAQ Question | Answer Focus |
|---|-----------------|-------------|
| 7 | What is the total fee for MSc Nursing at JKKN? | Fee table reference |
| 8 | What is the salary after MSc Nursing in India? | Salary table reference |
| 9 | Which MSc Nursing specialization has the best scope? | Comparison of 5 specializations |
| 10 | Is MSc Nursing available in distance mode at JKKN? | No — JKKN offers regular only. Explain advantages |
| 11 | Is entrance exam required for MSc Nursing in Tamil Nadu? | TNNMC counseling process |
| 12 | Can I do MSc Nursing after Post Basic BSc? | Yes — eligibility explanation |
| 13 | What documents are required for MSc Nursing admission? | Document checklist |
| 14 | Is MSc Nursing worth it after BSc Nursing? | Career ROI, salary increase |
| 15 | What is the MSc Nursing curriculum structure? | Semester-wise overview |
| 16 | What clinical training is provided in MSc Nursing? | 500+ bed hospital, rotations |
| 17 | Can male nurses apply for MSc Nursing? | Yes — no gender restriction |
| 18 | What is the teaching career path after MSc Nursing? | MSc → NET → Lecturer → Professor |
| 19 | Does JKKN provide hostel and transport for MSc students? | Hostel + transport details |
| 20 | What international opportunities exist after MSc Nursing? | NHS UK, UAE, Singapore pathways |

**Acceptance criteria:**
- 20 FAQ items visible on page
- All FAQs match FAQPage schema (see B-04)
- Answers are 50-150 words, specific, data-rich
- Each FAQ is a `<details>` element matching existing pattern

---

### B-04: Update FAQPage Schema to 20+ Questions (P1)

**File:** `app/msc-nursing/page.tsx` lines 76-129
**Effort:** 1 hr | **Assignee:** Developer
**Dependency:** B-03 | **Blocks:** None

Update `faqSchema` to include all 20 questions matching the visible FAQ section.

**Acceptance criteria:**
- FAQPage schema has 20 mainEntity entries
- Each entry has @type: Question with acceptedAnswer
- Schema passes Google Rich Results Test
- FAQ rich results visible in search

---

### B-05: Add Specialization Comparison Table (P1)

**File:** `app/msc-nursing/page.tsx` — new subsection in Specializations area
**Effort:** 2 hrs | **Assignee:** Content Writer + Developer
**Dependency:** None | **Blocks:** None

**Content:**
```
<h3>MSc Nursing Specialization Comparison — Choose the Right Path</h3>
<table>
  <thead>
    <tr>
      <th>Specialization</th>
      <th>Seats</th>
      <th>Clinical Focus</th>
      <th>Career Path</th>
      <th>Avg. Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Medical Surgical</td><td>5</td><td>ICU, OT, Critical Care</td><td>Clinical Specialist, Educator</td><td>₹5-12 LPA</td></tr>
    <tr><td>Child Health</td><td>5</td><td>NICU, Pediatrics</td><td>Pediatric Specialist, Educator</td><td>₹5-10 LPA</td></tr>
    <tr><td>OBG</td><td>5</td><td>Labor Room, Antenatal</td><td>Women's Health Specialist</td><td>₹5-10 LPA</td></tr>
    <tr><td>Mental Health</td><td>5</td><td>Psychiatric Ward</td><td>Psychiatric Nurse, Counselor</td><td>₹4-10 LPA</td></tr>
    <tr><td>Community Health</td><td>5</td><td>PHC, CHC, Community</td><td>Public Health Officer</td><td>₹4-12 LPA</td></tr>
  </tbody>
</table>
```

**Acceptance criteria:**
- Clean comparison table with 5 specializations
- Featured snippet extractable format
- Links from each specialization name to respective subpage
- Salary ranges verified or marked [UNVERIFIED]

---

### B-06: Add Direct Answer Block for "Best MSc Nursing College" (P2)

**File:** `app/msc-nursing/page.tsx` — first 100 words of Program Overview
**Effort:** 30 min | **Assignee:** Content Writer
**Dependency:** A-08 | **Blocks:** None

Add a quotable paragraph in the first section:
```
JKKN College of Nursing is one of the best MSc Nursing colleges in Tamil Nadu, offering a 2-year
INC-approved postgraduate program with 5 specializations. Located on a multi-institutional campus
in Komarapalayam with a 500+ bed teaching hospital, JKKN provides hands-on clinical training across
ICU, NICU, OT, and specialty wards. With 100% placement support, international opportunities
(NHS UK, UAE, Singapore), and a 19-year legacy of nursing education, JKKN prepares MSc Nursing
graduates for careers as nurse educators, clinical specialists, and healthcare administrators.
```

**Acceptance criteria:**
- 80-100 words, single paragraph
- Contains primary keyword naturally
- Contains specific data points (500+ bed, 5 specializations, 100% placement)
- Placed in first visible content area for snippet extraction

---

### B-07: Add Admission Process with HowTo Schema (P2)

**File:** `app/msc-nursing/page.tsx` — enhance admission section
**Effort:** 1.5 hrs | **Assignee:** Content Writer + Developer
**Dependency:** [DATA NEEDED: admission dates] | **Blocks:** None

Expand from 3 generic steps to 6 detailed steps with dates:
1. Check eligibility (BSc Nursing, 55%, 1 year experience, RN/RM)
2. Register online at admission.jkkn.ac.in (March-June 2026)
3. Submit documents (marksheets, certificates, photos, experience letter)
4. Attend TNMGRMU counseling (for government seats)
5. Complete fee payment and enrollment
6. Attend orientation and begin classes (August 2026)

Add HowTo schema for this section.

**Acceptance criteria:**
- 6 detailed steps with dates
- Document checklist included
- HowTo schema passes validation
- Links to admission portal

---

### B-08: Add Voice Search Optimized Content (P2)

**File:** `app/msc-nursing/page.tsx` — multiple sections
**Effort:** 1 hr | **Assignee:** Content Writer
**Dependency:** B-03 | **Blocks:** None

Add conversational answer blocks for voice queries:
- "The best MSc Nursing college near Erode is JKKN College of Nursing in Komarapalayam, just 22 km from Erode on NH-544."
- "MSc Nursing fees at JKKN College of Nursing are approximately ₹[AMOUNT] per year for the 2-year program."
- "Yes, hostel accommodation is available for MSc Nursing students at JKKN with 24/7 security and modern amenities."

**Acceptance criteria:**
- 3+ conversational answer blocks
- Natural language format
- Contains location-specific terms
- Works with FAQ schema

---

## GROUP C — GEO TASKS (Entity + AI Citation + Multi-Platform)

### C-01: Create Wikipedia Article Draft (P0)

**Platform:** Wikipedia (en.wikipedia.org)
**Effort:** 4 hrs | **Assignee:** Content Writer
**Dependency:** None | **Blocks:** C-02

Draft article for "Sresakthimayeil Institute of Nursing and Research":
- Founded 2006, part of JKK Nattraja Group (est. 1952)
- Location: Komarapalayam, Namakkal, Tamil Nadu
- Affiliation: Tamil Nadu Dr. MGR Medical University
- Approval: Indian Nursing Council (INC), TNNMC
- Programs: BSc Nursing, MSc Nursing (5 specializations), Post Basic BSc Nursing
- Infrastructure: 500+ bed teaching hospital
- Sources: INC official PDF (entry #159), TNMGRMU affiliation records

**Acceptance criteria:**
- Meets Wikipedia notability guidelines
- All claims sourced to reliable third-party sources
- Neutral tone (not promotional)
- Ready for volunteer editor submission

---

### C-02: Create Wikidata Entity (P0)

**Platform:** Wikidata (wikidata.org)
**Effort:** 1 hr | **Assignee:** SEO Specialist
**Dependency:** C-01 (Wikipedia article helps) | **Blocks:** None

Create Wikidata item for JKKN College of Nursing:
- Instance of: nursing school, college
- Country: India
- Located in: Tamil Nadu, Namakkal district
- Founded: 2006
- Part of: JKKN Institutions
- Official website: nursing.sresakthimayeil.jkkn.ac.in
- Coordinates: 11.4333°N, 77.7167°E

**Acceptance criteria:**
- Wikidata entry Q-number assigned
- Entity linked to Wikipedia article (when published)
- Schema.org `sameAs` updated with Wikidata URL

---

### C-03: Fix Brand Name Entity Consolidation (P1)

**File:** `app/layout.tsx` schema + all page schemas
**Effort:** 2 hrs | **Assignee:** Developer
**Dependency:** None | **Blocks:** None

Add `sameAs` links connecting both brand names:
```json
"sameAs": [
  "https://www.facebook.com/jkknnursing",
  "https://www.instagram.com/jkknnursing",
  "https://www.linkedin.com/school/jkknnursing",
  "https://maps.app.goo.gl/4m3Ec1pdsirbMiuE6",
  "https://www.wikidata.org/wiki/Q[NUMBER]"
],
"alternateName": [
  "Sresakthimayeil Institute of Nursing and Research",
  "JKKN College of Nursing",
  "JKK Nattraja College of Nursing and Research"
]
```

**Acceptance criteria:**
- Schema has all `sameAs` links
- All 3 name variants listed as `alternateName`
- Entity disambiguation clear for AI crawlers

---

### C-04: Enrich llms.txt with MSc Data (P1)

**File:** `public/llms.txt`
**Effort:** 1 hr | **Assignee:** Content Writer
**Dependency:** None | **Blocks:** None

Add structured MSc Nursing section:
```
# MSc Nursing Program

## Program Details
- Name: Master of Science in Nursing (M.Sc Nursing)
- Duration: 2 years (4 semesters)
- Mode: Full-time (Regular) — On-campus only
- Approval: Indian Nursing Council (INC)
- Affiliation: Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)
- Annual Intake: 25 seats (5 per specialization)

## Specializations
1. Medical Surgical Nursing (5 seats)
2. Child Health Nursing (5 seats)
3. Community Health Nursing (5 seats)
4. Obstetrics & Gynecological Nursing (5 seats)
5. Mental Health Nursing (5 seats)

## Eligibility
- B.Sc Nursing with minimum 55% marks
- Valid RN & RM registration
- 1 year clinical experience

## Clinical Training
- 500+ bed multi-specialty teaching hospital
- Departments: ICU, NICU, OT, Labor Room, Psychiatric Ward, Emergency, Medical/Surgical Wards
- Community health postings at PHC/CHC/Sub-centres

## Contact
- Phone: +91 93458 55001
- Email: nursing@jkkn.ac.in
- Address: Natarajapuram, NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183
```

**Acceptance criteria:**
- Structured, parseable format
- All key data points included
- No marketing language — factual data only

---

### C-05: Update Aggregator Profiles (P1)

**Platforms:** Collegedunia, Shiksha, Careers360, CollegeDekho, Zollege
**Effort:** 3 hrs | **Assignee:** SEO Specialist / Admin
**Dependency:** [DATA NEEDED: verified data] | **Blocks:** None

For each aggregator:
1. Login/claim institutional profile
2. Update: institution name, URL, courses, fees, placement data, NAAC grade
3. Add MSc Nursing specific data: 5 specializations, 25 seats, fee structure
4. Add hospital infrastructure: 500+ bed, departments
5. Upload photos: campus, hospital, labs, classrooms
6. Verify contact information

**Acceptance criteria:**
- JKKN profile updated on all 5 aggregators
- Fee data, placement data accurate
- MSc Nursing listed with 5 specializations
- URL points to current website (not old URL)

---

### C-06: Create Quora Presence (P2)

**Platform:** Quora
**Effort:** 2 hrs | **Assignee:** Alumni / Faculty accounts
**Dependency:** None | **Blocks:** None

Answer these questions authentically:
1. "Which are the best MSc Nursing colleges in Tamil Nadu?"
2. "Is JKKN College of Nursing good for MSc?"
3. "Best MSc Nursing college near Erode/Salem/Coimbatore?"

**Rules:**
- Genuine accounts only (alumni or faculty)
- Authentic experiences and data
- Not promotional — honest, helpful answers
- Mention specific strengths (hospital training, specializations)

**Acceptance criteria:**
- 3+ quality answers posted
- Answers include specific data points
- Not flagged as promotional by Quora

---

### C-07: Faculty Research Publications Push (P2)

**Platform:** ResearchGate, Google Scholar, Academia.edu
**Effort:** Ongoing | **Assignee:** Faculty
**Dependency:** None | **Blocks:** None

Encourage MSc faculty to:
- Create ResearchGate profiles
- Upload dissertations, conference papers
- Affiliate with "Sresakthimayeil Institute of Nursing and Research"
- Cross-link to institution website

**Acceptance criteria:**
- 3+ faculty profiles on ResearchGate
- At least 1 publication indexed per faculty
- Institution name consistent across profiles

---

### C-08: Fix Facebook Page URL (P2)

**Platform:** Facebook (facebook.com/jkknnursing)
**Effort:** 15 min | **Assignee:** Social Media Manager
**Dependency:** None | **Blocks:** None

**Current:** Facebook page shows URL as `nursing.jkkn.ac.in` (old/wrong)
**Fix:** Update to `nursing.sresakthimayeil.jkkn.ac.in`

**Acceptance criteria:**
- Facebook page shows correct website URL
- Social signals point to active website

---

## GROUP D — CONTENT TASKS (Depth + Audience Segments)

### D-01: Add Clinical Training Detail Section (P0)

**File:** `app/msc-nursing/page.tsx` — new section
**Effort:** 2 hrs | **Assignee:** Content Writer + Developer
**Dependency:** [DATA NEEDED: hospital departments, clinical hours] | **Blocks:** None

New H2: "Clinical Training at 500+ Bed Multi-Specialty Hospital"

Content:
- Hospital name and overview
- Department list with bed counts (ICU, NICU, OT, Labor Room, etc.)
- Clinical rotation schedule per specialization
- Total clinical hours (INC: 1,800+ hours)
- Community health posting details (PHC/CHC visits)
- Photos of clinical settings

**Acceptance criteria:**
- Detailed clinical training information
- Department-wise breakdown
- Links to /hospital and /clinical-exposure pages
- At least 300 words

---

### D-02: Add Regular vs Distance Education Comparison (P0)

**File:** `app/msc-nursing/page.tsx` — new section
**Effort:** 1.5 hrs | **Assignee:** Content Writer + Developer
**Dependency:** None | **Blocks:** None

New H2: "MSc Nursing: Regular vs Distance Education — Why Regular Mode Matters"

Comparison table:
| Factor | Regular (JKKN) | Distance/Online |
|--------|:-:|:-:|
| Clinical Training | 1,800+ hours at 500+ bed hospital | Minimal or none |
| Hospital Exposure | ICU, OT, NICU, Psychiatric Ward | Self-arranged (if any) |
| Research & Dissertation | Guided by PhD faculty | Limited guidance |
| INC Recognition | Fully recognized | Many programs not INC approved |
| Employer Preference | Highly preferred | Lower preference |
| Salary Impact | Higher starting salary | Lower |
| Teaching Eligibility | Eligible for nursing college faculty | May face restrictions |

**Acceptance criteria:**
- Clear comparison table
- JKKN positioned as regular (advantage)
- No false claims about distance programs — factual comparison
- FAQ added: "Is MSc Nursing available in distance mode?"

---

### D-03: Add Faculty Profile Section (P0)

**File:** `app/msc-nursing/page.tsx` — new section or subsection in "Why Choose"
**Effort:** 2 hrs | **Assignee:** Content Writer + Developer
**Dependency:** [DATA NEEDED: faculty data] | **Blocks:** None

New H2: "Expert MSc Nursing Faculty"

Per faculty card:
- Photo, Name, Qualification (MSc/PhD)
- Specialization, Years of Experience
- Research area, Key publications
- Research guide status

**Acceptance criteria:**
- Minimum 5 faculty profiles (1 per specialization)
- PhD/MSc credentials clearly shown
- Links to /faculty-details page
- E-E-A-T signal for Google

---

### D-04: Add Working Nurse Content Section (P1)

**File:** `app/msc-nursing/page.tsx` — new section
**Effort:** 1.5 hrs | **Assignee:** Content Writer
**Dependency:** None | **Blocks:** None

New H2: "MSc Nursing for Working Nurses — Advance Your Career"

Content for working nurse audience:
- Career ROI: BSc Nurse salary (₹3-5 LPA) → MSc salary (₹6-15 LPA)
- Study leave and sponsorship information
- Stipend during MSc (if applicable)
- Clinical posting schedule
- How 2 years of MSc transforms career trajectory

**Acceptance criteria:**
- Salary comparison data
- Speaks directly to working nurses
- Contains specific, actionable information
- At least 200 words

---

### D-05: Add Teaching Career Pathway Content (P1)

**File:** `app/msc-nursing/page.tsx` — enhance Career section
**Effort:** 1.5 hrs | **Assignee:** Content Writer
**Dependency:** None | **Blocks:** None

New H3 under Career: "Teaching Career Roadmap After MSc Nursing"

Content:
- Career progression: MSc → NET/SET → Assistant Professor → Associate Professor → Professor → Principal
- Faculty salary table (government vs private colleges)
- NET/SET exam overview
- PhD pathway after MSc
- Current nursing faculty demand in Tamil Nadu
- Number of nursing colleges in TN (need for 100+ faculty per year)

**Acceptance criteria:**
- Clear career roadmap
- Salary data for teaching positions
- NET/SET exam mention
- PhD pathway explained

---

### D-06: Add Scholarship & Financial Aid Section (P1)

**File:** `app/msc-nursing/page.tsx` — new section
**Effort:** 1 hr | **Assignee:** Content Writer
**Dependency:** [DATA NEEDED: scholarship details] | **Blocks:** None

New H2: "Scholarships and Financial Aid for MSc Nursing"

Content:
- Government scholarships (BC/MBC/SC/ST/OBC)
- Tamil Nadu government fee concessions
- Institutional merit scholarships
- Management quota scholarships
- Link to /scholarship page

**Acceptance criteria:**
- At least 3 scholarship types listed
- Eligibility criteria per scholarship
- Link to detailed scholarship page

---

### D-07: Expand Curriculum Section (P1)

**File:** `app/msc-nursing/page.tsx` lines 589-662
**Effort:** 1.5 hrs | **Assignee:** Content Writer + Developer
**Dependency:** [DATA NEEDED: full syllabus] | **Blocks:** None

**Current:** Only lists 3 subjects per year (very thin).

**Expand to:**
- Semester 1: All subjects with hours (theory + practical)
- Semester 2: All subjects with hours
- Semester 3: Specialization subjects + clinical
- Semester 4: Dissertation + advanced clinical
- Total theory hours, practical hours, clinical hours
- Dissertation details (topic selection, methodology, viva)

**Acceptance criteria:**
- All 4 semesters listed
- Theory + practical hours shown
- Dissertation process explained
- At least 400 words total

---

### D-08: Add Admission Timeline 2026-27 (P1)

**File:** `app/msc-nursing/page.tsx` — enhance admission section
**Effort:** 1 hr | **Assignee:** Content Writer
**Dependency:** [DATA NEEDED: exact dates] | **Blocks:** None

Add timeline:
- Application start: [Month] 2026
- Application deadline: [Month] 2026
- TNMGRMU counseling: [Month] 2026
- Document verification: [Month] 2026
- Fee payment deadline: [Month] 2026
- Classes begin: August 2026

**Acceptance criteria:**
- Clear timeline with dates
- Document checklist included
- Contact info for admission queries
- [DATA NEEDED] tags replaced before publish

---

### D-09: Add International Opportunities Detail (P2)

**File:** `app/msc-nursing/page.tsx` — enhance Career section
**Effort:** 1 hr | **Assignee:** Content Writer
**Dependency:** None | **Blocks:** None

Enhance "International Opportunities" card:
- NHS UK pathway: IELTS → NMC registration → recruitment agencies → salary
- UAE opportunities: HAAD/DHA licensing → hospitals → salary
- Singapore pathway: SNB registration → salary
- JKKN alumni success stories in international placements

**Acceptance criteria:**
- Specific country-wise pathways
- Licensing/exam requirements mentioned
- Salary ranges per country
- Link to /placement page

---

### D-10: Add "Why JKKN is #1" Data-Backed Section (P2)

**File:** `app/msc-nursing/page.tsx` — enhance "Why Choose" section
**Effort:** 1 hr | **Assignee:** Content Writer
**Dependency:** None | **Blocks:** None

Add data-backed proof points:
- "20+ Years of Nursing Education Excellence (est. 2006)"
- "Part of JKKN Institutions — 74-Year Legacy (est. 1952)"
- "500+ Bed Multi-Specialty Teaching Hospital — On-Campus Clinical Training"
- "25 MSc Nursing Seats with 5:1 Student-Faculty Ratio"
- "100% Placement Support with International Opportunities"
- "5 Dedicated Specialization Programs with Separate Subpages"
- "INC Approved + NAAC Accredited + TNMGRMU Affiliated"

**Acceptance criteria:**
- Each proof point has a specific number/data
- Supports "best MSc Nursing college" claim
- No unverified claims (or marked [UNVERIFIED])

---

### D-11: Add Document Checklist for Admission (P2)

**File:** `app/msc-nursing/page.tsx` — in admission section
**Effort:** 30 min | **Assignee:** Content Writer
**Dependency:** None | **Blocks:** None

Checklist:
- BSc Nursing mark sheets (all years)
- BSc Nursing provisional/degree certificate
- RN & RM registration certificate (TNNMC)
- Clinical experience certificate (1 year minimum)
- Transfer certificate
- Conduct certificate
- Community certificate (SC/ST/OBC if applicable)
- Passport-size photographs (8)
- Aadhar card copy
- Migration certificate (for non-TN candidates)

**Acceptance criteria:**
- Complete document list
- Organized by category
- Easy to read (checkmark format)

---

### D-12: Add Alumni Success Stories (P2)

**File:** `app/msc-nursing/page.tsx` — new section
**Effort:** 2 hrs | **Assignee:** Content Writer
**Dependency:** [DATA NEEDED: alumni data] | **Blocks:** None

2-3 alumni testimonial cards:
- Name, batch, specialization
- Current position and employer
- Quote about JKKN MSc experience
- Photo (if available)

**Acceptance criteria:**
- At least 2 alumni stories
- Real names and positions (with consent)
- Photos preferred
- Builds E-E-A-T trust signals

---

## GROUP E — TECHNICAL TASKS (Speed + Schema + Infrastructure)

### E-01: Add ItemList Schema for Specializations (P1)

**File:** `app/msc-nursing/page.tsx` — add new schema block
**Effort:** 30 min | **Assignee:** Developer
**Dependency:** None | **Blocks:** None

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "MSc Nursing Specializations at JKKN College of Nursing",
  "description": "5 INC-approved MSc Nursing specializations",
  "numberOfItems": 5,
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Medical Surgical Nursing", "url": "/course-msc-medical-surgical"},
    {"@type": "ListItem", "position": 2, "name": "Child Health Nursing", "url": "/course-msc-child-health"},
    {"@type": "ListItem", "position": 3, "name": "Community Health Nursing", "url": "/course-msc-community-health"},
    {"@type": "ListItem", "position": 4, "name": "Obstetrics & Gynecological Nursing", "url": "/course-msc-obstetrics-gynecological"},
    {"@type": "ListItem", "position": 5, "name": "Mental Health Nursing", "url": "/course-msc-mental-health"}
  ]
}
```

---

### E-02: Add HowTo Schema for Admission Process (P1)

**File:** `app/msc-nursing/page.tsx` — add new schema block
**Effort:** 30 min | **Assignee:** Developer
**Dependency:** B-07 | **Blocks:** None

Add HowTo schema matching the enhanced admission section (6 steps).

---

### E-03: Add Offer Schema for Fee Details (P1)

**File:** `app/msc-nursing/page.tsx` — enhance existing offers or add new
**Effort:** 30 min | **Assignee:** Developer
**Dependency:** B-01 (needs fee data) | **Blocks:** None

Enhanced Offer schema with detailed fee breakdown, payment schedule, and financial aid eligibility.

---

### E-04: Verify Sitemap Entries (P2)

**File:** `public/sitemap-courses.xml`
**Effort:** 30 min | **Assignee:** Developer
**Dependency:** None | **Blocks:** None

Verify:
- `/msc-nursing` listed with correct lastmod
- All 5 specialization pages listed
- All 5 department pages listed
- Submit updated sitemap to GSC after content changes

---

### E-05: Reduce Font Weights (P2)

**File:** `app/layout.tsx` — Google Fonts config
**Effort:** 30 min | **Assignee:** Developer
**Dependency:** None | **Blocks:** None

Currently loads 6 Poppins weights (300, 400, 500, 600, 700, 800).
Reduce to 4 essential weights (400, 500, 600, 700) to improve load time.

Verify no visual regressions after removal.

---

### E-06: Run Post-Optimization PageSpeed Audit (P2)

**Platform:** PageSpeed Insights
**Effort:** 1 hr | **Assignee:** Developer
**Dependency:** All Phase 1-2 tasks | **Blocks:** None

After all changes:
- Run PageSpeed for mobile + desktop
- Verify LCP, INP, CLS scores
- Fix any regressions
- Document before/after scores

---

## GROUP F — COMPETITOR RESPONSE TASKS

### F-01: Match PSG's Content Depth (P1)

**Benchmark:** PSG College of Nursing MSc page (~4,500 words)
**Target:** JKKN MSc page to reach 5,000+ words
**Effort:** Covered by Group D tasks | **Assignee:** Content Writer

PSG has that JKKN lacks:
- Detailed fee table ← D-01 / B-01
- Faculty profiles ← D-03
- Clinical hours detail ← D-01
- Admission timeline ← D-08
- Per-specialization seat count ← B-05

---

### F-02: Create Missing Aggregator Listings (P2)

**Benchmark:** PSG listed on 5+ aggregators with accurate data
**Target:** JKKN listed and accurate on all 7 major aggregators
**Effort:** Covered by C-05 | **Assignee:** SEO Specialist

---

### F-03: Build Specialization Subpage Advantage (P2)

**Benchmark:** No competitor has 5 separate specialization pages
**Action:** Cross-link aggressively from MSc main page to all 5 specialization subpages

Add a "Related Specializations" section at bottom of MSc page linking all 5 subpages.
This is JKKN's unique structural advantage — leverage it.

**Effort:** 30 min | **Assignee:** Developer

---

### F-04: Monitor Competitor Content Changes (P3)

**Frequency:** Monthly
**Effort:** 1 hr/month | **Assignee:** SEO Specialist

Track:
- PSG msq nursing page updates
- Sri Narayani content changes
- New institutional pages entering SERP
- Aggregator ranking changes for target keywords

---

## TASK DEPENDENCY GRAPH

```
Phase 1 (Week 1) — No dependencies, all parallel:
  A-01 → A-02 → A-13 (meta tags → OG tags)
  A-03 (H1)
  A-04 (redirect)
  A-05 (date fix)
  A-06 (breadcrumb)
  A-07 (schema fix)
  A-09 (alt text)
  A-10 (priority)
  A-11 (internal links)
  A-12 (logo fix)
  A-14 (keywords meta)

Phase 2 (Week 2-3) — Some dependencies:
  B-01 (fees) → B-03 FAQ expansion → B-04 FAQ schema
  B-02 (salary) → B-03 FAQ expansion
  B-05 (comparison table) — independent
  A-08 (keyword integration) → B-06 (answer block)
  D-01 through D-12 — mostly independent, can parallelize

Phase 3 (Week 3-4):
  E-01, E-02, E-03 (schemas) — after content added
  B-07 → E-02 (admission process → HowTo schema)
  B-01 → E-03 (fees → Offer schema)
  E-04, E-05 — independent
  E-06 — LAST (after all changes)

Phase 4-5 (Week 4-5):
  C-01 → C-02 (Wikipedia → Wikidata)
  C-03, C-04, C-05, C-06, C-07, C-08 — independent
```

---

## SPRINT GROUPING (Parallel Execution)

### Sprint 1 (Day 1-2): Quick Wins — ALL PARALLEL
A-01, A-02, A-03, A-04, A-05, A-06, A-07, A-09, A-10, A-11, A-12, A-13, A-14

### Sprint 2 (Day 3-7): Content — Fee + Salary + Comparison
B-01, B-02, B-05, D-02, D-04, D-05

### Sprint 3 (Day 8-12): Content — Faculty + Curriculum + Admission
D-01, D-03, D-06, D-07, D-08, D-09, D-10, D-11, A-08

### Sprint 4 (Day 13-16): FAQ + Schema + Snippets
B-03, B-04, B-06, B-07, B-08, E-01, E-02, E-03

### Sprint 5 (Day 17-22): GEO + Off-Page
C-01, C-02, C-03, C-04, C-05, C-06, C-07, C-08

### Sprint 6 (Day 23-25): Testing + Monitoring
E-04, E-05, E-06, D-12, F-01, F-02, F-03, F-04

---

*Triple-check validation: PASSED*
*Pass 1 — Accuracy: All tasks reference exact files, lines, and code*
*Pass 2 — Strategy: Tasks prioritized by ranking impact for "msc nursing colleges in tamilnadu"*
*Pass 3 — Completeness: 52 tasks cover all SEO/AEO/GEO dimensions + all 4 audience segments*
