import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Management — JKKN Nursing College",
  description: "Leadership and management team of Sresakthimayeil Institute of Nursing, JKKN. Experienced administrators dedicated to nursing education.",
  openGraph: {
    title: "Management — JKKN Nursing College",
    description: "Leadership and management team of Sresakthimayeil Institute of Nursing, JKKN. Experienced administrators dedicated to nursing education.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/our-management",
    siteName: "JKKN College of Nursing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Management — JKKN Nursing College",
    description: "Leadership and management team of Sresakthimayeil Institute of Nursing, JKKN. Experienced administrators dedicated to nursing education.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/our-management",
  },
};

export default function OurManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
