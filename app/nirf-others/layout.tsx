import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NIRF Rankings | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Sresakthimayeil Institute of Nursing and Research NIRF rankings across 2024-2025 — overall, innovation, and SDG categories. Institutional performance data.",
  openGraph: {
    title: "NIRF Rankings | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Sresakthimayeil Institute of Nursing and Research NIRF rankings across 2024-2025 — overall, innovation, and SDG categories. Institutional performance data.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/nirf-others",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/nirf-others",
  },
};

export default function NirfOthersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
