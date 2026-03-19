import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M.Sc Child Health Nursing — JKKN Nursing College",
  description: "M.Sc Nursing in Child Health (Pediatric Nursing) at JKKN. 2-year specialization in pediatric care, neonatal nursing, and child development.",
  keywords: "msc child health nursing, pediatric nursing msc, msc nursing child health tamilnadu, neonatal nursing course, pediatric nursing colleges tamilnadu",
  openGraph: {
    title: "M.Sc Child Health Nursing — JKKN Nursing College",
    description: "M.Sc Nursing in Child Health (Pediatric Nursing) at JKKN. 2-year specialization in pediatric care, neonatal nursing, and child development.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-child-health",
    siteName: "Sresakthimayeil Institute of Nursing and Research",
    images: [
      {
        url: "/images/Master-of-Science-in-Nursing-Hero-Banner-Image.webp",
        width: 1200,
        height: 630,
        alt: "M.Sc Child Health Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.Sc Child Health Nursing — JKKN Nursing College",
    description: "M.Sc Nursing in Child Health (Pediatric Nursing) at JKKN. 2-year specialization in pediatric care, neonatal nursing, and child development.",
    images: ["/images/Master-of-Science-in-Nursing-Hero-Banner-Image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-child-health",
  },
};

const mscChildHealthSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "M.Sc Nursing in Child Health (Pediatric Nursing)",
  "description": "2-year M.Sc Nursing specialization in Child Health at Sresakthimayeil Institute of Nursing and Research, Komarapalayam. Focus on pediatric care, neonatal nursing, and child development. INC approved, affiliated to TNMGRMU.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-child-health",
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
  "educationalCredentialAwarded": "M.Sc Nursing (Child Health)",
  "timeRequired": "P2Y",
  "occupationalCategory": "Pediatric Nurse Specialist",
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

const mscChildHealthFaqSchema = {
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
};

export default function MScChildHealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mscChildHealthSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mscChildHealthFaqSchema) }} />
      {children}
    </>
  );
}
