import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JKKN College of Nursing | Top BSc Nursing Tamil Nadu",
  description: "JKKN College of Nursing, Komarapalayam — INC-approved B.Sc, M.Sc & Post Basic B.Sc Nursing. 97% placements, 500-bed hospital training, NAAC accredited.",
  keywords: "best nursing colleges in tamilnadu, top nursing colleges in tamilnadu, nursing colleges in tamilnadu, top 10 nursing colleges in tamilnadu, list of nursing colleges in tamilnadu, private nursing colleges in tamilnadu, nursing college, JKKN, nursing education, Tamil Nadu",
  other: {
    "theme-color": "#0b7845",
  },
  openGraph: {
    title: "JKKN College of Nursing | Top BSc Nursing Tamil Nadu",
    description: "JKKN College of Nursing, Komarapalayam — INC-approved B.Sc, M.Sc & Post Basic B.Sc Nursing. 97% placements, 500-bed hospital training, NAAC accredited.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/Homepage-Hero_Banner-image.webp",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JKKN College of Nursing | Top BSc Nursing Tamil Nadu",
    description: "JKKN College of Nursing, Komarapalayam — INC-approved B.Sc, M.Sc & Post Basic B.Sc Nursing. 97% placements, 500-bed hospital training, NAAC accredited.",
    images: ["/images/Homepage-Hero_Banner-image.webp"],
  },
  icons: {
    icon: "/images/nursing_logo.png",
    shortcut: "/images/nursing_logo.png",
    apple: "/images/nursing_logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/",
  },
  verification: {
    google: ["60d41b66b125ffef", "bfuXWGn_yRKqpY6qTWHWTk5oVQjCws5mszC8LsCfPbw"],
  },
};

const educationalOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/#organization",
  "name": "Sresakthimayeil Institute of Nursing and Research",
  "alternateName": [
    "JKKN College of Nursing",
    "JKKN Nursing College",
    "Sresakthimayeil Institute of Nursing and Research Komarapalayam"
  ],
  "description": "Sresakthimayeil Institute of Nursing and Research (Sresakthimayeil Institute of Nursing and Research), established in 2007, is an INC-approved nursing college in Komarapalayam, Tamil Nadu, offering B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc Nursing programs with 97% placement rate and international career opportunities including NHS UK, Cleveland Clinic Abu Dhabi, and Singapore hospitals.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/",
  "logo": "https://nursing.sresakthimayeil.jkkn.ac.in/images/nursing_logo.png",
  "image": "https://nursing.sresakthimayeil.jkkn.ac.in/images/nursing_logo.png",
  "foundingDate": "2007",
  "telephone": "+919345855001",
  "email": "nursing@jkkn.ac.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Natarajapuram, NH-544, Salem-Coimbatore Highway",
    "addressLocality": "Komarapalayam",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638183",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.4333",
    "longitude": "77.7167"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+919345855001",
      "contactType": "admissions",
      "availableLanguage": ["English", "Tamil"],
      "areaServed": "IN"
    }
  ],
  "parentOrganization": {
    "@type": "EducationalOrganization",
    "@id": "https://jkkn.ac.in/#organization",
    "name": "JKKN Institutions",
    "url": "https://jkkn.ac.in/"
  },
  "memberOf": {
    "@type": "Organization",
    "name": "The Tamil Nadu Dr. M.G.R. Medical University",
    "url": "https://www.tnmgrmu.ac.in/"
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Accreditation",
      "recognizedBy": { "@type": "Organization", "name": "Indian Nursing Council (INC)" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Recognition",
      "recognizedBy": { "@type": "Organization", "name": "Tamil Nadu Nurses and Midwives Council (TNNMC)" }
    }
  ],
  "numberOfStudents": "135",
  "areaServed": [
    { "@type": "State", "name": "Tamil Nadu" },
    { "@type": "Country", "name": "India" }
  ],
  "sameAs": [
    "https://www.facebook.com/jkknnursing",
    "https://www.instagram.com/jkknnursing",
    "https://www.linkedin.com/school/jkknnursing",
    "https://www.youtube.com/playlist?list=PL6QsTq-__HhteTB3-dqN_8hzc7EKycZnY",
    "https://maps.app.goo.gl/4m3Ec1pdsirbMiuE6",
    "https://en.wikipedia.org/wiki/J._K._K._Nattraja_Educational_Institutions",
    "https://www.wikidata.org/wiki/Q55090877",
    "https://www.indiannursingcouncil.org/",
    "https://www.shiksha.com/college/sresakthimayeil-institute-of-nursing-and-research-namakkal-91255"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Nursing Programs at JKKN",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "B.Sc Nursing", "url": "https://nursing.sresakthimayeil.jkkn.ac.in/bsc-nursing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "M.Sc Nursing", "url": "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Post Basic B.Sc Nursing", "url": "https://nursing.sresakthimayeil.jkkn.ac.in/pbsc-nursing" } }
    ]
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".tldr-summary", ".key-facts"]
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/#website",
  "name": "Sresakthimayeil Institute of Nursing and Research",
  "alternateName": "JKKN College of Nursing",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/",
  "publisher": {
    "@type": "EducationalOrganization",
    "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/#organization"
  },
  "inLanguage": "en"
};

const educationalOrgSchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/#college",
  "name": "Sresakthimayeil Institute of Nursing and Research",
  "alternateName": [
    "JKKN College of Nursing",
    "JKKN Nursing College",
    "Sresakthimayeil Nursing College"
  ],
  "description": "INC-approved nursing college offering B.Sc, M.Sc, and Post Basic B.Sc Nursing programs. NAAC accredited and affiliated to Tamil Nadu Dr. MGR Medical University.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/",
  "logo": "https://nursing.sresakthimayeil.jkkn.ac.in/images/nursing_logo.png",
  "image": "https://nursing.sresakthimayeil.jkkn.ac.in/images/nursing_logo.png",
  "telephone": "+919345855001",
  "email": "nursing@jkkn.ac.in",
  "foundingDate": "2007",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Natarajapuram, NH-544, Salem-Coimbatore Highway",
    "addressLocality": "Komarapalayam",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638183",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.4333,
    "longitude": 77.7167
  },
  "accreditedBy": [
    {
      "@type": "Organization",
      "name": "Indian Nursing Council (INC)",
      "url": "https://www.indiannursingcouncil.org/"
    },
    {
      "@type": "Organization",
      "name": "National Assessment and Accreditation Council (NAAC)"
    }
  ],
  "parentOrganization": {
    "@type": "EducationalOrganization",
    "@id": "https://www.jkkn.ac.in/#organization",
    "name": "JKKN Institutions",
    "url": "https://jkkn.ac.in/"
  },
  "memberOf": {
    "@type": "Organization",
    "name": "Tamil Nadu Dr. MGR Medical University (TNMGRMU)",
    "url": "https://www.tnmgrmu.ac.in/"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Nursing Programs 2026-27",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "B.Sc Nursing", "url": "https://nursing.sresakthimayeil.jkkn.ac.in/bsc-nursing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "M.Sc Nursing", "url": "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Post Basic B.Sc Nursing", "url": "https://nursing.sresakthimayeil.jkkn.ac.in/pbsc-nursing" } }
    ]
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".speakable", "[data-speakable]"]
  },
  "areaServed": [
    { "@type": "City", "name": "Erode" },
    { "@type": "City", "name": "Salem" },
    { "@type": "City", "name": "Namakkal" },
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Tiruchengode" },
    { "@type": "City", "name": "Tiruppur" },
    { "@type": "AdministrativeArea", "name": "Namakkal District" }
  ],
  "sameAs": [
    "https://maps.app.goo.gl/4m3Ec1pdsirbMiuE6",
    "https://www.facebook.com/jkknnursing",
    "https://www.instagram.com/jkknnursing",
    "https://www.linkedin.com/school/jkknnursing",
    "https://www.youtube.com/playlist?list=PL6QsTq-__HhteTB3-dqN_8hzc7EKycZnY",
    "https://www.indiannursingcouncil.org/",
    "https://en.wikipedia.org/wiki/J._K._K._Nattraja_Educational_Institutions",
    "https://www.wikidata.org/wiki/Q55090877",
    "https://www.shiksha.com/college/sresakthimayeil-institute-of-nursing-and-research-namakkal-91255"
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Placement Rate",
      "value": "97%",
      "description": "Overall placement rate for nursing graduates including domestic and international placements"
    },
    {
      "@type": "PropertyValue",
      "name": "Highest Package (International)",
      "value": "25 LPA",
      "description": "Highest international placement package offered to nursing graduates"
    },
    {
      "@type": "PropertyValue",
      "name": "Recruiting Partners",
      "value": "80+",
      "description": "Number of active recruiting partners including hospitals, healthcare chains, and international employers"
    },
    {
      "@type": "PropertyValue",
      "name": "International Placement Partners",
      "value": "NHS UK, Cleveland Clinic Abu Dhabi, Singapore Hospitals",
      "description": "Key international healthcare organizations that recruit JKKN nursing graduates"
    },
    {
      "@type": "PropertyValue",
      "name": "Domestic Placement Partners",
      "value": "Apollo, Fortis, MIOT, Manipal Hospitals, Narayana Health",
      "description": "Top domestic hospital chains that actively recruit from JKKN College of Nursing"
    },
    {
      "@type": "PropertyValue",
      "name": "Teaching Hospital Beds",
      "value": "500+",
      "description": "Number of beds in the attached multi-specialty teaching hospital for clinical training"
    }
  ]
};

const videoObjectSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "JKKN College of Nursing — Campus Tour, Facilities & Student Life",
  "description": "Explore JKKN College of Nursing (Sresakthimayeil Institute of Nursing and Research) campus tour, nursing simulation labs, 500-bed teaching hospital, hostel facilities, and student life at Komarapalayam, Tamil Nadu. B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc Nursing programs with 97% placement rate.",
  "thumbnailUrl": "https://nursing.sresakthimayeil.jkkn.ac.in/images/nursing_logo.png",
  "uploadDate": "2025-01-01",
  "contentUrl": "https://www.youtube.com/playlist?list=PL6QsTq-__HhteTB3-dqN_8hzc7EKycZnY",
  "embedUrl": "https://www.youtube.com/embed/videoseries?list=PL6QsTq-__HhteTB3-dqN_8hzc7EKycZnY",
  "publisher": {
    "@type": "EducationalOrganization",
    "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/#organization"
  },
  "inLanguage": "en",
  "about": {
    "@type": "EducationalOrganization",
    "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/#organization"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrganizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectSchema) }}
        />
      </head>
      <body className={`${poppins.className} antialiased bg-[#FBFBEE]`} suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
