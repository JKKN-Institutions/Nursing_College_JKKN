import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports & Athletics — JKKN Nursing College",
  description: "Sports facilities and athletic programmes for nursing students at JKKN, Komarapalayam. Indoor and outdoor sports.",
  openGraph: {
    title: "Sports & Athletics — JKKN Nursing College",
    description: "Sports facilities and athletic programmes for nursing students at JKKN, Komarapalayam. Indoor and outdoor sports.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/sports",
    siteName: "JKKN College of Nursing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sports & Athletics — JKKN Nursing College",
    description: "Sports facilities and athletic programmes for nursing students at JKKN, Komarapalayam. Indoor and outdoor sports.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/sports",
  },
};

export default function SportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
