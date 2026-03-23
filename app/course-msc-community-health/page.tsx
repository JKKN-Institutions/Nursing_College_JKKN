"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Image from "next/image";
import { useState } from "react";
import {
  FaShieldAlt,
  FaClock,
  FaUniversity,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaBriefcase,
  FaBook,
  FaClipboardList,
  FaFileAlt,
  FaCheckCircle,
  FaBuilding,
  FaHome,
  FaGraduationCap,
  FaHeartbeat,
  FaSchool,
  FaFlask,
  FaLaptop,
  FaMicroscope,
  FaDesktop,
  FaUserMd,
  FaGlobe,
  FaHeart,
  FaChalkboardTeacher,
  FaHospital,
  FaChevronDown,
  FaChevronUp,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight
} from "react-icons/fa";

export default function MScCommunityHealthNursing() {
  const [activeTab, setActiveTab] = useState("firstYear");
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);

  return (
    <>
      <Header />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
          { name: "M.Sc Nursing", url: "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing" },
          { name: "Community Health Nursing", url: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-community-health" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "M.Sc Community Health Nursing",
              "description": "A 2-year postgraduate nursing specialization in Community Health Nursing, approved by the Indian Nursing Council (INC) and affiliated to Tamil Nadu Dr. MGR Medical University. Covers public health, epidemiology, primary healthcare, disease prevention, health promotion, and community-based nursing practice.",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "Sresakthimayeil Institute of Nursing and Research (Sresakthimayeil Institute of Nursing and Research)",
                "url": "https://nursing.sresakthimayeil.jkkn.ac.in/"
              },
              "timeRequired": "P2Y",
              "educationalCredentialAwarded": "M.Sc Nursing (Community Health Nursing)",
              "coursePrerequisites": "B.Sc Nursing or Post Basic B.Sc Nursing with minimum 55% marks and 1 year clinical experience",
              "availableLanguage": "English",
              "url": "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-community-health"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the scope of M.Sc Nursing in Community Health Nursing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "M.Sc Nursing in Community Health Nursing offers excellent career prospects in nursing education, public health administration, community health practice, research, and international organizations. Graduates can work as nursing educators in colleges, public health nurses in government departments, community health officers at PHCs/CHCs, program managers in NGOs, or research associates. The growing emphasis on primary healthcare and preventive medicine creates strong demand for community health nursing specialists both in India and abroad."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between Community Health Nursing and other M.Sc Nursing specializations?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Community Health Nursing focuses on population-level health, disease prevention, health promotion, and primary healthcare delivery in community settings such as PHCs, CHCs, schools, and workplaces. Unlike clinical specializations that focus on hospital-based patient care, Community Health Nursing emphasizes epidemiology, biostatistics, health education, national health programs, and community-based interventions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is work experience mandatory for M.Sc Nursing admission?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, as per Indian Nursing Council (INC) guidelines, candidates must have minimum 1 year of clinical work experience after completing B.Sc Nursing or Post Basic B.Sc Nursing. The experience can be in any healthcare setting including hospitals, community health centers, or other recognized healthcare facilities."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I pursue Ph.D. after M.Sc Community Health Nursing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. M.Sc Nursing in Community Health Nursing is an excellent foundation for pursuing Ph.D. in Nursing or related fields like Public Health, Epidemiology, or Health Policy. Many universities in India and abroad offer doctoral programs that value the research training and community health expertise gained during M.Sc Nursing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What kind of field exposure will learners receive during the program?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Learners receive over 1000 hours of supervised field practice in diverse community health settings. Field rotations include Primary Health Centers (PHCs), Community Health Centers (CHCs), urban health posts, rural community outreach programs, school health services, occupational health units, ICDS centers, and NGO-run health projects."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are there job opportunities in international organizations after M.Sc Community Health Nursing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, M.Sc Nursing in Community Health Nursing opens doors to positions in international organizations like World Health Organization (WHO), UNICEF, UNDP, and various international health NGOs. These organizations actively recruit public health nursing specialists for global health programs, disaster response teams, and health development initiatives."
                  }
                }
              ]
            }
          ])
        }}
      />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#006837] to-[#002309] text-white py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  M.Sc Nursing
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7cb983] mb-6">
                  Community Health Nursing
                </h2>

                <p className="text-sm text-cyan-200 mb-4">Last updated: March 19, 2026</p>

                <div className="bg-white/10 border-l-4 border-[#7cb983] p-4 mb-6 rounded-r-lg">
                  <p className="font-semibold text-[#7cb983] mb-1">Quick Summary</p>
                  <p className="text-cyan-100 text-sm">JKKN College of Nursing offers a 2-year M.Sc Nursing specialization in Community Health Nursing, approved by INC and affiliated to Tamil Nadu Dr. M.G.R. Medical University. Graduates lead public health initiatives, design epidemiological interventions, and deliver community-based primary healthcare across urban and rural settings in Tamil Nadu and beyond.</p>
                </div>

                <p className="text-lg md:text-xl text-cyan-100 mb-6">
                  Postgraduate Nursing Program | Public Health Specialization
                </p>

                <p className="text-base md:text-lg mb-8 leading-relaxed">
                  Transform communities through advanced public health nursing expertise. This INC-approved M.Sc Nursing program in Community Health Nursing prepares graduates to become leaders in primary healthcare, disease prevention, health promotion, and community-based nursing practice across urban and rural settings.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <FaShieldAlt className="text-cyan-300" />
                    <span className="font-semibold">INC Approved</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <FaShieldAlt className="text-cyan-300" />
                    <span className="font-semibold">NAAC Accredited</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <FaClock className="text-cyan-300" />
                    <span className="font-semibold">2 Years Full-Time</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <FaUniversity className="text-cyan-300" />
                    <span className="font-semibold">MGR University Affiliated</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg flex items-center gap-2">
                    Apply Now →
                  </a>
                  <button
                    onClick={() => {
                      document.getElementById('curriculum-structure')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-transparent border-2 border-white hover:bg-white hover:text-[#006837] text-white font-bold px-8 py-4 rounded-lg transition-all duration-300"
                  >
                    Explore Curriculum
                  </button>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="relative">
                  <div className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] h-[220px] sm:h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/Community-Health-Nursing-Hero-Banner-Image.webp"
                      alt="Community Health Nursing"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Placement Badge */}
                  <div className="absolute bottom-2 right-2 md:-bottom-6 md:-right-6 bg-[#7cb983] text-white px-4 py-3 md:px-8 md:py-6 rounded-xl md:rounded-2xl shadow-xl">
                    <div className="text-2xl md:text-4xl font-bold">100%</div>
                    <div className="text-xs md:text-sm font-medium">Placement Assistance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">19+</div>
                <div className="text-gray-700 font-medium">Years of Educational Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">1800+</div>
                <div className="text-gray-700 font-medium">Community Field Hours</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">5+</div>
                <div className="text-gray-700 font-medium">PHCs & CHCs Affiliated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">97%</div>
                <div className="text-gray-700 font-medium">Placement Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                Program Overview
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive postgraduate program preparing public health nursing leaders
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="bg-[#FBFBEE] rounded-lg p-8 shadow-md">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    M.Sc Nursing in Community Health Nursing at Sresakthimayeil Institute of Nursing and Research is a rigorous 2-year postgraduate program designed to develop advanced competencies in public health nursing, epidemiology, health education, and community-based healthcare delivery. This INC-approved program prepares Learners to become leaders in primary healthcare and public health management.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    The program combines theoretical foundations with extensive field practice across Primary Health Centers (PHCs), Community Health Centers (CHCs), urban health posts, school health programs, and industrial health settings. Learners gain expertise in implementing national health programs, conducting community health assessments, managing disease outbreaks, and promoting health at population levels.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our Learning Facilitators bring extensive experience in community health practice, research, and education. With affiliations to multiple PHCs, CHCs, and community health projects, Learners receive hands-on training in real-world community settings while contributing to meaningful public health interventions.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    The curriculum emphasizes evidence-based practice, health policy, biostatistics, and epidemiological methods. Learners engage in community health research projects and complete a dissertation contributing to the body of knowledge in community health nursing. The program prepares graduates for roles in nursing education, public health administration, community health practice, and research.
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-lg p-8 shadow-xl text-white sticky top-4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 border-b-2 border-[#7cb983] pb-4">
                    Quick Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <FaClock className="text-3xl text-cyan-300 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm text-cyan-300 mb-1">Duration</div>
                        <div className="text-lg font-bold">2 Years</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <FaUniversity className="text-3xl text-cyan-300 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm text-cyan-300 mb-1">Affiliation</div>
                        <div className="text-lg font-bold">Tamil Nadu Dr. M.G.R. Medical University</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <FaShieldAlt className="text-3xl text-cyan-300 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm text-cyan-300 mb-1">Approval</div>
                        <div className="text-lg font-bold">Indian Nursing Council (INC)</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <FaShieldAlt className="text-3xl text-cyan-300 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm text-cyan-300 mb-1">Recognized</div>
                        <div className="text-lg font-bold">TNNMC</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <FaUsers className="text-3xl text-cyan-300 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm text-cyan-300 mb-1">Seats</div>
                        <div className="text-lg font-bold">5 Seats</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <FaClipboardList className="text-3xl text-cyan-300 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm text-cyan-300 mb-1">Intake</div>
                        <div className="text-lg font-bold">October - September</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Highlights Section */}
        <section className="py-16 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                Program Highlights
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                What makes our Community Health Nursing program exceptional
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <FaUsers className="text-3xl text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                  Extensive Community Exposure
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Over 1000 hours of supervised field practice across PHCs, CHCs, urban health posts, rural communities, and specialty health programs.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <FaChartLine className="text-3xl text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                  Epidemiology & Biostatistics
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Strong foundation in epidemiological methods, biostatistics, and evidence-based public health decision-making skills.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <FaLightbulb className="text-3xl text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                  Research Excellence
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Opportunities to conduct community-based research contributing to public health knowledge and policy development.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-[#006837] to-[#002309] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <FaShieldAlt className="text-3xl text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                  National Health Programs
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Hands-on training in implementing national health programs including immunization, maternal-child health, and disease control.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-[#006837] to-[#002309] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <FaBriefcase className="text-3xl text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                  Career Placement Support
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Benefit from dedicated placement cell support with connections to government health departments, NGOs, and international organizations.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-[#006837] to-[#002309] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <FaBook className="text-3xl text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                  Comprehensive Resources
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Access well-stocked library with public health journals, epidemiology resources, e-books, e-library (koha software and delnet software), and digital learning platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria Section */}
        <section className="py-16 bg-gradient-to-r from-[#006837] to-[#002309] text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Eligibility Criteria
              </h2>
              <div className="w-24 h-1 bg-[#ff5722] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto">
                Requirements for admission to M.Sc Nursing in Community Health Nursing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Academic Requirements */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <FaBook className="text-4xl text-[#7cb983]" />
                  <h3 className="text-2xl md:text-3xl font-bold text-[#7cb983]">
                    Academic Requirements
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-2xl text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg">
                      B.Sc Nursing (4-year course) with minimum 55% aggregate marks from a recognized university
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-2xl text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg">
                      Post Basic B.Sc Nursing with minimum 55% aggregate marks from a recognized university
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-2xl text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg">
                    Candidates with B.Sc Nursing and P.B.B.Sc. Nursing (if applicable) are also eligible
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Requirements */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <FaShieldAlt className="text-4xl text-[#7cb983]" />
                  <h3 className="text-2xl md:text-3xl font-bold text-[#7cb983]">
                    Professional Requirements
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-2xl text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg">
                      Valid registration with State Nursing Registration Council as Registered Nurse (RN) and Registered Midwife (RM)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-2xl text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg">
                      Minimum 1 year of clinical work experience after B.Sc Nursing or Post Basic B.Sc Nursing
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-2xl text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg">
                      Medically fit as certified by a registered medical practitioner
                    </p>
                  </div>
                </div>
              </div>

              {/* Selection Process */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <FaClipboardList className="text-4xl text-[#7cb983]" />
                  <h3 className="text-2xl md:text-3xl font-bold text-[#7cb983]">
                    Selection Process
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-2xl text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg">
                      Entrance examination conducted by the university or institution
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-2xl text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg">
                      Merit-based selection considering academic performance and entrance test score
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-2xl text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg">
                      Personal interview for shortlisted candidates
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-2xl text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg">
                    An eligibility certificate from the university is required for studying M.SC nursing
                    </p>
                  </div>
                </div>
              </div>

              {/* Documents Required */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <FaFileAlt className="text-4xl text-[#7cb983]" />
                  <h3 className="text-2xl md:text-3xl font-bold text-[#7cb983]">
                    Documents Required
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-2xl text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg">
                      B.Sc Nursing or Post Basic B.Sc Nursing degree certificate and mark sheets
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-2xl text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg">
                      Nursing registration certificate (RN/RM)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-2xl text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg">
                      Experience certificate from employer, transfer certificate, and recent passport-size photographs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Structure Section */}
        <section id="curriculum-structure" className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                Curriculum Structure
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive 4-semester curriculum designed as per INC guidelines for advanced community health nursing education
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab("firstYear")}
                className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                  activeTab === "firstYear"
                    ? "bg-[#7cb983] text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                First Year
              </button>
              <button
                onClick={() => setActiveTab("secondYear")}
                className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                  activeTab === "secondYear"
                    ? "bg-[#7cb983] text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Second Year
              </button>
              <button
                onClick={() => setActiveTab("fieldPracticum")}
                className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                  activeTab === "fieldPracticum"
                    ? "bg-[#7cb983] text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Field Practicum
              </button>
            </div>

            {/* Tab Content */}
            <div className="grid md:grid-cols-2 gap-8">
              {activeTab === "firstYear" && (
                <>
                  <div className="bg-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983] shadow-md">
                    <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                      Nursing Education
                    </h3>
                    <div className="flex items-center gap-4 text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaBook className="text-green-600" />
                        <span>Theory: 150 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaFlask className="text-orange-600" />
                        <span>Practicum: 150 hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983] shadow-md">
                    <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                      Advanced Nursing Practice
                    </h3>
                    <div className="flex items-center gap-4 text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaBook className="text-green-600" />
                        <span>Theory: 150 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaFlask className="text-orange-600" />
                        <span>Practicum: 250 hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983] shadow-md">
                    <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                      Nursing Research and Statistics
                    </h3>
                    <div className="flex items-center gap-4 text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaBook className="text-green-600" />
                        <span>Theory: 150 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaFlask className="text-orange-600" />
                        <span>Practicum: 150 hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983] shadow-md">
                    <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                      Clinical Specialty – I (Community Health Nursing)
                    </h3>
                    <div className="flex items-center gap-4 text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaBook className="text-green-600" />
                        <span>Theory: 150 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaBuilding className="text-purple-600" />
                        <span>Field Practice: 250 hours</span>
                      </div>
                    </div>
                  </div>

               
                </>
              )}

              {activeTab === "secondYear" && (
                <>
                  <div className="bg-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983] shadow-md">
                    <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                      Clinical Specialty – II (Advanced Community Health Nursing)
                    </h3>
                    <div className="flex items-center gap-4 text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaBook className="text-green-600" />
                        <span>Theory: 150 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaBuilding className="text-purple-600" />
                        <span>Field Practice: 1050 hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983] shadow-md">
                    <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                      Dissertation / Thesis
                    </h3>
                    <div className="flex items-center gap-4 text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaMicroscope className="text-blue-600" />
                        <span>Research Work: 400 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaGraduationCap className="text-purple-600" />
                        <span>Viva Voce</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983] shadow-md">
                    <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                      Nursing Management
                    </h3>
                    <div className="flex items-center gap-4 text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaBook className="text-green-600" />
                        <span>Theory: 150 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaBuilding className="text-purple-600" />
                        <span>Field Practice: 150 hours</span>
                      </div>
                    </div>
                  </div>

               
                </>
              )}

              {activeTab === "fieldPracticum" && (
                <>
                  <div className="bg-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983] shadow-md">
                    <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                      Primary Health Center (PHC) Rotation
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaBuilding className="text-purple-600" />
                        <span>Rural PHC, Sub-centers, Outreach services</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-blue-600" />
                        <span>360 hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983] shadow-md">
                    <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                      Community Health Center (CHC) Rotation
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaBuilding className="text-purple-600" />
                        <span>CHC services, Referral management</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-blue-600" />
                        <span>300 hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983] shadow-md">
                    <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                      Urban Health Training Center
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaBuilding className="text-purple-600" />
                        <span>Urban slums, ICDS centers, Anganwadis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-blue-600" />
                        <span>240 hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983] shadow-md">
                    <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                      School Health Program
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaBuilding className="text-purple-600" />
                        <span>Health screening, Health education, Nutrition</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-blue-600" />
                        <span>180 hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983] shadow-md">
                    <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                      Occupational Health Settings
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaBuilding className="text-purple-600" />
                        <span>Industrial health units, Employee wellness</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-blue-600" />
                        <span>120 hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FBFBEE] rounded-xl p-8 border-l-4 border-[#7cb983] shadow-md">
                    <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                      NGO/Government Health Projects
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex items-center gap-2">
                        <FaBuilding className="text-purple-600" />
                        <span>Special health programs, Outreach projects</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-blue-600" />
                        <span>180 hours</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Community Field Training Excellence Section */}
        <section className="py-16 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                Community Field Training Excellence
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Hands-on experience in diverse community health settings with expert supervision
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[400px]">
                <Image
                  src="/images/Community-Health-Nursing-Field-Training.webp"
                  alt="Community Health Field Training"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#006837] mb-6">
                  Specialized Community Health Areas
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Our Learners receive comprehensive field exposure across various community health settings, developing expertise in public health practice, health promotion, and disease prevention under the guidance of experienced community health mentors.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#7cb983]/20 p-3 rounded-lg flex-shrink-0">
                      <FaBuilding className="text-2xl text-[#006837]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#006837]">Primary Health Centers</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#7cb983]/20 p-3 rounded-lg flex-shrink-0">
                      <FaUsers className="text-2xl text-[#006837]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#006837]">Rural Community Outreach</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#7cb983]/20 p-3 rounded-lg flex-shrink-0">
                      <FaHome className="text-2xl text-[#006837]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#006837]">Urban Health Posts</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#7cb983]/20 p-3 rounded-lg flex-shrink-0">
                      <FaHeartbeat className="text-2xl text-[#006837]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#006837]">Maternal-Child Health Programs</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#7cb983]/20 p-3 rounded-lg flex-shrink-0">
                      <FaSchool className="text-2xl text-[#006837]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#006837]">School Health Services</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#7cb983]/20 p-3 rounded-lg flex-shrink-0">
                      <FaShieldAlt className="text-2xl text-[#006837]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#006837]">Immunization Programs</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#7cb983]/20 p-3 rounded-lg flex-shrink-0">
                      <FaBriefcase className="text-2xl text-[#006837]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#006837]">Occupational Health Centers</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#7cb983]/20 p-3 rounded-lg flex-shrink-0">
                      <FaHeart className="text-2xl text-[#006837]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#006837]">Geriatric Community Care</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                Career Opportunities
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Diverse career pathways await graduates of M.Sc Nursing in Community Health Nursing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-[#FBFBEE] to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-[#7cb983]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaBook className="text-4xl text-[#006837]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                  Nursing Educator
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Teach and mentor nursing Learners at colleges and universities in community health nursing.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#FBFBEE] to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-[#7cb983]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaUserMd className="text-4xl text-[#006837]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                  Public Health Nurse
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lead community health programs and implement public health interventions at population level.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#FBFBEE] to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-[#7cb983]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaBriefcase className="text-4xl text-[#006837]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                  Community Health Officer
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Manage PHCs, CHCs and coordinate healthcare delivery at community health settings.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#FBFBEE] to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-[#7cb983]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaLightbulb className="text-4xl text-[#006837]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                  Nurse Researcher
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Conduct epidemiological research and contribute to evidence-based public health practice.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#FBFBEE] to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-[#7cb983]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaGlobe className="text-4xl text-[#006837]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                  WHO/UNICEF/NGO Officer
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Work with international organizations on global health initiatives and development programs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#FBFBEE] to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-[#7cb983]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaGraduationCap className="text-4xl text-[#006837]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                  Ph.D. Scholar
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pursue doctoral studies and contribute to advanced public health nursing research and academia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* World-Class Facilities Section */}
        <section className="py-16 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                World-Class Facilities
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                State-of-the-art infrastructure supporting comprehensive community health nursing education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-8 shadow-xl text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Community Health Laboratory</h3>
                <p className="text-green-100 leading-relaxed">
                  Fully equipped laboratory for practicing community health assessment and nursing procedures.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-xl p-8 shadow-xl text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Simulation Center</h3>
                <p className="text-green-100 leading-relaxed">
                  Advanced simulation equipment for practicing home visits, health education, and community interventions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-xl p-8 shadow-xl text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Digital Library</h3>
                <p className="text-green-100 leading-relaxed">
                  Extensive collection of epidemiology journals, public health e-books, and research databases.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-8 shadow-xl text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Research Center</h3>
                <p className="text-green-100 leading-relaxed">
                  Dedicated facilities supporting community-based research and dissertation work.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-xl p-8 shadow-xl text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Computer Laboratory</h3>
                <p className="text-green-100 leading-relaxed">
                  Modern computer facilities with epidemiological software, GIS tools, and e-learning resources.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#7cb983] to-[#6ba872] rounded-xl p-8 shadow-xl text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Conference Hall</h3>
                <p className="text-green-100 leading-relaxed">
                  Well-equipped auditorium for seminars, workshops, and academic presentations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Process Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                Admission Process
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Simple and transparent steps to join our M.Sc Community Health Nursing program
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

                {/* Step 1 */}
                <div className="mb-12 md:mb-16 relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 mt-12 md:mt-0">
                      <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                          Online Application
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Fill the online application form with personal details, academic information, and professional experience. Upload required documents including degree certificates and nursing registration.
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-16 h-16 bg-[#7cb983] text-white rounded-full font-bold text-2xl shadow-lg z-10">
                      1
                    </div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="mb-12 md:mb-16 relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 order-2 md:order-1"></div>
                    <div className="absolute left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-16 h-16 bg-[#7cb983] text-white rounded-full font-bold text-2xl shadow-lg z-10 order-1 md:order-2">
                      2
                    </div>
                    <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 mt-12 md:mt-0 order-3">
                      <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                          Document Verification
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Submit original documents for verification including B.Sc Nursing degree, mark sheets, nursing registration certificate, and experience certificate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="mb-12 md:mb-16 relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 mt-12 md:mt-0">
                      <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                          Entrance Examination
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Appear for the university entrance examination testing knowledge in nursing fundamentals, community health, and aptitude for postgraduate studies.
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-16 h-16 bg-[#7cb983] text-white rounded-full font-bold text-2xl shadow-lg z-10">
                      3
                    </div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="mb-12 md:mb-16 relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 order-2 md:order-1"></div>
                    <div className="absolute left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-16 h-16 bg-[#7cb983] text-white rounded-full font-bold text-2xl shadow-lg z-10 order-1 md:order-2">
                      4
                    </div>
                    <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 mt-12 md:mt-0 order-3">
                      <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                          Personal Interview
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Shortlisted candidates attend a personal interview to assess communication skills, motivation, and suitability for the community health nursing program.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="mb-12 md:mb-16 relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 mt-12 md:mt-0">
                      <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                          Merit List & Counselling
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Selection based on combined merit of academic performance, entrance test score, and interview. Attend counselling session for seat allotment.
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-16 h-16 bg-[#7cb983] text-white rounded-full font-bold text-2xl shadow-lg z-10">
                      5
                    </div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 order-2 md:order-1"></div>
                    <div className="absolute left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-16 h-16 bg-[#7cb983] text-white rounded-full font-bold text-2xl shadow-lg z-10 order-1 md:order-2">
                      6
                    </div>
                    <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 mt-12 md:mt-0 order-3">
                      <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-[#006837] mb-4">
                          Fee Payment & Enrollment
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Pay the prescribed fees and complete enrollment formalities. Collect ID card and begin orientation program to start your postgraduate journey.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fee Structure Section - Hidden for now */}
        {false && (<section className="py-16 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                Fee Structure
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Transparent fee details for M.Sc Nursing in Community Health Nursing
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#006837] text-white">
                        <th className="px-6 py-4 text-left text-lg font-bold">Fee Component</th>
                        <th className="px-6 py-4 text-center text-lg font-bold">First Year</th>
                        <th className="px-6 py-4 text-center text-lg font-bold">Second Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                        <td className="px-6 py-4 text-gray-700">Tuition Fee</td>
                        <td className="px-6 py-4 text-center font-semibold text-[#006837]">₹1,00,000</td>
                        <td className="px-6 py-4 text-center font-semibold text-[#006837]">₹1,00,000</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                        <td className="px-6 py-4 text-gray-700">Laboratory & Field Practice Fee</td>
                        <td className="px-6 py-4 text-center font-semibold text-[#006837]">₹15,000</td>
                        <td className="px-6 py-4 text-center font-semibold text-[#006837]">₹15,000</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                        <td className="px-6 py-4 text-gray-700">Library & Digital Resources</td>
                        <td className="px-6 py-4 text-center font-semibold text-[#006837]">₹8,000</td>
                        <td className="px-6 py-4 text-center font-semibold text-[#006837]">₹8,000</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-[#FBFBEE] bg-[#FBFBEE]">
                        <td className="px-6 py-4 text-gray-700">University & Examination Fee</td>
                        <td className="px-6 py-4 text-center font-semibold text-[#006837]">₹12,000</td>
                        <td className="px-6 py-4 text-center font-semibold text-[#006837]">₹12,000</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-[#FBFBEE]">
                        <td className="px-6 py-4 text-gray-700">Community Field Travel & Insurance</td>
                        <td className="px-6 py-4 text-center font-semibold text-[#006837]">₹10,000</td>
                        <td className="px-6 py-4 text-center font-semibold text-[#006837]">₹10,000</td>
                      </tr>
                      <tr className="bg-[#006837] text-white font-bold">
                        <td className="px-6 py-4 text-lg">Total Annual Fee</td>
                        <td className="px-6 py-4 text-center text-lg">₹1,45,000</td>
                        <td className="px-6 py-4 text-center text-lg">₹1,45,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 bg-[#7cb983]/10 border-l-4 border-[#7cb983] p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold text-[#006837]">Note:</span> Fee structure is reviewed annually as per university and regulatory guidelines. Hostel and mess charges are additional. Scholarships and financial assistance available for eligible candidates. Contact admission office for detailed fee breakup and payment options.
                </p>
              </div>
            </div>
          </div>
        </section>)}

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about M.Sc Nursing in Community Health Nursing
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {/* FAQ 1 */}
              <div className="bg-[#FBFBEE] rounded-lg overflow-hidden shadow-md">
                <button
                  onClick={() => setActiveFAQ(activeFAQ === 0 ? null : 0)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#7cb983]/10 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] pr-4">
                    What is the scope of M.Sc Nursing in Community Health Nursing?
                  </h3>
                  {activeFAQ === 0 ? (
                    <FaChevronUp className="text-2xl text-[#7cb983] flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-2xl text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {activeFAQ === 0 && (
                  <div className="px-6 py-5 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      M.Sc Nursing in Community Health Nursing offers excellent career prospects in nursing education, public health administration, community health practice, research, and international organizations. Graduates can work as nursing educators in colleges, public health nurses in government departments, community health officers at PHCs/CHCs, program managers in NGOs, or research associates. The growing emphasis on primary healthcare and preventive medicine creates strong demand for community health nursing specialists both in India and abroad.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="bg-[#FBFBEE] rounded-lg overflow-hidden shadow-md">
                <button
                  onClick={() => setActiveFAQ(activeFAQ === 1 ? null : 1)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#7cb983]/10 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] pr-4">
                    What is the difference between Community Health Nursing and other M.Sc Nursing specializations?
                  </h3>
                  {activeFAQ === 1 ? (
                    <FaChevronUp className="text-2xl text-[#7cb983] flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-2xl text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {activeFAQ === 1 && (
                  <div className="px-6 py-5 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      Community Health Nursing focuses on population-level health, disease prevention, health promotion, and primary healthcare delivery in community settings such as PHCs, CHCs, schools, and workplaces. Unlike clinical specializations that focus on hospital-based patient care, Community Health Nursing emphasizes epidemiology, biostatistics, health education, national health programs, and community-based interventions. This specialization prepares nurses to address public health challenges at the community and population level rather than individual patient care in clinical settings.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-[#FBFBEE] rounded-lg overflow-hidden shadow-md">
                <button
                  onClick={() => setActiveFAQ(activeFAQ === 2 ? null : 2)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#7cb983]/10 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] pr-4">
                    Is work experience mandatory for M.Sc Nursing admission?
                  </h3>
                  {activeFAQ === 2 ? (
                    <FaChevronUp className="text-2xl text-[#7cb983] flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-2xl text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {activeFAQ === 2 && (
                  <div className="px-6 py-5 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      Yes, as per Indian Nursing Council (INC) guidelines, candidates must have minimum 1 year of clinical work experience after completing B.Sc Nursing or Post Basic B.Sc Nursing. The experience can be in any healthcare setting including hospitals, community health centers, or other recognized healthcare facilities. This requirement ensures that candidates have practical nursing experience before pursuing advanced studies in community health nursing.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="bg-[#FBFBEE] rounded-lg overflow-hidden shadow-md">
                <button
                  onClick={() => setActiveFAQ(activeFAQ === 3 ? null : 3)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#7cb983]/10 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] pr-4">
                    Can I pursue Ph.D. after M.Sc Community Health Nursing?
                  </h3>
                  {activeFAQ === 3 ? (
                    <FaChevronUp className="text-2xl text-[#7cb983] flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-2xl text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {activeFAQ === 3 && (
                  <div className="px-6 py-5 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      Absolutely. M.Sc Nursing in Community Health Nursing is an excellent foundation for pursuing Ph.D. in Nursing or related fields like Public Health, Epidemiology, or Health Policy. Many universities in India and abroad offer doctoral programs that value the research training and community health expertise gained during M.Sc Nursing. The dissertation work and research methodology training in the program prepares graduates well for doctoral research.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-[#FBFBEE] rounded-lg overflow-hidden shadow-md">
                <button
                  onClick={() => setActiveFAQ(activeFAQ === 4 ? null : 4)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#7cb983]/10 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] pr-4">
                    What kind of field exposure will Learners receive during the program?
                  </h3>
                  {activeFAQ === 4 ? (
                    <FaChevronUp className="text-2xl text-[#7cb983] flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-2xl text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {activeFAQ === 4 && (
                  <div className="px-6 py-5 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      Learners receive over 1000 hours of supervised field practice in diverse community health settings. Field rotations include Primary Health Centers (PHCs), Community Health Centers (CHCs), urban health posts, rural community outreach programs, school health services, occupational health units, ICDS centers, and NGO-run health projects. This extensive field exposure ensures that graduates are well-prepared for advanced community health nursing practice across urban and rural settings.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className="bg-[#FBFBEE] rounded-lg overflow-hidden shadow-md">
                <button
                  onClick={() => setActiveFAQ(activeFAQ === 5 ? null : 5)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#7cb983]/10 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] pr-4">
                    Are there job opportunities in international organizations after this program?
                  </h3>
                  {activeFAQ === 5 ? (
                    <FaChevronUp className="text-2xl text-[#7cb983] flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-2xl text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {activeFAQ === 5 && (
                  <div className="px-6 py-5 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      Yes, M.Sc Nursing in Community Health Nursing opens doors to positions in international organizations like World Health Organization (WHO), UNICEF, UNDP, and various international health NGOs. These organizations actively recruit public health nursing specialists for their global health programs, disaster response teams, and health development initiatives. The program's focus on epidemiology, health policy, and community health management aligns well with the requirements of international public health roles.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#7cb983] to-[#6ba872]">
          <div className="container-custom">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Begin Your Public Health Nursing Journey
              </h2>
              <p className="text-lg md:text-xl mb-4 leading-relaxed max-w-3xl mx-auto">
                Take the next step in your nursing career. Apply now for the 2025-26 academic session and join our community of nursing professionals dedicated to transforming community health.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12 mt-8">
                <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-white text-[#006837] hover:bg-[#FBFBEE] font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 text-lg">
                  Apply Online <FaArrowRight />
                </a>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#006837] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg">
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
