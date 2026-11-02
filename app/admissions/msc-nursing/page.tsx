import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CourseAdmissionDetail from "@/components/CourseAdmissionDetail";
import { coursesAdmission, SITE_URL } from "@/data/courseWiseAdmissionData";

const course = coursesAdmission.msc;

// 2026-11-02 (10,300-lead plan, Nursing Step 2). The page's biggest weak query is "msc nursing
// entrance exam 2026": 7,087 impressions at 0.52% CTR, position 7.8 (GSC 2026-03-01..11-01).
// The honest answer is that Tamil Nadu has no entrance exam for these seats, so the title names
// the search and the description gives the answer. "Counselling" stays in the title because
// those queries already earn 3-10% CTR here.
export const metadata: Metadata = {
  title: "MSc Nursing Entrance Exam & Counselling 2027 TN | JKKN",
  description:
    "No entrance exam for MSc Nursing in Tamil Nadu: merit is 90 for B.Sc marks + 10 for experience. 2026-27 round dates, 25 seats at JKKN, fees and how to apply.",
  keywords:
    "MSc nursing entrance exam 2027, MSc nursing counselling date 2027 Tamil Nadu, M.Sc Nursing admission 2027, MSc Nursing JKKN, MSc Nursing eligibility, MSc Nursing fees",
  alternates: { canonical: `${SITE_URL}/admissions/msc-nursing` },
  openGraph: {
    title: "MSc Nursing Entrance Exam & Counselling 2027 TN | JKKN",
    description:
      "No entrance exam for MSc Nursing in Tamil Nadu: merit is 90 for B.Sc marks + 10 for experience. 2026-27 round dates, 25 seats at JKKN, fees and how to apply.",
    url: `${SITE_URL}/admissions/msc-nursing`,
    type: "website",
  },
};

export default function MScNursingAdmission() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen">
        <BreadcrumbSchema
          items={[
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Admissions", url: `${SITE_URL}/admissions` },
            { name: "M.Sc Nursing Admission", url: `${SITE_URL}/admissions/msc-nursing` },
          ]}
        />
        <CourseAdmissionDetail course={course} />
        <section className="px-4 pb-12">
          <p className="max-w-3xl mx-auto text-center text-gray-700">
            Comparing M.Sc Nursing colleges? See{" "}
            <a href="/msc-nursing#msc-colleges-tamil-nadu" className="text-[#006837] font-semibold hover:underline">all 78 M.Sc Nursing colleges in Tamil Nadu</a>, from the university&apos;s affiliated list.
          </p>
        </section>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
