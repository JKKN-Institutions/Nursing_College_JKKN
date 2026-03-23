import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nursing Blog — JKKN College of Nursing",
  description:
    "Nursing tips, health insights, career guidance, and campus updates from JKKN College of Nursing.",
  openGraph: {
    title: "Nursing Blog — JKKN College of Nursing",
    description:
      "Nursing tips, health insights, career guidance, and campus updates from JKKN College of Nursing.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/blog",
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
    title: "Nursing Blog — JKKN College of Nursing",
    description:
      "Nursing tips, health insights, career guidance, and campus updates from JKKN College of Nursing.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/blog",
  },
};

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://nursing.sresakthimayeil.jkkn.ac.in/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://nursing.sresakthimayeil.jkkn.ac.in/blog"}]}';

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Nursing Blog — JKKN College of Nursing",
  "description": "Nursing tips, health insights, career guidance, and campus updates from JKKN College of Nursing.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/blog",
  "isPartOf": {
    "@type": "WebSite",
    "name": "JKKN College of Nursing",
    "url": "https://nursing.sresakthimayeil.jkkn.ac.in/"
  }
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      {children}
    </>
  );
}
