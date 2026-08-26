import type { Metadata } from "next";
import CityLandingPage, { CityPageConfig } from "@/components/CityLandingPage";

const config: CityPageConfig = {
  slug: "karur",
  cityName: "Karur",
  heroTitlePrefix: "Nursing College near",
  heroDescription:
    "Searching for a nursing college near Karur? Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) in Komarapalayam is about 75-85 km away via Namakkal or Erode. INC-approved B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc programmes with hospital-based training and secure hostels.",
  heroStats: [
    { value: "95%", label: "PLACEMENTS" },
    { value: "6-8", label: "LPA HIGHEST" },
    { value: "~80km", label: "FROM KARUR" },
    { value: "3", label: "PROGRAMMES" },
  ],
  distanceKm: "~80",
  distanceHeading: "From Karur to JKKN Nursing",
  distanceSub:
    "Around 2 hours by road via Namakkal-Tiruchengode or via Erode; the campus is on NH-544 at Natarajapuram, Komarapalayam",
  landscapeHeading: "Nursing Education for Karur Learners",
  landscapeParagraphs: [
    "Karur is a well-known commercial town on the banks of the Amaravathi river, famous for its home-textile export industry, bus-body building works, and as the birthplace of major banking institutions. Learners from Karur district regularly pursue professional healthcare education in Trichy, Erode and Salem belts.",
    "For nursing aspirants from Karur, JKKN College of Nursing (Sresakthimayeil Institute Of Nursing And Research) at Komarapalayam is an accessible hostel-based option — about 75-85 km away, roughly 2 hours via the Namakkal-Tiruchengode route or via Erode. That distance keeps weekend trips home practical while giving learners a residential campus experience.",
    "The institute is approved by the Indian Nursing Council (INC), accredited by NAAC, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Clinical training takes place at the JKKN group's multi-specialty teaching hospital, so learners build real patient-care skills from the first year of the programme.",
    "Most Karur learners choose the secure on-campus hostels — separate blocks for boys and girls with mess facilities and warden supervision. With 95% placement rate and international nursing pathways (UK NHS, Gulf HAAD/DHA, Australia AHPRA), Karur learners can launch a global nursing career about two hours from home.",
  ],
  whyHeading: "Why Karur Learners Choose JKKN",
  whyIntro:
    "JKKN College of Nursing is about 75-85 km from Karur — a hostel-friendly distance with easy weekend travel home via Namakkal or Erode. INC approved, NAAC accredited, hospital-attached, with secure separate hostels.",
  commuteDesc:
    "About 75-85 km from Karur (~2 hours) via Namakkal-Tiruchengode or Erode. Hostel stay with weekend trips home is the popular choice.",
  programmesHeading: "Nursing Courses Available for Karur Learners",
  reachHeading: "How to Reach from Karur",
  reachRouteSummary: "75-85 km • about 2 hours",
  reachRoute:
    "Karur → Namakkal → Tiruchengode → Komarapalayam, or Karur → Erode → Komarapalayam via NH-544",
  reachBus:
    "Regular buses run from Karur bus stand towards Namakkal and Erode; change at Tiruchengode or Erode for Komarapalayam",
  reachRail:
    "Karur Junction connects to Erode Junction by rail; Erode Junction is ~35 km from campus",
  faqSubtitle: "Nursing College near Karur — Your Questions Answered",
  faqs: [
    {
      q: "Which nursing college is accessible from Karur?",
      a: "Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) at Komarapalayam is an accessible INC-approved nursing college for Karur learners — about 75-85 km away via Namakkal or Erode. It is NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "How far is JKKN Nursing from Karur?",
      a: "JKKN College of Nursing is approximately 75-85 km from Karur — about 2 hours by road via the Namakkal-Tiruchengode route or via Erode. By rail, Karur Junction connects to Erode Junction, which is about 35 km from campus.",
    },
    {
      q: "Does JKKN Nursing provide hostel for Karur learners?",
      a: "Yes. Separate, secure hostels for boys and girls with mess facilities and warden supervision are available on campus. With Karur about 2 hours away, learners can comfortably travel home on weekends and holidays.",
    },
    {
      q: "What nursing courses are available for Karur learners?",
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
      q: "What is the fee structure for B.Sc Nursing for Karur learners?",
      a: "Fee structures for B.Sc Nursing at JKKN College of Nursing follow Tamil Nadu government and university norms. For the latest fee details for the 2026-27 academic year, contact the admission office at +91 93458 55001 or visit https://nursing.sresakthimayeil.jkkn.ac.in/",
    },
    {
      q: "How can I apply for admission at JKKN Nursing from Karur?",
      a: "You can apply online through the official website at https://nursing.sresakthimayeil.jkkn.ac.in/ or call the admission office at +91 93458 55001. Campus visits are welcome any working day. Admissions for 2026-27 are currently open.",
    },
  ],
  cities: [
    { name: "Namakkal", distance: "45-55 km", href: "/namakkal" },
    { name: "Tiruchengode", distance: "55-65 km", href: "/tiruchengode" },
    { name: "Erode", distance: "60-70 km", href: "/erode" },
    { name: "Komarapalayam", distance: "75-85 km", href: "/komarapalayam" },
  ],
  successCityText:
    "Share your experience and inspire future nursing learners from Karur",
  areaServedSameAs: "https://en.wikipedia.org/wiki/Karur",
};

export const metadata: Metadata = {
  title: "Nursing College near Karur | B.Sc Nursing — JKKN",
  description:
    "JKKN College of Nursing at Komarapalayam is 75-85 km from Karur via Namakkal or Erode. INC approved, NAAC accredited. B.Sc, M.Sc, Post Basic.",
  keywords:
    "nursing college near karur, nursing colleges in karur, bsc nursing karur, nursing college karur district, jkkn nursing karur",
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/karur",
  },
  openGraph: {
    title: "Nursing College near Karur | B.Sc Nursing — JKKN",
    description:
      "JKKN College of Nursing in Komarapalayam is ~75-85 km from Karur. INC approved, NAAC accredited, secure hostels. Admissions 2026-27 open.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/karur",
    siteName: "JKKN College of Nursing",
    type: "website",
  },
};

export default function KarurPage() {
  return <CityLandingPage config={config} />;
}
