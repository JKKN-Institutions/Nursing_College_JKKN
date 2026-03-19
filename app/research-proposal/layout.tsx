import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Proposals | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Research proposals and project documentation from Sresakthimayeil Institute of Nursing and Research — faculty and student-led nursing research in Tamil Nadu.",
  openGraph: {
    title: "Research Proposals | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Research proposals and project documentation from Sresakthimayeil Institute of Nursing and Research — faculty and student-led nursing research in Tamil Nadu.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/research-proposal",
    siteName: "Sresakthimayeil Institute of Nursing and Research",
    type: "website",
    images: [
      {
        url: "/images/Homepage-Hero_Banner-image.webp",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/research-proposal",
  },
};

export default function ResearchProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
