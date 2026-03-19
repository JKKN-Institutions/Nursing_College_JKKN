import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post Basic B.Sc Nursing at JKKN | 2-Year Bridge Program for GNM",
  description: "Post Basic B.Sc Nursing at Sresakthimayeil Institute of Nursing and Research for GNM diploma holders. 2-year INC-approved program. Upgrade to B.Sc degree. Apply now.",
  keywords: "post bsc nursing colleges in tamilnadu, post bsc nursing correspondence course in tamilnadu, list of post bsc nursing colleges in tamilnadu, post basic bsc nursing distance education in tamilnadu, post bsc nursing distance education in tamilnadu, post bsc nursing in tamilnadu",
  openGraph: {
    title: "Post Basic B.Sc Nursing at JKKN | 2-Year Bridge Program for GNM",
    description: "Post Basic B.Sc Nursing at Sresakthimayeil Institute of Nursing and Research for GNM diploma holders. 2-year INC-approved program. Upgrade to B.Sc degree. Apply now.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/pbsc-nursing",
    siteName: "Sresakthimayeil Institute of Nursing and Research",
    images: [
      {
        url: "/images/P.B.B.Sc-Nursing-Hero-Banner-Image.webp",
        width: 1200,
        height: 630,
        alt: "Post BSc Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Post Basic B.Sc Nursing at JKKN | 2-Year Bridge Program for GNM",
    description: "Post Basic B.Sc Nursing at Sresakthimayeil Institute of Nursing and Research for GNM diploma holders. 2-year INC-approved program. Upgrade to B.Sc degree. Apply now.",
    images: ["/images/P.B.B.Sc-Nursing-Hero-Banner-Image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/pbsc-nursing",
  },
};

const pbscFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the eligibility for Post Basic B.Sc Nursing at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must hold a GNM (General Nursing and Midwifery) diploma from a recognized institution and be registered with the State Nursing Council. A minimum of 2 years of clinical experience after GNM is required for admission to Sresakthimayeil Institute of Nursing and Research's Post Basic B.Sc Nursing program."
      }
    },
    {
      "@type": "Question",
      "name": "What is the duration of Post Basic B.Sc Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Post Basic B.Sc Nursing program at Sresakthimayeil Institute of Nursing and Research is a 2-year full-time course affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai. The program is approved by the Indian Nursing Council (INC) and Tamil Nadu Nurses and Midwives Council (TNNMC)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Post Basic B.Sc Nursing fee at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The annual tuition fee for Post Basic B.Sc Nursing at Sresakthimayeil Institute of Nursing and Research is approximately Rs. 85,000 per year. Additional charges apply for hostel accommodation, transport, and examination fees. Scholarship options are available for eligible candidates."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career opportunities after Post Basic B.Sc Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Graduates of Sresakthimayeil Institute of Nursing and Research's Post Basic B.Sc program can pursue careers as Staff Nurse, Nursing Supervisor, Clinical Instructor, Public Health Nurse, or Community Health Nurse. The degree also qualifies candidates for M.Sc Nursing admission and international nursing positions in the UK (NHS), UAE, Saudi Arabia, and Singapore."
      }
    },
    {
      "@type": "Question",
      "name": "How is Post Basic B.Sc Nursing different from regular B.Sc Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Post Basic B.Sc Nursing at Sresakthimayeil Institute of Nursing and Research is a 2-year bridge program designed for GNM diploma holders to upgrade to a bachelor's degree. Regular B.Sc Nursing is a 4-year program for 10+2 students. Both programs are affiliated to Tamil Nadu Dr. M.G.R. Medical University and approved by the Indian Nursing Council (INC)."
      }
    }
  ]
};

const pbscBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "JKKN Institutions", "item": "https://jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "College of Nursing", "item": "https://nursing.sresakthimayeil.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 3, "name": "Post Basic B.Sc Nursing", "item": "https://nursing.sresakthimayeil.jkkn.ac.in/pbsc-nursing" }
  ]
};

const pbscNursingSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Post Basic B.Sc Nursing",
  "description": "2-year INC-approved program for GNM diploma holders. Upgrade your nursing qualifications to a full B.Sc Nursing degree at Sresakthimayeil Institute of Nursing and Research, Komarapalayam.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/pbsc-nursing/",
  "provider": {
    "@type": "CollegeOrUniversity",
    "name": "Sresakthimayeil Institute of Nursing and Research",
    "url": "https://nursing.sresakthimayeil.jkkn.ac.in/"
  },
  "educationalCredentialAwarded": "Post Basic B.Sc Nursing",
  "timeRequired": "P2Y",
  "occupationalCategory": "Registered Nurse",
  "coursePrerequisites": "GNM (General Nursing and Midwifery) diploma from a recognized institution with 2 years of registered nursing experience.",
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

export default function PBScNursingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pbscNursingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pbscFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pbscBreadcrumbSchema) }}
      />
      {children}
    </>
  );
}
