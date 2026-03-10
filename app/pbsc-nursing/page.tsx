"use client";

import { useState } from "react";
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
  BookOpenIcon,
  CurrencyDollarIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";

export default function PBScNursing() {
  const [activeYear, setActiveYear] = useState<"first" | "second">("first");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <BreadcrumbSchema items={[
        { name: 'JKKN Institutions', url: 'https://jkkn.ac.in/' },
        { name: 'Nursing College', url: 'https://nursing.sresakthimayeil.jkkn.ac.in/' },
        { name: 'Post Basic B.Sc Nursing', url: 'https://nursing.sresakthimayeil.jkkn.ac.in/pbsc-nursing/' },
      ]} />
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
                  <span className="text-sm font-medium">INC Approved | TNMGRMU Affiliated | NAAC Accredited</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Post Basic B.Sc in{" "}
                  <span className="text-[#7cb983]">Nursing</span>{" "}
                  (P.B. B.Sc Nursing)
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                  Elevate your nursing career from diploma to degree. Our 2-year Post Basic B.Sc Nursing programme is specially designed for registered GNM nurses to upgrade their qualification, expand career opportunities, and pursue higher education in nursing.
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
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7cb983] mb-1">2</div>
                    <div className="text-xs sm:text-sm text-gray-300">Year Program</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7cb983] mb-1">50</div>
                    <div className="text-xs sm:text-sm text-gray-300">Seats Available</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7cb983] mb-1">98%</div>
                    <div className="text-xs sm:text-sm text-gray-300">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7cb983] mb-1">No</div>
                    <div className="text-xs sm:text-sm text-gray-300">NEET Required</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Post Basic Nursing Learners */}
              <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
                <Image
                  src="/images/P.B.B.Sc-Nursing-Hero-Banner-Image.png"
                  alt="Post Basic Nursing Learners"
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
                    src="/images/P.B.B.Sc-Nursing-Advanced-Nursing-Practice-Image.png"
                    alt="Advanced Nursing Practice"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-6">
                  Programme Overview
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Post Basic Bachelor of Science in Nursing (P.B. B.Sc Nursing) is a 2-year undergraduate degree programme exclusively designed for registered nurses who have completed their GNM (General Nursing and Midwifery) diploma. This bridge programme enables working nurses to upgrade their qualification to a bachelor's degree level.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  At JKKN College of Nursing, we recognise the valuable clinical experience that GNM nurses bring. Our curriculum builds upon this foundation, focusing on advanced nursing concepts, research methodology, leadership skills, and specialized clinical competencies that prepare you for enhanced roles in healthcare.
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
                    <span className="text-gray-700">Flexible Schedule for Working Nurses</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">No NEET Requirement</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">M.Sc Nursing Eligibility</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Career Advancement Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 md:py-24 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wider mb-3">
                WHY UPGRADE?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                Advantages of Post Basic B.Sc Nursing
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Discover why thousands of GNM nurses choose to upgrade their qualification through Post Basic B.Sc Nursing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 - Degree Recognition */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="bg-[#7cb983]/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <AcademicCapIcon className="w-10 h-10 text-[#7cb983]" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-4">Degree Recognition</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Earn a bachelor's degree equivalent to regular B.Sc Nursing for career advancement.
                </p>
              </div>

              {/* Card 2 - Higher Salary */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="bg-[#7cb983]/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <CurrencyDollarIcon className="w-10 h-10 text-[#7cb983]" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-4">Higher Salary</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  B.Sc qualified nurses earn 30-50% more than diploma holders in most healthcare settings.
                </p>
              </div>

              {/* Card 3 - Global Opportunities */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="bg-[#7cb983]/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <GlobeAltIcon className="w-10 h-10 text-[#7cb983]" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-4">Global Opportunities</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Open doors to international nursing careers in UK, USA, Australia, Canada, and Gulf nations.
                </p>
              </div>

              {/* Card 4 - Higher Education */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="bg-[#7cb983]/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <BookOpenIcon className="w-10 h-10 text-[#7cb983]" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-4">Higher Education</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Become eligible for M.Sc Nursing, PhD, and nursing educator positions.
                </p>
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
                Essential details about our Post Basic B.Sc Nursing programme to help you make an informed decision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <ClockIcon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-gray-600 text-sm mb-3">Programme Duration</h3>
                <p className="text-2xl md:text-3xl font-bold text-[#006837] mb-3">2 Years</p>
                <p className="text-gray-600 text-sm">
                  Full-time undergraduate programme designed for working GNM nurses.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <AcademicCapIcon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-gray-600 text-sm mb-3">Degree Awarded</h3>
                <p className="text-2xl md:text-3xl font-bold text-[#006837] mb-3">P.B.B.Sc Nursing</p>
                <p className="text-gray-600 text-sm">
                  Bachelor of Science in Nursing (Post Basic) from TNMGRMU, Chennai.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <UserGroupIcon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-gray-600 text-sm mb-3">Annual Intake</h3>
                <p className="text-2xl md:text-3xl font-bold text-[#006837] mb-3">50 Seats</p>
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

        {/* Comparison Table Section */}
        <section className="py-16 md:py-24 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wider mb-3">
                KNOW THE DIFFERENCE
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                B.Sc Nursing vs Post Basic B.Sc Nursing
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Understand the key differences between regular B.Sc Nursing and Post Basic B.Sc Nursing programmes.
              </p>
            </div>

            <div className="max-w-6xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#006837] text-white">
                    <th className="p-4 text-left font-bold text-lg">Criteria</th>
                    <th className="p-4 text-left font-bold text-lg">B.Sc Nursing</th>
                    <th className="p-4 text-left font-bold text-lg">Post Basic B.Sc Nursing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold">Duration</td>
                    <td className="p-4">4 Years</td>
                    <td className="p-4 text-[#7cb983] font-semibold">2 Years</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Eligibility</td>
                    <td className="p-4">10+2 with PCB</td>
                    <td className="p-4 text-[#7cb983] font-semibold">GNM + 2 Years Experience</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold">NEET Requirement</td>
                    <td className="p-4">No, Not Required</td>
                    <td className="p-4 text-[#7cb983] font-semibold">No, Not Required</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Target Candidates</td>
                    <td className="p-4">Fresh 10+2 Learners</td>
                    <td className="p-4 text-[#7cb983] font-semibold">Working GNM Nurses</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold">Degree Value</td>
                    <td className="p-4">Bachelor's Degree</td>
                    <td className="p-4 text-[#7cb983] font-semibold">Bachelor's Degree (Equal Value)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">M.Sc Nursing Eligibility</td>
                    <td className="p-4">No Need Experience</td>
                    <td className="p-4 text-[#7cb983] font-semibold">No Need Experience</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold">International Recognition</td>
                    <td className="p-4">Recognised Globally</td>
                    <td className="p-4 text-[#7cb983] font-semibold">Recognised Globally</td>
                  </tr>
                </tbody>
              </table>
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
                Eligibility Criteria
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Review the requirements to ensure you meet the eligibility criteria for Post Basic B.Sc Nursing admission.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Professional Qualifications */}
              <div className="bg-white rounded-xl p-8 md:p-10">
                <h3 className="text-2xl font-bold text-[#006837] mb-8">
                  Professional Qualifications
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Passed GNM (General Nursing and Midwifery) from a recognised institution approved by INC.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Minimum 50% aggregate marks in GNM qualifying examination (45% for reserved categories).
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Registered as a Nurse and Midwife (RN & RM) with the State Nursing Registration Council.
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
                        No upper age limit. However, candidates above 45 years may require special approval.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#7cb983] rounded-full p-2 flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">NEET:</p>
                      <p className="text-gray-200">
                        Not required for Post Basic B.Sc Nursing admission.
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
                        Indian nationals and NRI/PIO candidates are eligible to apply.
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
                Programme Curriculum
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Our INC-approved curriculum builds upon your GNM foundation with advanced nursing concepts and specialised skills.
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
            </div>

            {/* Curriculum Content */}
            {activeYear === "first" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1 - Nursing Foundation */}
                <div className="bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      01
                    </div>
                    <h3 className="text-xl font-bold text-[#006837]">Nursing Foundation</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Nursing Foundation</span>
                    </li>
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

                {/* Column 2 - Medical Nursing */}
                <div className="bg-gradient-to-br from-orange-50 to-white border-l-4 border-[#7cb983] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#7cb983] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      02
                    </div>
                    <h3 className="text-xl font-bold text-[#006837]">Medical Nursing</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Medical Surgical Nursing I</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Pharmacology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Pathology and Genetics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Clinical Practicum</span>
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
                      <span className="text-gray-700">Sociology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">English Communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Computer Education in Nursing</span>
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
                    <h3 className="text-xl font-bold text-[#006837]">Advanced Clinical Nursing</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Medical-Surgical Nursing II</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Child Health Nursing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Mental Health Nursing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Midwifery & Obstetrical Nursing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white border-l-4 border-[#7cb983] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#7cb983] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      02
                    </div>
                    <h3 className="text-xl font-bold text-[#006837]">Community & Management</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Community Health Nursing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Nursing Management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Nursing Education</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Administration</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-white border-l-4 border-[#006837] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#006837] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                      03
                    </div>
                    <h3 className="text-xl font-bold text-[#006837]">Research & Practice</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Nursing Research & Statistics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Professional Trends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Evidence-Based Practice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7cb983] mt-1">•</span>
                      <span className="text-gray-700">Clinical Specialization</span>
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
                Our Facilities
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
                Career Opportunities
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                A Post Basic B.Sc Nursing degree opens doors to enhanced career paths and leadership positions in healthcare.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Nursing Career Advancement */}
              <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
                <Image
                  src="/images/P.B.B.Sc-Nursing-Career-Advancement-Image.png"
                  alt="Nursing Career Advancement"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right - Career Options */}
              <div className="space-y-6">
                {/* Senior Staff Nurse */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="bg-[#7cb983] rounded-full p-3 flex-shrink-0">
                    <HomeModernIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#006837] mb-2">Senior Staff Nurse</h4>
                    <p className="text-gray-700">
                      Lead nursing teams in government or private hospitals with enhanced responsibilities.
                    </p>
                  </div>
                </div>

                {/* Nursing Educator */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="bg-[#7cb983] rounded-full p-3 flex-shrink-0">
                    <AcademicCapIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#006837] mb-2">Nursing Educator</h4>
                    <p className="text-gray-700">
                      Teach future nurses at ANM/GNM schools or pursue M.Sc for college positions.
                    </p>
                  </div>
                </div>

                {/* Nursing Supervisor */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="bg-[#7cb983] rounded-full p-3 flex-shrink-0">
                    <UserGroupIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#006837] mb-2">Nursing Supervisor</h4>
                    <p className="text-gray-700">
                      Supervise nursing departments and manage healthcare delivery systems.
                    </p>
                  </div>
                </div>

                {/* International Nursing */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="bg-[#7cb983] rounded-full p-3 flex-shrink-0">
                    <GlobeAltIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#006837] mb-2">International Nursing</h4>
                    <p className="text-gray-700">
                      Work abroad in UK, USA, Australia, Canada, and Gulf nations with degree recognition.
                    </p>
                  </div>
                </div>

                {/* M.Sc Nursing & PhD */}
                <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="bg-[#7cb983] rounded-full p-3 flex-shrink-0">
                    <BookOpenIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#006837] mb-2">M.Sc Nursing & PhD</h4>
                    <p className="text-gray-700">
                      Pursue higher studies in nursing specialities and research after completing B.Sc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Advancement Statistics Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#006837] to-[#002309] text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wider mb-3">
                OUR TRACK RECORD
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Career Advancement Statistics
              </h2>
              <p className="text-gray-200 text-lg max-w-3xl mx-auto">
                Our Post Basic B.Sc Nursing graduates achieve significant career advancement in the healthcare sector.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#7cb983] mb-3">98%</div>
                <div className="text-xl font-semibold mb-2">Completion Rate</div>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#7cb983] mb-3">40%</div>
                <div className="text-xl font-semibold mb-2">Average Salary Increase</div>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#7cb983] mb-3">30+</div>
                <div className="text-xl font-semibold mb-2">Partner Hospitals</div>
              </div>

              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#7cb983] mb-3">300+</div>
                <div className="text-xl font-semibold mb-2">Successful Alumni</div>
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
                Follow these simple steps to apply for the Post Basic B.Sc Nursing programme.
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
                    Visit our official website and complete the online application form with accurate details including GNM certificate and work experience.
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
                    Upload required documents including GNM mark sheets, nursing registration certificate, experience certificate, Eligibility Certificate from University and photographs.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-[#7cb983] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#006837] mb-3">Entrance / Interview</h3>
                  <p className="text-gray-700 text-lg">
                    Appear for the counselling as per state/university guidelines. Selection based on GNM merit and test performance.
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
                    Pay the prescribed admission fee to confirm your seat. Education loan assistance and instalment options available.
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
                    Receive admission letter and join the orientation programme to begin your journey towards a B.Sc Nursing degree.
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
                Find answers to common questions about our Post Basic B.Sc Nursing programme.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {/* FAQ 1 */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] pr-4">
                    What is the duration of the Post Basic B.Sc Nursing course?
                  </h3>
                  <ChevronDownIcon
                    className={`w-6 h-6 text-[#7cb983] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === 1 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === 1 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      The Post Basic B.Sc Nursing programme is a 2-year full-time undergraduate course designed specifically for registered nurses who hold a GNM diploma. This accelerated programme allows working nurses to upgrade their qualification while building on their existing clinical experience.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] pr-4">
                    What are the eligibility criteria for Post Basic B.Sc Nursing?
                  </h3>
                  <ChevronDownIcon
                    className={`w-6 h-6 text-[#7cb983] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === 2 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === 2 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      Candidates must have passed GNM (General Nursing and Midwifery) from a recognised institution with minimum 50% aggregate marks. They must be registered with the State Nursing Council and have completed minimum 2 years of clinical experience after GNM. No upper age limit, but candidates above 45 may require special approval.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] pr-4">
                    Is NEET required for Post Basic B.Sc Nursing admission?
                  </h3>
                  <ChevronDownIcon
                    className={`w-6 h-6 text-[#7cb983] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === 3 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === 3 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      No, NEET is not required for Post Basic B.Sc Nursing admission. Admission is based on merit in the GNM qualifying examination and an entrance test/interview conducted by the institution or state counselling authority. This makes it more accessible for working nurses.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] pr-4">
                    What is the difference between B.Sc Nursing and Post Basic B.Sc Nursing?
                  </h3>
                  <ChevronDownIcon
                    className={`w-6 h-6 text-[#7cb983] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === 4 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === 4 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      B.Sc Nursing is a 4-year undergraduate programme for 10+2 Learners, while Post Basic B.Sc Nursing is a 2-year programme exclusively for GNM diploma holders with clinical experience. Both degrees have equal value for career advancement, higher studies, and international opportunities.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] pr-4">
                    Can I pursue M.Sc Nursing after Post Basic B.Sc Nursing?
                  </h3>
                  <ChevronDownIcon
                    className={`w-6 h-6 text-[#7cb983] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === 5 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === 5 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      Yes, after completing Post Basic B.Sc Nursing and one year of clinical experience, you are eligible to pursue M.Sc Nursing in various specialities such as Medical-Surgical Nursing, Paediatric Nursing, Psychiatric Nursing, Community Health Nursing, OBG Nursing, and more.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] pr-4">
                    Is the Post Basic B.Sc Nursing degree recognised internationally?
                  </h3>
                  <ChevronDownIcon
                    className={`w-6 h-6 text-[#7cb983] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === 6 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === 6 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      Yes, Post Basic B.Sc Nursing from INC-approved colleges is recognised internationally. Graduates can apply for nursing positions in UK, USA, Australia, Canada, and Gulf countries after clearing their respective licensing examinations like NCLEX-RN, CBT, etc.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 7 */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 7 ? null : 7)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] pr-4">
                    Does the college provide hostel accommodation?
                  </h3>
                  <ChevronDownIcon
                    className={`w-6 h-6 text-[#7cb983] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === 7 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === 7 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      Yes, JKKN College of Nursing provides separate, well-furnished hostel facilities for both male and female Learners with 24/7 security, mess, Wi-Fi connectivity, and recreational areas. Hostel accommodation is optional and available on first-come-first-served basis.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 8 */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 8 ? null : 8)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#006837] pr-4">
                    Can I continue working while pursuing Post Basic B.Sc Nursing?
                  </h3>
                  <ChevronDownIcon
                    className={`w-6 h-6 text-[#7cb983] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === 8 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === 8 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      While Post Basic B.Sc Nursing is a full-time programme, the schedule is designed considering that most candidates are working nurses. However, regular attendance is mandatory as per INC norms. Many employers support nurses pursuing higher education with flexible duty arrangements.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#7cb983] to-[#6ba872]">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Upgrade Your Nursing Career?
              </h2>
              <p className="text-lg md:text-xl text-white mb-10">
                Take the next step in your professional journey. Transform your GNM diploma into a B.Sc degree and unlock new opportunities in healthcare.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-white text-[#006837] hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  Apply Now
                  <span>→</span>
                </a>
                <button className="border-2 border-white text-white hover:bg-white hover:text-[#006837] font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section>

     
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
