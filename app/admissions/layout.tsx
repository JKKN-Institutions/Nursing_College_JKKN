import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions 2026-27 — B.Sc, M.Sc, Post Basic Nursing | JKKN",
  description:
    "Apply for B.Sc Nursing, M.Sc Nursing, Post Basic B.Sc Nursing at Sresakthimayeil Institute Of Nursing And Research, Komarapalayam. INC approved, NAAC accredited, 97% placement.",
  keywords:
    "nursing admission 2026, bsc nursing admission tamil nadu, msc nursing admission, nursing college admission komarapalayam, JKKN nursing admission, nursing entrance exam",
  openGraph: {
    title: "Admissions 2026-27 — B.Sc, M.Sc, Post Basic Nursing | JKKN",
    description:
      "Apply for nursing programs at Sresakthimayeil Institute Of Nursing And Research. INC approved, 97% placement, international opportunities.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/admissions",
    siteName: "Sresakthimayeil Institute Of Nursing And Research",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN Nursing Admissions 2026-27",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions 2026-27 — B.Sc, M.Sc, Post Basic Nursing | JKKN",
    description:
      "Apply for nursing programs at Sresakthimayeil Institute Of Nursing And Research. INC approved, 97% placement.",
    images: ["/images/nursing_logo.png"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/admissions",
  },
};




// DEP-12, 2026-08-07: three JSON-LD blocks used to live here - a WebPage, a HowTo and an
// FAQPage - and a layout renders on every child route, so /admissions/bsc-nursing,
// /admissions/msc-nursing and /admissions/pbsc-nursing each carried them too. The
// WebPage was the clear fault: it declared url /admissions, so three course pages were
// telling Google they were the parent. bsc-nursing alone draws 60,388 impressions at
// 0.56% CTR, the estate's single largest CTR loss. The HowTo and the FAQPage moved with
// it for the same reason - one FAQPage spread over four URLs leaves Google choosing.
// All three now sit in page.tsx, where they describe the page they are about.

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
{children}
    </>
  );
}
