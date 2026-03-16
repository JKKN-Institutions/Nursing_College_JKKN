import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Classrooms — JKKN Nursing College",
  description: "Modern smart classrooms with audio-visual equipment and technology-enabled learning at JKKN, Komarapalayam.",
  openGraph: {
    title: "Smart Classrooms — JKKN Nursing College",
    description: "Modern smart classrooms with audio-visual equipment and technology-enabled learning at JKKN, Komarapalayam.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/classroom",
    siteName: "JKKN College of Nursing",
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
