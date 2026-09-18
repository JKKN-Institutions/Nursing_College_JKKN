import type { Metadata } from "next";

// app/faq/page.tsx is a client component and cannot export metadata. Without this layout the page
// inherited the root layout's homepage title, description and canonical.
const description =
  "Common questions about Sresakthimayeil Institute Of Nursing And Research — courses, admissions, facilities, and more.";

export const metadata: Metadata = {
  title: "FAQs | Sresakthimayeil Institute Of Nursing And Research",
  description,
  alternates: { canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/faq" },
  openGraph: {
    title: "FAQs | Sresakthimayeil Institute Of Nursing And Research",
    description,
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/faq",
    siteName: "JKKN College of Nursing",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
