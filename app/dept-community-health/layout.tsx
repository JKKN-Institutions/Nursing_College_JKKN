import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Health Nursing Dept — JKKN Nursing",
  description: "Community Health Nursing Department at JKKN. Public health training, field visits, and community-based learning.",
  openGraph: {
    title: "Community Health Nursing Dept — JKKN Nursing",
    description: "Community Health Nursing Department at JKKN. Public health training, field visits, and community-based learning.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/dept-community-health",
    siteName: "JKKN College of Nursing",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/dept-community-health",
  },
};

export default function DeptCommunityHealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
