"use client";

import { useState } from "react";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const faqs = [
  {
    q: "What is the best nursing college in Coimbatore?",
    a: "Sresakthimayeil Institute of Nursing and Research, located just 100-110 km from Coimbatore on NH-544, is widely regarded as one of the top nursing colleges accessible from Coimbatore. Approved by INC, NAAC and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers excellent programmes with strong placement support.",
  },
  {
    q: "How far is JKKN Nursing from Coimbatore?",
    a: "JKKN Nursing is approximately 100-110 km from Coimbatore city centre, which takes about 2-2.5 hours by road via NH-544 (Coimbatore-Salem Highway) — direct route. Regular bus services are available from Coimbatore.",
  },
  {
    q: "Is NEET required for B.Sc Nursing?",
    a: "B.Sc Nursing admissions in Tamil Nadu are typically through NEET counselling. Contact the admission office for the latest admission requirements for the current academic year.",
  },
  {
    q: "Can I get a nursing job abroad after studying here?",
    a: "Yes, graduates from Sresakthimayeil Institute of Nursing and Research are eligible for international nursing careers. With an INC-approved B.Sc Nursing degree, you can appear for licensing exams like HAAD/DHA (Gulf), NMC-CBT (UK), NCLEX (US), or AHPRA (Australia).",
  },
  {
    q: "Does the institute have hostel for girls?",
    a: "Yes, Sresakthimayeil Institute of Nursing and Research provides a separate, secure hostel for women students with 24/7 security, mess facility, and warden supervision. Hostel accommodation is available for students from all cities.",
  },
  {
    q: "Does JKKN Nursing provide hostel for Coimbatore students?",
    a: "Yes, JKKN Nursing provides separate hostel facilities for boys and girls. Students from Coimbatore can also opt for daily commute as the campus is just 2-2.5 hours away. College transport services are available.",
  },
  {
    q: "How can I apply for admission at JKKN Nursing?",
    a: "You can apply online through the official website at https://nursing.sresakthimayeil.jkkn.ac.in/ or visit the campus directly. Admissions for 2026-27 are currently open. Contact the admission office for guidance.",
  },
];

const whyChooseItems = [
  {
    icon: "✅",
    title: "INC Approved",
    desc: "INC-approved nursing institute with hospital-based clinical training",
  },
  {
    icon: "🏥",
    title: "Hospital Training",
    desc: "Attached to JKKN group hospitals — direct patient care exposure",
  },
  {
    icon: "🌍",
    title: "Global Careers",
    desc: "Strong demand for nursing professionals in India and abroad (Gulf, UK, US, Australia)",
  },
  {
    icon: "🏠",
    title: "Secure Hostels",
    desc: "Hostel facilities with secure environment for women students",
  },
  {
    icon: "📋",
    title: "Govt Job Prep",
    desc: "Government nursing job preparation support",
  },
  {
    icon: "🚌",
    title: "Easy Commute",
    desc: "Just 100-110 km from Coimbatore. Daily commute or comfortable hostel — your choice.",
  },
];

const programmes = [
  {
    icon: "🎓",
    title: "B.Sc Nursing",
    duration: "4 years",
    level: "UG",
    intake: "100 seats",
    eligibility: "10+2 with Physics, Chemistry, Biology; NEET qualified",
  },
  {
    icon: "📋",
    title: "GNM (General Nursing and Midwifery)",
    duration: "3.5 years",
    level: "Diploma",
    intake: "60 seats",
    eligibility: "10+2 with Science",
  },
  {
    icon: "🎓",
    title: "M.Sc Nursing",
    duration: "2 years",
    level: "PG",
    intake: "30 seats",
    eligibility: "B.Sc Nursing degree",
  },
  {
    icon: "📋",
    title: "Post Basic B.Sc Nursing",
    duration: "2 years",
    level: "UG",
    intake: "50 seats",
    eligibility: "GNM diploma + experience",
  },
];

const placementStats = [
  { value: "90%+", label: "PLACEMENT RATE" },
  { value: "6-8", label: "LPA HIGHEST" },
  { value: "2.5-4", label: "LPA AVERAGE" },
  { value: "5+", label: "TOP RECRUITERS" },
];

