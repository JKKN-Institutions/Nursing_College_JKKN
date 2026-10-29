import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  StarIcon,
  ChartBarIcon,
  HeartIcon,
  BeakerIcon,
  HomeModernIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

/* ─────────────────────────────────────────────
   METADATA — SEO optimized
   ───────────────────────────────────────────── */

export const metadata: Metadata = {
  title:
    "Placements at JKKN College of Nursing: 98% UG (NIRF 2026)",
  description:
    "UG 2024-25: 58 of 59 graduates placed (98%), median salary Rs 3,60,000; M.Sc: 11 of 11 placed. NIRF 2026 data submitted by JKKN College of Nursing.",
  alternates: {
    canonical:
      "https://nursing.sresakthimayeil.jkkn.ac.in/placement",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
  openGraph: {
    title:
      "Placements at JKKN College of Nursing and Research — 98% in 2024-25",
    description:
      "UG 2024-25: 58 of 59 graduates placed (98%), median salary Rs 3,60,000; M.Sc: 11 of 11 placed. NIRF 2026 data submitted by JKKN College of Nursing.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/placement",
    type: "website",
    siteName: "JKKN College of Nursing and Research",
    images: [
      {
        url: "/images/Homepage-Hero_Banner-image.webp",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing and Research Placements — 98% in 2024-25",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Placements at JKKN College of Nursing and Research — 98% in 2024-25",
    description:
      "UG 2024-25: 58 of 59 graduates placed (98%), median salary Rs 3,60,000; M.Sc: 11 of 11 placed. NIRF 2026 data submitted by JKKN College of Nursing.",
    images: ["/images/Homepage-Hero_Banner-image.webp"],
  },
};

/* ─────────────────────────────────────────────
   SCHEMA — FAQPage + ItemList
   (No AggregateRating: a self-serving rating on your own Organization is not eligible for a
   Google rich result and none is published. The old heading named one that never existed.)
   ───────────────────────────────────────────── */

const faqData = [
  {
    q: "What is the placement rate at JKKN College of Nursing and Research?",
    a: "In 2024–25, 58 of the 59 learners who graduated in the minimum stipulated time were placed — a 98% placement rate (2024-25: 58 of 59 graduates placed, NIRF 2026), as filed in the college's NIRF 2026 submission. The median salary of placed UG graduates that year was Rs 3,60,000.",
  },
  {
    q: "Which companies and hospitals recruit from JKKN College of Nursing and Research?",
    a: "This page does not name employers until the placement cell publishes a verified recruiter list. What is on record is the NIRF 2026 data submitted by the college: 58 of 59 UG graduates placed in 2024-25 and 11 of 11 M.Sc graduates placed in 2024-25. Ask the placement cell for the current list of recruiting hospitals.",
  },
  {
    q: "What is the average salary package for nursing graduates from JKKN?",
    a: "The NIRF 2026 data submitted by the college gives the median salary of placed graduates: Rs 3,60,000 for UG 2024-25, Rs 3,84,000 for UG 2023-24, Rs 1,80,000 for UG 2022-23 and Rs 5,76,000 for M.Sc 2024-25. NIRF does not ask for an average or a salary range.",
  },
  {
    q: "Is there a highest salary package figure for JKKN nursing graduates?",
    a: "No highest-package figure is on record. NIRF asks colleges for the median salary of placed graduates, not the highest offer, and the NIRF 2026 data submitted by the college gives a median of Rs 3,60,000 for UG 2024-25.",
  },
  {
    q: "Does JKKN College of Nursing and Research help nurses who plan to work abroad?",
    a: "Yes, with exam and paperwork guidance; the college does not publish placement figures for abroad. It provides OET/IELTS coaching, NCLEX-RN preparation, DHA/HAAD/PROMETRIC exam coaching, visa documentation support, and licensing registration guidance.",
  },
  {
    q: "What placement support does JKKN provide to nursing learners?",
    a: "JKKN provides comprehensive placement support including: dedicated placement cell, professional resume building with faculty guidance, soft skills and communication training, mock interviews with clinical and HR panels, campus recruitment drives, international exam preparation (NCLEX, OET, IELTS, DHA, HAAD, PROMETRIC), visa documentation assistance, and post-placement follow-up.",
  },
  {
    q: "When do campus placement drives happen at JKKN College of Nursing and Research?",
    a: "Campus placement drives at JKKN are conducted throughout the academic year, primarily between August and February. Recruiting hospitals visit the campus for tests, group discussions, and personal interviews. The placement cell coordinates the entire process from registration to offer acceptance.",
  },
  {
    q: "Can M.Sc Nursing graduates get better placement packages at JKKN?",
    a: "Yes. M.Sc Nursing graduates from JKKN typically receive higher packages and access to specialized roles including Nursing Educator, Clinical Specialist, Nursing Supervisor, Research Associate, and Hospital Administrator positions. In the NIRF 2026 data submitted by the college, 11 of 11 M.Sc graduates were placed in 2024-25, at a median salary of Rs 5,76,000.",
  },
  {
    q: "Does JKKN provide NCLEX and IELTS coaching for international placements?",
    a: "Yes. JKKN College of Nursing and Research has a dedicated licensing exam preparation program covering NCLEX-RN (USA), OET/IELTS (UK and Australia), DHA/HAAD (UAE), and PROMETRIC (Saudi Arabia). Coaching includes study materials, mock tests, expert faculty sessions, and registration guidance for each exam.",
  },
  {
    q: "What sectors do JKKN nursing graduates work in after placement?",
    a: "Nursing graduates work across private hospitals, international healthcare (after the licence each country requires), government hospitals, clinical research organizations, Pharmaceutical Companies, Community and Public Health Organizations, and Home Healthcare Services.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const placementPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/placement#webpage",
  name: "Placements at JKKN College of Nursing and Research",
  description:
    "Placement record of JKKN College of Nursing and Research: UG 2024-25, 58 of 59 graduates placed (98%), median salary Rs 3,60,000 - NIRF 2026 data submitted by the college.",
  url: "https://nursing.sresakthimayeil.jkkn.ac.in/placement",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/#website",
  },
  about: {
    "@type": "EducationalOrganization",
    "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/#organization",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".speakable", "[data-speakable]"],
  },
};

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

// Source: the college's own NIRF'2026 submission to the Ministry of Education
// (Inst. Code 262, IR-O-C-45803), UG "Placement & higher studies" table.
// "Learners Placed" = students placed / students graduating in minimum stipulated time.
// "Median Salary" is the median salary of placed graduates as filed in NIRF.
const yearWiseStats = [
  {
    year: "2024–25",
    placed: "58 / 59",
    rate: "98%",
    avgPkg: "₹3.6 LPA",
    highPkg: "NIRF 2026",
  },
  {
    year: "2023–24",
    placed: "55 / 60",
    rate: "92%",
    avgPkg: "₹3.84 LPA",
    highPkg: "NIRF 2026",
  },
  {
    year: "2022–23",
    placed: "51 / 51",
    rate: "100%",
    avgPkg: "₹1.8 LPA",
    highPkg: "NIRF 2026",
  },
];

const recruitersIndia = [
  "Multi-specialty hospitals",
  "Super-specialty hospitals",
  "Nursing homes",
  "Dialysis and diagnostic centres",
];

const recruitersInternational = [
  "UK (after NMC registration)",
  "UAE (after DHA / DOH licence)",
  "Saudi Arabia (after SCFHS registration)",
  "Singapore (after SNB registration)",
];

const recruitersGovernment = [
  "Government Hospitals (Tamil Nadu)",
  "AIIMS",
  "ESI Hospitals",
  "PHC / CHC Centers",
];

const internationalDestinations = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    employers: "NHS and private hospitals (after NMC registration)",
    support:
      "OET / IELTS coaching, NMC registration guidance, CBT exam preparation, visa documentation support",
    pkgRange: "Salary set by the employer",
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    employers: "Hospitals licensed by DHA / DOH",
    support:
      "DHA / HAAD exam coaching, Emirates nursing licensing, employment visa support",
    pkgRange: "Salary set by the employer",
  },
  {
    country: "Saudi Arabia",
    flag: "🇸🇦",
    employers: "Hospitals registered with SCFHS",
    support:
      "PROMETRIC exam preparation, SCFHS registration guidance, Iqama process support",
    pkgRange: "Salary set by the employer",
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    employers: "Public and private hospitals (after SNB registration)",
    support:
      "SNB registration guidance, language proficiency preparation, work visa support",
    pkgRange: "Salary set by the employer",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    employers: "Public & private hospital networks",
    support:
      "IELTS / OET coaching, AHPRA registration guidance, skills assessment support",
    pkgRange: "Salary set by the employer",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    employers: "Provincial health authorities",
    support:
      "NCLEX-RN preparation, provincial nursing college registration, Express Entry documentation",
    pkgRange: "Salary set by the employer",
  },
];

