import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nursing College Near Erode | Sresakthimayeil Institute of Nursing and Research",
  description: "Sresakthimayeil Institute of Nursing and Research, 45 km from Erode on NH-544. B.Sc Nursing, M.Sc Nursing programs. INC approved with clinical training at teaching hospital. Apply now.",
  openGraph: {
    title: "Nursing College Near Erode | Sresakthimayeil Institute of Nursing and Research",
    description: "Sresakthimayeil Institute of Nursing and Research, 45 km from Erode on NH-544. B.Sc Nursing, M.Sc Nursing programs. INC approved with clinical training at teaching hospital. Apply now.",
    type: "website",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/Homepage-Hero_Banner-image.webp",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/erode",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const erodeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best nursing college in Erode?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sresakthimayeil Institute of Nursing and Research, located just 30-40 km from Erode on NH-544, is widely regarded as one of the top nursing colleges accessible from Erode. Approved by INC, NAAC and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, it offers excellent programmes with strong placement support."
      }
    },
    {
      "@type": "Question",
      "name": "How far is JKKN Nursing from Erode?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Nursing is approximately 30-40 km from Erode city centre, which takes about 40-50 minutes by road via NH-544 — direct highway connectivity. Regular bus services are available from Erode Central Bus Stand."
      }
    },
    {
      "@type": "Question",
      "name": "Is NEET required for B.Sc Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, NEET is not required for B.Sc Nursing in Tamil Nadu. Admission is merit-based on 10+2 with Physics, Chemistry, Biology (PCB). Minimum 45% marks (40% for SC/ST). Apply online at admission.jkkn.ac.in or through TN DME counselling."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a nursing job abroad after studying here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, graduates from Sresakthimayeil Institute of Nursing and Research are eligible for international nursing careers. With an INC-approved B.Sc Nursing degree, you can appear for licensing exams like HAAD/DHA (Gulf), NMC-CBT (UK), NCLEX (US), or AHPRA (Australia)."
      }
    },
    {
      "@type": "Question",
      "name": "Does the institute have hostel for girls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Sresakthimayeil Institute of Nursing and Research provides a separate, secure hostel for women students with 24/7 security, mess facility, and warden supervision. Hostel accommodation is available for students from all cities."
      }
    },
    {
      "@type": "Question",
      "name": "Does JKKN Nursing provide hostel for Erode students?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, JKKN Nursing provides separate hostel facilities for boys and girls. Students from Erode can also opt for daily commute as the campus is just 40-50 minutes away via NH-544. College transport services are available."
      }
    },
    {
      "@type": "Question",
      "name": "How can I apply for admission at JKKN Nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can apply online through the official website at https://nursing.sresakthimayeil.jkkn.ac.in/ or visit the campus directly. Admissions for 2026-27 are currently open. Contact the admission office for guidance."
      }
    }
  ]
};

export default function ErodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(erodeFaqSchema) }} />
      {children}
    </>
  );
}
