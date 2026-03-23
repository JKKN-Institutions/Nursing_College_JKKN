import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Letter of Undertaking — JKKN College of Nursing",
  description:
    "Official letters of undertaking and compliance documents at JKKN College of Nursing.",
  openGraph: {
    title: "Letter of Undertaking — JKKN College of Nursing",
    description:
      "Official letters of undertaking and compliance documents at JKKN College of Nursing.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/letter-of-undertaking",
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
    title: "Letter of Undertaking — JKKN College of Nursing",
    description:
      "Official letters of undertaking and compliance documents at JKKN College of Nursing.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://nursing.sresakthimayeil.jkkn.ac.in/letter-of-undertaking",
  },
};

export default function LetterOfUndertakingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://nursing.sresakthimayeil.jkkn.ac.in/"},{"@type":"ListItem","position":2,"name":"Letter of Undertaking","item":"https://nursing.sresakthimayeil.jkkn.ac.in/letter-of-undertaking"}]}' }}
      />
      {children}
    </>
  );
}
