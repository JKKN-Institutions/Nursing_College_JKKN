import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CityFaqAccordion } from "@/components/CityFaqAccordion";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
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
  {
    q: "Which are the best nursing colleges in Coimbatore?",
    a: "Coimbatore has several nursing colleges, but JKKN College of Nursing (Sresakthimayeil Institute of Nursing and Research) in Komarapalayam is one of the most reputed options in the region — INC approved, NAAC accredited, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University. It is 100-110 km from Coimbatore with excellent hostel facilities.",
  },
  {
    q: "What B.Sc nursing courses are available near Coimbatore?",
    a: "JKKN College of Nursing accessible from Coimbatore offers B.Sc Nursing (4 years, 100 seats), M.Sc Nursing (2 years, 30 seats), and Post Basic B.Sc Nursing (2 years, 50 seats). All programmes are INC approved and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
  },
  {
    q: "What is the fee structure for nursing courses near Coimbatore?",
    a: "Fee structures for nursing courses at JKKN College of Nursing are competitive and follow Tamil Nadu government and university norms. For the latest fee details for the 2026-27 academic year, contact the admission office at +91 93458 55001 or visit https://nursing.sresakthimayeil.jkkn.ac.in/",
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
    desc: "Hostel facilities with secure environment for women learners",
  },
  {
    icon: <ClipboardDocumentListIcon className="w-10 h-10 text-[#006837]" />,
    title: "Govt Job Prep",
    desc: "Government nursing job preparation support",
  },
  {
    icon: <TruckIcon className="w-10 h-10 text-[#006837]" />,
    title: "Easy Commute",
    desc: "Just 100-110 km from Coimbatore. Daily commute or comfortable hostel — your choice.",
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
    href: "/bsc-nursing",
  },
  {
    icon: <AcademicCapIcon className="w-10 h-10 text-[#006837]" />,
    title: "M.Sc Nursing",
    duration: "2 years",
    level: "PG",
    intake: "30 seats",
    eligibility: "B.Sc Nursing degree",
    href: "/msc-nursing",
  },
  {
    icon: <ClipboardDocumentListIcon className="w-10 h-10 text-[#006837]" />,
    title: "Post Basic B.Sc Nursing",
    duration: "2 years",
    level: "UG",
    intake: "50 seats",
    eligibility: "GNM diploma + experience",
    href: "/pbsc-nursing",
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
    text: "NH-544 (Coimbatore-Salem Highway) — direct route",
  },
  {
    emoji: <TruckIcon className="w-5 h-5 text-[#006837]" />,
    label: "BY BUS",
    text: "Frequent inter-city buses from Gandhipuram and Ukkadam bus stands to Komarapalayam/Namakkal route",
  },
  {
    emoji: <MapPinIcon className="w-5 h-5 text-[#006837]" />,
    label: "NEAREST RAILWAY STATION",
    text: "Coimbatore Junction (~105 km from campus)",
  },
  {
    emoji: <PaperAirplaneIcon className="w-5 h-5 text-[#006837]" />,
    label: "NEAREST AIRPORT",
    text: "Coimbatore International Airport (Code: CJB) (~100 km)",
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
    title: "Modern Learning Labs",
    desc: "State-of-the-art learning labs and smart learning studios",
    href: "/laboratories",
  },
  {
    icon: <BookOpenIcon className="w-6 h-6 text-[#006837]" />,
    title: "Digital Learning Commons",
    desc: "Well-stocked learning commons with digital access and journals",
    href: "/library",
  },
  {
    icon: <HomeModernIcon className="w-6 h-6 text-[#006837]" />,
    title: "Hostel",
    desc: "Separate hostels for boys and girls with mess facility",
    href: "/hostel",
  },
  {
    icon: <TruckIcon className="w-6 h-6 text-[#006837]" />,
    title: "Transport",
    desc: "College buses connecting to Coimbatore and surrounding areas",
    href: "/transport",
  },
  {
    icon: <TrophyIcon className="w-6 h-6 text-[#006837]" />,
    title: "Sports",
    desc: "Playground, indoor games, gym, and annual sports events",
    href: "/sports",
  },
  {
    icon: <WifiIcon className="w-6 h-6 text-[#006837]" />,
    title: "WiFi Campus",
    desc: "High-speed internet across the entire campus",
    href: "/wifi",
  },
];

const cities = [
  { icon: <HomeIcon className="w-6 h-6 text-[#006837]" />, name: "Namakkal", distance: "5-10 km", href: "/namakkal" },
  { icon: <MapPinIcon className="w-6 h-6 text-[#006837]" />, name: "Salem", distance: "40-50 km", href: "/salem" },
  { icon: <MapPinIcon className="w-6 h-6 text-[#006837]" />, name: "Erode", distance: "30-40 km", href: "/erode" },
  { icon: <MapPinIcon className="w-6 h-6 text-[#006837]" />, name: "Tiruppur", distance: "80-90 km", href: "/tiruppur" },
];

