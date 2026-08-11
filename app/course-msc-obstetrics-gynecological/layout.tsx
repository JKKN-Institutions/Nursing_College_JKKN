import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M.Sc OBG Nursing — JKKN College of Nursing",
  description: "M.Sc Nursing in Obstetrics & Gynecological Nursing at JKKN. Specialization in maternal health, midwifery, and women's healthcare.",
  keywords: "msc obg nursing, msc obstetrics gynecology nursing, midwifery nursing course tamilnadu, maternal health nursing, msc nursing obg colleges",
  openGraph: {
    title: "M.Sc OBG Nursing — JKKN College of Nursing",
    description: "M.Sc Nursing in Obstetrics & Gynecological Nursing at JKKN. Specialization in maternal health, midwifery, and women's healthcare.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-obstetrics-gynecological",
    siteName: "Sresakthimayeil Institute Of Nursing And Research",
    images: [
      {
        url: "/images/Master-of-Science-in-Nursing-Hero-Banner-Image.webp",
        width: 1200,
        height: 630,
        alt: "M.Sc OBG Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.Sc OBG Nursing — JKKN College of Nursing",
    description: "M.Sc Nursing in Obstetrics & Gynecological Nursing at JKKN. Specialization in maternal health, midwifery, and women's healthcare.",
    images: ["/images/Master-of-Science-in-Nursing-Hero-Banner-Image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-obstetrics-gynecological",
  },
};

const mscObstetricsGynecologicalSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "M.Sc Nursing in Obstetrics & Gynecological Nursing",
  "description": "2-year M.Sc Nursing specialization in OBG Nursing at Sresakthimayeil Institute Of Nursing And Research, Komarapalayam. Focus on maternal health, midwifery, and women's healthcare. INC approved, affiliated to TNMGRMU.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-obstetrics-gynecological",
  "provider": {
    "@type": "CollegeOrUniversity",
    "name": "Sresakthimayeil Institute Of Nursing And Research",
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
  "educationalCredentialAwarded": "M.Sc Nursing (OBG)",
  "timeRequired": "P2Y",
  "occupationalCategory": "Obstetric & Gynecological Nurse Specialist",
  "coursePrerequisites": "B.Sc Nursing with minimum 55% aggregate and 1 year clinical experience. Registration with State Nursing Council required.",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Full-time",
    "startDate": "2026-09"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "url": "https://www.jkkn.ai/apply/jkkn-admission-2026",
    "category": "Government Quota / Management Quota"
  }
};

const mscObstetricsGynecologicalFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the duration of M.Sc Nursing in Obstetrics and Gynecology Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "M.Sc Nursing in Obstetrics and Gynecology Nursing is a 2-year full-time postgraduate program divided into 4 semesters. The first year focuses on core nursing subjects, research methodology, and foundational OBG nursing courses including antenatal care and normal midwifery. The second year emphasizes advanced clinical specialization in high-risk pregnancy, neonatal care, gynecological nursing, and dissertation/thesis work."
      }
    },
    {
      "@type": "Question",
      "name": "What are the eligibility criteria for M.Sc OBG Nursing admission?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must have completed B.Sc Nursing (4-year course) or Post Basic B.Sc Nursing with a minimum of 55% aggregate marks from a recognized university. Additionally, applicants must possess valid registration with the State Nursing Council as RN/RM and have at least 1 year of clinical work experience after completing their basic nursing degree."
      }
    },
    {
      "@type": "Question",
      "name": "What career opportunities are available after completing M.Sc OBG Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates can pursue diverse careers including Nursing Educator/Lecturer specializing in maternal-child health at nursing colleges, Clinical Nurse Midwife, Women's Health Consultant, Labor Ward Manager, NICU Specialist, Research Associate in maternal health, Quality Assurance Officer in maternity services, and can also pursue Ph.D. in Nursing for academic and research careers."
      }
    },
    {
      "@type": "Question",
      "name": "Is the M.Sc OBG Nursing program at JKKN approved by INC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the M.Sc Nursing program in Obstetrics and Gynecology at Sresakthimayeil Institute Of Nursing And Research is approved by the Indian Nursing Council (INC) and is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. The college is also recognized by the Tamil Nadu Nurses and Midwives Council, ensuring that the degree is valid for employment and higher education across India."
      }
    },
    {
      "@type": "Question",
      "name": "What specialization areas are covered in OBG Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OBG Nursing specialization encompasses antenatal care, intrapartum nursing, postnatal care, high-risk pregnancy management, neonatal nursing, gynecological nursing, reproductive health, family planning services, infertility counseling, and women's health promotion. Learners gain comprehensive expertise in managing maternal and newborn care across various clinical settings."
      }
    }
  ]
};

export default function MScObstetricsGynecologicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mscObstetricsGynecologicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mscObstetricsGynecologicalFaqSchema) }} />
      {children}
    </>
  );
}
