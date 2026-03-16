import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Placements — 98%+ Rate, NHS UK, Apollo | JKKN Nursing",
  description:
    "JKKN College of Nursing placement cell: 98%+ placement rate, 80+ recruiters including NHS UK, Apollo, Cleveland Clinic Abu Dhabi. Salary ₹3.5-25 LPA.",
  keywords:
    "nursing placement, nursing jobs, JKKN nursing placement, nursing college placement tamil nadu, NHS UK nursing jobs, nursing salary india, best nursing college placement",
  openGraph: {
    title: "Placements — 98%+ Rate, NHS UK, Apollo | JKKN Nursing",
    description:
      "JKKN College of Nursing placement cell: 98%+ placement rate, 80+ recruiters. International placements to UK, UAE, Saudi Arabia.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/placement",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN Nursing Placements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Placements — 98%+ Rate, NHS UK, Apollo | JKKN Nursing",
    description:
      "JKKN College of Nursing: 98%+ placement rate, 80+ recruiters, international placements.",
    images: ["/images/nursing_logo.png"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/placement",
  },
};

const placementFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the placement rate at JKKN College of Nursing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JKKN College of Nursing maintains a 98%+ placement rate. Over 80 recruiters visit campus annually, including top hospitals in India and international organisations such as NHS UK, Cleveland Clinic Abu Dhabi, and Aster DM Healthcare.",
      },
    },
    {
      "@type": "Question",
      name: "Which companies recruit from JKKN College of Nursing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Major recruiters include Apollo Hospitals, Fortis Healthcare, Manipal Hospitals, Kauvery Hospital, MIOT Hospitals, KMCH, and Meenakshi Mission Hospital in India, and internationally NHS UK, Cleveland Clinic Abu Dhabi, Saudi German Hospital, Aster DM Healthcare (UAE), and Singapore General Hospital.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average salary package for nursing graduates from JKKN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For domestic placements the average salary is Rs. 3.5-4.5 LPA in private hospitals and Rs. 5.0-7.0 LPA in government hospitals. For international placements, average salaries range from Rs. 15-25 LPA, with the highest package at Rs. 25+ LPA for NHS UK positions.",
      },
    },
    {
      "@type": "Question",
      name: "Does JKKN College of Nursing provide international placement support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. JKKN has active international placement partnerships with organisations in the UK (NHS), UAE (Cleveland Clinic Abu Dhabi, Aster DM Healthcare), Saudi Arabia (Saudi German Hospital), Singapore, Australia, and Canada. The college provides visa guidance, documentation support, and licensing exam preparation for all international destinations.",
      },
    },
    {
      "@type": "Question",
      name: "Does JKKN College of Nursing help with NCLEX and IELTS preparation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. JKKN operates a dedicated training centre that prepares students for NCLEX-RN (USA nursing licence), OET and IELTS (required for UK and Australia), DHA and HAAD exams (UAE), and PROMETRIC exams (Saudi Arabia). Coaching is provided as part of the placement programme.",
      },
    },
    {
      "@type": "Question",
      name: "When do placement drives happen at JKKN College of Nursing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Placement activities at JKKN are conducted year-round as an integral part of the curriculum. Major campus recruitment drives are held from August to February, coinciding with the end of the academic year and peak hiring cycles for hospitals in India and abroad.",
      },
    },
  ],
};

export default function PlacementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placementFaqSchema) }}
      />
      {children}
    </>
  );
}
