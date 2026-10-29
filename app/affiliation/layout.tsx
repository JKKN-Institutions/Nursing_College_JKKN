import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliation, Approvals & Official Data | JKKN Nursing",
  description: "INC found suitable 2026-27, TNMGRMU code 262, TNNMC, NAAC B++ (2.79), AISHE C-45803 and intake 60/25/50 for JKKN College of Nursing, each fact with its source.",
  openGraph: {
    title: "Affiliation, Approvals & Official Data | JKKN Nursing",
    description: "INC found suitable 2026-27, TNMGRMU code 262, TNNMC, NAAC B++ (2.79), AISHE C-45803 and intake 60/25/50 for JKKN College of Nursing, each fact with its source.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/affiliation",
    siteName: "JKKN College of Nursing and Research",
    images: [
      {
        url: "/images/Homepage-Hero_Banner-image.webp",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing and Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affiliation, Approvals & Official Data | JKKN Nursing",
    description: "INC found suitable 2026-27, TNMGRMU code 262, TNNMC, NAAC B++ (2.79), AISHE C-45803 and intake 60/25/50 for JKKN College of Nursing, each fact with its source.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/affiliation",
  },
};

export default function AffiliationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
