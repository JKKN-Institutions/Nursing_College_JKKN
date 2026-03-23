import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NIRF 2025 SDG Rankings — JKKN College of Nursing",
  description:
    "NIRF 2025 Sustainability Development Goals ranking data for JKKN College of Nursing.",
  openGraph: {
    title: "NIRF 2025 SDG Rankings — JKKN College of Nursing",
    description:
      "NIRF 2025 Sustainability Development Goals ranking data for JKKN College of Nursing.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/nirf-2025-sdg",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NIRF 2025 SDG Rankings — JKKN College of Nursing",
    description:
      "NIRF 2025 Sustainability Development Goals ranking data for JKKN College of Nursing.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://nursing.sresakthimayeil.jkkn.ac.in/nirf-2025-sdg",
  },
};

export default function Nirf2025SdgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://nursing.sresakthimayeil.jkkn.ac.in/"},{"@type":"ListItem","position":2,"name":"NIRF 2025 SDG","item":"https://nursing.sresakthimayeil.jkkn.ac.in/nirf-2025-sdg"}]}' }}
      />
      {children}
    </>
  );
}
