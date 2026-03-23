"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import {
  CheckCircleIcon,
  HeartIcon,
  GlobeAltIcon,
  HomeModernIcon,
  HomeIcon,
  ClipboardDocumentListIcon,
  TruckIcon,
  AcademicCapIcon,
  MapIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  BeakerIcon,
  BookOpenIcon,
  TrophyIcon,
  WifiIcon,
  StarIcon,
  BuildingOffice2Icon,
  PhoneIcon,
} from "@heroicons/react/24/outline";


const faqs = [
  {
    q: "What is the best nursing college in Namakkal?",
    a: "Sresakthimayeil Institute of Nursing and Research, located just 5-10 km from Namakkal on NH-544, is widely regarded as one of the top nursing colleges accessible from Namakkal. Approved by INC, NAAC and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers excellent programmes with strong placement support.",
  },
  {
    q: "How far is JKKN Nursing from Namakkal?",
    a: "JKKN Nursing is approximately 5-10 km from Namakkal town, which takes about 15-20 minutes by road via NH-544 (Salem-Coimbatore Highway). Frequent local buses and auto-rickshaws are available from Namakkal town to Komarapalayam throughout the day.",
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
    q: "Does JKKN Nursing provide hostel for Namakkal students?",
    a: "Yes, JKKN Nursing provides separate hostel facilities for boys and girls. However, since the campus is just 5-10 km from Namakkal town, many students prefer to commute daily from home. College transport services are also available.",
  },
  {
    q: "How can I apply for admission at JKKN Nursing?",
    a: "You can apply online through the official website at https://nursing.sresakthimayeil.jkkn.ac.in/ or visit the campus directly. Admissions for 2026-27 are currently open. Contact the admission office for guidance.",
  },
];

const whyChooseItems = [
  {
    icon: <CheckCircleIcon className="w-10 h-10 text-[#006837]" />,
    title: "INC Approved",
    desc: "INC-approved nursing institute with hospital-based clinical training",
  },
  {
    icon: <HeartIcon className="w-10 h-10 text-[#006837]" />,
    title: "Hospital Training",
    desc: "Attached to JKKN group hospitals — direct patient care exposure",
  },
  {
    icon: <GlobeAltIcon className="w-10 h-10 text-[#006837]" />,
    title: "Global Careers",
    desc: "Strong demand for nursing professionals in India and abroad (Gulf, UK, US, Australia)",
  },
  {
    icon: <HomeModernIcon className="w-10 h-10 text-[#006837]" />,
    title: "Secure Hostels",
    desc: "Hostel facilities with secure environment for women students",
  },
  {
    icon: <ClipboardDocumentListIcon className="w-10 h-10 text-[#006837]" />,
    title: "Govt Job Prep",
    desc: "Government nursing job preparation support",
  },
  {
    icon: <TruckIcon className="w-10 h-10 text-[#006837]" />,
    title: "Easy Commute",
    desc: "Just 5-10 km from Namakkal. Daily commute or comfortable hostel — your choice.",
  },
];

const programmes = [
  {
    icon: <AcademicCapIcon className="w-10 h-10 text-[#006837]" />,
    title: "B.Sc Nursing",
    duration: "4 years",
    level: "UG",
    intake: "100 seats",
    eligibility: "10+2 with Physics, Chemistry, Biology; NEET qualified",
  },
  {
    icon: <ClipboardDocumentListIcon className="w-10 h-10 text-[#006837]" />,
    title: "GNM (General Nursing and Midwifery)",
    duration: "3.5 years",
    level: "Diploma",
    intake: "60 seats",
    eligibility: "10+2 with Science",
  },
  {
    icon: <AcademicCapIcon className="w-10 h-10 text-[#006837]" />,
    title: "M.Sc Nursing",
    duration: "2 years",
    level: "PG",
    intake: "30 seats",
    eligibility: "B.Sc Nursing degree",
  },
  {
    icon: <ClipboardDocumentListIcon className="w-10 h-10 text-[#006837]" />,
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
    emoji: <MapIcon className="w-5 h-5 text-[#006837]" />,
    label: "ROUTE",
    text: "NH-544 (Salem-Coimbatore Highway)",
  },
  {
    emoji: <TruckIcon className="w-5 h-5 text-[#006837]" />,
    label: "BY BUS",
    text: "Frequent local buses and auto-rickshaws available from Namakkal town to Komarapalayam",
  },
  {
    emoji: <MapPinIcon className="w-5 h-5 text-[#006837]" />,
    label: "NEAREST RAILWAY STATION",
    text: "Salem Junction (~40 km from campus)",
  },
  {
    emoji: <PaperAirplaneIcon className="w-5 h-5 text-[#006837]" />,
    label: "NEAREST AIRPORT",
    text: "Coimbatore International Airport (Code: CJB) (~110 km)",
  },
  {
    emoji: <BuildingOffice2Icon className="w-5 h-5 text-[#006837]" />,
    label: "CAMPUS ADDRESS",
    text: "JKKN Institutions, Natarajapuram, NH-544, Komarapalayam (TK), Namakkal (DT), Tamil Nadu - 638183",
  },
];

