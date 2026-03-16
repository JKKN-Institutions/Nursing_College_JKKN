import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nursing Labs — JKKN Nursing College",
  description: "State-of-the-art nursing laboratories with modern equipment for practical training at JKKN, Komarapalayam.",
  openGraph: {
    title: "Nursing Labs — JKKN Nursing College",
    description: "State-of-the-art nursing laboratories with modern equipment for practical training at JKKN, Komarapalayam.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/laboratories",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nursing Labs — JKKN Nursing College",
    description: "State-of-the-art nursing laboratories with modern equipment for practical training at JKKN, Komarapalayam.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/laboratories",
  },
};

export default function LaboratoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
