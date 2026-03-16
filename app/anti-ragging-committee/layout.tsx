import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anti-Ragging Committee — JKKN Nursing",
  description: "Anti-ragging committee members, helpline numbers, and student safety measures at JKKN Nursing College.",
  openGraph: {
    title: "Anti-Ragging Committee — JKKN Nursing",
    description: "Anti-ragging committee members, helpline numbers, and student safety measures at JKKN Nursing College.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/anti-ragging-committee",
    siteName: "JKKN College of Nursing",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/anti-ragging-committee",
  },
};

export default function AntiRaggingCommitteeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
