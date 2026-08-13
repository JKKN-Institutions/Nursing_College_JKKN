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
  metadataBase: new URL("https://nursing.sresakthimayeil.jkkn.ac.in"),
  title: "M.Sc Nursing Colleges in Tamil Nadu | JKKN Nursing",
  description: "M.Sc Nursing at JKKN College of Nursing, Tamil Nadu. 5 INC-approved specializations, 500+ bed hospital training, 100% placement support. Apply 2026-27.",
  keywords: "msc nursing colleges in tamilnadu, M.Sc Nursing Tamil Nadu, msc nursing admission 2026, msc nursing specializations, post graduate nursing Tamil Nadu, JKKN nursing, msc nursing fees, msc nursing eligibility, nursing colleges near Erode Salem Coimbatore, master of science in nursing",
  openGraph: {
    title: "M.Sc Nursing at JKKN College of Nursing — Top MSc Nursing College Tamil Nadu",
    description: "INC-approved 2-year M.Sc Nursing with 5 specializations, 500+ bed hospital training, and 100% placement support. Admissions open 2026-27.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing",
    siteName: "JKKN College of Nursing",
    type: "website",
    images: [
      {
        url: "https://nursing.sresakthimayeil.jkkn.ac.in/images/Master-of-Science-in-Nursing-Hero-Banner-Image.webp",
        width: 1200,
        height: 630,
        alt: "M.Sc Nursing program at JKKN College of Nursing campus in Tamil Nadu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.Sc Nursing Colleges in Tamil Nadu | JKKN Nursing",
    description: "5 INC-approved specializations, 500+ bed hospital training, 100% placement support. Apply 2026-27.",
  },
  alternates: { canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing" },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
};

export default function MScNursing() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Master of Science in Nursing (M.Sc Nursing)",
    "description": "2-year postgraduate M.Sc Nursing program with 5 specializations and clinical training at 500+ bed teaching hospital. INC approved, affiliated with Tamil Nadu Dr. M.G.R. Medical University.",
    "url": "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing",
    "provider": {
      "@type": "EducationalOrganization",
      "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/#organization",
      "name": "JKKN College of Nursing",
      "alternateName": ["Sresakthimayeil Institute Of Nursing And Research", "JKKN Nursing College", "JKK Nattraja College of Nursing"],
      "url": "https://nursing.sresakthimayeil.jkkn.ac.in/",
      "sameAs": [
        "https://www.facebook.com/jkknnursing",
        "https://www.instagram.com/jkknnursing",
        "https://www.linkedin.com/school/jkknnursing",
        "https://maps.app.goo.gl/4m3Ec1pdsirbMiuE6"
      ],
      "parentOrganization": {
        "@type": "EducationalOrganization",
        "name": "JKKN Institutions",
        "url": "https://jkkn.ac.in/"
      }
    },
    "timeRequired": "P2Y",
    "educationalCredentialAwarded": "Master of Science in Nursing (M.Sc Nursing)",
    "occupationalCredentialAwarded": "Clinical Nurse Specialist / Nursing Educator",
    "coursePrerequisites": "B.Sc Nursing with minimum 55% aggregate marks, 1 year clinical experience, TNNMC registration",
    "about": ["Medical Surgical Nursing", "Child Health Nursing", "Community Health Nursing", "Obstetrics & Gynecology Nursing", "Mental Health Nursing"],
    "educationalLevel": "Postgraduate",
    "numberOfCredits": 120,
    "inLanguage": "en",
    "isAccessibleForFree": false,
    "offers": {
      "@type": "Offer",
      "price": "125000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-03-01",
      "validThrough": "2026-08-31",
      "url": "https://www.jkkn.ai/apply/jkkn-admission-2026"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Onsite",
      "courseWorkload": "PT40H",
      "startDate": "2026-08-01",
      "endDate": "2028-06-30",
      "location": {
        "@type": "Place",
        "name": "JKKN College of Nursing Campus",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Natarajapuram, NH-544",
          "addressLocality": "Komarapalayam",
          "addressRegion": "Tamil Nadu",
          "postalCode": "638183",
          "addressCountry": "IN"
        }
      }
    }
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
      },
      {
        "@type": "Question",
        "name": "What is the M.Sc Nursing fees at JKKN College of Nursing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The approximate M.Sc Nursing tuition fee at JKKN is ₹1,25,000 per year. Hostel, mess, and exam fees are additional. Scholarships are available for meritorious learners. Contact +91 93458 55001 for exact fee details."
        }
      },
      {
        "@type": "Question",
        "name": "What is the salary after M.Sc Nursing in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "M.Sc Nursing graduates in India earn ₹3.5-8 LPA at entry level depending on the role. Nursing Educators earn ₹3.5-15 LPA, Clinical Specialists ₹4-18 LPA, and international positions (UK NHS, Middle East) offer ₹15-60 LPA."
        }
      },
      {
        "@type": "Question",
        "name": "Is M.Sc Nursing available through distance education?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Indian Nursing Council (INC) does not recognize distance or correspondence M.Sc Nursing programs. Only regular, full-time M.Sc Nursing from INC-approved colleges like JKKN is valid for teaching, clinical specialist, and international nursing positions."
        }
      },
      {
        "@type": "Question",
        "name": "How many M.Sc Nursing seats are available at JKKN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN College of Nursing has an annual intake of 25 seats for M.Sc Nursing, distributed across 5 specializations: Medical Surgical, Child Health, Community Health, OBG, and Mental Health Nursing."
        }
      },
      {
        "@type": "Question",
        "name": "What is the clinical training facility for M.Sc Nursing at JKKN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN provides clinical training at its on-campus 500+ bed multi-specialty teaching hospital with departments including General Medicine, Surgery, Pediatrics, OBG, Orthopedics, ICU, NICU, and Psychiatry. Learners also gain community health experience in rural and urban settings."
        }
      },
      {
        "@type": "Question",
        "name": "Can working nurses join M.Sc Nursing at JKKN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, working nurses with B.Sc Nursing degree, minimum 55% marks, 1 year clinical experience, and valid RN & RM registration can apply for M.Sc Nursing at JKKN. The program is designed to advance staff nurses to educator, specialist, and leadership roles."
        }
      },
      {
        "@type": "Question",
        "name": "Which university is JKKN College of Nursing affiliated to?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN College of Nursing (Sresakthimayeil Institute Of Nursing And Research) is affiliated to Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU), Chennai. It is also approved by the Indian Nursing Council (INC) and recognized by TNNMC."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for M.Sc Nursing admission?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Required documents include: B.Sc Nursing degree and mark sheets, 10th & 12th certificates, RN & RM registration certificate, 1-year experience certificate, Transfer Certificate, Aadhaar Card, community certificate (if applicable), passport photos, and medical fitness certificate."
        }
      },
      {
        "@type": "Question",
        "name": "Where is JKKN College of Nursing located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JKKN College of Nursing is located at Natarajapuram, NH-544 (Salem-Coimbatore Highway), Komarapalayam, Namakkal District, Tamil Nadu 638183. It is approximately 22 km from Erode, 58 km from Salem, 67 km from Tiruppur, and 105 km from Coimbatore."
        }
      },
      {
        "@type": "Question",
        "name": "Does JKKN offer scholarships for M.Sc Nursing learners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, JKKN provides scholarship opportunities for meritorious learners and those from economically weaker sections. Government scholarships (BC/MBC/SC/ST) are also facilitated through the institution. Contact the admissions office for current scholarship details."
        }
      },
      {
        "@type": "Question",
        "name": "What is the M.Sc Nursing admission process at JKKN for 2026-27?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The M.Sc Nursing admission process at JKKN involves 3 steps: (1) Submit online application with required documents at admission.jkkn.ac.in, (2) Attend counseling for specialization selection, (3) Complete fee payment and document verification for enrollment. Applications for 2026-27 are open."
        }
      },
      {
        "@type": "Question",
        "name": "Can I become a nursing professor with M.Sc Nursing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, M.Sc Nursing is the minimum qualification required to teach as a Lecturer or Assistant Professor in nursing colleges as per INC norms. With a Ph.D., you can advance to Professor and Principal positions. JKKN's regular M.Sc Nursing is fully recognized for teaching positions."
        }
      },
      {
        "@type": "Question",
        "name": "What are the international job opportunities after M.Sc Nursing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "M.Sc Nursing graduates can work internationally in the UK (NHS), UAE (Cleveland Clinic Abu Dhabi), Saudi Arabia, Singapore, and Australia. International nursing positions offer ₹15-60 LPA. JKKN's placement cell supports international recruitment drives."
        }
      }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "M.Sc Nursing Specializations at JKKN College of Nursing",
    "description": "5 INC-approved M.Sc Nursing specializations offered at JKKN College of Nursing, Tamil Nadu",
    "numberOfItems": 5,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Medical Surgical Nursing",
        "url": "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-medical-surgical",
        "description": "Specialize in critical care, perioperative, and oncology nursing for adult patients"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Child Health Nursing",
        "url": "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-child-health",
        "description": "Focus on pediatric care, NICU, child development, and adolescent health"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Community Health Nursing",
        "url": "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-community-health",
        "description": "Master public health nursing, epidemiology, and community health programs"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Obstetrics & Gynecology Nursing",
        "url": "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-obstetrics-gynecological",
        "description": "Specialize in maternal health, labor management, and reproductive health nursing"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Mental Health Nursing",
        "url": "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-mental-health",
        "description": "Develop expertise in psychiatric nursing, psychotherapy, and mental health rehabilitation"
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Apply for M.Sc Nursing Admission at JKKN 2026-27",
    "description": "Step-by-step guide to apply for M.Sc Nursing admission at JKKN College of Nursing, Tamil Nadu for the 2026-27 academic year.",
    "totalTime": "P7D",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Submit Online Application",
        "text": "Complete the online application form at admission.jkkn.ac.in with required documents including B.Sc Nursing mark sheets, RN & RM registration, and experience certificate.",
        "url": "https://admission.jkkn.ac.in/"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Attend Counseling",
        "text": "Attend the counseling session for specialization selection. Choose from Medical Surgical, Child Health, Community Health, OBG, or Mental Health Nursing."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Complete Enrollment",
        "text": "Complete fee payment and document verification to confirm your M.Sc Nursing admission at JKKN College of Nursing."
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Header />
      <BreadcrumbSchema items={[
        { name: 'JKKN College of Nursing', url: 'https://nursing.sresakthimayeil.jkkn.ac.in/' },
        { name: 'Courses', url: 'https://nursing.sresakthimayeil.jkkn.ac.in/' },
        { name: 'M.Sc Nursing', url: 'https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing' },
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
                  <span className="text-[#7cb983]">JKKN College of Nursing, Tamil Nadu</span>
                </h1>

                <p className="text-sm text-gray-300 mb-4">Last updated: March 19, 2026</p>

                <div className="bg-white/10 border-l-4 border-[#7cb983] p-4 mb-8 rounded-r-lg">
                  <p className="font-semibold text-[#7cb983] mb-1">Quick Summary</p>
                  <p className="text-gray-200 text-sm">JKKN College of Nursing — one of the top M.Sc Nursing colleges in Tamil Nadu — offers a 2-year INC-approved postgraduate program with 5 specializations. Affiliated to Tamil Nadu Dr. M.G.R. Medical University with clinical training at a 500+ bed teaching hospital. Graduates pursue careers as Nurse Educators, Clinical Specialists, and Administrators with 100% placement support.</p>
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
                    href="https://www.jkkn.ai/apply/jkkn-admission-2026"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    alt="M.Sc Nursing students in clinical training at JKKN College of Nursing, Tamil Nadu"
                    width={600}
                    height={500}
                    priority
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
                  {/* [DATA NEEDED] Replace with actual TNMGRMU logo — currently using NAAC logo as placeholder */}
                  <Image src="/images/NAAC_LOGO.png" alt="Tamil Nadu Dr. MGR Medical University Logo" width={50} height={50} className="object-contain flex-shrink-0 w-[50px]" />
                  <span className="font-semibold text-gray-800"><a href="https://www.tnmgrmu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-[#006837] hover:underline">TNMGRMU</a> Affiliated</span>
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

        {/* What is M.Sc Nursing — Snippet-Ready Definition */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-6">What is M.Sc Nursing?</h2>
              <div className="bg-[#FBFBEE] border-l-4 border-[#006837] p-6 rounded-r-xl mb-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>M.Sc Nursing (Master of Science in Nursing)</strong> is a 2-year postgraduate degree program approved by the Indian Nursing Council (INC). It prepares registered nurses for advanced roles in clinical practice, teaching, research, and healthcare administration. Candidates need a B.Sc Nursing degree with 55% marks and 1 year of clinical experience to be eligible.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-[#006837] mb-3">M.Sc Nursing Course Highlights</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><FaCheckCircle className="w-4 h-4 text-[#7cb983] flex-shrink-0 mt-1" /> <span>Duration: 2 years (4 semesters) full-time</span></li>
                    <li className="flex items-start gap-2"><FaCheckCircle className="w-4 h-4 text-[#7cb983] flex-shrink-0 mt-1" /> <span>Eligibility: B.Sc Nursing + 55% + 1 year experience</span></li>
                    <li className="flex items-start gap-2"><FaCheckCircle className="w-4 h-4 text-[#7cb983] flex-shrink-0 mt-1" /> <span>5 INC-approved specializations available</span></li>
                    <li className="flex items-start gap-2"><FaCheckCircle className="w-4 h-4 text-[#7cb983] flex-shrink-0 mt-1" /> <span>Includes dissertation and clinical practicum</span></li>
                    <li className="flex items-start gap-2"><FaCheckCircle className="w-4 h-4 text-[#7cb983] flex-shrink-0 mt-1" /> <span>Minimum qualification for nursing teaching positions</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#006837] mb-3">Who Should Pursue M.Sc Nursing?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><FaCheckCircle className="w-4 h-4 text-[#7cb983] flex-shrink-0 mt-1" /> <span>B.Sc Nursing graduates seeking career advancement</span></li>
                    <li className="flex items-start gap-2"><FaCheckCircle className="w-4 h-4 text-[#7cb983] flex-shrink-0 mt-1" /> <span>Working nurses aiming for educator or specialist roles</span></li>
                    <li className="flex items-start gap-2"><FaCheckCircle className="w-4 h-4 text-[#7cb983] flex-shrink-0 mt-1" /> <span>Nurses aspiring for international positions (UK, UAE)</span></li>
                    <li className="flex items-start gap-2"><FaCheckCircle className="w-4 h-4 text-[#7cb983] flex-shrink-0 mt-1" /> <span>Professionals interested in nursing research and Ph.D.</span></li>
                    <li className="flex items-start gap-2"><FaCheckCircle className="w-4 h-4 text-[#7cb983] flex-shrink-0 mt-1" /> <span>Clinical nurses wanting hospital administration roles</span></li>
                  </ul>
                </div>
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
                  The <strong className="text-[#006837]">Master of Science in Nursing (M.Sc Nursing)</strong> at <Link href="/" className="text-[#006837] font-semibold hover:underline">JKKN College of
                  Nursing</Link> is a comprehensive 2-year postgraduate program designed to
                  develop advanced nursing professionals with specialized clinical
                  expertise, research acumen, and leadership capabilities. As one of the leading <strong className="text-[#006837]">M.Sc Nursing colleges in Tamil Nadu</strong>, JKKN is affiliated to <a href="https://www.tnmgrmu.ac.in/" target="_blank" rel="noopener noreferrer" className="text-[#006837] font-semibold hover:underline">Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU)</a> and approved by the <a href="https://www.indiannursingcouncil.org/" target="_blank" rel="noopener noreferrer" className="text-[#006837] font-semibold hover:underline">Indian Nursing Council (INC)</a>.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The program integrates evidence-based practice with hands-on clinical
                  training at the <Link href="/clinical-hospital" className="text-[#006837] font-semibold hover:underline">500+ bed multi-specialty teaching hospital</Link> on campus. Learners completing their <Link href="/bsc-nursing" className="text-[#006837] font-semibold hover:underline">B.Sc Nursing</Link> can advance to this postgraduate program with 5 INC-approved specializations. Located on the <Link href="/about" className="text-[#006837] font-semibold hover:underline">JKKN campus in Komarapalayam</Link>, near <Link href="/erode" className="text-[#006837] font-semibold hover:underline">Erode</Link>, <Link href="/salem" className="text-[#006837] font-semibold hover:underline">Salem</Link>, and <Link href="/coimbatore" className="text-[#006837] font-semibold hover:underline">Coimbatore</Link>, the college provides experienced senior learners who bring decades of clinical and
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
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">M.Sc Nursing Eligibility Criteria 2026</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet these requirements to pursue your M.Sc Nursing admission at JKKN College of Nursing, Tamil Nadu.
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
                        B.Sc Nursing (Basic) or B.Sc Nursing (Post-Basic) degree from an INC-recognized institution with minimum 55% aggregate marks and NRI learners get migration certificates from the concerned university.
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

        {/* Fee Structure */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#7cb983]/10 text-[#7cb983] text-sm font-semibold px-6 py-2 rounded-full mb-4 uppercase tracking-wider">
                INVESTMENT IN YOUR FUTURE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                M.Sc Nursing Fees Structure 2026-27
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transparent fee structure for M.Sc Nursing at JKKN College of Nursing. <Link href="/scholarships" className="text-[#006837] font-semibold hover:underline">Scholarships available</Link> for meritorious and economically weaker learners.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-[#FBFBEE] rounded-2xl overflow-hidden shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-[#006837] text-white">
                        <th className="px-6 py-4 font-semibold">Fee Component</th>
                        <th className="px-6 py-4 font-semibold text-center">Year 1</th>
                        <th className="px-6 py-4 font-semibold text-center">Year 2</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-800">Tuition Fee</td>
                        <td className="px-6 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹1,25,000</td>
                        <td className="px-6 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹1,25,000</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-4 font-medium text-gray-800">Hostel & Mess (Optional)</td>
                        <td className="px-6 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹60,000</td>
                        <td className="px-6 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹60,000</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-gray-800">Examination Fee</td>
                        <td className="px-6 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}As per university</td>
                        <td className="px-6 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}As per university</td>
                      </tr>
                      <tr className="bg-[#006837]/5">
                        <td className="px-6 py-4 font-bold text-[#006837]">Total (Approx.)</td>
                        <td className="px-6 py-4 text-center font-bold text-[#006837]">{/* [DATA NEEDED] */}₹1,85,000</td>
                        <td className="px-6 py-4 text-center font-bold text-[#006837]">{/* [DATA NEEDED] */}₹1,85,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                * Fees are subject to change. Contact <a href="tel:+919345855001" className="text-[#006837] hover:underline">+91 93458 55001</a> for the latest fee details. EMI and installment options available.
              </p>
            </div>
          </div>
        </section>

        {/* Specialization Comparison Table */}
        <section className="py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                M.Sc Nursing Specializations — Comparison Guide
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Compare all 5 M.Sc Nursing specializations to choose the right path for your career goals.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left bg-white rounded-2xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-[#006837] text-white">
                    <th className="px-4 py-4 font-semibold text-sm">Specialization</th>
                    <th className="px-4 py-4 font-semibold text-sm">Focus Area</th>
                    <th className="px-4 py-4 font-semibold text-sm">Career Roles</th>
                    <th className="px-4 py-4 font-semibold text-sm">Salary Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  <tr>
                    <td className="px-4 py-4 font-semibold text-[#006837]"><Link href="/course-msc-medical-surgical" className="hover:underline">Medical Surgical</Link></td>
                    <td className="px-4 py-4 text-gray-700">Critical care, perioperative, oncology nursing</td>
                    <td className="px-4 py-4 text-gray-700">ICU Specialist, Nurse Educator, Clinical Coordinator</td>
                    <td className="px-4 py-4 text-gray-700">{/* [DATA NEEDED] */}₹4–8 LPA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-4 font-semibold text-[#006837]"><Link href="/course-msc-child-health" className="hover:underline">Child Health</Link></td>
                    <td className="px-4 py-4 text-gray-700">Pediatric care, NICU, adolescent health</td>
                    <td className="px-4 py-4 text-gray-700">Pediatric Nurse, NICU Specialist, Child Health Educator</td>
                    <td className="px-4 py-4 text-gray-700">{/* [DATA NEEDED] */}₹4–7 LPA</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold text-[#006837]"><Link href="/course-msc-obstetrics-gynecological" className="hover:underline">OBG Nursing</Link></td>
                    <td className="px-4 py-4 text-gray-700">Maternal health, labor management, reproductive health</td>
                    <td className="px-4 py-4 text-gray-700">Midwife Specialist, Women&apos;s Health Educator, OBG Coordinator</td>
                    <td className="px-4 py-4 text-gray-700">{/* [DATA NEEDED] */}₹4–7 LPA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-4 font-semibold text-[#006837]"><Link href="/course-msc-community-health" className="hover:underline">Community Health</Link></td>
                    <td className="px-4 py-4 text-gray-700">Public health, epidemiology, health promotion</td>
                    <td className="px-4 py-4 text-gray-700">Public Health Officer, Community Nurse, NGO Program Manager</td>
                    <td className="px-4 py-4 text-gray-700">{/* [DATA NEEDED] */}₹3.5–7 LPA</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold text-[#006837]"><Link href="/course-msc-mental-health" className="hover:underline">Mental Health</Link></td>
                    <td className="px-4 py-4 text-gray-700">Psychiatric nursing, psychotherapy, rehabilitation</td>
                    <td className="px-4 py-4 text-gray-700">Psychiatric Nurse, Mental Health Counselor, De-addiction Specialist</td>
                    <td className="px-4 py-4 text-gray-700">{/* [DATA NEEDED] */}₹4–8 LPA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Salary data based on industry averages for M.Sc Nursing graduates in India (2025-26). International positions (UK NHS, Middle East) offer significantly higher packages.
            </p>
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

        {/* Clinical Training & Hospital */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#7cb983]/10 text-[#7cb983] text-sm font-semibold px-6 py-2 rounded-full mb-4 uppercase tracking-wider">
                HANDS-ON EXPERIENCE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                Clinical Training at 500+ Bed Teaching Hospital
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                M.Sc Nursing learners at JKKN receive extensive clinical training at our on-campus multi-specialty teaching hospital — a unique advantage among M.Sc Nursing colleges in Tamil Nadu.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#006837] text-white rounded-xl flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#006837] mb-2">On-Campus Hospital Access</h3>
                      <p className="text-gray-700">Direct access to the <Link href="/clinical-hospital" className="text-[#006837] font-semibold hover:underline">500+ bed multi-specialty teaching hospital</Link> with departments including General Medicine, Surgery, Pediatrics, OBG, Orthopedics, and Psychiatry.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#006837] text-white rounded-xl flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#006837] mb-2">Advanced Clinical Rotations</h3>
                      <p className="text-gray-700">Specialization-specific rotations across ICU, NICU, Operation Theatre, Labor Room, Psychiatric Ward, and Community Health Centers with daily patient interactions.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#006837] text-white rounded-xl flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#006837] mb-2">Simulation Labs</h3>
                      <p className="text-gray-700">Practice critical procedures in our <Link href="/laboratories" className="text-[#006837] font-semibold hover:underline">state-of-the-art simulation learning labs</Link> with high-fidelity mannequins before real patient interaction.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#006837] text-white rounded-xl flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-[#006837] mb-2">Community Health Fieldwork</h3>
                      <p className="text-gray-700">Field experience in rural and urban community settings around Komarapalayam, Erode, and Namakkal districts for public health nursing competency.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/Master-of-Science-in-Nursing-Clinical-Training-Image.webp"
                  alt="M.Sc Nursing clinical training at JKKN multi-specialty hospital"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#006837] text-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Beds</div>
                </div>
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
                Career Options and Salary After M.Sc Nursing
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                M.Sc Nursing graduates from top nursing colleges in Tamil Nadu command diverse roles across clinical practice, education,
                research, and healthcare administration with competitive salary packages.
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

        {/* Salary After M.Sc Nursing */}
        <section className="py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#7cb983]/10 text-[#7cb983] text-sm font-semibold px-6 py-2 rounded-full mb-4 uppercase tracking-wider">
                EARNING POTENTIAL
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                M.Sc Nursing Salary in India 2026
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                M.Sc Nursing graduates command premium salaries in India and abroad. Here&apos;s what you can expect based on role and experience.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-left bg-white rounded-2xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-[#006837] text-white">
                      <th className="px-5 py-4 font-semibold">Career Role</th>
                      <th className="px-5 py-4 font-semibold text-center">Entry Level (0-2 yrs)</th>
                      <th className="px-5 py-4 font-semibold text-center">Mid Level (3-7 yrs)</th>
                      <th className="px-5 py-4 font-semibold text-center">Senior Level (8+ yrs)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-sm">
                    <tr>
                      <td className="px-5 py-4 font-medium text-gray-800">Nursing Educator / Lecturer</td>
                      <td className="px-5 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹3.5–5 LPA</td>
                      <td className="px-5 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹5–8 LPA</td>
                      <td className="px-5 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹8–15 LPA</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-5 py-4 font-medium text-gray-800">Clinical Nurse Specialist</td>
                      <td className="px-5 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹4–6 LPA</td>
                      <td className="px-5 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹6–10 LPA</td>
                      <td className="px-5 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹10–18 LPA</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-medium text-gray-800">Nursing Superintendent / Administrator</td>
                      <td className="px-5 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹4–6 LPA</td>
                      <td className="px-5 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹6–12 LPA</td>
                      <td className="px-5 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹12–20 LPA</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-5 py-4 font-medium text-gray-800">International (UK NHS / Middle East)</td>
                      <td className="px-5 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹15–25 LPA</td>
                      <td className="px-5 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹25–40 LPA</td>
                      <td className="px-5 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹40–60 LPA</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-medium text-gray-800">Government Nursing Officer</td>
                      <td className="px-5 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹4–5.5 LPA</td>
                      <td className="px-5 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹5.5–8 LPA</td>
                      <td className="px-5 py-4 text-center text-gray-700">{/* [DATA NEEDED] */}₹8–14 LPA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Salary figures are indicative and vary by employer, location, and specialization. JKKN&apos;s <Link href="/placement" className="text-[#006837] hover:underline">placement cell</Link> provides career guidance and recruitment support.
              </p>
            </div>
          </div>
        </section>

        {/* Placement Support */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                M.Sc Nursing Placement Support at JKKN
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our dedicated <Link href="/placement" className="text-[#006837] font-semibold hover:underline">placement cell</Link> connects M.Sc Nursing graduates with top employers in India and abroad.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <div className="text-center bg-[#FBFBEE] rounded-2xl p-8">
                <div className="text-4xl font-bold text-[#006837] mb-2">{/* [DATA NEEDED] */}100%</div>
                <div className="text-gray-600 font-medium">Placement Support</div>
              </div>
              <div className="text-center bg-[#FBFBEE] rounded-2xl p-8">
                <div className="text-4xl font-bold text-[#006837] mb-2">{/* [DATA NEEDED] */}60+</div>
                <div className="text-gray-600 font-medium">Recruiting Partners</div>
              </div>
              <div className="text-center bg-[#FBFBEE] rounded-2xl p-8">
                <div className="text-4xl font-bold text-[#006837] mb-2">{/* [DATA NEEDED] */}₹25 LPA</div>
                <div className="text-gray-600 font-medium">Highest Package</div>
              </div>
              <div className="text-center bg-[#FBFBEE] rounded-2xl p-8">
                <div className="text-4xl font-bold text-[#006837] mb-2">{/* [DATA NEEDED] */}5+</div>
                <div className="text-gray-600 font-medium">Countries</div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#006837] mb-6 text-center">Top Recruiters for M.Sc Nursing Graduates</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Apollo Hospitals", "Fortis Healthcare", "AIIMS", "NHS UK", "Cleveland Clinic Abu Dhabi", "Max Healthcare", "Manipal Hospitals", "Government Hospitals"].map((recruiter) => (
                  <div key={recruiter} className="bg-[#FBFBEE] border border-gray-200 rounded-xl p-4 text-center text-sm font-medium text-gray-700">
                    {recruiter}
                  </div>
                ))}
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
                Why Choose JKKN — Top M.Sc Nursing College in Tamil Nadu
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Join a legacy of nursing excellence built since 2006 with 74+ years of JKKN institutional heritage — progressive
                education and clinical mastery near <Link href="/erode" className="text-[#006837] font-semibold hover:underline">Erode</Link>, <Link href="/salem" className="text-[#006837] font-semibold hover:underline">Salem</Link>, and <Link href="/coimbatore" className="text-[#006837] font-semibold hover:underline">Coimbatore</Link>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Expert Senior Learners */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#006837] text-white rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-[#006837]">Expert Senior Learners</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Learn from highly qualified senior learners with doctoral degrees, extensive clinical experience, and active research portfolios.
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
                  Access advanced nursing simulation learning labs, digital learning studios, and comprehensive learning commons resources supporting evidence-based learning.
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
                M.Sc Nursing Admission Process 2026-27
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Your journey to advanced nursing education at JKKN begins with these simple steps. <Link href="/admissions" className="text-[#006837] font-semibold hover:underline">View full admission details</Link>.
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

        {/* Documents Required */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                Documents Required for M.Sc Nursing Admission
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Keep these documents ready for your M.Sc Nursing admission application at JKKN.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-[#FBFBEE] rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#006837] mb-6 flex items-center gap-3">
                  <FaFileAlt className="w-6 h-6" />
                  Academic Documents
                </h3>
                <ul className="space-y-3">
                  {[
                    "B.Sc Nursing degree certificate and mark sheets (all years)",
                    "10th & 12th standard mark sheets and certificates",
                    "Provisional / Degree certificate from the university",
                    "Transfer Certificate (TC) from last institution",
                    "Migration Certificate (for learners outside Tamil Nadu)",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3">
                      <FaCheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#FBFBEE] rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#006837] mb-6 flex items-center gap-3">
                  <FaClipboardCheck className="w-6 h-6" />
                  Professional & Personal Documents
                </h3>
                <ul className="space-y-3">
                  {[
                    "RN & RM Registration Certificate (State Nursing Council)",
                    "1-year clinical experience certificate from employer",
                    "Aadhaar Card / PAN Card (identity proof)",
                    "Community / Caste certificate (if applicable)",
                    "Passport-size photographs (6 copies)",
                    "Medical fitness certificate",
                  ].map((doc) => (
                    <li key={doc} className="flex items-start gap-3">
                      <FaCheckCircle className="w-5 h-5 text-[#7cb983] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* M.Sc Nursing for Working Nurses */}
        <section className="py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                M.Sc Nursing for Working Nurses
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Already working as a nurse? JKKN supports your career advancement with a structured M.Sc Nursing program designed for experienced professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#006837] text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FaBriefcase className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">Career Advancement</h3>
                <p className="text-gray-700">Transition from staff nurse to Nurse Educator, Clinical Specialist, or Nursing Administrator with an M.Sc qualification.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#006837] text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FaGraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">Research Skills</h3>
                <p className="text-gray-700">Develop evidence-based practice and research methodology skills essential for leadership roles and academic positions.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#006837] text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FaUserMd className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#006837] mb-3">International Pathway</h3>
                <p className="text-gray-700">M.Sc Nursing opens doors to international positions in UK (NHS), Middle East, Singapore, and Australia with higher salary packages.</p>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold text-[#006837] mb-4">M.Sc Nursing — Regular vs Distance Education</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="px-4 py-3 font-semibold text-gray-800">Feature</th>
                      <th className="px-4 py-3 font-semibold text-[#006837]">Regular (JKKN)</th>
                      <th className="px-4 py-3 font-semibold text-gray-500">Distance / Correspondence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 font-medium">INC Recognition</td>
                      <td className="px-4 py-3 text-[#006837] font-semibold">Fully INC Approved</td>
                      <td className="px-4 py-3 text-red-600">Not recognized by INC</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Clinical Training</td>
                      <td className="px-4 py-3 text-[#006837] font-semibold">500+ bed hospital on campus</td>
                      <td className="px-4 py-3 text-gray-600">Limited or self-arranged</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Teaching Eligibility</td>
                      <td className="px-4 py-3 text-[#006837] font-semibold">Eligible for nursing faculty positions</td>
                      <td className="px-4 py-3 text-red-600">Not eligible per INC norms</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Research & Dissertation</td>
                      <td className="px-4 py-3 text-[#006837] font-semibold">Guided research with publication support</td>
                      <td className="px-4 py-3 text-gray-600">Self-guided, limited support</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">International Acceptance</td>
                      <td className="px-4 py-3 text-[#006837] font-semibold">Accepted globally (NHS, JCI hospitals)</td>
                      <td className="px-4 py-3 text-gray-600">Limited acceptance abroad</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                <strong>Important:</strong> The Indian Nursing Council (INC) does not recognize distance or correspondence M.Sc Nursing programs for teaching positions. Only regular, full-time programs at INC-approved institutions are valid for academic and clinical specialist roles.
              </p>
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
                Find answers to common questions about the M.Sc Nursing program at JKKN College of Nursing, Tamil Nadu.
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

                {/* FAQ 7 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      What is the M.Sc Nursing fees at JKKN?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    {/* [DATA NEEDED] */}The approximate M.Sc Nursing tuition fee at JKKN is ₹1,25,000 per year. Hostel, mess, and exam fees are additional. Scholarships are available for meritorious learners. Contact +91 93458 55001 for exact fee details.
                  </p>
                </details>

                {/* FAQ 8 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      What is the salary after M.Sc Nursing in India?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    M.Sc Nursing graduates in India earn ₹3.5-8 LPA at entry level. Nursing Educators earn ₹3.5-15 LPA, Clinical Specialists ₹4-18 LPA, and international positions (UK NHS, Middle East) offer ₹15-60 LPA depending on experience.
                  </p>
                </details>

                {/* FAQ 9 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      Is M.Sc Nursing available through distance education?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    The Indian Nursing Council (INC) does not recognize distance or correspondence M.Sc Nursing programs. Only regular, full-time M.Sc Nursing from INC-approved colleges like JKKN is valid for teaching, clinical specialist, and international positions.
                  </p>
                </details>

                {/* FAQ 10 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      How many seats are available for M.Sc Nursing at JKKN?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    JKKN has an annual intake of 25 seats for M.Sc Nursing, distributed across 5 specializations: Medical Surgical, Child Health, Community Health, OBG, and Mental Health Nursing. 5 seats per specialization.
                  </p>
                </details>

                {/* FAQ 11 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      What clinical training facilities does JKKN have?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    JKKN provides clinical training at its on-campus 500+ bed multi-specialty teaching hospital with departments including General Medicine, Surgery, Pediatrics, OBG, Orthopedics, ICU, NICU, and Psychiatry. Learners also gain community health experience in rural and urban settings.
                  </p>
                </details>

                {/* FAQ 12 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      Can working nurses join M.Sc Nursing at JKKN?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    Yes, working nurses with B.Sc Nursing degree, minimum 55% marks, 1 year clinical experience, and valid RN &amp; RM registration can apply. The program helps staff nurses advance to Educator, Specialist, and Administrator roles.
                  </p>
                </details>

                {/* FAQ 13 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      Which university is JKKN affiliated to?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    JKKN College of Nursing (Sresakthimayeil Institute Of Nursing And Research) is affiliated to Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU), Chennai. It is approved by the Indian Nursing Council (INC) and recognized by TNNMC.
                  </p>
                </details>

                {/* FAQ 14 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      What documents are needed for admission?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    Required documents include: B.Sc Nursing degree and mark sheets, 10th &amp; 12th certificates, RN &amp; RM registration certificate, 1-year experience certificate, Transfer Certificate, Aadhaar Card, community certificate (if applicable), passport photos, and medical fitness certificate.
                  </p>
                </details>

                {/* FAQ 15 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      Where is JKKN College of Nursing located?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    JKKN College of Nursing is at Natarajapuram, NH-544 (Salem-Coimbatore Highway), Komarapalayam, Namakkal District, Tamil Nadu 638183. It is about 22 km from Erode, 58 km from Salem, 67 km from Tiruppur, and 105 km from Coimbatore.
                  </p>
                </details>

                {/* FAQ 16 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      Does JKKN offer scholarships for M.Sc Nursing?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    Yes, JKKN provides scholarship opportunities for meritorious learners and those from economically weaker sections. Government scholarships (BC/MBC/SC/ST) are also facilitated. Visit the <Link href="/scholarships" className="text-[#006837] font-semibold hover:underline">scholarship page</Link> for details.
                  </p>
                </details>

                {/* FAQ 17 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      Can I become a nursing professor with M.Sc Nursing?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    Yes, M.Sc Nursing is the minimum qualification to teach as a Lecturer or Assistant Professor in nursing colleges per INC norms. With a Ph.D., you can become a Professor or Principal. JKKN&apos;s regular M.Sc Nursing is fully recognized for teaching positions.
                  </p>
                </details>

                {/* FAQ 18 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      What are international job opportunities after M.Sc Nursing?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    M.Sc Nursing graduates can work in UK (NHS), UAE (Cleveland Clinic Abu Dhabi), Saudi Arabia, Singapore, and Australia. International positions offer ₹15-60 LPA. JKKN&apos;s placement cell supports international recruitment drives.
                  </p>
                </details>

                {/* FAQ 19 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      What is the M.Sc Nursing admission process for 2026-27?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    Three steps: (1) Submit online application at admission.jkkn.ac.in with required documents, (2) Attend counseling for specialization selection, (3) Complete fee payment and document verification. <Link href="/admissions" className="text-[#006837] font-semibold hover:underline">Apply now for 2026-27</Link>.
                  </p>
                </details>

                {/* FAQ 20 */}
                <details className="bg-white rounded-2xl p-6 shadow-lg group open:bg-[#7cb983]/10">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      Is transport available for day scholars?
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-[#006837]/10 rounded-full flex items-center justify-center group-open:bg-[#7cb983] group-open:text-white transition-colors duration-300">
                      <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-200">
                    Yes, JKKN provides <Link href="/transport" className="text-[#006837] font-semibold hover:underline">college transport</Link> covering routes from Erode, Salem, Tiruchengode, Namakkal, and surrounding areas. The campus is on NH-544 with excellent road connectivity.
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
              Applications for the 2026-27 academic year are now open.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.jkkn.ai/apply/jkkn-admission-2026"
                target="_blank"
                rel="noopener noreferrer"
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
            <p className="font-semibold text-dark mb-2">Published by <Link href="/" className="text-[#006837] hover:underline">JKKN College of Nursing</Link></p>
            <p className="text-sm text-gray-600 mb-1">Sresakthimayeil Institute Of Nursing And Research — One of the top M.Sc Nursing colleges in Tamil Nadu</p>
            <p className="text-sm text-gray-600 mb-1"><a href="https://www.indiannursingcouncil.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">INC Approved</a> | <Link href="/naac" className="hover:underline">NAAC Accredited</Link> | Affiliated to <a href="https://www.tnmgrmu.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">Tamil Nadu Dr. M.G.R. Medical University</a></p>
            <p className="text-sm text-gray-600 mb-1">Natarajapuram, NH-544, Komarapalayam, Namakkal District, Tamil Nadu 638183</p>
            <p className="text-sm text-gray-600 mb-1">Contact: <a href="tel:+919345855001" className="hover:underline">+91 93458 55001</a> | <a href="mailto:nursing@jkkn.ac.in" className="hover:underline">nursing@jkkn.ac.in</a></p>
            <p className="text-sm text-gray-600">Last reviewed: April 2026 | <Link href="/admissions" className="text-[#006837] hover:underline">Apply Now</Link> | <Link href="/placement" className="text-[#006837] hover:underline">Placement Details</Link> | <Link href="/contact" className="text-[#006837] hover:underline">Contact Us</Link></p>
          </div>
        </div>

      </main>
      <Footer hideLifeAtJKKN />
      <FloatingButtons />
    </>
  );
}
