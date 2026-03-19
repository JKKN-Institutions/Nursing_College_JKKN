import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Grievance Redressal | JKKN Nursing",
  description:
    "Student Grievance Redressal Committee (SGRC) at Sresakthimayeil Institute of Nursing and Research — fair, transparent grievance resolution for nursing students.",
  openGraph: {
    title: "Student Grievance Redressal | JKKN Nursing",
    description:
      "Student Grievance Redressal Committee (SGRC) at Sresakthimayeil Institute of Nursing and Research — fair, transparent grievance resolution for nursing students.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/sgrc",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/sgrc",
  },
};

export default function SgrcLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
