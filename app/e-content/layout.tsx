import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Content Resources | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Digital e-content and learning resources at Sresakthimayeil Institute of Nursing and Research. INC-approved curriculum materials for nursing programs.",
  openGraph: {
    title: "E-Content Resources | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Digital e-content and learning resources at Sresakthimayeil Institute of Nursing and Research. INC-approved curriculum materials for nursing programs.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/e-content",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/e-content",
  },
};

export default function EContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
