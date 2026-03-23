import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OBG Nursing Department — JKKN Nursing",
  description: "Obstetrics & Gynecological Nursing Department at JKKN. Maternal health, midwifery training, and women's healthcare.",
  openGraph: {
    title: "OBG Nursing Department — JKKN Nursing",
    description: "Obstetrics & Gynecological Nursing Department at JKKN. Maternal health, midwifery training, and women's healthcare.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/dept-obstetrics-gynecological",
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
    title: "OBG Nursing Department — JKKN Nursing",
    description: "Obstetrics & Gynecological Nursing Department at JKKN. Maternal health, midwifery training, and women's healthcare.",
    images: ["/images/nursing_logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/dept-obstetrics-gynecological",
  },
};

export default function DeptObstetricsGynecologicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
