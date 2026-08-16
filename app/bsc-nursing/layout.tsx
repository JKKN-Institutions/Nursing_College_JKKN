import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BSc Nursing in Tamil Nadu — JKKN College | INC Approved 2026",
  description:
    "Top BSc Nursing college in Tamil Nadu. 4-year INC approved, TNMGRMU affiliated. 500+ bed hospital training from Year 1. 97% placement. Apply for 2026.",
  keywords:
    "best bsc nursing colleges in tamilnadu, bsc nursing colleges in tamilnadu, bsc nursing best colleges in tamilnadu, bsc nursing courses in tamilnadu, top bsc nursing colleges in tamilnadu, top 10 bsc nursing colleges in tamilnadu, bsc nursing male colleges in tamilnadu, bsc male nursing colleges in tamilnadu, bsc nursing course colleges in tamilnadu, bsc nursing private colleges in tamilnadu, bsc nursing colleges in erode, bsc nursing colleges near coimbatore, bsc nursing fees in tamilnadu, bsc nursing salary, bsc nursing scope",
  openGraph: {
    title: "BSc Nursing in Tamil Nadu — JKKN College | INC Approved 2026",
    description:
      "Top BSc Nursing college in Tamil Nadu. 4-year INC approved, TNMGRMU affiliated. 500+ bed hospital training from Year 1. 97% placement. Apply for 2026.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/bsc-nursing",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/B.Sc-Nursing-Hero-Banner_image.webp",
        width: 1200,
        height: 630,
        alt: "BSc Nursing at JKKN College of Nursing, Tamil Nadu — INC Approved 4-Year Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BSc Nursing in Tamil Nadu — JKKN College | INC Approved 2026",
    description:
      "Top BSc Nursing college in Tamil Nadu. 4-year INC approved, TNMGRMU affiliated. 500+ bed hospital training from Year 1. 97% placement. Apply for 2026.",
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
    { "@type": "Question", "name": "What is the B.Sc Nursing fee at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "Management Quota (MQ) annual fee: ₹1,50,000 for female students and ₹1,75,000 for male students. Includes uniform, hospital training, and nursing kit. Government Quota (GQ) fees are as per Govt norms. Hostel available separately. Scholarships and education loans available." } },
    { "@type": "Question", "name": "Is NEET required for B.Sc Nursing at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "No, NEET is not required. Admission is merit-based on 10+2 with PCB. Minimum 45% marks (40% for SC/ST). Apply online at www.jkkn.ai/apply/jkkn-admission-2026." } },
    { "@type": "Question", "name": "What is the B.Sc Nursing duration at JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "4-year full-time program including mandatory clinical internship at the attached 500+ bed teaching hospital. Hands-on training from Year 1." } },
    { "@type": "Question", "name": "What careers after B.Sc Nursing from JKKN?", "acceptedAnswer": { "@type": "Answer", "text": "Staff Nurse, ICU Specialist, Community Health Nurse, Nursing Supervisor, International Nursing (NHS UK, UAE, Singapore). NCLEX prep, IELTS coaching, visa support provided. Domestic: ₹3.8-4.2 LPA. International: ₹15-25 LPA." } },
    { "@type": "Question", "name": "Does JKKN B.Sc Nursing include hospital training?", "acceptedAnswer": { "@type": "Answer", "text": "Yes – 500+ bed multi-specialty teaching hospital. Real patient interactions from Year 1 across Medicine, Surgery, Pediatrics, Obstetrics, Psychiatry. Advanced simulation labs complement clinical training." } }
  ]
};

const bscNursingSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Bachelor of Science in Nursing (B.Sc Nursing)",
  description:
    "4-year INC-approved undergraduate nursing program at JKKN College of Nursing (Sresakthimayeil Institute Of Nursing And Research), Komarapalayam, Tamil Nadu. Clinical training at 500+ bed teaching hospital from Year 1. NAAC accredited. 97% placement rate.",
  url: "https://nursing.sresakthimayeil.jkkn.ac.in/bsc-nursing",
  dateModified: "2026-04-11",
  provider: {
    "@type": "CollegeOrUniversity",
    "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/#organization",
    name: "JKKN College of Nursing (Sresakthimayeil Institute Of Nursing And Research)",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/",
    sameAs: [
      "https://www.facebook.com/jkknnursing",
      "https://www.instagram.com/jkknnursing",
      "https://www.linkedin.com/school/jkknnursing",
      "https://www.youtube.com/playlist?list=PL6QsTq-__HhteTB3-dqN_8hzc7EKycZnY",
      "https://maps.app.goo.gl/4m3Ec1pdsirbMiuE6",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Natarajapuram, NH-544, Salem-Coimbatore Highway",
      addressLocality: "Komarapalayam",
      addressRegion: "Tamil Nadu",
      postalCode: "638183",
      addressCountry: "IN",
    },
  },
  educationalCredentialAwarded: "Bachelor of Science in Nursing (B.Sc Nursing)",
  occupationalCredentialAwarded: "Registered Nurse (RN)",
  timeRequired: "P4Y",
  occupationalCategory: "Registered Nurse",
  coursePrerequisites:
    "10+2 with Physics, Chemistry, Biology — minimum 45% aggregate (40% for SC/ST). Age 17–35 years.",
  inLanguage: "en",
  isAccessibleForFree: false,
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Onsite",
    courseWorkload: "PT40H",
    startDate: "2026-08-01",
    endDate: "2030-06-30",
    location: {
      "@type": "Place",
      name: "JKKN College of Nursing Campus",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Natarajapuram, NH-544",
        addressLocality: "Komarapalayam",
        addressRegion: "Tamil Nadu",
        postalCode: "638183",
        addressCountry: "IN",
      },
    },
  },
  offers: {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "url": "https://www.jkkn.ai/apply/jkkn-admission-2026",
    "category": "Government Quota / Management Quota"
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".course-overview", ".key-facts"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "JKKN College of Nursing",
  alternateName: "Sresakthimayeil Institute Of Nursing And Research",
  image: "https://nursing.sresakthimayeil.jkkn.ac.in/images/logo.png",
  telephone: "+919345855001",
  email: "nursing@jkkn.ac.in",
  url: "https://nursing.sresakthimayeil.jkkn.ac.in/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Natarajapuram, NH-544, Salem-Coimbatore Highway",
    addressLocality: "Komarapalayam",
    addressRegion: "Tamil Nadu",
    postalCode: "638183",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "11.4333",
    longitude: "77.7167",
  },
  sameAs: [
    "https://www.facebook.com/jkknnursing",
    "https://www.instagram.com/jkknnursing",
    "https://www.linkedin.com/school/jkknnursing",
    "https://www.youtube.com/playlist?list=PL6QsTq-__HhteTB3-dqN_8hzc7EKycZnY",
    "https://maps.app.goo.gl/4m3Ec1pdsirbMiuE6",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:00",
    closes: "17:00",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "JKKN Institutions",
    url: "https://jkkn.ac.in/",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Apply for BSc Nursing at JKKN College",
  description:
    "Step-by-step admission process for B.Sc Nursing at JKKN College of Nursing, Komarapalayam, Tamil Nadu.",
  step: [
    {
      "@type": "HowToStep",
      name: "Online Registration",
      text: "Visit jkkn.ai/apply/jkkn-admission-2026 and complete the online application form with accurate personal and academic details.",
    },
    {
      "@type": "HowToStep",
      name: "Document Submission",
      text: "Upload required documents including 10+2 mark sheets, ID proof, community certificate, and passport-size photographs.",
    },
    {
      "@type": "HowToStep",
      name: "Merit List & Counselling",
      text: "Selection is based on 10+2 merit. Attend the counselling session for seat allotment at the college campus.",
    },
    {
      "@type": "HowToStep",
      name: "Fee Payment",
      text: "Pay the prescribed admission fee of ₹95,000 per year to confirm your seat. Education loan assistance is available from partner banks.",
    },
    {
      "@type": "HowToStep",
      name: "Admission Confirmation",
      text: "Receive your admission letter and join the orientation programme to begin your nursing journey at JKKN.",
    },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {children}
    </>
  );
}
