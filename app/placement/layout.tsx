import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Placements at JKKN College of Nursing: 98% UG (NIRF 2026)",
  description:
    "UG 2024-25: 58 of 59 graduates placed (98%), median salary Rs 3,60,000; M.Sc: 11 of 11 placed. NIRF 2026 data submitted by JKKN College of Nursing.",
  keywords:
    "nursing placement, nursing jobs, JKKN nursing placement, nursing college placement tamil nadu, nursing salary india, NIRF nursing placement",
  openGraph: {
    title: "Placements — 98% in 2024-25 (NIRF 2026) | JKKN Nursing",
    description:
      "UG 2024-25: 58 of 59 graduates placed (98%), median salary Rs 3,60,000; M.Sc: 11 of 11 placed. NIRF 2026 data submitted by JKKN College of Nursing.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/placement",
    siteName: "Sresakthimayeil Institute Of Nursing And Research",
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
    title: "Placements — 98% in 2024-25 (NIRF 2026) | JKKN Nursing",
    description:
      "UG 2024-25: 58 of 59 graduates placed (98%), median salary Rs 3,60,000; M.Sc: 11 of 11 placed. NIRF 2026 data submitted by JKKN College of Nursing.",
    images: ["/images/nursing_logo.png"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/placement",
  },
};

const placementWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Placements — 98% in 2024-25 (NIRF 2026) | JKKN Nursing",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/placement",
  "description": "UG 2024-25: 58 of 59 graduates placed (98%), median salary Rs 3,60,000; M.Sc: 11 of 11 placed. NIRF 2026 data submitted by JKKN College of Nursing.",
  "isPartOf": {
    "@type": "WebSite",
    "url": "https://nursing.sresakthimayeil.jkkn.ac.in/"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".placement-stats", ".key-facts"]
  }
};

// FAQPage removed 2026-09-18 - it was a SECOND, divergent copy of the FAQs. Measured on
// the built HTML, its questions/answers were absent from the rendered DOM, so it asserted
// Q&A no user or crawler could see. The page-level FAQPage, built from the array the page
// actually renders, is the one that survives.

export default function PlacementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placementWebPageSchema) }}
      />
      {children}
    </>
  );
}
