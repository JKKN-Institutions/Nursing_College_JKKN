import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fees Refund Policy | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Fees refund policy of Sresakthimayeil Institute of Nursing and Research, Komarapalayam. Transparent fee structure and refund guidelines for nursing students.",
  openGraph: {
    title: "Fees Refund Policy | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Fees refund policy of Sresakthimayeil Institute of Nursing and Research, Komarapalayam. Transparent fee structure and refund guidelines for nursing students.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/fees-refund-policy",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/fees-refund-policy",
  },
};

export default function FeesRefundPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
