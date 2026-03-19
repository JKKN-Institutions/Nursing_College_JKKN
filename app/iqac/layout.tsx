import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IQAC — Internal Quality Assurance | JKKN Nursing",
  description: "Internal Quality Assurance Cell (IQAC) at JKKN Nursing College. Quality enhancement and accreditation initiatives.",
  openGraph: {
    title: "IQAC — Internal Quality Assurance | JKKN Nursing",
    description: "Internal Quality Assurance Cell (IQAC) at JKKN Nursing College. Quality enhancement and accreditation initiatives.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/iqac",
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
    title: "IQAC — Internal Quality Assurance | JKKN Nursing",
    description: "Internal Quality Assurance Cell (IQAC) at JKKN Nursing College. Quality enhancement and accreditation initiatives.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/iqac",
  },
};

export default function IqacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
