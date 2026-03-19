import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hostel Facilities — JKKN Nursing College",
  description: "Safe and comfortable hostel accommodation for nursing students at JKKN, Komarapalayam. Modern amenities and 24/7 security.",
  openGraph: {
    title: "Hostel Facilities — JKKN Nursing College",
    description: "Safe and comfortable hostel accommodation for nursing students at JKKN, Komarapalayam. Modern amenities and 24/7 security.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/hostel",
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
    title: "Hostel Facilities — JKKN Nursing College",
    description: "Safe and comfortable hostel accommodation for nursing students at JKKN, Komarapalayam. Modern amenities and 24/7 security.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/hostel",
  },
};

export default function HostelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
