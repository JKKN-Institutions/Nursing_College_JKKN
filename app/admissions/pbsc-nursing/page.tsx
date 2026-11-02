import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import StickyAdmissionCTA from "@/components/lead/StickyAdmissionCTA";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CourseAdmissionDetail from "@/components/CourseAdmissionDetail";
import { coursesAdmission, SITE_URL } from "@/data/courseWiseAdmissionData";

const course = coursesAdmission.pbsc;

// 2026-11-02 (10,300-lead plan, Nursing Step 2). Top weak query "post bsc nursing entrance exam
// 2026": 3,007 impressions at 0.33% CTR, position 7.9 (GSC 2026-03-01..11-01); searchers type
// "Post BSc" twice as often as "Post Basic" there. The old title ran to 64 characters and the
// description to 193. The answer - no entrance exam, merit 90 + 10 - is from the Tamil Nadu
// Post Basic B.Sc (Nursing) prospectus 2026-27, G.O.(D) No.970 dated 18.08.2026.
export const metadata: Metadata = {
  title: "Post BSc Nursing Entrance Exam & Counselling 2027 | JKKN",
  description:
    "No entrance exam for Post BSc Nursing in Tamil Nadu: merit is 90 for GNM marks + 10 for experience. 2026-27 round dates, 50 seats at JKKN, fees, how to apply.",
  keywords:
    "Post BSc nursing entrance exam 2027, Post Basic BSc nursing counselling date 2027, Post Basic B.Sc Nursing admission 2027, GNM to BSc Nursing, PB BSc Nursing JKKN, Post Basic Nursing Tamil Nadu",
  alternates: { canonical: `${SITE_URL}/admissions/pbsc-nursing` },
  openGraph: {
    title: "Post BSc Nursing Entrance Exam & Counselling 2027 | JKKN",
    description:
      "No entrance exam for Post BSc Nursing in Tamil Nadu: merit is 90 for GNM marks + 10 for experience. 2026-27 round dates, 50 seats at JKKN, fees, how to apply.",
    url: `${SITE_URL}/admissions/pbsc-nursing`,
    type: "website",
  },
};

export default function PBScNursingAdmission() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Admissions", url: `${SITE_URL}/admissions` },
            { name: "Post Basic B.Sc Nursing Admission", url: `${SITE_URL}/admissions/pbsc-nursing` },
          ]}
        />
        <CourseAdmissionDetail course={course} formUp />
        <section className="px-4 pb-12">
          <p className="max-w-3xl mx-auto text-center text-gray-700">
            Comparing Post B.Sc Nursing colleges? See{" "}
            <a href="/pbsc-nursing#post-basic-colleges-tamil-nadu" className="text-[#006837] font-semibold hover:underline">all 56 Post Basic B.Sc Nursing colleges in Tamil Nadu</a>, from the university&apos;s affiliated list.
          </p>
        </section>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
      <StickyAdmissionCTA sourcePage="sticky-pbsc-nursing" courseName={course.short} />
    </>
  );
}
