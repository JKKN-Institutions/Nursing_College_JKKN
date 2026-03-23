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
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },  twitter: {
    card: "summary_large_image",
    title: "Mental Health Nursing Dept — JKKN Nursing",
    description: "Mental Health Nursing Department at JKKN. Psychiatric nursing training, counseling skills, and mental health awareness.",
    images: ["/images/nursing_logo.png"],
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
