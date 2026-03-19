import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anti-Sexual Harassment Committee | JKKN Nursing",
  description:
    "Sresakthimayeil Institute of Nursing and Research Internal Compliance Committee ensures a safe, respectful campus. View committee members, policies, and reporting.",
  openGraph: {
    title: "Anti-Sexual Harassment Committee | JKKN Nursing",
    description:
      "Sresakthimayeil Institute of Nursing and Research Internal Compliance Committee ensures a safe, respectful campus. View committee members, policies, and reporting.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/anti-sexual-harassment",
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
      "https://nursing.sresakthimayeil.jkkn.ac.in/anti-sexual-harassment",
  },
};

export default function AntiSexualHarassmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
