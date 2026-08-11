import type { Metadata } from "next";
import CityLandingPage, { CityPageConfig } from "@/components/CityLandingPage";

const config: CityPageConfig = {
  slug: "perundurai",
  cityName: "Perundurai",
  heroTitlePrefix: "Nursing College near",
  heroDescription:
    "Searching for a nursing college near Perundurai? Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) in Komarapalayam is about 40-50 km away via Erode on the NH-544 corridor. INC-approved B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc programmes with hospital-based training and secure hostels.",
  heroStats: [
    { value: "90%+", label: "PLACEMENTS" },
    { value: "6-8", label: "LPA HIGHEST" },
    { value: "~45km", label: "FROM PERUNDURAI" },
    { value: "3", label: "PROGRAMMES" },
  ],
  distanceKm: "~45",
  distanceHeading: "From Perundurai to JKKN Nursing",
  distanceSub:
    "Around 1 hour by road via Erode; both towns sit on the NH-544 Salem-Coimbatore corridor — campus at Natarajapuram, Komarapalayam",
  landscapeHeading: "Nursing Education for Perundurai Learners",
  landscapeParagraphs: [
    "Perundurai is a fast-growing industrial and educational town in Erode district, known for its SIPCOT industrial estate, textile units and engineering campuses along NH-544. Healthcare education is a natural next step for learners here — Perundurai families already see medical institutions and industry side by side.",
    "For nursing aspirants from Perundurai, JKKN College of Nursing (Sresakthimayeil Institute Of Nursing And Research) at Komarapalayam is a convenient option on the same NH-544 corridor — about 40-50 km away via Erode, roughly an hour by road. Day travel via Erode is possible, and hostels make it fully residential for those who prefer.",
    "The institute is approved by the Indian Nursing Council (INC), accredited by NAAC, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Clinical training takes place at the JKKN group's multi-specialty teaching hospital, so learners build real patient-care skills from the first year of the programme.",
    "Perundurai learners can choose the secure on-campus hostels — separate blocks for boys and girls with mess facilities and warden supervision — with home barely an hour away. With 90%+ placement support and international nursing pathways (UK NHS, Gulf HAAD/DHA, Australia AHPRA), a global nursing career starts on your own highway.",
  ],
  whyHeading: "Why Perundurai Learners Choose JKKN",
  whyIntro:
    "JKKN College of Nursing is about 40-50 km from Perundurai on the same NH-544 corridor — an easy hour via Erode. INC approved, NAAC accredited, hospital-attached, with secure separate hostels.",
  commuteDesc:
    "About 40-50 km from Perundurai (~1 hour) via Erode on NH-544. Hostel stay with weekend trips home is the popular choice; day travel is also possible.",
  programmesHeading: "Nursing Courses Available for Perundurai Learners",
  reachHeading: "How to Reach from Perundurai",
  reachRouteSummary: "40-50 km • about 1 hour",
  reachRoute:
    "Perundurai → Erode (Chithode) → Bhavani → Komarapalayam along the NH-544 corridor",
  reachBus:
    "Frequent buses connect Perundurai and Erode; from Erode bus stand take any Bhavani/Salem-side bus and get down at Komarapalayam",
  reachRail:
    "Erode Junction is the nearest major railhead (~20 km from Perundurai and ~20 km from campus)",
  faqSubtitle: "Nursing College near Perundurai — Your Questions Answered",
  faqs: [
    {
      q: "Which nursing college is close to Perundurai?",
      a: "Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) at Komarapalayam is a convenient INC-approved nursing college for Perundurai learners — about 40-50 km away via Erode on the NH-544 corridor. It is NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "How far is JKKN Nursing from Perundurai?",
      a: "JKKN College of Nursing is approximately 40-50 km from Perundurai — about 1 hour by road via Erode and Bhavani. Erode Junction is the nearest major railhead, about 20 km from both Perundurai and the campus.",
    },
    {
      q: "Does JKKN Nursing provide hostel for Perundurai learners?",
      a: "Yes. Separate, secure hostels for boys and girls with mess facilities and warden supervision are available on campus. With Perundurai about an hour away, learners can easily travel home on weekends — or commute via Erode.",
    },
    {
      q: "What nursing courses are available for Perundurai learners?",
      a: "JKKN College of Nursing offers B.Sc Nursing (4 years, 100 seats), M.Sc Nursing (2 years, 30 seats), and Post Basic B.Sc Nursing (2 years, 50 seats). All programmes are INC approved and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "Is NEET required for B.Sc Nursing?",
      a: "B.Sc Nursing admissions in Tamil Nadu are typically through NEET counselling. Contact the admission office for the latest admission requirements for the current academic year.",
    },
    {
      q: "Can I get a nursing job abroad after studying here?",
      a: "Yes, graduates from Sresakthimayeil Institute Of Nursing And Research are eligible for international nursing careers. With an INC-approved B.Sc Nursing degree, you can appear for licensing exams like HAAD/DHA (Gulf), NMC-CBT (UK), NCLEX (US), or AHPRA (Australia).",
    },
    {
      q: "What is the fee structure for B.Sc Nursing for Perundurai learners?",
      a: "Fee structures for B.Sc Nursing at JKKN College of Nursing follow Tamil Nadu government and university norms. For the latest fee details for the 2026-27 academic year, contact the admission office at +91 93458 55001 or visit https://nursing.sresakthimayeil.jkkn.ac.in/",
    },
    {
      q: "How can I apply for admission at JKKN Nursing from Perundurai?",
      a: "You can apply online through the official website at https://nursing.sresakthimayeil.jkkn.ac.in/ or call the admission office at +91 93458 55001. Campus visits are welcome any working day. Admissions for 2026-27 are currently open.",
    },
  ],
  cities: [
    { name: "Erode", distance: "15-25 km", href: "/erode" },
    { name: "Tiruppur", distance: "35-45 km", href: "/tiruppur" },
    { name: "Gobichettipalayam", distance: "30-40 km", href: "/gobichettipalayam" },
    { name: "Komarapalayam", distance: "40-50 km", href: "/komarapalayam" },
  ],
  successCityText:
    "Share your experience and inspire future nursing learners from Perundurai",
  areaServedSameAs: "https://en.wikipedia.org/wiki/Perundurai",
};

export const metadata: Metadata = {
  title: "Nursing College near Perundurai | B.Sc Nursing — JKKN",
  description:
    "JKKN College of Nursing at Komarapalayam is 40-50 km from Perundurai on NH-544. INC approved, NAAC accredited. B.Sc, M.Sc, Post Basic.",
  keywords:
    "nursing college near perundurai, nursing colleges perundurai, bsc nursing perundurai, nursing college erode district, jkkn nursing perundurai",
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/perundurai",
  },
  openGraph: {
    title: "Nursing College near Perundurai | B.Sc Nursing — JKKN",
    description:
      "JKKN College of Nursing in Komarapalayam is ~40-50 km from Perundurai via Erode. INC approved, NAAC accredited, secure hostels. Admissions 2026-27 open.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/perundurai",
    siteName: "JKKN College of Nursing",
    type: "website",
  },
};

export default function PerunduraiPage() {
  return <CityLandingPage config={config} />;
}
