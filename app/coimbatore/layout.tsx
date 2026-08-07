import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nursing College Near Coimbatore — B.Sc, M.Sc | JKKN",
  description:
    "JKKN College of Nursing, 100-110 km from Coimbatore on NH-544. INC approved, NAAC accredited. B.Sc, M.Sc and Post Basic B.Sc Nursing.",
  openGraph: {
    title: "Nursing College Near Coimbatore — JKKN College of Nursing",
    description:
      "JKKN College of Nursing, 100 km from Coimbatore on NH-544. INC-approved B.Sc & M.Sc Nursing. 98%+ placement, 500-bed hospital.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/coimbatore",
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
    title: "Nursing College Near Coimbatore — JKKN College of Nursing",
    description:
      "JKKN College of Nursing, 100 km from Coimbatore on NH-544. INC-approved B.Sc & M.Sc Nursing. 98%+ placement, 500-bed hospital.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://nursing.sresakthimayeil.jkkn.ac.in/coimbatore",
  },
};

export default function CoimbatoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://nursing.sresakthimayeil.jkkn.ac.in/"},{"@type":"ListItem","position":2,"name":"Nursing College Near Coimbatore","item":"https://nursing.sresakthimayeil.jkkn.ac.in/coimbatore"}]}' }}
      />
      {children}
    </>
  );
}
