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
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },  twitter: {
    card: "summary_large_image",
    title: "YRC — Youth Red Cross | JKKN Nursing",
    description: "Youth Red Cross activities, blood donation camps, and health awareness programmes at JKKN.",
    images: ["/images/nursing_logo.png"],
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