const sectorCards = [
  {
    icon: HeartIcon,
    title: "Private Hospitals",
    desc: "Clinical nursing roles in ICU, OT, Emergency, and Specialty departments of private hospitals.",
    recruiters: "Multi-specialty and super-specialty hospitals",
  },
  {
    icon: GlobeAltIcon,
    title: "International Healthcare",
    desc: "Nursing roles in the UK, UAE, Saudi Arabia, Singapore, Australia, and Canada after the licence each country requires.",
    recruiters: "After NMC / DHA / SCFHS / SNB / AHPRA licensing",
  },
  {
    icon: ShieldCheckIcon,
    title: "Government Hospitals",
    desc: "Stable government positions in AIIMS, ESI, Tamil Nadu government hospitals, and Primary Health Centers with excellent benefits.",
    recruiters: "AIIMS, ESI, TN Govt Hospitals, PHC/CHC",
  },
  {
    icon: BeakerIcon,
    title: "Clinical Research",
    desc: "Research associate and clinical trial coordinator roles in pharmaceutical and clinical research organizations.",
    recruiters: "Pharma CROs, Research Institutes",
  },
  {
    icon: AcademicCapIcon,
    title: "Nursing Education",
    desc: "Teaching and faculty positions in nursing colleges, medical universities, and healthcare training institutes. Preferred for M.Sc graduates.",
    recruiters: "Nursing Colleges, Medical Universities",
  },
  {
    icon: HomeModernIcon,
    title: "Community & Home Health",
    desc: "Community health nursing, home healthcare services, public health programs, and NGO healthcare initiatives.",
    recruiters: "Home Health Agencies, NGOs, Public Health Orgs",
  },
];

