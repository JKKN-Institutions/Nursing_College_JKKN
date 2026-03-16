import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NIRF 2024 — JKKN Nursing College Rankings",
  description: "NIRF 2024 ranking data and performance metrics of JKKN Nursing College in national institutional ranking framework.",
  openGraph: {
    title: "NIRF 2024 — JKKN Nursing College Rankings",
    description: "NIRF 2024 ranking data and performance metrics of JKKN Nursing College in national institutional ranking framework.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/nirf-2024",
    siteName: "JKKN College of Nursing",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/nirf-2024",
  },
};

export default function NIRF2024Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
