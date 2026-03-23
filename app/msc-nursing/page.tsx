import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ScrollButton from "@/components/ScrollButton";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaBook, FaCheckCircle, FaGraduationCap, FaUserMd, FaBriefcase, FaClipboardCheck, FaFileAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "M.Sc Nursing Course — 2-Year INC-Approved Program | Sresakthimayeil Institute of Nursing and Research",
  description: "M.Sc Nursing at Sresakthimayeil Institute of Nursing and Research, Komarapalayam. 5 specializations: Medical-Surgical, Child Health, OBG, Psychiatric, Community Health. Apply for 2026-27.",
  keywords: "M.Sc Nursing, MSc Nursing Tamil Nadu, post graduate nursing, JKKN nursing, nursing specialization",
  openGraph: {
    title: "M.Sc Nursing — Sresakthimayeil Institute of Nursing and Research, Tamil Nadu",
    description: "INC-approved 2-year M.Sc Nursing with 5 specializations and 500+ bed hospital training.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing",
    siteName: "Sresakthimayeil Institute of Nursing and Research",
    type: "website",
  },
  alternates: { canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing" },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
};

export default function MScNursing() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Master of Science in Nursing (M.Sc Nursing)",
    "description": "A 2-year postgraduate nursing program approved by the Indian Nursing Council (INC) with 5 specializations, affiliated to Tamil Nadu Dr. MGR Medical University.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Sresakthimayeil Institute of Nursing and Research (Sresakthimayeil Institute of Nursing and Research)",
      "url": "https://nursing.sresakthimayeil.jkkn.ac.in/"
    },
    "timeRequired": "P2Y",
    "educationalCredentialAwarded": "M.Sc Nursing Degree",
    "coursePrerequisites": "B.Sc Nursing with minimum 55% marks"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the duration of M.Sc Nursing program?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The M.Sc Nursing program is a 2-year (4 semesters) full-time postgraduate degree program approved by the Indian Nursing Council (INC). It includes theoretical coursework, clinical practicum, and research dissertation."
        }
      },
      {
        "@type": "Question",
        "name": "What are the eligibility criteria for admission?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Candidates must have B.Sc Nursing with minimum 55% marks, valid RN & RM registration with State Nursing Council, and at least 1 year of clinical experience after B.Sc Nursing."
        }
      },
      {
        "@type": "Question",
        "name": "What specializations are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN offers five M.Sc Nursing specializations: Medical Surgical Nursing, Child Health Nursing, Community Health Nursing, Obstetrics & Gynecology Nursing, and Mental Health Nursing."
        }
      },
      {
        "@type": "Question",
        "name": "What are the career opportunities after M.Sc Nursing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Graduates can pursue careers as Nursing Educators, Clinical Nurse Specialists, Nursing Administrators, Nurse Researchers, Public Health Officers, and can pursue Ph.D. in Nursing."
        }
      },
      {
        "@type": "Question",
        "name": "Is hostel accommodation available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, JKKN provides separate hostel facilities with modern amenities, nutritious dining, 24/7 security, and a conducive environment for academic success."
        }
      },
      {
        "@type": "Question",
        "name": "Can I pursue Ph.D. after M.Sc Nursing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, M.Sc Nursing is the gateway to doctoral studies in nursing. Graduates can pursue Ph.D. in Nursing to become professors, researchers, and healthcare policy experts."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <BreadcrumbSchema items={[
        { name: 'JKKN Institutions', url: 'https://jkkn.ac.in/' },
        { name: 'Nursing College', url: 'https://nursing.sresakthimayeil.jkkn.ac.in/' },
        { name: 'M.Sc Nursing', url: 'https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing/' },
      ]} />
      <main className="bg-[#FBFBEE]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#006837] to-[#002309] text-white py-20 md:py-32 relative overflow-hidden">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
                  <span className="w-2 h-2 bg-[#7cb983] rounded-full"></span>
                  <span className="text-sm font-medium uppercase tracking-wide">ADMISSIONS OPEN 2026-27</span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  M.Sc Nursing at{" "}
                  <span className="text-[#7cb983]">Sresakthimayeil Institute of Nursing and Research</span>
                </h1>

                <p className="text-sm text-gray-300 mb-4">Last updated: March 19, 2026</p>

                <div className="bg-white/10 border-l-4 border-[#7cb983] p-4 mb-8 rounded-r-lg">
                  <p className="font-semibold text-[#7cb983] mb-1">Quick Summary</p>
                  <p className="text-gray-200 text-sm">JKKN College of Nursing offers a 2-year INC-approved M.Sc Nursing program with 5 specializations, affiliated to Tamil Nadu Dr. M.G.R. Medical University. Advanced clinical training at the 500+ bed teaching hospital. Graduates pursue careers as Nurse Educators, Clinical Specialists, and Administrators.</p>
                </div>

                {/* Description */}
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  Elevate your nursing career with the INC-approved postgraduate program.
                  Develop advanced clinical expertise, leadership skills, and research
                  competencies across 5 specialized domains of nursing practice.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8">
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7cb983] mb-1">2 Years</div>
                    <div className="text-xs sm:text-sm text-white/80">Program Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7cb983] mb-1">5</div>
                    <div className="text-xs sm:text-sm text-white/80">Specializations</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7cb983] mb-1">100%</div>
                    <div className="text-xs sm:text-sm text-white/80">Placement Support</div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                    className="inline-flex items-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Apply Now
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <ScrollButton
                    targetId="specializations"
                    className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#006837] px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    Explore Specializations
                  </ScrollButton>
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                {/* Hero Image */}
                <div className="relative">
                  <Image
                    src="/images/Master-of-Science-in-Nursing-Hero-Banner-Image.webp"
                    alt="M.Sc Nursing program"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
                {/* Badges below image */}
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <div className="bg-white text-[#006837] p-3 sm:p-4 lg:p-6 rounded-xl shadow-2xl flex-1 min-w-[140px]">
                    <div className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2"><a href="https://www.indiannursingcouncil.org/" target="_blank" rel="noopener noreferrer" className="text-[#006837] hover:underline">INC</a> APPROVED</div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold"><a href="https://www.tnmgrmu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-[#006837] hover:underline">TNMGRMU</a> Affiliated</div>
                  </div>
                  <div className="bg-white text-[#006837] p-3 sm:p-4 lg:p-6 rounded-xl shadow-2xl flex-1 min-w-[140px]">
                    <div className="text-xs sm:text-sm font-medium text-gray-600 mb-1 sm:mb-2">ANNUAL INTAKE</div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold">25 Seats</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* Recognition Badges */}
        <section className="py-8 bg-white border-y border-gray-200">
          <div className="container-custom">
            <div className="flex flex-col items-center">
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-6">
                RECOGNIZED & ACCREDITED BY
              </h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                <div className="flex items-center gap-3 w-72 md:w-auto">
                  <Image src="/images/Indian_Nursing_Council_Logo.png" alt="INC Logo" width={50} height={50} className="object-contain flex-shrink-0 w-[50px]" />
                  <span className="font-semibold text-gray-800">INC Approved</span>
                </div>
                <div className="flex items-center gap-3 w-72 md:w-auto">
                  <Image src="/images/TNNMC_logo.jpg" alt="TNNMC Logo" width={50} height={50} className="object-contain flex-shrink-0 w-[50px]" />
                  <span className="font-semibold text-gray-800">TNNMC Recognized</span>
                </div>
                <div className="flex items-center gap-3 w-72 md:w-auto">
                  <Image src="/images/TNNMC_logo.jpg" alt="TNNMC Logo" width={50} height={50} className="object-contain flex-shrink-0 w-[50px]" />
                  <span className="font-semibold text-gray-800">The Tamilnadu Dr.MGR University Affiliated</span>
                </div>
                <div className="flex items-center gap-3 w-72 md:w-auto">
                  <Image src="/images/NAAC_LOGO.png" alt="NAAC Logo" width={50} height={50} className="object-contain flex-shrink-0 w-[50px]" />
                  <span className="font-semibold text-gray-800"><a href="https://www.naac.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#006837] hover:underline">NAAC</a> Accredited</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Cards */}
        <section className="py-16 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Duration */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-[#7cb983]/10 rounded-2xl flex items-center justify-center mb-6">
                  <FaClock className="w-7 h-7 text-[#7cb983]" />
                </div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">DURATION</div>
                <div className="text-2xl font-bold text-[#006837]">2 Years</div>
              </div>

              {/* Eligibility */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-[#7cb983]/10 rounded-2xl flex items-center justify-center mb-6">
                  <FaBook className="w-7 h-7 text-[#7cb983]" />
                </div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">ELIGIBILITY</div>
                <div className="text-2xl font-bold text-[#006837]">B.Sc Nursing (55%)</div>
              </div>

              {/* Annual Intake */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-[#7cb983]/10 rounded-2xl flex items-center justify-center mb-6">
                  <FaUserMd className="w-7 h-7 text-[#7cb983]" />
                </div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">ANNUAL INTAKE</div>
                <div className="text-2xl font-bold text-[#006837]">25 Seats</div>
              </div>

              {/* Degree Awarded */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-[#7cb983]/10 rounded-2xl flex items-center justify-center mb-6">
                  <FaGraduationCap className="w-7 h-7 text-[#7cb983]" />
                </div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">DEGREE AWARDED</div>
                <div className="text-2xl font-bold text-[#006837]">M.Sc Nursing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">Program Overview</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#7cb983]/10 rounded-3xl"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#006837]/10 rounded-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/Master-of-Science-in-Nursing-Clinical-Training-Image.webp"
                    alt="M.Sc Nursing clinical training"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The <strong className="text-[#006837]">Master of Science in Nursing (M.Sc Nursing)</strong> at JKKN College of
                  Nursing is a comprehensive 2-year postgraduate program designed to
                  develop advanced nursing professionals with specialized clinical
                  expertise, research acumen, and leadership capabilities.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The program integrates evidence-based practice with hands-on clinical
                  training across premier healthcare facilities. Learners engage with
                  experienced Learning Facilitators who bring decades of clinical and
                  academic expertise to create transformative learning experiences.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#7cb983]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="w-4 h-4 text-[#7cb983]" />
                    </div>
                    <p className="text-gray-700">Advanced clinical practice with specialized patient care competencies</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#7cb983]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="w-4 h-4 text-[#7cb983]" />
                    </div>
                    <p className="text-gray-700">Research methodology and dissertation under expert guidance</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#7cb983]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="w-4 h-4 text-[#7cb983]" />
                    </div>
                    <p className="text-gray-700">Leadership and healthcare administration training</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#7cb983]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheckCircle className="w-4 h-4 text-[#7cb983]" />
                    </div>
                    <p className="text-gray-700">Clinical rotations at multi-specialty hospitals</p>
                  </div>
                </div>

                <ScrollButton
                  targetId="curriculum"
                  className="mt-8 inline-flex items-center gap-2 border-2 border-[#006837] text-[#006837] hover:bg-[#006837] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  View Full Curriculum
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </ScrollButton>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Specialized Nursing Domains */}
        <section id="specializations" className="py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#7cb983]/10 text-[#7cb983] text-sm font-semibold px-6 py-2 rounded-full mb-4 uppercase tracking-wider">
                CHOOSE YOUR PATH
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                5 Specialized Nursing Domains
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Select from five INC-approved specializations, each designed to develop expert
                practitioners in critical areas of healthcare delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Medical Surgical Nursing */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#7cb983] rounded-full -mr-10 -mt-10 flex items-center justify-center text-white font-bold text-2xl">
                  1
                </div>
                <div className="mb-6">
                  <Image src="/images/Simulation-lab-image.webp" alt="Medical Surgical Nursing" width={400} height={250} className="w-full h-48 object-cover rounded-xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#006837] mb-4">Medical Surgical Nursing</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Develop expertise in managing adult patients with complex medical conditions, critical care
                  interventions, and post-operative care management.
                </p>
                <Link href="/course-msc-medical-surgical" className="inline-flex items-center gap-2 text-[#7cb983] font-semibold hover:gap-4 transition-all duration-300">
                  Explore Specialization
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              {/* Child Health Nursing */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#7cb983] rounded-full -mr-10 -mt-10 flex items-center justify-center text-white font-bold text-2xl">
                  2
                </div>
                <div className="mb-6">
                  <Image src="/images/Child-Health-Nursing-Hero-Banner-image.webp" alt="Child Health Nursing" width={400} height={250} className="w-full h-48 object-cover rounded-xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#006837] mb-4">Child Health Nursing</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Specialize in pediatric nursing care encompassing neonatal care, child
                  development, and adolescent health across clinical settings.
                </p>
                <Link href="/course-msc-child-health" className="inline-flex items-center gap-2 text-[#7cb983] font-semibold hover:gap-4 transition-all duration-300">
                  Explore Specialization
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              {/* Community Health Nursing */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#7cb983] rounded-full -mr-10 -mt-10 flex items-center justify-center text-white font-bold text-2xl">
                  3
                </div>
                <div className="mb-6">
                  <Image src="/images/Community-Health-Nursing-Hero-Banner-Image.webp" alt="Community Health Nursing" width={400} height={250} className="w-full h-48 object-cover rounded-xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#006837] mb-4">Community Health Nursing</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Focus on public health nursing, epidemiology, health promotion, and disease prevention
                  strategies at community and population levels.
                </p>
                <Link href="/course-msc-community-health" className="inline-flex items-center gap-2 text-[#7cb983] font-semibold hover:gap-4 transition-all duration-300">
                  Explore Specialization
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              {/* Obstetrics & Gynecology Nursing */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden md:col-start-1 lg:col-start-2">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#7cb983] rounded-full -mr-10 -mt-10 flex items-center justify-center text-white font-bold text-2xl">
                  4
                </div>
                <div className="mb-6">
                  <Image src="/images/Master-of-Science-in-Nursing-Clinical-Training-Image.webp" alt="Obstetrics & Gynecology Nursing" width={400} height={250} className="w-full h-48 object-cover rounded-xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#006837] mb-4">Obstetrics & Gynecology Nursing</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Master maternal health nursing including antenatal care, labor management, postnatal
                  care, and comprehensive women&apos;s reproductive health.
                </p>
                <Link href="/course-msc-obstetrics-gynecological" className="inline-flex items-center gap-2 text-[#7cb983] font-semibold hover:gap-4 transition-all duration-300">
                  Explore Specialization
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              {/* Mental Health Nursing */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#7cb983] rounded-full -mr-10 -mt-10 flex items-center justify-center text-white font-bold text-2xl">
                  5
                </div>
                <div className="mb-6">
                  <Image src="/images/Mental-Health-Nursing-Hero-Banner-Image.webp" alt="Mental Health Nursing" width={400} height={250} className="w-full h-48 object-cover rounded-xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#006837] mb-4">Mental Health Nursing</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Develop competencies in psychiatric nursing, therapeutic communication,
                  psychopharmacology, and mental health rehabilitation approaches.
                </p>
                <Link href="/course-msc-mental-health" className="inline-flex items-center gap-2 text-[#7cb983] font-semibold hover:gap-4 transition-all duration-300">
                  Explore Specialization
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">Eligibility Criteria</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet these requirements to pursue your M.Sc Nursing degree at Sresakthimayeil Institute of Nursing and Research.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="flex gap-6">
                <div className="relative">
                  <Image src="/images/Master-of-Science-in-Nursing-Eligibility-Criteria-Image.webp" alt="M.Sc Nursing eligibility" width={400} height={500} className="w-full h-auto object-cover rounded-2xl shadow-lg" />
                </div>
              </div>

              <div className="space-y-6">
                {/* Educational Qualification */}
                <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-[#006837]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <FaGraduationCap className="w-7 h-7 text-[#006837]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#006837] mb-3">Educational Qualification</h3>
                      <p className="text-gray-700 leading-relaxed">
                        B.Sc Nursing (Basic) or B.Sc Nursing (Post-Basic) degree from an INC-recognized institution with minimum 55% aggregate marks and NRI students get migration certificates from the concerned university.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Registration Requirement */}
                <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-[#006837]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <FaClipboardCheck className="w-7 h-7 text-[#006837]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#006837] mb-3">Registration Requirement</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Valid and current registration as Registered Nurse & Registered Midwife (RN & RM) with the State Nursing Registration Council.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clinical Experience */}
                <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-[#006837]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <FaBriefcase className="w-7 h-7 text-[#006837]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#006837] mb-3">Clinical Experience</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Minimum 1 year of clinical work experience in a hospital or healthcare institution after completion of B.Sc Nursing degree.
                      </p>
                    </div>
                  </div>
                </div>

            
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Curriculum */}
        <section id="curriculum" className="py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#7cb983]/10 text-[#7cb983] text-sm font-semibold px-6 py-2 rounded-full mb-4 uppercase tracking-wider">
                ACADEMIC STRUCTURE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                M.Sc Nursing Curriculum and Syllabus
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The INC-aligned curriculum balances theoretical foundations with extensive clinical
                practice, preparing you for excellence in specialized nursing domains.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Year 1 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                  <div className="bg-[#7cb983] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-base sm:text-lg w-fit">
                    YEAR 1
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#006837]">Foundation & Core Concepts</h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#006837] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Nursing Education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#006837] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Advance Nursing Practice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#006837] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Nursing Research and Statistics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#006837] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Clinical Speciality – I</span>
                  </li>
              
                </ul>
              </div>

              {/* Year 2 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                  <div className="bg-[#7cb983] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-base sm:text-lg w-fit">
                    YEAR 2
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#006837]">Specialization & Research</h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#006837] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Nursing Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#006837] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Nursing Research (Dissertation)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#006837] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Clinical Speciality – II</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Career Prospects */}
        <section className="py-20 bg-gradient-to-br from-[#006837] to-[#002309] text-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block bg-white/10 text-white text-sm font-semibold px-6 py-2 rounded-full mb-4 uppercase tracking-wider">
                CAREER PROSPECTS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Career Options After M.Sc Nursing
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                M.Sc Nursing graduates command diverse roles across clinical practice, education,
                research, and healthcare administration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Nursing Educator */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-[#7cb983] rounded-2xl flex items-center justify-center mb-6">
                  <FaBook className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Nursing Educator</h3>
                <p className="text-white/90 leading-relaxed">
                  Teach and mentor the next generation of nurses at nursing colleges and healthcare training institutions.
                </p>
              </div>

              {/* Clinical Nurse Specialist */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-[#7cb983] rounded-2xl flex items-center justify-center mb-6">
                  <FaUserMd className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Clinical Nurse Specialist</h3>
                <p className="text-white/90 leading-relaxed">
                  Provide expert clinical care in specialized areas at multi-specialty hospitals and healthcare centers.
                </p>
              </div>

              {/* Nursing Administrator */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-[#7cb983] rounded-2xl flex items-center justify-center mb-6">
                  <FaBriefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Nursing Administrator</h3>
                <p className="text-white/90 leading-relaxed">
                  Lead nursing departments, manage healthcare teams, and drive quality improvement initiatives.
                </p>
              </div>

              {/* Nurse Researcher */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-[#7cb983] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Nurse Researcher</h3>
                <p className="text-white/90 leading-relaxed">
                  Conduct healthcare research, publish in journals, and contribute to evidence-based nursing practice.
                </p>
              </div>

              {/* Public Health Officer */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-[#7cb983] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Public Health Officer</h3>
                <p className="text-white/90 leading-relaxed">
                  Design and implement community health programs with government agencies and NGOs.
                </p>
              </div>

              {/* International Opportunities */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-[#7cb983] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">International Opportunities</h3>
                <p className="text-white/90 leading-relaxed">
                  Pursue nursing careers globally with your internationally recognized postgraduate qualification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose JKKN */}
        <section className="py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#7cb983]/10 text-[#7cb983] text-sm font-semibold px-6 py-2 rounded-full mb-4 uppercase tracking-wider">
                OUR DISTINCTION
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                Why Choose JKKN for M.Sc Nursing?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join a legacy of nursing excellence built over decades of commitment to progressive
                education and clinical mastery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Expert Learning Facilitators */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#006837] text-white rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-[#006837]">Expert Learning Facilitators</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Learn from highly qualified Learning Facilitators with doctoral degrees, extensive clinical experience, and active research portfolios.
                </p>
              </div>

              {/* State-of-the-Art Facilities */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#006837] text-white rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-[#006837]">State-of-the-Art Facilities</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Access advanced nursing simulation labs, digital learning studios, and comprehensive library resources supporting evidence-based learning.
                </p>
              </div>

              {/* Multi-Specialty Clinical Training */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#006837] text-white rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-[#006837]">Multi-Specialty Clinical Training</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Gain hands-on experience at affiliated multi-specialty hospitals with exposure to diverse patient populations and clinical scenarios.
                </p>
              </div>

              {/* Research Excellence */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#006837] text-white rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-[#006837]">Research Excellence</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Receive dedicated research guidance for dissertation work with opportunities to publish in indexed journals and present at conferences.
                </p>
              </div>

              {/* Career Development Support */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#006837] text-white rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    5
                  </div>
                  <h3 className="text-xl font-bold text-[#006837]">Career Development Support</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Benefit from dedicated placement cell, career counseling, and industry connections with leading healthcare institutions.
                </p>
              </div>

              {/* Holistic Development */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#006837] text-white rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    6
                  </div>
                  <h3 className="text-xl font-bold text-[#006837]">Holistic Development</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Experience progressive education that nurtures clinical competence, leadership capabilities, and ethical nursing practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#7cb983]/10 text-[#7cb983] text-sm font-semibold px-6 py-2 rounded-full mb-4 uppercase tracking-wider">
                HOW TO APPLY
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                How to Apply for M.Sc Nursing Admission
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Your journey to advanced nursing education begins with these simple steps.
              </p>
            </div>

            {/* Timeline */}
            <div className="max-w-6xl mx-auto">
              {/* Desktop Timeline */}
              <div className="hidden lg:block">
                <div className="relative max-w-4xl mx-auto">
                  {/* Connecting Line */}
                  <div className="absolute top-10 h-0.5 bg-gray-300" style={{ left: '16.67%', right: '16.67%' }}></div>

                  <div className="grid grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="text-center relative">
                      <div className="w-20 h-20 bg-white border-4 border-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                        <span className="text-3xl font-bold text-[#7cb983]">1</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#006837] mb-3">Submit Application</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Complete online application with required documents.
                      </p>
                    </div>

                  

                    {/* Step 3 */}
                    <div className="text-center relative">
                      <div className="w-20 h-20 bg-white border-4 border-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                        <span className="text-3xl font-bold text-[#7cb983]">2</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#006837] mb-3">Counseling</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Attend counseling for specialization selection.
                      </p>
                    </div>

                    {/* Step 4 */}
                    <div className="text-center relative">
                      <div className="w-20 h-20 bg-white border-4 border-[#7cb983] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                        <span className="text-3xl font-bold text-[#7cb983]">3</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#006837] mb-3">Enrollment</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Complete fee payment and document verification.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Timeline */}
              <div className="lg:hidden space-y-8">
                {/* Step 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white border-4 border-[#7cb983] rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#7cb983]">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#006837] mb-2">Submit Application</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Complete online application with required documents.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white border-4 border-[#7cb983] rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#7cb983]">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#006837] mb-2">Counseling</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Attend counseling for specialization selection.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white border-4 border-[#7cb983] rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#7cb983]">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#006837] mb-2">Enrollment</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Complete fee payment and document verification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#7cb983]/10 text-[#7cb983] text-sm font-semibold px-6 py-2 rounded-full mb-4 uppercase tracking-wider">
                HAVE QUESTIONS?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about the M.Sc Nursing program at Sresakthimayeil Institute of Nursing and Research.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {/* FAQ 1 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      What is the duration of M.Sc Nursing program?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    The M.Sc Nursing program is a 2-year (4 semesters) full-time postgraduate degree program approved by the Indian Nursing Council (INC). It includes theoretical coursework, clinical practicum, and research dissertation.
                  </p>
                </details>

                {/* FAQ 2 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      What are the eligibility criteria for admission?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    Candidates must have B.Sc Nursing with minimum 55% marks, valid RN & RM registration with State Nursing Council, and at least 1 year of clinical experience after B.Sc Nursing.
                  </p>
                </details>

                {/* FAQ 3 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      What specializations are available?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    JKKN offers five M.Sc Nursing specializations: Medical Surgical Nursing, Child Health Nursing, Community Health Nursing, Obstetrics & Gynecology Nursing, and Mental Health Nursing.
                  </p>
                </details>

                {/* FAQ 4 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      What are the career opportunities after M.Sc Nursing?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    Graduates can pursue careers as Nursing Educators, Clinical Nurse Specialists, Nursing Administrators, Nurse Researchers, Public Health Officers, and can pursue Ph.D. in Nursing.
                  </p>
                </details>

                {/* FAQ 5 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      Is hostel accommodation available?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    Yes, JKKN provides separate hostel facilities with modern amenities, nutritious dining, 24/7 security, and a conducive environment for academic success.
                  </p>
                </details>

                {/* FAQ 6 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      Can I pursue Ph.D. after M.Sc Nursing?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    Yes, M.Sc Nursing is the gateway to doctoral studies in nursing. Graduates can pursue Ph.D. in Nursing to become professors, researchers, and healthcare policy experts.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#006837] to-[#002309] text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Advance Your Nursing Career?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto">
              Take the next step toward becoming an advanced nursing professional.
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Applications for the 2025-26 academic year are now open.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                className="inline-flex items-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#006837] px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Request Information
              </Link>
            </div>
          </div>
        </section>

        {/* Institutional Authority Block */}
        <div className="container-custom">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-12 mb-8">
            <p className="font-semibold text-dark mb-2">Published by JKKN College of Nursing</p>
            <p className="text-sm text-gray-600 mb-1">Sresakthimayeil Institute of Nursing and Research</p>
            <p className="text-sm text-gray-600 mb-1">INC Approved | NAAC Accredited | Affiliated to Tamil Nadu Dr. M.G.R. Medical University</p>
            <p className="text-sm text-gray-600 mb-1">Komarapalayam, Namakkal District, Tamil Nadu 638183</p>
            <p className="text-sm text-gray-600">Contact: +91 93458 55001 | nursing@jkkn.ac.in</p>
          </div>
        </div>

      </main>
      <Footer hideLifeAtJKKN />
      <FloatingButtons />
    </>
  );
}
