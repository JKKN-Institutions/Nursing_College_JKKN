import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post Basic B.Sc Nursing — JKKN Nursing College",
  description: "Post Basic B.Sc Nursing course for registered nurses at JKKN, Komarapalayam. 2-year programme, INC approved, career advancement opportunities.",
  keywords: "post bsc nursing colleges in tamilnadu, post bsc nursing correspondence course in tamilnadu, list of post bsc nursing colleges in tamilnadu, post basic bsc nursing distance education in tamilnadu, post bsc nursing distance education in tamilnadu, post bsc nursing in tamilnadu",
  openGraph: {
    title: "Post Basic B.Sc Nursing — JKKN Nursing College",
    description: "Post Basic B.Sc Nursing course for registered nurses at JKKN, Komarapalayam. 2-year programme, INC approved, career advancement opportunities.",
    type: "website",
    url: "https://nursing.jkkn.ac.in/pbsc-nursing",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/P.B.B.Sc-Nursing-Hero-Banner-Image.png",
        width: 1200,
        height: 630,
        alt: "Post BSc Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Post Basic B.Sc Nursing — JKKN Nursing College",
    description: "Post Basic B.Sc Nursing course for registered nurses at JKKN, Komarapalayam. 2-year programme, INC approved, career advancement opportunities.",
    images: ["/images/P.B.B.Sc-Nursing-Hero-Banner-Image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.jkkn.ac.in/pbsc-nursing",
  },
};

const pbscNursingSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Post Basic B.Sc Nursing",
  "description": "2-year INC-approved program for GNM diploma holders. Upgrade your nursing qualifications to a full B.Sc Nursing degree at JKKN College of Nursing, Komarapalayam.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/pbsc-nursing/",
  "provider": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Nursing",
    "url": "https://nursing.sresakthimayeil.jkkn.ac.in/"
  },
  "educationalCredentialAwarded": "Post Basic B.Sc Nursing",
  "timeRequired": "P2Y",
  "occupationalCategory": "Registered Nurse",
  "coursePrerequisites": "GNM (General Nursing and Midwifery) diploma from a recognized institution with 2 years of registered nursing experience.",
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

export default function PBScNursingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pbscNursingSchema) }}
      />
      {children}
    </>
  );
}
