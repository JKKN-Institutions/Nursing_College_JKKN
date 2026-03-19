import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child Health Nursing Dept — JKKN Nursing",
  description: "Child Health Nursing Department at JKKN. Expert faculty, pediatric nursing lab, and clinical training in child healthcare.",
  openGraph: {
    title: "Child Health Nursing Dept — JKKN Nursing",
    description: "Child Health Nursing Department at JKKN. Expert faculty, pediatric nursing lab, and clinical training in child healthcare.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/dept-child-health",
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
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/dept-child-health",
  },
};

export default function DeptChildHealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
