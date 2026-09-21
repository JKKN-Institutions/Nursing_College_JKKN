import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Activities — JKKN College of Nursing and Research",
  description: "Co-curricular and extracurricular activities, cultural events, and student clubs at JKKN College of Nursing and Research.",
  openGraph: {
    title: "Student Activities — JKKN College of Nursing and Research",
    description: "Co-curricular and extracurricular activities, cultural events, and student clubs at JKKN College of Nursing and Research.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/activities",
    siteName: "JKKN College of Nursing and Research",
    images: [
      {
        url: "/images/Homepage-Hero_Banner-image.webp",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing and Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Activities — JKKN College of Nursing and Research",
    description: "Co-curricular and extracurricular activities, cultural events, and student clubs at JKKN College of Nursing and Research.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/activities",
  },
};

export default function ActivitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
