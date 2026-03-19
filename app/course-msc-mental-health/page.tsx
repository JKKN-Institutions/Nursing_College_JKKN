"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Image from "next/image";
import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  Building2,
  Award,
  Users,
  Calendar,
  Lightbulb,
  Hospital,
  GraduationCap,
  Shield,
  Briefcase,
  Heart,
  Monitor,
  BookMarked,
  FileText,
  ClipboardList,
  BookOpen,
  Activity,
  School,
  FlaskConical,
  Stethoscope,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function MScMentalHealthNursing() {
  const [activeTab, setActiveTab] = useState<
    "year-1" | "year-2" | "clinical-practicum"
  >("year-1");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Header />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
          { name: "M.Sc Nursing", url: "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing" },
          { name: "Psychiatric (Mental Health) Nursing", url: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-mental-health" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "M.Sc Psychiatric (Mental Health) Nursing",
              "description": "A 2-year postgraduate nursing specialization in Psychiatric and Mental Health Nursing, approved by the Indian Nursing Council (INC) and affiliated to Tamil Nadu Dr. MGR Medical University. Covers therapeutic interventions, community mental health, psychiatric rehabilitation, and de-addiction nursing.",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "Sresakthimayeil Institute of Nursing and Research (Sresakthimayeil Institute of Nursing and Research)",
                "url": "https://nursing.sresakthimayeil.jkkn.ac.in/"
              },
              "timeRequired": "P2Y",
              "educationalCredentialAwarded": "M.Sc Nursing (Mental Health Nursing)",
              "coursePrerequisites": "B.Sc Nursing or Post Basic B.Sc Nursing with minimum 55% marks and 1 year clinical experience",
              "availableLanguage": "English",
              "url": "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-mental-health"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the scope of M.Sc Nursing in Mental Health Nursing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "M.Sc Nursing in Mental Health Nursing offers excellent career scope given India's growing mental health needs. Graduates can work as psychiatric nursing educators in nursing colleges, clinical nurse specialists in psychiatric hospitals, community mental health nurses under DMHP, de-addiction center coordinators, mental health researchers, and psychiatric nursing administrators. The National Mental Health Policy and Mental Healthcare Act 2017 have created numerous opportunities in both government and private sectors."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is prior experience in psychiatry required for admission?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, prior experience specifically in psychiatry is not mandatory for admission. Candidates need minimum 1 year of clinical nursing experience in any area after completing B.Sc Nursing. However, candidates with interest or experience in mental health settings may have an advantage during the selection process. The program provides comprehensive psychiatric nursing training from fundamentals to advanced practice."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of psychiatric facilities are available for clinical training?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sresakthimayeil Institute of Nursing and Research has affiliations with government psychiatric hospitals, private mental health centers, de-addiction centers, and community mental health programs. Clinical rotations include acute psychiatric wards, outpatient psychiatric clinics, child and adolescent psychiatry units, geriatric psychiatry, forensic psychiatry, rehabilitation centers, and District Mental Health Programme facilities."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I pursue Ph.D. after completing M.Sc in Mental Health Nursing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, M.Sc Nursing in Mental Health Nursing graduates are eligible for Ph.D. programs in Nursing. This opens opportunities for advanced research careers, senior academic positions as Professors, Principal, or Dean positions in nursing colleges. Several universities in India offer Ph.D. in Nursing with research focus on psychiatric and mental health nursing areas."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What therapeutic skills are taught in the M.Sc Mental Health Nursing program?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The program covers therapeutic communication techniques, individual psychotherapy, group therapy facilitation, family therapy principles, cognitive behavioral therapy basics, crisis intervention, suicide prevention, motivational interviewing for substance abuse, relaxation techniques, art and music therapy basics, and psychiatric rehabilitation techniques. Learners practice these skills through simulation exercises and supervised clinical practice."
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  M.Sc Nursing{" "}
                  <span className="text-[#7cb983]">
                    Mental Health Nursing
                  </span>
                </h1>

                <p className="text-sm text-gray-300 mb-4">Last updated: March 19, 2026</p>

                <div className="bg-white/10 border-l-4 border-[#7cb983] p-4 mb-6 rounded-r-lg">
                  <p className="font-semibold text-[#7cb983] mb-1">Quick Summary</p>
                  <p className="text-gray-200 text-sm">JKKN College of Nursing offers a 2-year M.Sc Nursing specialization in Mental Health (Psychiatric) Nursing, approved by INC and affiliated to Tamil Nadu Dr. M.G.R. Medical University. Graduates develop expertise in psychiatric assessment, therapeutic counseling, community mental health promotion, and psychiatric rehabilitation at the 500+ bed teaching hospital.</p>
                </div>

                <p className="text-xl md:text-2xl text-gray-200 mb-6">
                  Postgraduate Program in Psychiatric Nursing Specialization
                </p>
                <p className="text-base md:text-lg mb-8 text-gray-100 leading-relaxed">
                  Shape the future of mental healthcare with specialized expertise in
                  psychiatric nursing. This INC-approved program combines advanced
                  theoretical knowledge with comprehensive clinical training in therapeutic
                  interventions, community mental health, and psychiatric rehabilitation.
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>INC Approved</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>NAAC Accredited</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full">
                    <Clock className="w-5 h-5" />
                    <span>2 Years Full-Time</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full">
                    <Heart className="w-5 h-5" />
                    <span>Psychiatric Specialization</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-[#7cb983] hover:bg-[#6ba872] text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2">
                    Apply Now
                    <span className="text-xl">→</span>
                  </a>
                  <button
                    onClick={() => {
                      document.getElementById('curriculum-structure')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="border-2 border-white hover:bg-white hover:text-[#006837] text-white px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    View Curriculum
                  </button>
                </div>
              </div>

              {/* Right Content - Video/Image */}
              <div className="relative">
                <div className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] h-[220px] sm:h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/Mental-Health-Nursing-Hero-Banner-Image.webp"
                    alt="Mental Health Nursing Training"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Placement Badge */}
                <div className="absolute bottom-2 left-2 md:-bottom-6 md:-left-6 bg-[#7cb983] text-white px-4 py-3 md:px-8 md:py-6 rounded-xl md:rounded-2xl shadow-xl">
                  <div className="text-2xl md:text-4xl font-bold">100%</div>
                  <div className="text-xs md:text-sm font-medium">Placement Assistance</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <p className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">
                  19+
                </p>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <p className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">
                  5
                </p>
                <p className="text-gray-600">Seats Available</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <p className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">
                  1:5
                </p>
                <p className="text-gray-600">Facilitator-Learner Ratio</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <p className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">
                  1000+
                </p>
                <p className="text-gray-600">Clinical Training Hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                Program Overview
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                A comprehensive postgraduate nursing education focused on mental health care,
                psychiatric assessment, and therapeutic interventions
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
                <p>
                  The Master of Science in Nursing with specialization in Mental Health Nursing
                  at Sresakthimayeil Institute of Nursing and Research is a two-year, full-time postgraduate program
                  designed to prepare registered nurses for advanced roles in psychiatric
                  nursing practice, education, research, and mental health administration.
                </p>
                <p>
                  This program provides comprehensive knowledge of psychiatric nursing concepts,
                  mental health assessment, therapeutic communication, psychopharmacology, and
                  evidence-based psychiatric interventions. Learners develop expertise in managing
                  diverse mental health conditions including mood disorders, anxiety disorders,
                  schizophrenia, substance use disorders, and personality disorders across various
                  clinical settings.
                </p>
                <p>
                  Our program emphasizes the development of therapeutic relationships, crisis
                  intervention skills, and community mental health competencies essential for
                  contemporary psychiatric nursing practice. Through a combination of theoretical
                  instruction, simulation laboratory practice, and extensive clinical rotations in
                  psychiatric facilities, learners gain the competencies needed to excel as nurse
                  educators, clinical specialists, and mental health administrators.
                </p>
                <p>
                  The curriculum is aligned with Indian Nursing Council (INC) guidelines and Mental
                  Healthcare Act 2017 provisions, ensuring graduates are well-prepared to address
                  India&apos;s growing mental health needs. Graduates are equipped for careers in
                  psychiatric hospitals, community mental health centers, academic institutions, de-addiction centers, and healthcare organizations.
                </p>
              </div>

              {/* Quick Information Sidebar */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 h-fit">
                <h3 className="text-2xl font-bold text-[#006837] mb-6">
                  Quick Information
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-blue-50 rounded-lg p-3 h-fit">
                      <Clock className="w-6 h-6 text-[#006837]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">
                        Duration
                      </p>
                      <p className="text-gray-700">2 Years</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-50 rounded-lg p-3 h-fit">
                      <Building2 className="w-6 h-6 text-[#006837]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">
                        Affiliation
                      </p>
                      <p className="text-gray-700">
                        The Tamil Nadu Dr. M.G.R. Medical University
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-blue-50 rounded-lg p-3 h-fit">
                      <Award className="w-6 h-6 text-[#006837]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">
                        Approval
                      </p>
                      <p className="text-gray-700">
                        Indian Nursing Council (INC)
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-50 rounded-lg p-3 h-fit">
                      <Award className="w-6 h-6 text-[#006837]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">
                        Recognized
                      </p>
                      <p className="text-gray-700">
                        TNNMC
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-50 rounded-lg p-3 h-fit">
                      <Users className="w-6 h-6 text-[#006837]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Intake</p>
                      <p className="text-gray-700">5 Seats per Year</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-50 rounded-lg p-3 h-fit">
                      <Calendar className="w-6 h-6 text-[#006837]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">
                        Academic Session
                      </p>
                      <p className="text-gray-700">October - September</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose This Program */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                Why Choose This Program?
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Discover the unique advantages that set our M.Sc Mental Health Nursing program
                apart
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-[#006837]" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Evidence-Based Practice
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Engage with the latest psychiatric research and develop strong analytical skills
                  through dissertation work and published studies in mental health nursing.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Hospital className="w-8 h-8 text-[#006837]" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Psychiatric Hospital Affiliations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Access to leading psychiatric hospitals and mental health centers for comprehensive
                  clinical training with diverse patient populations.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-[#006837]" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Expert Learning Facilitators
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn from experienced psychiatric nursing specialists with extensive clinical
                  and academic backgrounds in mental health care.
                </p>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-[#006837]" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Therapeutic Skills Training
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive training in individual and group psychotherapy, crisis intervention,
                  and therapeutic communication techniques.
                </p>
              </div>

              {/* Feature Card 5 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-[#006837]" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  High Demand Career Field
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Growing demand for mental health professionals with excellent placement
                  opportunities in hospitals, academic institutions, and community mental health
                  programs.
                </p>
              </div>

              {/* Feature Card 6 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-[#006837]" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Community Mental Health Focus
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Training in community-based mental health care, rehabilitation programs, and
                  District Mental Health Programme implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#006837] to-[#002309] text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Eligibility Criteria
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-100">
                Requirements for admission to M.Sc Nursing in Mental Health Nursing program
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Academic Requirements */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/30">
                <div className="flex items-center gap-3 mb-6">
                  <BookMarked className="w-8 h-8 text-[#7cb983]" />
                  <h3 className="text-2xl font-bold text-[#7cb983]">
                    Academic Requirements
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      B.Sc Nursing (4-year) with minimum 55% aggregate marks
                      from a recognized university
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Post Basic B.Sc Nursing with minimum 55% aggregate marks
                      (eligible candidates)
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Degree from institution recognized by INC and respective
                      State Nursing Council
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                    Candidates with B.Sc Nursing and P.B.B.Sc. Nursing (if applicable) are also eligible
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Requirements */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/30">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-[#7cb983]" />
                  <h3 className="text-2xl font-bold text-[#7cb983]">
                    Professional Requirements
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Valid registration with State Nursing Council as Registered
                      Nurse and Registered Midwife (RN/RM)
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Minimum 1 year of clinical nursing experience after B.Sc
                      Nursing completion
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      For Post Basic B.Sc Nursing: 1 year experience after
                      registration as RN/RM
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#7cb983] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Medically fit with no physical or mental health conditions
                      affecting clinical practice
                    </p>
                  </div>
                </div>
              </div>

                         {/* Selection Process */}
                         <div className="bg-[#006837]/40 backdrop-blur-sm rounded-xl p-8 border border-[#7cb983]/30">
                <div className="flex items-center gap-3 mb-6">
                  <ClipboardList className="w-8 h-8 text-[#7cb983]" />
                  <h3 className="text-2xl font-bold text-[#7cb983]">
                    Selection Process
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Entrance examination conducted by the institution
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Merit-based selection considering academic performance and
                      entrance test score
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Personal interview for shortlisted candidates
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                    An eligibility certificate from the university is required for studying M.SC nursing
                    </p>
                  </div>
                </div>
              </div>

              {/* Documents Required */}
              <div className="bg-[#006837]/40 backdrop-blur-sm rounded-xl p-8 border border-[#7cb983]/30">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8 text-[#7cb983]" />
                  <h3 className="text-2xl font-bold text-[#7cb983]">
                    Documents Required
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      B.Sc Nursing or Post Basic B.Sc Nursing degree certificate
                      and mark sheets
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Nursing registration certificate (RN/RM), Eligiblity Certificate from University.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Experience certificate from employer, transfer certificate,
                      and recent passport-size photographs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Structure */}
        <section id="curriculum-structure" className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                Curriculum Structure
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A comprehensive 2-year curriculum aligned with INC guidelines and contemporary
                mental health practice standards
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab("year-1")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === "year-1"
                    ? "bg-[#006837] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Year 1
              </button>
              <button
                onClick={() => setActiveTab("year-2")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === "year-2"
                    ? "bg-[#006837] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Year 2
              </button>
              <button
                onClick={() => setActiveTab("clinical-practicum")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === "clinical-practicum"
                    ? "bg-[#006837] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Clinical Practicum
              </button>
            </div>

            {/* Tab Content */}
            <div>
              {activeTab === "year-1" && (
                <div>
                  <h3 className="text-2xl font-bold text-[#006837] mb-8 text-center">
                    First Year Curriculum
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                      <h4 className="text-xl font-bold text-[#006837] mb-3">
                        Nursing Education
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                        <span className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-[#7cb983]" />
                          Theory: 150 hours
                        </span>
                        <span className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-[#7cb983]" />
                          Practical: 150 hours
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                      <h4 className="text-xl font-bold text-[#006837] mb-3">
                        Advanced Nursing Practice
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                        <span className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-[#7cb983]" />
                          Theory: 150 hours
                        </span>
                        <span className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-[#7cb983]" />
                          Practical: 200 hours
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                      <h4 className="text-xl font-bold text-[#006837] mb-3">
                        Clinical Specialty - Mental Health Nursing I
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                        <span className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-[#7cb983]" />
                          Theory: 150 hours
                        </span>
                        <span className="flex items-center gap-2">
                          <Stethoscope className="w-4 h-4 text-[#7cb983]" />
                          Clinical: 650 hours
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                      <h4 className="text-xl font-bold text-[#006837] mb-3">
                        Nursing Research & Statistics
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                        <span className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-[#7cb983]" />
                          Theory: 150 hours
                        </span>
                        <span className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-[#7cb983]" />
                          Practical: 100 hours
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "year-2" && (
                <div>
                  <h3 className="text-2xl font-bold text-[#006837] mb-8 text-center">
                    Second Year Curriculum
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                      <h4 className="text-xl font-bold text-[#006837] mb-3">
                        Clinical Specialty - Mental Health Nursing II
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                        <span className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-[#7cb983]" />
                          Theory: 150 hours
                        </span>
                        <span className="flex items-center gap-2">
                          <Stethoscope className="w-4 h-4 text-[#7cb983]" />
                          Clinical: 950 hours
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                      <h4 className="text-xl font-bold text-[#006837] mb-3">
                        Nursing Management
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                        <span className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-[#7cb983]" />
                          Theory: 150 hours
                        </span>
                        <span className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-[#7cb983]" />
                          Practical: 150 hours
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                      <h4 className="text-xl font-bold text-[#006837] mb-3">
                        Dissertation
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                        <span className="flex items-center gap-2">
                          <FlaskConical className="w-4 h-4 text-[#7cb983]" />
                          Research: 150 hours
                        </span>
                        <span className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#7cb983]" />
                          Writing: 300 hours
                        </span>
                      </div>
                    </div>

                    
                  </div>
                </div>
              )}

              {activeTab === "clinical-practicum" && (
                <div>
                  <h3 className="text-2xl font-bold text-[#006837] mb-8 text-center">
                    Clinical Practicum Areas
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                      <h4 className="text-xl font-bold text-[#006837] mb-3">
                        Acute Psychiatric Unit
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                        <span className="flex items-center gap-2">
                          <Hospital className="w-4 h-4 text-[#7cb983]" />
                          Inpatient Psychiatric Care
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#7cb983]" />
                          300 hours
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                      <h4 className="text-xl font-bold text-[#006837] mb-3">
                        Outpatient Psychiatric Clinic
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                        <span className="flex items-center gap-2">
                          <Stethoscope className="w-4 h-4 text-[#7cb983]" />
                          Assessment & Follow-up Care
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#7cb983]" />
                          180 hours
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                      <h4 className="text-xl font-bold text-[#006837] mb-3">
                        De-addiction & Rehabilitation Center
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                        <span className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-[#7cb983]" />
                          Substance Abuse Treatment
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#7cb983]" />
                          200 hours
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                      <h4 className="text-xl font-bold text-[#006837] mb-3">
                        Child & Adolescent Psychiatry Unit
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-[#7cb983]" />
                          Pediatric Mental Health
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#7cb983]" />
                          150 hours
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                      <h4 className="text-xl font-bold text-[#006837] mb-3">
                        Community Mental Health Program
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                        <span className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-[#7cb983]" />
                          DMHP & Community Outreach
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#7cb983]" />
                          200 hours
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border-l-4 border-[#7cb983]">
                      <h4 className="text-xl font-bold text-[#006837] mb-3">
                        Geriatric Psychiatry Unit
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-[#7cb983]" />
                          Elderly Mental Health Care
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#7cb983]" />
                          120 hours
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Clinical Training Excellence */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                Clinical Training Excellence
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Comprehensive hands-on experience in diverse psychiatric and mental health
                settings
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left - Video/Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <Image
                  src="/images/Mental-Health-Nursing-Psychiatric-Clinical-Training-Image.webp"
                  alt="Psychiatric Clinical Training"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right - Clinical Areas */}
              <div>
                <h3 className="text-2xl font-bold text-[#006837] mb-6">
                  Specialized Psychiatric Clinical Areas
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our learners receive comprehensive clinical exposure across various
                  psychiatric and mental health settings, developing expertise in
                  therapeutic interventions and patient management under the guidance of
                  experienced psychiatric nursing mentors.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 rounded-lg p-2 flex-shrink-0">
                        <Lightbulb className="w-5 h-5 text-[#006837]" />
                      </div>
                      <h4 className="font-bold text-[#006837] text-sm">
                        Acute Psychiatric Ward
                      </h4>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 rounded-lg p-2 flex-shrink-0">
                        <Users className="w-5 h-5 text-[#006837]" />
                      </div>
                      <h4 className="font-bold text-[#006837] text-sm">
                        Group Therapy Sessions
                      </h4>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 rounded-lg p-2 flex-shrink-0">
                        <Activity className="w-5 h-5 text-[#006837]" />
                      </div>
                      <h4 className="font-bold text-[#006837] text-sm">
                        Psychiatric Emergency Unit
                      </h4>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 rounded-lg p-2 flex-shrink-0">
                        <Heart className="w-5 h-5 text-[#006837]" />
                      </div>
                      <h4 className="font-bold text-[#006837] text-sm">
                        De-addiction Center
                      </h4>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 rounded-lg p-2 flex-shrink-0">
                        <Users className="w-5 h-5 text-[#006837]" />
                      </div>
                      <h4 className="font-bold text-[#006837] text-sm">
                        Child Psychiatry Clinic
                      </h4>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 rounded-lg p-2 flex-shrink-0">
                        <Hospital className="w-5 h-5 text-[#006837]" />
                      </div>
                      <h4 className="font-bold text-[#006837] text-sm">
                        Rehabilitation Center
                      </h4>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 rounded-lg p-2 flex-shrink-0">
                        <Heart className="w-5 h-5 text-[#006837]" />
                      </div>
                      <h4 className="font-bold text-[#006837] text-sm">
                        Community Mental Health
                      </h4>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 rounded-lg p-2 flex-shrink-0">
                        <ClipboardList className="w-5 h-5 text-[#006837]" />
                      </div>
                      <h4 className="font-bold text-[#006837] text-sm">
                        Forensic Psychiatry Unit
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                Career Opportunities
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Diverse career pathways await graduates of M.Sc Nursing in Mental Health Nursing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Career Card 1 */}
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-[#006837]" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Nursing Educator
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Teach and mentor nursing learners in psychiatric nursing
                  at colleges and universities, shaping future mental health
                  professionals.
                </p>
              </div>

              {/* Career Card 2 */}
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#006837]" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Clinical Nurse Specialist
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Provide advanced psychiatric nursing care in hospitals and
                  mental health centers with specialized clinical expertise.
                </p>
              </div>

              {/* Career Card 3 */}
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hospital className="w-8 h-8 text-[#006837]" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Psychiatric Unit Administrator
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lead and manage psychiatric nursing services, staff
                  development, and quality improvement in mental health
                  facilities.
                </p>
              </div>

              {/* Career Card 4 */}
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#006837]" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Community Mental Health Nurse
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Work with District Mental Health Programme (DMHP),
                  PHCs, and NGOs in community-based mental health care delivery.
                </p>
              </div>

              {/* Career Card 5 */}
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-[#006837]" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  Research Associate
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Contribute to mental health research in academic
                  institutions, ICMR, and healthcare organizations
                  advancing psychiatric care.
                </p>
              </div>

              {/* Career Card 6 */}
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#006837]" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">
                  De-addiction Center Coordinator
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lead substance abuse treatment programs and
                  rehabilitation services at de-addiction and rehabilitation
                  centers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* World-Class Facilities */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                World-Class Facilities
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                State-of-the-art infrastructure supporting excellence in mental health nursing
                education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Facility Card 1 */}
              <div className="bg-gradient-to-br from-[#006837] to-[#002309] text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">
                  Psychiatric Simulation Lab
                </h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  Practice therapeutic interventions with standardized patients and high-fidelity
                  simulation scenarios
                </p>
              </div>

              {/* Facility Card 2 */}
              <div className="bg-[#7cb983]/15 text-[#006837] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">
                  Counseling Training Room
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Dedicated space for practicing individual and group psychotherapy techniques with
                  observation facilities
                </p>
              </div>

              {/* Facility Card 3 */}
              <div className="bg-[#7cb983]/25 text-[#006837] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">
                  Digital Learning Center
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Access to e-resources, psychiatric nursing databases, and online learning platforms
                </p>
              </div>

              {/* Facility Card 4 */}
              <div className="bg-[#7cb983]/15 text-[#006837] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">
                  Research & Innovation Center
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Dedicated facility for psychiatric nursing research, statistical analysis, and dissertation
                  work
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                Admission Process
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Simple and transparent admission procedure for aspiring mental health nursing
                professionals
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-6 items-start relative">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xl font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#006837] mb-3">
                      Online Application
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Complete the online application form with personal details, academic records, and
                      professional experience information.
                    </p>
                  </div>
                  <div className="hidden md:block absolute left-6 top-12 w-0.5 h-24 bg-gray-300"></div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row gap-6 items-start relative">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xl font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#006837] mb-3">
                      Document Verification
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Submit original documents including B.Sc Nursing degree, mark sheets, registration
                      certificate, and experience certificate for verification.
                    </p>
                  </div>
                  <div className="hidden md:block absolute left-6 top-12 w-0.5 h-24 bg-gray-300"></div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-6 items-start relative">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xl font-bold">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#006837] mb-3">
                      Entrance Examination
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Appear for the university-conducted entrance examination testing nursing
                      knowledge, aptitude, and English proficiency.
                    </p>
                  </div>
                  <div className="hidden md:block absolute left-6 top-12 w-0.5 h-24 bg-gray-300"></div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row gap-6 items-start relative">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xl font-bold">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#006837] mb-3">
                      Personal Interview
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Attend a personal interview to assess motivation, communication skills, and
                      suitability for psychiatric nursing specialization.
                    </p>
                  </div>
                  <div className="hidden md:block absolute left-6 top-12 w-0.5 h-24 bg-gray-300"></div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#7cb983] text-white rounded-full flex items-center justify-center text-xl font-bold">
                      5
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#006837] mb-3">
                      Merit List & Admission
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Selection based on combined score from academic record, entrance exam, and
                      interview. Confirm admission by fee payment within stipulated time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fee Structure - Hidden for now */}
        {false && (<section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                Fee Structure
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Transparent and competitive fee structure for academic year 2025-26
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#006837] to-[#002309] text-white">
                        <th className="px-6 py-4 text-left font-semibold">Fee Component</th>
                        <th className="px-6 py-4 text-left font-semibold">Year 1</th>
                        <th className="px-6 py-4 text-left font-semibold">Year 2</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Tuition Fee</td>
                        <td className="px-6 py-4 text-gray-900 font-semibold">₹1,20,000</td>
                        <td className="px-6 py-4 text-gray-900 font-semibold">₹1,20,000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">University Fee</td>
                        <td className="px-6 py-4 text-gray-900 font-semibold">₹25,000</td>
                        <td className="px-6 py-4 text-gray-900 font-semibold">₹25,000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Laboratory Fee</td>
                        <td className="px-6 py-4 text-gray-900 font-semibold">₹15,000</td>
                        <td className="px-6 py-4 text-gray-900 font-semibold">₹15,000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Library & E-Resources</td>
                        <td className="px-6 py-4 text-gray-900 font-semibold">₹10,000</td>
                        <td className="px-6 py-4 text-gray-900 font-semibold">₹10,000</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">Clinical Training Fee</td>
                        <td className="px-6 py-4 text-gray-900 font-semibold">₹20,000</td>
                        <td className="px-6 py-4 text-gray-900 font-semibold">₹20,000</td>
                      </tr>
                      <tr className="bg-blue-50 border-t-2 border-[#006837]">
                        <td className="px-6 py-4 text-gray-900 font-bold">Total Annual Fee</td>
                        <td className="px-6 py-4 text-[#006837] font-bold text-lg">₹1,90,000</td>
                        <td className="px-6 py-4 text-[#006837] font-bold text-lg">₹1,90,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border-l-4 border-[#006837] rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">Note:</span> Hostel accommodation available separately. Scholarships and education loans available for eligible candidates. Fee structure subject to university
                  guidelines and government regulations. Contact admission office for detailed breakdown and payment options.
                </p>
              </div>
            </div>
          </div>
        </section>)}

        {/* Frequently Asked Questions */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Find answers to common questions about M.Sc Nursing in Mental Health Nursing
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {/* FAQ 1 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#006837] pr-4">
                    What is the scope of M.Sc Nursing in Mental Health Nursing?
                  </h3>
                  {openFaq === 0 ? (
                    <ChevronUp className="w-6 h-6 text-[#7cb983] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === 0 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      M.Sc Nursing in Mental Health Nursing offers excellent career scope given India&apos;s growing mental health
                      needs. Graduates can work as psychiatric nursing educators in nursing colleges, clinical nurse specialists in
                      psychiatric hospitals, community mental health nurses under DMHP, de-addiction center coordinators,
                      mental health researchers, and psychiatric nursing administrators. The National Mental Health Policy and
                      Mental Healthcare Act 2017 have created numerous opportunities in both government and private sectors.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#006837] pr-4">
                    Is prior experience in psychiatry required for admission?
                  </h3>
                  {openFaq === 1 ? (
                    <ChevronUp className="w-6 h-6 text-[#7cb983] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === 1 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      No, prior experience specifically in psychiatry is not mandatory for admission. Candidates need minimum 1
                      year of clinical nursing experience in any area after completing B.Sc Nursing. However, candidates with
                      interest or experience in mental health settings may have an advantage during the selection process. The
                      program is designed to provide comprehensive psychiatric nursing training from fundamentals to advanced
                      practice.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#006837] pr-4">
                    What types of psychiatric facilities are available for clinical training?
                  </h3>
                  {openFaq === 2 ? (
                    <ChevronUp className="w-6 h-6 text-[#7cb983] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === 2 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      Sresakthimayeil Institute of Nursing and Research has affiliations with government psychiatric hospitals, private mental health
                      centers, de-addiction centers, and community mental health programs. Clinical rotations include acute
                      psychiatric wards, outpatient psychiatric clinics, child and adolescent psychiatry units, geriatric psychiatry,
                      forensic psychiatry, rehabilitation centers, and District Mental Health Programme facilities. This diverse
                      exposure ensures comprehensive clinical competency development.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#006837] pr-4">
                    Can I pursue Ph.D. after completing M.Sc in Mental Health Nursing?
                  </h3>
                  {openFaq === 3 ? (
                    <ChevronUp className="w-6 h-6 text-[#7cb983] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === 3 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      Yes, M.Sc Nursing in Mental Health Nursing graduates are eligible for Ph.D. programs in Nursing. This opens
                      opportunities for advanced research careers, senior academic positions as Professors, Principal, or Dean
                      positions in nursing colleges. Several universities in India offer Ph.D. in Nursing with research focus on
                      psychiatric and mental health nursing areas.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#006837] pr-4">
                    What therapeutic skills are taught in the program?
                  </h3>
                  {openFaq === 4 ? (
                    <ChevronUp className="w-6 h-6 text-[#7cb983] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === 4 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      The program covers comprehensive therapeutic skills including therapeutic communication techniques,
                      individual psychotherapy, group therapy facilitation, family therapy principles, cognitive behavioral therapy
                      basics, crisis intervention, suicide prevention, motivational interviewing for substance abuse, relaxation
                      techniques, art and music therapy basics, and psychiatric rehabilitation techniques. Learners practice these
                      skills through simulation exercises and supervised clinical practice.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#006837] pr-4">
                    What clinical exposure will learners receive during the program?
                  </h3>
                  {openFaq === 5 ? (
                    <ChevronUp className="w-6 h-6 text-[#7cb983] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === 5 && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      Learners receive over 1000 hours of supervised clinical practice in affiliated psychiatric facilities. Clinical
                      rotations include acute psychiatric units, psychiatric outpatient clinics, de-addiction and rehabilitation
                      centers, child and adolescent psychiatry units, geriatric psychiatry, forensic psychiatry settings, and
                      community mental health programs under DMHP. This extensive clinical exposure ensures graduates are
                      well-prepared for advanced psychiatric nursing practice in diverse settings.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Begin Your Mental Health Nursing Journey - CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#7cb983] to-[#6ba872] text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Begin Your Mental Health Nursing Journey
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Take the next step in your nursing career. Apply now for the 2025-26
              academic session and join our community of nursing professionals
              dedicated to advancing mental healthcare in India.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8" className="bg-white text-[#7cb983] hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2">
                Apply Online
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="border-2 border-white hover:bg-white hover:text-[#7cb983] text-white px-8 py-3 rounded-full font-semibold transition-colors">
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
      <Footer hideLifeAtJKKN />
      <FloatingButtons />
    </>
  );
}
