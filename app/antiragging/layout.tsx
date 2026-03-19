import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anti-Ragging Policy | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Sresakthimayeil Institute of Nursing and Research anti-ragging policy. Safe, inclusive campus environment for all nursing students in Komarapalayam.",
  openGraph: {
    title: "Anti-Ragging Policy | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Sresakthimayeil Institute of Nursing and Research anti-ragging policy. Safe, inclusive campus environment for all nursing students in Komarapalayam.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/antiragging",
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
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/antiragging",
  },
};

export default function AntiraggingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
