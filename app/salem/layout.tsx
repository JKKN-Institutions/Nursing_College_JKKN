import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nursing College Near Salem — JKKN College of Nursing",
  description:
    "JKKN College of Nursing, 60 km from Salem on NH-544. INC-approved B.Sc & M.Sc Nursing. 98%+ placement.",
  openGraph: {
    title: "Nursing College Near Salem — JKKN College of Nursing",
    description:
      "JKKN College of Nursing, 60 km from Salem on NH-544. INC-approved B.Sc & M.Sc Nursing. 98%+ placement.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/salem",
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
    title: "Nursing College Near Salem — JKKN College of Nursing",
    description:
      "JKKN College of Nursing, 60 km from Salem on NH-544. INC-approved B.Sc & M.Sc Nursing. 98%+ placement.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/salem",
  },
};

export default function SalemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://nursing.sresakthimayeil.jkkn.ac.in/"},{"@type":"ListItem","position":2,"name":"Nursing College Near Salem","item":"https://nursing.sresakthimayeil.jkkn.ac.in/salem"}]}' }}
      />
      {children}
    </>
  );
}
