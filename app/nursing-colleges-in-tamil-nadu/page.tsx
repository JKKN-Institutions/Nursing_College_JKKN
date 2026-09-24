import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CityFaqAccordion } from "@/components/CityFaqAccordion";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import TnCollegeDirectory from "@/components/TnCollegeDirectory";
import { TN_DISTRICTS, TN_SOURCE, TN_TOTALS } from "@/data/tn-nursing-colleges-2026-27";
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  MapPinIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const BASE = "https://nursing.sresakthimayeil.jkkn.ac.in";

/**
 * The state-level list page.
 *
 * It exists because the site had no page for list intent at all. Measured in GSC over
 * 2026-06-23..2026-09-20, every "colleges in tamilnadu" phrasing returned ZERO mobile
 * impressions, while /admissions/bsc-nursing took 15,152 on counselling-date queries.
 * The site answered "when do I apply" and never answered "which colleges exist".
 *
 * /msc-nursing is the counter-example that decided the page rather than a section: it has
 * carried the title "M.Sc Nursing Colleges in Tamil Nadu" all along and earns 4 mobile
 * impressions. A title claiming a list does not win list intent; only a list does.
 */

const govtDistricts = TN_DISTRICTS.filter((d) => d.governmentCount > 0);
const biggest = [...TN_DISTRICTS]
  .filter((d) => d.district !== "District not stated in the source")
  .sort((a, b) => b.colleges.length - a.colleges.length)[0];

const faqs = [
  {
    q: "How many nursing colleges are there in Tamil Nadu?",
    a: `Tamil Nadu has ${TN_TOTALS.colleges} B.Sc Nursing colleges affiliated to The Tamil Nadu Dr. M.G.R. Medical University for the ${TN_SOURCE.academicYear} academic year, with ${TN_TOTALS.seats.toLocaleString("en-IN")} sanctioned seats between them across ${TN_TOTALS.districts} districts. ${TN_TOTALS.government} are government colleges and the rest are self-financing. The figures come from the university's affiliated-colleges list dated ${TN_SOURCE.dated}; a college must be on that list for its degree to be awarded by the university.`,
  },
  {
    q: "Which is the best nursing college in Tamil Nadu?",
    a: `There is no single best one, and any list that ranks them is someone's opinion rather than a published measure. The Tamil Nadu Dr. M.G.R. Medical University publishes which colleges are approved and how many seats each is sanctioned — it does not publish a quality ranking of the ${TN_TOTALS.colleges} colleges. Four things are worth comparing and you can check all four yourself: whether the college has its own attached teaching hospital and from which year clinical postings start; the sanctioned intake, because a smaller batch means less competition for the same ward; whether it is government (only ${TN_TOTALS.government} of the ${TN_TOTALS.colleges} are) or self-financing, since the fee difference is large; and the daily journey from your home, measured at the hour you would actually travel.`,
  },
  {
    q: "Which nursing colleges in Tamil Nadu are INC approved?",
    a: `Every college on this page is affiliated to The Tamil Nadu Dr. M.G.R. Medical University for ${TN_SOURCE.academicYear}. The university's list also records the approving body for each college — the Indian Nursing Council, the Tamil Nadu Nurses and Midwives Council, or both. Approval status is decided per college and per academic year, so check the current university list and the college's own approval letter before you pay a fee. JKKN College of Nursing and Research is on this list under Namakkal district, institution code 262, with 60 sanctioned B.Sc Nursing seats.`,
  },
  {
    q: "How many government nursing colleges are there in Tamil Nadu?",
    a: `${TN_TOTALS.government} of the ${TN_TOTALS.colleges} B.Sc Nursing colleges on the university's ${TN_SOURCE.academicYear} affiliated list are government colleges. They are spread across ${govtDistricts.length} districts: ${govtDistricts.map((d) => d.district).join(", ")}. Every other college on the list is self-financing.`,
  },
  {
    q: "Which district in Tamil Nadu has the most nursing colleges?",
    a: `${biggest.district} has the most, with ${biggest.colleges.length} B.Sc Nursing colleges and ${biggest.seats.toLocaleString("en-IN")} sanctioned seats on the university's ${TN_SOURCE.academicYear} list. The district-by-district table on this page gives the count and the sanctioned seats for all ${TN_TOTALS.districts} districts.`,
  },
  {
    q: "Is JKKN College of Nursing and Research on the Tamil Nadu university list?",
    a: `Yes. It appears as institution code 262, in Namakkal district, Komarapalayam, with 60 sanctioned B.Sc Nursing seats for ${TN_SOURCE.academicYear}. It is approved by the Indian Nursing Council, accredited by NAAC and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. It is one of ${TN_TOTALS.colleges} colleges on the list and this page does not rank it above any of the others.`,
  },
  {
    q: "What is the difference between B.Sc Nursing, Post Basic B.Sc Nursing and M.Sc Nursing?",
    a: "B.Sc Nursing is a four-year undergraduate degree taken after 10+2 with Physics, Chemistry and Biology. Post Basic B.Sc Nursing is a two-year degree for candidates who already hold a GNM diploma and are registered nurses. M.Sc Nursing is a two-year postgraduate degree taken after B.Sc Nursing or Post Basic B.Sc Nursing, with specialisations such as Medical-Surgical, Community Health, Child Health, Mental Health and Obstetrics and Gynaecological Nursing.",
  },
  {
    q: "Is NEET required for B.Sc Nursing in Tamil Nadu?",
    a: "No, NEET is not required for B.Sc Nursing in Tamil Nadu. Admission is merit-based on the 10+2 marks in Physics, Chemistry and Biology, normalised by the Tamil Nadu Selection Committee. Contact the admission office of the college you are applying to for the current year's dates.",
  },
];

