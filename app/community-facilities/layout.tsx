import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Health Facilities — JKKN Nursing",
  description: "Community health training facilities and field practice areas for nursing students at JKKN.",
  openGraph: {
    title: "Community Health Facilities — JKKN Nursing",
    description: "Community health training facilities and field practice areas for nursing students at JKKN.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/community-facilities",
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
    title: "Community Health Facilities — JKKN Nursing",
    description: "Community health training facilities and field practice areas for nursing students at JKKN.",
    images: ["/images/nursing_logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/community-facilities",
  },
};

export default function CommunityFacilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
