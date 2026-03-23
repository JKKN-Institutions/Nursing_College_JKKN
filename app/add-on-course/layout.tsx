import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add-On Courses — JKKN College of Nursing",
  description:
    "Skill-enhancing add-on courses for nursing students at JKKN College of Nursing, Komarapalayam.",
  openGraph: {
    title: "Add-On Courses — JKKN College of Nursing",
    description:
      "Skill-enhancing add-on courses for nursing students at JKKN College of Nursing, Komarapalayam.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/add-on-course",
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
    title: "Add-On Courses — JKKN College of Nursing",
    description:
      "Skill-enhancing add-on courses for nursing students at JKKN College of Nursing, Komarapalayam.",
    images: ["/images/nursing_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://nursing.sresakthimayeil.jkkn.ac.in/add-on-course",
  },
};

export default function AddOnCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://nursing.sresakthimayeil.jkkn.ac.in/"},{"@type":"ListItem","position":2,"name":"Add-On Courses","item":"https://nursing.sresakthimayeil.jkkn.ac.in/add-on-course"}]}' }}
      />
      {children}
    </>
  );
}
