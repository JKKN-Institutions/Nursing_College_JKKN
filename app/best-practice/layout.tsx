import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Practices | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Best practices at Sresakthimayeil Institute of Nursing and Research driving academic excellence, clinical standards, and student welfare in Komarapalayam.",
  openGraph: {
    title: "Best Practices | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Best practices at Sresakthimayeil Institute of Nursing and Research driving academic excellence, clinical standards, and student welfare in Komarapalayam.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/best-practice",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/best-practice",
  },
};

export default function BestPracticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
