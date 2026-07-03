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
    "Placements at JKKN College of Nursing — 97% Success Rate | Top Recruiters & International Opportunities",
  description:
    "JKKN College of Nursing placement record: 97% success rate, 80+ recruiters including NHS UK, Apollo, Fortis, and Cleveland Clinic Abu Dhabi. Salary packages from ₹3.5 LPA to ₹25 LPA (international). Dedicated placement cell with NCLEX, OET, IELTS coaching and visa support.",
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
      "Placements at JKKN College of Nursing — 97% Success Rate | NHS UK, Apollo, Fortis",
    description:
      "97% placement rate with 80+ recruiters. International placements in UK, UAE, Singapore, Australia, Canada. Packages up to ₹25 LPA.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/placement",
    type: "website",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/Homepage-Hero_Banner-image.webp",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing Placements — 97% Success Rate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Placements at JKKN College of Nursing — 97% Success Rate",
    description:
      "97% placement rate, 80+ recruiters, international opportunities in UK, UAE, Singapore. Packages up to ₹25 LPA.",
    images: ["/images/Homepage-Hero_Banner-image.webp"],
  },
};

/* ─────────────────────────────────────────────
   SCHEMA — FAQPage + ItemList + AggregateRating
   ───────────────────────────────────────────── */

const faqData = [
  {
    q: "What is the placement rate at JKKN College of Nursing?",
    a: "JKKN College of Nursing has a consistent placement rate of 97%, with graduates placed in top hospitals across India and internationally. In 2024–25, 55 out of 58 eligible learners were placed successfully.",
  },
  {
    q: "Which companies and hospitals recruit from JKKN College of Nursing?",
    a: "Over 80 recruiters hire from JKKN, including Apollo Hospitals, Fortis Healthcare, Manipal Hospitals, MIOT Hospitals, Kauvery Hospital, KMCH, NHS UK, Cleveland Clinic Abu Dhabi, Saudi German Hospital, Aster DM Healthcare (UAE), Singapore General Hospital, AIIMS, and Government Hospitals across Tamil Nadu.",
  },
  {
    q: "What is the average salary package for nursing graduates from JKKN?",
    a: "The average salary package for JKKN nursing graduates is ₹3.5–4.5 LPA for domestic private hospital placements. Government hospital salaries average ₹5.0–7.0 LPA. International placements (UK NHS) offer ₹20–25 LPA, and Gulf placements (UAE, Saudi Arabia) offer ₹12–18 LPA.",
  },
  {
    q: "What is the highest salary package offered to JKKN nursing graduates?",
    a: "The highest salary package offered to JKKN nursing graduates is ₹25 LPA (international placement through NHS UK). The highest domestic package is ₹8–10 LPA through government hospital placements.",
  },
  {
    q: "Does JKKN College of Nursing offer international placement opportunities?",
    a: "Yes. JKKN has a dedicated International Placement Cell that facilitates placements in 6 countries: United Kingdom (NHS), UAE (Cleveland Clinic Abu Dhabi, Aster DM Healthcare), Saudi Arabia (Saudi German Hospital), Singapore, Australia, and Canada. The college provides OET/IELTS coaching, NCLEX-RN preparation, DHA/HAAD/PROMETRIC exam coaching, visa documentation support, and licensing registration guidance.",
  },
  {
    q: "What placement support does JKKN provide to nursing learners?",
    a: "JKKN provides comprehensive placement support including: dedicated placement cell, professional resume building with faculty guidance, soft skills and communication training, mock interviews with clinical and HR panels, campus recruitment drives, international exam preparation (NCLEX, OET, IELTS, DHA, HAAD, PROMETRIC), visa documentation assistance, and post-placement follow-up.",
  },
  {
    q: "When do campus placement drives happen at JKKN College of Nursing?",
    a: "Campus placement drives at JKKN are conducted throughout the academic year, primarily between August and February. Major hospital chains and international recruiters visit the campus for tests, group discussions, and personal interviews. The placement cell coordinates the entire process from registration to offer acceptance.",
  },
  {
    q: "Can M.Sc Nursing graduates get better placement packages at JKKN?",
    a: "Yes. M.Sc Nursing graduates from JKKN typically receive higher packages and access to specialized roles including Nursing Educator, Clinical Specialist, Nursing Supervisor, Research Associate, and Hospital Administrator positions. International placements for M.Sc graduates also offer premium packages, particularly in the UK and UAE.",
  },
  {
    q: "Does JKKN provide NCLEX and IELTS coaching for international placements?",
    a: "Yes. JKKN College of Nursing has a dedicated licensing exam preparation program covering NCLEX-RN (USA), OET/IELTS (UK and Australia), DHA/HAAD (UAE), and PROMETRIC (Saudi Arabia). Coaching includes study materials, mock tests, expert faculty sessions, and registration guidance for each exam.",
  },
  {
    q: "What sectors do JKKN nursing graduates work in after placement?",
    a: "JKKN nursing graduates work across multiple healthcare sectors: Private Hospitals (Apollo, Fortis, Manipal, MIOT), International Hospitals (NHS UK, Cleveland Clinic Abu Dhabi), Government Hospitals (AIIMS, ESI, TN Government), Clinical Research Organizations, Pharmaceutical Companies, Community and Public Health Organizations, and Home Healthcare Services.",
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
  name: "Placements at JKKN College of Nursing",
  description:
    "Comprehensive placement record of JKKN College of Nursing with 97% success rate, 80+ recruiters, and international opportunities in 6 countries.",
  url: "https://nursing.sresakthimayeil.jkkn.ac.in/placement",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/#website",
  },
  about: {
    "@type": "EducationalOrganization",
    "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/#organization",
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Top Recruiters at JKKN College of Nursing",
    numberOfItems: 15,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Apollo Hospitals" },
      { "@type": "ListItem", position: 2, name: "Fortis Healthcare" },
      { "@type": "ListItem", position: 3, name: "Manipal Hospitals" },
      { "@type": "ListItem", position: 4, name: "NHS UK" },
      {
        "@type": "ListItem",
        position: 5,
        name: "Cleveland Clinic Abu Dhabi",
      },
      { "@type": "ListItem", position: 6, name: "MIOT Hospitals" },
      { "@type": "ListItem", position: 7, name: "Kauvery Hospital" },
      { "@type": "ListItem", position: 8, name: "KMCH" },
      {
        "@type": "ListItem",
        position: 9,
        name: "Saudi German Hospital",
      },
      {
        "@type": "ListItem",
        position: 10,
        name: "Aster DM Healthcare",
      },
      {
        "@type": "ListItem",
        position: 11,
        name: "Singapore General Hospital",
      },
      { "@type": "ListItem", position: 12, name: "AIIMS" },
      {
        "@type": "ListItem",
        position: 13,
        name: "Meenakshi Mission Hospital",
      },
      {
        "@type": "ListItem",
        position: 14,
        name: "Government Hospitals (Tamil Nadu)",
      },
      { "@type": "ListItem", position: 15, name: "ESI Hospitals" },
    ],
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".speakable", "[data-speakable]"],
  },
};

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const yearWiseStats = [
  {
    year: "2024–25",
    placed: "55 / 58",
    rate: "95%",
    avgPkg: "₹4.2 LPA",
    highPkg: "₹25 LPA (International)",
  },
  {
    year: "2023–24",
    placed: "52 / 56",
    rate: "93%",
    avgPkg: "₹3.8 LPA",
    highPkg: "₹22 LPA (International)",
  },
  {
    year: "2022–23",
    placed: "48 / 52",
    rate: "92%",
    avgPkg: "₹3.5 LPA",
    highPkg: "₹20 LPA (International)",
  },
];

