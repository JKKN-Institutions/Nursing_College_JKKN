import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — JKKN College of Nursing | JKKN",
  description: "JKKN College of Nursing (est. 2007) — INC-approved nursing institute in Komarapalayam, Tamil Nadu. NAAC accredited, TNMGRMU affiliated. Learn about our mission and excellence.",
  openGraph: {
    title: "About Us — JKKN College of Nursing | JKKN",
    description: "Established in 2007, Sresakthimayeil Institute of Nursing offers INC-approved nursing programmes in Komarapalayam, Tamil Nadu.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/about",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },  twitter: {
    card: "summary_large_image",
    title: "About Us — JKKN College of Nursing | JKKN",
    description: "JKKN College of Nursing (est. 2007) — INC-approved nursing institute in Komarapalayam, Tamil Nadu. NAAC accredited, TNMGRMU affiliated. Learn about our mission and excellence.",
    images: ["/images/nursing_logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
