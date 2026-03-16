import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M.Sc Medical-Surgical Nursing — JKKN Nursing",
  description: "M.Sc Nursing in Medical-Surgical Nursing at JKKN. Advanced training in critical care, surgical nursing, and patient management.",
  keywords: "msc medical surgical nursing, critical care nursing msc, surgical nursing course tamilnadu, medical surgical nursing colleges, msc nursing medical",
  openGraph: {
    title: "M.Sc Medical-Surgical Nursing — JKKN Nursing",
    description: "M.Sc Nursing in Medical-Surgical Nursing at JKKN. Advanced training in critical care, surgical nursing, and patient management.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-medical-surgical",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/Master-of-Science-in-Nursing-Hero-Banner-Image.png",
        width: 1200,
        height: 630,
        alt: "M.Sc Medical-Surgical Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.Sc Medical-Surgical Nursing — JKKN Nursing",
    description: "M.Sc Nursing in Medical-Surgical Nursing at JKKN. Advanced training in critical care, surgical nursing, and patient management.",
    images: ["/images/Master-of-Science-in-Nursing-Hero-Banner-Image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-medical-surgical",
  },
};

export default function MScMedicalSurgicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
