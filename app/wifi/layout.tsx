import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wi-Fi & IT Infrastructure — JKKN Nursing",
  description: "High-speed Wi-Fi and modern IT infrastructure for digital learning at JKKN College of Nursing and Research.",
  openGraph: {
    title: "Wi-Fi & IT Infrastructure — JKKN Nursing",
    description: "High-speed Wi-Fi and modern IT infrastructure for digital learning at JKKN College of Nursing and Research.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/wifi",
    siteName: "JKKN College of Nursing and Research",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing and Research",
      },
    ],
  },  twitter: {
    card: "summary_large_image",
    title: "Wi-Fi & IT Infrastructure — JKKN Nursing",
    description: "High-speed Wi-Fi and modern IT infrastructure for digital learning at JKKN College of Nursing and Research.",
    images: ["/images/nursing_logo.png"],
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
