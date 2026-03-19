import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliation & Recognition — JKKN Nursing College",
  description: "INC, TNMGRMU, and NAAC affiliations and recognitions of Sresakthimayeil Institute of Nursing, Komarapalayam.",
  openGraph: {
    title: "Affiliation & Recognition — JKKN Nursing College",
    description: "INC, TNMGRMU, and NAAC affiliations and recognitions of Sresakthimayeil Institute of Nursing, Komarapalayam.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/affiliation",
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
  twitter: {
    card: "summary_large_image",
    title: "Affiliation & Recognition — JKKN Nursing College",
    description: "INC, TNMGRMU, and NAAC affiliations and recognitions of Sresakthimayeil Institute of Nursing, Komarapalayam.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/affiliation",
  },
};

export default function AffiliationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
