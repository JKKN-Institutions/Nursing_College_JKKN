import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct — JKKN Nursing College",
  description: "Professional code of conduct and ethical standards for nursing students at Sresakthimayeil Institute of Nursing.",
  openGraph: {
    title: "Code of Conduct — JKKN Nursing College",
    description: "Professional code of conduct and ethical standards for nursing students at Sresakthimayeil Institute of Nursing.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/code-of-conduct",
    siteName: "JKKN College of Nursing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code of Conduct — JKKN Nursing College",
    description: "Professional code of conduct and ethical standards for nursing students at Sresakthimayeil Institute of Nursing.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/code-of-conduct",
  },
};

export default function CodeOfConductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
