import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M.Sc Mental Health Nursing — JKKN Nursing",
  description: "M.Sc Nursing in Mental Health (Psychiatric Nursing) at JKKN. Specialization in psychiatric care, counseling, and mental health promotion.",
  keywords: "msc mental health nursing, psychiatric nursing msc, msc nursing mental health tamilnadu, psychiatric nursing colleges, mental health nursing course",
  openGraph: {
    title: "M.Sc Mental Health Nursing — JKKN Nursing",
    description: "M.Sc Nursing in Mental Health (Psychiatric Nursing) at JKKN. Specialization in psychiatric care, counseling, and mental health promotion.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-mental-health",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/Master-of-Science-in-Nursing-Hero-Banner-Image.png",
        width: 1200,
        height: 630,
        alt: "M.Sc Mental Health Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.Sc Mental Health Nursing — JKKN Nursing",
    description: "M.Sc Nursing in Mental Health (Psychiatric Nursing) at JKKN. Specialization in psychiatric care, counseling, and mental health promotion.",
    images: ["/images/Master-of-Science-in-Nursing-Hero-Banner-Image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-mental-health",
  },
};

export default function MScMentalHealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
