import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Committee — JKKN College of Nursing",
  description: "Research committee guiding nursing research projects, publications, and academic research at JKKN.",
  openGraph: {
    title: "Research Committee — JKKN College of Nursing",
    description: "Research committee guiding nursing research projects, publications, and academic research at JKKN.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/research-committee",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },  twitter: {
    card: "summary_large_image",
    title: "Research Committee — JKKN College of Nursing",
    description: "Research committee guiding nursing research projects, publications, and academic research at JKKN.",
    images: ["/images/nursing_logo.png"],
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
