import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AISHE — Annual Survey of Higher Education | JKKN",
  description:
    "AISHE annual survey data and enrollment statistics for JKKN College of Nursing and Research.",
  openGraph: {
    title: "AISHE — Annual Survey of Higher Education | JKKN",
    description:
      "AISHE annual survey data and enrollment statistics for JKKN College of Nursing and Research.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/aishe",
    siteName: "JKKN College of Nursing and Research",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing and Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AISHE — Annual Survey of Higher Education | JKKN",
    description:
      "AISHE annual survey data and enrollment statistics for JKKN College of Nursing and Research.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/aishe",
  },
};

export default function AisheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
    <>
      {/* Duplicate BreadcrumbList removed 2026-09-18 - page.tsx already renders
          <BreadcrumbSchema>, so this page shipped the same crumb trail twice. */}
      {children}
    </>
  );
}