const placementProcess = [
  {
    step: 1,
    title: "Registration",
    desc: "Learners register with the Placement Cell in their final year and complete a comprehensive career profile including clinical interests and location preferences.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    step: 2,
    title: "Resume Building",
    desc: "Professional CV and personal statement prepared with guidance from senior learner mentors. Portfolios include clinical experience, certifications, and achievements.",
    icon: DocumentTextIcon,
  },
  {
    step: 3,
    title: "Soft Skills Training",
    desc: "Intensive workshops on communication, teamwork, professional conduct, interview etiquette, and presentation skills to build workplace readiness.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    step: 4,
    title: "Mock Interviews",
    desc: "Simulated interviews with clinical and HR panels. Learners receive detailed feedback to improve performance before actual recruitment drives.",
    icon: UserGroupIcon,
  },
  {
    step: 5,
    title: "Campus Drives",
    desc: "Recruiters from top hospitals and healthcare organizations visit campus for aptitude tests, group discussions, and personal interviews.",
    icon: BuildingOffice2Icon,
  },
  {
    step: 6,
    title: "Offer & Onboarding",
    desc: "Placement Cell facilitates offer acceptance, joining formalities, relocation guidance, and maintains follow-up for the first 6 months of employment.",
    icon: BriefcaseIcon,
  },
];


