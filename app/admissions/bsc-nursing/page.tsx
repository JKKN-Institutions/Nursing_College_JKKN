import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import StickyAdmissionCTA from "@/components/lead/StickyAdmissionCTA";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CourseAdmissionDetail from "@/components/CourseAdmissionDetail";
import { coursesAdmission, SITE_URL } from "@/data/courseWiseAdmissionData";

const course = coursesAdmission.bsc;

// 2026-11-02. Title and description rewritten for the search this page is actually shown for:
// "bsc nursing counselling date 2026" 13,909 impressions at position 7.9, "... tamil nadu"
// 7,479 + 3,043, on a page with 1,16,094 impressions at 0.69% CTR (GSC 2026-03-01..10-28).
// The old title never said "counselling" and ran to 64 characters. The year is 2027 because
// the 2026-27 rounds are over; the page says plainly that the 2027 dates are not out yet.
export const metadata: Metadata = {
  title: "BSc Nursing Counselling Date 2027 Tamil Nadu | JKKN",
  description:
    "BSc Nursing counselling 2027 dates are not announced yet. See the official 2026-27 round dates, 60 seats at JKKN Komarapalayam, no NEET, fees and how to apply.",
  keywords:
    "BSc nursing counselling date 2027, BSc nursing counselling date Tamil Nadu, B.Sc Nursing admission 2027, BSc Nursing JKKN, BSc nursing without NEET, BSc nursing fees",
  alternates: { canonical: `${SITE_URL}/admissions/bsc-nursing` },
  openGraph: {
    title: "BSc Nursing Counselling Date 2027 Tamil Nadu | JKKN",
    description:
      "BSc Nursing counselling 2027 dates are not announced yet. See the official 2026-27 round dates, 60 seats at JKKN Komarapalayam, no NEET, fees and how to apply.",
    url: `${SITE_URL}/admissions/bsc-nursing`,
    type: "website",
  },
};

export default function BScNursingAdmission() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Admissions", url: `${SITE_URL}/admissions` },
            { name: "B.Sc Nursing Admission", url: `${SITE_URL}/admissions/bsc-nursing` },
          ]}
        />
        <CourseAdmissionDetail course={course} formUp />
        <section className="px-4 pb-12">
          <p className="max-w-3xl mx-auto text-center text-gray-700">
            Comparing colleges before counselling? See <a href="/nursing-colleges-in-tamil-nadu" className="text-[#006837] font-semibold hover:underline">all 288 B.Sc Nursing colleges in Tamil Nadu</a>, district by district, from the university's affiliated list.
          </p>
        </section>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
      <StickyAdmissionCTA sourcePage="sticky-bsc-nursing" courseName={course.short} />
    </>
  );
}
