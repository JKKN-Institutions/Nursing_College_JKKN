import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nursing College Near Erode — JKKN College of Nursing",
  description:
    "JKKN College of Nursing, 55 km from Erode. INC-approved B.Sc & M.Sc Nursing. 95% placement, 500-bed hospital training.",
  openGraph: {
    title: "Nursing College Near Erode — JKKN College of Nursing",
    description:
      "JKKN College of Nursing, 55 km from Erode. INC-approved B.Sc & M.Sc Nursing. 95% placement, 500-bed hospital training.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/erode",
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
    title: "Nursing College Near Erode — JKKN College of Nursing",
    description:
      "JKKN College of Nursing, 55 km from Erode. INC-approved B.Sc & M.Sc Nursing. 95% placement, 500-bed hospital training.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/erode",
  },
};

export default function ErodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://nursing.sresakthimayeil.jkkn.ac.in/"},{"@type":"ListItem","position":2,"name":"Nursing College Near Erode","item":"https://nursing.sresakthimayeil.jkkn.ac.in/erode"}]}' }}
      />
      {children}
    </>
  );
}
