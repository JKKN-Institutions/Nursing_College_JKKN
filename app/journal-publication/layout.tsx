import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal Publications | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Research and journal publications by Sresakthimayeil Institute of Nursing and Research faculty — advancing evidence-based nursing practice and research.",
  openGraph: {
    title: "Journal Publications | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Research and journal publications by Sresakthimayeil Institute of Nursing and Research faculty — advancing evidence-based nursing practice and research.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/journal-publication",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/journal-publication",
  },
};

export default function JournalPublicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