const facilities = [
  {
    icon: <BeakerIcon className="w-6 h-6 text-[#006837]" />,
    title: "Modern Labs",
    desc: "State-of-the-art laboratories and smart classrooms",
  },
  {
    icon: <BookOpenIcon className="w-6 h-6 text-[#006837]" />,
    title: "Digital Library",
    desc: "Well-stocked library with digital access and journals",
  },
  {
    icon: <HomeModernIcon className="w-6 h-6 text-[#006837]" />,
    title: "Hostel",
    desc: "Separate hostels for boys and girls with mess facility",
  },
  {
    icon: <TruckIcon className="w-6 h-6 text-[#006837]" />,
    title: "Transport",
    desc: "College buses connecting to Namakkal and surrounding areas",
  },
  {
    icon: <TrophyIcon className="w-6 h-6 text-[#006837]" />,
    title: "Sports",
    desc: "Playground, indoor games, gym, and annual sports events",
  },
  {
    icon: <WifiIcon className="w-6 h-6 text-[#006837]" />,
    title: "WiFi Campus",
    desc: "High-speed internet across the entire campus",
  },
];

const cities = [
  { icon: <MapPinIcon className="w-6 h-6 text-[#006837]" />, name: "Salem", distance: "40-50 km", href: "/salem" },
  { icon: <MapPinIcon className="w-6 h-6 text-[#006837]" />, name: "Erode", distance: "30-40 km", href: "/erode" },
  { icon: <MapPinIcon className="w-6 h-6 text-[#006837]" />, name: "Tiruppur", distance: "80-90 km", href: "/tiruppur" },
  { icon: <StarIcon className="w-6 h-6 text-[#006837]" />, name: "Coimbatore", distance: "100-110 km", href: "/coimbatore" },
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

export default function NamakkalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <div className="min-h-screen font-sans bg-[#FBFBEE]">
      <Header />
      <main>
        {/* ── Hero Section ─────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-[#006837] via-[#002309] to-[#002309] py-12 sm:py-16 md:py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-5 sm:mb-6">
              <AcademicCapIcon className="w-5 h-5 text-white" />
              <span className="text-white text-xs sm:text-sm font-medium">
                INC, NAAC Approved • Admissions Open
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 leading-tight">
              Best Nursing College Near{" "}
              <span className="text-[#FBFBEE]">Namakkal</span>
            </h1>

            {/* Description */}
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-7 sm:mb-8 leading-relaxed px-2">
              Namakkal is home — and so are we. Sresakthimayeil Institute of Nursing
              and Research offers top-tier nursing programmes with 90%+ placement
              support — located right in your home district.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm sm:max-w-lg mx-auto mb-7 sm:mb-8">
              {[
                { value: "90%+", label: "PLACEMENTS" },
                { value: "6-8", label: "LPA HIGHEST" },
                { value: "10km", label: "FROM NAMAKKAL" },
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
                className="w-full sm:w-auto bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 text-sm sm:text-base"
              >
                Apply Now — 2026-27
              </a>
              <a
                href="tel:+919345855001"
                className="w-full sm:w-auto bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <PhoneIcon className="w-5 h-5" />
                Call Us: +91 93458 55001
              </a>
            </div>
          </div>
        </section>

        {/* ── Trust Badges Bar ──────────────────────────────────────── */}
        <section className="bg-[#FBFBEE] py-3 sm:py-4 px-4 border-b border-gray-100">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
            <div className="flex items-center gap-2.5">
              <span className="bg-[#7cb983]/20 text-[#006837] font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full">
                ✓ INC
              </span>
              <span className="bg-[#7cb983]/20 text-[#006837] font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full">
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
        <section className="bg-[#FBFBEE] py-8 sm:py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex-1 p-5 sm:p-7 md:p-8">
                  <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                    <div className="text-5xl sm:text-6xl font-bold text-[#006837] leading-none flex-shrink-0">
                      10<span className="text-2xl sm:text-3xl font-bold">km</span>
                    </div>
                    <div>
                      <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">
                        From Namakkal to JKKN Nursing
                      </h2>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        15-20 minutes via NH-544 (Salem-Coimbatore Highway)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 sm:border-l border-t sm:border-t-0 border-gray-100 w-full sm:w-auto flex justify-center">
                  <a
                    href="https://maps.google.com/?q=JKKN+Institutions+Natarajapuram+Komarapalayam+Namakkal+Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#006837] hover:bg-[#6ba872] text-white font-semibold px-6 py-4 rounded-xl transition-colors flex flex-col items-center gap-1.5 min-w-[120px] text-center"
                  >
                    <MapPinIcon className="w-5 h-5 text-white" />
                    <span className="text-sm">View on Map</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Choose Section ────────────────────────────────────── */}
        <section className="bg-[#FBFBEE] py-12 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Why Namakkal Students Choose JKKN Nursing
              </h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-2">
                Being in the home district of JKKN, Namakkal students enjoy the closest
                proximity to the campus. There is no need for hostel accommodation — daily
                commute is easy and convenient. Students can stay at home and still access
                world-class education.
              </p>
              <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mt-4"></div>
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
        <section className="bg-[#FBFBEE] py-12 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Programmes Offered
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Choose the right programme for your career goals
              </p>
              <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mt-4"></div>
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
                    className="block w-full text-center border-2 border-[#7cb983]/50 text-[#006837] font-semibold px-3 py-2.5 rounded-xl hover:bg-[#7cb983]/10 transition-colors text-xs sm:text-sm"
                  >
                    Enquire About This Course
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Placement Highlights ──────────────────────────────────── */}
        <section className="bg-[#FBFBEE] py-12 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Placement Highlights
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Our placement cell connects you with India&apos;s top employers
              </p>
              <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {placementStats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-gray-100 rounded-2xl p-4 sm:p-6 text-center"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006837] mb-2 leading-tight">
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
        <section className="bg-[#FBFBEE] py-12 sm:py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                How to Reach from Namakkal
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Multiple transport options to get to campus easily
              </p>
              <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mt-4"></div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#006837] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <MapPinIcon className="w-6 h-6 text-white flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg md:text-xl">
                      Namakkal → JKKN Nursing Campus
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm mt-0.5">
                      5-10 km • 15-20 minutes
                    </p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-50">
                {reachItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 sm:p-5 md:p-6">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#7cb983]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg sm:text-xl">
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
        <section className="bg-[#FBFBEE] py-12 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Campus &amp; Facilities
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Everything you need for a world-class education experience
              </p>
              <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {facilities.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-4 sm:p-5 bg-gray-50 rounded-2xl hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#7cb983]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
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
        <section className="bg-[#FBFBEE] py-12 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Students from Namakkal Love JKKN Nursing
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Hear from students who made the right choice
              </p>
              <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="text-4xl sm:text-5xl text-[#7cb983] font-serif leading-none mb-3">
                  &ldquo;
                </div>
                <p className="text-gray-500 text-sm sm:text-base italic leading-relaxed mb-5">
                  [Student testimonial from Namakkal to be added here. Include their
                  experience at JKKN Nursing, what they liked about the campus, and their
                  career outcomes.]
                </p>
                <div className="font-bold text-gray-900 text-sm">[Student Name]</div>
                <div className="text-gray-400 text-xs mt-0.5">
                  [Course], Batch of [Year] • Now at [Company]
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="text-4xl sm:text-5xl text-[#7cb983] font-serif leading-none mb-3">
                  &ldquo;
                </div>
                <p className="text-gray-500 text-sm sm:text-base italic leading-relaxed mb-5">
                  [Second student testimonial from Namakkal to be added here. Focus on
                  the ease of commute/hostel life and the quality of education.]
                </p>
                <div className="font-bold text-gray-900 text-sm">[Student Name]</div>
                <div className="text-gray-400 text-xs mt-0.5">[Course], Batch of [Year]</div>
              </div>

              <div className="border-2 border-dashed border-[#7cb983] bg-[#7cb983]/10 rounded-2xl p-5 sm:p-6 flex items-center justify-center">
                <p className="text-[#7cb983] font-semibold text-sm text-center leading-relaxed">
                  Add 2-3 real student testimonials from Namakkal or nearby areas before
                  deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ Section ───────────────────────────────────────────── */}
        <section className="bg-[#FBFBEE] py-12 sm:py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-[#006837] text-sm sm:text-base font-medium">
                Nursing College in Namakkal — Your Questions Answered
              </p>
              <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mt-4"></div>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-200 ${
                    openFaq === i
                      ? "border-[#7cb983]/50 bg-white"
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
                        openFaq === i ? "text-[#006837] rotate-180" : "text-gray-400"
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

        {/* ── Explore More Cities ───────────────────────────────────── */}
        <section className="bg-[#FBFBEE] py-12 sm:py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Explore More Cities
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Find the best nursing college near your city
              </p>
              <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
              {cities.slice(0, 3).map((city) => (
                <a
                  key={city.name}
                  href={city.href}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-3"
                >
                  <span className="text-2xl flex-shrink-0">{city.icon}</span>
                  <span className="font-bold text-gray-900 text-sm sm:text-base flex-1">
                    {city.name}
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">
                    {city.distance}
                  </span>
                </a>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
              {cities.slice(3).map((city) => (
                <a
                  key={city.name}
                  href={city.href}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-3"
                >
                  <span className="text-2xl flex-shrink-0">{city.icon}</span>
                  <span className="font-bold text-gray-900 text-sm sm:text-base flex-1">
                    {city.name}
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">
                    {city.distance}
                  </span>
                </a>
              ))}
            </div>

            <div className="text-center">
              <a
                href="/"
                onClick={() => sessionStorage.setItem('scrollTo', 'programs')}
                className="inline-block bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm sm:text-base"
              >
                View All Programmes
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer hideLifeAtJKKN />

      <ScrollToTop />
    </div>
  );
}
