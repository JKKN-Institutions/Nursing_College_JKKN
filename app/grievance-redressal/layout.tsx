import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grievance Redressal — JKKN Nursing College",
  description: "Student grievance redressal mechanism and complaint handling at JKKN Nursing College, Komarapalayam.",
  openGraph: {
    title: "Grievance Redressal — JKKN Nursing College",
    description: "Student grievance redressal mechanism and complaint handling at JKKN Nursing College, Komarapalayam.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/grievance-redressal",
    siteName: "JKKN College of Nursing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grievance Redressal — JKKN Nursing College",
    description: "Student grievance redressal mechanism and complaint handling at JKKN Nursing College, Komarapalayam.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/grievance-redressal",
  },
};

export default function GrievanceRedressalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
