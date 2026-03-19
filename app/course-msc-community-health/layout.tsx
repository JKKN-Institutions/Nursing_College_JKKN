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
    siteName: "Sresakthimayeil Institute of Nursing and Research",
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
  "description": "2-year M.Sc Nursing specialization in Community Health at Sresakthimayeil Institute of Nursing and Research, Komarapalayam. Focus on public health, epidemiology, and community-based care. INC approved, affiliated to TNMGRMU.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/course-msc-community-health",
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
    "url": "https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8",
    "category": "Government Quota / Management Quota"
  }
};

const mscCommunityHealthFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the scope of M.Sc Nursing in Community Health Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "M.Sc Nursing in Community Health Nursing offers excellent career prospects in nursing education, public health administration, community health practice, research, and international organizations. Graduates can work as nursing educators in colleges, public health nurses in government departments, community health officers at PHCs/CHCs, program managers in NGOs, or research associates. The growing emphasis on primary healthcare and preventive medicine creates strong demand for community health nursing specialists both in India and abroad."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Community Health Nursing and other M.Sc Nursing specializations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Community Health Nursing focuses on population-level health, disease prevention, health promotion, and primary healthcare delivery in community settings such as PHCs, CHCs, schools, and workplaces. Unlike clinical specializations that focus on hospital-based patient care, Community Health Nursing emphasizes epidemiology, biostatistics, health education, national health programs, and community-based interventions."
      }
    },
    {
      "@type": "Question",
      "name": "Is work experience mandatory for M.Sc Nursing admission?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, as per Indian Nursing Council (INC) guidelines, candidates must have minimum 1 year of clinical work experience after completing B.Sc Nursing or Post Basic B.Sc Nursing. The experience can be in any healthcare setting including hospitals, community health centers, or other recognized healthcare facilities."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pursue Ph.D. after M.Sc Community Health Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. M.Sc Nursing in Community Health Nursing is an excellent foundation for pursuing Ph.D. in Nursing or related fields like Public Health, Epidemiology, or Health Policy. Many universities in India and abroad offer doctoral programs that value the research training and community health expertise gained during M.Sc Nursing."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of field exposure will learners receive during the program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Learners receive over 1000 hours of supervised field practice in diverse community health settings. Field rotations include Primary Health Centers (PHCs), Community Health Centers (CHCs), urban health posts, rural community outreach programs, school health services, occupational health units, ICDS centers, and NGO-run health projects."
      }
    },
    {
      "@type": "Question",
      "name": "Are there job opportunities in international organizations after M.Sc Community Health Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, M.Sc Nursing in Community Health Nursing opens doors to positions in international organizations like World Health Organization (WHO), UNICEF, UNDP, and various international health NGOs. These organizations actively recruit public health nursing specialists for global health programs, disaster response teams, and health development initiatives."
      }
    }
  ]
};

export default function MScCommunityHealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mscCommunityHealthSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mscCommunityHealthFaqSchema) }} />
      {children}
    </>
  );
}
