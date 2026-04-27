import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Scholarships | Sresakthimayeil Institute of Nursing and Research, Tamil Nadu",
  description: "Explore government scholarships available for B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc Nursing students at JKKN College of Nursing — SC/SCA/ST, BC/MBC, and Naan Mudhalvan schemes.",
};

const scholarships = [
  {
    course: "B.Sc Nursing",
    short: "BSc N",
    pmssGQ: "₹45,000 / Year",
    maintenance: "₹5,000 – ₹10,000 / Year",
    firstGraduate: "₹20,000 / Year",
    communityScholarship: "₹5,000 – ₹10,000 / Year",
    trustScholarship: "₹5,000 – ₹10,000 / Year",
    naanMudhalvan: "₹1,000 / Month",
  },
  {
    course: "M.Sc Nursing",
    short: "MSc N",
    pmssGQ: "₹75,000 / Year",
    maintenance: "₹5,000 – ₹10,000 / Year",
    firstGraduate: "—",
    communityScholarship: "₹5,000 – ₹10,000 / Year",
    trustScholarship: "—",
    naanMudhalvan: "—",
  },
  {
    course: "Post Basic B.Sc Nursing",
    short: "PB BSc N",
    pmssGQ: "—",
    maintenance: "< ₹5,000 / Year",
    firstGraduate: "—",
    communityScholarship: "—",
    trustScholarship: "—",
    naanMudhalvan: "—",
  },
];

const columns = [
  {
    group: "SC / SCA / ST / BC-CC",
    items: [
      { key: "pmssGQ", label: "PMSS – Community Scholarship (GQ)" },
      { key: "maintenance", label: "Maintenance Scholarship (GQ)" },
    ],
  },
  {
    group: "BC / MBC / DNC / BCM",
    items: [
      { key: "firstGraduate", label: "First Graduate (GQ)" },
      { key: "communityScholarship", label: "Community Scholarship (GQ)" },
      { key: "trustScholarship", label: "Trust Scholarship – Merit Based (MQ/GQ)" },
    ],
  },
  {
    group: "All Community",
    note: "Govt / Govt-Aided School · Std 6–12 · Tamil Medium",
    items: [{ key: "naanMudhalvan", label: "Naan Mudhalvan Scholarship (Boys/Girls)" }],
  },
];

export default function ScholarshipsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen">

        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
            { name: "Scholarships", url: "https://nursing.sresakthimayeil.jkkn.ac.in/scholarships" },
          ]}
        />

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-[#006837] to-[#7cb983] text-white pt-44 pb-16 md:pt-48 md:pb-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6 text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Government-Approved Scholarship Schemes
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Scholarships for Nursing Students
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              JKKN College of Nursing students are eligible for multiple state and central government scholarship schemes based on community and merit.
            </p>
          </div>
        </section>

        {/* ── DESKTOP TABLE ────────────────────────────────────────── */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 py-16">
          <div className="hidden lg:block overflow-x-auto rounded-2xl shadow-md border border-gray-200">
            <table className="w-full text-sm text-left border-collapse bg-white">
              <thead>
                <tr className="bg-[#006837] text-white">
                  <th className="px-5 py-4 font-semibold border border-[#005a2f] w-48">Course</th>
                  {/* SC group */}
                  <th colSpan={2} className="px-5 py-4 font-semibold border border-[#005a2f] text-center">
                    SC / SCA / ST / BC-CC
                  </th>
                  {/* BC group */}
                  <th colSpan={3} className="px-5 py-4 font-semibold border border-[#005a2f] text-center">
                    BC / MBC / DNC / BCM
                  </th>
                  {/* All community */}
                  <th className="px-5 py-4 font-semibold border border-[#005a2f] text-center">
                    All Community
                    <span className="block text-xs font-normal text-white/75">Govt School · Std 6–12 · Tamil Medium</span>
                  </th>
                </tr>
                <tr className="bg-[#e8f5ee] text-[#002309] text-xs font-semibold">
                  <th className="px-5 py-3 border border-gray-200"></th>
                  <th className="px-5 py-3 border border-gray-200">PMSS – Community Scholarship (GQ)</th>
                  <th className="px-5 py-3 border border-gray-200">Maintenance Scholarship (GQ)</th>
                  <th className="px-5 py-3 border border-gray-200">First Graduate (GQ)</th>
                  <th className="px-5 py-3 border border-gray-200">Community Scholarship (GQ)</th>
                  <th className="px-5 py-3 border border-gray-200">Trust Scholarship – Merit Based (MQ/GQ)</th>
                  <th className="px-5 py-3 border border-gray-200">Naan Mudhalvan Scholarship (Boys/Girls)</th>
                </tr>
              </thead>
              <tbody>
                {scholarships.map((row, i) => (
                  <tr key={row.short} className={i % 2 === 0 ? "bg-white" : "bg-[#f5faf6]"}>
                    <td className="px-5 py-4 font-semibold text-[#006837] border border-gray-200">{row.course}</td>
                    <td className="px-5 py-4 border border-gray-200 text-center">{row.pmssGQ}</td>
                    <td className="px-5 py-4 border border-gray-200 text-center">{row.maintenance}</td>
                    <td className="px-5 py-4 border border-gray-200 text-center">{row.firstGraduate}</td>
                    <td className="px-5 py-4 border border-gray-200 text-center">{row.communityScholarship}</td>
                    <td className="px-5 py-4 border border-gray-200 text-center">{row.trustScholarship}</td>
                    <td className="px-5 py-4 border border-gray-200 text-center">{row.naanMudhalvan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── MOBILE CARDS ─────────────────────────────────────────── */}
          <div className="lg:hidden space-y-8">
            {scholarships.map((row) => (
              <div key={row.short} className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-[#006837] text-white px-5 py-4">
                  <h2 className="text-lg font-bold">{row.course}</h2>
                </div>
                <div className="divide-y divide-gray-100">
                  {columns.map((group) => (
                    <div key={group.group} className="px-5 py-4">
                      <p className="text-xs font-bold text-[#006837] uppercase tracking-wide mb-3">
                        {group.group}
                        {group.note && <span className="font-normal text-gray-500 normal-case ml-1">· {group.note}</span>}
                      </p>
                      <div className="space-y-2">
                        {group.items.map((col) => (
                          <div key={col.key} className="flex justify-between gap-4 text-sm">
                            <span className="text-gray-600">{col.label}</span>
                            <span className="font-semibold text-[#002309] text-right">
                              {row[col.key as keyof typeof row]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── NOTE ─────────────────────────────────────────────────── */}
          <p className="mt-8 text-xs text-gray-500 text-center">
            GQ — Government Quota &nbsp;|&nbsp; MQ — Management Quota &nbsp;|&nbsp; Scholarship amounts are as per the latest government guidelines and are subject to revision.
          </p>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="bg-[#006837] text-white py-14">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-white/85 mb-8 max-w-xl mx-auto text-base">
              Contact our admissions office to find out which scholarship you qualify for and get assistance with your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#006837] font-bold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors text-base shadow-lg"
              >
                View Admissions
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-base"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
