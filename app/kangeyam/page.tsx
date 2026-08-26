import type { Metadata } from "next";
import CityLandingPage, { CityPageConfig } from "@/components/CityLandingPage";

const config: CityPageConfig = {
  slug: "kangeyam",
  cityName: "Kangeyam",
  heroTitlePrefix: "Nursing College near",
  heroDescription:
    "Searching for a nursing college near Kangeyam? Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) in Komarapalayam is about 50-60 km away via Erode. INC-approved B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc programmes with hospital-based training and secure hostels.",
  heroStats: [
    { value: "95%", label: "PLACEMENTS" },
    { value: "6-8", label: "LPA HIGHEST" },
    { value: "~55km", label: "FROM KANGEYAM" },
    { value: "3", label: "PROGRAMMES" },
  ],
  distanceKm: "~55",
  distanceHeading: "From Kangeyam to JKKN Nursing",
  distanceSub:
    "Around 1.5 hours by road via Erode; the campus is on NH-544 at Natarajapuram, Komarapalayam",
  landscapeHeading: "Nursing Education for Kangeyam Learners",
  landscapeParagraphs: [
    "Kangeyam, in Tiruppur district, is famous for the hardy Kangayam cattle breed, its coconut and copra trade, and its powerloom units. Families here run farms and businesses across the Kongu belt — and increasingly send their learners into professional healthcare careers.",
    "For nursing aspirants from Kangeyam, JKKN College of Nursing (Sresakthimayeil Institute Of Nursing And Research) at Komarapalayam is a practical hostel-based option — about 50-60 km away, roughly 1.5 hours via Erode. Weekend trips home stay easy while learners get a full residential campus experience.",
    "The institute is approved by the Indian Nursing Council (INC), accredited by NAAC, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Clinical training takes place at the JKKN group's multi-specialty teaching hospital, so learners build real patient-care skills from the first year of the programme.",
    "Most Kangeyam learners choose the secure on-campus hostels — separate blocks for boys and girls with mess facilities and warden supervision. With 95% placement rate and international nursing pathways (UK NHS, Gulf HAAD/DHA, Australia AHPRA), Kangeyam learners can launch a global nursing career about ninety minutes from home.",
  ],
  whyHeading: "Why Kangeyam Learners Choose JKKN",
  whyIntro:
    "JKKN College of Nursing is about 50-60 km from Kangeyam — a hostel-friendly distance with easy weekend travel home via Erode. INC approved, NAAC accredited, hospital-attached, with secure separate hostels.",
  commuteDesc:
    "About 50-60 km from Kangeyam (~1.5 hours) via Erode. Hostel stay with weekend trips home is the popular choice.",
  programmesHeading: "Nursing Courses Available for Kangeyam Learners",
  reachHeading: "How to Reach from Kangeyam",
  reachRouteSummary: "50-60 km • about 1.5 hours",
  reachRoute:
    "Kangeyam → Erode → Bhavani → Komarapalayam; the campus is on NH-544 (Salem-Coimbatore highway)",
  reachBus:
    "Regular buses run from Kangeyam to Erode; from Erode bus stand take any Bhavani/Salem-side bus and get down at Komarapalayam",
  reachRail:
    "Erode Junction is the nearest major railhead (~35 km from Kangeyam and ~20 km from campus)",
  faqSubtitle: "Nursing College near Kangeyam — Your Questions Answered",
  faqs: [
    {
      q: "Which nursing college is accessible from Kangeyam?",
      a: "Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) at Komarapalayam is an accessible INC-approved nursing college for Kangeyam learners — about 50-60 km away via Erode. It is NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "How far is JKKN Nursing from Kangeyam?",
      a: "JKKN College of Nursing is approximately 50-60 km from Kangeyam — about 1.5 hours by road via Erode and Bhavani. Erode Junction is the nearest major railhead, about 35 km from Kangeyam and 20 km from campus.",
    },
    {
      q: "Does JKKN Nursing provide hostel for Kangeyam learners?",
      a: "Yes. Separate, secure hostels for boys and girls with mess facilities and warden supervision are available on campus. With Kangeyam about 1.5 hours away, learners can comfortably travel home on weekends and holidays.",
    },
    {
      q: "What nursing courses are available for Kangeyam learners?",
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
      q: "What is the fee structure for B.Sc Nursing for Kangeyam learners?",
      a: "Fee structures for B.Sc Nursing at JKKN College of Nursing follow Tamil Nadu government and university norms. For the latest fee details for the 2026-27 academic year, contact the admission office at +91 93458 55001 or visit https://nursing.sresakthimayeil.jkkn.ac.in/",
    },
    {
      q: "How can I apply for admission at JKKN Nursing from Kangeyam?",
      a: "You can apply online through the official website at https://nursing.sresakthimayeil.jkkn.ac.in/ or call the admission office at +91 93458 55001. Campus visits are welcome any working day. Admissions for 2026-27 are currently open.",
    },
  ],
  cities: [
    { name: "Tiruppur", distance: "25-35 km", href: "/tiruppur" },
    { name: "Erode", distance: "30-40 km", href: "/erode" },
    { name: "Perundurai", distance: "30-40 km", href: "/perundurai" },
    { name: "Komarapalayam", distance: "50-60 km", href: "/komarapalayam" },
  ],
  successCityText:
    "Share your experience and inspire future nursing learners from Kangeyam",
  areaServedSameAs: "https://en.wikipedia.org/wiki/Kangayam",
};

export const metadata: Metadata = {
  title: "Nursing College near Kangeyam | B.Sc Nursing — JKKN",
  description:
    "Nursing college near Kangeyam: JKKN College of Nursing in Komarapalayam is ~50-60 km via Erode. INC approved, NAAC accredited. B.Sc, M.Sc, Post Basic B.Sc Nursing with secure hostels. Admissions 2026-27 open.",
  keywords:
    "nursing college near kangeyam, nursing colleges kangeyam, bsc nursing kangeyam, nursing college tiruppur district, jkkn nursing kangeyam",
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/kangeyam",
  },
  openGraph: {
    title: "Nursing College near Kangeyam | B.Sc Nursing — JKKN",
    description:
      "JKKN College of Nursing in Komarapalayam is ~50-60 km from Kangeyam via Erode. INC approved, NAAC accredited, secure hostels. Admissions 2026-27 open.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/kangeyam",
    siteName: "JKKN College of Nursing",
    type: "website",
  },
};

export default function KangeyamPage() {
  return <CityLandingPage config={config} />;
}
