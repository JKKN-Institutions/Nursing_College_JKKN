import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M.Sc Child Health Nursing — JKKN Nursing College",
  description: "M.Sc Nursing in Child Health (Pediatric Nursing) at JKKN. 2-year specialization in pediatric care, neonatal nursing, and child development.",
  keywords: "msc child health nursing, pediatric nursing msc, msc nursing child health tamilnadu, neonatal nursing course, pediatric nursing colleges tamilnadu",
  openGraph: {
    title: "M.Sc Child Health Nursing — JKKN Nursing College",
    description: "M.Sc Nursing in Child Health (Pediatric Nursing) at JKKN. 2-year specialization in pediatric care, neonatal nursing, and child development.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-child-health",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/Master-of-Science-in-Nursing-Hero-Banner-Image.png",
        width: 1200,
        height: 630,
        alt: "M.Sc Child Health Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.Sc Child Health Nursing — JKKN Nursing College",
    description: "M.Sc Nursing in Child Health (Pediatric Nursing) at JKKN. 2-year specialization in pediatric care, neonatal nursing, and child development.",
    images: ["/images/Master-of-Science-in-Nursing-Hero-Banner-Image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-child-health",
  },
};

export default function MScChildHealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
