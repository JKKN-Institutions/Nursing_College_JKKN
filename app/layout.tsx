import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";
import { ConversionTracking } from "@/components/analytics/ConversionTracking";

const GA_MEASUREMENT_ID = "G-Q72FWCD9PN";
const META_PIXEL_ID = "167167189256935";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JKKN College of Nursing and Research, Komarapalayam",
  description: "JKKN College of Nursing and Research, Komarapalayam — INC approved, TNNMC registered, NAAC accredited. B.Sc 60, M.Sc 25, Post Basic 50 seats. 98% placement (2024-25: 58 of 59 graduates placed, NIRF 2026).",
  keywords: "best nursing colleges in tamilnadu, top nursing colleges in tamilnadu, nursing colleges in tamilnadu, top 10 nursing colleges in tamilnadu, list of nursing colleges in tamilnadu, private nursing colleges in tamilnadu, nursing college, JKKN, nursing education, Tamil Nadu",
  openGraph: {
    title: "JKKN College of Nursing and Research, Komarapalayam",
    description: "JKKN College of Nursing and Research, Komarapalayam — INC approved, TNNMC registered, NAAC accredited. B.Sc 60, M.Sc 25, Post Basic 50 seats. 98% placement (2024-25: 58 of 59 graduates placed, NIRF 2026).",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "https://nursing.sresakthimayeil.jkkn.ac.in/images/Homepage-Hero_Banner-image.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing — Best Nursing Colleges in Tamil Nadu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JKKN College of Nursing and Research, Komarapalayam",
    description: "JKKN College of Nursing and Research, Komarapalayam — INC approved, TNNMC registered, NAAC accredited. B.Sc 60, M.Sc 25, Post Basic 50 seats. 98% placement (2024-25: 58 of 59 graduates placed, NIRF 2026).",
    images: ["https://nursing.sresakthimayeil.jkkn.ac.in/images/Homepage-Hero_Banner-image.png"],
  },
  icons: {
    icon: "/images/nursing_logo.png",
    shortcut: "/images/nursing_logo.png",
    apple: "/images/nursing_logo.png",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
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
  "name": "JKKN College of Nursing",
  "alternateName": [
    "Sresakthimayeil Institute Of Nursing And Research",
    "JKKN College of Nursing",
    "JKKN College of Nursing Komarapalayam"
  ],
  "description": "JKKN College of Nursing (Sresakthimayeil Institute Of Nursing And Research), established in 2006, is an INC-approved nursing college in Komarapalayam, Tamil Nadu, offering B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc Nursing programs with 98% placement rate (2024-25: 58 of 59 graduates placed, NIRF 2026) and international career opportunities including NHS UK, Cleveland Clinic Abu Dhabi, and Singapore hospitals.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/",
  "logo": "https://nursing.sresakthimayeil.jkkn.ac.in/images/nursing_logo.png",
  "image": "https://nursing.sresakthimayeil.jkkn.ac.in/images/nursing_logo.png",
  "foundingDate": "2006",
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
    "latitude": "11.4433168",
    "longitude": "77.7315664"
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
    // jkkn.ac.in/ 301s to www.jkkn.ac.in/ (measured 2026-09-18), and the #college node below
    // already used the www form - two spellings of one parent @id stop it resolving as one node.
    "@id": "https://www.jkkn.ac.in/#organization",
    "name": "JKKN Institutions",
    "url": "https://www.jkkn.ac.in/"
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
  "numberOfStudents": "266",
  "areaServed": [
    { "@type": "State", "name": "Tamil Nadu" },
    { "@type": "Country", "name": "India" }
  ],
  // sameAs must name THIS college, not the group, and must resolve to a stable URL.
  //  - instagram.com/jkkn.nursing  was stale; the live handle is jkknnursing (user ground truth 2026-08-13)
  //  - facebook.com/JKKNInstitutions is the GROUP page, wrong entity on a college node
  //  - maps.app.goo.gl is a shortener (and goo.gl is on the Wikimedia spam blacklist); the
  //    resolved place URL is used instead, stripped of the volatile entry/g_ep/skid params
  "sameAs": [
    "https://www.instagram.com/jkknnursing",
    "https://www.facebook.com/jkknnursing",
    "https://www.linkedin.com/school/jkknnursing",
    "https://www.wikidata.org/wiki/Q141040012",
    "https://www.google.com/maps/place/JKKN+College+of+Nursing+and+Research/@11.4433168,77.7289861,903m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba9681d0d736069:0x1949ae1b4b64b84a!8m2!3d11.4433168!4d77.7315664!16s%2Fg%2F11g07f4s1w"
  ],
  // Each itemOffered now carries the @id of the Course declared on its own page, so these
  // are REFERENCES to one Course entity instead of six anonymous, incomplete Course nodes
  // (name+url only) repeated on all 130 pages - Google requires description, provider and
  // hasCourseInstance on a Course, and those live on the course page where they belong.
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Nursing Programs at JKKN",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Course", "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/bsc-nursing#course", "name": "B.Sc Nursing", "url": "https://nursing.sresakthimayeil.jkkn.ac.in/bsc-nursing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Course", "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing#course", "name": "M.Sc Nursing", "url": "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Course", "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/pbsc-nursing#course", "name": "Post Basic B.Sc Nursing", "url": "https://nursing.sresakthimayeil.jkkn.ac.in/pbsc-nursing" } }
    ]
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/#website",
  "name": "JKKN College of Nursing",
  "alternateName": "Sresakthimayeil Institute Of Nursing And Research",
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
  "name": "JKKN College of Nursing",
  "alternateName": [
    "Sresakthimayeil Institute Of Nursing And Research",
    "JKKN College of Nursing",
    "JKKN College of Nursing"
  ],
  "description": "INC-approved nursing college offering B.Sc, M.Sc, and Post Basic B.Sc Nursing programs. NAAC accredited and affiliated to Tamil Nadu Dr. MGR Medical University.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/",
  "logo": "https://nursing.sresakthimayeil.jkkn.ac.in/images/nursing_logo.png",
  "image": "https://nursing.sresakthimayeil.jkkn.ac.in/images/nursing_logo.png",
  "telephone": "+919345855001",
  "email": "nursing@jkkn.ac.in",
  "foundingDate": "2006",
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
    "latitude": 11.4433168,
    "longitude": 77.7315664
  },
  // Folded in from the homepage's deleted #localbusiness / no-@id duplicate nodes so that this
  // college is ONE entity with ONE @id across the whole site instead of four.
  "hasMap": "https://www.google.com/maps/place/JKKN+College+of+Nursing+and+Research/@11.4433168,77.7289861,903m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba9681d0d736069:0x1949ae1b4b64b84a!8m2!3d11.4433168!4d77.7315664!16s%2Fg%2F11g07f4s1w",
  "priceRange": "₹65,000 - ₹1,75,000 per year (Management Quota)",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Bank Transfer, UPI, Education Loan",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
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
  // Each itemOffered now carries the @id of the Course declared on its own page, so these
  // are REFERENCES to one Course entity instead of six anonymous, incomplete Course nodes
  // (name+url only) repeated on all 130 pages - Google requires description, provider and
  // hasCourseInstance on a Course, and those live on the course page where they belong.
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Nursing Programs 2026-27",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Course", "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/bsc-nursing#course", "name": "B.Sc Nursing", "url": "https://nursing.sresakthimayeil.jkkn.ac.in/bsc-nursing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Course", "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing#course", "name": "M.Sc Nursing", "url": "https://nursing.sresakthimayeil.jkkn.ac.in/msc-nursing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Course", "@id": "https://nursing.sresakthimayeil.jkkn.ac.in/pbsc-nursing#course", "name": "Post Basic B.Sc Nursing", "url": "https://nursing.sresakthimayeil.jkkn.ac.in/pbsc-nursing" } }
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
  // sameAs = "another URL for THIS SAME entity". Two entries were not that, verified live 2026-09-18:
  //  - Q55090877 is labelled "J.K.K.Nattraja Educational Institutions" and typed by Wikidata as a
  //    "Wikimedia list article". It is not this college. The college's own item is Q141040012
  //    ("Sresakthimayeil Institute of Nursing and Research", private nursing college in
  //    Komarapalayam), created 2026-08-13 - the site had simply never been pointed at it.
  //  - indiannursingcouncil.org is the REGULATOR, a different organisation. Recognition is
  //    already expressed through accreditedBy/recognizedBy above; it does not belong here.
  // shiksha 91255 was re-checked live and does resolve to this college, so it stays.
  "sameAs": [
    "https://www.google.com/maps/place/JKKN+College+of+Nursing+and+Research/@11.4433168,77.7289861,903m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba9681d0d736069:0x1949ae1b4b64b84a!8m2!3d11.4433168!4d77.7315664!16s%2Fg%2F11g07f4s1w",
    "https://www.facebook.com/jkknnursing",
    "https://www.instagram.com/jkknnursing",
    "https://www.linkedin.com/school/jkknnursing",
    "https://www.youtube.com/playlist?list=PL6QsTq-__HhteTB3-dqN_8hzc7EKycZnY",
    "https://www.wikidata.org/wiki/Q141040012",
    "https://www.shiksha.com/college/sresakthimayeil-institute-of-nursing-and-research-namakkal-91255"
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Placement Rate",
      "value": "98%",
      "description": "Placement rate for the 2024-25 graduating cohort: 58 of 59 placed, as filed in NIRF 2026. Overall placement rate for nursing graduates including domestic and international placements"
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
  "description": "Explore JKKN College of Nursing (Sresakthimayeil Institute Of Nursing And Research) campus tour, nursing simulation labs, 500-bed teaching hospital, hostel facilities, and student life at Komarapalayam, Tamil Nadu. B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc Nursing programs with 98% placement rate (2024-25: 58 of 59 graduates placed, NIRF 2026).",
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
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
      </head>
      <body className={`${poppins.className} antialiased bg-[#FBFBEE]`} suppressHydrationWarning>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <ConversionTracking />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
