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
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },  twitter: {
    card: "summary_large_image",
    title: "Medical-Surgical Nursing Dept — JKKN Nursing",
    description: "Medical-Surgical Nursing Department at JKKN. Critical care training, surgical nursing labs, and clinical expertise.",
    images: ["/images/nursing_logo.png"],
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
