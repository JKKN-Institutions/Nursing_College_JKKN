import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CourseAdmissionDetail from "@/components/CourseAdmissionDetail";
import { coursesAdmission, SITE_URL } from "@/data/courseWiseAdmissionData";

const course = coursesAdmission.msc;

export const metadata: Metadata = {
  title: "MSc Nursing Admission 2026 Tamil Nadu - Counselling Dates",
  description:
    "M.Sc Nursing admission 2026-27 at JKKN, Tamil Nadu — 5 specialisations, 25 seats, eligibility, counselling process and how to apply. INC approved.",
  keywords:
    "M.Sc Nursing admission 2026, MSc Nursing JKKN, MSc Nursing specializations, TN MSc Nursing entrance, MSc Nursing eligibility, MSc Nursing fees",
  alternates: { canonical: `${SITE_URL}/admissions/msc-nursing` },
  openGraph: {
    title: "M.Sc Nursing Admission 2026-27 — JKKN College of Nursing and Research",
    description:
      "2-year M.Sc Nursing with 5 INC-approved specializations. TN M.Sc Entrance required. Complete admission details — eligibility, fees, documents, dates, process.",
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
