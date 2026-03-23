import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M.Sc Nursing at Sresakthimayeil Institute of Nursing and Research | 5 Specializations",
  description: "M.Sc Nursing at Sresakthimayeil Institute of Nursing and Research with 5 specializations. 2-year postgraduate program affiliated to TNMGRMU. Research-focused curriculum. Apply now.",
  keywords: "msc nursing colleges in tamilnadu, msc nursing distance education in tamilnadu, best msc nursing colleges in tamilnadu, msc nursing private colleges in tamilnadu",
  openGraph: {
    title: "M.Sc Nursing at Sresakthimayeil Institute of Nursing and Research | 5 Specializations",
    description: "M.Sc Nursing at Sresakthimayeil Institute of Nursing and Research with 5 specializations. 2-year postgraduate program affiliated to TNMGRMU. Research-focused curriculum. Apply now.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing",
    siteName: "Sresakthimayeil Institute of Nursing and Research",
    images: [
      {
        url: "/images/Master-of-Science-in-Nursing-Hero-Banner-Image.webp",
        width: 1200,
        height: 630,
        alt: "MSc Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.Sc Nursing at Sresakthimayeil Institute of Nursing and Research | 5 Specializations",
    description: "M.Sc Nursing at Sresakthimayeil Institute of Nursing and Research with 5 specializations. 2-year postgraduate program affiliated to TNMGRMU. Research-focused curriculum. Apply now.",
    images: ["/images/Master-of-Science-in-Nursing-Hero-Banner-Image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing",
  },
};

const mscFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What M.Sc Nursing specializations does JKKN offer?", "acceptedAnswer": { "@type": "Answer", "text": "5 specializations: 1) Medical-Surgical Nursing (most popular), 2) OBG Nursing, 3) Pediatric Nursing, 4) Psychiatric Nursing, 5) Community Health Nursing." } },
    { "@type": "Question", "name": "What is the eligibility for M.Sc Nursing at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "B.Sc Nursing or Post Basic B.Sc with 55% marks, 1 year clinical experience, valid TNNMC registration. 2 years full-time, 25 seats, ₹1,25,000/year." } },
    { "@type": "Question", "name": "What careers after M.Sc Nursing from JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "Nursing Educator, Clinical Nurse Specialist, Nurse Manager, Research Associate, Advanced Practice Nurse in specialized departments." } },
    { "@type": "Question", "name": "What is the M.Sc Nursing fee at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "₹1,25,000 per year for the 2-year program. Includes tuition, lab, clinical training, exam fees. Hostel: ₹60,000-75,000/year. Merit scholarships available." } }
  ]
};

const mscNursingSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Master of Science in Nursing (M.Sc Nursing)",
  "description": "2-year INC-approved postgraduate nursing program at Sresakthimayeil Institute of Nursing and Research, Komarapalayam. Affiliated to Tamil Nadu Dr. MGR Medical University. Specializations in Child Health, Community Health, Medical-Surgical, Mental Health, and OBG Nursing.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing/",
  "provider": {
    "@type": "CollegeOrUniversity",
    "name": "Sresakthimayeil Institute of Nursing and Research",
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
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".course-overview", ".key-facts"]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mscFaqSchema) }}
      />
      {children}
    </>
  );
}
