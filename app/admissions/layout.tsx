import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions 2026-27 — B.Sc, M.Sc, Post Basic Nursing | JKKN",
  description:
    "Apply for B.Sc Nursing, M.Sc Nursing, Post Basic B.Sc Nursing at Sresakthimayeil Institute of Nursing and Research, Komarapalayam. INC approved, NAAC accredited, 97% placement.",
  keywords:
    "nursing admission 2026, bsc nursing admission tamil nadu, msc nursing admission, nursing college admission komarapalayam, JKKN nursing admission, nursing entrance exam",
  openGraph: {
    title: "Admissions 2026-27 — B.Sc, M.Sc, Post Basic Nursing | JKKN",
    description:
      "Apply for nursing programs at Sresakthimayeil Institute of Nursing and Research. INC approved, 97% placement, international opportunities.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/admissions",
    siteName: "Sresakthimayeil Institute of Nursing and Research",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN Nursing Admissions 2026-27",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions 2026-27 — B.Sc, M.Sc, Post Basic Nursing | JKKN",
    description:
      "Apply for nursing programs at Sresakthimayeil Institute of Nursing and Research. INC approved, 97% placement.",
    images: ["/images/nursing_logo.png"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/admissions",
  },
};

const admissionsWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Admissions 2026-27 — B.Sc, M.Sc, Post Basic Nursing | JKKN",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/admissions",
  "description": "Apply for B.Sc Nursing, M.Sc Nursing, Post Basic B.Sc Nursing at Sresakthimayeil Institute of Nursing and Research, Komarapalayam. INC approved, NAAC accredited, 97% placement.",
  "isPartOf": {
    "@type": "WebSite",
    "url": "https://nursing.sresakthimayeil.jkkn.ac.in/"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".admission-overview", ".key-facts"]
  }
};

const admissionHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Apply for Nursing Admission at JKKN College",
  description:
    "Step-by-step guide to apply for B.Sc, M.Sc, or Post Basic B.Sc Nursing at Sresakthimayeil Institute of Nursing and Research, Komarapalayam.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Check Eligibility",
      text: "Verify you meet the minimum eligibility criteria for your chosen nursing program (B.Sc, M.Sc, or Post Basic B.Sc Nursing).",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Apply Online",
      text: "Fill out the online application form at admission.jkkn.ac.in with your personal and academic details.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Document Verification",
      text: "Submit original documents including mark sheets, NEET score card, certificates for verification.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Counselling",
      text: "Attend counselling session for seat allotment through Government Quota or Management Quota.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Fee Payment",
      text: "Pay the prescribed admission and tuition fees to confirm your seat.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Admission Confirmed",
      text: "Receive your admission letter and join on the specified date to begin your nursing education.",
    },
  ],
};

const admissionFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How to apply for nursing admission at JKKN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apply online at admission.jkkn.ac.in, submit required documents for verification, and attend the counselling session for seat allotment under Government Quota or Management Quota.",
      },
    },
    {
      "@type": "Question",
      name: "What is the eligibility for B.Sc Nursing at JKKN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Candidates must have passed 10+2 with Physics, Chemistry, and Biology (PCB) with a minimum 45% aggregate marks, must be NEET-UG qualified, and should be between 17 and 35 years of age.",
      },
    },
    {
      "@type": "Question",
      name: "What is the fee for nursing courses at JKKN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The annual tuition fee for B.Sc Nursing is ₹95,000, for M.Sc Nursing is ₹1,25,000, and for Post Basic B.Sc Nursing is ₹85,000. Fees are reviewed annually.",
      },
    },
    {
      "@type": "Question",
      name: "Is NEET required for nursing admission at JKKN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, NEET-UG qualification is mandatory for B.Sc Nursing admission. NEET is not required for M.Sc Nursing and Post Basic B.Sc Nursing programs.",
      },
    },
    {
      "@type": "Question",
      name: "Does JKKN offer scholarships for nursing students?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. JKKN nursing students are eligible for government scholarships (BC/MBC/SC/ST), merit-based fee concessions, and education loan assistance through tie-ups with major banks. Management quota scholarships are also available for toppers.",
      },
    },
    {
      "@type": "Question",
      name: "When does nursing admission start for 2026-27 at JKKN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Applications open in March 2026. NEET-UG exam is scheduled for May 2026, counselling begins in July 2026, and classes commence in September 2026. Dates are tentative and subject to government/university notifications.",
      },
    },
  ],
};

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(admissionsWebPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(admissionHowToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(admissionFaqSchema) }}
      />
      {children}
    </>
  );
}