const reachItems = [
  {
    emoji: "🗺️",
    label: "ROUTE",
    text: "NH-544 (Coimbatore-Salem Highway) — direct route",
  },
  {
    emoji: "🚌",
    label: "BY BUS",
    text: "Frequent inter-city buses from Gandhipuram and Ukkadam bus stands to Komarapalayam/Namakkal route",
  },
  {
    emoji: "🚂",
    label: "NEAREST RAILWAY STATION",
    text: "Coimbatore Junction (~105 km from campus)",
  },
  {
    emoji: "✈️",
    label: "NEAREST AIRPORT",
    text: "Coimbatore International Airport (Code: CJB) (~100 km)",
  },
  {
    emoji: "🏢",
    label: "CAMPUS ADDRESS",
    text: "JKKN Institutions, Natarajapuram, NH-544, Komarapalayam (TK), Namakkal (DT), Tamil Nadu - 638183",
  },
];

const facilities = [
  {
    icon: "🔬",
    title: "Modern Labs",
    desc: "State-of-the-art laboratories and smart classrooms",
  },
  {
    icon: "📚",
    title: "Digital Library",
    desc: "Well-stocked library with digital access and journals",
  },
  {
    icon: "🏠",
    title: "Hostel",
    desc: "Separate hostels for boys and girls with mess facility",
  },
  {
    icon: "🚌",
    title: "Transport",
    desc: "College buses connecting to Coimbatore and surrounding areas",
  },
  {
    icon: "⚽",
    title: "Sports",
    desc: "Playground, indoor games, gym, and annual sports events",
  },
  {
    icon: "📶",
    title: "WiFi Campus",
    desc: "High-speed internet across the entire campus",
  },
];

const cities = [
  { icon: "🏡", name: "Namakkal", distance: "5-10 km" },
  { icon: "🚌", name: "Salem", distance: "40-50 km" },
  { icon: "🏞️", name: "Erode", distance: "30-40 km" },
  { icon: "🎯", name: "Tiruppur", distance: "80-90 km" },
];

const quickLinks = [
  "All Programmes",
  "Admissions",
  "Placements",
  "Campus Life",
  "Fee Structure",
  "Contact Us",
];

const jkknInstitutions = [
  "JKKN Group",
  "Dental",
  "Pharmacy",
  "Nursing",
  "Engineering",
  "Arts & Science",
  "Allied Health Sciences",
];

