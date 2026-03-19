import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banking & Postal Services — JKKN Nursing",
  description: "On-campus banking services and post office facilities for students and staff at JKKN, Komarapalayam.",
  openGraph: {
    title: "Banking & Postal Services — JKKN Nursing",
    description: "On-campus banking services and post office facilities for students and staff at JKKN, Komarapalayam.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/bank-post",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/bank-post",
  },
};

export default function BankPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
