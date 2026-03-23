import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback Analysis — JKKN College of Nursing",
  description:
    "Student, faculty, and stakeholder feedback analysis and improvement measures at JKKN.",
  openGraph: {
    title: "Feedback Analysis — JKKN College of Nursing",
    description:
      "Student, faculty, and stakeholder feedback analysis and improvement measures at JKKN.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/feedback-analysis",
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
    title: "Feedback Analysis — JKKN College of Nursing",
    description:
      "Student, faculty, and stakeholder feedback analysis and improvement measures at JKKN.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://nursing.sresakthimayeil.jkkn.ac.in/feedback-analysis",
  },
};

export default function FeedbackAnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://nursing.sresakthimayeil.jkkn.ac.in/"},{"@type":"ListItem","position":2,"name":"Feedback Analysis","item":"https://nursing.sresakthimayeil.jkkn.ac.in/feedback-analysis"}]}' }}
      />
      {children}
    </>
  );
}
