import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B.Sc Nursing Course — Fees, Eligibility | JKKN Nursing",
  description: "Apply for 4-year B.Sc Nursing at Sresakthimayeil Institute, Komarapalayam. INC approved, 60 seats. Eligibility, fees, curriculum, placements details.",
  keywords: "best bsc nursing colleges in tamilnadu, bsc nursing colleges in tamilnadu, bsc nursing best colleges in tamilnadu, bsc nursing courses in tamilnadu, top bsc nursing colleges in tamilnadu, top 10 bsc nursing colleges in tamilnadu, bsc nursing male colleges in tamilnadu, bsc male nursing colleges in tamilnadu, bsc nursing course colleges in tamilnadu, bsc nursing private colleges in tamilnadu, bsc nursing colleges in erode",
  openGraph: {
    title: "B.Sc Nursing Course — Fees, Eligibility | JKKN Nursing",
    description: "Apply for 4-year B.Sc Nursing at Sresakthimayeil Institute, Komarapalayam. INC approved, 60 seats. Eligibility, fees, curriculum, placements details.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/bsc-nursing",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/B.Sc-Nursing-Hero-Banner_image.png",
        width: 1200,
        height: 630,
        alt: "BSc Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B.Sc Nursing Course — Fees, Eligibility | JKKN Nursing",
    description: "Apply for 4-year B.Sc Nursing at Sresakthimayeil Institute, Komarapalayam. INC approved, 60 seats. Eligibility, fees, curriculum, placements details.",
    images: ["/images/B.Sc-Nursing-Hero-Banner_image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/bsc-nursing",
  },
};

const bscNursingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the eligibility for B.Sc Nursing at JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candidates must have passed 10+2 with Physics, Chemistry, and Biology (PCB) with a minimum of 45% aggregate marks. NEET-UG qualification is mandatory. Age should be between 17-35 years at the time of admission. Both male and female candidates are eligible."
      }
    },
    {
      "@type": "Question",
      "name": "What is the B.Sc Nursing fee structure at JKKN College of Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The annual tuition fee for B.Sc Nursing at JKKN is approximately ₹95,000 per year. Additional charges include hostel fees (₹60,000-75,000/year), examination fees, and uniform costs. Merit-based scholarships covering up to 75% of tuition are available for eligible students."
      }
    },
    {
      "@type": "Question",
      "name": "How long is the B.Sc Nursing course duration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "B.Sc Nursing is a 4-year full-time undergraduate programme affiliated to Tamil Nadu Dr. MGR Medical University. It includes theoretical classes, practical lab sessions, and clinical postings at the attached 500+ bed multi-specialty hospital from Year 1."
      }
    },
    {
      "@type": "Question",
      "name": "What are the placement opportunities after B.Sc Nursing from JKKN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN has a 98%+ placement rate. Graduates are recruited by top hospitals like Apollo, Fortis, MIOT, Manipal, and international employers including NHS UK, Cleveland Clinic Abu Dhabi, and hospitals in Singapore, Canada, and Australia. Starting salaries range from ₹3.5-6 LPA domestically and ₹15-25 LPA internationally."
      }
    },
    {
      "@type": "Question",
      "name": "Is JKKN College of Nursing INC approved and NAAC accredited?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JKKN College of Nursing is fully approved by the Indian Nursing Council (INC), registered with Tamil Nadu Nurses and Midwives Council (TNNMC), and affiliated to Tamil Nadu Dr. MGR Medical University. The college is NAAC accredited with B++ grade."
      }
    }
  ]
};

const bscNursingSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Bachelor of Science in Nursing (B.Sc Nursing)",
  "description": "4-year INC-approved undergraduate nursing program at JKKN College of Nursing, Komarapalayam. Clinical training at 500+ bed teaching hospital. NAAC accredited.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/bsc-nursing/",
  "provider": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Nursing",
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
  "coursePrerequisites": "10+2 with Physics, Chemistry, Biology (PCB) with minimum 45% aggregate. NEET-UG qualification required.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bscNursingFaqSchema) }}
      />
      {children}
    </>
  );
}
