import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Activities — JKKN Nursing College",
  description: "Co-curricular and extracurricular activities, cultural events, and student clubs at JKKN Nursing College.",
  openGraph: {
    title: "Student Activities — JKKN Nursing College",
    description: "Co-curricular and extracurricular activities, cultural events, and student clubs at JKKN Nursing College.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/activities",
    siteName: "JKKN College of Nursing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Activities — JKKN Nursing College",
    description: "Co-curricular and extracurricular activities, cultural events, and student clubs at JKKN Nursing College.",
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
