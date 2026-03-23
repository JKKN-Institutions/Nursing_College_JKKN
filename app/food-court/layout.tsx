import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food Court & Cafeteria — JKKN Nursing",
  description: "Hygienic food court and cafeteria with nutritious meals for students at JKKN, Komarapalayam.",
  openGraph: {
    title: "Food Court & Cafeteria — JKKN Nursing",
    description: "Hygienic food court and cafeteria with nutritious meals for students at JKKN, Komarapalayam.",
    type: "website",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/food-court",
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
    title: "Food Court & Cafeteria — JKKN Nursing",
    description: "Hygienic food court and cafeteria with nutritious meals for students at JKKN, Komarapalayam.",
    images: ["/images/nursing_logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/food-court",
  },
};

export default function FoodCourtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
