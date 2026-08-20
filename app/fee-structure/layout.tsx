import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JKKN College of Nursing Fees Structure 2026-27",
  description: "JKKN College of Nursing and Research fee structure 2026-27 — B.Sc, M.Sc and Post Basic B.Sc Nursing fees, government and management quota, hostel and loans.",
  keywords: "nursing college fees tamil nadu, bsc nursing fees, msc nursing fees, JKKN nursing fees, nursing college fee structure, affordable nursing college",
  openGraph: {
    title: "JKKN College of Nursing Fees Structure 2026-27",
    description: "Complete fee structure for nursing programs at JKKN. Affordable fees, scholarships, education loan assistance.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/fee-structure",
    siteName: "Sresakthimayeil Institute Of Nursing And Research",
    images: [{ url: "/images/nursing_logo.png", width: 1200, height: 630, alt: "JKKN Nursing Fee Structure" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JKKN College of Nursing Fees Structure 2026-27",
    description: "Complete fee structure for nursing programs at Sresakthimayeil Institute Of Nursing And Research.",
    images: ["/images/nursing_logo.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/fee-structure" },
};

const feeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the fee for B.Sc Nursing at JKKN College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The annual fee for B.Sc Nursing at Sresakthimayeil Institute Of Nursing And Research under Management Quota (MQ) is ₹1,50,000 for female students and ₹1,75,000 for male students. Government Quota (GQ) fees are as per Govt norms.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the hostel fee at Sresakthimayeil Institute Of Nursing And Research?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hostel fees range from ₹60,000 to ₹75,000 per year depending on room type. This includes food and basic amenities.",
      },
    },
    {
      "@type": "Question",
      "name": "Are scholarships available for nursing students at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JKKN offers government scholarships for BC/MBC/SC/ST students, merit-based fee concessions up to 25% for NEET toppers, JKKN Trust scholarships for economically weaker sections, and education loan tie-ups with major banks.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the fee for M.Sc Nursing at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The annual fee for M.Sc Nursing under Management Quota (MQ) ranges from ₹75,000 to ₹1,00,000 depending on the specialization: Medical Surgical ₹1,00,000, OBG & GYN ₹80,000, Psychiatric / Paediatric / Community Health ₹75,000 each. Government Quota (GQ) fees are as per Govt norms.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Sresakthimayeil Institute Of Nursing And Research help with education loans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JKKN has tie-ups with SBI, Indian Bank, Canara Bank, and HDFC for education loans. The college provides documentation assistance and guidance for loan applications.",
      },
    },
  ],
};

export default function FeeStructureLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(feeFaqSchema) }}
      />
      {children}
    </>
  );
}
