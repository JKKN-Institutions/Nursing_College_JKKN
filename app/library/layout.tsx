import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library — JKKN Nursing College",
  description: "Well-stocked library with nursing books, journals, and digital resources at JKKN Nursing College, Komarapalayam.",
  openGraph: {
    title: "Library — JKKN Nursing College",
    description: "Well-stocked library with nursing books, journals, and digital resources at JKKN Nursing College, Komarapalayam.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/library",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Library — JKKN Nursing College",
    description: "Well-stocked library with nursing books, journals, and digital resources at JKKN Nursing College, Komarapalayam.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/library",
  },
};

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
