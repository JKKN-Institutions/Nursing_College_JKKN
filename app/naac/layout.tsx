import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NAAC Accreditation — JKKN Nursing College",
  description: "NAAC accreditation details, quality assurance, and academic excellence standards at Sresakthimayeil Institute of Nursing, JKKN.",
  openGraph: {
    title: "NAAC Accreditation — JKKN Nursing College",
    description: "NAAC accreditation details, quality assurance, and academic excellence standards at Sresakthimayeil Institute of Nursing, JKKN.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/naac",
    siteName: "Sresakthimayeil Institute of Nursing and Research",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "Sresakthimayeil Institute of Nursing and Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAAC Accreditation — JKKN Nursing College",
    description: "NAAC accreditation details, quality assurance, and academic excellence standards at Sresakthimayeil Institute of Nursing, JKKN.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/naac",
  },
};

export default function NaacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
