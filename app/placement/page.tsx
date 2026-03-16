import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Link from "next/link";
import Image from "next/image";

export default function Placement() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">

        {/* ── Hero Banner ─────────────────────────────────────────────── */}
        <section className="bg-gradient-to-r from-[#006837] to-[#7cb983] py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px] text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Placements at JKKN College of Nursing
            </h1>
            <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10">
              Launching nursing careers across India and the world — with
              dedicated support, year-round recruitment drives, and international
              opportunities.
            </p>

            {/* Stat boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-6 text-white">
                <p className="text-3xl sm:text-4xl font-extrabold">98%+</p>
                <p className="text-sm sm:text-base mt-1 font-medium">Placement Rate</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-6 text-white">
                <p className="text-3xl sm:text-4xl font-extrabold">80+</p>
                <p className="text-sm sm:text-base mt-1 font-medium">Recruiters</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-6 text-white">
                <p className="text-3xl sm:text-4xl font-extrabold">₹25 LPA</p>
                <p className="text-sm sm:text-base mt-1 font-medium">Highest Package (International)</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Breadcrumb ──────────────────────────────────────────────── */}
        <BreadcrumbSchema
          items={[
            {
              name: "Home",
              url: "https://nursing.sresakthimayeil.jkkn.ac.in/",
            },
            {
              name: "Placement",
              url: "https://nursing.sresakthimayeil.jkkn.ac.in/placement",
            },
          ]}
        />

        {/* ── Placement Overview ──────────────────────────────────────── */}
        <section className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b7845] mb-6">
              Our Placement Philosophy
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-4xl">
              At JKKN College of Nursing, placements are not a terminal
              activity — they are woven into the academic fabric from day one.
              Our dedicated Placement Cell works year-round to bridge the gap
              between education and employability, conducting resume-building
              workshops, mock interviews, soft skills training, and industry
              interaction programmes. We partner with over 80 leading hospitals
              and healthcare organisations in India and abroad to ensure every
              graduate steps into a fulfilling nursing career.
            </p>
          </div>
        </section>

        {/* ── Placement Statistics ────────────────────────────────────── */}
        <section className="bg-[#FBFBEE] py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b7845] mb-6">
              Year-wise Placement Statistics
            </h2>
            <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
              <table className="min-w-full bg-white text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#006837] text-white">
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold whitespace-nowrap">Year</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold whitespace-nowrap">Students Placed</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold whitespace-nowrap">Placement Rate</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold whitespace-nowrap">Avg Package (India)</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold whitespace-nowrap">Highest Package</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="px-4 sm:px-6 py-4 font-medium text-gray-800 whitespace-nowrap">2024–25</td>
                    <td className="px-4 sm:px-6 py-4 text-gray-700">55 / 58</td>
                    <td className="px-4 sm:px-6 py-4">
                      <span className="bg-green-100 text-[#006837] font-semibold px-2 py-1 rounded-full text-xs sm:text-sm">
                        95%
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-gray-700">₹4.2 LPA</td>
                    <td className="px-4 sm:px-6 py-4 text-gray-700">₹25 LPA (International)</td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="px-4 sm:px-6 py-4 font-medium text-gray-800 whitespace-nowrap">2023–24</td>
                    <td className="px-4 sm:px-6 py-4 text-gray-700">52 / 56</td>
                    <td className="px-4 sm:px-6 py-4">
                      <span className="bg-green-100 text-[#006837] font-semibold px-2 py-1 rounded-full text-xs sm:text-sm">
                        93%
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-gray-700">₹3.8 LPA</td>
                    <td className="px-4 sm:px-6 py-4 text-gray-700">₹22 LPA (International)</td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="px-4 sm:px-6 py-4 font-medium text-gray-800 whitespace-nowrap">2022–23</td>
                    <td className="px-4 sm:px-6 py-4 text-gray-700">48 / 52</td>
                    <td className="px-4 sm:px-6 py-4">
                      <span className="bg-green-100 text-[#006837] font-semibold px-2 py-1 rounded-full text-xs sm:text-sm">
                        92%
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-gray-700">₹3.5 LPA</td>
                    <td className="px-4 sm:px-6 py-4 text-gray-700">₹20 LPA (International)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Placement data is indicative. Actual figures may vary.
            </p>
          </div>
        </section>

        {/* ── Top Recruiters ──────────────────────────────────────────── */}
        <section className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b7845] mb-10">
              Our Top Recruiters
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Hospitals — India */}
              <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-green-100 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="bg-[#006837] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    India
                  </span>
                  <h3 className="text-lg font-semibold text-[#0b7845]">Hospitals</h3>
                </div>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  {[
                    "Apollo Hospitals",
                    "Fortis Healthcare",
                    "Manipal Hospitals",
                    "MIOT Hospitals",
                    "Kauvery Hospital",
                    "Meenakshi Mission Hospital",
                    "KMCH",
                  ].map((name) => (
                    <li key={name} className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1 flex-shrink-0">&#10003;</span>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* International */}
              <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-green-100 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="bg-[#0b7845] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    International
                  </span>
                  <h3 className="text-lg font-semibold text-[#0b7845]">Hospitals</h3>
                </div>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  {[
                    "NHS UK",
                    "Cleveland Clinic Abu Dhabi",
                    "Saudi German Hospital",
                    "Aster DM Healthcare (UAE)",
                    "Singapore General Hospital",
                  ].map((name) => (
                    <li key={name} className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1 flex-shrink-0">&#10003;</span>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Government */}
              <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-green-100 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="bg-[#4a7c59] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Government
                  </span>
                  <h3 className="text-lg font-semibold text-[#0b7845]">Hospitals</h3>
                </div>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  {[
                    "Government Hospitals (Tamil Nadu)",
                    "AIIMS",
                    "ESI Hospitals",
                  ].map((name) => (
                    <li key={name} className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1 flex-shrink-0">&#10003;</span>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Salary Ranges ───────────────────────────────────────────── */}
        <section className="bg-[#FBFBEE] py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b7845] mb-6">
              Salary Ranges for Nursing Graduates
            </h2>
            <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
              <table className="min-w-full bg-white text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#006837] text-white">
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold whitespace-nowrap">Category</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold whitespace-nowrap">Starting Salary</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold whitespace-nowrap">Average Salary</th>
                    <th className="px-4 sm:px-6 py-4 text-left font-semibold whitespace-nowrap">Top Package</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      category: "India (Private Hospitals)",
                      start: "₹2.5–3.0 LPA",
                      avg: "₹3.5–4.5 LPA",
                      top: "₹6–8 LPA",
                    },
                    {
                      category: "India (Government)",
                      start: "₹3.5–4.5 LPA",
                      avg: "₹5.0–7.0 LPA",
                      top: "₹8–10 LPA",
                    },
                    {
                      category: "International (UK / NHS)",
                      start: "₹15–18 LPA",
                      avg: "₹20–25 LPA",
                      top: "₹25+ LPA",
                    },
                    {
                      category: "International (Gulf / UAE)",
                      start: "₹8–12 LPA",
                      avg: "₹12–18 LPA",
                      top: "₹20+ LPA",
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-green-50 transition-colors">
                      <td className="px-4 sm:px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
                        {row.category}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-gray-700">{row.start}</td>
                      <td className="px-4 sm:px-6 py-4 text-gray-700">{row.avg}</td>
                      <td className="px-4 sm:px-6 py-4 font-semibold text-[#006837]">
                        {row.top}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── International Placements ────────────────────────────────── */}
        <section className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b7845] mb-4">
              International Placement Destinations
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-3xl">
              JKKN College of Nursing has established partnerships with healthcare
              systems across six countries. Our placement cell provides end-to-end
              support — from licensing exam coaching to visa documentation — so
              graduates can confidently pursue global opportunities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {[
                {
                  flag: "🇬🇧",
                  country: "United Kingdom",
                  employers: "NHS (National Health Service)",
                  support:
                    "OET / IELTS coaching, NMC registration guidance, CBT exam preparation, visa documentation support.",
                },
                {
                  flag: "🇦🇪",
                  country: "UAE",
                  employers: "Cleveland Clinic Abu Dhabi, Aster DM Healthcare",
                  support:
                    "DHA / HAAD exam coaching, Emirates licensing process, employment visa support.",
                },
                {
                  flag: "🇸🇦",
                  country: "Saudi Arabia",
                  employers: "Saudi German Hospital",
                  support:
                    "PROMETRIC exam preparation, Saudi Commission for Health Specialties (SCFHS) registration, Iqama process guidance.",
                },
                {
                  flag: "🇸🇬",
                  country: "Singapore",
                  employers: "Singapore General Hospital and private hospitals",
                  support:
                    "Singapore Nursing Board (SNB) registration guidance, language proficiency preparation.",
                },
                {
                  flag: "🇦🇺",
                  country: "Australia",
                  employers: "Public and private hospital networks",
                  support:
                    "IELTS / OET coaching, AHPRA registration guidance, skills assessment support.",
                },
                {
                  flag: "🇨🇦",
                  country: "Canada",
                  employers: "Provincial health authorities",
                  support:
                    "NCLEX-RN preparation, provincial nursing college registration, Express Entry documentation.",
                },
              ].map((item) => (
                <div
                  key={item.country}
                  className="bg-[#FBFBEE] border border-green-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{item.flag}</span>
                    <h3 className="text-lg font-bold text-[#0b7845]">{item.country}</h3>
                  </div>
                  <p className="text-xs font-semibold text-[#006837] uppercase tracking-wide mb-2">
                    {item.employers}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.support}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NCLEX & IELTS Preparation ───────────────────────────────── */}
        <section className="bg-[#FBFBEE] py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b7845] mb-4">
              Licensing Exam Preparation
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-3xl">
              Our dedicated training centre provides structured coaching for all
              major international nursing licensing examinations, ensuring
              graduates are fully prepared to practise globally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  exam: "NCLEX-RN",
                  destination: "USA",
                  description:
                    "Comprehensive preparation for the National Council Licensure Examination for Registered Nurses — the standard for US nursing practice.",
                },
                {
                  exam: "OET / IELTS",
                  destination: "UK & Australia",
                  description:
                    "Occupational English Test and IELTS coaching tailored for healthcare professionals applying to the NHS and Australian hospitals.",
                },
                {
                  exam: "DHA / HAAD",
                  destination: "UAE",
                  description:
                    "Dubai Health Authority and Health Authority Abu Dhabi exam coaching for nurses seeking employment in the UAE.",
                },
                {
                  exam: "PROMETRIC",
                  destination: "Saudi Arabia",
                  description:
                    "Saudi Commission exam preparation for the SCFHS nursing licensure, a mandatory requirement for working in Saudi Arabia.",
                },
              ].map((item) => (
                <div
                  key={item.exam}
                  className="bg-white border border-green-100 rounded-2xl p-5 sm:p-6 shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <div className="bg-[#006837] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-sm leading-tight text-center px-1">
                      {item.exam.split(" / ")[0]}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0b7845] mb-1">
                    {item.exam}
                  </h3>
                  <p className="text-xs font-semibold text-[#7cb983] uppercase tracking-wide mb-3">
                    {item.destination}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Student Success Stories ─────────────────────────────────── */}
        <section className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b7845] mb-2">
              Student Success Stories
            </h2>
            <p className="text-xs text-gray-500 mb-8">
              Names changed for privacy. Testimonials are representative of student experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  quote:
                    "Getting placed at NHS UK with a ₹22 LPA package was a dream I thought was out of reach. JKKN's OET coaching and visa guidance made it possible. The faculty prepared us not just clinically but for international standards.",
                  batch: "B.Sc Nursing — 2023 Batch",
                  placement: "NHS UK — ₹22 LPA",
                  initial: "P",
                },
                {
                  quote:
                    "I am now working at Apollo Hospitals, Chennai, in the ICU department. The clinical training at JKKN's 500-bed hospital gave me hands-on confidence from day one. The placement cell conducted mock interviews that were extremely helpful.",
                  batch: "B.Sc Nursing — 2024 Batch",
                  placement: "Apollo Hospitals, Chennai",
                  initial: "R",
                },
                {
                  quote:
                    "Being selected for Cleveland Clinic Abu Dhabi is beyond what I imagined. JKKN's HAAD coaching and the dedicated international placement cell handled everything — from the application to the visa process.",
                  batch: "M.Sc Nursing — 2023 Batch",
                  placement: "Cleveland Clinic Abu Dhabi",
                  initial: "S",
                },
              ].map((story, idx) => (
                <div
                  key={idx}
                  className="bg-[#FBFBEE] border border-green-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow"
                >
                  {/* Quote */}
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
                    &ldquo;{story.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-green-100">
                    <div className="w-10 h-10 rounded-full bg-[#006837] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {story.initial}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#0b7845]">{story.placement}</p>
                      <p className="text-xs text-gray-500">{story.batch}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Placement Process ───────────────────────────────────────── */}
        <section className="bg-[#FBFBEE] py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b7845] mb-10 text-center">
              Our Placement Process
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
              {[
                { step: "01", title: "Registration", desc: "Students register with the Placement Cell and fill their career profile." },
                { step: "02", title: "Resume Building", desc: "Professional CV and personal statement creation with guidance from faculty." },
                { step: "03", title: "Soft Skills Training", desc: "Communication, teamwork, and professional conduct workshops." },
                { step: "04", title: "Mock Interviews", desc: "Simulated interviews with clinical and HR panels to build confidence." },
                { step: "05", title: "Campus Drives", desc: "Recruiters visit campus for written tests and personal interviews." },
                { step: "06", title: "Offer Letter", desc: "Placement cell facilitates offer acceptance, joining formalities, and follow-up." },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-2xl p-4 sm:p-5 text-center shadow-sm border border-green-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-[#006837] text-white flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-[#0b7845] text-sm sm:text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Section ─────────────────────────────────────────────── */}
        <section className="bg-gradient-to-r from-[#006837] to-[#7cb983] py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px] text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Launch Your Nursing Career?
            </h2>
            <p className="text-white/90 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Join JKKN College of Nursing and gain access to India and global
              healthcare placements with dedicated career support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#006837] font-bold px-8 py-3 rounded-full shadow-md hover:bg-green-50 transition-colors text-sm sm:text-base"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base"
              >
                Contact Placement Cell
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
