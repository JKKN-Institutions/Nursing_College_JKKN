import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NAAC Accredited (B++) — JKKN College of Nursing and Research",
  description: "NAAC Accredited (B++) · INC Approved: JKKN College of Nursing and Research, CGPA 2.79, first cycle, declared 2024. IIQA, SSR and criterion documents.",
  openGraph: {
    title: "NAAC Accredited (B++) — JKKN College of Nursing and Research",
    description: "NAAC Accredited (B++) · INC Approved: JKKN College of Nursing and Research, CGPA 2.79, first cycle, declared 2024. IIQA, SSR and criterion documents.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/naac",
    siteName: "Sresakthimayeil Institute Of Nursing And Research",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "Sresakthimayeil Institute Of Nursing And Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAAC Accredited (B++) — JKKN College of Nursing and Research",
    description: "NAAC Accredited (B++) · INC Approved: JKKN College of Nursing and Research, CGPA 2.79, first cycle, declared 2024. IIQA, SSR and criterion documents.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/naac",
  },
};

export default function NaacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
