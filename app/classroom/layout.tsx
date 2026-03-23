import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Classrooms — JKKN College of Nursing",
  description: "Modern smart classrooms with audio-visual equipment and technology-enabled learning at JKKN, Komarapalayam.",
  openGraph: {
    title: "Smart Classrooms — JKKN College of Nursing",
    description: "Modern smart classrooms with audio-visual equipment and technology-enabled learning at JKKN, Komarapalayam.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/classroom",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },  twitter: {
    card: "summary_large_image",
    title: "Smart Classrooms — JKKN College of Nursing",
    description: "Modern smart classrooms with audio-visual equipment and technology-enabled learning at JKKN, Komarapalayam.",
    images: ["/images/nursing_logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/classroom",
  },
};

export default function ClassroomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
