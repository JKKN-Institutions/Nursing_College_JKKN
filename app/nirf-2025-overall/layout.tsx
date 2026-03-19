import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NIRF 2025 Overall | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Sresakthimayeil Institute of Nursing and Research NIRF 2025 Overall ranking data submitted to National Institutional Ranking Framework, Ministry of Education.",
  openGraph: {
    title: "NIRF 2025 Overall | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Sresakthimayeil Institute of Nursing and Research NIRF 2025 Overall ranking data submitted to National Institutional Ranking Framework, Ministry of Education.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/nirf-2025-overall",
    siteName: "Sresakthimayeil Institute of Nursing and Research",
    type: "website",
    images: [
      {
        url: "/images/Homepage-Hero_Banner-image.webp",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/nirf-2025-overall",
  },
};

export default function Nirf2025OverallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