const salaryRanges = [
  {
    category: "India (Private Hospitals)",
    starting: "₹2.5–3.0 LPA",
    average: "₹3.5–4.5 LPA",
    top: "₹6–8 LPA",
  },
  {
    category: "India (Government)",
    starting: "₹3.5–4.5 LPA",
    average: "₹5.0–7.0 LPA",
    top: "₹8–10 LPA",
  },
  {
    category: "International (UK / NHS)",
    starting: "₹15–18 LPA",
    average: "₹20–25 LPA",
    top: "₹25+ LPA",
  },
  {
    category: "International (Gulf / UAE)",
    starting: "₹8–12 LPA",
    average: "₹12–18 LPA",
    top: "₹20+ LPA",
  },
];

const recruitersIndia = [
  "Apollo Hospitals",
  "Fortis Healthcare",
  "Manipal Hospitals",
  "MIOT Hospitals",
  "Kauvery Hospital",
  "Meenakshi Mission Hospital",
  "KMCH",
  "Kaveri Hospital",
  "Narayana Health",
  "KIMS",
];

const recruitersInternational = [
  "NHS UK",
  "Cleveland Clinic Abu Dhabi",
  "Saudi German Hospital",
  "Aster DM Healthcare (UAE)",
  "Singapore General Hospital",
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
    employers: "NHS (National Health Service)",
    support:
      "OET / IELTS coaching, NMC registration guidance, CBT exam preparation, visa documentation support",
    pkgRange: "₹15–25+ LPA",
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    employers: "Cleveland Clinic Abu Dhabi, Aster DM Healthcare",
    support:
      "DHA / HAAD exam coaching, Emirates nursing licensing, employment visa support",
    pkgRange: "₹8–20+ LPA",
  },
  {
    country: "Saudi Arabia",
    flag: "🇸🇦",
    employers: "Saudi German Hospital",
    support:
      "PROMETRIC exam preparation, SCFHS registration guidance, Iqama process support",
    pkgRange: "₹8–18 LPA",
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    employers: "Singapore General Hospital & private hospitals",
    support:
      "SNB registration guidance, language proficiency preparation, work visa support",
    pkgRange: "₹10–20 LPA",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    employers: "Public & private hospital networks",
    support:
      "IELTS / OET coaching, AHPRA registration guidance, skills assessment support",
    pkgRange: "₹15–25 LPA",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    employers: "Provincial health authorities",
    support:
      "NCLEX-RN preparation, provincial nursing college registration, Express Entry documentation",
    pkgRange: "₹15–25 LPA",
  },
];

