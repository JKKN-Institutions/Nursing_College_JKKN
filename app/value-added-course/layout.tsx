import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Value Added Courses | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Value-added courses at Sresakthimayeil Institute of Nursing and Research enhancing nursing graduates' employability with practical skills and certifications.",
  openGraph: {
    title: "Value Added Courses | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Value-added courses at Sresakthimayeil Institute of Nursing and Research enhancing nursing graduates' employability with practical skills and certifications.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/value-added-course",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/value-added-course",
  },
};

export default function ValueAddedCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
