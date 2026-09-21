import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Placements at JKKN College of Nursing and Research | Recruiters",
  description:
    "Where JKKN nursing graduates go — 80+ hospital partners including Apollo, Fortis and NHS UK, plus the training that gets them there.",
  keywords:
    "nursing placement, nursing jobs, JKKN nursing placement, nursing college placement tamil nadu, NHS UK nursing jobs, nursing salary india, best nursing college placement",
  openGraph: {
    title: "Placements — 98% Rate, NHS UK, Apollo | JKKN Nursing",
    description:
      "Sresakthimayeil Institute Of Nursing And Research placement cell: 98% placement rate, 80+ recruiters. International placements to UK, UAE, Saudi Arabia.",
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
    title: "Placements — 98% Rate, NHS UK, Apollo | JKKN Nursing",
    description:
      "Sresakthimayeil Institute Of Nursing And Research: 98% placement rate, 80+ recruiters, international placements.",
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
  "name": "Placements — 98% Rate, NHS UK, Apollo | JKKN Nursing",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/placement",
  "description": "Sresakthimayeil Institute Of Nursing And Research placement cell: 98% placement rate, 80+ recruiters including NHS UK, Apollo, Cleveland Clinic Abu Dhabi. Salary Rs. 3.5-25 LPA.",
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
