import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M.Sc Medical-Surgical Nursing — JKKN Nursing",
  description: "M.Sc Nursing in Medical-Surgical Nursing at JKKN. Advanced training in critical care, surgical nursing, and patient management.",
  keywords: "msc medical surgical nursing, critical care nursing msc, surgical nursing course tamilnadu, medical surgical nursing colleges, msc nursing medical",
  openGraph: {
    title: "M.Sc Medical-Surgical Nursing — JKKN Nursing",
    description: "M.Sc Nursing in Medical-Surgical Nursing at JKKN. Advanced training in critical care, surgical nursing, and patient management.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-medical-surgical",
    siteName: "Sresakthimayeil Institute of Nursing and Research",
    images: [
      {
        url: "/images/Master-of-Science-in-Nursing-Hero-Banner-Image.webp",
        width: 1200,
        height: 630,
        alt: "M.Sc Medical-Surgical Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.Sc Medical-Surgical Nursing — JKKN Nursing",
    description: "M.Sc Nursing in Medical-Surgical Nursing at JKKN. Advanced training in critical care, surgical nursing, and patient management.",
    images: ["/images/Master-of-Science-in-Nursing-Hero-Banner-Image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-medical-surgical",
  },
};

const mscMedicalSurgicalSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "M.Sc Nursing in Medical-Surgical Nursing",
  "description": "2-year M.Sc Nursing specialization in Medical-Surgical Nursing at Sresakthimayeil Institute of Nursing and Research, Komarapalayam. Advanced training in critical care, surgical nursing, and patient management. INC approved, affiliated to TNMGRMU.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-medical-surgical",
  "provider": {
    "@type": "CollegeOrUniversity",
    "name": "Sresakthimayeil Institute of Nursing and Research",
    "url": "https://nursing.sresakthimayeil.jkkn.ac.in/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Natarajapuram, NH-544, Salem-Coimbatore Highway",
      "addressLocality": "Komarapalayam",
      "addressRegion": "Tamil Nadu",
      "postalCode": "638183",
      "addressCountry": "IN"
    }
  },
  "educationalCredentialAwarded": "M.Sc Nursing (Medical-Surgical)",
  "timeRequired": "P2Y",
  "occupationalCategory": "Medical-Surgical Nurse Specialist",
  "coursePrerequisites": "B.Sc Nursing with minimum 55% aggregate and 1 year clinical experience. Registration with State Nursing Council required.",
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

const mscMedicalSurgicalFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the duration of M.Sc Nursing in Medical Surgical Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "M.Sc Nursing in Medical Surgical Nursing is a 2-year full-time postgraduate program divided into 4 semesters. The first year focuses on core nursing subjects, research methodology, and foundational clinical specialty courses. The second year emphasizes advanced clinical specialization, teaching practicum, and dissertation/thesis work."
      }
    },
    {
      "@type": "Question",
      "name": "What are the eligibility criteria for M.Sc Nursing admission?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must have completed B.Sc Nursing (4-year course) or Post Basic B.Sc Nursing with a minimum of 55% aggregate marks from a recognized university. Additionally, applicants must possess valid registration with the State Nursing Council as RN/RM and have at least 1 year of clinical work experience after completing their basic nursing degree."
      }
    },
    {
      "@type": "Question",
      "name": "What career opportunities are available after completing M.Sc Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates can pursue diverse careers including Nursing Educator/Lecturer at nursing colleges, Clinical Nurse Specialist in hospitals, Nurse Administrator/Nursing Superintendent, Research Associate at healthcare organizations, ICU/CCU Unit Head, Quality Assurance Officer, and can also pursue Ph.D. in Nursing for academic and research careers."
      }
    },
    {
      "@type": "Question",
      "name": "Is the M.Sc Nursing program at JKKN approved by INC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the M.Sc Nursing program at Sresakthimayeil Institute of Nursing and Research is approved by the Indian Nursing Council (INC) and is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. The college is also recognized by the Tamil Nadu Nurses and Midwives Council, ensuring that the degree is valid for employment and higher education across India."
      }
    },
    {
      "@type": "Question",
      "name": "What specialization areas are covered in Medical Surgical Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medical Surgical Nursing specialization encompasses a wide range of clinical areas including critical care nursing, emergency and trauma nursing, perioperative nursing, cardiac nursing, neurological nursing, oncology nursing, orthopedic nursing, nephrology nursing, and gastroenterological nursing. Learners gain comprehensive expertise in managing complex patient conditions across multiple clinical settings."
      }
    }
  ]
};

export default function MScMedicalSurgicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mscMedicalSurgicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mscMedicalSurgicalFaqSchema) }} />
      {children}
    </>
  );
}
