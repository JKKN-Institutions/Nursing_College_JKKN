import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NIRF 2025 Innovation | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Sresakthimayeil Institute of Nursing and Research NIRF 2025 Innovation ranking data. Recognized for research and institutional excellence in nursing.",
  openGraph: {
    title: "NIRF 2025 Innovation | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Sresakthimayeil Institute of Nursing and Research NIRF 2025 Innovation ranking data. Recognized for research and institutional excellence in nursing.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/nirf-2025-innovation",
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
    canonical:
      "https://nursing.sresakthimayeil.jkkn.ac.in/nirf-2025-innovation",
  },
};

export default function Nirf2025InnovationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
