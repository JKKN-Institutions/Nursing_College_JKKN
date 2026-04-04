import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NIRF 2026 — JKKN College of Nursing Rankings",
  description: "NIRF 2026 ranking data and performance metrics of JKKN College of Nursing in national institutional ranking framework.",
  openGraph: {
    title: "NIRF 2026 — JKKN College of Nursing Rankings",
    description: "NIRF 2026 ranking data and performance metrics of JKKN College of Nursing in national institutional ranking framework.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/nirf-2026",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NIRF 2026 — JKKN College of Nursing Rankings",
    description: "NIRF 2026 ranking data and performance metrics of JKKN College of Nursing in national institutional ranking framework.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/nirf-2026",
  },
};

export default function NIRF2026Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
