import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CourseAdmissionDetail from "@/components/CourseAdmissionDetail";
import { coursesAdmission, SITE_URL } from "@/data/courseWiseAdmissionData";

const course = coursesAdmission.pbsc;

export const metadata: Metadata = {
  title: "Post Basic B.Sc Nursing Admission 2026-27 | GNM to Degree — JKKN",
  description:
    "Post Basic B.Sc Nursing admission 2026-27 at JKKN. 2-year degree for GNM diploma holders. 30 seats. ₹65,000/yr MQ. Merit-based admission — no entrance exam. Eligibility, fees, documents, dates.",
  keywords:
    "Post Basic B.Sc Nursing admission 2026, PBBSc Nursing JKKN, GNM to BSc Nursing, Post Basic BSc eligibility, PB BSc Nursing fees, Post Basic Nursing Tamil Nadu",
  alternates: { canonical: `${SITE_URL}/admissions/pbsc-nursing` },
  openGraph: {
    title: "Post Basic B.Sc Nursing Admission 2026-27 — JKKN College of Nursing",
    description:
      "2-year Post Basic B.Sc Nursing for GNM diploma holders. Merit-based. Complete admission details — eligibility, fees, documents, dates, process at JKKN.",
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
        <CourseAdmissionDetail course={course} />
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
