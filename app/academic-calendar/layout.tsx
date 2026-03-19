import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Calendar — JKKN Nursing College",
  description: "Academic calendar with important dates, exam schedules, and holidays for JKKN Nursing College students.",
  openGraph: {
    title: "Academic Calendar — JKKN Nursing College",
    description: "Academic calendar with important dates, exam schedules, and holidays for JKKN Nursing College students.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/academic-calendar",
    siteName: "JKKN College of Nursing",
    images: [
      {
        url: "/images/Homepage-Hero_Banner-image.webp",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/academic-calendar",
  },
};

export default function AcademicCalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