export const metadata: Metadata = {
  title: "Best Nursing College in Coimbatore | B.Sc Nursing Near Coimbatore — JKKN",
  description:
    "Looking for the best nursing college in Coimbatore? JKKN College of Nursing offers INC-approved B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc programmes. 100-110 km from Coimbatore. NAAC accredited. 90%+ placements.",
  keywords:
    "best nursing college in coimbatore, bsc nursing colleges in coimbatore, best nursing colleges in coimbatore, coimbatore nursing college list, nursing course in coimbatore, coimbatore nursing college",
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/coimbatore",
  },
  openGraph: {
    title: "Best Nursing College in Coimbatore | B.Sc Nursing Near Coimbatore — JKKN",
    description:
      "Looking for the best nursing college in Coimbatore? JKKN College of Nursing offers INC approved, NAAC accredited nursing programmes. 90%+ placements.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/coimbatore",
    siteName: "JKKN College of Nursing",
    type: "website",
  },
};

export default function CoimbatorePage() {
  return (
    <div className="min-h-screen font-sans bg-[#FBFBEE]">
      <Header />
      {/* Schema Markup */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
          { name: "Best Nursing College in Coimbatore", url: "https://nursing.sresakthimayeil.jkkn.ac.in/coimbatore" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "JKKN College of Nursing",
            alternateName: "Sresakthimayeil Institute of Nursing and Research",
            url: "https://nursing.sresakthimayeil.jkkn.ac.in/",
            telephone: "+919345855001",
            email: "nursing@jkkn.ac.in",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Natarajapuram, NH-544, Komarapalayam",
              addressLocality: "Namakkal",
              addressRegion: "Tamil Nadu",
              postalCode: "638183",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 11.4333,
              longitude: 77.7167,
            },
            areaServed: {
              "@type": "City",
              name: "Coimbatore",
              sameAs: "https://en.wikipedia.org/wiki/Coimbatore",
            },
            parentOrganization: {
              "@type": "Organization",
              name: "JKKN Institutions",
              url: "https://jkkn.ac.in/",
            },
          }),
        }}
      />
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
              Best Nursing College in{" "}
              <span className="text-[#FBFBEE]">Coimbatore</span>
            </h1>

            {/* Description */}
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-7 sm:mb-8 leading-relaxed px-2">
              Searching for the best nursing college in Coimbatore? Sresakthimayeil
              Institute of Nursing and Research (JKKN College of Nursing) offers
              INC-approved B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc
              programmes — 100-110 km from Coimbatore with 90%+ placement support and
              hostel facilities.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm sm:max-w-lg mx-auto mb-7 sm:mb-8">
              {[
                { value: "90%+", label: "PLACEMENTS" },
                { value: "6-8", label: "LPA HIGHEST" },
                { value: "105km", label: "FROM COIMBATORE" },
                { value: "3", label: "PROGRAMMES" },
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
                href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=website&utm_medium=city_page&utm_campaign=coimbatore"
                target="_blank"
                rel="noopener noreferrer"
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

        {/* ── Campus Image ──────────────────────────────────────────── */}
        <section className="bg-[#FBFBEE] pt-8 sm:pt-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/jkkn_campus.webp"
                alt="JKKN College of Nursing campus — best nursing college in Coimbatore"
                width={1200}
                height={500}
                className="w-full h-48 sm:h-64 md:h-80 object-cover"
                priority
              />
            </div>
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
                    href="https://maps.app.goo.gl/MxwMXKSfVURFoidp8"
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

        {/* ── Nursing Education in Coimbatore ──────────────────────── */}
        <section className="bg-[#FBFBEE] py-12 sm:py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight text-center">
              Nursing Education Landscape in Coimbatore
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Coimbatore, Tamil Nadu&apos;s second-largest city and a major industrial and healthcare hub, is home to numerous medical institutions and hospitals. The city has a competitive landscape for nursing education, with several <strong>nursing colleges in Coimbatore</strong> offering various programmes. However, not all institutions in the <strong>Coimbatore nursing college list</strong> match the clinical infrastructure and placement outcomes that learners and learning partners expect.
              </p>
              <p>
                For learners looking for the <strong>best nursing college in Coimbatore</strong> region, JKKN College of Nursing (Sresakthimayeil Institute of Nursing and Research) offers a distinctive advantage. Located 100-110 km from Coimbatore in Komarapalayam, JKKN provides what many Coimbatore colleges cannot — a dedicated 500+ bed multi-specialty teaching hospital on the same campus, ensuring clinical exposure from the very first year of the programme.
              </p>
              <p>
                What sets JKKN apart in the <strong>best nursing colleges in Coimbatore</strong> region is its combination of INC approval, NAAC accreditation, and affiliation to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. The institute&apos;s international placement track record — including the UK (NHS), Gulf countries (HAAD/DHA), and Australia (AHPRA) — gives Coimbatore learners a global career pathway that few local institutions can match.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <div className="flex-1 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Clinical_HospitalFacilities-1.webp"
                    alt="500-bed teaching hospital for nursing students near Coimbatore"
                    width={600}
                    height={300}
                    className="w-full h-40 sm:h-48 object-cover rounded-xl"
                  />
                </div>
                <div className="flex-1 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Simulation-lab-image.webp"
                    alt="Nursing simulation lab at JKKN College of Nursing near Coimbatore"
                    width={600}
                    height={300}
                    className="w-full h-40 sm:h-48 object-cover rounded-xl"
                  />
                </div>
              </div>
              <p>
                Coimbatore learners at JKKN benefit from secure, well-maintained hostel facilities with 24/7 security, mess services, and a campus environment designed for focused learning. With 90%+ placement support and a <strong>B.Sc nursing</strong> programme that combines theory with extensive hands-on clinical practice, JKKN is a top choice for Coimbatore families seeking the <strong>best nursing college in Coimbatore</strong> region.
              </p>
            </div>
          </div>
        </section>

        {/* ── Why Choose Section ────────────────────────────────────── */}
        <section className="bg-[#FBFBEE] py-12 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Why Coimbatore Learners Choose JKKN — Best Nursing College Near Coimbatore
              </h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed px-2">
                Among the best nursing colleges in Coimbatore region, JKKN stands out with
                INC approval, NAAC accreditation, and 90%+ placement support. Coimbatore
                nursing college seekers find JKKN ideal for its attached teaching hospital,
                international placement record, and secure hostel facilities for outstation
                learners.
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
                Nursing Courses Available for Coimbatore Learners
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Choose the right programme for your career goals
              </p>
              <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
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

                  <div className="space-y-2">
                    <a
                      href={prog.href}
                      className="block w-full text-center bg-[#006837] text-white font-semibold px-3 py-2.5 rounded-xl hover:bg-[#095d36] transition-colors text-xs sm:text-sm"
                    >
                      Learn More →
                    </a>
                    <a
                      href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=website&utm_medium=city_page&utm_campaign=coimbatore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center border-2 border-[#7cb983]/50 text-[#006837] font-semibold px-3 py-2.5 rounded-xl hover:bg-[#7cb983]/10 transition-colors text-xs sm:text-sm"
                    >
                      Enquire Now
                    </a>
                  </div>
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
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6">
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
              <a
                href="/placement"
                className="inline-block text-[#006837] font-semibold text-sm hover:underline"
              >
                View All Placement Details →
              </a>
            </div>
          </div>
        </section>

        {/* ── How to Reach ──────────────────────────────────────────── */}
        <section className="bg-[#FBFBEE] py-12 sm:py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                How to Reach from Coimbatore
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {facilities.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
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
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Student Success & Alumni ────────────────────────────────── */}
        <section className="bg-[#FBFBEE] py-12 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                JKKN Nursing Graduate Success
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Our track record speaks for itself
              </p>
              <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#006837] mb-2">90%+</div>
                <div className="text-gray-500 text-sm sm:text-base font-medium">Placement Rate</div>
                <p className="text-gray-400 text-xs mt-2">Consistent placement support across all nursing programmes</p>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#006837] mb-2">60+</div>
                <div className="text-gray-500 text-sm sm:text-base font-medium">Recruiting Partners</div>
                <p className="text-gray-400 text-xs mt-2">Apollo, Sun Pharma, NHS UK, and more top healthcare employers</p>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#006837] mb-2">25 LPA</div>
                <div className="text-gray-500 text-sm sm:text-base font-medium">Highest Package</div>
                <p className="text-gray-400 text-xs mt-2">International nursing placements in UK, UAE, and Singapore</p>
              </div>

              <div className="bg-[#006837] rounded-2xl p-5 sm:p-6 shadow-sm text-center flex flex-col justify-center">
                <div className="text-white font-bold text-base sm:text-lg mb-2">Are You a JKKN Alumni?</div>
                <p className="text-white/70 text-xs sm:text-sm mb-4">Share your experience and inspire future nursing learners from Coimbatore</p>
                <a
                  href="/contact"
                  className="inline-block bg-white text-[#006837] font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-gray-100 transition-colors"
                >
                  Share Your Story
                </a>
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
                Best Nursing Colleges in Coimbatore — Your Questions Answered
              </p>
              <div className="w-12 h-1 bg-[#7cb983] rounded mx-auto mt-4"></div>
            </div>

            <CityFaqAccordion faqs={faqs} />
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
              {cities.map((city) => (
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
                href="/?section=programs"
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