export default function CoimbatorePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "Coimbatore",
    programme: "",
    questions: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Name: ${form.name}%0APhone: ${form.phone}%0ACity: ${form.city}%0AProgramme: ${form.programme}%0AQuestions: ${form.questions}`;
    window.open(`https://wa.me/919345855001?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen font-sans bg-white">
      {/* ── Sticky Announcement Bar ───────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#6B1040] py-2 sm:py-2.5 px-3 sm:px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0"></span>
            <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
              Admissions Open 2026-27
            </span>
          </div>
          <a
            href="tel:+919345855001"
            className="bg-[#2D2D2D] hover:bg-[#1a1a1a] text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full transition-colors whitespace-nowrap"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/919345855001"
            className="bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full transition-colors whitespace-nowrap"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <main className="!pt-9 sm:!pt-10">
        {/* ── Hero Section ─────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-[#8B1A45] via-[#5C1030] to-[#1A0010] py-12 sm:py-16 md:py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-5 sm:mb-6">
              <span>🎓</span>
              <span className="text-white text-xs sm:text-sm font-medium">
                INC, NAAC Approved • Admissions Open
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 leading-tight">
              Best Nursing College Near{" "}
              <span className="text-orange-400">Coimbatore</span>
            </h1>

            {/* Description */}
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-7 sm:mb-8 leading-relaxed px-2">
              Better value, better campus, better you — just 2 hours from Coimbatore.
              Sresakthimayeil Institute of Nursing and Research offers top-tier nursing
              programmes with 90%+ placement support — world-class education at a
              fraction of Coimbatore city college fees.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm sm:max-w-lg mx-auto mb-7 sm:mb-8">
              {[
                { value: "90%+", label: "PLACEMENTS" },
                { value: "6-8", label: "LPA HIGHEST" },
                { value: "105km", label: "FROM COIMBATORE" },
                { value: "4", label: "PROGRAMMES" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 text-center"
                >
                  <div className="text-white font-bold text-sm sm:text-lg md:text-xl lg:text-2xl leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-[8px] sm:text-[10px] md:text-xs mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a
                href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 text-sm sm:text-base"
              >
                Apply Now — 2026-27
              </a>
              <a
                href="https://wa.me/919345855001"
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ── Trust Badges Bar ──────────────────────────────────────── */}
        <section className="bg-white py-3 sm:py-4 px-4 border-b border-gray-100">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
            <div className="flex items-center gap-2.5">
              <span className="bg-pink-100 text-pink-700 font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full">
                ✓ INC
              </span>
              <span className="bg-pink-100 text-pink-700 font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full">
                ✓ NAAC
              </span>
            </div>
            <div className="hidden sm:block w-px h-7 bg-gray-200 flex-shrink-0"></div>
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              Affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai
            </p>
          </div>
        </section>

        {/* ── Distance Card ─────────────────────────────────────────── */}
        <section className="bg-gray-50 py-8 sm:py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex-1 p-5 sm:p-7 md:p-8">
                  <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                    <div className="text-5xl sm:text-6xl font-bold text-[#8B1A45] leading-none flex-shrink-0">
                      105<span className="text-2xl sm:text-3xl font-bold">km</span>
                    </div>
                    <div>
                      <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">
                        From Coimbatore to JKKN Nursing
                      </h2>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        2-2.5 hours via NH-544 (Coimbatore-Salem Highway) — direct route
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 sm:border-l border-t sm:border-t-0 border-gray-100 w-full sm:w-auto flex justify-center">
                  <a
                    href="https://maps.google.com/?q=JKKN+Institutions+Natarajapuram+Komarapalayam+Namakkal+Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#8B1A45] hover:bg-[#6B1030] text-white font-semibold px-6 py-4 rounded-xl transition-colors flex flex-col items-center gap-1.5 min-w-[120px] text-center"
                  >
                    <span className="text-xl">📍</span>
                    <span className="text-sm">View on Map</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Choose Section ────────────────────────────────────── */}
        <section className="bg-white py-12 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Why Coimbatore Students Choose JKKN Nursing
              </h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-2">
                While Coimbatore has many colleges, JKKN offers a distinct advantage:
                world-class education at significantly lower costs, a peaceful campus away
                from city congestion, personalised attention with smaller class sizes, and
                strong placement support. Hostel and transport facilities make the
                transition easy.
              </p>
              <div className="w-12 h-1 bg-orange-400 rounded mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {whyChooseItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-2xl p-5 sm:p-6 hover:shadow-md transition-all duration-200"
                >
                  <div className="text-3xl sm:text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Programmes Offered ────────────────────────────────────── */}
        <section className="bg-gray-50 py-12 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Programmes Offered
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Choose the right programme for your career goals
              </p>
              <div className="w-12 h-1 bg-orange-400 rounded mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {programmes.map((prog) => (
                <div
                  key={prog.title}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col"
                >
                  <div className="text-3xl mb-3">{prog.icon}</div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-4 leading-snug">
                    {prog.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Duration</span>
                      <span className="font-semibold text-gray-800">{prog.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Level</span>
                      <span className="font-semibold text-gray-800">{prog.level}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Intake</span>
                      <span className="font-semibold text-gray-800">{prog.intake}</span>
                    </div>
                  </div>

                  <hr className="border-gray-100 mb-4" />

                  <p className="text-gray-400 text-xs sm:text-sm mb-5 flex-1">
                    {prog.eligibility}
                  </p>

                  <a
                    href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                    className="block w-full text-center border-2 border-pink-200 text-[#8B1A45] font-semibold px-3 py-2.5 rounded-xl hover:bg-pink-50 transition-colors text-xs sm:text-sm"
                  >
                    Enquire About This Course
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Placement Highlights ──────────────────────────────────── */}
        <section className="bg-white py-12 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Placement Highlights
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Our placement cell connects you with India&apos;s top employers
              </p>
              <div className="w-12 h-1 bg-orange-400 rounded mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {placementStats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-gray-100 rounded-2xl p-4 sm:p-6 text-center"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B1A45] mb-2 leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-[10px] sm:text-xs font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4">
                COMPANIES THAT HIRE FROM US
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {[
                  "Apollo Hospitals",
                  "Fortis",
                  "Manipal Hospitals",
                  "AIIMS",
                  "Gulf Healthcare Recruiters",
                ].map((company) => (
                  <span
                    key={company}
                    className="border border-gray-200 text-gray-600 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── How to Reach ──────────────────────────────────────────── */}
        <section className="bg-gray-50 py-12 sm:py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                How to Reach from Coimbatore
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Multiple transport options to get to campus easily
              </p>
              <div className="w-12 h-1 bg-orange-400 rounded mx-auto mt-4"></div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#8B1A45] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl flex-shrink-0">📍</span>
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg md:text-xl">
                      Coimbatore → JKKN Nursing Campus
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm mt-0.5">
                      100-110 km • 2-2.5 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-50">
                {reachItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 sm:p-5 md:p-6">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 bg-pink-50 rounded-xl flex items-center justify-center flex-shrink-0 text-lg sm:text-xl">
                      {item.emoji}
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Campus & Facilities ───────────────────────────────────── */}
        <section className="bg-white py-12 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Campus &amp; Facilities
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Everything you need for a world-class education experience
              </p>
              <div className="w-12 h-1 bg-orange-400 rounded mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {facilities.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-4 sm:p-5 bg-gray-50 rounded-2xl hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-pink-50 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ─────────────────────────────────────────── */}
        <section className="bg-gray-50 py-12 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Students from Coimbatore Love JKKN Nursing
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Hear from students who made the right choice
              </p>
              <div className="w-12 h-1 bg-orange-400 rounded mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="text-4xl sm:text-5xl text-pink-200 font-serif leading-none mb-3">
                  &ldquo;
                </div>
                <p className="text-gray-500 text-sm sm:text-base italic leading-relaxed mb-5">
                  [Student testimonial from Coimbatore to be added here. Include their
                  experience at JKKN Nursing, what they liked about the campus, and their
                  career outcomes.]
                </p>
                <div className="font-bold text-gray-900 text-sm">[Student Name]</div>
                <div className="text-gray-400 text-xs mt-0.5">
                  [Course], Batch of [Year] • Now at [Company]
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="text-4xl sm:text-5xl text-pink-200 font-serif leading-none mb-3">
                  &ldquo;
                </div>
                <p className="text-gray-500 text-sm sm:text-base italic leading-relaxed mb-5">
                  [Second student testimonial from Coimbatore to be added here. Focus on
                  the ease of commute/hostel life and the quality of education.]
                </p>
                <div className="font-bold text-gray-900 text-sm">[Student Name]</div>
                <div className="text-gray-400 text-xs mt-0.5">[Course], Batch of [Year]</div>
              </div>

              <div className="border-2 border-dashed border-orange-300 bg-orange-50/30 rounded-2xl p-5 sm:p-6 flex items-center justify-center">
                <p className="text-orange-500 font-semibold text-sm text-center leading-relaxed">
                  Add 2-3 real student testimonials from Coimbatore or nearby areas before
                  deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ Section ───────────────────────────────────────────── */}
        <section className="bg-white py-12 sm:py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-[#8B1A45] text-sm sm:text-base font-medium">
                Nursing College in Coimbatore — Your Questions Answered
              </p>
              <div className="w-12 h-1 bg-orange-400 rounded mx-auto mt-4"></div>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-200 ${
                    openFaq === i
                      ? "border-pink-200 bg-white"
                      : "border-gray-100 bg-white hover:border-gray-200"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left gap-3"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`transition-transform duration-200 flex-shrink-0 ${
                        openFaq === i ? "text-[#8B1A45] rotate-180" : "text-gray-400"
                      }`}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                      <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Interested? Let's Talk! ───────────────────────────────── */}
        <section className="bg-[#8B1A45] py-12 sm:py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                Interested? Let&apos;s Talk!
              </h2>
              <p className="text-white/70 text-sm sm:text-base">
                Fill in your details and our admission team will contact you within 24 hours
              </p>
              <div className="w-12 h-1 bg-orange-400 rounded mx-auto mt-4"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-1.5">
                    Your City
                  </label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-1.5">
                    Programme Interested In
                  </label>
                  <select
                    value={form.programme}
                    onChange={(e) => setForm({ ...form, programme: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors appearance-none"
                  >
                    <option value="" className="text-gray-800 bg-white">Select a Programme</option>
                    <option value="B.Sc Nursing" className="text-gray-800 bg-white">B.Sc Nursing</option>
                    <option value="GNM" className="text-gray-800 bg-white">GNM (General Nursing and Midwifery)</option>
                    <option value="M.Sc Nursing" className="text-gray-800 bg-white">M.Sc Nursing</option>
                    <option value="Post Basic B.Sc Nursing" className="text-gray-800 bg-white">Post Basic B.Sc Nursing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-1.5">
                  Any Questions?
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g., What is the fee for B.Sc Nursing?"
                  value={form.questions}
                  onChange={(e) => setForm({ ...form, questions: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-full transition-all duration-300 text-sm sm:text-base"
              >
                Submit Enquiry — Get a Call Back
              </button>

              <p className="text-center text-white/60 text-xs sm:text-sm">
                Or call us directly:{" "}
                <a
                  href="tel:+919345855001"
                  className="text-white underline underline-offset-2 hover:text-white/80"
                >
                  +91-9345855001
                </a>{" "}
                •{" "}
                <a
                  href="https://wa.me/919345855001"
                  className="text-white underline underline-offset-2 hover:text-white/80"
                >
                  WhatsApp
                </a>
              </p>
            </form>
          </div>
        </section>

        {/* ── Explore More Cities ───────────────────────────────────── */}
        <section className="bg-gray-100 py-12 sm:py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Explore More Cities
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Find the best nursing college near your city
              </p>
              <div className="w-12 h-1 bg-orange-400 rounded mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
              {cities.slice(0, 3).map((city) => (
                <div
                  key={city.name}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-3"
                >
                  <span className="text-2xl flex-shrink-0">{city.icon}</span>
                  <span className="font-bold text-gray-900 text-sm sm:text-base flex-1">
                    {city.name}
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">
                    {city.distance}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
              {cities.slice(3).map((city) => (
                <div
                  key={city.name}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-3"
                >
                  <span className="text-2xl flex-shrink-0">{city.icon}</span>
                  <span className="font-bold text-gray-900 text-sm sm:text-base flex-1">
                    {city.name}
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">
                    {city.distance}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm sm:text-base"
              >
                View All Programmes
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="bg-[#8B1A45] px-4 pt-10 sm:pt-14 pb-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">
            {/* Column 1 */}
            <div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-4 leading-snug">
                Sresakthimayeil Institute of Nursing and Research
              </h3>
              <div className="space-y-2 text-white/70 text-xs sm:text-sm leading-relaxed">
                <p>Part of JKKN Institutions</p>
                <p>
                  Natarajapuram, NH-544 (Salem To Coimbatore National Highway),
                  Komarapalayam (TK), Namakkal (DT), Tamil Nadu - 638183, India
                </p>
                <p>Phone: +91-9345855001</p>
                <p>WhatsApp: +91-9345855001</p>
                <p>Email: admissions@nursing.sresakthimayeil.jkkn.ac.in</p>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-4">
                JKKN Institutions
              </h3>
              <ul className="space-y-2">
                {jkknInstitutions.map((inst) => (
                  <li key={inst}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors"
                    >
                      {inst}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-5">
            <p className="text-white/50 text-[10px] sm:text-xs text-center leading-relaxed">
              © 2026 Sresakthimayeil Institute of Nursing and Research | Part of JKKN
              Institutions | All institution names follow the JKKN Official Name Registry |
              Page optimised for SEO, AEO, and GEO
            </p>
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp Chat Button ─────────────────────────── */}
      <a
        href="https://wa.me/919345855001"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-xl flex items-center gap-2 font-semibold transition-colors text-sm"
      >
        <WhatsAppIcon />
        Chat with Us
      </a>
    </div>
  );
}
