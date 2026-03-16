import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Committee — JKKN Nursing College",
  description: "Research committee guiding nursing research projects, publications, and academic research at JKKN.",
  openGraph: {
    title: "Research Committee — JKKN Nursing College",
    description: "Research committee guiding nursing research projects, publications, and academic research at JKKN.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/research-committee",
    siteName: "JKKN College of Nursing",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/research-committee",
  },
};

export default function ResearchCommitteeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
