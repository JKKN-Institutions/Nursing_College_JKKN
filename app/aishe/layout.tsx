import type { Metadata } from "next";
import SitePageShell from "@/components/SitePageShell";

export const metadata: Metadata = {
  title: "AISHE Code C-45803 - JKKN College of Nursing and Research",
  description:
    "AISHE code C-45803 of JKKN College of Nursing and Research (Sresakthimayeil Institute of Nursing and Research), Namakkal, listed by the Ministry of Education.",
  openGraph: {
    title: "AISHE Code C-45803 - JKKN College of Nursing and Research",
    description:
      "AISHE code C-45803 of JKKN College of Nursing and Research (Sresakthimayeil Institute of Nursing and Research), Namakkal, listed by the Ministry of Education.",
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
    title: "AISHE Code C-45803 - JKKN College of Nursing and Research",
    description:
      "AISHE code C-45803 of JKKN College of Nursing and Research (Sresakthimayeil Institute of Nursing and Research), Namakkal, listed by the Ministry of Education.",
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
      <SitePageShell>{children}</SitePageShell>
    </>
  );
}
