import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Discipline Rules | JKKN Nursing",
  description:
    "General discipline guidelines at Sresakthimayeil Institute of Nursing and Research — code of conduct, attendance, and campus rules for a focused learning environment.",
  openGraph: {
    title: "General Discipline Rules | JKKN Nursing",
    description:
      "General discipline guidelines at Sresakthimayeil Institute of Nursing and Research — code of conduct, attendance, and campus rules for a focused learning environment.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/general-discipline",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/general-discipline",
  },
};

export default function GeneralDisciplineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
