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
  title: "JKKN College of Nursing — Top BSc Nursing College in Tamil Nadu | INC Approved",
  description: "JKKN College of Nursing (Sresakthimayeil Institute), Komarapalayam — INC-approved B.Sc, M.Sc & Post Basic B.Sc Nursing programs. 98%+ placements, 500-bed hospital training. NAAC accredited, TNMGRMU affiliated.",
  keywords: "best nursing colleges in tamilnadu, top nursing colleges in tamilnadu, nursing colleges in tamilnadu, top 10 nursing colleges in tamilnadu, list of nursing colleges in tamilnadu, private nursing colleges in tamilnadu, nursing college, JKKN, nursing education, Tamil Nadu",
  openGraph: {
    title: "JKKN College of Nursing — Top BSc Nursing College in Tamil Nadu | INC Approved",
    description: "JKKN College of Nursing (Sresakthimayeil Institute), Komarapalayam — INC-approved B.Sc, M.Sc & Post Basic B.Sc Nursing. 98%+ placements, 500-bed hospital training.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JKKN College of Nursing — Top BSc Nursing College in Tamil Nadu | INC Approved",
    description: "JKKN College of Nursing (Sresakthimayeil Institute), Komarapalayam — INC-approved B.Sc, M.Sc & Post Basic B.Sc Nursing. 98%+ placements, 500-bed hospital training.",
    images: ["/images/nursing_logo.png"],
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

const educationalOrgSchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "name": "JKKN College of Nursing",
  "alternateName": [
    "Sresakthimayeil Institute of Nursing and Research",
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
    "https://www.indiannursingcouncil.org/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
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
