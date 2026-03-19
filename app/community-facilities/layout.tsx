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
