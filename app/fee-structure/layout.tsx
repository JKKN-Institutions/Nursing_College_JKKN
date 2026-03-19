import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fee Structure 2026-27 — B.Sc, M.Sc Nursing Fees | JKKN",
  description: "Sresakthimayeil Institute of Nursing and Research fee structure: B.Sc Nursing ₹95,000/year, M.Sc Nursing ₹1,25,000/year, Post Basic B.Sc ₹85,000/year. Hostel, scholarships, loan info.",
  keywords: "nursing college fees tamil nadu, bsc nursing fees, msc nursing fees, JKKN nursing fees, nursing college fee structure, affordable nursing college",
  openGraph: {
    title: "Fee Structure 2026-27 — B.Sc, M.Sc Nursing Fees | JKKN",
    description: "Complete fee structure for nursing programs at JKKN. Affordable fees, scholarships, education loan assistance.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/fee-structure",
    siteName: "Sresakthimayeil Institute of Nursing and Research",
    images: [{ url: "/images/nursing_logo.png", width: 1200, height: 630, alt: "JKKN Nursing Fee Structure" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fee Structure 2026-27 — B.Sc, M.Sc Nursing Fees | JKKN",
    description: "Complete fee structure for nursing programs at Sresakthimayeil Institute of Nursing and Research.",
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
        "text": "The annual tuition fee for B.Sc Nursing at Sresakthimayeil Institute of Nursing and Research is ₹95,000 per year. The total course fee for the 4-year program is ₹3,80,000.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the hostel fee at Sresakthimayeil Institute of Nursing and Research?",
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
        "text": "The annual tuition fee for M.Sc Nursing is ₹1,25,000 per year. The total course fee for the 2-year program is ₹2,50,000.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Sresakthimayeil Institute of Nursing and Research help with education loans?",
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
