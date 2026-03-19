import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YRC — Youth Red Cross | JKKN Nursing",
  description: "Youth Red Cross activities, blood donation camps, and health awareness programmes at JKKN.",
  openGraph: {
    title: "YRC — Youth Red Cross | JKKN Nursing",
    description: "Youth Red Cross activities, blood donation camps, and health awareness programmes at JKKN.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/yrc",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/yrc",
  },
};

export default function YRCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
