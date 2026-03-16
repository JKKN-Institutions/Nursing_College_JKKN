import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — JKKN Nursing College, Komarapalayam",
  description: "Contact Sresakthimayeil Institute of Nursing, Natarajapuram, Komarapalayam. Phone, email, map directions, and admission enquiry details.",
  openGraph: {
    title: "Contact Us — JKKN Nursing College, Komarapalayam",
    description: "Contact Sresakthimayeil Institute of Nursing, Natarajapuram, Komarapalayam. Phone, email, map directions, and admission enquiry details.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/contact",
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
    title: "Contact Us — JKKN Nursing College, Komarapalayam",
    description: "Contact Sresakthimayeil Institute of Nursing, Natarajapuram, Komarapalayam. Phone, email, map directions, and admission enquiry details.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
