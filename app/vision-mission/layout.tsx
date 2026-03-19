import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Mission — JKKN Nursing College",
  description: "Vision and mission of Sresakthimayeil Institute of Nursing. Our commitment to nursing excellence and quality healthcare education.",
  openGraph: {
    title: "Vision & Mission — JKKN Nursing College",
    description: "Vision and mission of Sresakthimayeil Institute of Nursing. Our commitment to nursing excellence and quality healthcare education.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/vision-mission",
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
    title: "Vision & Mission — JKKN Nursing College",
    description: "Vision and mission of Sresakthimayeil Institute of Nursing. Our commitment to nursing excellence and quality healthcare education.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/vision-mission",
  },
};

export default function VisionMissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
