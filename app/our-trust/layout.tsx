import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "J.K.K. Trust — Education Since 1989",
  description: "About J.K.K. Rangammal Charitable Trust, established in 1989. Managing multiple educational institutions across Tamil Nadu.",
  openGraph: {
    title: "J.K.K. Trust — Education Since 1989",
    description: "About J.K.K. Rangammal Charitable Trust, established in 1989. Managing multiple educational institutions across Tamil Nadu.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/our-trust",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/Homepage-Hero_Banner-image.webp",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "J.K.K. Trust — Education Since 1989",
    description: "About J.K.K. Rangammal Charitable Trust, established in 1989. Managing multiple educational institutions across Tamil Nadu.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/our-trust",
  },
};

export default function OurTrustLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
