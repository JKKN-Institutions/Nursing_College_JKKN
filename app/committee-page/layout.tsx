import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Committees | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Institutional committee structure at Sresakthimayeil Institute of Nursing and Research — governing bodies, academic councils, and student welfare committees.",
  openGraph: {
    title: "Committees | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Institutional committee structure at Sresakthimayeil Institute of Nursing and Research — governing bodies, academic councils, and student welfare committees.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/committee-page",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/committee-page",
  },
};

export default function CommitteePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