const sectorCards = [
  {
    icon: HeartIcon,
    title: "Private Hospitals",
    desc: "Leading hospital chains like Apollo, Fortis, Manipal, and MIOT offer clinical nursing roles in ICU, OT, Emergency, and Specialty departments.",
    recruiters: "Apollo, Fortis, Manipal, MIOT, Kauvery, KMCH",
    percentage: "45%",
  },
  {
    icon: GlobeAltIcon,
    title: "International Healthcare",
    desc: "Premium placements in UK (NHS), UAE, Saudi Arabia, Singapore, Australia, and Canada with packages up to ₹25 LPA.",
    recruiters: "NHS UK, Cleveland Clinic Abu Dhabi, Aster DM, Singapore GH",
    percentage: "20%",
  },
  {
    icon: ShieldCheckIcon,
    title: "Government Hospitals",
    desc: "Stable government positions in AIIMS, ESI, Tamil Nadu government hospitals, and Primary Health Centers with excellent benefits.",
    recruiters: "AIIMS, ESI, TN Govt Hospitals, PHC/CHC",
    percentage: "15%",
  },
  {
    icon: BeakerIcon,
    title: "Clinical Research",
    desc: "Research associate and clinical trial coordinator roles in pharmaceutical and clinical research organizations.",
    recruiters: "Pharma CROs, Research Institutes",
    percentage: "8%",
  },
  {
    icon: AcademicCapIcon,
    title: "Nursing Education",
    desc: "Teaching and faculty positions in nursing colleges, medical universities, and healthcare training institutes. Preferred for M.Sc graduates.",
    recruiters: "Nursing Colleges, Medical Universities",
    percentage: "7%",
  },
  {
    icon: HomeModernIcon,
    title: "Community & Home Health",
    desc: "Community health nursing, home healthcare services, public health programs, and NGO healthcare initiatives.",
    recruiters: "Home Health Agencies, NGOs, Public Health Orgs",
    percentage: "5%",
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

const testimonials = [
  {
    quote:
      "Getting placed at NHS UK with a ₹22 LPA package was a dream I thought was out of reach. JKKN's OET coaching and visa guidance made it possible. The senior learners prepared us not just clinically but for international standards.",
    name: "[UPDATE — Student Name]",
    batch: "B.Sc Nursing — 2023 Batch",
    company: "NHS UK — ₹22 LPA",
  },
  {
    quote:
      "I am now working at Apollo Hospitals, Chennai, in the ICU department. The clinical training at JKKN's 500-bed hospital gave me hands-on confidence from day one. The placement cell conducted mock interviews that were extremely helpful.",
    name: "[UPDATE — Student Name]",
    batch: "B.Sc Nursing — 2024 Batch",
    company: "Apollo Hospitals, Chennai",
  },
  {
    quote:
      "Being selected for Cleveland Clinic Abu Dhabi is beyond what I imagined. JKKN's HAAD coaching and the dedicated international placement cell handled everything — from the application to the visa process.",
    name: "[UPDATE — Student Name]",
    batch: "M.Sc Nursing — 2023 Batch",
    company: "Cleveland Clinic Abu Dhabi",
  },
  {
    quote:
      "After completing M.Sc Nursing, I got placed as a Nursing Educator. The research exposure and clinical training at JKKN gave me a strong foundation for teaching. The placement cell connected me with multiple colleges.",
    name: "[UPDATE — Student Name]",
    batch: "M.Sc Nursing — 2024 Batch",
    company: "Nursing Education Institution",
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
                JKKN College of Nursing — Placement Cell
              </p>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
                data-speakable="true"
              >
                97% Placement Success Rate — Your Nursing Career Starts Here
              </h1>
              <p className="text-green-100 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                80+ recruiters including NHS UK, Apollo, Fortis, and Cleveland
                Clinic Abu Dhabi. Domestic and international placements with
                packages from ₹3.5 LPA to ₹25 LPA. Dedicated placement cell
                with NCLEX, OET, IELTS coaching and full visa support.
              </p>

              {/* Hero Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/20">
                  <p className="text-3xl sm:text-4xl font-bold text-[#FFD700]">
                    97%
                  </p>
                  <p className="text-green-100 text-sm mt-1">
                    Placement Success Rate
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/20">
                  <p className="text-3xl sm:text-4xl font-bold text-[#FFD700]">
                    80+
                  </p>
                  <p className="text-green-100 text-sm mt-1">
                    Recruiting Partners
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-white/20">
                  <p className="text-3xl sm:text-4xl font-bold text-[#FFD700]">
                    ₹25 LPA
                  </p>
                  <p className="text-green-100 text-sm mt-1">
                    Highest Package (International)
                  </p>
                </div>
              </div>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="https://www.jkkn.ai/apply/jkkn-admission-2026"
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
                Consistent placement track record with growing packages and
                increasing international opportunities every year.
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
                      Avg Package (India)
                    </th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-semibold">
                      Highest Package
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
              * Statistics are based on eligible learners who registered
              with the Placement Cell. International packages converted at
              prevailing exchange rates. [UPDATE — Verify exact numbers with
              Placement Cell]
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 3: TOP RECRUITERS
            ═══════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#FBFBEE]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                Our Top Recruiting Partners
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                80+ hospitals, healthcare chains, and international employers
                actively recruit from JKKN College of Nursing.
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
            SECTION 4: SALARY RANGES
            ═══════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                Salary Packages — Domestic & International
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Competitive salary ranges across private hospitals, government
                positions, and international placements.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#0b7845] text-white">
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-semibold">
                      Category
                    </th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-semibold">
                      Starting Salary
                    </th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-semibold">
                      Average Salary
                    </th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-sm sm:text-base font-semibold">
                      Top Package
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {salaryRanges.map((row, idx) => (
                    <tr
                      key={row.category}
                      className={
                        idx % 2 === 0 ? "bg-green-50/50" : "bg-white"
                      }
                    >
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-800">
                        {row.category}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700">
                        {row.starting}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700">
                        {row.average}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#0b7845]">
                        {row.top}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              Join 1000+ alumni who have launched successful careers in
              healthcare — in India and across 6 countries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="https://www.jkkn.ai/apply/jkkn-admission-2026"
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
                JKKN graduates work in 6 countries with dedicated support for
                licensing exams, registration, and visa processing.
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
                As one of the <Link href="/" className="text-[#0b7845] font-semibold hover:underline">best nursing colleges in Tamil Nadu</Link>, JKKN nursing graduates are placed across diverse healthcare
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
                        <span className="text-sm text-[#0b7845] font-medium">
                          ~{sector.percentage} of graduates
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      {sector.desc}
                    </p>
                    <p className="text-xs text-gray-500">
                      <span className="font-medium">Key Recruiters:</span>{" "}
                      {sector.recruiters}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-gray-500 mt-6 text-center">
              * Sector percentages are approximate and vary by academic year.
              [UPDATE — Verify percentages with Placement Cell]
            </p>
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
            SECTION 8: STUDENT TESTIMONIALS
            ═══════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3">
                Learner Success Stories
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from our graduates who have built successful nursing
                careers in India and abroad.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-[#FBFBEE] rounded-xl border border-gray-200 p-5 sm:p-6"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-4 h-4 text-[#FFD700] fill-[#FFD700]"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-sm sm:text-base italic mb-4 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500">{t.batch}</p>
                    <p className="text-xs text-[#0b7845] font-medium mt-1">
                      Placed at: {t.company}
                    </p>
                  </div>
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
                recruiters, and career opportunities at JKKN College of
                Nursing.
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
              97% placement rate. 80+ recruiters. International opportunities in
              6 countries. Dedicated placement cell with complete career support
              — from exam coaching to visa assistance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <CheckCircleIcon className="w-8 h-8 text-[#FFD700] mx-auto mb-2" />
                <p className="font-semibold">INC Approved</p>
                <p className="text-green-200 text-sm">
                  NAAC Accredited
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <ChartBarIcon className="w-8 h-8 text-[#FFD700] mx-auto mb-2" />
                <p className="font-semibold">500-Bed Hospital</p>
                <p className="text-green-200 text-sm">
                  Clinical Training from Year 1
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <GlobeAltIcon className="w-8 h-8 text-[#FFD700] mx-auto mb-2" />
                <p className="font-semibold">6 Countries</p>
                <p className="text-green-200 text-sm">
                  International Placements
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="https://www.jkkn.ai/apply/jkkn-admission-2026"
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
                Published by JKKN College of Nursing — Placement Cell
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Sresakthimayeil Institute of Nursing and Research
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Natarajapuram, NH-544 (Salem-Coimbatore Highway),
                Komarapalayam, Namakkal, Tamil Nadu 638183
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Affiliated to Tamil Nadu Dr. M.G.R. Medical University |
                INC Approved | NAAC Accredited
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
