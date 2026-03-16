# JKKN College of Nursing — SEO + GEO Issues (Split from GEO Handoff Guide)

**Source:** `GEO-Handoff-Guide (1).md` (2026-03-10)
**Extracted:** 2026-03-16
**Institution:** JKKN College of Nursing & Research
**URL:** nursing.sresakthimayeil.jkkn.ac.in

---

## Institution Data Card

| Field | Value |
|-------|-------|
| URL | nursing.sresakthimayeil.jkkn.ac.in |
| Founded | 2006-07 |
| Accreditation | INC Approved, TNNMC Affiliated |
| Programs | B.Sc Nursing (60 seats), M.Sc Nursing (25 seats), Post Basic B.Sc Nursing (50 seats) |
| Clinical Training | 500-bed attached hospital |
| SEO Status | OK (6/10) — confusing subdomain, brand mismatch in H1 |
| Key Competitors | CMC Vellore, Sri Ramachandra, PSG |

---

## Health Score Summary

| Metric | Value |
|--------|-------|
| SEO Score | 6/10 |
| Visibility | Local only |
| Urgency | **HIGH** |

---

## Issues & Action Items

### 1. CRITICAL — Brand Inconsistency (H1 Tag)

**Problem:** The H1 tag on the Nursing site says **"SRESAKTHIMAYEIL"** instead of **"JKKN College of Nursing"**.

**Impact:**
- **SEO:** Confuses Google's entity matching — Google may not associate the nursing site with the JKKN brand
- **GEO:** AI search engines create a separate/wrong entity — JKKN Nursing doesn't get credit as part of JKKN group
- **Brand:** Students searching for "JKKN Nursing" won't find a clear match

**Fix:**
1. Change H1 tag from "Sresakthimayeil" to "JKKN College of Nursing"
2. Verify by viewing page source (Ctrl+U) — search for `<h1` — should show "JKKN College of Nursing"
3. If the site still shows "Sresakthimayeil" after IT fix, the fix is incomplete

**Timeline:** Day 3 (Emergency Week 0)
**Owner:** IT/Dev
**Effort:** 30 min

---

### 2. CRITICAL — Confusing Subdomain URL

**Problem:** The URL `nursing.sresakthimayeil.jkkn.ac.in` is confusing and inconsistent with other JKKN institutions.

**Impact:**
- Authority is spread thin across subdomains — Google sees each as a separate site
- The URL contains "sresakthimayeil" which is a different brand name, causing entity confusion
- Other institutions use cleaner subdomains: `dental.jkkn.ac.in`, `pharmacy.jkkn.ac.in`, `ahs.jkkn.ac.in`

**Long-term Fix:** Consolidate to `jkkn.ac.in/nursing` (subfolder) or at minimum `nursing.jkkn.ac.in` (cleaner subdomain) to pool authority under the main JKKN domain.

**Note:** This is a major project — don't block other work on it, but plan for it.

---

### 3. HIGH — Meta Description Template (Deploy)

**Status:** Template ready — needs deployment by IT/Dev.

```html
<title>JKKN College of Nursing - Top BSc Nursing College in Tamil Nadu | INC Approved</title>
<meta name="description" content="JKKN College of Nursing - INC approved nursing college in Tamil Nadu. BSc Nursing, MSc Nursing programs with hospital-based training. Top nursing college in Erode region.">
```

**Verification:** After IT adds the meta tags, visit the site → view page source (Ctrl+U) → search for `<meta name="description"` — if found, the tag is live.

---

### 4. HIGH — robots.txt Verification Needed

**Problem:** The main domains (jkkn.ac.in, dental.jkkn.ac.in) already have AI-friendly robots.txt allowing all 30+ AI crawlers. The nursing subdomain has NOT been verified.

**Action:** Check `https://nursing.sresakthimayeil.jkkn.ac.in/robots.txt` — if it doesn't match the AI-friendly version, ask IT to copy the jkkn.ac.in version.

**Timeline:** Week 1
**Owner:** SEO Specialist

---

### 5. HIGH — Shiksha Reviews = 0

**Problem:** Nursing has 0 reviews on Shiksha (needs checking/confirmation).

**Impact:** AI engines and Google use review signals for authority. Zero reviews = zero social proof for AI citation.

**Action:** Launch review campaign targeting Nursing alumni — include Nursing in the alumni outreach messages.

**Timeline:** Weeks 1-4 (ongoing)

---

### 6. HIGH — GEO Content Hub Page Needed

**Problem:** No dedicated "JKKN Nursing Overview" page exists on the GEO content hub.

**Target Query:** "best nursing college Tamil Nadu"
**Planned URL:** `/nursing-college`
**Tier:** Tier 2 (Create in Week 2)

