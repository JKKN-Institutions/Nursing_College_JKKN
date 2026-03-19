import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nursing Blog | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Expert articles on nursing careers, B.Sc & M.Sc Nursing tips, clinical insights, and healthcare trends from Sresakthimayeil Institute of Nursing and Research faculty.",
  openGraph: {
    title: "Nursing Blog | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Expert articles on nursing careers, B.Sc & M.Sc Nursing tips, clinical insights, and healthcare trends from Sresakthimayeil Institute of Nursing and Research faculty.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/blog",
    siteName: "Sresakthimayeil Institute of Nursing and Research",
    type: "website",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/blog",
  },
};

const blogArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "JKKN College of Nursing Blog",
  "description": "Latest news, articles, and insights about nursing education, career guidance, and campus life at JKKN College of Nursing, Komarapalayam.",
  "url": "https://nursing.sresakthimayeil.jkkn.ac.in/blog",
  "publisher": {
    "@type": "EducationalOrganization",
    "name": "JKKN College of Nursing",
    "url": "https://nursing.sresakthimayeil.jkkn.ac.in/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://nursing.sresakthimayeil.jkkn.ac.in/images/jkkn-nursing-logo.png"
    }
  },
  "inLanguage": "en"
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogArticleSchema) }}
      />
      {children}
    </>
  );
}
