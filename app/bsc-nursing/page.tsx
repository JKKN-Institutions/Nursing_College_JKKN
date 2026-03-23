"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Image from "next/image";
import {
  CheckCircleIcon,
  ClockIcon,
  AcademicCapIcon,
  UserGroupIcon,
  CalendarIcon,
  BeakerIcon,
  BuildingLibraryIcon,
  ComputerDesktopIcon,
  HomeModernIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  HeartIcon
} from "@heroicons/react/24/outline";

export default function BScNursing() {
  const [activeYear, setActiveYear] = useState<"first" | "second" | "third" | "fourth">("first");

  return (
    <>
      <Header />
      <BreadcrumbSchema items={[
        { name: 'JKKN Institutions', url: 'https://jkkn.ac.in/' },
        { name: 'Nursing College', url: 'https://nursing.sresakthimayeil.jkkn.ac.in/' },
        { name: 'B.Sc Nursing', url: 'https://nursing.sresakthimayeil.jkkn.ac.in/bsc-nursing/' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Bachelor of Science in Nursing (B.Sc Nursing)",
              "description": "A 4-year undergraduate nursing program approved by the Indian Nursing Council (INC) and affiliated to Tamil Nadu Dr. MGR Medical University.",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "Sresakthimayeil Institute of Nursing and Research (Sresakthimayeil Institute of Nursing and Research)",
                "url": "https://nursing.sresakthimayeil.jkkn.ac.in/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Natarajapuram, NH-544 (Salem-Coimbatore Highway)",
                  "addressLocality": "Komarapalayam",
                  "addressRegion": "Tamil Nadu",
                  "postalCode": "638183",
                  "addressCountry": "IN"
                }
              },
              "timeRequired": "P4Y",
              "educationalCredentialAwarded": "B.Sc Nursing Degree",
              "occupationalCategory": "Registered Nurse",
              "coursePrerequisites": "10+2 with Physics, Chemistry, Biology with minimum 45% marks and valid NEET-UG score",
              "availableLanguage": "English",
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "Full-time",
                "courseWorkload": "PT4Y",
                "instructor": {
                  "@type": "Organization",
                  "name": "Sresakthimayeil Institute of Nursing and Research"
                }
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the duration of the B.Sc Nursing course?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The B.Sc Nursing programme is a 4-year full-time undergraduate course. This includes 3.5 years of academic study combining theoretical classes and clinical rotations, followed by a 6-month mandatory internship."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the eligibility criteria for B.Sc Nursing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Candidates must have passed 10+2 with Physics, Chemistry, and Biology with minimum 45% aggregate marks (40% for reserved categories). Age should be between 17-35 years. A valid NEET-UG score is required."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Sresakthimayeil Institute of Nursing and Research approved by INC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Sresakthimayeil Institute of Nursing and Research is duly approved by the Indian Nursing Council (INC), New Delhi, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What career opportunities are available after B.Sc Nursing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Graduates can work as Staff Nurses, Community Health Nurses, ICU/Critical Care Nurses, Nursing Educators (after M.Sc), Defence Services Nursing, or pursue international nursing opportunities."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does the college provide hostel accommodation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Sresakthimayeil Institute of Nursing and Research provides separate, well-furnished hostel facilities for both male and female Learners with 24/7 security, mess, Wi-Fi, and recreational areas."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I pursue higher studies after B.Sc Nursing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, after completing B.Sc Nursing and one year of clinical experience, you can pursue M.Sc Nursing in various specialities or PhD in Nursing."
                  }
                }
              ]
            }
          ])
        }}
      />
      <main className="bg-[#FBFBEE]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#006837] to-[#002309] text-white py-16 md:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gray-700/50 text-white px-4 py-2 rounded-full mb-6">
                  <CheckCircleIcon className="w-5 h-5 text-[#7cb983]" />
                  <span className="text-sm font-medium"><a href="https://www.indiannursingcouncil.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">INC</a> Approved | <a href="https://www.tnmgrmu.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">TNMGRMU</a> Recognized | <a href="https://www.naac.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">NAAC</a> Accredited</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  B.Sc Nursing at{" "}
                  <span className="text-[#7cb983]">Sresakthimayeil Institute of Nursing and Research</span>
                </h1>

                <p className="text-sm text-gray-300 mb-4">Last updated: March 19, 2026</p>

                <div className="bg-white/10 border-l-4 border-[#7cb983] p-4 mb-8 rounded-r-lg">
                  <p className="font-semibold text-[#7cb983] mb-1">Quick Summary</p>
                  <p className="text-gray-200 text-sm">JKKN College of Nursing offers a 4-year INC-approved B.Sc Nursing program affiliated to Tamil Nadu Dr. M.G.R. Medical University. Students receive clinical training at the attached 500+ bed multi-specialty teaching hospital from Year 1. Placement rate: 92%+ with international opportunities in NHS UK, UAE, and Singapore.</p>
                </div>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                  Transform your passion for healthcare into a rewarding career. The 4-year undergraduate nursing program at Sresakthimayeil Institute of Nursing and Research prepares compassionate and competent healthcare professionals ready to make a difference in patient care.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                    Apply Now
                    <span>→</span>
                  </a>
                  <button
                    onClick={() => {
                      document.getElementById("programme-curriculum")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="border-2 border-white text-white hover:bg-white hover:text-[#006837] font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                  >
                    View Curriculum
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7cb983] mb-1">4</div>
                    <div className="text-xs sm:text-sm text-gray-300">Year Program</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7cb983] mb-1">60</div>
                    <div className="text-xs sm:text-sm text-gray-300">Seats Available</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7cb983] mb-1">97%</div>
                    <div className="text-xs sm:text-sm text-gray-300">Placement Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7cb983] mb-1">30+</div>
                    <div className="text-xs sm:text-sm text-gray-300">Hospital Partners</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Nursing Learners */}
              <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
                <Image
                  src="/images/B.Sc-Nursing-Hero-Banner_image.webp"
                  alt="Nursing Learners"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Programme Overview Section */}
        <section className="py-16 md:py-24 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
                  <Image
                    src="/images/B.Sc-Nursing-PatientCare-Training.webp"
                    alt="Patient Care Training"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-6">
                  What is B.Sc Nursing?
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Bachelor of Science in Nursing (B.Sc Nursing) is a comprehensive 4-year undergraduate programme designed to develop skilled, compassionate, and ethical nursing professionals. The curriculum integrates theoretical knowledge with extensive clinical practice.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Sresakthimayeil Institute of Nursing and Research follows a progressive education approach that goes beyond textbook learning. Students gain hands-on experience through clinical rotations in leading hospitals, community health centres, and specialised care units.
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">INC Approved Curriculum</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Experienced Learning Facilitators</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">State-of-the-Art Simulation Lab</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">30+ Hospital Tie-ups</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Excellent Placement Record</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Hostel & Transport Facilities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts Section */}
        <section className="py-16 md:py-24 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wider mb-3">
                QUICK FACTS
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                Programme Information at a Glance
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Essential details about the B.Sc Nursing programme at Sresakthimayeil Institute of Nursing and Research to help you make an informed decision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <ClockIcon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-gray-600 text-sm mb-3">Programme Duration</h3>
                <p className="text-2xl md:text-3xl font-bold text-[#006837] mb-3">4 Years</p>
                <p className="text-gray-600 text-sm">
                  Full-time undergraduate programme including 6 months mandatory internship.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <AcademicCapIcon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-gray-600 text-sm mb-3">Degree Awarded</h3>
                <p className="text-2xl md:text-3xl font-bold text-[#006837] mb-3">B.Sc Nursing</p>
                <p className="text-gray-600 text-sm">
                  Bachelor of Science in Nursing from TNMGRMU, Chennai.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <UserGroupIcon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-gray-600 text-sm mb-3">Annual Intake</h3>
                <p className="text-2xl md:text-3xl font-bold text-[#006837] mb-3">60 Seats</p>
                <p className="text-gray-600 text-sm">
                  Limited seats to ensure personalised attention for every Learner.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <CalendarIcon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-gray-600 text-sm mb-3">Academic Session</h3>
                <p className="text-2xl md:text-3xl font-bold text-[#006837] mb-3">August</p>
                <p className="text-gray-600 text-sm">
                  New academic session begins every August. Applications open from April.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria Section */}
        <section className="py-16 md:py-24 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wider mb-3">
                WHO CAN APPLY
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                B.Sc Nursing Eligibility Criteria
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Review the requirements to ensure you meet the eligibility criteria for admission.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Academic Qualifications */}
              <div className="bg-white rounded-xl p-8 md:p-10">
                <h3 className="text-2xl font-bold text-[#006837] mb-8">
                  Academic Qualifications
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Passed +2 examination with Physics, Chemistry, and Biology as core subjects.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Minimum 45% aggregate marks in PCB (40% for SC/ST/OBC candidates).
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      English as a compulsory subject in 10+2 examination.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Valid NEET-UG score as per current regulatory requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Other Requirements */}
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] text-white rounded-xl p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-8">
                  Other Requirements
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Age:</p>
                      <p className="text-gray-200">
                        Minimum 17 years and maximum 35 years as on 31st December.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Medical Fitness:</p>
                      <p className="text-gray-200">
                        Candidate must be medically fit for nursing profession.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Nationality:</p>
                      <p className="text-gray-200">
                        Indian nationals and NRI/PIO candidates are eligible.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Gender:</p>
                      <p className="text-gray-200">
                        Male candidates limited to 10% of total intake per INC guidelines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programme Curriculum Section */}
        <section id="programme-curriculum" className="py-16 md:py-24 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wider mb-3">
                WHAT YOU'LL LEARN
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                B.Sc Nursing Syllabus and Curriculum
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                The INC-approved B.Sc Nursing curriculum provides comprehensive theoretical knowledge and practical clinical skills.
              </p>
            </div>

            {/* Year Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => setActiveYear("first")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeYear === "first"
                    ? "bg-[#006837] text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                First Year
              </button>
              <button
                onClick={() => setActiveYear("second")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeYear === "second"
                    ? "bg-[#006837] text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Second Year
              </button>
              <button
                onClick={() => setActiveYear("third")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeYear === "third"
                    ? "bg-[#006837] text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Third Year
              </button>
              <button
                onClick={() => setActiveYear("fourth")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeYear === "fourth"
                    ? "bg-[#006837] text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Fourth Year
              </button>
            </div>

            {/* Curriculum Content */}
            {activeYear === "first" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1 - Foundational Sciences */}
                <div className="bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      01
                    </div>
                    <h3 className="text-xl font-bold text-[#006837]">Foundational Sciences</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Anatomy and Physiology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Biochemistry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Nutrition and Dietetics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Microbiology</span>
                    </li>
                  </ul>
                </div>

                {/* Column 2 - Nursing Foundations */}
                <div className="bg-gradient-to-br from-orange-50 to-white border-l-4 border-[#7cb983] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#7cb983] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      02
                    </div>
                    <h3 className="text-xl font-bold text-[#006837]">Nursing Foundations</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Fundamentals of Nursing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Nursing Foundation Practicum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Introduction to Nursing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Health Assessment</span>
                    </li>
                  </ul>
                </div>

                {/* Column 3 - Behavioural Sciences */}
                <div className="bg-gradient-to-br from-teal-50 to-white border-l-4 border-[#006837] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#006837] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      03
                    </div>
                    <h3 className="text-xl font-bold text-[#006837]">Behavioural Sciences</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Psychology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">English Communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Computer Education</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Environmental Science</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeYear === "second" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      01
                    </div>
                    <h3 className="text-xl font-bold text-[#006837]">
                      <Link href="/dept-medical-surgical" className="hover:underline">Medical-Surgical Nursing</Link>
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Medical-Surgical Nursing I</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Medical-Surgical Nursing Practicum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Pharmacology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Pathology and Genetics</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white border-l-4 border-[#7cb983] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#7cb983] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      02
                    </div>
                    <h3 className="text-xl font-bold text-[#006837]">
                      <Link href="/dept-community-health" className="hover:underline">Community Health</Link>
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Community Health Nursing I</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Community Health Practicum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Sociology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Epidemiology</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-white border-l-4 border-[#006837] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#006837] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      03
                    </div>
                    <h3 className="text-xl font-bold text-[#006837]">Research & Communication</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Nursing Research & Statistics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Professional Communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Educational Technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Health Informatics</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeYear === "third" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      01
                    </div>
                    <h3 className="text-xl font-bold text-[#006837]">Specialized Nursing</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Medical-Surgical Nursing II</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Critical Care Nursing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Mental Health Nursing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Oncology Nursing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white border-l-4 border-[#7cb983] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#7cb983] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      02
                    </div>
                    <h3 className="text-xl font-bold text-[#006837]">Child & Women Health</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Child Health Nursing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Obstetrics & Gynecological Nursing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Neonatal Nursing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Reproductive Health</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-white border-l-4 border-[#006837] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#006837] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      03
                    </div>
                    <h3 className="text-xl font-bold text-[#006837]">Clinical Practice</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Clinical Practicum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Emergency Nursing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Operating Room Techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Nursing Procedures</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeYear === "fourth" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      01
                    </div>
                    <h3 className="text-xl font-bold text-[#006837]">Midwifery & Obstetrics</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Midwifery & Obstetrical Nursing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Midwifery Practicum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">High-Risk Pregnancy Care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Family Planning</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white border-l-4 border-[#7cb983] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#7cb983] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      02
                    </div>
                    <h3 className="text-xl font-bold text-[#006837]">Management & Leadership</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Nursing Management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Nursing Administration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Leadership & Teamwork</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Quality Assurance</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-white border-l-4 border-[#006837] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#006837] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      03
                    </div>
                    <h3 className="text-xl font-bold text-[#006837]">Internship & Research</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">6-Month Internship</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Research Project</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Professional Practice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Evidence-Based Practice</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Our Facilities Section */}
        <section className="py-16 md:py-24 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wider mb-3">
                WORLD-CLASS INFRASTRUCTURE
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                Campus Facilities at Sresakthimayeil Institute of Nursing and Research
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Learn in a nurturing environment equipped with modern infrastructure and cutting-edge technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Simulation Lab */}
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-4">Simulation Lab</h3>
                <h4 className="text-xl font-bold text-[#7cb983] mb-3">Simulation Laboratory</h4>
                <p className="text-gray-100">
                Simulation Lab mannequins for realistic clinical scenarios
                </p>
              </div>

              {/* Anatomy Lab */}
              <div className="bg-[#7cb983]/15 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-3xl font-bold text-[#006837] mb-4">Anatomy Lab</h3>
                <h4 className="text-xl font-bold text-[#7cb983] mb-3">Anatomy Laboratory</h4>
                <p className="text-gray-700">
                  Comprehensive anatomy specimens and models
                </p>
              </div>

              {/* Digital Library */}
              <div className="bg-[#7cb983]/25 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-3xl font-bold text-[#006837] mb-4">Digital Library</h3>
                <h4 className="text-xl font-bold text-[#7cb983] mb-3">Digital Library</h4>
                <p className="text-gray-700">
                  Access to 10,000+ e-journals and digital resources
                </p>
              </div>

              {/* Skills Lab */}
              <div className="bg-[#7cb983]/15 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-3xl font-bold text-[#006837] mb-4">Skills Lab</h3>
                <h4 className="text-xl font-bold text-[#7cb983] mb-3">Nursing Skills Lab</h4>
                <p className="text-gray-700">
                  Hands-on practice for essential nursing procedures
                </p>
              </div>

              {/* Computer Lab */}
              <div className="bg-[#7cb983]/25 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-3xl font-bold text-[#006837] mb-4">Computer Lab</h3>
                <h4 className="text-xl font-bold text-[#7cb983] mb-3">Computer Laboratory</h4>
                <p className="text-gray-700">
                  Latest software for health informatics
                </p>
              </div>

              {/* Hostel */}
              <div className="bg-[#7cb983]/15 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-3xl font-bold text-[#006837] mb-4">Hostel</h3>
                <h4 className="text-xl font-bold text-[#7cb983] mb-3">Hostel Accommodation</h4>
                <p className="text-gray-700">
                  Safe and well-furnished hostel facilities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities Section */}
        <section className="py-16 md:py-24 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wider mb-3">
                YOUR FUTURE
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                Career Options After B.Sc Nursing
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                A B.Sc Nursing degree opens doors to diverse and rewarding career paths in healthcare.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Nursing Careers Image */}
              <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
                <Image
                  src="/images/B.Sc-Nursing-Careers-image.webp"
                  alt="Nursing Careers"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right - Career Options */}
              <div className="space-y-6">
                {/* Hospital Staff Nurse */}
                <div className="flex items-start gap-4 bg-[#FBFBEE] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="bg-[#7cb983] rounded-full p-3 flex-shrink-0">
                    <HomeModernIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#006837] mb-2">Hospital Staff Nurse</h4>
                    <p className="text-gray-700">
                      Work in government or private hospitals providing direct patient care.
                    </p>
                  </div>
                </div>

                {/* Community Health Nurse */}
                <div className="flex items-start gap-4 bg-[#FBFBEE] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="bg-[#7cb983] rounded-full p-3 flex-shrink-0">
                    <UserGroupIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#006837] mb-2">Community Health Nurse</h4>
                    <p className="text-gray-700">
                      Serve in PHCs, CHCs, and community health programmes.
                    </p>
                  </div>
                </div>

                {/* Nursing Educator */}
                <div className="flex items-start gap-4 bg-[#FBFBEE] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="bg-[#7cb983] rounded-full p-3 flex-shrink-0">
                    <AcademicCapIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#006837] mb-2">Nursing Educator</h4>
                    <p className="text-gray-700">
                      Teach future nurses at nursing colleges after completing M.Sc.
                    </p>
                  </div>
                </div>

                {/* International Nursing */}
                <div className="flex items-start gap-4 bg-[#FBFBEE] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="bg-[#7cb983] rounded-full p-3 flex-shrink-0">
                    <GlobeAltIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#006837] mb-2">International Nursing</h4>
                    <p className="text-gray-700">
                      Work abroad in UK, USA, Australia, Canada, and Gulf nations.
                    </p>
                  </div>
                </div>

                {/* Defence Services Nursing */}
                <div className="flex items-start gap-4 bg-[#FBFBEE] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="bg-[#7cb983] rounded-full p-3 flex-shrink-0">
                    <HeartIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#006837] mb-2">Defence Services Nursing</h4>
                    <p className="text-gray-700">
                      Join Indian Army, Navy, or Air Force nursing services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Placement Statistics Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#006837] to-[#002309] text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wider mb-3">
                OUR TRACK RECORD
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Placement Statistics
              </h2>
              <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                The dedicated <Link href="/placement" className="text-[#7cb983] hover:underline font-semibold">placement cell</Link> at Sresakthimayeil Institute of Nursing and Research ensures excellent career opportunities for all graduating Learners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#7cb983] mb-3">97%</div>
                <div className="text-xl font-semibold mb-2">Placement Rate</div>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#7cb983] mb-3">₹4.5L</div>
                <div className="text-xl font-semibold mb-2">Average CTC</div>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#7cb983] mb-3">50+</div>
                <div className="text-xl font-semibold mb-2">Recruiting Partners</div>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#7cb983] mb-3">1000+</div>
                <div className="text-xl font-semibold mb-2">Alumni Network</div>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Process Section */}
        <section className="py-16 md:py-24 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wider mb-3">
                GET STARTED
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                Admission Process
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Follow these simple steps to apply for the B.Sc Nursing programme.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-[#7cb983] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#006837] mb-3">Online Registration</h3>
                  <p className="text-gray-700 text-lg">
                    Visit the official Sresakthimayeil Institute of Nursing and Research website and complete the online application form with accurate details.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-[#7cb983] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#006837] mb-3">Document Submission</h3>
                  <p className="text-gray-700 text-lg">
                    Upload required documents including mark sheets, NEET scorecard, ID proof, and photographs.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-[#7cb983] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#006837] mb-3">Merit List & Counselling</h3>
                  <p className="text-gray-700 text-lg">
                    Selection based on merit. Attend counselling session for seat allotment.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-[#7cb983] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#006837] mb-3">Fee Payment</h3>
                  <p className="text-gray-700 text-lg">
                    Pay the prescribed admission fee to confirm your seat. Education loan assistance available.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-[#7cb983] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#006837] mb-3">Admission Confirmation</h3>
                  <p className="text-gray-700 text-lg">
                    Receive admission letter and join the orientation programme to begin your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wider mb-3">
                HAVE QUESTIONS?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Find answers to common questions about the B.Sc Nursing programme at Sresakthimayeil Institute of Nursing and Research.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {/* FAQ 1 */}
              <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#FBFBEE] transition-colors">
                  <h3 className="text-lg md:text-xl font-bold text-[#006837]">
                    What is the duration of the B.Sc Nursing course?
                  </h3>
                  <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    The B.Sc Nursing programme is a 4-year full-time undergraduate course. This includes 3.5 years of academic study combining theoretical classes and clinical rotations, followed by a 6-month mandatory internship.
                  </p>
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#FBFBEE] transition-colors">
                  <h3 className="text-lg md:text-xl font-bold text-[#006837]">
                    What are the eligibility criteria for B.Sc Nursing?
                  </h3>
                  <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Candidates must have passed 10+2 with Physics, Chemistry, and Biology with minimum 45% aggregate marks (40% for reserved categories). Age should be between 17-35 years. A valid NEET-UG score is required.
                  </p>
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#FBFBEE] transition-colors">
                  <h3 className="text-lg md:text-xl font-bold text-[#006837]">
                    Is Sresakthimayeil Institute of Nursing and Research approved by INC?
                  </h3>
                  <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Yes, Sresakthimayeil Institute of Nursing and Research is duly approved by the Indian Nursing Council (INC), New Delhi, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.
                  </p>
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#FBFBEE] transition-colors">
                  <h3 className="text-lg md:text-xl font-bold text-[#006837]">
                    What career opportunities are available after B.Sc Nursing?
                  </h3>
                  <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Graduates can work as Staff Nurses, Community Health Nurses, ICU/Critical Care Nurses, Nursing Educators (after M.Sc), Defence Services Nursing, or pursue international nursing opportunities.
                  </p>
                </div>
              </details>

              {/* FAQ 5 */}
              <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#FBFBEE] transition-colors">
                  <h3 className="text-lg md:text-xl font-bold text-[#006837]">
                    Does the college provide hostel accommodation?
                  </h3>
                  <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Yes, Sresakthimayeil Institute of Nursing and Research provides separate, well-furnished hostel facilities for both male and female Learners with 24/7 security, mess, Wi-Fi, and recreational areas.
                  </p>
                </div>
              </details>

              {/* FAQ 6 */}
              <details className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#FBFBEE] transition-colors">
                  <h3 className="text-lg md:text-xl font-bold text-[#006837]">
                    Can I pursue higher studies after B.Sc Nursing?
                  </h3>
                  <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Yes, after completing B.Sc Nursing and one year of clinical experience, you can pursue M.Sc Nursing in various specialities or PhD in Nursing.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#7cb983] to-[#6ba872]">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Begin Your Nursing Journey?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Take the first step towards a rewarding career in healthcare. Apply now for the upcoming academic session.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-white hover:bg-gray-100 text-[#7cb983] font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                Apply Now
                <span>→</span>
              </a>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#7cb983] font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300">
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

      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
