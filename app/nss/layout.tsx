import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NSS — National Service Scheme | JKKN Nursing",
  description: "NSS unit activities, community service, and social outreach programmes at JKKN Nursing College.",
  openGraph: {
    title: "NSS — National Service Scheme | JKKN Nursing",
    description: "NSS unit activities, community service, and social outreach programmes at JKKN Nursing College.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/nss",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/nss",
  },
};

export default function NSSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
