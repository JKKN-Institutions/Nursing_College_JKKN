import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anti-Ragging Policy — JKKN Nursing College",
  description: "Anti-ragging measures and student discipline policies at Sresakthimayeil Institute of Nursing, JKKN.",
  openGraph: {
    title: "Anti-Ragging Policy — JKKN Nursing College",
    description: "Anti-ragging measures and student discipline policies at Sresakthimayeil Institute of Nursing, JKKN.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/anti-ragging-discipline",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/Homepage-Hero_Banner-image.webp",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anti-Ragging Policy — JKKN Nursing College",
    description: "Anti-ragging measures and student discipline policies at Sresakthimayeil Institute of Nursing, JKKN.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/anti-ragging-discipline",
  },
};

export default function AntiRaggingDisciplineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
