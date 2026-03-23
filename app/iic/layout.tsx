import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IIC — Institution's Innovation Council | JKKN Nursing",
  description:
    "Institution's Innovation Council activities and achievements at JKKN College of Nursing.",
  openGraph: {
    title: "IIC — Institution's Innovation Council | JKKN Nursing",
    description:
      "Institution's Innovation Council activities and achievements at JKKN College of Nursing.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/iic",
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
    title: "IIC — Institution's Innovation Council | JKKN Nursing",
    description:
      "Institution's Innovation Council activities and achievements at JKKN College of Nursing.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/iic",
  },
};

export default function IicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://nursing.sresakthimayeil.jkkn.ac.in/"},{"@type":"ListItem","position":2,"name":"IIC","item":"https://nursing.sresakthimayeil.jkkn.ac.in/iic"}]}' }}
      />
      {children}
    </>
  );
}
