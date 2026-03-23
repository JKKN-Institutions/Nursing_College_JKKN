import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sister Institutions — JKKN Group of Institutions",
  description: "JKKN group of educational institutions under J.K.K. Rangammal Charitable Trust. Engineering, pharmacy, arts, and science colleges.",
  openGraph: {
    title: "Sister Institutions — JKKN Group of Institutions",
    description: "JKKN group of educational institutions under J.K.K. Rangammal Charitable Trust. Engineering, pharmacy, arts, and science colleges.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/our-institutions",
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
    title: "Sister Institutions — JKKN Group of Institutions",
    description: "JKKN group of educational institutions under J.K.K. Rangammal Charitable Trust. Engineering, pharmacy, arts, and science colleges.",
    images: ["/images/nursing_logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/our-institutions",
  },
};

export default function OurInstitutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
