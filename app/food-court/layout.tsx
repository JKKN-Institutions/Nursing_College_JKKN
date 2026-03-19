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
