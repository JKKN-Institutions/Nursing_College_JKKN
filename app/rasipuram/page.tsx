import type { Metadata } from "next";
import CityLandingPage, { CityPageConfig } from "@/components/CityLandingPage";

const config: CityPageConfig = {
  slug: "rasipuram",
  cityName: "Rasipuram",
  heroTitlePrefix: "Nursing College near",
  heroDescription:
    "Searching for a nursing college near Rasipuram? Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) in Komarapalayam is about 40-45 km away — in the same Namakkal district. INC-approved B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc programmes with hospital-based training and hostels.",
  heroStats: [
    { value: "95%", label: "PLACEMENTS" },
    { value: "6-8", label: "LPA HIGHEST" },
    { value: "~40km", label: "FROM RASIPURAM" },
    { value: "3", label: "PROGRAMMES" },
  ],
  distanceKm: "42",
  distanceHeading: "From Rasipuram to JKKN Nursing",
  distanceSub:
    "About 1 hour via Tiruchengode; the campus is on NH-544 at Natarajapuram, Komarapalayam — same Namakkal district",
  landscapeHeading: "Nursing Education for Rasipuram Learners",
  landscapeParagraphs: [
    "Rasipuram is a well-known town in Namakkal district, famous for its traditional silk saree weaving and its strong schooling culture. Learners from Rasipuram taluk regularly pursue professional courses across the district and neighbouring Salem, and healthcare careers are a growing preference.",
    "For nursing aspirants, JKKN College of Nursing (Sresakthimayeil Institute Of Nursing And Research) at Komarapalayam is a same-district option — about 40-45 km away via Tiruchengode, roughly an hour by road. Learners get an INC-approved institute without leaving Namakkal district.",
    "The institute is approved by the Indian Nursing Council (INC), accredited by NAAC, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Clinical training takes place at the JKKN group's multi-specialty teaching hospital, giving learners direct patient-care exposure from the first year.",
    "Most Rasipuram learners choose the secure on-campus hostels (separate blocks for boys and girls with mess facilities), with the one-hour distance making weekend trips home easy. With 95% placement rate and international nursing pathways (UK NHS, Gulf HAAD/DHA, Australia AHPRA), Rasipuram learners can launch a global career from within their own district.",
  ],
  whyHeading: "Why Rasipuram Learners Choose JKKN — Same-District Nursing College",
  whyIntro:
    "JKKN College of Nursing at Komarapalayam is in the same Namakkal district as Rasipuram — about 40-45 km via Tiruchengode. INC approved, NAAC accredited, hospital-attached, with secure hostels and easy weekend travel home.",
  commuteDesc:
    "About 40-45 km from Rasipuram via Tiruchengode (~1 hour). Hostel stay with weekend trips home is the popular choice.",
  programmesHeading: "Nursing Courses Available for Rasipuram Learners",
  reachHeading: "How to Reach from Rasipuram",
  reachRouteSummary: "40-45 km • about 1 hour",
  reachRoute:
    "Rasipuram → Tiruchengode → Komarapalayam; the campus is on NH-544 at Natarajapuram",
  reachBus:
    "Regular buses run from Rasipuram bus stand towards Tiruchengode and Komarapalayam; Namakkal-Erode route buses also serve the corridor",
  reachRail: "Erode Junction (~35 km from campus); Salem Junction is the other major junction for Rasipuram",
  faqSubtitle: "Nursing College near Rasipuram — Your Questions Answered",
  faqs: [
    {
      q: "Which is the nearest nursing college to Rasipuram?",
      a: "Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) at Komarapalayam is a convenient INC-approved nursing college for Rasipuram learners — about 40-45 km away in the same Namakkal district. It is NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "How far is JKKN Nursing from Rasipuram?",
      a: "JKKN College of Nursing is approximately 40-45 km from Rasipuram via Tiruchengode — about an hour by road. Regular buses connect Rasipuram, Tiruchengode and Komarapalayam.",
    },
    {
      q: "Are there nursing colleges in Namakkal district for Rasipuram learners?",
      a: "Yes. JKKN College of Nursing (Sresakthimayeil Institute Of Nursing And Research) at Komarapalayam is an INC-approved, NAAC-accredited nursing college within Namakkal district, offering B.Sc Nursing, M.Sc Nursing and Post Basic B.Sc Nursing — a same-district option for Rasipuram learners.",
    },
    {
      q: "Does JKKN Nursing provide hostel for Rasipuram learners?",
      a: "Yes. Separate, secure hostels for boys and girls with mess facilities and warden supervision are available on campus. With Rasipuram only about an hour away, weekend trips home are easy.",
    },
    {
      q: "What nursing courses are available near Rasipuram?",
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
      q: "What is the fee structure for B.Sc Nursing near Rasipuram?",
      a: "Fee structures for B.Sc Nursing at JKKN College of Nursing follow Tamil Nadu government and university norms. For the latest fee details for the 2026-27 academic year, contact the admission office at +91 93458 55001 or visit https://nursing.sresakthimayeil.jkkn.ac.in/",
    },
  ],
  cities: [
    { name: "Namakkal", distance: "25-30 km", href: "/namakkal" },
    { name: "Tiruchengode", distance: "25-30 km", href: "/tiruchengode" },
    { name: "Komarapalayam", distance: "40-45 km", href: "/komarapalayam" },
    { name: "Salem", distance: "30-40 km", href: "/salem" },
  ],
  successCityText:
    "Share your experience and inspire future nursing learners from Rasipuram",
  areaServedSameAs: "https://en.wikipedia.org/wiki/Rasipuram",
};

export const metadata: Metadata = {
  title: "Nursing College near Rasipuram | B.Sc Nursing — JKKN",
  description:
    "Nursing college near Rasipuram: JKKN College of Nursing in Komarapalayam is ~40-45 km away, same Namakkal district. INC approved, NAAC accredited. B.Sc, M.Sc, Post Basic B.Sc Nursing with hostel. Admissions 2026-27 open.",
  keywords:
    "nursing college near rasipuram, nursing college in rasipuram, bsc nursing rasipuram, nursing colleges in namakkal district, jkkn nursing rasipuram",
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/rasipuram",
  },
  openGraph: {
    title: "Nursing College near Rasipuram | B.Sc Nursing — JKKN",
    description:
      "JKKN College of Nursing in Komarapalayam is ~40-45 km from Rasipuram, same Namakkal district. INC approved, NAAC accredited, hostel available.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/rasipuram",
    siteName: "JKKN College of Nursing",
    type: "website",
  },
};

export default function RasipuramPage() {
  return <CityLandingPage config={config} />;
}
