import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CourseAdmissionDetail from "@/components/CourseAdmissionDetail";
import { coursesAdmission, SITE_URL } from "@/data/courseWiseAdmissionData";

const course = coursesAdmission.bsc;

export const metadata: Metadata = {
  title: "B.Sc Nursing Admission 2026-27 | Eligibility, Fees, NEET, Process — JKKN",
  description:
    "B.Sc Nursing admission 2026-27 at JKKN College of Nursing. NEET-UG mandatory. 60 seats. ₹1,50,000/yr (F) / ₹1,75,000/yr (M) MQ. Eligibility, documents, dates, application process — apply online.",
  keywords:
    "B.Sc Nursing admission 2026, BSc Nursing JKKN, NEET nursing admission, B.Sc Nursing eligibility Tamil Nadu, BSc nursing fees, BSc Nursing application",
  alternates: { canonical: `${SITE_URL}/admissions/bsc-nursing` },
  openGraph: {
    title: "B.Sc Nursing Admission 2026-27 — JKKN College of Nursing",
    description:
      "4-year B.Sc Nursing program. NEET-UG required. Complete admission details — eligibility, fees, seats, documents, dates, and process.",
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
        <CourseAdmissionDetail course={course} />
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
