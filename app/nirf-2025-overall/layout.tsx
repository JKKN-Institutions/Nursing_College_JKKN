import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NIRF 2025 Overall Rankings — JKKN College of Nursing and Research",
  description:
    "NIRF 2025 overall ranking metrics and performance data for JKKN College of Nursing and Research.",
  openGraph: {
    title: "NIRF 2025 Overall Rankings — JKKN College of Nursing and Research",
    description:
      "NIRF 2025 overall ranking metrics and performance data for JKKN College of Nursing and Research.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/nirf-2025-overall",
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
    title: "NIRF 2025 Overall Rankings — JKKN College of Nursing and Research",
    description:
      "NIRF 2025 overall ranking metrics and performance data for JKKN College of Nursing and Research.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://nursing.sresakthimayeil.jkkn.ac.in/nirf-2025-overall",
  },
};

export default function Nirf2025OverallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://nursing.sresakthimayeil.jkkn.ac.in/"},{"@type":"ListItem","position":2,"name":"NIRF 2025 Overall","item":"https://nursing.sresakthimayeil.jkkn.ac.in/nirf-2025-overall"}]}' }}
      />
      {children}
    </>
  );
}
