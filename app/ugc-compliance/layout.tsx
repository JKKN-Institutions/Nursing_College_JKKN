import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UGC Compliance | Sresakthimayeil Institute of Nursing and Research",
  description:
    "UGC Public Disclosure compliance report of Sresakthimayeil Institute of Nursing and Research — transparency on finances, infrastructure, faculty, and student outcomes.",
  openGraph: {
    title: "UGC Compliance | Sresakthimayeil Institute of Nursing and Research",
    description:
      "UGC Public Disclosure compliance report of Sresakthimayeil Institute of Nursing and Research — transparency on finances, infrastructure, faculty, and student outcomes.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/ugc-compliance",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/ugc-compliance",
  },
};

export default function UgcComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
