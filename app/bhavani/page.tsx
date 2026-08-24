import type { Metadata } from "next";
import CityLandingPage, { CityPageConfig } from "@/components/CityLandingPage";

const config: CityPageConfig = {
  slug: "bhavani",
  cityName: "Bhavani",
  heroTitlePrefix: "Nursing College near",
  heroDescription:
    "Searching for a nursing college near Bhavani? Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) is just across the Cauvery bridge in Komarapalayam — around 5 km from Bhavani town. INC-approved B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc programmes, minutes from home.",
  heroStats: [
    { value: "95%", label: "PLACEMENTS" },
    { value: "6-8", label: "LPA HIGHEST" },
    { value: "~5km", label: "FROM BHAVANI" },
    { value: "3", label: "PROGRAMMES" },
  ],
  distanceKm: "5",
  distanceHeading: "From Bhavani to JKKN Nursing",
  distanceSub:
    "About 10-15 minutes — cross the Cauvery bridge to Komarapalayam and the campus is on NH-544 at Natarajapuram",
  landscapeHeading: "Nursing Education for Bhavani Learners",
  landscapeParagraphs: [
    "Bhavani is a historic temple town in Erode district, famous for the Sangameshwarar Temple at the confluence of the Cauvery and Bhavani rivers, and for its traditional jamakkalam (carpet) weaving industry. It is directly connected to Komarapalayam by the Cauvery bridge, making the two towns everyday neighbours.",
    "That connection matters for nursing aspirants: JKKN College of Nursing (Sresakthimayeil Institute Of Nursing And Research) sits just across the river in Komarapalayam on NH-544 — roughly 5 km from Bhavani town. For learners looking for a nursing college near Bhavani, this is effectively a home-town campus with a 10-15 minute commute.",
    "The institute is approved by the Indian Nursing Council (INC), accredited by NAAC, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Clinical training is hospital-based at the JKKN group's multi-specialty teaching hospital, giving learners direct patient-care exposure from the first year of the programme.",
    "Because the campus is so close, most Bhavani learners study as day scholars and save the full cost of hostel and mess fees — though secure separate hostels for boys and girls are available for those who prefer to stay on campus. With 95% placement rate and international nursing pathways (UK NHS, Gulf HAAD/DHA, Australia AHPRA), Bhavani learners can start a global nursing career from right next door.",
  ],
  whyHeading: "Why Bhavani Learners Choose JKKN — The Closest Nursing College",
  whyIntro:
    "For Bhavani learners, JKKN College of Nursing is the nearest INC-approved, NAAC-accredited nursing institute — just across the Cauvery bridge in Komarapalayam, about 5 km away. Day-scholar friendly, hospital-attached, with 95% placement rate.",
  commuteDesc:
    "Just ~5 km from Bhavani across the Cauvery bridge — a 10-15 minute commute makes day-scholar study easy.",
  programmesHeading: "Nursing Courses Available for Bhavani Learners",
  reachHeading: "How to Reach from Bhavani",
  reachRouteSummary: "~5 km • 10-15 minutes",
  reachRoute:
    "Cross the Cauvery bridge from Bhavani to Komarapalayam; the campus is on NH-544 at Natarajapuram",
  reachBus:
    "Frequent town buses and share autos run between Bhavani bus stand and Komarapalayam throughout the day",
  reachRail: "Erode Junction (~35 km from campus)",
  faqSubtitle: "Nursing College near Bhavani — Your Questions Answered",
  faqs: [
    {
      q: "Which is the nearest nursing college to Bhavani?",
      a: "Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) in Komarapalayam is the nearest INC-approved nursing college to Bhavani — about 5 km away, just across the Cauvery bridge. It is NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "How far is JKKN Nursing from Bhavani?",
      a: "JKKN College of Nursing is approximately 5 km from Bhavani town — about 10-15 minutes by road. Cross the Cauvery bridge to Komarapalayam and the campus is on NH-544 at Natarajapuram. Town buses and share autos ply the route all day.",
    },
    {
      q: "Can Bhavani learners study nursing as day scholars?",
      a: "Yes. With the campus only about 5 km from Bhavani, most learners commute daily by bus or two-wheeler and save on hostel costs. Separate hostels for boys and girls are also available on campus for those who prefer to stay.",
    },
    {
      q: "What nursing courses are available near Bhavani?",
      a: "JKKN College of Nursing near Bhavani offers B.Sc Nursing (4 years, 100 seats), M.Sc Nursing (2 years, 30 seats), and Post Basic B.Sc Nursing (2 years, 50 seats). All programmes are INC approved and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
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
      q: "What is the fee structure for B.Sc Nursing near Bhavani?",
      a: "Fee structures for B.Sc Nursing at JKKN College of Nursing follow Tamil Nadu government and university norms. For the latest fee details for the 2026-27 academic year, contact the admission office at +91 93458 55001 or visit https://nursing.sresakthimayeil.jkkn.ac.in/",
    },
    {
      q: "How can I apply for admission at JKKN Nursing?",
      a: "You can apply online through the official website at https://nursing.sresakthimayeil.jkkn.ac.in/ or visit the campus directly — it is only about 5 km from Bhavani. Admissions for 2026-27 are currently open. Call +91 93458 55001 for guidance.",
    },
  ],
  cities: [
    { name: "Komarapalayam", distance: "~5 km", href: "/komarapalayam" },
    { name: "Erode", distance: "30-40 km", href: "/erode" },
    { name: "Gobichettipalayam", distance: "40-50 km", href: "/gobichettipalayam" },
    { name: "Salem", distance: "40-50 km", href: "/salem" },
  ],
  successCityText:
    "Share your experience and inspire future nursing learners from Bhavani",
};

export const metadata: Metadata = {
  title: "Nursing College near Bhavani | B.Sc Nursing — JKKN",
  description:
    "Nursing college near Bhavani: JKKN College of Nursing is just ~5 km away across the Cauvery bridge in Komarapalayam. INC approved, NAAC accredited. B.Sc, M.Sc, Post Basic B.Sc Nursing. Day-scholar friendly. Admissions 2026-27 open.",
  keywords:
    "nursing college near bhavani, nursing college in bhavani, bsc nursing near bhavani, nursing colleges in erode district, jkkn nursing bhavani",
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/bhavani",
  },
  openGraph: {
    title: "Nursing College near Bhavani | B.Sc Nursing — JKKN",
    description:
      "JKKN College of Nursing is just ~5 km from Bhavani, across the Cauvery bridge in Komarapalayam. INC approved, NAAC accredited. Day-scholar friendly.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/bhavani",
    siteName: "JKKN College of Nursing",
    type: "website",
  },
};

export default function BhavaniPage() {
  return <CityLandingPage config={config} />;
}
