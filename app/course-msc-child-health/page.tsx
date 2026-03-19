"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Image from "next/image";
import Link from "next/link";

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-semibold text-[#006837] pr-4">{question}</span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#7cb983] flex items-center justify-center transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function MScChildHealthNursing() {
  const [activeTab, setActiveTab] = useState("year1");

  return (
    <>
      <Header />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
          { name: "M.Sc Nursing", url: "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing" },
          { name: "Child Health Nursing", url: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-child-health" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "M.Sc Child Health (Paediatric) Nursing",
              "description": "A 2-year postgraduate nursing specialization in Child Health (Paediatric) Nursing, approved by the Indian Nursing Council (INC) and affiliated to Tamil Nadu Dr. MGR Medical University. Covers NICU, PICU, pediatric emergency, pediatric specialty units, and community child health nursing.",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "Sresakthimayeil Institute of Nursing and Research (Sresakthimayeil Institute of Nursing and Research)",
                "url": "https://nursing.sresakthimayeil.jkkn.ac.in/"
              },
              "timeRequired": "P2Y",
              "educationalCredentialAwarded": "M.Sc Nursing (Child Health Nursing)",
              "coursePrerequisites": "B.Sc Nursing or Post Basic B.Sc Nursing with minimum 55% marks and 1 year clinical experience",
              "availableLanguage": "English",
              "url": "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-child-health"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the duration of M.Sc Nursing in Child Health Nursing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "M.Sc Nursing in Child Health Nursing is a 2-year full-time postgraduate program divided into 4 semesters. The first year focuses on core nursing subjects, child growth and development, pediatric foundations, and research methodology. The second year emphasizes advanced neonatal and pediatric clinical specialization, teaching practicum, and dissertation/thesis work in pediatric nursing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the eligibility criteria for M.Sc Nursing in Child Health Nursing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Candidates must have completed B.Sc Nursing (4-year course) or Post Basic B.Sc Nursing with a minimum of 55% aggregate marks from a recognized university. Additionally, applicants must possess valid registration with the State Nursing Council as RN/RM and have at least 1 year of clinical work experience after completing their basic nursing degree. Experience in pediatric settings is preferred but not mandatory."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What career opportunities are available after completing M.Sc in Child Health Nursing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Graduates can pursue diverse careers including Pediatric Nursing Educator/Lecturer at nursing colleges, Pediatric Clinical Nurse Specialist in children's hospitals, NICU/PICU In-charge, Child Health Program Manager, Pediatric Nursing Research Associate, Nurse Administrator in pediatric healthcare settings, and can pursue Ph.D. in Nursing for academic and research careers in child health."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is the M.Sc Nursing program at JKKN approved by INC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the M.Sc Nursing program at Sresakthimayeil Institute of Nursing and Research is approved by the Indian Nursing Council (INC) and is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. The college is also recognized by the Tamil Nadu Nurses and Midwives Council, ensuring that the degree is valid for employment and higher education across India and recognized internationally."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What clinical areas are covered in Child Health Nursing specialization?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Child Health Nursing specialization encompasses Neonatal Intensive Care (NICU), Pediatric Intensive Care (PICU), pediatric emergency nursing, pediatric cardiology, pediatric neurology, pediatric oncology, pediatric surgery, developmental pediatrics, and community child health nursing. Learners gain comprehensive expertise in caring for neonates, infants, children, and adolescents across multiple clinical settings."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What clinical exposure will learners receive during the Child Health Nursing program?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Learners receive over 1000 hours of supervised clinical practice in affiliated hospitals with pediatric specialties. Clinical rotations include Neonatal ICU (NICU), Pediatric ICU (PICU), pediatric emergency departments, pediatric medical and surgical wards, pediatric specialty units (cardiology, oncology, neurology), and community child health centers."
                  }
                }
              ]
            }
          ])
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#006837] to-[#7cb983] text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-12 md:mt-16">
                M.Sc Nursing - <span className="text-[#7cb983]">Child Health Nursing</span>
              </h1>

              <p className="text-sm text-gray-300 mb-4">Last updated: March 19, 2026</p>

              <div className="bg-white/10 border-l-4 border-[#7cb983] p-4 mb-6 rounded-r-lg">
                <p className="font-semibold text-[#7cb983] mb-1">Quick Summary</p>
                <p className="text-gray-200 text-sm">JKKN College of Nursing offers a 2-year M.Sc Nursing specialization in Child Health (Pediatric Nursing), approved by INC and affiliated to Tamil Nadu Dr. M.G.R. Medical University. Advanced training in pediatric care, neonatal nursing, and child development at the 500+ bed teaching hospital.</p>
              </div>

              <p className="text-xl md:text-2xl text-[#a8d5b0] mb-6">
                Specialized Pediatric & Neonatal Nursing Excellence
              </p>
              <p className="text-base md:text-lg mb-8 leading-relaxed">
                Shape the future of pediatric healthcare with advanced clinical competencies in neonatal and child health nursing. Our comprehensive 2-year postgraduate program prepares you to become a leader in pediatric nursing education, NICU/PICU care, and child health research.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">INC Approved</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">NAAC Accredited</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">2 Years Full-Time</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  <span className="text-sm font-medium">TNMGRMU Affiliated</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                  className="inline-flex items-center gap-2 bg-[#7cb983] hover:bg-[#6ba872] text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
                >
                  Apply Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <button
                  onClick={() => {
                    document.getElementById('curriculum-structure')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-[#006837] text-white px-8 py-3 rounded-full font-semibold transition-all"
                >
                  Explore Curriculum
                </button>
              </div>
            </div>

            {/* Right Content - Video/Image */}
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Child-Health-Nursing-Hero-Banner-image.webp"
                  alt="Child Health Nursing Training"
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
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">19+</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">5</div>
              <div className="text-gray-600 font-medium">Seats Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">1:5</div>
              <div className="text-gray-600 font-medium">Facilitator-Learner Ratio</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">1800+</div>
              <div className="text-gray-600 font-medium">Clinical Training Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
              Program Overview
            </h2>
            <div className="w-20 h-1 bg-[#7cb983] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A specialized postgraduate nursing education focused on comprehensive child health and pediatric nursing care
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                The Master of Science in Nursing with specialization in Child Health Nursing (Pediatric Nursing) at Sresakthimayeil Institute of Nursing and Research is a two-year, full-time postgraduate program designed to prepare registered nurses for advanced roles in pediatric clinical practice, nursing education, research, and administration.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This program provides comprehensive knowledge of child growth and development, pediatric pathophysiology, neonatal nursing, advanced pediatric assessment skills, and evidence-based pediatric nursing practice. Learners develop expertise in caring for neonates, infants, children, and adolescents across various clinical settings including NICUs, PICUs, pediatric wards, and community health centers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our curriculum emphasizes family-centered care, developmental care principles, and child advocacy. Through integration of theoretical instruction, simulation-based learning, and extensive clinical rotations in pediatric specialty units, learners develop the competencies required to become pediatric nurse educators, clinical specialists, and healthcare leaders.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The program aligns with Indian Nursing Council (INC) guidelines and is continuously updated to reflect current best practices in pediatric nursing education and child healthcare delivery. Graduates are well-prepared for careers in nursing colleges, children's hospitals, research institutions, and pediatric healthcare organizations.
              </p>
            </div>

            {/* Quick Information Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                <h3 className="text-2xl font-bold text-[#006837] mb-6">Quick Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FBFBEE] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#006837]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Duration</div>
                      <div className="font-semibold text-[#002309]">2 Years</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FBFBEE] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#006837]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Affiliation</div>
                      <div className="font-semibold text-[#002309]">The Tamil Nadu Dr. M.G.R. Medical University</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FBFBEE] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#006837]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Approval</div>
                      <div className="font-semibold text-[#002309]">Indian Nursing Council (INC)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FBFBEE] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#006837]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Recognized</div>
                      <div className="font-semibold text-[#002309]">TNNMC</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FBFBEE] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Intake</div>
                      <div className="font-semibold text-[#002309]">5 Seats per Year</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FBFBEE] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#7cb983]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Academic Session</div>
                      <div className="font-semibold text-[#002309]">October - September</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Program Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
              Why Choose This Program?
            </h2>
            <div className="w-20 h-1 bg-[#7cb983] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover the unique advantages that set our M.Sc Nursing in Child Health Nursing program apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#006837] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#006837] mb-3">Specialized Pediatric Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Develop expertise in neonatal and pediatric nursing with specialized training in NICU, PICU, and pediatric emergency care.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#006837] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#006837] mb-3">Advanced Simulation Labs</h3>
              <p className="text-gray-600 leading-relaxed">
                Practice pediatric clinical skills using infant and child manikins in our state-of-the-art neonatal simulation center.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#006837] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#006837] mb-3">Expert Learning Facilitators</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn from experienced pediatric nurse educators and clinical specialists with extensive neonatal and child health nursing backgrounds.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#006837] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#006837] mb-3">Clinical Partnerships</h3>
              <p className="text-gray-600 leading-relaxed">
                Access clinical rotations at affiliated children's hospitals with dedicated NICU, PICU, and pediatric specialty units.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#006837] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#006837] mb-3">Career Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated placement assistance with connections to children's hospitals, nursing colleges, and pediatric healthcare organizations.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7cb983] to-[#006837] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#006837] mb-3">Research Opportunities</h3>
              <p className="text-gray-600 leading-relaxed">
                Engage in pediatric nursing research with faculty guidance and access to contemporary child health journals and databases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-16 bg-gradient-to-br from-[#006837] to-[#7cb983] text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Eligibility Criteria</h2>
            <p className="text-[#a8d5b0] max-w-3xl mx-auto">
              Requirements for admission to M.Sc Nursing in Child Health Nursing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Academic Requirements */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#7cb983] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#7cb983]">Academic Requirements</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>B.Sc Nursing (4-year course) with minimum 55% aggregate marks from a recognized university</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Post Basic B.Sc Nursing with minimum 55% aggregate marks from a recognized university</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Candidates with B.Sc Nursing and P.B.B.Sc. Nursing (if applicable) are also eligible</span>
                </li>
              </ul>
            </div>

            {/* Professional Requirements */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#7cb983] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#7cb983]">Professional Requirements</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Valid registration with State Nursing Registration Council as Registered Nurse (RN) and Registered Midwife (RM)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Minimum 1 year of clinical work experience or Teacher experience at college after B.Sc or Post Basic B.Sc Nursing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Medically fit as certified by a registered medical practitioner</span>
                </li>
              </ul>
            </div>

            {/* Selection Process */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#7cb983] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#7cb983]">Selection Process</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Entrance examination conducted by the university or institution</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Merit-based selection considering academic performance and entrance test score</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Personal interview for shortlisted candidates</span>
                </li>

                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>An eligibility certificate from the university is required for studying M.SC nursing</span>
                </li>
              </ul>
            </div>

            {/* Documents Required */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#7cb983] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#7cb983]">Documents Required</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>B.Sc Nursing or Post Basic B.Sc Nursing degree certificate and mark sheets</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Nursing registration certificate (RN/RM)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Experience certificate from employer, transfer certificate, and recent passport-size photographs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Structure Section */}
      <section id="curriculum-structure" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
              Curriculum Structure
            </h2>
            <div className="w-20 h-1 bg-[#7cb983] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive coursework designed to develop advanced pediatric nursing competencies
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <button
              onClick={() => setActiveTab("year1")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === "year1"
                  ? "bg-[#006837] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Year 1
            </button>
            <button
              onClick={() => setActiveTab("year2")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === "year2"
                  ? "bg-[#006837] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Year 2
            </button>
            <button
              onClick={() => setActiveTab("clinical")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === "clinical"
                  ? "bg-[#006837] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Clinical Practicum
            </button>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeTab === "year1" && (
              <>
                <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                  <h3 className="text-xl font-bold text-[#006837] mb-3">Nursing Education</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      Theory + Practical
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      300 Credits
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                  <h3 className="text-xl font-bold text-[#006837] mb-3">Advanced Nursing Practice</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      Theory + Practical
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      400 Credits
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                  <h3 className="text-xl font-bold text-[#006837] mb-3">Nursing Research & Statistics</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      Theory + Practical
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      300 Credits
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                  <h3 className="text-xl font-bold text-[#006837] mb-3">Clinical Specialty Practicum (Child Health Nursing - I)                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      Theory + Clinical
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      900 Credits
                    </span>
                  </div>
                </div>

         
              </>
            )}

            {activeTab === "year2" && (
              <>
                <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                  <h3 className="text-xl font-bold text-[#006837] mb-3">Clinical Specialty Practicum (Child Health Nursing - II)                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      Advanced Theory + Clinical
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      1200 Credits
                    </span>
                  </div>
                </div>

              

                <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                  <h3 className="text-xl font-bold text-[#006837] mb-3">Nursing Management</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      Theory + Practical
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      300 Credits
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                  <h3 className="text-xl font-bold text-[#006837] mb-3">Dissertation/Thesis</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      Research Project
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      400 Credits
                    </span>
                  </div>
                </div>

             
              </>
            )}

            {activeTab === "clinical" && (
              <>
                <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                  <h3 className="text-xl font-bold text-[#006837] mb-3">Neonatal Intensive Care Unit (NICU)</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      Level III NICU Training
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      300 hours
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                  <h3 className="text-xl font-bold text-[#006837] mb-3">Pediatric Intensive Care Unit (PICU)</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      Critical Care Training
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      200 hours
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                  <h3 className="text-xl font-bold text-[#006837] mb-3">Pediatric Emergency Department</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      Emergency Care Training
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      150 hours
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                  <h3 className="text-xl font-bold text-[#006837] mb-3">Pediatric Medical & Surgical Wards</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      General Pediatric Care
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      200 hours
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                  <h3 className="text-xl font-bold text-[#006837] mb-3">Pediatric Specialty Units</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      Oncology, Cardiology, Neurology
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      150 hours
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                  <h3 className="text-xl font-bold text-[#006837] mb-3">Community Child Health</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                      Community Posting
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      100 hours
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
              Admission Process
            </h2>
            <div className="w-20 h-1 bg-[#7cb983] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Simple steps to begin your journey towards advanced pediatric nursing education
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical line for mobile, hidden on desktop */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 md:hidden"></div>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#7cb983] rounded-full flex items-center justify-center text-white text-2xl font-bold z-10">
                  1
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-[#006837] mb-3">Online Application</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Submit your application online through our admission portal with required documents and application fee.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-6 md:flex-row-reverse">
                <div className="flex-shrink-0 w-16 h-16 bg-[#7cb983] rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 md:ml-0 md:mr-0">
                  2
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-[#006837] mb-3">Document Verification</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our admission team verifies your academic credentials, nursing registration, and experience certificates.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#7cb983] rounded-full flex items-center justify-center text-white text-2xl font-bold z-10">
                  3
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-[#006837] mb-3">Entrance Examination</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Appear for the university-conducted entrance examination testing nursing fundamentals and aptitude.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start gap-6 md:flex-row-reverse">
                <div className="flex-shrink-0 w-16 h-16 bg-[#7cb983] rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 md:ml-0 md:mr-0">
                  4
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-[#006837] mb-3">Personal Interview</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Shortlisted candidates attend a personal interview with the admission committee to assess suitability.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#7cb983] rounded-full flex items-center justify-center text-white text-2xl font-bold z-10">
                  5
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-[#006837] mb-3">Merit List & Admission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Final merit list is published based on combined scores. Selected candidates complete admission formalities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section - Hidden for now */}
      {false && (<section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
              Fee Structure
            </h2>
            <div className="w-20 h-1 bg-[#7cb983] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Investment in your advanced pediatric nursing education
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Fee Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#006837] text-white">
                    <th className="px-6 py-4 text-left text-lg font-semibold">Fee Component</th>
                    <th className="px-6 py-4 text-right text-lg font-semibold">Year 1</th>
                    <th className="px-6 py-4 text-right text-lg font-semibold">Year 2</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Tuition Fee</td>
                    <td className="px-6 py-4 text-right font-semibold text-[#002309]">₹1,00,000</td>
                    <td className="px-6 py-4 text-right font-semibold text-[#002309]">₹1,00,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Laboratory Fee</td>
                    <td className="px-6 py-4 text-right font-semibold text-[#002309]">₹15,000</td>
                    <td className="px-6 py-4 text-right font-semibold text-[#002309]">₹15,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Library & E-Resources</td>
                    <td className="px-6 py-4 text-right font-semibold text-[#002309]">₹10,000</td>
                    <td className="px-6 py-4 text-right font-semibold text-[#002309]">₹10,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Development Fee</td>
                    <td className="px-6 py-4 text-right font-semibold text-[#002309]">₹5,000</td>
                    <td className="px-6 py-4 text-right font-semibold text-[#002309]">₹5,000</td>
                  </tr>
                  <tr className="bg-gray-100 font-bold">
                    <td className="px-6 py-4 text-[#002309] text-lg">Total Annual Fee</td>
                    <td className="px-6 py-4 text-right text-[#7cb983] text-lg">₹1,30,000</td>
                    <td className="px-6 py-4 text-right text-[#7cb983] text-lg">₹1,30,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Note */}
            <div className="mt-8 bg-[#FBFBEE] border-l-4 border-[#7cb983] p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-[#002309]">Note:</span> Fee structure is reviewed annually. Additional charges apply for hostel accommodation, examination fees, and other miscellaneous expenses. Scholarships and educational loans are available for eligible learners. Contact the admission office for the latest fee details and payment options.
              </p>
            </div>
          </div>
        </div>
      </section>)}

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-[#7cb983] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common queries about our M.Sc Nursing in Child Health Nursing program
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <FAQItem
              question="What is the duration of M.Sc Nursing in Child Health Nursing?"
              answer="M.Sc Nursing in Child Health Nursing is a 2-year full-time postgraduate program divided into 4 semesters. The first year focuses on core nursing subjects, child growth and development, pediatric foundations, and research methodology. The second year emphasizes advanced neonatal and pediatric clinical specialization, teaching practicum, and dissertation/thesis work in pediatric nursing."
            />

            <FAQItem
              question="What are the eligibility criteria for M.Sc Nursing in Child Health Nursing?"
              answer="Candidates must have completed B.Sc Nursing (4-year course) or Post Basic B.Sc Nursing with a minimum of 55% aggregate marks from a recognized university. Additionally, applicants must possess valid registration with the State Nursing Council as RN/RM and have at least 1 year of clinical work experience after completing their basic nursing degree. Experience in pediatric settings is preferred but not mandatory."
            />

            <FAQItem
              question="What career opportunities are available after completing M.Sc in Child Health Nursing?"
              answer="Graduates can pursue diverse careers including Pediatric Nursing Educator/Lecturer at nursing colleges, Pediatric Clinical Nurse Specialist in children's hospitals, NICU/PICU In-charge, Child Health Program Manager, Pediatric Nursing Research Associate, Nurse Administrator in pediatric healthcare settings, and can pursue Ph.D. in Nursing for academic and research careers in child health."
            />

            <FAQItem
              question="Is the M.Sc Nursing program at JKKN approved by INC?"
              answer="Yes, the M.Sc Nursing program at Sresakthimayeil Institute of Nursing and Research is approved by the Indian Nursing Council (INC) and is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. The college is also recognized by the Tamil Nadu Nurses and Midwives Council, ensuring that the degree is valid for employment and higher education across India and recognized internationally."
            />

            <FAQItem
              question="What clinical areas are covered in Child Health Nursing specialization?"
              answer="Child Health Nursing specialization encompasses a wide range of clinical areas including Neonatal Intensive Care (NICU), Pediatric Intensive Care (PICU), pediatric emergency nursing, pediatric cardiology, pediatric neurology, pediatric oncology, pediatric surgery, developmental pediatrics, and community child health nursing. Learners gain comprehensive expertise in caring for neonates, infants, children, and adolescents across multiple clinical settings."
            />

            <FAQItem
              question="What is the selection process for M.Sc Nursing admission?"
              answer="The selection process involves multiple stages: submission of online application with required documents, verification of academic credentials and professional registration, university entrance examination covering nursing fundamentals and aptitude, and personal interview for shortlisted candidates. The final merit list is prepared based on a weighted combination of entrance examination score, academic performance in qualifying degree, and interview assessment."
            />

            <FAQItem
              question="Are scholarships available for M.Sc Nursing learners?"
              answer="Yes, Sresakthimayeil Institute of Nursing and Research offers various scholarship opportunities for deserving learners based on academic merit, financial need, and other criteria. Additionally, learners are eligible for government scholarships, SC/ST scholarships, and educational loans from nationalized banks. Our admission office provides guidance on available financial assistance options for postgraduate nursing education."
            />

            <FAQItem
              question="What clinical exposure will learners receive during the program?"
              answer="Learners receive over 1000 hours of supervised clinical practice in affiliated hospitals with pediatric specialties. Clinical rotations include Neonatal ICU (NICU), Pediatric ICU (PICU), pediatric emergency departments, pediatric medical and surgical wards, pediatric specialty units (cardiology, oncology, neurology), and community child health centers. This extensive clinical exposure ensures that graduates are well-prepared for advanced pediatric nursing practice."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#7cb983]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Begin Your Pediatric Nursing Journey
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Take the next step in your child health nursing career. Apply now for the 2025-26 academic session and join our community of pediatric nursing professionals dedicated to excellence in child healthcare.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#7cb983] px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
            >
              Apply Online
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <button className="inline-flex items-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-[#7cb983] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">
              Download Brochure
            </button>
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

      <Footer hideLifeAtJKKN />
      <FloatingButtons />
    </>
  );
}
