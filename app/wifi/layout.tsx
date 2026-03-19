import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wi-Fi & IT Infrastructure — JKKN Nursing",
  description: "High-speed Wi-Fi and modern IT infrastructure for digital learning at JKKN Nursing College.",
  openGraph: {
    title: "Wi-Fi & IT Infrastructure — JKKN Nursing",
    description: "High-speed Wi-Fi and modern IT infrastructure for digital learning at JKKN Nursing College.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/wifi",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/wifi",
  },
};

export default function WifiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
