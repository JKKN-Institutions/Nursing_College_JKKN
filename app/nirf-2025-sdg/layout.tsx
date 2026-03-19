import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NIRF 2025 SDG | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Sresakthimayeil Institute of Nursing and Research NIRF 2025 SDG ranking data — commitment to sustainable development goals in nursing and healthcare education.",
  openGraph: {
    title: "NIRF 2025 SDG | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Sresakthimayeil Institute of Nursing and Research NIRF 2025 SDG ranking data — commitment to sustainable development goals in nursing and healthcare education.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/nirf-2025-sdg",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/nirf-2025-sdg",
  },
};

export default function Nirf2025SdgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
