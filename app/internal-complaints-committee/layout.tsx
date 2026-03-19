import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internal Complaints Committee — JKKN Nursing",
  description: "Internal Complaints Committee for addressing grievances and ensuring a safe campus environment at JKKN.",
  openGraph: {
    title: "Internal Complaints Committee — JKKN Nursing",
    description: "Internal Complaints Committee for addressing grievances and ensuring a safe campus environment at JKKN.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/internal-complaints-committee",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/Homepage-Hero_Banner-image.webp",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/internal-complaints-committee",
  },
};

export default function InternalComplaintsCommitteeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