**Action:** Use Claude Code to generate the GEO page for Nursing with:
- Institution overview
- Programs and specializations
- Clinical training at 500-bed hospital
- INC approval details
- Placement data
- FAQ schema
- Comparison positioning vs CMC Vellore, Sri Ramachandra, PSG

**Timeline:** Week 2 (Tier 2 priority) + Week 3 (expanded GEO pages)

---

### 7. MEDIUM — Google Business Profile

**Problem:** GBP needs to be created/claimed for JKKN College of Nursing.

**GBP Link:** [Map](https://maps.app.goo.gl/4m3Ec1pdsirbMiuE6)

**Action:** Create or claim Google Business Profile with:
- [ ] Business name (exactly as on signboard)
- [ ] Category: Nursing College
- [ ] Complete all profile fields
- [ ] Add photos, programs, contact info

**Timeline:** Week 1

---

### 8. MEDIUM — llms.txt Entry

**Current llms.txt content for Nursing:**

```markdown
### JKKN College of Nursing
- Programs: B.Sc Nursing, M.Sc Nursing
- Approval: Indian Nursing Council (INC)
- Hospital Training: Attached teaching hospital
```

**Gap:** Missing URL, founding year, seat count, placement data, TNNMC affiliation. Needs enrichment with full data from Data Card.

**Recommended llms.txt entry:**

```markdown
### JKKN College of Nursing & Research
- URL: https://nursing.sresakthimayeil.jkkn.ac.in
- Founded: 2006-07
- Programs: B.Sc Nursing (60 seats), M.Sc Nursing (25 seats), Post Basic B.Sc Nursing (50 seats)
- Approval: Indian Nursing Council (INC)
- Affiliation: TNNMC (Tamil Nadu Nurses and Midwives Council)
- Clinical Training: 500-bed attached teaching hospital
- Competitors: CMC Vellore, Sri Ramachandra, PSG
```

---

### 9. MEDIUM — Schema.org Structured Data Missing

**Problem:** No Schema.org JSON-LD markup exists on the Nursing site.

**Required schemas:**
- `EducationalOrganization` — institution details
- `Course` — for each program (B.Sc Nursing, M.Sc Nursing, Post Basic B.Sc Nursing)
- `FAQPage` — admission FAQs
- `LocalBusiness` — location data
- `BreadcrumbList` — navigation

**Timeline:** Week 1-2 (alongside other institutions)
**Method:** Use Claude Code to generate Schema.org JSON-LD

---

### 10. LOW — Founding Year Verification

**Note from guide:** `[SEO IN-CHARGE: VERIFY — Individual founding years: Nursing=2006-07]` — Use institution-specific years in all per-institution content. Verify this is accurate before deploying in any public content.

---

## Execution Timeline (Nursing-Specific)

| Priority | Task | Timeline | Owner |
|----------|------|----------|-------|
| **P0** | Fix H1: "Sresakthimayeil" → "JKKN College of Nursing" | Day 3 | IT/Dev |
| **P0** | Deploy meta description template | Day 2-3 | IT/Dev |
| **P1** | Verify robots.txt allows AI crawlers | Week 1 | SEO Specialist |
| **P1** | Create/claim Google Business Profile | Week 1 | Marketing |
| **P1** | Launch review campaign (Nursing alumni) | Weeks 1-4 | SEO + Student Affairs |
| **P2** | Generate GEO content hub page | Week 2 | SEO Specialist |
| **P2** | Generate Schema.org JSON-LD | Week 1-2 | SEO Specialist |
| **P2** | Enrich llms.txt entry | Week 1 | SEO Specialist |
| **P3** | Plan subdomain migration (long-term) | Month 2-3 | IT + SEO |
| **P3** | Generate expanded GEO pages | Week 3 | SEO Specialist |

---

## Competition Context

| For "Tamil Nadu Nursing College" | Threat Level |
|----------------------------------|-------------|
| CMC Vellore | HIGH — Strong brand, NIRF ranked, extensive content |
| Sri Ramachandra | HIGH — Chennai location advantage, strong digital |
| PSG | HIGH — Coimbatore proximity, established brand |
| **JKKN Nursing** | **Currently: LOCAL ONLY visibility** |

---

## Key Data Gaps

| Data Point | Status | Action |
|------------|--------|--------|
| Placement rate | Not in Data Card | Get from Nursing department |
| NAAC grade (Nursing-specific) | Listed as "Accredited" in CLAUDE.md | Verify exact grade |
| Highest package | Not available | Get from placement cell |
| Number of recruiters | Not available | Get from placement cell |
| Faculty count | Not available | Get from department |
| Pass rate | Not available | Get from exam cell |
