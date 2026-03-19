import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback Analysis | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Sresakthimayeil Institute of Nursing and Research feedback analysis and action taken report — student, faculty, and stakeholder feedback for quality improvement.",
  openGraph: {
    title: "Feedback Analysis | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Sresakthimayeil Institute of Nursing and Research feedback analysis and action taken report — student, faculty, and stakeholder feedback for quality improvement.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/feedback-analysis",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/feedback-analysis",
  },
};

export default function FeedbackAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
