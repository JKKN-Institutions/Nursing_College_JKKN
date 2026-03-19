import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Training Hospitals — JKKN Nursing",
  description: "Clinical training facilities and affiliated hospitals for nursing students at JKKN. Hands-on clinical experience.",
  openGraph: {
    title: "Clinical Training Hospitals — JKKN Nursing",
    description: "Clinical training facilities and affiliated hospitals for nursing students at JKKN. Hands-on clinical experience.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/clinical-hospital",
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
    title: "Clinical Training Hospitals — JKKN Nursing",
    description: "Clinical training facilities and affiliated hospitals for nursing students at JKKN. Hands-on clinical experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/clinical-hospital",
  },
};

export default function ClinicalHospitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
