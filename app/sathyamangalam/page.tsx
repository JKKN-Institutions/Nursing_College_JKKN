import type { Metadata } from "next";
import CityLandingPage, { CityPageConfig } from "@/components/CityLandingPage";

const config: CityPageConfig = {
  slug: "sathyamangalam",
  cityName: "Sathyamangalam",
  heroTitlePrefix: "Nursing College near",
  heroDescription:
    "Searching for a nursing college near Sathyamangalam? Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) in Komarapalayam is about 60-70 km away via Gobichettipalayam and Bhavani. INC-approved B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc programmes with hospital-based training and secure hostels.",
  heroStats: [
    { value: "95%", label: "PLACEMENTS" },
    { value: "6-8", label: "LPA HIGHEST" },
    { value: "~65km", label: "FROM SATHY" },
    { value: "3", label: "PROGRAMMES" },
  ],
  distanceKm: "~65",
  distanceHeading: "From Sathyamangalam to JKKN Nursing",
  distanceSub:
    "Around 1.5 to 2 hours by road via Gobichettipalayam and Bhavani; the campus is on NH-544 at Natarajapuram, Komarapalayam",
  landscapeHeading: "Nursing Education for Sathyamangalam Learners",
  landscapeParagraphs: [
    "Sathyamangalam sits at the foothills of the Western Ghats in Erode district, an agricultural town on the Coimbatore-Mysuru corridor known for its farm produce and the forest belt beyond. For learners from Sathy, Puliampatti and the surrounding blocks, professional education usually means travelling towards Erode or Coimbatore.",
    "For nursing aspirants from Sathyamangalam, JKKN College of Nursing (Sresakthimayeil Institute Of Nursing And Research) at Komarapalayam is a practical hostel-based option — about 60-70 km away, roughly 1.5 to 2 hours via Gobichettipalayam and Bhavani. Close enough for weekend trips home, far enough for a focused residential campus life.",
    "The institute is approved by the Indian Nursing Council (INC), accredited by NAAC, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Clinical training takes place at the JKKN group's multi-specialty teaching hospital, so learners build real patient-care skills from the first year of the programme.",
    "Most Sathyamangalam learners choose the secure on-campus hostels — separate blocks for boys and girls with mess facilities and warden supervision. With 95% placement rate and international nursing pathways (UK NHS, Gulf HAAD/DHA, Australia AHPRA), Sathy learners can take a global nursing career from the foothills to the world.",
  ],
  whyHeading: "Why Sathyamangalam Learners Choose JKKN",
  whyIntro:
    "JKKN College of Nursing is about 60-70 km from Sathyamangalam — a hostel-friendly distance with weekend travel home via Gobichettipalayam. INC approved, NAAC accredited, hospital-attached, with secure separate hostels.",
  commuteDesc:
    "About 60-70 km from Sathyamangalam (~1.5-2 hours) via Gobichettipalayam and Bhavani. Hostel stay with weekend trips home is the popular choice.",
  programmesHeading: "Nursing Courses Available for Sathyamangalam Learners",
  reachHeading: "How to Reach from Sathyamangalam",
  reachRouteSummary: "60-70 km • about 1.5-2 hours",
  reachRoute:
    "Sathyamangalam → Gobichettipalayam → Bhavani → Komarapalayam; the campus is on NH-544",
  reachBus:
    "Buses run from Sathyamangalam towards Gobichettipalayam and Erode; change at Gobi or Bhavani for Komarapalayam",
  reachRail:
    "Erode Junction is the nearest major railhead (~20 km from campus); Coimbatore is the nearest airport city",
  faqSubtitle: "Nursing College near Sathyamangalam — Your Questions Answered",
  faqs: [
    {
      q: "Which nursing college is accessible from Sathyamangalam?",
      a: "Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) at Komarapalayam is an accessible INC-approved nursing college for Sathyamangalam learners — about 60-70 km away via Gobichettipalayam and Bhavani. It is NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "How far is JKKN Nursing from Sathyamangalam?",
      a: "JKKN College of Nursing is approximately 60-70 km from Sathyamangalam — about 1.5 to 2 hours by road via Gobichettipalayam and Bhavani. The campus is on NH-544 at Natarajapuram, Komarapalayam.",
    },
    {
      q: "Does JKKN Nursing provide hostel for Sathyamangalam learners?",
      a: "Yes. Separate, secure hostels for boys and girls with mess facilities and warden supervision are available on campus. With Sathyamangalam about 1.5-2 hours away, learners can comfortably travel home on weekends and holidays.",
    },
    {
      q: "What nursing courses are available for Sathyamangalam learners?",
      a: "JKKN College of Nursing offers B.Sc Nursing (4 years, 60 seats), M.Sc Nursing (2 years, 25 seats), and Post Basic B.Sc Nursing (2 years, 50 seats). All programmes are INC approved and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "Is NEET required for B.Sc Nursing?",
      a: "No, NEET is not required for B.Sc Nursing in Tamil Nadu. Admission is merit-based on the 10+2 marks in Physics, Chemistry and Biology, normalised to a base of 200 by the Tamil Nadu Selection Committee. Contact the admission office for the current year's dates.",
    },
    {
      q: "Can I get a nursing job abroad after studying here?",
      a: "Yes, graduates from Sresakthimayeil Institute Of Nursing And Research are eligible for international nursing careers. With an INC-approved B.Sc Nursing degree, you can appear for licensing exams like HAAD/DHA (Gulf), NMC-CBT (UK), NCLEX (US), or AHPRA (Australia).",
    },
    {
      q: "What is the fee structure for B.Sc Nursing for Sathyamangalam learners?",
      a: "Fee structures for B.Sc Nursing at JKKN College of Nursing follow Tamil Nadu government and university norms. For the latest fee details for the 2026-27 academic year, contact the admission office at +91 93458 55001 or visit https://nursing.sresakthimayeil.jkkn.ac.in/",
    },
    {
      q: "How can I apply for admission at JKKN Nursing from Sathyamangalam?",
      a: "You can apply online through the official website at https://nursing.sresakthimayeil.jkkn.ac.in/ or call the admission office at +91 93458 55001. Campus visits are welcome any working day. Admissions for 2026-27 are currently open.",
    },
  ],
  cities: [
    { name: "Gobichettipalayam", distance: "30-40 km", href: "/gobichettipalayam" },
    { name: "Erode", distance: "55-65 km", href: "/erode" },
    { name: "Coimbatore", distance: "65-75 km", href: "/coimbatore" },
    { name: "Komarapalayam", distance: "60-70 km", href: "/komarapalayam" },
  ],
  successCityText:
    "Share your experience and inspire future nursing learners from Sathyamangalam",
  areaServedSameAs: "https://en.wikipedia.org/wiki/Sathyamangalam",
};

export const metadata: Metadata = {
  title: "Nursing College near Sathyamangalam | B.Sc Nursing — JKKN",
  description:
    "Nursing college near Sathyamangalam: JKKN College of Nursing in Komarapalayam is ~60-70 km via Gobichettipalayam. INC approved, NAAC accredited. B.Sc, M.Sc, Post Basic B.Sc Nursing with secure hostels. Admissions 2026-27 open.",
  keywords:
    "nursing college near sathyamangalam, nursing colleges sathy, bsc nursing sathyamangalam, nursing college erode district, jkkn nursing sathyamangalam",
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/sathyamangalam",
  },
  openGraph: {
    title: "Nursing College near Sathyamangalam | B.Sc Nursing — JKKN",
    description:
      "JKKN College of Nursing in Komarapalayam is ~60-70 km from Sathyamangalam via Gobi. INC approved, NAAC accredited, secure hostels. Admissions 2026-27 open.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/sathyamangalam",
    siteName: "JKKN College of Nursing",
    type: "website",
  },
};

export default function SathyamangalamPage() {
  return <CityLandingPage config={config} />;
}
