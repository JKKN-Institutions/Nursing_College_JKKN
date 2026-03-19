import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add-On Courses | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Explore add-on courses at Sresakthimayeil Institute of Nursing and Research, Komarapalayam. Supplementary training programs enhancing nursing skills.",
  openGraph: {
    title: "Add-On Courses | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Explore add-on courses at Sresakthimayeil Institute of Nursing and Research, Komarapalayam. Supplementary training programs enhancing nursing skills.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/add-on-course",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/add-on-course",
  },
};

export default function AddOnCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
