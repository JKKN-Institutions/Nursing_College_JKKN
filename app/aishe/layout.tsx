import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AISHE Certificate | Sresakthimayeil Institute of Nursing and Research",
  description:
    "AISHE (All India Survey on Higher Education) certificate of Sresakthimayeil Institute of Nursing and Research, Komarapalayam, Namakkal, Tamil Nadu.",
  openGraph: {
    title: "AISHE Certificate | Sresakthimayeil Institute of Nursing and Research",
    description:
      "AISHE (All India Survey on Higher Education) certificate of Sresakthimayeil Institute of Nursing and Research, Komarapalayam, Namakkal, Tamil Nadu.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/aishe",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/aishe",
  },
};

export default function AisheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
