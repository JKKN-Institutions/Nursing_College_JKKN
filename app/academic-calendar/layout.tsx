import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Calendar — JKKN College of Nursing and Research",
  description: "Academic calendar with important dates, exam schedules, and holidays for JKKN College of Nursing and Research students.",
  openGraph: {
    title: "Academic Calendar — JKKN College of Nursing and Research",
    description: "Academic calendar with important dates, exam schedules, and holidays for JKKN College of Nursing and Research students.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/academic-calendar",
    siteName: "JKKN College of Nursing and Research",
    images: [
      {
        url: "/images/nursing_logo.png",
        width: 1200,
        height: 630,
        alt: "JKKN College of Nursing and Research",
      },
    ],
  },  twitter: {
    card: "summary_large_image",
    title: "Academic Calendar — JKKN College of Nursing and Research",
    description: "Academic calendar with important dates, exam schedules, and holidays for JKKN College of Nursing and Research students.",
    images: ["/images/nursing_logo.png"],
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
