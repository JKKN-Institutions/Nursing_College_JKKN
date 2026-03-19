import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institutional Distinctiveness | JKKN Nursing",
  description:
    "What sets Sresakthimayeil Institute of Nursing and Research apart — unique academic practices, clinical exposure, and community engagement programs.",
  openGraph: {
    title: "Institutional Distinctiveness | JKKN Nursing",
    description:
      "What sets Sresakthimayeil Institute of Nursing and Research apart — unique academic practices, clinical exposure, and community engagement programs.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/institutional-distinctiveness",
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
    canonical:
      "https://nursing.sresakthimayeil.jkkn.ac.in/institutional-distinctiveness",
  },
};

export default function InstitutionalDistinctivenessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
