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
        url: "/images/Homepage-Hero_Banner-image.webp",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
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
