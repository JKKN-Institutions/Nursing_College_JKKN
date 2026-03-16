import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M.Sc Community Health Nursing — JKKN Nursing",
  description: "M.Sc Nursing in Community Health at JKKN. Specialization in public health, epidemiology, community-based care, and health promotion.",
  keywords: "msc community health nursing, public health nursing msc, community nursing tamilnadu, epidemiology nursing course, community health colleges",
  openGraph: {
    title: "M.Sc Community Health Nursing — JKKN Nursing",
    description: "M.Sc Nursing in Community Health at JKKN. Specialization in public health, epidemiology, community-based care, and health promotion.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-community-health",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/Master-of-Science-in-Nursing-Hero-Banner-Image.png",
        width: 1200,
        height: 630,
        alt: "M.Sc Community Health Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.Sc Community Health Nursing — JKKN Nursing",
    description: "M.Sc Nursing in Community Health at JKKN. Specialization in public health, epidemiology, community-based care, and health promotion.",
    images: ["/images/Master-of-Science-in-Nursing-Hero-Banner-Image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-community-health",
  },
};

export default function MScCommunityHealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
