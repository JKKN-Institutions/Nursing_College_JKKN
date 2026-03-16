import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Sresakthimayeil Nursing College | JKKN",
  description: "Established in 2007, Sresakthimayeil Institute of Nursing offers INC-approved nursing programmes in Komarapalayam, Tamil Nadu. Learn about our vision, mission, and commitment to nursing excellence.",
  openGraph: {
    title: "About Us — Sresakthimayeil Nursing College | JKKN",
    description: "Established in 2007, Sresakthimayeil Institute of Nursing offers INC-approved nursing programmes in Komarapalayam, Tamil Nadu.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/about",
    siteName: "JKKN College of Nursing",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
