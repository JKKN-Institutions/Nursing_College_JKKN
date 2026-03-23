import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anti-Ragging Committee — JKKN Nursing",
  description: "Anti-ragging committee members, helpline numbers, and student safety measures at JKKN College of Nursing.",
  openGraph: {
    title: "Anti-Ragging Committee — JKKN Nursing",
    description: "Anti-ragging committee members, helpline numbers, and student safety measures at JKKN College of Nursing.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/anti-ragging-committee",
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
    title: "Anti-Ragging Committee — JKKN Nursing",
    description: "Anti-ragging committee members, helpline numbers, and student safety measures at JKKN College of Nursing.",
    images: ["/images/nursing_logo.png"],
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
