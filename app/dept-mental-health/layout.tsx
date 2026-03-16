import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mental Health Nursing Dept — JKKN Nursing",
  description: "Mental Health Nursing Department at JKKN. Psychiatric nursing training, counseling skills, and mental health awareness.",
  openGraph: {
    title: "Mental Health Nursing Dept — JKKN Nursing",
    description: "Mental Health Nursing Department at JKKN. Psychiatric nursing training, counseling skills, and mental health awareness.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/dept-mental-health",
    siteName: "JKKN College of Nursing",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/dept-mental-health",
  },
};

export default function DeptMentalHealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
