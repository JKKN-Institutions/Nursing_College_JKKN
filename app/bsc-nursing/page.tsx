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
      {/* Schemas moved to layout.tsx — single source of truth */}
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
                  BSc Nursing in Tamil Nadu —{" "}
                  <span className="text-[#7cb983]">JKKN College of Nursing</span>
                </h1>

                <p className="text-sm text-gray-300 mb-4">Last updated: April 11, 2026</p>

                <div className="bg-white/10 border-l-4 border-[#7cb983] p-4 mb-8 rounded-r-lg course-overview">
                  <p className="font-semibold text-[#7cb983] mb-1">Quick Summary</p>
                  <p className="text-gray-200 text-sm">JKKN College of Nursing is one of the best BSc Nursing colleges in Tamil Nadu, offering a 4-year INC-approved program affiliated to Tamil Nadu Dr. M.G.R. Medical University. Students receive clinical training at the attached 500+ bed multi-specialty teaching hospital from Year 1. 97% placement rate with international opportunities in NHS UK, UAE, and Singapore. Annual fee: ₹95,000.</p>
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
                  alt="BSc Nursing students in clinical training at JKKN College of Nursing, Tamil Nadu"
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
                    alt="BSc Nursing patient care training at 500-bed teaching hospital — JKKN College, Komarapalayam"
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

                {/* Snippet-ready definition paragraph — AEO-02 */}
                <p className="text-lg text-gray-800 font-medium bg-green-50 border-l-4 border-[#006837] p-4 rounded-r-lg mb-6">
                  <strong>B.Sc Nursing</strong> is a 4-year undergraduate degree program that trains students to become registered nurses. In Tamil Nadu, over 190 colleges offer this INC-approved course affiliated to TNMGRMU. Eligibility requires 10+2 with PCB (45% minimum). Average starting salary: ₹3.5–4.5 LPA domestic, ₹15–25 LPA international (NHS UK, UAE).
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  JKKN College of Nursing is one of the <Link href="/" className="text-[#006837] font-semibold hover:underline">best nursing colleges in Tamil Nadu</Link>, offering a comprehensive 4-year undergraduate programme designed to develop skilled, compassionate, and ethical nursing professionals. The curriculum integrates theoretical knowledge with extensive clinical practice at our attached <Link href="/clinical-hospital" className="text-[#006837] font-semibold hover:underline">500+ bed teaching hospital</Link>. With a 97% placement rate including international opportunities, JKKN provides the strongest foundation for a nursing career.
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
                    <span className="text-gray-700"><Link href="/faculty-details" className="hover:text-[#006837] hover:underline">Experienced Learning Facilitators</Link></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><Link href="/laboratories" className="hover:text-[#006837] hover:underline">State-of-the-Art Simulation Lab</Link></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700">30+ Hospital Tie-ups</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><Link href="/placement" className="hover:text-[#006837] hover:underline">Excellent Placement Record</Link></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><Link href="/hostel" className="hover:text-[#006837] hover:underline">Hostel</Link> & <Link href="/transport" className="hover:text-[#006837] hover:underline">Transport</Link> Facilities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why JKKN — Best BSc Nursing College Section (CON-01 + SEO-11 + AEO-01) */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wider mb-3">
                WHY CHOOSE US
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                Why JKKN is Among the Best BSc Nursing Colleges in Tamil Nadu
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                JKKN College of Nursing combines clinical excellence, affordable education, and international career pathways — making it a top choice for BSc Nursing in Tamil Nadu.
              </p>
            </div>

            {/* USP Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-6 text-white">
                <div className="text-3xl font-bold text-[#7cb983] mb-2">500+</div>
                <h3 className="text-lg font-bold mb-2">Bed Teaching Hospital</h3>
                <p className="text-gray-200 text-sm">Hands-on <Link href="/clinical-hospital" className="text-[#7cb983] hover:underline">clinical training</Link> from Year 1 across Medicine, Surgery, Pediatrics, Obstetrics, and Psychiatry.</p>
              </div>
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-6 text-white">
                <div className="text-3xl font-bold text-[#7cb983] mb-2">97%</div>
                <h3 className="text-lg font-bold mb-2">Placement Rate</h3>
                <p className="text-gray-200 text-sm">50+ recruiters including Apollo, Fortis, KIMS. Check our <Link href="/placement" className="text-[#7cb983] hover:underline">placement record</Link>.</p>
              </div>
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-6 text-white">
                <div className="text-3xl font-bold text-[#7cb983] mb-2">₹95K</div>
                <h3 className="text-lg font-bold mb-2">Annual Fee</h3>
                <p className="text-gray-200 text-sm">Most affordable among top nursing colleges. <Link href="/fee-structure" className="text-[#7cb983] hover:underline">Merit scholarships</Link> up to 75% available.</p>
              </div>
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-6 text-white">
                <div className="text-3xl font-bold text-[#7cb983] mb-2">NHS UK</div>
                <h3 className="text-lg font-bold mb-2">International Placements</h3>
                <p className="text-gray-200 text-sm">NCLEX, OET, IELTS coaching. Alumni at NHS UK, Cleveland Clinic Abu Dhabi, Singapore hospitals.</p>
              </div>
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-6 text-white">
                <div className="text-3xl font-bold text-[#7cb983] mb-2">INC</div>
                <h3 className="text-lg font-bold mb-2">Approved & Accredited</h3>
                <p className="text-gray-200 text-sm">INC approved, <Link href="/naac" className="text-[#7cb983] hover:underline">NAAC accredited</Link>, affiliated to Tamil Nadu Dr. M.G.R. Medical University.</p>
              </div>
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] rounded-xl p-6 text-white">
                <div className="text-3xl font-bold text-[#7cb983] mb-2">Year 1</div>
                <h3 className="text-lg font-bold mb-2">Clinical Exposure</h3>
                <p className="text-gray-200 text-sm">Unlike many colleges, JKKN starts <Link href="/clinical-hospital" className="text-[#7cb983] hover:underline">hospital training</Link> from the first year itself.</p>
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

            {/* AEO-04: Eligibility Summary Table */}
            <div className="overflow-x-auto mb-12">
              <table className="w-full max-w-2xl mx-auto border-collapse border border-gray-300 text-left">
                <thead>
                  <tr className="bg-[#006837] text-white">
                    <th className="border border-gray-300 p-3">Criteria</th>
                    <th className="border border-gray-300 p-3">Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white"><td className="border border-gray-300 p-3 font-medium">Education</td><td className="border border-gray-300 p-3">10+2 with Physics, Chemistry, Biology</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 p-3 font-medium">Minimum Marks</td><td className="border border-gray-300 p-3">45% aggregate (40% for SC/ST/OBC)</td></tr>
                  <tr className="bg-white"><td className="border border-gray-300 p-3 font-medium">Age Limit</td><td className="border border-gray-300 p-3">17–35 years as on 31st December</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 p-3 font-medium">Entrance Exam</td><td className="border border-gray-300 p-3">NEET not required — Merit-based admission</td></tr>
                  <tr className="bg-white"><td className="border border-gray-300 p-3 font-medium">Language</td><td className="border border-gray-300 p-3">English as compulsory subject in 10+2</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 p-3 font-medium">Nationality</td><td className="border border-gray-300 p-3">Indian / NRI / PIO candidates</td></tr>
                  <tr className="bg-white"><td className="border border-gray-300 p-3 font-medium">Male Candidates</td><td className="border border-gray-300 p-3">10% of intake (6 seats) per INC guidelines</td></tr>
                </tbody>
              </table>
              <p className="text-center mt-4"><Link href="/eligibility-criteria" className="text-[#006837] font-semibold hover:underline">View detailed eligibility criteria →</Link></p>
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
                      NEET-UG is not mandatory. Admission is merit-based on 10+2 marks.
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
              <Link href="/library" className="bg-[#7cb983]/25 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 block">
                <h3 className="text-3xl font-bold text-[#006837] mb-4">Digital Library</h3>
                <h4 className="text-xl font-bold text-[#7cb983] mb-3">Digital Library</h4>
                <p className="text-gray-700">
                  Access to 10,000+ e-journals and digital resources
                </p>
              </Link>

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
              <Link href="/hostel" className="bg-[#7cb983]/15 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 block">
                <h3 className="text-3xl font-bold text-[#006837] mb-4">Hostel</h3>
                <h4 className="text-xl font-bold text-[#7cb983] mb-3">Hostel Accommodation</h4>
                <p className="text-gray-700">
                  Safe and well-furnished hostel facilities
                </p>
              </Link>
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
                  alt="Career paths after BSc Nursing — Hospital, International, Defence nursing opportunities"
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
                      Teach future nurses at nursing colleges after completing <Link href="/msc-nursing" className="text-[#006837] hover:underline">M.Sc Nursing</Link>.
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

        {/* Salary & Career Scope Section — CON-04 + AEO-05 */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wider mb-3">
                SALARY & SCOPE
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                Salary After B.Sc Nursing in India and Abroad
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                B.Sc Nursing graduates enjoy competitive salaries across government, private, and international healthcare settings.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Salary Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-left text-sm">
                  <thead>
                    <tr className="bg-[#006837] text-white">
                      <th className="border border-gray-300 p-3">Role</th>
                      <th className="border border-gray-300 p-3">Salary (Per Annum)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white"><td className="border border-gray-300 p-3">Staff Nurse (Private Hospital)</td><td className="border border-gray-300 p-3">₹3.0 – 4.5 LPA</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-300 p-3">Staff Nurse (Government)</td><td className="border border-gray-300 p-3">₹3.5 – 5.5 LPA</td></tr>
                    <tr className="bg-white"><td className="border border-gray-300 p-3">ICU / Critical Care Nurse</td><td className="border border-gray-300 p-3">₹4.0 – 6.0 LPA</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-300 p-3">Nursing Supervisor</td><td className="border border-gray-300 p-3">₹5.0 – 8.0 LPA</td></tr>
                    <tr className="bg-white"><td className="border border-gray-300 p-3">Nursing Educator (after M.Sc)</td><td className="border border-gray-300 p-3">₹4.5 – 7.0 LPA</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-300 p-3">International Nurse (NHS UK)</td><td className="border border-gray-300 p-3 font-bold text-[#006837]">₹15 – 25 LPA</td></tr>
                    <tr className="bg-white"><td className="border border-gray-300 p-3">International Nurse (UAE/Singapore)</td><td className="border border-gray-300 p-3 font-bold text-[#006837]">₹12 – 20 LPA</td></tr>
                    <tr className="bg-gray-50"><td className="border border-gray-300 p-3">Defence Services Nurse</td><td className="border border-gray-300 p-3">₹4.0 – 6.0 LPA + Benefits</td></tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-2">Salary data based on industry averages (2025–26). Actual compensation varies by employer and location.</p>
              </div>

              {/* Career Growth Path */}
              <div>
                <h3 className="text-2xl font-bold text-[#006837] mb-6">Career Growth After B.Sc Nursing</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-[#7cb983] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <div><p className="font-semibold text-[#006837]">Years 0–2: Staff Nurse</p><p className="text-gray-600 text-sm">Start at hospitals, clinics, or community health centres. Earn ₹3–4.5 LPA.</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-[#7cb983] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <div><p className="font-semibold text-[#006837]">Years 2–5: Specialization</p><p className="text-gray-600 text-sm">Pursue <Link href="/msc-nursing" className="text-[#006837] hover:underline">M.Sc Nursing</Link> or specialization in ICU, OT, or Critical Care. Earn ₹5–7 LPA.</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-[#7cb983] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <div><p className="font-semibold text-[#006837]">Years 5–10: Leadership or International</p><p className="text-gray-600 text-sm">Become Nursing Supervisor, Educator, or move to NHS UK/UAE for ₹15–25 LPA.</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-[#7cb983] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <div><p className="font-semibold text-[#006837]">Years 10+: Senior Leadership</p><p className="text-gray-600 text-sm">Chief Nursing Officer, Hospital Administrator, or PhD in Nursing. Earn ₹10–15+ LPA.</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BSc Nursing vs GNM Comparison — CON-11 */}
        <section className="py-16 md:py-24 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wider mb-3">
                COURSE COMPARISON
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                B.Sc Nursing vs Post Basic B.Sc Nursing
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Understanding the differences helps you choose the right nursing program for your career goals.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-left text-sm">
                <thead>
                  <tr className="bg-[#006837] text-white">
                    <th className="border border-gray-300 p-3">Feature</th>
                    <th className="border border-gray-300 p-3">B.Sc Nursing</th>
                    <th className="border border-gray-300 p-3"><Link href="/pbsc-nursing" className="text-white hover:underline">Post Basic B.Sc</Link></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white"><td className="border border-gray-300 p-3 font-medium">Duration</td><td className="border border-gray-300 p-3 font-bold text-[#006837]">4 Years</td><td className="border border-gray-300 p-3">2 Years</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 p-3 font-medium">Qualification</td><td className="border border-gray-300 p-3 font-bold text-[#006837]">Degree (B.Sc)</td><td className="border border-gray-300 p-3">Degree (B.Sc)</td></tr>
                  <tr className="bg-white"><td className="border border-gray-300 p-3 font-medium">Eligibility</td><td className="border border-gray-300 p-3">10+2 with PCB (45%)</td><td className="border border-gray-300 p-3">GNM + Experience</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 p-3 font-medium">Starting Salary</td><td className="border border-gray-300 p-3 font-bold text-[#006837]">₹3.5–4.5 LPA</td><td className="border border-gray-300 p-3">₹3.5–4.5 LPA</td></tr>
                  <tr className="bg-white"><td className="border border-gray-300 p-3 font-medium">M.Sc Eligibility</td><td className="border border-gray-300 p-3 font-bold text-[#006837]">Yes — Direct</td><td className="border border-gray-300 p-3">Yes — Direct</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 p-3 font-medium">International Jobs</td><td className="border border-gray-300 p-3 font-bold text-[#006837]">Eligible (NCLEX/OET)</td><td className="border border-gray-300 p-3">Eligible</td></tr>
                  <tr className="bg-white"><td className="border border-gray-300 p-3 font-medium">Government Jobs</td><td className="border border-gray-300 p-3 font-bold text-[#006837]">All posts eligible</td><td className="border border-gray-300 p-3">All posts eligible</td></tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-green-50 border-l-4 border-[#006837] p-4 rounded-r-lg max-w-3xl mx-auto">
              <p className="text-gray-800"><strong>Recommendation:</strong> B.Sc Nursing is ideal for 10+2 students seeking a full degree with international career options and direct M.Sc eligibility. Post Basic B.Sc is designed for GNM diploma holders to upgrade their qualification. JKKN College offers both programs — explore <Link href="/msc-nursing" className="text-[#006837] font-semibold hover:underline">M.Sc Nursing</Link> and <Link href="/pbsc-nursing" className="text-[#006837] font-semibold hover:underline">Post Basic B.Sc Nursing</Link> as well.</p>
            </div>
          </div>
        </section>

        {/* Male Nursing Section — CON-07 */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wider mb-3">
                  INCLUSIVE EDUCATION
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                  B.Sc Nursing for Male Students at JKKN
                </h2>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                JKKN College of Nursing welcomes male students to the B.Sc Nursing program. As per Indian Nursing Council (INC) guidelines, 10% of total intake — 6 seats out of 60 — is reserved for male candidates. Male nursing is a rapidly growing field with excellent career prospects in ICU, Emergency Care, Defence Nursing, and International Placements.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-[#006837] text-white rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-[#7cb983] mb-1">6 Seats</div>
                  <p className="text-sm">Reserved for male students per INC norms</p>
                </div>
                <div className="bg-[#006837] text-white rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-[#7cb983] mb-1">Separate</div>
                  <p className="text-sm">Hostel facilities for male nursing students</p>
                </div>
                <div className="bg-[#006837] text-white rounded-xl p-5 text-center">
                  <div className="text-2xl font-bold text-[#7cb983] mb-1">High Demand</div>
                  <p className="text-sm">ICU, Emergency, Defence, International sectors</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Male nurses are especially sought after in ICU, Psychiatry, Orthopaedics, and Emergency departments. International demand is strong — the UK&apos;s NHS and UAE hospitals actively recruit male nurses. JKKN provides equal training, clinical exposure, and placement support to all students regardless of gender. Apply through our <Link href="/admissions" className="text-[#006837] font-semibold hover:underline">admissions portal</Link>.
              </p>
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
                    Visit the official <Link href="/admissions" className="text-[#006837] font-semibold hover:underline">admissions page</Link> and complete the online application form with accurate details.
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
                    Upload required documents including 10+2 mark sheets, community certificate, ID proof, and passport-size photographs.
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
                    Pay the prescribed admission fee to confirm your seat. <Link href="/fee-structure" className="text-[#006837] font-semibold hover:underline">View fee structure</Link>. Education loan and <Link href="/scholarship" className="text-[#006837] font-semibold hover:underline">scholarship</Link> assistance available.
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

        {/* FAQ Section — Expanded to 20 Questions (AEO-06) */}
        <section className="py-16 md:py-24 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] font-semibold text-sm uppercase tracking-wider mb-3">
                HAVE QUESTIONS?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-4">
                Frequently Asked Questions About BSc Nursing at JKKN
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Find answers to the most common questions about B.Sc Nursing admission, fees, eligibility, placements, and career scope at JKKN College of Nursing.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                { q: "What is the B.Sc Nursing fee at JKKN College?", a: "The annual fee is ₹95,000 per year for the 4-year program. This includes tuition, lab, clinical training, and exam fees. Hostel accommodation costs ₹60,000–75,000 per year additionally. Merit scholarships up to 75% fee waiver are available for academically outstanding students." },
                { q: "Is NEET required for B.Sc Nursing at JKKN?", a: "No, NEET is not required for B.Sc Nursing admission at JKKN College. Admission is completely merit-based on 10+2 marks with Physics, Chemistry, and Biology. Minimum 45% aggregate marks required (40% for SC/ST candidates). Apply online at admission.jkkn.ac.in." },
                { q: "What is the duration of B.Sc Nursing at JKKN?", a: "The B.Sc Nursing programme is a 4-year full-time undergraduate course. This includes 3.5 years of academic study combining theoretical classes and clinical rotations, followed by a 6-month mandatory internship at the attached 500+ bed teaching hospital." },
                { q: "What are the career options after B.Sc Nursing from JKKN?", a: "Graduates can work as Staff Nurses, ICU Specialists, Community Health Nurses, Nursing Supervisors, or Nursing Educators (after M.Sc). International opportunities include NHS UK, UAE, and Singapore hospitals. Domestic salary starts at ₹3.5–4.5 LPA, while international positions offer ₹15–25 LPA." },
                { q: "Does JKKN provide hospital training for BSc Nursing students?", a: "Yes, JKKN has an attached 500+ bed multi-specialty teaching hospital where students gain real patient interactions from Year 1. Clinical rotations cover Medicine, Surgery, Pediatrics, Obstetrics, and Psychiatry departments. Advanced simulation labs complement hands-on clinical training." },
                { q: "What are the eligibility criteria for B.Sc Nursing at JKKN?", a: "Candidates must have passed 10+2 with Physics, Chemistry, and Biology with minimum 45% aggregate marks (40% for reserved categories). Age must be between 17–35 years. English as compulsory subject in 10+2. NEET is not required. Indian nationals and NRI/PIO candidates are eligible." },
                { q: "Is JKKN College of Nursing approved by INC?", a: "Yes, JKKN College of Nursing (Sresakthimayeil Institute of Nursing and Research) is approved by the Indian Nursing Council (INC), New Delhi. The college is affiliated to Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU), Chennai, and is NAAC accredited." },
                { q: "Does JKKN College provide hostel for nursing students?", a: "Yes, separate well-furnished hostel facilities are available for both male and female students with 24/7 security, mess facility, Wi-Fi connectivity, and recreational areas. Hostel fee is ₹60,000–75,000 per year." },
                { q: "Can I pursue M.Sc Nursing after B.Sc Nursing from JKKN?", a: "Yes, after completing B.Sc Nursing and one year of clinical experience, you can pursue M.Sc Nursing at JKKN in specializations like Medical-Surgical, Child Health, OBG, Psychiatric, or Community Health Nursing. PhD in Nursing is also available." },
                { q: "What is the salary after B.Sc Nursing in India?", a: "Starting salary for BSc Nursing graduates ranges from ₹3.5–4.5 LPA in India. Government hospital nurses earn ₹25,000–45,000 per month. International nurses at NHS UK and UAE hospitals earn ₹15–25 LPA. With experience, senior nurses earn ₹6–8 LPA domestically." },
                { q: "Is B.Sc Nursing open for male students at JKKN?", a: "Yes, male students can pursue B.Sc Nursing at JKKN College. As per INC guidelines, 10% of total intake (6 seats out of 60) is reserved for male candidates. Separate hostel facilities are available. Male nurses are in high demand in ICU, Emergency, and Defence sectors." },
                { q: "What is the difference between B.Sc Nursing and GNM?", a: "B.Sc Nursing is a 4-year degree program while GNM is a 3-year diploma. B.Sc Nursing graduates earn higher salaries (₹3.5–4.5 LPA vs ₹2.5–3 LPA), qualify for international nursing positions, and can directly pursue M.Sc Nursing. JKKN offers B.Sc Nursing for stronger career prospects." },
                { q: "What are the placement statistics at JKKN College of Nursing?", a: "JKKN College of Nursing has a 97% placement rate with 50+ recruiting partners including Apollo Hospitals, Fortis, KIMS, and international employers like NHS UK, Cleveland Clinic Abu Dhabi, and Singapore hospitals. Average CTC is ₹4.5 LPA." },
                { q: "Which university is JKKN College of Nursing affiliated to?", a: "JKKN College of Nursing is affiliated to Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU), Chennai. TNMGRMU is the premier medical university in Tamil Nadu that governs all medical, dental, and nursing education in the state." },
                { q: "Does JKKN provide international nursing placement support?", a: "Yes, JKKN provides comprehensive international placement support including NCLEX preparation for USA, OET and IELTS coaching for UK and Australia, Prometric exam training for Gulf countries, and complete visa assistance. Alumni currently work at NHS UK, Cleveland Clinic Abu Dhabi, and Singapore hospitals." },
                { q: "What facilities are available at JKKN College of Nursing?", a: "JKKN offers advanced simulation labs, anatomy and nursing skills labs, a digital library with 10,000+ e-journals, computer lab with health informatics software, a 500+ bed teaching hospital, separate hostels for male and female students, transport, sports facilities, Wi-Fi campus, smart classrooms, and a food court." },
                { q: "Is there a scholarship for B.Sc Nursing at JKKN?", a: "Yes, JKKN offers merit-based scholarships with up to 75% fee waiver for academically outstanding students. Government scholarships for SC/ST/OBC and minority students are also facilitated through the college. Education loan assistance from partner banks is available for eligible students." },
                { q: "What is the B.Sc Nursing syllabus at JKKN?", a: "The INC-approved syllabus covers Anatomy, Physiology, Microbiology, and Fundamentals of Nursing in Year 1. Years 2–3 focus on Medical-Surgical Nursing, Community Health, Pediatrics, and OBG Nursing. Year 4 covers Nursing Management, Research, and a mandatory 6-month internship. Clinical rotations begin from Year 1." },
                { q: "How to apply for B.Sc Nursing at JKKN College?", a: "Apply online at admission.jkkn.ac.in. Submit your 10+2 mark sheets, ID proof, community certificate, and passport-size photographs. Selection is based on 10+2 merit. Attend the counselling session for seat allotment, pay the admission fee, and join the orientation programme. Admissions are open from April to August 2026." },
                { q: "What makes JKKN one of the best BSc Nursing colleges in Tamil Nadu?", a: "JKKN stands out with its 500+ bed teaching hospital providing Year 1 clinical training, 97% placement rate, affordable ₹95,000 annual fees, international placement support for NHS UK, UAE, and Singapore, INC approval, NAAC accreditation, and TNMGRMU affiliation. The campus is conveniently located on NH-544 near Erode and Salem." },
              ].map((faq, index) => (
                <details key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#FBFBEE] transition-colors">
                    <h3 className="text-lg md:text-xl font-bold text-[#006837]">
                      {faq.q}
                    </h3>
                    <svg className="w-6 h-6 text-[#7cb983] transform group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Location Links Section — City Landing Pages */}
        <section className="py-12 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-[#006837] mb-4">BSc Nursing Near You</h2>
              <p className="text-gray-600 mb-6">JKKN College of Nursing is located on NH-544, easily accessible from major Tamil Nadu cities. Explore our city-specific pages:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/erode" className="bg-white border border-[#006837] text-[#006837] px-4 py-2 rounded-full hover:bg-[#006837] hover:text-white transition-colors text-sm font-medium">BSc Nursing near Erode</Link>
                <Link href="/salem" className="bg-white border border-[#006837] text-[#006837] px-4 py-2 rounded-full hover:bg-[#006837] hover:text-white transition-colors text-sm font-medium">BSc Nursing in Salem</Link>
                <Link href="/namakkal" className="bg-white border border-[#006837] text-[#006837] px-4 py-2 rounded-full hover:bg-[#006837] hover:text-white transition-colors text-sm font-medium">BSc Nursing in Namakkal</Link>
                <Link href="/coimbatore" className="bg-white border border-[#006837] text-[#006837] px-4 py-2 rounded-full hover:bg-[#006837] hover:text-white transition-colors text-sm font-medium">BSc Nursing near Coimbatore</Link>
                <Link href="/tiruppur" className="bg-white border border-[#006837] text-[#006837] px-4 py-2 rounded-full hover:bg-[#006837] hover:text-white transition-colors text-sm font-medium">BSc Nursing near Tiruppur</Link>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <Link href="/about" className="text-[#006837] hover:underline text-sm">About JKKN</Link>
                <span className="text-gray-300">|</span>
                <Link href="/gallery" className="text-[#006837] hover:underline text-sm">Campus Gallery</Link>
                <span className="text-gray-300">|</span>
                <Link href="/sports" className="text-[#006837] hover:underline text-sm">Sports Facilities</Link>
                <span className="text-gray-300">|</span>
                <Link href="/wifi" className="text-[#006837] hover:underline text-sm">Wi-Fi Campus</Link>
                <span className="text-gray-300">|</span>
                <Link href="/contact" className="text-[#006837] hover:underline text-sm">Contact Us</Link>
              </div>
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
