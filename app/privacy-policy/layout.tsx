import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — JKKN Nursing College",
  description: "Privacy policy, data protection, and information security practices at Sresakthimayeil Institute of Nursing.",
  openGraph: {
    title: "Privacy Policy — JKKN Nursing College",
    description: "Privacy policy, data protection, and information security practices at Sresakthimayeil Institute of Nursing.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/privacy-policy",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/Homepage-Hero_Banner-image.webp",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
