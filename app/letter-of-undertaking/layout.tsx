import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Letter of Undertaking | JKKN Nursing",
  description:
    "Official letter of undertaking by Sresakthimayeil Institute of Nursing and Research to regulatory bodies — compliance and institutional commitments.",
  openGraph: {
    title: "Letter of Undertaking | JKKN Nursing",
    description:
      "Official letter of undertaking by Sresakthimayeil Institute of Nursing and Research to regulatory bodies — compliance and institutional commitments.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/letter-of-undertaking",
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
      "https://nursing.sresakthimayeil.jkkn.ac.in/letter-of-undertaking",
  },
};

export default function LetterOfUndertakingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
