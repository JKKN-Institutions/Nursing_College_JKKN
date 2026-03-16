import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M.Sc OBG Nursing — JKKN Nursing College",
  description: "M.Sc Nursing in Obstetrics & Gynecological Nursing at JKKN. Specialization in maternal health, midwifery, and women's healthcare.",
  keywords: "msc obg nursing, msc obstetrics gynecology nursing, midwifery nursing course tamilnadu, maternal health nursing, msc nursing obg colleges",
  openGraph: {
    title: "M.Sc OBG Nursing — JKKN Nursing College",
    description: "M.Sc Nursing in Obstetrics & Gynecological Nursing at JKKN. Specialization in maternal health, midwifery, and women's healthcare.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-obstetrics-gynecological",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/Master-of-Science-in-Nursing-Hero-Banner-Image.png",
        width: 1200,
        height: 630,
        alt: "M.Sc OBG Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.Sc OBG Nursing — JKKN Nursing College",
    description: "M.Sc Nursing in Obstetrics & Gynecological Nursing at JKKN. Specialization in maternal health, midwifery, and women's healthcare.",
    images: ["/images/Master-of-Science-in-Nursing-Hero-Banner-Image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-obstetrics-gynecological",
  },
};

export default function MScObstetricsGynecologicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
