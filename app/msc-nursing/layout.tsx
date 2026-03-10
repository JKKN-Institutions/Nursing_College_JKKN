import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M.Sc Nursing Course — Specialisations | JKKN Nursing",
  description: "M.Sc Nursing at JKKN with 5 specializations: Child Health, Community Health, Medical-Surgical, Mental Health, OBG. 2-year course, INC approved.",
  keywords: "msc nursing colleges in tamilnadu, msc nursing distance education in tamilnadu, best msc nursing colleges in tamilnadu, msc nursing private colleges in tamilnadu",
  openGraph: {
    title: "M.Sc Nursing Course — Specialisations | JKKN Nursing",
    description: "M.Sc Nursing at JKKN with 5 specializations: Child Health, Community Health, Medical-Surgical, Mental Health, OBG. 2-year course, INC approved.",
    type: "website",
    url: "https://nursing.jkkn.ac.in/msc-nursing",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/Master-of-Science-in-Nursing-Hero-Banner-Image.png",
        width: 1200,
        height: 630,
        alt: "MSc Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.Sc Nursing Course — Specialisations | JKKN Nursing",
    description: "M.Sc Nursing at JKKN with 5 specializations: Child Health, Community Health, Medical-Surgical, Mental Health, OBG. 2-year course, INC approved.",
    images: ["/images/Master-of-Science-in-Nursing-Hero-Banner-Image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.jkkn.ac.in/msc-nursing",
  },
};

const mscNursingSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Master of Science in Nursing (M.Sc Nursing)",
  "description": "2-year INC-approved postgraduate nursing program at JKKN College of Nursing, Komarapalayam. Affiliated to Tamil Nadu Dr. MGR Medical University. Specializations in Child Health, Community Health, Medical-Surgical, Mental Health, and OBG Nursing.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing/",
  "provider": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Nursing",
    "url": "https://nursing.sresakthimayeil.jkkn.ac.in/"
  },
  "educationalCredentialAwarded": "M.Sc Nursing",
  "timeRequired": "P2Y",
  "occupationalCategory": "Advanced Practice Nurse, Nurse Educator",
  "coursePrerequisites": "B.Sc Nursing from a recognized university with minimum 55% aggregate.",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Full-time",
    "startDate": "2026-09"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "url": "https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8",
    "category": "Government Quota / Management Quota"
  }
};

export default function MScNursingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mscNursingSchema) }}
      />
      {children}
    </>
  );
}
