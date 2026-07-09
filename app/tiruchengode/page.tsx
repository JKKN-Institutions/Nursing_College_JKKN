import type { Metadata } from "next";
import CityLandingPage, { CityPageConfig } from "@/components/CityLandingPage";

const config: CityPageConfig = {
  slug: "tiruchengode",
  cityName: "Tiruchengode",
  heroTitlePrefix: "Nursing College near",
  heroDescription:
    "Looking for a nursing college near Tiruchengode? Sresakthimayeil Institute of Nursing and Research (JKKN College of Nursing) in Komarapalayam is just 15-20 km away — in the same Namakkal district. INC-approved B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc programmes with hospital-based training.",
  heroStats: [
    { value: "90%+", label: "PLACEMENTS" },
    { value: "6-8", label: "LPA HIGHEST" },
    { value: "15-20km", label: "FROM T'GODE" },
    { value: "3", label: "PROGRAMMES" },
  ],
  distanceKm: "18",
  distanceHeading: "From Tiruchengode to JKKN Nursing",
  distanceSub:
    "About 25-35 minutes via the Tiruchengode-Komarapalayam road — both towns are in Namakkal district",
  landscapeHeading: "Nursing Education for Tiruchengode Learners",
  landscapeParagraphs: [
    "Tiruchengode is one of the major towns of Namakkal district, famous for the hilltop Ardhanareeswarar Temple and as a national hub for the borewell rig industry. The town has a strong educational ecosystem, and healthcare careers — especially nursing — are a popular choice for learners from Tiruchengode taluk.",
    "For nursing aspirants here, JKKN College of Nursing (Sresakthimayeil Institute of Nursing and Research) in Komarapalayam is one of the closest INC-approved options — about 15-20 km away by the direct Tiruchengode-Komarapalayam road, within the same Namakkal district. No relocation to Salem, Erode or Coimbatore is needed.",
    "The institute is approved by the Indian Nursing Council (INC), accredited by NAAC, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Learners train at the JKKN group's multi-specialty teaching hospital, getting real patient-care exposure from the first year — a key advantage over theory-only colleges.",
    "Tiruchengode learners can commute daily (about 25-35 minutes by bus or two-wheeler) or choose the secure on-campus hostels with separate blocks for boys and girls. With 90%+ placement support and international pathways (UK NHS, Gulf HAAD/DHA, Australia AHPRA), a global nursing career starts close to home.",
  ],
  whyHeading: "Why Tiruchengode Learners Choose JKKN — Same-District Nursing College",
  whyIntro:
    "JKKN College of Nursing is in Komarapalayam, the neighbouring taluk of the same Namakkal district — just 15-20 km from Tiruchengode. INC approved, NAAC accredited, hospital-attached, and easy to commute daily.",
  commuteDesc:
    "Just 15-20 km from Tiruchengode via the direct Komarapalayam road — 25-35 minutes by bus or two-wheeler.",
  programmesHeading: "Nursing Courses Available for Tiruchengode Learners",
  reachHeading: "How to Reach from Tiruchengode",
  reachRouteSummary: "15-20 km • 25-35 minutes",
  reachRoute:
    "Direct Tiruchengode-Komarapalayam road; the campus is on NH-544 at Natarajapuram, Komarapalayam",
  reachBus:
    "Regular government and private buses run between Tiruchengode bus stand and Komarapalayam throughout the day",
  reachRail: "Erode Junction (~35 km from campus); Sankaridurg is the closer local station",
  faqSubtitle: "Nursing College near Tiruchengode — Your Questions Answered",
  faqs: [
    {
      q: "Which is the nearest nursing college to Tiruchengode?",
      a: "Sresakthimayeil Institute of Nursing and Research (JKKN College of Nursing) in Komarapalayam is one of the nearest INC-approved nursing colleges to Tiruchengode — about 15-20 km away in the same Namakkal district. It is NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "How far is JKKN Nursing from Tiruchengode?",
      a: "JKKN College of Nursing is approximately 15-20 km from Tiruchengode via the direct Tiruchengode-Komarapalayam road — about 25-35 minutes. Regular buses ply between Tiruchengode bus stand and Komarapalayam all day.",
    },
    {
      q: "Are there nursing colleges in Namakkal district?",
      a: "Yes. JKKN College of Nursing (Sresakthimayeil Institute of Nursing and Research) at Komarapalayam is an INC-approved, NAAC-accredited nursing college within Namakkal district, offering B.Sc Nursing, M.Sc Nursing and Post Basic B.Sc Nursing. For Tiruchengode learners it is a same-district option just 15-20 km away.",
    },
    {
      q: "What nursing courses are available near Tiruchengode?",
      a: "JKKN College of Nursing near Tiruchengode offers B.Sc Nursing (4 years, 100 seats), M.Sc Nursing (2 years, 30 seats), and Post Basic B.Sc Nursing (2 years, 50 seats). All programmes are INC approved and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "Is NEET required for B.Sc Nursing?",
      a: "B.Sc Nursing admissions in Tamil Nadu are typically through NEET counselling. Contact the admission office for the latest admission requirements for the current academic year.",
    },
    {
      q: "Can Tiruchengode learners commute daily or is hostel needed?",
      a: "Both options work. Many Tiruchengode learners commute daily since the campus is only 25-35 minutes away. Separate, secure hostels for boys and girls with mess facilities are available for learners who prefer to stay on campus.",
    },
    {
      q: "Can I get a nursing job abroad after studying here?",
      a: "Yes, graduates from Sresakthimayeil Institute of Nursing and Research are eligible for international nursing careers. With an INC-approved B.Sc Nursing degree, you can appear for licensing exams like HAAD/DHA (Gulf), NMC-CBT (UK), NCLEX (US), or AHPRA (Australia).",
    },
    {
      q: "What is the fee structure for B.Sc Nursing near Tiruchengode?",
      a: "Fee structures for B.Sc Nursing at JKKN College of Nursing follow Tamil Nadu government and university norms. For the latest fee details for the 2026-27 academic year, contact the admission office at +91 93458 55001 or visit https://nursing.sresakthimayeil.jkkn.ac.in/",
    },
  ],
  cities: [
    { name: "Komarapalayam", distance: "15-20 km", href: "/komarapalayam" },
    { name: "Namakkal", distance: "30-40 km", href: "/namakkal" },
    { name: "Sankagiri", distance: "20-30 km", href: "/sankagiri" },
    { name: "Erode", distance: "35-45 km", href: "/erode" },
  ],
  successCityText:
    "Share your experience and inspire future nursing learners from Tiruchengode",
  areaServedSameAs: "https://en.wikipedia.org/wiki/Tiruchengode",
};

export const metadata: Metadata = {
  title: "Nursing College near Tiruchengode | B.Sc Nursing — JKKN",
  description:
    "Nursing college near Tiruchengode: JKKN College of Nursing in Komarapalayam is 15-20 km away, in the same Namakkal district. INC approved, NAAC accredited. B.Sc, M.Sc, Post Basic B.Sc Nursing. Admissions 2026-27 open.",
  keywords:
    "nursing college near tiruchengode, nursing college in tiruchengode, bsc nursing tiruchengode, nursing colleges in namakkal district, jkkn nursing tiruchengode",
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/tiruchengode",
  },
  openGraph: {
    title: "Nursing College near Tiruchengode | B.Sc Nursing — JKKN",
    description:
      "JKKN College of Nursing in Komarapalayam is 15-20 km from Tiruchengode, same Namakkal district. INC approved, NAAC accredited. Admissions 2026-27 open.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/tiruchengode",
    siteName: "JKKN College of Nursing",
    type: "website",
  },
};

export default function TiruchengodePage() {
  return <CityLandingPage config={config} />;
}
