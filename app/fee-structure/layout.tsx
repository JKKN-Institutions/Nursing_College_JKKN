import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JKKN College of Nursing and Research Fees Structure 2026-27",
  description: "JKKN College of Nursing and Research fee structure 2026-27 — B.Sc, M.Sc and Post Basic B.Sc Nursing fees, government and management quota, hostel and loans.",
  keywords: "nursing college fees tamil nadu, bsc nursing fees, msc nursing fees, JKKN nursing fees, nursing college fee structure, affordable nursing college",
  openGraph: {
    title: "JKKN College of Nursing and Research Fees Structure 2026-27",
    description: "Complete fee structure for nursing programs at JKKN. Affordable fees, scholarships, education loan assistance.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/fee-structure",
    siteName: "Sresakthimayeil Institute Of Nursing And Research",
    images: [{ url: "/images/nursing_logo.png", width: 1200, height: 630, alt: "JKKN Nursing Fee Structure" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JKKN College of Nursing and Research Fees Structure 2026-27",
    description: "Complete fee structure for nursing programs at Sresakthimayeil Institute Of Nursing And Research.",
    images: ["/images/nursing_logo.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/fee-structure" },
};

// FAQPage removed 2026-09-18 - it was a SECOND, divergent copy of the FAQs. Measured on
// the built HTML, its questions/answers were absent from the rendered DOM, so it asserted
// Q&A no user or crawler could see. The page-level FAQPage, built from the array the page
// actually renders, is the one that survives.

export default function FeeStructureLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
