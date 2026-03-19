import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Self Disclosure | Sresakthimayeil Institute of Nursing and Research",
  description:
    "Official public self-disclosure document of Sresakthimayeil Institute of Nursing and Research — mandatory regulatory transparency for INC and TNMGRMU.",
  openGraph: {
    title: "Public Self Disclosure | Sresakthimayeil Institute of Nursing and Research",
    description:
      "Official public self-disclosure document of Sresakthimayeil Institute of Nursing and Research — mandatory regulatory transparency for INC and TNMGRMU.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/public-self-disclosure",
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
    canonical:
      "https://nursing.sresakthimayeil.jkkn.ac.in/public-self-disclosure",
  },
};

export default function PublicSelfDisclosureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
