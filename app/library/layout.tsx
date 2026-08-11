import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library — JKKN College of Nursing",
  description: "Well-stocked library with nursing books, journals, and digital resources at JKKN College of Nursing, Komarapalayam.",
  openGraph: {
    title: "Library — JKKN College of Nursing",
    description: "Well-stocked library with nursing books, journals, and digital resources at JKKN College of Nursing, Komarapalayam.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/library",
    siteName: "Sresakthimayeil Institute Of Nursing And Research",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "Sresakthimayeil Institute Of Nursing And Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Library — JKKN College of Nursing",
    description: "Well-stocked library with nursing books, journals, and digital resources at JKKN College of Nursing, Komarapalayam.",
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
