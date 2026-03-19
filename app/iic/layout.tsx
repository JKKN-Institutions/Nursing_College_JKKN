import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IIC Certificate | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Institution's Innovation Council (IIC) certificate of Sresakthimayeil Institute of Nursing and Research — promoting innovation in nursing education.",
  openGraph: {
    title: "IIC Certificate | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Institution's Innovation Council (IIC) certificate of Sresakthimayeil Institute of Nursing and Research — promoting innovation in nursing education.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/iic",
    siteName: "Sresakthimayeil Institute of Nursing and Research",
    type: "website",
    images: [
      {
        url: "/images/Homepage-Hero_Banner-image.webp",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
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
  return <>{children}</>;
}
