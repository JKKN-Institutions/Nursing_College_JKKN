import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M.Sc Mental Health Nursing — JKKN Nursing",
  description: "M.Sc Nursing in Mental Health (Psychiatric Nursing) at JKKN. Specialization in psychiatric care, counseling, and mental health promotion.",
  keywords: "msc mental health nursing, psychiatric nursing msc, msc nursing mental health tamilnadu, psychiatric nursing colleges, mental health nursing course",
  openGraph: {
    title: "M.Sc Mental Health Nursing — JKKN Nursing",
    description: "M.Sc Nursing in Mental Health (Psychiatric Nursing) at JKKN. Specialization in psychiatric care, counseling, and mental health promotion.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-mental-health",
    siteName: "Sresakthimayeil Institute of Nursing and Research",
    images: [
      {
        url: "/images/Master-of-Science-in-Nursing-Hero-Banner-Image.webp",
        width: 1200,
        height: 630,
        alt: "M.Sc Mental Health Nursing at JKKN College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.Sc Mental Health Nursing — JKKN Nursing",
    description: "M.Sc Nursing in Mental Health (Psychiatric Nursing) at JKKN. Specialization in psychiatric care, counseling, and mental health promotion.",
    images: ["/images/Master-of-Science-in-Nursing-Hero-Banner-Image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-mental-health",
  },
};

const mscMentalHealthSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "M.Sc Nursing in Mental Health (Psychiatric Nursing)",
  "description": "2-year M.Sc Nursing specialization in Mental Health at Sresakthimayeil Institute of Nursing and Research, Komarapalayam. Focus on psychiatric care, counseling, and mental health promotion. INC approved, affiliated to TNMGRMU.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-mental-health",
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
  "educationalCredentialAwarded": "M.Sc Nursing (Mental Health)",
  "timeRequired": "P2Y",
  "occupationalCategory": "Psychiatric Nurse Specialist",
  "coursePrerequisites": "B.Sc Nursing with minimum 55% aggregate and 1 year clinical experience. Registration with State Nursing Council required.",
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

const mscMentalHealthFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the scope of M.Sc Nursing in Mental Health Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "M.Sc Nursing in Mental Health Nursing offers excellent career scope given India's growing mental health needs. Graduates can work as psychiatric nursing educators in nursing colleges, clinical nurse specialists in psychiatric hospitals, community mental health nurses under DMHP, de-addiction center coordinators, mental health researchers, and psychiatric nursing administrators. The National Mental Health Policy and Mental Healthcare Act 2017 have created numerous opportunities in both government and private sectors."
      }
    },
    {
      "@type": "Question",
      "name": "Is prior experience in psychiatry required for admission?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, prior experience specifically in psychiatry is not mandatory for admission. Candidates need minimum 1 year of clinical nursing experience in any area after completing B.Sc Nursing. However, candidates with interest or experience in mental health settings may have an advantage during the selection process. The program provides comprehensive psychiatric nursing training from fundamentals to advanced practice."
      }
    },
    {
      "@type": "Question",
      "name": "What types of psychiatric facilities are available for clinical training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sresakthimayeil Institute of Nursing and Research has affiliations with government psychiatric hospitals, private mental health centers, de-addiction centers, and community mental health programs. Clinical rotations include acute psychiatric wards, outpatient psychiatric clinics, child and adolescent psychiatry units, geriatric psychiatry, forensic psychiatry, rehabilitation centers, and District Mental Health Programme facilities."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue Ph.D. after completing M.Sc in Mental Health Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, M.Sc Nursing in Mental Health Nursing graduates are eligible for Ph.D. programs in Nursing. This opens opportunities for advanced research careers, senior academic positions as Professors, Principal, or Dean positions in nursing colleges. Several universities in India offer Ph.D. in Nursing with research focus on psychiatric and mental health nursing areas."
      }
    },
    {
      "@type": "Question",
      "name": "What therapeutic skills are taught in the M.Sc Mental Health Nursing program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The program covers therapeutic communication techniques, individual psychotherapy, group therapy facilitation, family therapy principles, cognitive behavioral therapy basics, crisis intervention, suicide prevention, motivational interviewing for substance abuse, relaxation techniques, art and music therapy basics, and psychiatric rehabilitation techniques. Learners practice these skills through simulation exercises and supervised clinical practice."
      }
    }
  ]
};

export default function MScMentalHealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mscMentalHealthSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mscMentalHealthFaqSchema) }} />
      {children}
    </>
  );
}
