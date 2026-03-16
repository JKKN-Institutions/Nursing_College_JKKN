import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M.Sc Nursing Course — Specialisations | JKKN Nursing",
  description: "M.Sc Nursing at JKKN with 5 specializations: Child Health, Community Health, Medical-Surgical, Mental Health, OBG. 2-year course, INC approved.",
  keywords: "msc nursing colleges in tamilnadu, msc nursing distance education in tamilnadu, best msc nursing colleges in tamilnadu, msc nursing private colleges in tamilnadu",
  openGraph: {
    title: "M.Sc Nursing Course — Specialisations | JKKN Nursing",
    description: "M.Sc Nursing at JKKN with 5 specializations: Child Health, Community Health, Medical-Surgical, Mental Health, OBG. 2-year course, INC approved.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/Master-of-Science-in-Nursing-Hero-Banner-Image.png",
        width: 1200,
        height: 630,
        alt: "MSc Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.Sc Nursing Course — Specialisations | JKKN Nursing",
    description: "M.Sc Nursing at JKKN with 5 specializations: Child Health, Community Health, Medical-Surgical, Mental Health, OBG. 2-year course, INC approved.",
    images: ["/images/Master-of-Science-in-Nursing-Hero-Banner-Image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing",
  },
};

const mscNursingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the M.Sc Nursing specializations available at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN offers M.Sc Nursing in 5 specializations: Medical-Surgical Nursing, Obstetrics & Gynecological Nursing, Child Health (Pediatric) Nursing, Mental Health (Psychiatric) Nursing, and Community Health Nursing. Each specialization prepares graduates for advanced clinical practice, nursing education, and research roles."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility for M.Sc Nursing at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must hold a B.Sc Nursing degree from a recognized university with minimum 55% aggregate marks. Registration with the State Nursing Council is required. Candidates must have at least 1 year of clinical experience after completing B.Sc Nursing."
      }
    },
    {
      "@type": "Question",
      "name": "What is the M.Sc Nursing course duration and fee at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "M.Sc Nursing is a 2-year full-time postgraduate programme. The annual tuition fee is approximately ₹1,25,000 per year. The course includes advanced theoretical studies, clinical specialization, research methodology, and dissertation work."
      }
    },
    {
      "@type": "Question",
      "name": "What career opportunities are available after M.Sc Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "M.Sc Nursing graduates can work as Nurse Educators in nursing colleges, Clinical Nurse Specialists in hospitals, Nursing Superintendents, Research Associates, and Public Health Consultants. International opportunities include positions in UK (NHS), USA, Australia, and Gulf countries with salaries ranging from ₹8-25 LPA."
      }
    },
    {
      "@type": "Question",
      "name": "Does JKKN provide research facilities for M.Sc Nursing students?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JKKN provides comprehensive research facilities including a well-equipped research lab, access to international nursing journals and databases, guidance from experienced faculty for dissertation work, and opportunities to present research at national and international conferences."
      }
    }
  ]
};

const mscNursingSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Master of Science in Nursing (M.Sc Nursing)",
  "description": "2-year INC-approved postgraduate nursing program at JKKN College of Nursing, Komarapalayam. Affiliated to Tamil Nadu Dr. MGR Medical University. Specializations in Child Health, Community Health, Medical-Surgical, Mental Health, and OBG Nursing.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing/",
  "provider": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Nursing",
    "url": "https://nursing.sresakthimayeil.jkkn.ac.in/"
  },
  "educationalCredentialAwarded": "M.Sc Nursing",
  "timeRequired": "P2Y",
  "occupationalCategory": "Advanced Practice Nurse, Nurse Educator",
  "coursePrerequisites": "B.Sc Nursing from a recognized university with minimum 55% aggregate.",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Full-time",
    "startDate": "2026-09"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "url": "https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8",
    "category": "Government Quota / Management Quota"
  }
};

export default function MScNursingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mscNursingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mscNursingFaqSchema) }}
      />
      {children}
    </>
  );
}
