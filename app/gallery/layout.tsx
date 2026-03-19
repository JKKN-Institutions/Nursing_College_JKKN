import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Gallery — Sresakthimayeil Nursing College",
  description: "Explore JKKN Nursing College campus through photos. View our modern facilities, classrooms, laboratories, library, hostel, and campus life.",
  openGraph: {
    title: "Campus Gallery — Sresakthimayeil Nursing College",
    description: "Explore JKKN Nursing College campus through photos. View our modern facilities, classrooms, laboratories, library, hostel, and campus life.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/gallery",
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
    title: "Campus Gallery — Sresakthimayeil Nursing College",
    description: "Explore JKKN Nursing College campus through photos. View our modern facilities, classrooms, laboratories, library, hostel, and campus life.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
