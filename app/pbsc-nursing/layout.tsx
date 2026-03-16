import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post Basic B.Sc Nursing — JKKN Nursing College",
  description: "Post Basic B.Sc Nursing course for registered nurses at JKKN, Komarapalayam. 2-year programme, INC approved, career advancement opportunities.",
  keywords: "post bsc nursing colleges in tamilnadu, post bsc nursing correspondence course in tamilnadu, list of post bsc nursing colleges in tamilnadu, post basic bsc nursing distance education in tamilnadu, post bsc nursing distance education in tamilnadu, post bsc nursing in tamilnadu",
  openGraph: {
    title: "Post Basic B.Sc Nursing — JKKN Nursing College",
    description: "Post Basic B.Sc Nursing course for registered nurses at JKKN, Komarapalayam. 2-year programme, INC approved, career advancement opportunities.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/pbsc-nursing",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/P.B.B.Sc-Nursing-Hero-Banner-Image.png",
        width: 1200,
        height: 630,
        alt: "Post BSc Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Post Basic B.Sc Nursing — JKKN Nursing College",
    description: "Post Basic B.Sc Nursing course for registered nurses at JKKN, Komarapalayam. 2-year programme, INC approved, career advancement opportunities.",
    images: ["/images/P.B.B.Sc-Nursing-Hero-Banner-Image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/pbsc-nursing",
  },
};

const pbscNursingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Post Basic B.Sc Nursing and who is it for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Post Basic B.Sc Nursing is a 2-year degree programme designed for registered GNM (General Nursing and Midwifery) diploma holders who want to upgrade their qualification to a full B.Sc Nursing degree. It enables working nurses to advance their career, pursue M.Sc Nursing, and access higher positions in hospitals and academia."
      }
    },
    {
      "@type": "Question",
      "name": "What is the eligibility for Post Basic B.Sc Nursing at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must hold a GNM diploma from a recognized institution, have registration with the State Nursing Council, and possess at least 2 years of clinical nursing experience. Both male and female nurses are eligible to apply."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Post Basic B.Sc Nursing fee structure at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The annual tuition fee for Post Basic B.Sc Nursing at JKKN is approximately ₹85,000 per year. Additional charges include hostel fees, examination fees, and library fees. Scholarships and educational loan assistance are available for eligible students."
      }
    },
    {
      "@type": "Question",
      "name": "Can I work while studying Post Basic B.Sc Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Post Basic B.Sc Nursing at JKKN is a full-time course requiring regular attendance for classes and clinical postings. However, the programme is structured to accommodate working nurses, with clinical postings at the attached 500+ bed teaching hospital providing practical learning alongside academics."
      }
    },
    {
      "@type": "Question",
      "name": "What are the career benefits of Post Basic B.Sc Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Post Basic B.Sc Nursing graduates become eligible for M.Sc Nursing admission, nursing faculty positions, senior nursing roles in hospitals, government nursing officer positions, and international nursing opportunities in UK, USA, Australia, and Gulf countries. The degree significantly enhances career progression and salary prospects."
      }
    }
  ]
};

const pbscNursingSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Post Basic B.Sc Nursing",
  "description": "2-year INC-approved program for GNM diploma holders. Upgrade your nursing qualifications to a full B.Sc Nursing degree at JKKN College of Nursing, Komarapalayam.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/pbsc-nursing/",
  "provider": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Nursing",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pbscNursingFaqSchema) }}
      />
      {children}
    </>
  );
}
