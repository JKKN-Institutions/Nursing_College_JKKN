import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical-Surgical Nursing Dept — JKKN Nursing",
  description: "Medical-Surgical Nursing Department at JKKN. Critical care training, surgical nursing labs, and clinical expertise.",
  openGraph: {
    title: "Medical-Surgical Nursing Dept — JKKN Nursing",
    description: "Medical-Surgical Nursing Department at JKKN. Critical care training, surgical nursing labs, and clinical expertise.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/dept-medical-surgical",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/dept-medical-surgical",
  },
};

export default function DeptMedicalSurgicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
