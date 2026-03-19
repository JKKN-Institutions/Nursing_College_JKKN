"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Image from "next/image";
import { useState } from "react";
import {
  FaFlask,
  FaHeart,
  FaBook,
  FaBriefcase,
  FaBookOpen,
  FaUsers,
  FaClock,
  FaCalendar,
  FaPhone,
  FaUserGraduate,
  FaCheckCircle,
  FaLightbulb,
  FaGraduationCap,
  FaPeopleCarry,
} from "react-icons/fa";

export default function MScObstetricsGynecologicalNursing() {
  const [activeTab, setActiveTab] = useState("firstYear");

  return (
    <>
      <Header />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
          { name: "M.Sc Nursing", url: "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing" },
          { name: "Obstetric and Gynecological Nursing", url: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-obstetrics-gynecological" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "M.Sc Obstetric and Gynecological Nursing",
              "description": "A 2-year postgraduate nursing specialization in Obstetric and Gynecological Nursing, approved by the Indian Nursing Council (INC) and affiliated to Tamil Nadu Dr. MGR Medical University. Covers antenatal care, intrapartum nursing, high-risk pregnancy, neonatal nursing, gynecological nursing, and women's health.",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "Sresakthimayeil Institute of Nursing and Research (Sresakthimayeil Institute of Nursing and Research)",
                "url": "https://nursing.sresakthimayeil.jkkn.ac.in/"
              },
              "timeRequired": "P2Y",
              "educationalCredentialAwarded": "M.Sc Nursing (Obstetric and Gynecological Nursing)",
              "coursePrerequisites": "B.Sc Nursing or Post Basic B.Sc Nursing with minimum 55% marks and 1 year clinical experience",
              "availableLanguage": "English",
              "url": "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-obstetrics-gynecological"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the duration of M.Sc Nursing in Obstetrics and Gynecology Nursing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "M.Sc Nursing in Obstetrics and Gynecology Nursing is a 2-year full-time postgraduate program divided into 4 semesters. The first year focuses on core nursing subjects, research methodology, and foundational OBG nursing courses including antenatal care and normal midwifery. The second year emphasizes advanced clinical specialization in high-risk pregnancy, neonatal care, gynecological nursing, and dissertation/thesis work."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the eligibility criteria for M.Sc OBG Nursing admission?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Candidates must have completed B.Sc Nursing (4-year course) or Post Basic B.Sc Nursing with a minimum of 55% aggregate marks from a recognized university. Additionally, applicants must possess valid registration with the State Nursing Council as RN/RM and have at least 1 year of clinical work experience after completing their basic nursing degree."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What career opportunities are available after completing M.Sc OBG Nursing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Graduates can pursue diverse careers including Nursing Educator/Lecturer specializing in maternal-child health at nursing colleges, Clinical Nurse Midwife, Women's Health Consultant, Labor Ward Manager, NICU Specialist, Research Associate in maternal health, Quality Assurance Officer in maternity services, and can also pursue Ph.D. in Nursing for academic and research careers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is the M.Sc OBG Nursing program at JKKN approved by INC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the M.Sc Nursing program in Obstetrics and Gynecology at Sresakthimayeil Institute of Nursing and Research is approved by the Indian Nursing Council (INC) and is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. The college is also recognized by the Tamil Nadu Nurses and Midwives Council, ensuring that the degree is valid for employment and higher education across India."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What specialization areas are covered in OBG Nursing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OBG Nursing specialization encompasses antenatal care, intrapartum nursing, postnatal care, high-risk pregnancy management, neonatal nursing, gynecological nursing, reproductive health, family planning services, infertility counseling, and women's health promotion. Learners gain comprehensive expertise in managing maternal and newborn care across various clinical settings."
                  }
                }
              ]
            }
          ])
        }}
      />
      <main className="bg-[#FBFBEE] min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#006837] to-[#002309] text-white py-16 md:py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  M.Sc Nursing{" "}
                  <span className="text-[#7cb983]">
                    Obstetrics
                    <br />& Gynecology Nursing
                  </span>
                </h1>

                <p className="text-sm text-cyan-200 mb-4">Last updated: March 19, 2026</p>

                <div className="bg-white/10 border-l-4 border-[#7cb983] p-4 mb-6 rounded-r-lg">
                  <p className="font-semibold text-[#7cb983] mb-1">Quick Summary</p>
                  <p className="text-cyan-100 text-sm">JKKN College of Nursing offers a 2-year M.Sc Nursing specialization in Obstetric and Gynecological Nursing, approved by INC and affiliated to Tamil Nadu Dr. M.G.R. Medical University. Graduates build advanced expertise in maternal health, high-risk pregnancy management, midwifery, neonatal care, and women's healthcare at the 500+ bed teaching hospital.</p>
                </div>

                <p className="text-lg md:text-xl text-cyan-100 mb-6">
                  Postgraduate Specialization in Maternal-Child Health &
                  Women's Healthcare
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-100">
                  Embark on a transformative journey in maternal-child health nursing with
                  our INC-approved M.Sc Nursing program. Develop advanced clinical
                  competencies in obstetrics, gynecology, midwifery, and women's
                  healthcare while preparing for leadership roles in nursing education and
                  clinical practice.
                </p>

                {/* Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <FaCheckCircle className="text-cyan-300 flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium">INC Approved</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <FaClock className="text-cyan-300 flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium">2 Years Duration</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <FaBookOpen className="text-cyan-300 flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium">Full-Time Program</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <FaBriefcase className="text-cyan-300 flex-shrink-0" />
                    <span className="text-sm md:text-base font-medium">NAAC Accredited</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 transition-all">
                    Apply Now
                    <span>→</span>
                  </a>
                  <button
                    onClick={() => {
                      document.getElementById('curriculum-structure')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-transparent border-2 border-white hover:bg-white hover:text-[#006837] text-white font-semibold px-8 py-3 rounded-full transition-all"
                  >
                    Explore Curriculum
                  </button>
                </div>
              </div>

              {/* Right Content - Hero Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="rounded-3xl overflow-hidden shadow-2xl max-w-md w-full">
                  <Image
                    src="/images/Obstetrics-Hero-Banner-Image.webp"
                    alt="OBG Nursing Excellence"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#FBFBEE] py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">1800+</div>
                <div className="text-gray-700 font-medium">Clinical Training Hours</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">10+</div>
                <div className="text-gray-700 font-medium">Affiliated Hospitals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">97%</div>
                <div className="text-gray-700 font-medium">Placement Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">20+</div>
                <div className="text-gray-700 font-medium">Research Publications</div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview Section */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                Program Overview
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive postgraduate education in Obstetrics & Gynecology Nursing
                excellence
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Column - Description */}
              <div className="lg:col-span-2 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  M.Sc Nursing in Obstetrics & Gynecology (OBG) Nursing is an advanced 2-year
                  postgraduate program designed to develop specialized competencies in
                  maternal-child healthcare. This INC-approved program prepares nursing professionals for
                  leadership roles in clinical practice, nursing education, research, and
                  healthcare administration.
                </p>

                <p>
                  The program provides extensive theoretical knowledge and hands-on clinical
                  experience across the continuum of women's health, from adolescence through
                  menopause. Learners gain expertise in managing normal and high-risk pregnancies,
                  conducting deliveries, providing gynecological care, and promoting women's health
                  through evidence-based nursing interventions.
                </p>

                <p>
                  At Sresakthimayeil Institute of Nursing and Research, our M.Sc OBG Nursing program is delivered by
                  experienced Learning Facilitators who are experts in maternal-child health nursing.
                  The curriculum integrates contemporary obstetric practices, advanced gynecological
                  nursing concepts, and cutting-edge research methodologies to prepare graduates
                  who can contribute meaningfully to improving maternal and newborn health
                  outcomes.
                </p>

                <p>
                  Clinical rotations are conducted at our affiliated multispecialty hospitals, providing
                  learners with exposure to diverse patient populations and complex maternal-fetal
                  conditions. This comprehensive approach ensures that graduates are well-prepared
                  to excel as nurse educators, clinical specialists, midwifery practitioners, and
                  women's health advocates.
                </p>
              </div>

              {/* Right Column - Program Details Card */}
              <div className="bg-white rounded-xl p-6 md:p-8 h-fit">
                <h3 className="text-2xl font-bold text-[#006837] mb-6 border-b-2 border-[#7cb983] pb-3">
                  Program Details
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <FaClock className="text-[#7cb983] text-xl" />
                      <span className="text-sm text-gray-600">Duration</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 ml-8">
                      2 Years
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <FaBook className="text-[#7cb983] text-xl" />
                      <span className="text-sm text-gray-600">Degree Awarded</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 ml-8">
                      M.Sc Nursing (OBG)
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <FaCheckCircle className="text-[#7cb983] text-xl" />
                      <span className="text-sm text-gray-600">Approvals</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 ml-8">
                      INC, TNNMC, MGR University
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <FaUsers className="text-[#7cb983] text-xl" />
                      <span className="text-sm text-gray-600">Intake Capacity</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 ml-8">
                      5 Learners per batch
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <FaCalendar className="text-[#7cb983] text-xl" />
                      <span className="text-sm text-gray-600">Academic Session</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 ml-8">
                    October - September
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <FaPhone className="text-[#7cb983] text-xl" />
                      <span className="text-sm text-gray-600">Admission Helpline</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-800 ml-8">
                      +91 4288 234567
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Highlights Section */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                Program Highlights
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                What makes our M.Sc OBG Nursing program stand out
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Highlight 1 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#006837] rounded-2xl flex items-center justify-center mb-4">
                  <FaFlask className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Advanced Midwifery Training
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive hands-on training in conducting normal and assisted deliveries
                  with state-of-the-art simulation facilities and real clinical exposure.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#006837] rounded-2xl flex items-center justify-center mb-4">
                  <FaHeart className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  High-Risk Pregnancy Care
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Specialized training in managing complications during pregnancy, labor,
                  and postpartum period with emphasis on evidence-based interventions.
                </p>
              </div>

              {/* Highlight 3 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#006837] rounded-2xl flex items-center justify-center mb-4">
                  <FaLightbulb className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Research Excellence
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Strong emphasis on nursing research methodology with mentored dissertation
                  work contributing to maternal-child health evidence base.
                </p>
              </div>

              {/* Highlight 4 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#006837] rounded-2xl flex items-center justify-center mb-4">
                  <FaBriefcase className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Career-Ready Graduates
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Benefit from dedicated placement cell support with connections to leading
                  hospitals, nursing colleges, and women's healthcare organizations.
                </p>
              </div>

              {/* Highlight 5 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#006837] rounded-2xl flex items-center justify-center mb-4">
                  <FaBookOpen className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Comprehensive Resources
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Access well-stocked library with maternal health journals, e-books, e-library (koha software and delnet software), simulation
                  labs, and latest textbooks for academic excellence.
                </p>
              </div>

              {/* Highlight 6 */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#006837] rounded-2xl flex items-center justify-center mb-4">
                  <FaPeopleCarry className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Expert Learning Facilitators
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Learn from experienced OBG nursing specialists with extensive clinical and
                  academic backgrounds in maternal-child health nursing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#006837] to-[#002309] text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Eligibility Criteria
              </h2>
              <p className="text-lg text-cyan-100 max-w-3xl mx-auto">
                Requirements for admission to M.Sc Nursing in Obstetrics & Gynecology Nursing
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Academic Requirements */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <FaBook className="text-[#7cb983] text-2xl" />
                  <h3 className="text-2xl font-bold text-[#7cb983]">Academic Requirements</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
                    <p className="text-white leading-relaxed">
                      B.Sc Nursing (4-year course) with minimum 55% aggregate marks from a recognized university
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
                    <p className="text-white leading-relaxed">
                      Post Basic B.Sc Nursing with minimum 55% aggregate marks from a recognized university
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
                    <p className="text-white leading-relaxed">
                    Candidates with B.Sc Nursing and P.B.B.Sc. Nursing (if applicable) are also eligible
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Requirements */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <FaCheckCircle className="text-[#7cb983] text-2xl" />
                  <h3 className="text-2xl font-bold text-[#7cb983]">Professional Requirements</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
                    <p className="text-white leading-relaxed">
                      Valid registration with State Nursing Registration Council as Registered Nurse (RN) and Registered Midwife (RM)
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
                    <p className="text-white leading-relaxed">
                      Minimum 1 year of clinical work experience after B.Sc Nursing or Post Basic B.Sc Nursing
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
                    <p className="text-white leading-relaxed">
                      Medically fit as certified by a registered medical practitioner
                    </p>
                  </div>
                </div>
              </div>

              {/* Selection Process */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <FaUserGraduate className="text-[#7cb983] text-2xl" />
                  <h3 className="text-2xl font-bold text-[#7cb983]">Selection Process</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
                    <p className="text-white leading-relaxed">
                      Entrance examination conducted by the university or institution
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
                    <p className="text-white leading-relaxed">
                      Merit-based selection considering academic performance and entrance test score
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
                    <p className="text-white leading-relaxed">
                      Personal interview for shortlisted candidates
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
                    <p className="text-white leading-relaxed">
                    An eligibility certificate from the university is required for studying M.SC nursing
                    </p>
                  </div>
                </div>
              </div>

              {/* Documents Required */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <FaBook className="text-[#7cb983] text-2xl" />
                  <h3 className="text-2xl font-bold text-[#7cb983]">Documents Required</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
                    <p className="text-white leading-relaxed">
                      B.Sc Nursing or Post Basic B.Sc Nursing degree certificate and mark sheets
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
                    <p className="text-white leading-relaxed">
                      Nursing registration certificate (RN/RM)
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <FaCheckCircle className="text-green-300 text-xl mt-1 flex-shrink-0" />
                    <p className="text-white leading-relaxed">
                      Experience certificate from employer, transfer certificate, and recent passport-size photographs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Structure Section */}
        <section id="curriculum-structure" className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                Curriculum Structure
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A comprehensive 4-semester curriculum designed as per INC guidelines for advanced
                OBG nursing education
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab("firstYear")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === "firstYear"
                    ? "bg-[#006837] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                First Year
              </button>
              <button
                onClick={() => setActiveTab("secondYear")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === "secondYear"
                    ? "bg-[#006837] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Second Year
              </button>
              <button
                onClick={() => setActiveTab("practicum")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === "practicum"
                    ? "bg-[#006837] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Clinical Practicum
              </button>
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {activeTab === "firstYear" && (
                <>
                  {/* First Year Subjects */}
                  <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#006837] mb-4">
                      Nursing Education
                    </h3>
                    <div className="flex items-center gap-4 text-gray-700">
                      <span className="flex items-center gap-2">
                        <FaBook className="text-[#7cb983]" />
                        Theory: 150 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <FaFlask className="text-[#7cb983]" />
                        Practicum: 150 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#006837] mb-4">
                      Advanced Nursing Practice
                    </h3>
                    <div className="flex items-center gap-4 text-gray-700">
                      <span className="flex items-center gap-2">
                        <FaBook className="text-[#7cb983]" />
                        Theory: 150 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <FaFlask className="text-[#7cb983]" />
                        Practicum: 250 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#006837] mb-4">
                      Nursing Research and Statistics
                    </h3>
                    <div className="flex items-center gap-4 text-gray-700">
                      <span className="flex items-center gap-2">
                        <FaBook className="text-[#7cb983]" />
                        Theory: 150 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <FaFlask className="text-[#7cb983]" />
                        Practicum: 150 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#006837] mb-4">
                      Clinical Speciality – I (OBG Nursing)
                    </h3>
                    <div className="flex items-center gap-4 text-gray-700">
                      <span className="flex items-center gap-2">
                        <FaBook className="text-[#7cb983]" />
                        Theory: 150 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <FaHeart className="text-[#7cb983]" />
                        Clinical: 750 hours
                      </span>
                    </div>
                  </div>

               
                </>
              )}

              {activeTab === "secondYear" && (
                <>
                  {/* Second Year Subjects */}
                  <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#006837] mb-4">
                      Clinical Speciality – II (Advanced OBG Nursing)
                    </h3>
                    <div className="flex items-center gap-4 text-gray-700">
                      <span className="flex items-center gap-2">
                        <FaBook className="text-[#7cb983]" />
                        Theory: 150 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <FaHeart className="text-[#7cb983]" />
                        Clinical: 1050 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#006837] mb-4">
                      Dissertation / Thesis
                    </h3>
                    <div className="flex items-center gap-4 text-gray-700">
                      <span className="flex items-center gap-2">
                        <FaLightbulb className="text-[#7cb983]" />
                        Research Work: 400 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <FaGraduationCap className="text-[#7cb983]" />
                        Viva Voce
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#006837] mb-4">
                      Nursing Management
                    </h3>
                    <div className="flex items-center gap-4 text-gray-700">
                      <span className="flex items-center gap-2">
                        <FaBook className="text-[#7cb983]" />
                        Theory: 150 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <FaHeart className="text-[#7cb983]" />
                        Clinical: 150 hours
                      </span>
                    </div>
                  </div>

             
                </>
              )}

              {activeTab === "practicum" && (
                <>
                  {/* Clinical Practicum Areas */}
                  <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#006837] mb-4">
                      Antenatal Care Clinic
                    </h3>
                    <div className="flex flex-col gap-2 text-gray-700">
                      <span className="flex items-center gap-2">
                        <FaHeart className="text-[#7cb983]" />
                        Prenatal Assessment, Fetal Monitoring
                      </span>
                      <span className="flex items-center gap-2">
                        <FaClock className="text-[#7cb983]" />
                        300 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#006837] mb-4">
                      Labor Room & Delivery Suite
                    </h3>
                    <div className="flex flex-col gap-2 text-gray-700">
                      <span className="flex items-center gap-2">
                        <FaHeart className="text-[#7cb983]" />
                        Normal & Assisted Deliveries, Labor Management
                      </span>
                      <span className="flex items-center gap-2">
                        <FaClock className="text-[#7cb983]" />
                        400 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#006837] mb-4">
                      Postnatal Ward
                    </h3>
                    <div className="flex flex-col gap-2 text-gray-700">
                      <span className="flex items-center gap-2">
                        <FaHeart className="text-[#7cb983]" />
                        Postpartum Care, Breastfeeding Support
                      </span>
                      <span className="flex items-center gap-2">
                        <FaClock className="text-[#7cb983]" />
                        240 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#006837] mb-4">
                      Neonatal Intensive Care Unit (NICU)
                    </h3>
                    <div className="flex flex-col gap-2 text-gray-700">
                      <span className="flex items-center gap-2">
                        <FaHeart className="text-[#7cb983]" />
                        Preterm Care, Neonatal Resuscitation
                      </span>
                      <span className="flex items-center gap-2">
                        <FaClock className="text-[#7cb983]" />
                        300 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#006837] mb-4">
                      Gynecology Ward & OPD
                    </h3>
                    <div className="flex flex-col gap-2 text-gray-700">
                      <span className="flex items-center gap-2">
                        <FaHeart className="text-[#7cb983]" />
                        Gynecological Disorders, Pre/Post-operative Care
                      </span>
                      <span className="flex items-center gap-2">
                        <FaClock className="text-[#7cb983]" />
                        240 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#006837] mb-4">
                      Family Planning & Infertility Clinic
                    </h3>
                    <div className="flex flex-col gap-2 text-gray-700">
                      <span className="flex items-center gap-2">
                        <FaHeart className="text-[#7cb983]" />
                        Contraception Counseling, ART Support
                      </span>
                      <span className="flex items-center gap-2">
                        <FaClock className="text-[#7cb983]" />
                        180 hours
                      </span>
                    </div>
                  </div>

                  
                </>
              )}
            </div>
          </div>
        </section>

        {/* Clinical Training Excellence Section */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                Clinical Training Excellence
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hands-on experience in diverse maternal-child health settings with expert
                supervision
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left - Clinical Training Image */}
              <div className="flex justify-center">
                <div className="rounded-3xl overflow-hidden shadow-2xl max-w-md w-full">
                  <Image
                    src="/images/Obstetrics-OBG-Clinical-Training-image.webp"
                    alt="OBG Clinical Training"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right - Clinical Areas */}
              <div>
                <h3 className="text-2xl font-bold text-[#006837] mb-6">
                  Specialized Clinical Areas
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Our learners receive comprehensive clinical exposure across various
                  maternal-child health units, developing expertise in managing normal
                  pregnancies, high-risk conditions, and gynecological care under the
                  guidance of experienced clinical mentors.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <FaHeart className="text-[#7cb983] text-xl flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Labor & Delivery Suite</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <FaUserGraduate className="text-[#7cb983] text-xl flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Antenatal Clinic</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <FaUsers className="text-[#7cb983] text-xl flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Neonatal ICU (NICU)</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <FaCheckCircle className="text-[#7cb983] text-xl flex-shrink-0" />
                    <span className="text-gray-800 font-medium">High-Risk Pregnancy Unit</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <FaBook className="text-[#7cb983] text-xl flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Gynecology Ward</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <FaLightbulb className="text-[#7cb983] text-xl flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Infertility Center</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <FaLightbulb className="text-[#7cb983] text-xl flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Urban Health Training Center</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <FaHeart className="text-[#7cb983] text-xl flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Family Planning Clinic</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <FaCalendar className="text-[#7cb983] text-xl flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Postnatal Care Unit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities Section */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                Career Opportunities
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Diverse career pathways await graduates of M.Sc Nursing in Obstetrics & Gynecology
                Nursing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Career 1 */}
              <div className="bg-white rounded-xl p-6 md:p-8 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBook className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Nursing Educator
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Teach and mentor nursing learners at colleges and universities, specializing in
                  maternal-child health nursing education.
                </p>
              </div>

              {/* Career 2 */}
              <div className="bg-white rounded-xl p-6 md:p-8 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Clinical Nurse Midwife
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Provide comprehensive midwifery services including prenatal care, delivery, and
                  postpartum support in healthcare settings.
                </p>
              </div>

              {/* Career 3 */}
              <div className="bg-white rounded-xl p-6 md:p-8 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBriefcase className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Labor Ward Manager
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lead and manage labor and delivery units, ensuring quality maternal care and
                  coordinating healthcare teams.
                </p>
              </div>

              {/* Career 4 */}
              <div className="bg-white rounded-xl p-6 md:p-8 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLightbulb className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Nurse Researcher
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Conduct research in maternal-child health to improve nursing practices and
                  contribute to evidence-based care.
                </p>
              </div>

              {/* Career 5 */}
              <div className="bg-white rounded-xl p-6 md:p-8 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPeopleCarry className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Women's Health Consultant
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Provide expert consultation on women's health issues including reproductive health
                  and gynecological concerns.
                </p>
              </div>

              {/* Career 6 */}
              <div className="bg-white rounded-xl p-6 md:p-8 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Ph.D. Scholar
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pursue doctoral studies and contribute to advanced maternal-child health
                  research and academia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* World-Class Facilities Section */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                World-Class Facilities
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                State-of-the-art infrastructure supporting comprehensive OBG nursing education
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Facility 1 */}
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-3">Midwifery Simulation Lab</h3>
                <p className="text-gray-200 leading-relaxed">
                Simulation Lab birthing simulators and obstetric manikins for realistic delivery practice.
                </p>
              </div>

              {/* Facility 2 */}
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-3">Maternal Skills Lab</h3>
                <p className="text-gray-100 leading-relaxed">
                  Dedicated space for practicing antenatal assessment, fetal monitoring, and maternal
                  care techniques.
                </p>
              </div>

              {/* Facility 3 */}
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-3">Digital Library</h3>
                <p className="text-gray-100 leading-relaxed">
                  Extensive collection of maternal-child health journals, e-books, and research databases.
                </p>
              </div>

              {/* Facility 4 */}
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-3">Research Center</h3>
                <p className="text-gray-200 leading-relaxed">
                  Dedicated facilities supporting maternal-child health research and dissertation work.
                </p>
              </div>

              {/* Facility 5 */}
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-3">Neonatal Care Lab</h3>
                <p className="text-gray-100 leading-relaxed">
                  Modern newborn care simulation equipment for neonatal resuscitation and NICU practices.
                </p>
              </div>

              {/* Facility 6 */}
              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-3">Conference Hall</h3>
                <p className="text-gray-100 leading-relaxed">
                  Well-equipped auditorium for seminars, workshops, and academic presentations on
                  maternal health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Process Section */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                Admission Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple steps to begin your journey towards advanced OBG nursing education
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Timeline */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 hidden md:block"></div>

                {/* Step 1 - Online Application */}
                <div className="relative mb-12 md:mb-16">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="md:w-1/2 md:text-right md:pr-12">
                      <div className="md:hidden mb-4">
                        <div className="w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xl font-bold">
                          1
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-[#006837] mb-3">
                        Online Application
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Submit your application online through our admission portal with required documents
                        and application fee.
                      </p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                        1
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </div>
                </div>

                {/* Step 2 - Document Verification */}
                <div className="relative mb-12 md:mb-16">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="md:w-1/2 md:pr-12 order-2 md:order-1"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                        2
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                      <div className="md:hidden mb-4">
                        <div className="w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xl font-bold">
                          2
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-[#006837] mb-3">
                        Document Verification
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our admission team verifies your academic credentials, nursing registration, and
                        experience certificates.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 - Entrance Examination */}
                <div className="relative mb-12 md:mb-16">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="md:w-1/2 md:text-right md:pr-12">
                      <div className="md:hidden mb-4">
                        <div className="w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xl font-bold">
                          3
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-[#006837] mb-3">
                        Entrance Examination
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Appear for the university entrance examination covering nursing
                        fundamentals and OBG specialization topics.
                      </p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                        3
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </div>
                </div>

                {/* Step 4 - Personal Interview */}
                <div className="relative mb-12 md:mb-16">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="md:w-1/2 md:pr-12 order-2 md:order-1"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                        4
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                      <div className="md:hidden mb-4">
                        <div className="w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xl font-bold">
                          4
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-[#006837] mb-3">
                        Personal Interview
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Shortlisted candidates attend a personal interview to assess aptitude and motivation
                        for maternal health specialization.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 5 - Merit List Publication */}
                <div className="relative mb-12 md:mb-16">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="md:w-1/2 md:text-right md:pr-12">
                      <div className="md:hidden mb-4">
                        <div className="w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xl font-bold">
                          5
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-[#006837] mb-3">
                        Merit List Publication
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Final merit list is published based on entrance examination score, academic
                        performance, and interview assessment.
                      </p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                        5
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </div>
                </div>

                {/* Step 6 - Fee Payment & Enrollment */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="md:w-1/2 md:pr-12 order-2 md:order-1"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                        6
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                      <div className="md:hidden mb-4">
                        <div className="w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xl font-bold">
                          6
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-[#006837] mb-3">
                        Fee Payment & Enrollment
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Selected candidates complete fee payment and enrollment formalities to confirm
                        admission.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fee Structure Section - Hidden for now */}
        {false && (<section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                Fee Structure
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transparent and affordable fee structure for quality nursing education
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Fee Table */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Table Header */}
                <div className="bg-[#006837] text-white grid grid-cols-3 gap-4 p-6">
                  <div className="font-bold text-lg">Fee Component</div>
                  <div className="font-bold text-lg text-center">First Year</div>
                  <div className="font-bold text-lg text-center">Second Year</div>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-gray-200">
                  <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors">
                    <div className="text-gray-700">Tuition Fee</div>
                    <div className="text-[#006837] font-semibold text-center">₹85,000</div>
                    <div className="text-[#006837] font-semibold text-center">₹85,000</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors">
                    <div className="text-gray-700">University Fee</div>
                    <div className="text-[#006837] font-semibold text-center">₹15,000</div>
                    <div className="text-[#006837] font-semibold text-center">₹15,000</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors">
                    <div className="text-gray-700">Laboratory & Library Fee</div>
                    <div className="text-[#006837] font-semibold text-center">₹10,000</div>
                    <div className="text-[#006837] font-semibold text-center">₹10,000</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors">
                    <div className="text-gray-700">Clinical Training Fee</div>
                    <div className="text-[#006837] font-semibold text-center">₹15,000</div>
                    <div className="text-[#006837] font-semibold text-center">₹15,000</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors">
                    <div className="text-gray-700">Development Fee</div>
                    <div className="text-[#006837] font-semibold text-center">₹5,000</div>
                    <div className="text-[#006837] font-semibold text-center">₹5,000</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-6 bg-gray-100">
                    <div className="text-gray-900 font-bold">Total Annual Fee</div>
                    <div className="text-[#006837] font-bold text-center">₹1,30,000</div>
                    <div className="text-[#006837] font-bold text-center">₹1,30,000</div>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="mt-8 bg-white border-l-4 border-[#7cb983] p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold text-gray-900">Note:</span> Fee structure is reviewed annually. Additional charges apply for hostel accommodation, examination fees, and other
                  miscellaneous expenses. Scholarships and educational loans are available for eligible learners. Contact the admission office for the latest fee details and
                  payment options.
                </p>
              </div>
            </div>
          </div>
        </section>)}

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find answers to common queries about our M.Sc OBG Nursing program
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {/* FAQ 1 */}
              <details className="bg-white rounded-xl overflow-hidden group border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#FBFBEE] transition-colors">
                  <h3 className="text-lg font-semibold text-[#006837] pr-4">
                    What is the duration of M.Sc Nursing in Obstetrics & Gynecology Nursing?
                  </h3>
                  <div className="w-8 h-8 bg-[#7cb983] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    M.Sc Nursing in Obstetrics & Gynecology Nursing is a 2-year full-time postgraduate program divided into 4
                    semesters. The first year focuses on core nursing subjects, research methodology, and foundational OBG
                    nursing courses including antenatal care and normal midwifery. The second year emphasizes advanced
                    clinical specialization in high-risk pregnancy, neonatal care, gynecological nursing, and dissertation/thesis
                    work.
                  </p>
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="bg-white rounded-xl overflow-hidden group border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#FBFBEE] transition-colors">
                  <h3 className="text-lg font-semibold text-[#006837] pr-4">
                    What are the eligibility criteria for M.Sc OBG Nursing admission?
                  </h3>
                  <div className="w-8 h-8 bg-[#7cb983] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Candidates must have completed B.Sc Nursing (4-year course) or Post Basic B.Sc Nursing with a minimum
                    of 55% aggregate marks from a recognized university. Additionally, applicants must possess valid
                    registration with the State Nursing Council as RN/RM and have at least 1 year of clinical work experience
                    after completing their basic nursing degree.
                  </p>
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="bg-white rounded-xl overflow-hidden group border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#FBFBEE] transition-colors">
                  <h3 className="text-lg font-semibold text-[#006837] pr-4">
                    What career opportunities are available after completing M.Sc OBG Nursing?
                  </h3>
                  <div className="w-8 h-8 bg-[#7cb983] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Graduates can pursue diverse careers including Nursing Educator/Lecturer specializing in maternal-child
                    health at nursing colleges, Clinical Nurse Midwife, Women's Health Consultant, Labor Ward Manager, NICU
                    Specialist, Research Associate in maternal health, Quality Assurance Officer in maternity services, and can
                    also pursue Ph.D. in Nursing for academic and research careers.
                  </p>
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="bg-white rounded-xl overflow-hidden group border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#FBFBEE] transition-colors">
                  <h3 className="text-lg font-semibold text-[#006837] pr-4">
                    Is the M.Sc OBG Nursing program at JKKN approved by INC?
                  </h3>
                  <div className="w-8 h-8 bg-[#7cb983] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Yes, the M.Sc Nursing program in Obstetrics & Gynecology at Sresakthimayeil Institute of Nursing and Research is approved by the
                    Indian Nursing Council (INC) and is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. The
                    college is also recognized by the Tamil Nadu Nurses and Midwives Council, ensuring that the degree is valid
                    for employment and higher education across India.
                  </p>
                </div>
              </details>

              {/* FAQ 5 */}
              <details className="bg-white rounded-xl overflow-hidden group border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#FBFBEE] transition-colors">
                  <h3 className="text-lg font-semibold text-[#006837] pr-4">
                    What specialization areas are covered in OBG Nursing?
                  </h3>
                  <div className="w-8 h-8 bg-[#7cb983] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    OBG Nursing specialization encompasses a wide range of maternal-child health areas including antenatal
                    care, intrapartum nursing, postnatal care, high-risk pregnancy management, neonatal nursing,
                    gynecological nursing, reproductive health, family planning services, infertility counseling, and women's
                    health promotion. Learners gain comprehensive expertise in managing maternal and newborn care across
                    various clinical settings.
                  </p>
                </div>
              </details>

              {/* FAQ 6 */}
              <details className="bg-white rounded-xl overflow-hidden group border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#FBFBEE] transition-colors">
                  <h3 className="text-lg font-semibold text-[#006837] pr-4">
                    What is the selection process for M.Sc OBG Nursing admission?
                  </h3>
                  <div className="w-8 h-8 bg-[#7cb983] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    The selection process involves multiple stages: submission of online application with required documents,
                    verification of academic credentials and professional registration, university entrance examination, and
                    personal interview for shortlisted candidates. The final merit list is prepared based on a weighted
                    combination of entrance examination score, academic performance in qualifying degree, and interview
                    assessment.
                  </p>
                </div>
              </details>

              {/* FAQ 7 */}
              <details className="bg-white rounded-xl overflow-hidden group border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#FBFBEE] transition-colors">
                  <h3 className="text-lg font-semibold text-[#006837] pr-4">
                    Are scholarships available for M.Sc OBG Nursing learners?
                  </h3>
                  <div className="w-8 h-8 bg-[#7cb983] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Yes, Sresakthimayeil Institute of Nursing and Research offers various scholarship opportunities for deserving learners based on
                    academic merit, financial need, and other criteria. Additionally, learners are eligible for government
                    scholarships, SC/ST scholarships, and educational loans from nationalized banks. Our admission office
                    provides guidance on available financial assistance options.
                  </p>
                </div>
              </details>

              {/* FAQ 8 */}
              <details className="bg-white rounded-xl overflow-hidden group border border-gray-200">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#FBFBEE] transition-colors">
                  <h3 className="text-lg font-semibold text-[#006837] pr-4">
                    What clinical exposure will learners receive during the program?
                  </h3>
                  <div className="w-8 h-8 bg-[#7cb983] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Learners receive over 1000 hours of supervised clinical practice in affiliated multispecialty hospitals. Clinical
                    rotations include labor and delivery suites, antenatal clinics, postnatal wards, neonatal intensive care units
                    (NICU), gynecology wards, high-risk pregnancy units, family planning clinics, and infertility centers. This
                    extensive clinical exposure ensures that graduates are well-prepared for advanced practice in maternal-child health nursing.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#7cb983] to-[#6ba872] text-white">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Begin Your Advanced OBG Nursing Journey
              </h2>
              <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto mb-8">
                Take the next step in your nursing career. Apply now for the 2025-26
                academic session and join our community of nursing professionals
                dedicated to excellence in maternal-child healthcare.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-white text-[#7cb983] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg flex items-center gap-2 transition-all shadow-lg">
                  Apply Online
                  <span>→</span>
                </a>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#7cb983] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all">
                  Download Brochure
                </button>
              </div>

          
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