const licensingExams = [
  {
    exam: "NCLEX-RN",
    country: "USA & Canada",
    desc: "National Council Licensure Examination for Registered Nurses — required for nursing practice in the United States and Canada.",
    support:
      "Comprehensive study materials, mock tests, expert senior learner sessions, and NCSBN registration guidance.",
  },
  {
    exam: "OET / IELTS",
    country: "UK & Australia",
    desc: "Occupational English Test and IELTS for healthcare professionals — required for nursing registration in the UK (NMC) and Australia (AHPRA).",
    support:
      "Dedicated English language coaching, speaking practice with native speakers, full-length mock tests, and score improvement strategies.",
  },
  {
    exam: "DHA / HAAD",
    country: "UAE",
    desc: "Dubai Health Authority and Health Authority Abu Dhabi licensing examinations — required for nursing practice in the UAE.",
    support:
      "DHA/HAAD-specific study materials, practice exams, dataflow verification guidance, and employer coordination.",
  },
  {
    exam: "PROMETRIC",
    country: "Saudi Arabia",
    desc: "Saudi Commission for Health Specialties (SCFHS) nursing licensure examination — required for nursing practice in Saudi Arabia.",
    support:
      "SCFHS registration support, Prometric-specific preparation materials, and mock examinations.",
  },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
   ───────────────────────────────────────────── */

export default function PlacementsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FBFBEE]">
        {/* ── Breadcrumb Schema ── */}
        <BreadcrumbSchema
          items={[
            {
              name: "Home",
              url: "https://nursing.sresakthimayeil.jkkn.ac.in/",
            },
            {
              name: "Placements",
              url: "https://nursing.sresakthimayeil.jkkn.ac.in/placement",
            },
          ]}
        />

        {/* ── JSON-LD Schemas ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([faqSchema, placementPageSchema]),
          }}
        />

        {/* ═══════════════════════════════════════════
            SECTION 1: HERO BANNER
            ═══════════════════════════════════════════ */}
        <section className="bg-gradient-to-br from-[#0b7845] via-[#095d36] to-[#064525] text-white py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-green-200 text-sm sm:text-base font-medium tracking-wide uppercase mb-3">
                JKKN College of Nursing and Research — Placement Cell
              </p>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
                data-speakable="true"
              >
                98% Placement Success Rate — Your Nursing Career Starts Here
              </h1>
              <p className="text-green-100 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                UG 2024-25: 58 of 59 graduates placed, median salary ₹3,60,000 (NIRF 2026
                data submitted by the college). Placement cell with NCLEX, OET and IELTS
                coaching and visa guidance.
              </p>

              {/* Hero Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/20">
                  <p className="text-3xl sm:text-4xl font-bold text-[#FFD700]">
                    98%
                  </p>
                  <p className="text-green-100 text-sm mt-1">
                    Placement Success Rate
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/20">
                  <p className="text-3xl sm:text-4xl font-bold text-[#FFD700]">
                    ₹3.6 LPA
                  </p>
                  <p className="text-green-100 text-sm mt-1">
                    Median Salary, UG 2024-25
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/20">
                  <p className="text-3xl sm:text-4xl font-bold text-[#FFD700]">
                    11 / 11
                  </p>
                  <p className="text-green-100 text-sm mt-1">
                    M.Sc Placed, 2024-25 (NIRF)
                  </p>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=nursing.sresakthimayeil.jkkn.ac.in&utm_medium=organic&utm_campaign=placement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#e6c200] text-[#002309] font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg transition-colors"
                >
                  Apply Now
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg border border-white/30 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Contact Placement Cell
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 2: YEAR-WISE PLACEMENT STATISTICS
            ═══════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                Year-Wise Placement Statistics
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                UG placement and median salary as filed by the college in its NIRF 2026
                submission (Inst. Code 262). NIRF does not ask for a highest package.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#0b7845] text-white">
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-semibold">
                      Academic Year
                    </th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-semibold">
                      Learners Placed
                    </th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-semibold">
                      Placement Rate
                    </th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-semibold">
                      Median Salary (India)
                    </th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-semibold">
                      Source
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {yearWiseStats.map((row, idx) => (
                    <tr
                      key={row.year}
                      className={
                        idx % 2 === 0 ? "bg-green-50/50" : "bg-white"
                      }
                    >
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-800">
                        {row.year}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700">
                        {row.placed}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">
                        <span className="inline-block bg-green-100 text-[#0b7845] font-semibold px-3 py-1 rounded-full text-sm">
                          {row.rate}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700">
                        {row.avgPkg}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium text-[#0b7845]">
                        {row.highPkg}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              * Placement counts and median salaries are as filed in the
              college&rsquo;s NIRF 2026 submission to the Ministry of Education.
              &ldquo;Learners Placed&rdquo; is students placed out of students
              graduating in the minimum stipulated time. International packages
              converted at prevailing exchange rates.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 3: WHERE NURSING GRADUATES WORK (sectors - no employer names without a verified list)
            ═══════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#FBFBEE]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                Where Nursing Graduates Work
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Sectors open to nursing graduates. Employer names are listed only after the
                placement cell publishes a verified recruiter list.
              </p>
            </div>

            {/* India Private */}
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <HeartIcon className="w-6 h-6 text-[#0b7845]" />
                India — Private Hospitals
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {recruitersIndia.map((r) => (
                  <span
                    key={r}
                    className="inline-block bg-white border border-green-200 text-gray-800 font-medium px-4 py-2 rounded-lg text-sm sm:text-base shadow-sm hover:border-[#0b7845] hover:shadow-md transition-all"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* International */}
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <GlobeAltIcon className="w-6 h-6 text-[#0b7845]" />
                International Hospitals
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {recruitersInternational.map((r) => (
                  <span
                    key={r}
                    className="inline-block bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 text-gray-800 font-medium px-4 py-2 rounded-lg text-sm sm:text-base shadow-sm hover:border-[#0b7845] hover:shadow-md transition-all"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Government */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <ShieldCheckIcon className="w-6 h-6 text-[#0b7845]" />
                Government Hospitals
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {recruitersGovernment.map((r) => (
                  <span
                    key={r}
                    className="inline-block bg-white border border-green-200 text-gray-800 font-medium px-4 py-2 rounded-lg text-sm sm:text-base shadow-sm hover:border-[#0b7845] hover:shadow-md transition-all"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            MID-PAGE CTA
            ═══════════════════════════════════════════ */}
        <section className="py-10 sm:py-14 bg-gradient-to-r from-[#0b7845] to-[#095d36] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
              Ready to Start Your Nursing Career?
            </h2>
            <p className="text-green-100 mb-6 max-w-xl mx-auto">
              Join the 192 learners who graduated in the last three years
              (2022-23 to 2024-25, per the college&rsquo;s NIRF 2026 filing) and
              launched careers in healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=nursing.sresakthimayeil.jkkn.ac.in&utm_medium=organic&utm_campaign=placement"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#e6c200] text-[#002309] font-semibold px-6 py-3 rounded-lg text-base transition-colors"
              >
                Apply for 2026–27 Admission
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="tel:+919345855001"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-lg text-base border border-white/30 transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                Call +91 93458 55001
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 5: INTERNATIONAL PLACEMENTS
            ═══════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#FBFBEE]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                International Placement Destinations
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Countries Indian nurses commonly move to, the licence each one needs, and
                the exam and paperwork guidance the college offers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {internationalDestinations.map((dest) => (
                <div
                  key={dest.country}
                  className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-[#0b7845]/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl" role="img" aria-label={dest.country}>
                      {dest.flag}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {dest.country}
                      </h3>
                      <p className="text-sm text-[#0b7845] font-medium">
                        {dest.pkgRange}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    <span className="font-medium">Employers:</span>{" "}
                    {dest.employers}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Support:</span>{" "}
                    {dest.support}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 6: SECTOR-WISE BREAKDOWN
            ═══════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                Sector-Wise Placement Breakdown
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From its campus in <Link href="/" className="text-[#0b7845] font-semibold hover:underline">Tamil Nadu</Link>, JKKN nursing graduates are placed across diverse healthcare
                sectors — from leading private hospitals to international
                healthcare systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {sectorCards.map((sector) => {
                const Icon = sector.icon;
                return (
                  <div
                    key={sector.title}
                    className="bg-[#FBFBEE] rounded-xl border border-gray-200 p-5 sm:p-6 hover:shadow-md hover:border-[#0b7845]/30 transition-all"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#0b7845]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {sector.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      {sector.desc}
                    </p>
                    <p className="text-xs text-gray-500">
                      <span className="font-medium">Typical employers:</span>{" "}
                      {sector.recruiters}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 7: LICENSING EXAM PREPARATION
            ═══════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#FBFBEE]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                International Licensing Exam Preparation
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dedicated coaching programs for global nursing licensure exams
                — preparing learners for careers in the USA, UK, UAE, Saudi
                Arabia, Australia, and Canada.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {licensingExams.map((exam) => (
                <div
                  key={exam.exam}
                  className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <AcademicCapIcon className="w-6 h-6 text-[#0b7845]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {exam.exam}
                      </h3>
                      <p className="text-sm text-[#0b7845] font-medium">
                        {exam.country}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{exam.desc}</p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">JKKN Support:</span>{" "}
                    {exam.support}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 9: PLACEMENT PROCESS TIMELINE
            ═══════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#FBFBEE]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                Our 6-Step Placement Process
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A structured, step-by-step process that prepares every learner
                for career success — from registration to offer letter.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-green-200 hidden sm:block" />

                <div className="space-y-6 sm:space-y-8">
                  {placementProcess.map((step) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.step} className="flex gap-4 sm:gap-6">
                        {/* Step circle */}
                        <div className="flex-shrink-0 relative z-10">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0b7845] rounded-full flex items-center justify-center shadow-md">
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                        </div>

                        {/* Step content */}
                        <div className="flex-1 bg-white rounded-xl border border-gray-200 p-4 sm:p-5 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold text-[#0b7845] bg-green-100 px-2 py-0.5 rounded-full">
                              Step {step.step}
                            </span>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 10: FAQ
            ═══════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                Frequently Asked Questions — Placements
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about placements, salary packages,
                recruiters, and career opportunities at JKKN College of Nursing and Research.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-[#FBFBEE] rounded-xl border border-gray-200 overflow-hidden"
                >
                  <summary className="flex items-start gap-3 cursor-pointer px-5 py-4 sm:px-6 sm:py-5 text-left font-medium text-gray-800 hover:bg-green-50/50 transition-colors list-none">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-[#0b7845] text-xs font-bold">
                        {idx + 1}
                      </span>
                    </span>
                    <span className="flex-1 text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 text-[#0b7845] transition-transform group-open:rotate-45 text-xl font-light mt-0.5">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-4 sm:px-6 sm:pb-5 pl-14 sm:pl-16">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            BOTTOM CTA
            ═══════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#0b7845] via-[#095d36] to-[#064525] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Build Your Healthcare Career with JKKN
            </h2>
            <p className="text-green-100 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              98% placement rate (2024-25: 58 of 59 graduates placed, NIRF 2026 data submitted by the college). Placement cell with career support
              — from exam coaching to visa assistance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <CheckCircleIcon className="w-8 h-8 text-[#FFD700] mx-auto mb-2" />
                <p className="font-semibold">INC Approved</p>
                <p className="text-green-200 text-sm">
                  NAAC Accredited (B++)
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <ChartBarIcon className="w-8 h-8 text-[#FFD700] mx-auto mb-2" />
                <p className="font-semibold">Affiliated Hospital Training</p>
                <p className="text-green-200 text-sm">
                  Four affiliated hospitals in Erode
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <GlobeAltIcon className="w-8 h-8 text-[#FFD700] mx-auto mb-2" />
                <p className="font-semibold">Exam Guidance</p>
                <p className="text-green-200 text-sm">
                  NCLEX, OET, IELTS for work abroad
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=nursing.sresakthimayeil.jkkn.ac.in&utm_medium=organic&utm_campaign=placement"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#e6c200] text-[#002309] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                Apply Now — 2026–27 Admissions Open
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors"
              >
                Talk to Placement Cell
              </Link>
            </div>

            <p className="text-green-200 text-sm mt-6">
              <PhoneIcon className="w-4 h-4 inline-block mr-1" />
              Call us: +91 93458 55001 | Email: nursing@jkkn.ac.in
            </p>
          </div>
        </section>

        {/* ── Published By ── */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="font-semibold text-[#002309] mb-2">
                Published by JKKN College of Nursing and Research — Placement Cell
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Sresakthimayeil Institute Of Nursing And Research
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Natarajapuram, NH-544 (Salem-Coimbatore Highway),
                Komarapalayam, Namakkal, Tamil Nadu 638183
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Affiliated to Tamil Nadu Dr. M.G.R. Medical University |
                NAAC Accredited (B++) · INC Approved
              </p>
              <p className="text-sm text-gray-600">
                Last Updated: March 2026
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