export const metadata: Metadata = {
  title: "Nursing Colleges in Tamil Nadu 2026 — All 284, District Wise",
  description:
    "All 284 B.Sc Nursing colleges affiliated to TNMGRMU for 2026-27, district by district, with sanctioned seats. 18,960 seats across 35 districts. From the university's own list.",
  keywords:
    "nursing colleges in tamilnadu, bsc nursing colleges in tamilnadu, b sc nursing colleges in tamil nadu, list of nursing colleges in tamilnadu, inc approved nursing colleges in tamilnadu, government nursing colleges in tamilnadu, nursing college list tamilnadu, tnmgrmu nursing colleges",
  alternates: { canonical: `${BASE}/nursing-colleges-in-tamil-nadu` },
  openGraph: {
    title: "Nursing Colleges in Tamil Nadu 2026 — All 284, District Wise",
    description:
      "The university's own affiliated list for 2026-27: 284 B.Sc Nursing colleges, 18,960 sanctioned seats, 35 districts. Not a ranking.",
    url: `${BASE}/nursing-colleges-in-tamil-nadu`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nursing Colleges in Tamil Nadu 2026 — All 284, District Wise",
    description:
      "284 B.Sc Nursing colleges, 18,960 sanctioned seats, 35 districts, from the TNMGRMU affiliated list dated 03.08.2026.",
  },
  robots: { index: true, follow: true },
};

