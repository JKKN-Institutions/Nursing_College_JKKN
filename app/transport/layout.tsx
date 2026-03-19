import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transport Facilities — JKKN Nursing College",
  description: "Safe and reliable bus transport services for students at JKKN Nursing College, covering major routes.",
  openGraph: {
    title: "Transport Facilities — JKKN Nursing College",
    description: "Safe and reliable bus transport services for students at JKKN Nursing College, covering major routes.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/transport",
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
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/transport",
  },
};

export default function TransportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
