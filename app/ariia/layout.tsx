import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ARIIA Certificate | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Sresakthimayeil Institute of Nursing and Research ARIIA (Atal Ranking of Institutions on Innovation Achievements) certificate. Recognized for innovation.",
  openGraph: {
    title: "ARIIA Certificate | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Sresakthimayeil Institute of Nursing and Research ARIIA (Atal Ranking of Institutions on Innovation Achievements) certificate. Recognized for innovation.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/ariia",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/ariia",
  },
};

export default function AriiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
