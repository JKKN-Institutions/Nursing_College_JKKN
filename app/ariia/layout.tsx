import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ARIIA — JKKN College of Nursing",
  description:
    "ARIIA innovation ranking data for Sresakthimayeil Institute of Nursing, JKKN.",
  openGraph: {
    title: "ARIIA — JKKN College of Nursing",
    description:
      "ARIIA innovation ranking data for Sresakthimayeil Institute of Nursing, JKKN.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/ariia",
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
    title: "ARIIA — JKKN College of Nursing",
    description:
      "ARIIA innovation ranking data for Sresakthimayeil Institute of Nursing, JKKN.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/ariia",
  },
};

export default function AriiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://nursing.sresakthimayeil.jkkn.ac.in/"},{"@type":"ListItem","position":2,"name":"ARIIA","item":"https://nursing.sresakthimayeil.jkkn.ac.in/ariia"}]}' }}
      />
      {children}
    </>
  );
}
