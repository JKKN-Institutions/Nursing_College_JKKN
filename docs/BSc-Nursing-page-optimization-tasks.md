# BSc Nursing Page Optimization — TASK DECOMPOSITION

> **Page:** https://nursing.sresakthimayeil.jkkn.ac.in/bsc-nursing
> **Total Tasks:** 52 | **Critical (P0):** 8 | **High (P1):** 18 | **Medium (P2):** 16 | **Low (P3):** 10
> **Task Date:** 2026-04-11

---

## TASK INDEX

| Group | Tasks | Priority Range |
|-------|-------|---------------|
| [SEO Tasks](#seo-tasks) | SEO-01 to SEO-16 | P0-P2 |
| [AEO Tasks](#aeo-tasks) | AEO-01 to AEO-08 | P1-P2 |
| [GEO Tasks](#geo-tasks) | GEO-01 to GEO-08 | P1-P3 |
| [Content Tasks](#content-tasks) | CON-01 to CON-12 | P0-P2 |
| [Technical Tasks](#technical-tasks) | TEC-01 to TEC-05 | P0-P2 |
| [Competitor-Response Tasks](#competitor-response-tasks) | CMP-01 to CMP-03 | P1-P2 |

---

## SEO TASKS

### SEO-01: Fix Title Tag — Primary Keyword Inclusion
- **Priority:** P0 (Critical — ranking blocker)
- **Effort:** 10 minutes
- **Dependency:** None
- **Assignee:** Developer
- **File:** `app/bsc-nursing/layout.tsx` line 4

**Steps:**
1. Open `app/bsc-nursing/layout.tsx`
2. Replace line 4:
```tsx
// OLD (95 chars — FAILS):
title: "B.Sc Nursing at Sresakthimayeil Institute of Nursing and Research | 4-Year INC Approved Program",

// NEW (59 chars — PASSES):
title: "BSc Nursing in Tamil Nadu — JKKN College | INC Approved 2026",
```
3. Update OG title (line 8) and Twitter title (line 24) to match
4. Verify with SERP preview tool

**Acceptance Criteria:**
- [ ] Title tag is ≤60 characters
- [ ] Contains "BSc Nursing" + "Tamil Nadu"
- [ ] Brand name "JKKN" present
- [ ] OG title and Twitter title updated to match

---

### SEO-02: Fix Meta Description — Keyword + CTA
- **Priority:** P0 (Critical — CTR impact)
- **Effort:** 10 minutes
- **Dependency:** None
- **Assignee:** Developer
- **File:** `app/bsc-nursing/layout.tsx` line 5

**Steps:**
1. Replace line 5:
```tsx
// OLD (183 chars — FAILS):
description: "B.Sc Nursing at Sresakthimayeil Institute of Nursing and Research, Komarapalayam. 4-year INC-approved program affiliated to TNMGRMU. Clinical training at 500+ bed hospital. Apply now.",

// NEW (153 chars — PASSES):
description: "Top BSc Nursing college in Tamil Nadu. 4-year INC approved, TNMGRMU affiliated. 500+ bed hospital training from Year 1. 97% placement. Apply for 2026.",
```
2. Update OG description (line 9) and Twitter description (line 25) to match

**Acceptance Criteria:**
- [ ] Description is ≤155 characters
- [ ] Contains "BSc Nursing" + "Tamil Nadu"
- [ ] Includes USP (500+ bed hospital, 97% placement)
- [ ] Includes CTA ("Apply for 2026")

---

### SEO-03: Fix NEET Contradiction
- **Priority:** P0 (Critical — E-E-A-T destroyer)
- **Effort:** 15 minutes
- **Dependency:** User confirmation on NEET policy
- **Assignee:** Developer + Admin
- **Files:** `app/bsc-nursing/layout.tsx` line 42 AND `app/bsc-nursing/page.tsx` line 417

**Steps (if NEET IS required):**
1. Update layout.tsx FAQ (line 42):
```tsx
// OLD:
"name": "Is NEET required for B.Sc Nursing at JKKN?",
"acceptedAnswer": { "@type": "Answer", "text": "No, NEET is not required..." }

// NEW:
"name": "Is NEET required for B.Sc Nursing at JKKN?",
"acceptedAnswer": { "@type": "Answer", "text": "Yes, a valid NEET-UG score is required for B.Sc Nursing admission at JKKN College. Admission is based on NEET score + merit. Apply at admission.jkkn.ac.in." }
```
2. Page.tsx eligibility already says NEET required — no change needed

**Steps (if NEET is NOT required):**
1. Keep layout.tsx FAQ as-is
2. Update page.tsx line 417:
```tsx
// OLD:
"Valid NEET-UG score as per current regulatory requirements."

// NEW:
"NEET-UG qualification is not mandatory. Admission is merit-based on 10+2 marks."
```
3. Update page.tsx Course schema (line 64):
```tsx
// Update coursePrerequisites to remove NEET mention
"coursePrerequisites": "10+2 with Physics, Chemistry, Biology — minimum 45% aggregate",
```

**Acceptance Criteria:**
- [ ] Same NEET policy stated in ALL locations (layout.tsx FAQ, page.tsx eligibility, page.tsx schema)
- [ ] No contradictions anywhere on the page
- [ ] User/admin confirmed the correct policy

---

### SEO-04: Consolidate Duplicate Course Schema
- **Priority:** P0 (Critical — schema error risk)
- **Effort:** 20 minutes
- **Dependency:** SEO-03 (NEET fix first)
- **Assignee:** Developer
- **Files:** `app/bsc-nursing/layout.tsx` (keep), `app/bsc-nursing/page.tsx` (remove)

**Steps:**
1. Remove the Course schema block from page.tsx (lines 39-95)
2. Keep the Course schema in layout.tsx (lines 49-87) — it's more comprehensive
3. Merge any unique fields from page.tsx Course into layout.tsx Course:
   - page.tsx has `occupationalCredentialAwarded: "Registered Nurse (RN)"` — add to layout.tsx
   - page.tsx has detailed `hasCourseInstance` with location — add to layout.tsx
   - page.tsx has `speakable` specification — keep in layout.tsx version
4. Validate with Google Rich Results Test

**Acceptance Criteria:**
- [ ] Only ONE Course schema on the page
- [ ] Schema contains all fields from both versions (merged)
- [ ] Google Rich Results Test passes
- [ ] No validation errors in Chrome DevTools

---

### SEO-05: Consolidate Duplicate FAQPage Schema
- **Priority:** P0 (Critical — schema error risk)
- **Effort:** 20 minutes
- **Dependency:** SEO-03
- **Assignee:** Developer
- **Files:** `app/bsc-nursing/layout.tsx` (merge into), `app/bsc-nursing/page.tsx` (remove from)

**Steps:**
1. Remove the FAQPage schema block from page.tsx (lines 97-149)
2. In layout.tsx, merge the 6 questions from page.tsx into the existing 5 questions
3. Result: One FAQPage schema with 11 unique questions in layout.tsx
4. Later (Phase 2): expand to 20 questions

**Merged FAQPage should contain these 11 questions:**
1. What is the B.Sc Nursing fee at JKKN? (from layout.tsx)
2. Is NEET required for B.Sc Nursing at JKKN? (from layout.tsx — after SEO-03 fix)
3. What is the B.Sc Nursing duration at JKKN? (from layout.tsx)
4. What careers after B.Sc Nursing from JKKN? (from layout.tsx)
5. Does JKKN B.Sc Nursing include hospital training? (from layout.tsx)
6. What is the duration of the B.Sc Nursing course? (from page.tsx)
7. What are the eligibility criteria for B.Sc Nursing? (from page.tsx)
8. Is Sresakthimayeil Institute approved by INC? (from page.tsx)
9. What career opportunities after B.Sc Nursing? (from page.tsx)
10. Does the college provide hostel accommodation? (from page.tsx)
11. Can I pursue higher studies after B.Sc Nursing? (from page.tsx)

**Note:** Questions 3 and 6 are similar (duration). Merge into one answer. Questions 4 and 9 are similar (careers). Merge into one. Final: 9 unique questions.

**Acceptance Criteria:**
- [ ] Only ONE FAQPage schema on the page
- [ ] 9+ unique, non-duplicate questions
- [ ] All answers consistent with page content
- [ ] Google Rich Results Test passes

---

### SEO-06: Fix Broken NAAC Link
- **Priority:** P1 (High)
- **Effort:** 5 minutes
- **Dependency:** None
- **Assignee:** Developer
- **File:** `app/bsc-nursing/page.tsx` line 163

**Steps:**
1. Check if naac.gov.in is temporarily down or permanently moved
2. Option A: If down temporarily, keep link but add `target="_blank" rel="noopener noreferrer"`
3. Option B: If permanently moved, update to new URL
4. Option C: Link to specific NAAC accreditation page for JKKN (if available)

**Acceptance Criteria:**
- [ ] Link returns HTTP 200 OR is replaced with working URL
- [ ] No broken links on the page

---

### SEO-07: Add 15+ Internal Links
- **Priority:** P0 (Critical — topical authority signal)
- **Effort:** 30 minutes
- **Dependency:** None
- **Assignee:** Developer
- **File:** `app/bsc-nursing/page.tsx`

**Steps:**
1. Import Link from next/link (already imported — line 4)
2. Add contextual links in these locations:

```tsx
// In "What is B.Sc Nursing?" section (~line 257):
// Add after "best nursing colleges in Tamil Nadu" link:
<Link href="/msc-nursing" className="text-[#006837] font-semibold hover:underline">M.Sc Nursing</Link>

// In eligibility section (~line 373):
<Link href="/eligibility-criteria" className="text-[#006837] font-semibold hover:underline">detailed eligibility criteria</Link>

// In facilities section (~line 900):
<Link href="/laboratories" className="text-[#006837] font-semibold hover:underline">nursing laboratories</Link>
<Link href="/library" className="text-[#006837] font-semibold hover:underline">digital library</Link>
<Link href="/hostel" className="text-[#006837] font-semibold hover:underline">hostel accommodation</Link>

// In career section (~line 1040):
<Link href="/msc-nursing" className="text-[#006837] font-semibold hover:underline">M.Sc Nursing</Link>

// In placement section (~line 1073):
// Already links to /placement — good

// In admission section (~line 1112):
<Link href="/admissions" className="text-[#006837] font-semibold hover:underline">admissions page</Link>
<Link href="/scholarship" className="text-[#006837] font-semibold hover:underline">scholarship opportunities</Link>

// In FAQ section (~line 1298):
<Link href="/pbsc-nursing" className="text-[#006837] font-semibold hover:underline">Post Basic B.Sc Nursing</Link>

// Add city landing page links in a new "Location" paragraph:
<Link href="/erode" className="...">BSc Nursing near Erode</Link>
<Link href="/salem" className="...">BSc Nursing in Salem region</Link>
<Link href="/namakkal" className="...">nursing colleges in Namakkal</Link>
<Link href="/coimbatore" className="...">nursing colleges near Coimbatore</Link>
<Link href="/tiruppur" className="...">nursing colleges near Tiruppur</Link>

// In CTA section or footer area:
<Link href="/clinical-exposure" className="...">clinical exposure</Link>
<Link href="/hospital-training" className="...">hospital training program</Link>
<Link href="/campus-life" className="...">campus life</Link>
<Link href="/sports" className="...">sports facilities</Link>
```

3. Ensure all links use descriptive anchor text (not "click here")
4. Count total internal links after — target 25+

**Acceptance Criteria:**
- [ ] 15+ new internal links added (total 25+)
- [ ] All links point to existing pages (verify with Glob)
- [ ] Anchor text is descriptive and keyword-relevant
- [ ] No broken internal links

---

### SEO-08: Optimize Image Alt Text
- **Priority:** P1 (High)
- **Effort:** 10 minutes
- **Dependency:** None
- **Assignee:** Developer
- **File:** `app/bsc-nursing/page.tsx`

**Steps:**
```tsx
// Line 225 — Hero image:
// OLD: alt="Nursing Learners"
// NEW: alt="BSc Nursing students in clinical training at JKKN College of Nursing, Tamil Nadu"

// Line 244 — Patient Care image:
// OLD: alt="Patient Care Training"
// NEW: alt="BSc Nursing patient care training at 500-bed teaching hospital — JKKN College, Komarapalayam"

// Line 984 — Careers image:
// OLD: alt="Nursing Careers"
// NEW: alt="Career paths after BSc Nursing — Hospital, International, Defence nursing opportunities"
```

**Acceptance Criteria:**
- [ ] All 3 images have descriptive, keyword-rich alt text
- [ ] Alt text is natural language (not keyword-stuffed)
- [ ] Alt text describes the actual image content

---

### SEO-09: Verify Nursing Subdomain in GSC
- **Priority:** P0 (Critical — zero visibility without this)
- **Effort:** 15 minutes + 24-48hr wait
- **Dependency:** Admin/DNS access
- **Assignee:** IT Admin + SEO

**Steps:**
1. Login to Google Search Console
2. Click "Add Property" → URL prefix → Enter: `https://nursing.sresakthimayeil.jkkn.ac.in/`
3. Choose verification method:
   - **Recommended:** HTML file upload → Download HTML file → Add to `public/` folder → Deploy to Vercel
   - **Alternative:** DNS TXT record → Add to domain DNS settings
   - **Alternative:** Meta tag → Add to `app/layout.tsx` head
4. Wait for verification (usually instant for HTML file)
5. After verified: Submit sitemap → `https://nursing.sresakthimayeil.jkkn.ac.in/sitemap.xml`
6. Request indexing for `/bsc-nursing`

**Acceptance Criteria:**
- [ ] Site shows as "Verified" in GSC
- [ ] Sitemap submitted and accepted
- [ ] /bsc-nursing URL inspected and indexing requested
- [ ] Data starts appearing within 48 hours

---

### SEO-10: Add H1 with Primary Keyword
- **Priority:** P1 (High)
- **Effort:** 10 minutes
- **Dependency:** None
- **Assignee:** Developer
- **File:** `app/bsc-nursing/page.tsx` line 167-170

**Steps:**
```tsx
// OLD:
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
  B.Sc Nursing at{" "}
  <span className="text-[#7cb983]">Sresakthimayeil Institute of Nursing and Research</span>
</h1>

// NEW:
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
  BSc Nursing in Tamil Nadu —{" "}
  <span className="text-[#7cb983]">JKKN College of Nursing</span>
</h1>
```

**Acceptance Criteria:**
- [ ] H1 contains "BSc Nursing" and "Tamil Nadu"
- [ ] H1 includes brand name "JKKN"
- [ ] Only ONE H1 on the page
- [ ] Visually consistent with current design

---

### SEO-11: Add Keyword-Targeted H2 Section
- **Priority:** P1 (High)
- **Effort:** 15 minutes
- **Dependency:** CON-01 (content for this section)
- **Assignee:** Developer

**Steps:**
Add new H2 section after "What is B.Sc Nursing?":
```tsx
<h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
  Why JKKN is Among the Best BSc Nursing Colleges in Tamil Nadu
</h2>
```

This H2 directly targets "best bsc nursing colleges in tamilnadu" keyword variant.

---

### SEO-12: Fix OG Image Format
- **Priority:** P2 (Medium)
- **Effort:** 15 minutes
- **Dependency:** Image asset creation
- **Assignee:** Developer + Designer

**Steps:**
1. Create PNG version of `B.Sc-Nursing-Hero-Banner_image.webp` at 1200x630
2. Save as `public/images/B.Sc-Nursing-Hero-Banner_og.png`
3. Update layout.tsx OG image URL:
```tsx
images: [{
  url: "/images/B.Sc-Nursing-Hero-Banner_og.png",
  width: 1200,
  height: 630,
  alt: "BSc Nursing at JKKN College of Nursing, Tamil Nadu — INC Approved",
}],
```

---

### SEO-13: Add "Last Updated" Structured Signal
- **Priority:** P2 (Medium)
- **Effort:** 5 minutes
- **Dependency:** None
- **File:** `app/bsc-nursing/page.tsx` line 172

**Steps:**
- Update the "Last updated" date to current date after every content change
- Add `dateModified` to Course schema:
```json
"dateModified": "2026-04-11"
```

---

### SEO-14: Fix Keyword Cannibalization
- **Priority:** P2 (Medium)
- **Effort:** 20 minutes
- **Dependency:** SEO-09 (GSC verified)
- **Assignee:** SEO

**Steps:**
1. After GSC verification, check which pages on nursing subdomain rank for nursing keywords
2. Ensure /bsc-nursing is THE canonical page for "bsc nursing colleges in tamilnadu"
3. If homepage also targets same keyword, differentiate: homepage = broad "nursing college", BSc page = specific "bsc nursing"
4. Add internal links from homepage to /bsc-nursing with target keyword anchor text

---

### SEO-15: Submit to Bing Webmaster Tools
- **Priority:** P2 (Medium)
- **Effort:** 15 minutes
- **Dependency:** None

**Steps:**
1. Verify nursing.sresakthimayeil.jkkn.ac.in in Bing Webmaster Tools
2. Submit sitemap
3. This helps with Copilot visibility (Phase 4 GEO)

---

### SEO-16: Add Breadcrumb Microdata Enhancement
- **Priority:** P3 (Low)
- **Effort:** 10 minutes
- **Dependency:** None

The BreadcrumbSchema component already generates JSON-LD. Verify it has:
- Home > JKKN Institutions > Nursing College > B.Sc Nursing

---

## AEO TASKS

### AEO-01: Create Snippet-Ready Comparison Table
- **Priority:** P1 (High — featured snippet capture)
- **Effort:** 45 minutes
- **Dependency:** CON-01 (Why JKKN section content)
- **Assignee:** Developer + Content Writer

**Steps:**
1. Create an HTML `<table>` (not just CSS grid) — Google prefers semantic tables for snippets
2. Content:

```tsx
<div className="overflow-x-auto">
  <table className="w-full border-collapse border border-gray-300 text-left">
    <thead>
      <tr className="bg-[#006837] text-white">
        <th className="border border-gray-300 p-3">Feature</th>
        <th className="border border-gray-300 p-3">JKKN College</th>
        <th className="border border-gray-300 p-3">CMC Vellore</th>
        <th className="border border-gray-300 p-3">SRM Nursing</th>
        <th className="border border-gray-300 p-3">Saveetha</th>
        <th className="border border-gray-300 p-3">PSG Nursing</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Hospital Beds</td><td>500+</td><td>2,700+</td><td>1,500+</td><td>1,500+</td><td>1,200+</td></tr>
      <tr><td>Placement Rate</td><td>97%</td><td>95%+</td><td>90%+</td><td>85%+</td><td>90%+</td></tr>
      <tr><td>Annual Fee (Approx)</td><td>₹95,000</td><td>₹1.5L+</td><td>₹2L+</td><td>₹2L+</td><td>₹1L+</td></tr>
      <tr><td>International Placements</td><td>NHS UK, UAE, Singapore</td><td>Global</td><td>Limited</td><td>Limited</td><td>Limited</td></tr>
      <tr><td>Clinical Training Start</td><td>Year 1</td><td>Year 1</td><td>Year 2</td><td>Year 2</td><td>Year 1</td></tr>
      <tr><td>NAAC</td><td>Accredited</td><td>A++</td><td>A++</td><td>A++</td><td>A</td></tr>
    </tbody>
  </table>
</div>
```

3. Place after "Why JKKN" section heading
4. Add caption: "Comparison of Top BSc Nursing Colleges in Tamil Nadu (2026)"

**Note:** Competitor data marked [UNVERIFIED] — needs verification before publishing. Hospital beds and fees are approximate. Do NOT publish without verification.

**Acceptance Criteria:**
- [ ] Semantic HTML `<table>` used (not div/grid)
- [ ] 5+ comparison criteria across 5+ colleges
- [ ] Data is verified or marked [UNVERIFIED]
- [ ] Table is responsive (horizontal scroll on mobile)
- [ ] Caption/title includes target keyword

---

### AEO-02: Create Snippet-Ready Definition Paragraph
- **Priority:** P1 (High)
- **Effort:** 15 minutes
- **Dependency:** None

**Steps:**
Add a concise definition paragraph at the beginning of "What is B.Sc Nursing?" section:

```tsx
<p className="text-lg text-gray-800 font-medium bg-green-50 border-l-4 border-[#006837] p-4 rounded-r-lg mb-6">
  <strong>B.Sc Nursing</strong> is a 4-year undergraduate degree program that trains students to become registered nurses.
  In Tamil Nadu, over 190 colleges offer this INC-approved course affiliated to TNMGRMU.
  Eligibility requires 10+2 with PCB (45% minimum) and NEET-UG qualification.
  Average starting salary: ₹3.5-4.5 LPA domestic, ₹15-25 LPA international (NHS UK, UAE).
</p>
```

This 50-word paragraph is optimized for Google's paragraph snippet format.

---

### AEO-03: Create Fee Comparison Table
- **Priority:** P1 (High)
- **Effort:** 30 minutes
- **Dependency:** CON-02 (fee data from admin)

Create an HTML table comparing BSc Nursing fees across Tamil Nadu colleges — top PAA question.

---

### AEO-04: Create Eligibility Summary Table
- **Priority:** P1 (High)
- **Effort:** 15 minutes
- **Dependency:** SEO-03 (NEET fix)

Format eligibility as a clean table:

| Criteria | Requirement |
|----------|------------|
| Education | 10+2 with PCB |
| Minimum Marks | 45% (40% SC/ST) |
| Age | 17-35 years |
| Entrance Exam | NEET-UG [verify] |
| Nationality | Indian / NRI / PIO |

---

### AEO-05: Create Salary Data Table
- **Priority:** P1 (High)
- **Effort:** 20 minutes
- **Dependency:** None (industry data)

Table showing salary ranges by role — targets "salary after bsc nursing" PAA.

---

### AEO-06: Expand FAQ to 20 Questions
- **Priority:** P1 (High)
- **Effort:** 60 minutes
- **Dependency:** SEO-03, Content tasks
- **Assignee:** Developer + Content Writer

Add 14 new FAQ questions covering all 20 PAA topics identified in spec file. Each answer should be:
- First sentence: Direct answer
- Second sentence: Supporting detail
- Third sentence: JKKN-specific context with CTA
- Maximum 80 words per answer

Update FAQPage schema in layout.tsx to match all 20 questions.

---

### AEO-07: Add Voice Search Conversational Answers
- **Priority:** P2 (Medium)
- **Effort:** 20 minutes
- **Dependency:** AEO-06

Ensure FAQ answers are written in natural, conversational language suitable for voice assistants:
- Start with "Yes," or "No," or the direct answer
- Use simple vocabulary (8th grade reading level)
- Keep under 50 words for voice snippet extraction

---

### AEO-08: Add "Best BSc Nursing College" Authority Statement
- **Priority:** P1 (High)
- **Effort:** 15 minutes
- **Dependency:** None

Add a direct answer block in the first 100 words of page content:

```
JKKN College of Nursing is one of the best BSc Nursing colleges in Tamil Nadu, offering a 4-year
INC-approved program with clinical training at an attached 500+ bed teaching hospital from Year 1.
With a 97% placement rate including international opportunities (NHS UK, UAE, Singapore),
affordable ₹95,000 annual fees, and NAAC accreditation, JKKN provides the strongest foundation
for a nursing career in the state.
```

---

## GEO TASKS

### GEO-01: Update llms.txt for BSc Nursing
- **Priority:** P1 (High)
- **Effort:** 30 minutes
- **Dependency:** None
- **File:** `public/llms.txt` or equivalent

Add BSc Nursing specific content block to llms.txt:
- Course name, duration, fees, eligibility
- Key USPs (hospital, placements, international)
- Location and contact
- Why JKKN for BSc Nursing
- All program offerings

---

### GEO-02: Create/Claim Aggregator Profiles
- **Priority:** P1 (High)
- **Effort:** 2-3 hours
- **Dependency:** Admin credentials for each platform
- **Assignee:** Digital Marketing

Platforms to claim/update:
1. Collegedunia.com
2. Shiksha.com (already listed — update)
3. Careers360.com
4. CollegeDekho.com
5. CollegeBatch.com
6. NursingDunia.com
7. GetMyUni.com

For each: Update BSc Nursing details, fees, placements, photos, respond to reviews.

---

### GEO-03: Create Wikipedia Draft
- **Priority:** P2 (Medium — long-term)
- **Effort:** 2-3 hours
- **Dependency:** Reliable third-party sources citing JKKN
- **Assignee:** Content Writer

Draft a Wikipedia article for "Sresakthimayeil Institute of Nursing and Research" with:
- History and founding (2007, under JKKN Trust)
- Academic programs
- Accreditations and affiliations
- Campus and facilities
- Notable achievements

**Requirement:** 3+ independent reliable sources required for Wikipedia notability.

---

### GEO-04: Create Wikidata Entry
- **Priority:** P2 (Medium)
- **Effort:** 30 minutes
- **Dependency:** GEO-03 (Wikipedia draft)

Create Wikidata item for JKKN College of Nursing with:
- Instance of: nursing college
- Country: India
- Located in: Komarapalayam, Tamil Nadu
- Founded: 2007
- Parent organization: JKKN Institutions
- Official website

---

### GEO-05: Add LocalBusiness Schema
- **Priority:** P1 (High)
- **Effort:** 20 minutes
- **Dependency:** None
- **File:** `app/bsc-nursing/layout.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JKKN College of Nursing",
  "image": "https://nursing.sresakthimayeil.jkkn.ac.in/images/logo.png",
  "telephone": "+919345855001",
  "email": "nursing@jkkn.ac.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Natarajapuram, NH-544, Salem-Coimbatore Highway",
    "addressLocality": "Komarapalayam",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638183",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.4333",
    "longitude": "77.7167"
  },
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "08:00",
    "closes": "17:00"
  }
}
```

---

### GEO-06: Add MedicalOrganization Schema
- **Priority:** P2 (Medium)
- **Effort:** 15 minutes
- **Dependency:** None
- **File:** `app/bsc-nursing/layout.tsx`

Add MedicalOrganization schema for the teaching hospital:
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "JKKN Multi-Specialty Teaching Hospital",
  "medicalSpecialty": ["Medicine", "Surgery", "Pediatrics", "Obstetrics", "Psychiatry"],
  "numberOfBeds": "500+",
  "parentOrganization": { "@type": "EducationalOrganization", "name": "JKKN College of Nursing" }
}
```

---

### GEO-07: Add Organization sameAs Links
- **Priority:** P2 (Medium)
- **Effort:** 15 minutes
- **Dependency:** GEO-02 (aggregator profiles created)

Update root EducationalOrganization schema sameAs to include all verified profiles:
```json
"sameAs": [
  "https://www.facebook.com/jkknnursing",
  "https://www.instagram.com/jkknnursing",
  "https://www.linkedin.com/school/jkknnursing",
  "https://www.youtube.com/playlist?list=PL6QsTq-__HhteTB3-dqN_8hzc7EKycZnY",
  "https://www.shiksha.com/college/sresakthimayeil-institute-of-nursing-and-research-namakkal-91255",
  "https://maps.app.goo.gl/4m3Ec1pdsirbMiuE6"
]
```

---

### GEO-08: Verify GBP Profile
- **Priority:** P1 (High)
- **Effort:** 30 minutes + verification wait
- **Dependency:** Admin/business owner access

Verify JKKN College of Nursing GBP at: https://maps.app.goo.gl/4m3Ec1pdsirbMiuE6
- Update business hours, photos, services
- Add BSc Nursing course as a "service"
- Respond to all reviews
- Post regular updates

---

## CONTENT TASKS

### CON-01: Write "Why JKKN — Best BSc Nursing College" Section
- **Priority:** P0 (Critical)
- **Effort:** 2 hours
- **Dependency:** Verified placement data from admin
- **Assignee:** Content Writer

~600 words covering:
- Opening authority statement (snippet-optimized)
- 5-6 differentiating USPs with data
- Comparison table (see AEO-01)
- "What Makes JKKN Different" callout

---

### CON-02: Write Fee Structure Section
- **Priority:** P1 (High)
- **Effort:** 1 hour
- **Dependency:** Fee data from finance department
- **Assignee:** Content Writer

~400 words + 2 tables (JKKN fee breakdown + college comparison)

---

### CON-03: Write NEET Cutoff Section
- **Priority:** P1 (High)
- **Effort:** 1 hour
- **Dependency:** Cutoff data from admissions + SEO-03
- **Assignee:** Content Writer

~300 words + 2 tables

---

### CON-04: Write Salary & Scope Section
- **Priority:** P1 (High)
- **Effort:** 1 hour
- **Dependency:** None (industry data)
- **Assignee:** Content Writer

~400 words + 2 tables (role-wise salary, progression)

---

### CON-05: Write Hospital Training Section
- **Priority:** P1 (High)
- **Effort:** 1.5 hours
- **Dependency:** Clinical data from coordinator
- **Assignee:** Content Writer

~500 words + clinical rotation schedule table + 3-5 photos

---

### CON-06: Write International Placement Showcase
- **Priority:** P1 (High)
- **Effort:** 1 hour
- **Dependency:** International placement data
- **Assignee:** Content Writer

~400 words + country-wise placement table

---

### CON-07: Write Male Nursing Section
- **Priority:** P2 (Medium)
- **Effort:** 45 minutes
- **Dependency:** None
- **Assignee:** Content Writer

~300 words targeting "bsc nursing male colleges in tamilnadu"

---

### CON-08: Write Faculty Section
- **Priority:** P2 (Medium)
- **Effort:** 45 minutes
- **Dependency:** Faculty data from admin
- **Assignee:** Content Writer

~200 words + 2-3 featured faculty profiles

---

### CON-09: Collect Alumni Testimonials
- **Priority:** P2 (Medium)
- **Effort:** 3-5 days (collection time)
- **Dependency:** Alumni office cooperation
- **Assignee:** Admin/Alumni Relations

Collect 3-5 testimonials:
- 1 international placement (NHS UK/UAE)
- 1 government hospital placement
- 1 private hospital placement
- 1 male nursing student
- 1 higher studies (M.Sc pathway)

---

### CON-10: Write Scholarship Section
- **Priority:** P2 (Medium)
- **Effort:** 45 minutes
- **Dependency:** Scholarship data from admin
- **Assignee:** Content Writer

~200 words + scholarship types table

---

### CON-11: Write "BSc Nursing vs GNM/Other Courses" Section
- **Priority:** P2 (Medium)
- **Effort:** 1 hour
- **Dependency:** None
- **Assignee:** Content Writer

Comparison table: BSc Nursing vs GNM vs Post Basic BSc — targets PAA questions

---

### CON-12: Create Infographic/Video Content
- **Priority:** P3 (Low)
- **Effort:** 4-8 hours
- **Dependency:** Design resources
- **Assignee:** Designer + Content Writer

Create:
- "BSc Nursing Career Path" infographic
- "Why JKKN for BSc Nursing" comparison infographic
- YouTube video: "A Day at JKKN College of Nursing"

---

## TECHNICAL TASKS

### TEC-01: Server/Client Component Optimization
- **Priority:** P2 (Medium)
- **Effort:** 2 hours
- **Dependency:** None
- **Assignee:** Developer

Current page.tsx has "use client" at top — the entire 1343-line page is client-rendered.

**Optimization:** Extract the `useState` curriculum tabs into a separate client component, make the main page a server component for better SSR and SEO.

```
// New structure:
app/bsc-nursing/page.tsx         → Server Component (main content)
components/CurriculumTabs.tsx    → Client Component (year tab switcher only)
```

---

### TEC-02: Add HowTo Schema for Admission Process
- **Priority:** P2 (Medium)
- **Effort:** 20 minutes
- **Dependency:** None
- **File:** `app/bsc-nursing/layout.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Apply for BSc Nursing at JKKN College",
  "step": [
    { "@type": "HowToStep", "name": "Online Registration", "text": "Visit admission.jkkn.ac.in and complete the application form." },
    { "@type": "HowToStep", "name": "Document Submission", "text": "Upload mark sheets, NEET scorecard, ID proof, and photographs." },
    { "@type": "HowToStep", "name": "Merit List", "text": "Selection based on merit. Attend counselling for seat allotment." },
    { "@type": "HowToStep", "name": "Fee Payment", "text": "Pay admission fee. Education loan assistance available." },
    { "@type": "HowToStep", "name": "Admission Confirmation", "text": "Receive admission letter and join orientation." }
  ]
}
```

---

### TEC-03: Add AggregateRating Schema (if reviews available)
- **Priority:** P3 (Low)
- **Effort:** 15 minutes
- **Dependency:** Verified review data

```json
{
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": { "@type": "EducationalOrganization", "name": "JKKN College of Nursing" },
  "ratingValue": "4.5",
  "bestRating": "5",
  "ratingCount": "120",
  "reviewCount": "85"
}
```
**Warning:** Only add if ratings are genuine and verifiable. Fake ratings violate Google guidelines.

---

### TEC-04: Update Sitemap with Lastmod
- **Priority:** P2 (Medium)
- **Effort:** 10 minutes
- **Dependency:** Content updates complete

Update sitemap-courses.xml to include:
```xml
<url>
  <loc>https://nursing.sresakthimayeil.jkkn.ac.in/bsc-nursing</loc>
  <lastmod>2026-04-11</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
</url>
```

---

### TEC-05: Implement Lazy Loading for New Images
- **Priority:** P2 (Medium)
- **Effort:** 15 minutes
- **Dependency:** CON-05 (new images added)

Ensure all non-hero images use `loading="lazy"` to maintain PageSpeed score after content expansion.

---

## COMPETITOR-RESPONSE TASKS

### CMP-01: Create "Top BSc Nursing Colleges in Tamil Nadu" Content
- **Priority:** P1 (High)
- **Effort:** 2 hours
- **Dependency:** Competitor data verification

Write authoritative content listing top 10 BSc Nursing colleges in TN — with JKKN positioned favorably. This is the "ranking list" format that wins featured snippets.

---

### CMP-02: Build "JKKN vs [Competitor]" Comparison Pages
- **Priority:** P2 (Medium)
- **Effort:** 4 hours (4 pages)
- **Dependency:** Competitor scrape data

Create dedicated comparison pages (or blog posts):
- JKKN vs CMC Vellore for BSc Nursing
- JKKN vs Excel Namakkal for BSc Nursing (hyperlocal)
- JKKN vs PSG for BSc Nursing (Coimbatore belt)
- JKKN vs SRM for BSc Nursing

---

### CMP-03: Monitor Competitor Content Updates
- **Priority:** P3 (Low — ongoing)
- **Effort:** 30 minutes/month
- **Dependency:** None

Monthly check of top 8 competitor BSc Nursing pages for:
- Content additions/changes
- New schema markup
- Ranking position changes
- New keywords they're targeting

---

## TASK DEPENDENCY GRAPH

```
START
  │
  ├── SEO-01 (Title) ─────────────→ Can start immediately
  ├── SEO-02 (Description) ────────→ Can start immediately
  ├── SEO-06 (Broken Link) ────────→ Can start immediately
  ├── SEO-07 (Internal Links) ─────→ Can start immediately
  ├── SEO-08 (Image Alts) ─────────→ Can start immediately
  ├── SEO-09 (GSC Verify) ─────────→ Needs admin credentials
  ├── SEO-10 (H1 Fix) ────────────→ Can start immediately
  │
  ├── SEO-03 (NEET Fix) ──────────→ BLOCKS: SEO-04, SEO-05, AEO-04, AEO-06
  │     │
  │     ├── SEO-04 (Course Schema) ─→ DEPENDS ON: SEO-03
  │     └── SEO-05 (FAQ Schema) ────→ DEPENDS ON: SEO-03
  │
  ├── CON-01 (Why JKKN) ──────────→ BLOCKS: AEO-01, SEO-11
  ├── CON-02 (Fees) ───────────────→ BLOCKS: AEO-03
  ├── CON-03 (NEET Cutoff) ────────→ DEPENDS ON: SEO-03
  ├── CON-09 (Testimonials) ───────→ DEPENDS ON: Alumni office (external)
  │
  ├── AEO-06 (20 FAQs) ───────────→ DEPENDS ON: SEO-03 + CON-01 to CON-06
  │
  ├── GEO-02 (Aggregators) ────────→ BLOCKS: GEO-07 (sameAs)
  ├── GEO-03 (Wikipedia) ──────────→ BLOCKS: GEO-04 (Wikidata)
  │
  └── TEC-01 (Component Opt) ──────→ DEPENDS ON: All Phase 2 content complete
```

---

## SPRINT GROUPING

### Sprint 1 (Week 1 — Quick Wins)
**Parallel tasks (no dependencies):**
- SEO-01, SEO-02, SEO-06, SEO-07, SEO-08, SEO-10 — all can run simultaneously

**Sequential (after user confirmation):**
- SEO-03 → SEO-04 → SEO-05

**External action:**
- SEO-09 (GSC) — initiate on Day 1

### Sprint 2 (Week 2 — Content Creation)
**Parallel tasks:**
- CON-01, CON-02, CON-03, CON-04, CON-05, CON-06, CON-07, CON-08 — can be written simultaneously by content writer

**Sequential:**
- CON-09 depends on alumni cooperation (start request in Sprint 1)

### Sprint 3 (Week 3 — AEO + Integration)
**Depends on Sprint 2 content:**
- AEO-01, AEO-02, AEO-03, AEO-04, AEO-05, AEO-06, AEO-07, AEO-08

**Technical:**
- TEC-01, TEC-02, TEC-04, TEC-05

### Sprint 4 (Week 4 — GEO + Schema)
**Parallel tasks:**
- GEO-01, GEO-02, GEO-05, GEO-06, GEO-07, GEO-08

**Long-term:**
- GEO-03, GEO-04 (Wikipedia/Wikidata)

### Sprint 5 (Week 5+ — Competitor + Monitoring)
- CMP-01, CMP-02, CMP-03
- SEO-14 (cannibalization check after GSC data)
- SEO-15 (Bing)

---

*Task decomposition generated by Claude Opus 4.6 | Date: 2026-04-11*
*Total: 52 tasks | Est. total effort: ~40-50 hours over 5 weeks*
