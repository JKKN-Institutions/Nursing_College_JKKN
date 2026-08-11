import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faculty & Staff — JKKN College of Nursing",
  description: "Meet our experienced faculty members at JKKN College of Nursing. Qualified nursing educators with clinical expertise.",
  openGraph: {
    title: "Faculty & Staff — JKKN College of Nursing",
    description: "Meet our experienced faculty members at JKKN College of Nursing. Qualified nursing educators with clinical expertise.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/faculty-details",
    siteName: "Sresakthimayeil Institute Of Nursing And Research",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "Sresakthimayeil Institute Of Nursing And Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faculty & Staff — JKKN College of Nursing",
    description: "Meet our experienced faculty members at JKKN College of Nursing. Qualified nursing educators with clinical expertise.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/faculty-details",
  },
};

export default function FacultyDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
