import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Link from "next/link";

export default function Admissions() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">

        {/* Breadcrumb Schema */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
            { name: "Admissions", url: "https://nursing.sresakthimayeil.jkkn.ac.in/admissions" },
          ]}
        />

        {/* ── 1. HERO BANNER ─────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-[#006837] to-[#7cb983] text-white py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6 text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              INC Approved · NAAC Accredited · TNMGRMU Affiliated
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Admissions 2026-27
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Begin your nursing career at one of Tamil Nadu&apos;s top INC-approved nursing colleges
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#006837] font-bold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors text-base shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Apply Online Now
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Prospectus
              </a>
            </div>
          </div>
        </section>

        {/* ── 2. WHY CHOOSE JKKN NURSING ─────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b7845] mb-3">
                Why Choose JKKN College of Nursing?
              </h2>
              <div className="w-16 h-1 bg-[#7cb983] mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                A legacy of excellence, clinical depth, and career outcomes that set our graduates apart
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-[#FBFBEE] border border-[#d4eadb] rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#006837] rounded-lg flex items-center justify-center text-white text-xl">
                  🏛️
                </div>
                <div>
                  <h3 className="font-bold text-[#0b7845] text-base mb-1">INC Approved &amp; NAAC Accredited</h3>
                  <p className="text-gray-600 text-sm">Recognized by the Indian Nursing Council and accredited by NAAC for academic quality and standards.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FBFBEE] border border-[#d4eadb] rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#006837] rounded-lg flex items-center justify-center text-white text-xl">
                  🏥
                </div>
                <div>
                  <h3 className="font-bold text-[#0b7845] text-base mb-1">500+ Bed Teaching Hospital</h3>
                  <p className="text-gray-600 text-sm">Hands-on clinical training from Year 1 at our attached multi-specialty teaching hospital with real patient exposure.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#FBFBEE] border border-[#d4eadb] rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#006837] rounded-lg flex items-center justify-center text-white text-xl">
                  📈
                </div>
                <div>
                  <h3 className="font-bold text-[#0b7845] text-base mb-1">98%+ Placement Rate</h3>
                  <p className="text-gray-600 text-sm">Consistently high placement record with graduates placed in leading hospitals across India and abroad.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#FBFBEE] border border-[#d4eadb] rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#006837] rounded-lg flex items-center justify-center text-white text-xl">
                  ✈️
                </div>
                <div>
                  <h3 className="font-bold text-[#0b7845] text-base mb-1">International Opportunities</h3>
                  <p className="text-gray-600 text-sm">Career pathways to UK (NHS), UAE (Cleveland Clinic Abu Dhabi), Saudi Arabia, and Singapore for eligible graduates.</p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-[#FBFBEE] border border-[#d4eadb] rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#006837] rounded-lg flex items-center justify-center text-white text-xl">
                  🎓
                </div>
                <div>
                  <h3 className="font-bold text-[#0b7845] text-base mb-1">TNMGRMU Affiliated</h3>
                  <p className="text-gray-600 text-sm">Affiliated to Tamil Nadu Dr. MGR Medical University, ensuring a nationally recognized and credible degree.</p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-[#FBFBEE] border border-[#d4eadb] rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#006837] rounded-lg flex items-center justify-center text-white text-xl">
                  🌟
                </div>
                <div>
                  <h3 className="font-bold text-[#0b7845] text-base mb-1">74+ Years JKKN Legacy</h3>
                  <p className="text-gray-600 text-sm">Part of JKKN Institutions — a trusted name in education since 1952 with 10 institutions across Tamil Nadu.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. ADMISSION PROCESS ───────────────────────────────── */}
        <section id="admission-process" className="bg-[#FBFBEE] py-14 md:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b7845] mb-3">
                Admission Process
              </h2>
              <div className="w-16 h-1 bg-[#7cb983] mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                Follow these 6 simple steps to secure your seat at JKKN College of Nursing
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: 1,
                  title: "Check Eligibility",
                  desc: "Verify you meet the minimum eligibility criteria for your chosen nursing program — B.Sc, M.Sc, or Post Basic B.Sc Nursing.",
                },
                {
                  step: 2,
                  title: "Apply Online",
                  desc: "Fill out the online application form at admission.jkkn.ac.in with accurate personal and academic details.",
                },
                {
                  step: 3,
                  title: "Document Verification",
                  desc: "Submit original mark sheets, NEET score card, transfer certificate, and other required documents for verification.",
                },
                {
                  step: 4,
                  title: "Counselling",
                  desc: "Attend the counselling session for seat allotment — through Government Quota (state merit) or Management Quota.",
                },
                {
                  step: 5,
                  title: "Fee Payment",
                  desc: "Pay the prescribed tuition and admission fees through the official payment portal to confirm your allotted seat.",
                },
                {
                  step: 6,
                  title: "Admission Confirmed",
                  desc: "Receive your admission letter and report on the specified joining date to begin your nursing education journey.",
                },
              ].map(({ step, title, desc }) => (
                <div
                  key={step}
                  className="bg-white rounded-xl p-6 border border-[#d4eadb] hover:shadow-md transition-shadow flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#006837] text-white font-bold text-lg flex items-center justify-center shadow">
                      {step}
                    </div>
                    <h3 className="font-bold text-[#0b7845] text-base">{title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#006837] hover:bg-[#004d28] text-white font-bold px-8 py-3.5 rounded-lg transition-colors text-base shadow"
              >
                Start Your Application
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── 4. PROGRAMS & ELIGIBILITY ──────────────────────────── */}
        <section id="programs" className="bg-white py-14 md:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b7845] mb-3">
                Programs &amp; Eligibility
              </h2>
              <div className="w-16 h-1 bg-[#7cb983] mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                Choose the nursing program that aligns with your qualifications and career goals
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#d4eadb] shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#006837] text-white">
                  <tr>
                    <th className="px-5 py-4 font-semibold whitespace-nowrap">Program</th>
                    <th className="px-5 py-4 font-semibold whitespace-nowrap">Duration</th>
                    <th className="px-5 py-4 font-semibold whitespace-nowrap">Seats</th>
                    <th className="px-5 py-4 font-semibold">Eligibility</th>
                    <th className="px-5 py-4 font-semibold whitespace-nowrap">Annual Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8f5e9]">
                  <tr className="bg-white hover:bg-[#f0faf3] transition-colors">
                    <td className="px-5 py-4 font-bold text-[#0b7845] whitespace-nowrap">B.Sc Nursing</td>
                    <td className="px-5 py-4 text-gray-700 whitespace-nowrap">4 Years</td>
                    <td className="px-5 py-4 text-gray-700 whitespace-nowrap">60</td>
                    <td className="px-5 py-4 text-gray-700">10+2 with PCB, min 45%, NEET-UG qualified</td>
                    <td className="px-5 py-4 font-semibold text-[#006837] whitespace-nowrap">₹95,000</td>
                  </tr>
                  <tr className="bg-[#f9fef9] hover:bg-[#f0faf3] transition-colors">
                    <td className="px-5 py-4 font-bold text-[#0b7845] whitespace-nowrap">M.Sc Nursing</td>
                    <td className="px-5 py-4 text-gray-700 whitespace-nowrap">2 Years</td>
                    <td className="px-5 py-4 text-gray-700 whitespace-nowrap">25</td>
                    <td className="px-5 py-4 text-gray-700">B.Sc Nursing with min 55%, 1 year experience</td>
                    <td className="px-5 py-4 font-semibold text-[#006837] whitespace-nowrap">₹1,25,000</td>
                  </tr>
                  <tr className="bg-white hover:bg-[#f0faf3] transition-colors">
                    <td className="px-5 py-4 font-bold text-[#0b7845]">Post Basic B.Sc Nursing</td>
                    <td className="px-5 py-4 text-gray-700 whitespace-nowrap">2 Years</td>
                    <td className="px-5 py-4 text-gray-700 whitespace-nowrap">30</td>
                    <td className="px-5 py-4 text-gray-700">GNM Diploma + RN registration, min 1 year experience</td>
                    <td className="px-5 py-4 font-semibold text-[#006837] whitespace-nowrap">₹85,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-gray-500 flex items-start gap-1.5">
              <svg className="w-4 h-4 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Fees are subject to revision. See{" "}
              <Link href="/fee-structure" className="text-[#006837] underline hover:text-[#004d28]">
                Fee Structure
              </Link>{" "}
              for complete details.
            </p>
          </div>
        </section>

        {/* ── 5. REQUIRED DOCUMENTS ──────────────────────────────── */}
        <section className="bg-[#FBFBEE] py-14 md:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b7845] mb-3">
                Required Documents
              </h2>
              <div className="w-16 h-1 bg-[#7cb983] mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                Keep these documents ready before you arrive for verification
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-xl border border-[#d4eadb] p-6 sm:p-8 shadow-sm">
              <ul className="space-y-3">
                {[
                  { doc: "10th & 12th Mark Sheets", note: "Original + 3 attested copies" },
                  { doc: "NEET-UG Score Card", note: "For B.Sc Nursing applicants" },
                  { doc: "Transfer Certificate & Migration Certificate", note: "" },
                  { doc: "Community Certificate", note: "If applicable (BC/MBC/SC/ST)" },
                  { doc: "Aadhaar Card", note: "Self-attested photocopy" },
                  { doc: "8 Passport Size Photographs", note: "Recent, white background" },
                  { doc: "Medical Fitness Certificate", note: "From a registered medical officer" },
                  { doc: "GNM Certificate & RN Registration", note: "For Post Basic B.Sc Nursing applicants" },
                  { doc: "B.Sc Nursing Degree & Experience Certificate", note: "For M.Sc Nursing applicants" },
                ].map(({ doc, note }) => (
                  <li key={doc} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#006837] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="text-gray-800 font-medium text-sm">{doc}</span>
                      {note && (
                        <span className="text-gray-500 text-xs ml-2">— {note}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 6. IMPORTANT DATES ─────────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b7845] mb-3">
                Important Dates 2026-27
              </h2>
              <div className="w-16 h-1 bg-[#7cb983] mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                Plan your application timeline with these key dates
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
              {[
                { icon: "📋", label: "Application Opens", date: "March 2026", color: "bg-[#e8f5e9]", border: "border-[#7cb983]" },
                { icon: "📝", label: "NEET-UG Exam", date: "May 2026", color: "bg-[#fff8e1]", border: "border-yellow-400" },
                { icon: "🏛️", label: "Counselling Begins", date: "July 2026", color: "bg-[#e3f2fd]", border: "border-blue-300" },
                { icon: "🎓", label: "Classes Commence", date: "September 2026", color: "bg-[#fce4ec]", border: "border-pink-300" },
              ].map(({ icon, label, date, color, border }) => (
                <div key={label} className={`${color} border-l-4 ${border} rounded-xl p-5 text-center shadow-sm`}>
                  <div className="text-3xl mb-2">{icon}</div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">{label}</p>
                  <p className="text-base font-bold text-[#0b7845]">{date}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-1.5">
              <svg className="w-4 h-4 text-[#7cb983] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Dates are tentative and subject to government/university notifications.
            </p>
          </div>
        </section>

        {/* ── 7. SCHOLARSHIP & FINANCIAL AID ─────────────────────── */}
        <section className="bg-[#FBFBEE] py-14 md:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b7845] mb-3">
                Scholarships &amp; Financial Aid
              </h2>
              <div className="w-16 h-1 bg-[#7cb983] mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                Quality nursing education should be accessible — explore support options available to you
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: "🏦",
                  title: "Government Scholarships",
                  desc: "Scholarships available for BC, MBC, SC, and ST students through Tamil Nadu government welfare schemes.",
                },
                {
                  icon: "🥇",
                  title: "Merit-Based Concessions",
                  desc: "Fee concessions awarded to academically outstanding students based on 10+2 and NEET performance.",
                },
                {
                  icon: "💳",
                  title: "Education Loan Assistance",
                  desc: "Tie-ups with major nationalized and private banks to help students avail hassle-free education loans.",
                },
                {
                  icon: "🎖️",
                  title: "Management Quota Scholarships",
                  desc: "Special scholarships for toppers admitted under management quota — based on academic merit and performance.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white rounded-xl border border-[#d4eadb] p-6 text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-bold text-[#0b7845] text-base mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. CONTACT ADMISSIONS ──────────────────────────────── */}
        <section className="bg-white py-14 md:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b7845] mb-3">
                Contact Admissions Office
              </h2>
              <div className="w-16 h-1 bg-[#7cb983] mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
                Have questions? Our admissions team is here to help you every step of the way
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-[#FBFBEE] border border-[#d4eadb] rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="space-y-5">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 bg-[#006837] rounded-lg flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">Phone</p>
                      <a href="tel:+919345855001" className="text-[#006837] font-bold text-base hover:underline">
                        +91 93458 55001
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 bg-[#006837] rounded-lg flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">Email</p>
                      <a href="mailto:nursing@jkkn.ac.in" className="text-[#006837] font-bold text-base hover:underline break-all">
                        nursing@jkkn.ac.in
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 bg-[#006837] rounded-lg flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">Address</p>
                      <p className="text-gray-700 text-sm leading-relaxed font-medium">
                        Natarajapuram, NH-544,<br />
                        Komarapalayam, Namakkal,<br />
                        Tamil Nadu 638183
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 bg-[#006837] rounded-lg flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">Office Hours</p>
                      <p className="text-gray-700 text-sm font-medium">
                        Mon – Sat &nbsp;|&nbsp; 9:00 AM – 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t border-[#d4eadb] flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#006837] hover:bg-[#004d28] text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
                  >
                    Apply Online Now
                  </a>
                  <a
                    href="https://www.google.com/maps/place/JKKN+College+of+Nursing+and+Research/@11.443322,77.7289915,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-white border-2 border-[#006837] text-[#006837] hover:bg-[#e8f5e9] font-bold px-6 py-3 rounded-lg transition-colors text-sm"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. CTA SECTION ─────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-[#006837] to-[#7cb983] py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Secure Your Seat for 2026-27
            </h2>
            <p className="text-white/90 text-base sm:text-lg max-w-xl mx-auto mb-8">
              Seats are limited. Apply early to ensure your spot at one of Tamil Nadu&apos;s most trusted nursing colleges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#006837] font-bold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors text-base shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Apply Online Now
              </a>
              <a
                href="#admission-process"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-base"
              >
                View Admission Steps
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