export default function TamilNaduNursingCollegesPage() {
  return (
    <div className="min-h-screen font-sans bg-[#FBFBEE]">
      <Header />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${BASE}/` },
          { name: "Nursing Colleges in Tamil Nadu", url: `${BASE}/nursing-colleges-in-tamil-nadu` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-[#006837] via-[#002309] to-[#002309] py-12 sm:py-16 md:py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-5 sm:mb-6">
              <CheckBadgeIcon className="w-4 h-4 text-white" aria-hidden="true" />
              <span className="text-white text-xs sm:text-sm font-medium">
                From the university&apos;s own affiliated list, {TN_SOURCE.dated}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-5 leading-tight">
              Nursing Colleges in Tamil Nadu
            </h1>

            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
              Every B.Sc Nursing college affiliated to The Tamil Nadu Dr. M.G.R. Medical University
              for {TN_SOURCE.academicYear}, district by district, with the sanctioned intake for
              each. This is the university&apos;s approval list — it is not a ranking, and nobody
              publishes one.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                { icon: AcademicCapIcon, v: TN_TOTALS.colleges, l: "Colleges" },
                {
                  icon: BuildingLibraryIcon,
                  v: TN_TOTALS.seats.toLocaleString("en-IN"),
                  l: "Sanctioned seats",
                },
                { icon: MapPinIcon, v: TN_TOTALS.districts, l: "Districts" },
                { icon: CheckBadgeIcon, v: TN_TOTALS.government, l: "Government" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4"
                >
                  <s.icon className="w-5 h-5 mx-auto text-white/80 mb-1" aria-hidden="true" />
                  <div className="text-xl sm:text-2xl font-bold text-white">{s.v}</div>
                  <div className="text-[11px] sm:text-xs text-white/70 uppercase tracking-wide">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Which is the best? ────────────────────────────────────── */}
        <section className="bg-[#FBFBEE] py-12 sm:py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight text-center">
              Which is the best nursing college in Tamil Nadu?
            </h2>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
              There is no single best one, and any list that ranks them is someone&apos;s opinion
              rather than a published measure. The university publishes which colleges are approved
              and how many seats each is sanctioned. It does not publish a quality ranking of the{" "}
              {TN_TOTALS.colleges} colleges, and neither does anyone else with the authority to.
              Four things are worth comparing, and you can check all four yourself.
            </p>

            <ol className="space-y-4 mb-6">
              {[
                {
                  h: "An attached teaching hospital",
                  b: "Clinical postings are the course. Ask which hospital you will be posted to, whether it is on the same campus, and from which year postings start.",
                },
                {
                  h: "Sanctioned intake",
                  b: `Across the state the intake per college runs from 30 to 200 seats, ${TN_TOTALS.seats.toLocaleString(
                    "en-IN",
                  )} in total. A smaller batch means less competition for the same ward.`,
                },
                {
                  h: "Government or self-financing",
                  b: `Only ${TN_TOTALS.government} of the ${TN_TOTALS.colleges} are government colleges, and the fee difference against a self-financing college is large. The table below marks every one.`,
                },
                {
                  h: "The daily journey",
                  b: "A college an hour closer is a college you reach on time for a 7 a.m. posting for four years. Measure it at the hour you would actually travel.",
                },
              ].map((c, i) => (
                <li key={c.h} className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#006837] text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{c.h}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{c.b}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              On our own side of it, plainly: JKKN College of Nursing and Research is one of the{" "}
              {TN_TOTALS.colleges} colleges on this list, institution code 262, Namakkal district,
              with 60 sanctioned B.Sc Nursing seats. We are not claiming a rank we cannot show you.
              What we can put next to those four criteria is a multi-specialty teaching hospital on
              the same campus with postings from the first year, and a 98% placement rate for
              2024-25 — 58 of 59 graduates, as published in our NIRF 2026 submission.
            </p>
          </div>
        </section>

        {/* ── What affiliation and approval actually mean ───────────── */}
        <section className="bg-white py-12 sm:py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight text-center">
              INC approval and university affiliation — what to check
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Two different bodies matter and people often merge them. The{" "}
                <strong>Indian Nursing Council</strong> and the{" "}
                <strong>Tamil Nadu Nurses and Midwives Council</strong> approve a college to run a
                nursing programme. The <strong>Tamil Nadu Dr. M.G.R. Medical University</strong>{" "}
                affiliates it, which is what allows the degree to be awarded. A college needs both,
                and each is decided per college and per academic year.
              </p>
              <p>
                Every college on this page is on the university&apos;s affiliated list for{" "}
                {TN_SOURCE.academicYear}. That list also records the approving body against each
                college. Because approval is annual, the honest advice is the boring one: ask the
                college for its current approval letter and check the university&apos;s current
                list before you pay a fee. A page cannot do that check for you, and any page that
                claims a permanent approval status for someone else&apos;s college is guessing.
              </p>
              <p>
                Looking for the course rather than the list?{" "}
                <a href="/bsc-nursing" className="text-[#006837] font-semibold hover:underline">
                  B.Sc Nursing
                </a>
                ,{" "}
                <a href="/pbsc-nursing" className="text-[#006837] font-semibold hover:underline">
                  Post Basic B.Sc Nursing
                </a>{" "}
                and{" "}
                <a href="/msc-nursing" className="text-[#006837] font-semibold hover:underline">
                  M.Sc Nursing
                </a>{" "}
                have the eligibility, fees and admission details at JKKN, and{" "}
                <a
                  href="/admissions/bsc-nursing"
                  className="text-[#006837] font-semibold hover:underline"
                >
                  admissions
                </a>{" "}
                has the counselling dates.
              </p>
              <p className="text-sm text-gray-500">
                This page covers <strong>B.Sc Nursing</strong> only. The university publishes
                separate affiliated lists for M.Sc Nursing and Post Basic B.Sc Nursing; those are
                not reproduced here, because we have not read them, and putting a number on this
                page that we have not checked would be worse than leaving the gap visible.
              </p>
            </div>
          </div>
        </section>

        {/* ── The directory ─────────────────────────────────────────── */}
        <TnCollegeDirectory />

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section className="bg-[#FBFBEE] py-12 sm:py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight text-center">
              Frequently Asked Questions
            </h2>
            <CityFaqAccordion faqs={faqs} />
          </div>
        </section>
      </main>

      <Footer hideLifeAtJKKN />
      <ScrollToTop />
    </div>
  );
}
