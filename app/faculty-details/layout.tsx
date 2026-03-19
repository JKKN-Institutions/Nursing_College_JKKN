import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faculty & Staff — JKKN Nursing College",
  description: "Meet our experienced faculty members at JKKN Nursing College. Qualified nursing educators with clinical expertise.",
  openGraph: {
    title: "Faculty & Staff — JKKN Nursing College",
    description: "Meet our experienced faculty members at JKKN Nursing College. Qualified nursing educators with clinical expertise.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/faculty-details",
    siteName: "Sresakthimayeil Institute of Nursing and Research",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "Sresakthimayeil Institute of Nursing and Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faculty & Staff — JKKN Nursing College",
    description: "Meet our experienced faculty members at JKKN Nursing College. Qualified nursing educators with clinical expertise.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/faculty-details",
  },
};

const principalSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Jamuna Rani R",
  "jobTitle": "Principal cum HOD",
  "worksFor": {
    "@type": "CollegeOrUniversity",
    "name": "JKKN College of Nursing",
    "url": "https://nursing.sresakthimayeil.jkkn.ac.in/"
  },
  "email": "nursingprincipal@jkkn.ac.in",
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Tamil Nadu Dr. M.G.R. Medical University"
  },
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "M.Sc Nursing" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "Ph.D" }
  ],
  "knowsAbout": ["Medical-Surgical Nursing", "Nursing Education", "Clinical Nursing"]
};

const facultyItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Faculty and Staff — JKKN College of Nursing",
  "description": "Complete list of faculty members at Sresakthimayeil Institute of Nursing and Research, Komarapalayam.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/faculty-details",
  "numberOfItems": 43,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "@type": "Person", "name": "Jamuna Rani R", "jobTitle": "Principal cum HOD", "email": "nursingprincipal@jkkn.ac.in" } },
    { "@type": "ListItem", "position": 2, "item": { "@type": "Person", "name": "Gowri B", "jobTitle": "Professor", "email": "hodmedicalsurgical@jkkn.ac.in" } },
    { "@type": "ListItem", "position": 3, "item": { "@type": "Person", "name": "Arockiamary M", "jobTitle": "Professor", "email": "hodcommunityhealth@jkkn.ac.in" } },
    { "@type": "ListItem", "position": 4, "item": { "@type": "Person", "name": "Buvaneswari J", "jobTitle": "Professor", "email": "buvaneswari@jkkn.ac.in" } },
    { "@type": "ListItem", "position": 5, "item": { "@type": "Person", "name": "Sasikala M", "jobTitle": "Associate Professor", "email": "sasikala@jkkn.ac.in" } },
    { "@type": "ListItem", "position": 6, "item": { "@type": "Person", "name": "Thangamunishwari S", "jobTitle": "Professor", "email": "thangamunishwari@jkkn.ac.in" } },
    { "@type": "ListItem", "position": 7, "item": { "@type": "Person", "name": "Uma K", "jobTitle": "Associate Professor", "email": "hodmentalhealth@jkkn.ac.in" } },
    { "@type": "ListItem", "position": 8, "item": { "@type": "Person", "name": "Valarmathi K", "jobTitle": "Associate Professor", "email": "valarmathi.k@jkkn.ac.in" } },
    { "@type": "ListItem", "position": 9, "item": { "@type": "Person", "name": "Julyet Vidhya M", "jobTitle": "Associate Professor", "email": "julyetvidhya@jkkn.ac.in" } },
    { "@type": "ListItem", "position": 10, "item": { "@type": "Person", "name": "Prabhakaran B", "jobTitle": "Associate Professor", "email": "prabhakaran.b@jkkn.ac.in" } }
  ]
};

export default function FacultyDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(principalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(facultyItemListSchema) }}
      />
      {children}
    </>
  );
}
