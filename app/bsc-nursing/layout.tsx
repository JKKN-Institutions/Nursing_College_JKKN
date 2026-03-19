import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B.Sc Nursing at Sresakthimayeil Institute of Nursing and Research | 4-Year INC Approved Program",
  description: "B.Sc Nursing at Sresakthimayeil Institute of Nursing and Research, Komarapalayam. 4-year INC-approved program affiliated to TNMGRMU. Clinical training at 500+ bed hospital. Apply now.",
  keywords: "best bsc nursing colleges in tamilnadu, bsc nursing colleges in tamilnadu, bsc nursing best colleges in tamilnadu, bsc nursing courses in tamilnadu, top bsc nursing colleges in tamilnadu, top 10 bsc nursing colleges in tamilnadu, bsc nursing male colleges in tamilnadu, bsc male nursing colleges in tamilnadu, bsc nursing course colleges in tamilnadu, bsc nursing private colleges in tamilnadu, bsc nursing colleges in erode",
  openGraph: {
    title: "B.Sc Nursing at Sresakthimayeil Institute of Nursing and Research | 4-Year INC Approved Program",
    description: "B.Sc Nursing at Sresakthimayeil Institute of Nursing and Research, Komarapalayam. 4-year INC-approved program affiliated to TNMGRMU. Clinical training at 500+ bed hospital. Apply now.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/bsc-nursing",
    siteName: "Sresakthimayeil Institute of Nursing and Research",
    images: [
      {
        url: "/images/B.Sc-Nursing-Hero-Banner_image.webp",
        width: 1200,
        height: 630,
        alt: "BSc Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B.Sc Nursing at Sresakthimayeil Institute of Nursing and Research | 4-Year INC Approved Program",
    description: "B.Sc Nursing at Sresakthimayeil Institute of Nursing and Research, Komarapalayam. 4-year INC-approved program affiliated to TNMGRMU. Clinical training at 500+ bed hospital. Apply now.",
    images: ["/images/B.Sc-Nursing-Hero-Banner_image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/bsc-nursing",
  },
};

const bscFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the B.Sc Nursing fee at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "The annual fee is ₹95,000 per year for the 4-year program. Includes tuition, lab, clinical training, and exam fees. Hostel: ₹60,000-75,000/year. Merit scholarships up to 75% available." } },
    { "@type": "Question", "name": "Is NEET required for B.Sc Nursing at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "No, NEET is not required. Admission is merit-based on 10+2 with PCB. Minimum 45% marks (40% for SC/ST). Apply online at admission.jkkn.ac.in." } },
    { "@type": "Question", "name": "What is the B.Sc Nursing duration at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "4-year full-time program including mandatory clinical internship at the attached 500+ bed teaching hospital. Hands-on training from Year 1." } },
    { "@type": "Question", "name": "What careers after B.Sc Nursing from JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "Staff Nurse, ICU Specialist, Community Health Nurse, Nursing Supervisor, International Nursing (NHS UK, UAE, Singapore). NCLEX prep, IELTS coaching, visa support provided. Domestic: ₹3.8-4.2 LPA. International: ₹15-25 LPA." } },
    { "@type": "Question", "name": "Does JKKN B.Sc Nursing include hospital training?", "acceptedAnswer": { "@type": "Answer", "text": "Yes – 500+ bed multi-specialty teaching hospital. Real patient interactions from Year 1 across Medicine, Surgery, Pediatrics, Obstetrics, Psychiatry. Advanced simulation labs complement clinical training." } }
  ]
};

const bscNursingSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Bachelor of Science in Nursing (B.Sc Nursing)",
  "description": "4-year INC-approved undergraduate nursing program at Sresakthimayeil Institute of Nursing and Research, Komarapalayam. Clinical training at 500+ bed teaching hospital. NAAC accredited.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/bsc-nursing/",
  "provider": {
    "@type": "CollegeOrUniversity",
    "name": "Sresakthimayeil Institute of Nursing and Research",
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
  "educationalCredentialAwarded": "B.Sc Nursing",
  "timeRequired": "P4Y",
  "occupationalCategory": "Registered Nurse",
  "coursePrerequisites": "10+2 with Physics, Chemistry, Biology (PCB) with minimum 45% aggregate (40% for SC/ST). Admission through Tamil Nadu merit-based counselling.",
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
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".course-overview", ".key-facts"]
  }
};

export default function BScNursingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bscNursingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bscFaqSchema) }}
      />
      {children}
    </>
  );
}
