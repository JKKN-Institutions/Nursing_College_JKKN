import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — JKKN College of Nursing",
  description: "Privacy policy, data protection, and information security practices at Sresakthimayeil Institute of Nursing.",
  openGraph: {
    title: "Privacy Policy — JKKN College of Nursing",
    description: "Privacy policy, data protection, and information security practices at Sresakthimayeil Institute of Nursing.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/privacy-policy",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — JKKN College of Nursing",
    description: "Privacy policy, data protection, and information security practices at Sresakthimayeil Institute of Nursing.",
    images: ["/images/nursing_logo.png"],
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
