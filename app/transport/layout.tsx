import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transport Facilities — JKKN College of Nursing",
  description: "Safe and reliable bus transport services for students at JKKN College of Nursing, covering major routes.",
  openGraph: {
    title: "Transport Facilities — JKKN College of Nursing",
    description: "Safe and reliable bus transport services for students at JKKN College of Nursing, covering major routes.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/transport",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },  twitter: {
    card: "summary_large_image",
    title: "Transport Facilities — JKKN College of Nursing",
    description: "Safe and reliable bus transport services for students at JKKN College of Nursing, covering major routes.",
    images: ["/images/nursing_logo.png"],
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
