import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum & Syllabus — JKKN Nursing College",
  description: "INC-approved curriculum and syllabus for B.Sc, M.Sc, and Post Basic B.Sc Nursing programmes at JKKN, Komarapalayam.",
  openGraph: {
    title: "Curriculum & Syllabus — JKKN Nursing College",
    description: "INC-approved curriculum and syllabus for B.Sc, M.Sc, and Post Basic B.Sc Nursing programmes at JKKN, Komarapalayam.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/curriculum-syllabus",
    siteName: "JKKN College of Nursing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curriculum & Syllabus — JKKN Nursing College",
    description: "INC-approved curriculum and syllabus for B.Sc, M.Sc, and Post Basic B.Sc Nursing programmes at JKKN, Komarapalayam.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/curriculum-syllabus",
  },
};

export default function CurriculumSyllabusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
