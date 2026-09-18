import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M.Sc Community Health Nursing — JKKN Nursing",
  description: "M.Sc Nursing in Community Health at JKKN. Specialization in public health, epidemiology, community-based care, and health promotion.",
  keywords: "msc community health nursing, public health nursing msc, community nursing tamilnadu, epidemiology nursing course, community health colleges",
  openGraph: {
    title: "M.Sc Community Health Nursing — JKKN Nursing",
    description: "M.Sc Nursing in Community Health at JKKN. Specialization in public health, epidemiology, community-based care, and health promotion.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-community-health",
    siteName: "Sresakthimayeil Institute Of Nursing And Research",
    images: [
      {
        url: "/images/Master-of-Science-in-Nursing-Hero-Banner-Image.webp",
        width: 1200,
        height: 630,
        alt: "M.Sc Community Health Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.Sc Community Health Nursing — JKKN Nursing",
    description: "M.Sc Nursing in Community Health at JKKN. Specialization in public health, epidemiology, community-based care, and health promotion.",
    images: ["/images/Master-of-Science-in-Nursing-Hero-Banner-Image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-community-health",
  },
};

const mscCommunityHealthSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "M.Sc Nursing in Community Health",
  "description": "2-year M.Sc Nursing specialization in Community Health at Sresakthimayeil Institute Of Nursing And Research, Komarapalayam. Focus on public health, epidemiology, and community-based care. INC approved, affiliated to TNMGRMU.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-community-health",
  "provider": {
    "@type": "CollegeOrUniversity",
    "name": "Sresakthimayeil Institute Of Nursing And Research",
    "url": "https://nursing.sresakthimayeil.jkkn.ac.in/",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Natarajapuram, NH-544, Salem-Coimbatore Highway",
      "addressLocality": "Komarapalayam",
      "addressRegion": "Tamil Nadu",
      "postalCode": "638183",
      "addressCountry": "IN"
    }
  },
  "educationalCredentialAwarded": "M.Sc Nursing (Community Health)",
  "timeRequired": "P2Y",
  "occupationalCategory": "Community Health Nurse Specialist",
  "coursePrerequisites": "B.Sc Nursing with minimum 55% aggregate and 1 year clinical experience. Registration with State Nursing Council required.",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Full-time",
    "startDate": "2026-09"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "url": "https://www.jkkn.ai/apply/jkkn-admission-2026",
    "category": "Government Quota / Management Quota"
  }
};

// FAQPage removed 2026-09-18 - it was a SECOND, divergent copy of the FAQs. Measured on
// the built HTML, its questions/answers were absent from the rendered DOM, so it asserted
// Q&A no user or crawler could see. The page-level FAQPage, built from the array the page
// actually renders, is the one that survives.

export default function MScCommunityHealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mscCommunityHealthSchema) }} />
      {children}
    </>
  );
}
