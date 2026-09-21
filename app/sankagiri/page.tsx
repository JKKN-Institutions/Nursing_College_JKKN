import type { Metadata } from "next";
import CityLandingPage, { CityPageConfig } from "@/components/CityLandingPage";

const config: CityPageConfig = {
  slug: "sankagiri",
  cityName: "Sankagiri",
  heroTitlePrefix: "Nursing College near",
  heroDescription:
    "Looking for a nursing college near Sankagiri? Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing and Research) in Komarapalayam is just 17 km straight down NH-544 — an INC-approved institute offering B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc programmes with hospital-based training.",
  heroStats: [
    { value: "98%", label: "PLACEMENTS 2024-25" },
    { value: "₹3.6", label: "LPA MEDIAN (NIRF)" },
    { value: "17 km", label: "FROM SANKAGIRI" },
    { value: "3", label: "PROGRAMMES" },
  ],
  distanceKm: "22",
  distanceHeading: "From Sankagiri to JKKN Nursing",
  distanceSub:
    "about 20-30 minutes straight along NH-544 — the campus is right on the highway at Natarajapuram, Komarapalayam",
  landscapeHeading: "Nursing Education for Sankagiri Learners",
  landscapeParagraphs: [
    "Sankagiri is a fast-growing town in Salem district, known for the historic Sankagiri Fort and its position on NH-544, the Salem-Coimbatore national highway. Its location between Salem and Erode gives learners easy access to institutions on the highway corridor.",
    "For nursing aspirants from Sankagiri, JKKN College of Nursing and Research (Sresakthimayeil Institute Of Nursing And Research) is one of the most convenient INC-approved options — about 17 km down NH-544 at Komarapalayam, a straight 30-minute drive with no route changes. Every highway bus between Salem and Erode passes both towns.",
    "The institute is approved by the Indian Nursing Council (INC), accredited by NAAC, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Clinical training is hospital-based at the JKKN group's multi-specialty teaching hospital — learners work with real patients from the first year.",
    "The direct highway connection makes daily commuting practical for Sankagiri learners, and secure separate hostels for boys and girls are available for those who prefer campus stay. With 98% placement rate (2024-25: 58 of 59 graduates placed, NIRF 2026) and international pathways (UK NHS, Gulf HAAD/DHA, Australia AHPRA), Sankagiri learners can build a global nursing career just half an hour from home.",
  ],
  whyHeading: "Why Sankagiri Learners Choose JKKN — Straight Down NH-544",
  whyIntro:
    "JKKN College of Nursing and Research is just 17 km from Sankagiri along NH-544 — a single-road, 30-minute commute. INC approved, NAAC accredited, hospital-attached, with both day-scholar and hostel options.",
  commuteDesc:
    "17 km straight along NH-544 — about 20-30 minutes, with frequent highway buses between Sankagiri and Komarapalayam.",
  programmesHeading: "Nursing Courses Available for Sankagiri Learners",
  reachHeading: "How to Reach from Sankagiri",
  reachRouteSummary: "17 km • about 20-30 minutes",
  reachRoute:
    "Straight along NH-544 from Sankagiri towards Erode; the campus is on the highway at Natarajapuram, Komarapalayam",
  reachBus:
    "All Salem-Erode / Salem-Coimbatore route buses via NH-544 stop at both Sankagiri and Komarapalayam — services throughout the day",
  reachRail: "Sankaridurg railway station serves Sankagiri; Erode Junction (22 km from campus) is the major junction",
  faqSubtitle: "Nursing College near Sankagiri — Your Questions Answered",
  faqs: [
    {
      q: "Which is the nearest nursing college to Sankagiri?",
      a: "Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing and Research) at Komarapalayam is one of the nearest INC-approved nursing colleges to Sankagiri — about 17 km straight along NH-544. It is NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "How far is JKKN Nursing from Sankagiri?",
      a: "JKKN College of Nursing and Research is approximately 17 km from Sankagiri — about 20-30 minutes along NH-544 with no route changes. All Salem-Erode highway buses stop at both towns.",
    },
    {
      q: "Can Sankagiri learners commute daily to JKKN Nursing?",
      a: "Yes. With a straight 30-minute NH-544 connection and frequent highway buses, daily commuting is practical for Sankagiri learners. Separate, secure hostels for boys and girls are also available on campus.",
    },
    {
      q: "What nursing courses are available near Sankagiri?",
      a: "JKKN College of Nursing and Research near Sankagiri offers B.Sc Nursing (4 years, 60 seats), M.Sc Nursing (2 years, 25 seats), and Post Basic B.Sc Nursing (2 years, 50 seats). All programmes are INC approved and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "Is NEET required for B.Sc Nursing?",
      a: "No, NEET is not required for B.Sc Nursing in Tamil Nadu. Admission is merit-based on the 10+2 marks in Physics, Chemistry and Biology, normalised to a base of 200 by the Tamil Nadu Selection Committee. Contact the admission office for the current year's dates.",
    },
    {
      q: "Are there nursing colleges in Salem district near Sankagiri?",
      a: "Sankagiri learners have options in Salem city, but JKKN College of Nursing and Research at Komarapalayam is often closer and easier to reach —17 km straight down NH-544, against 17 km into Salem city traffic. It is INC approved with hospital-based clinical training.",
    },
    {
      q: "Can I get a nursing job abroad after studying here?",
      a: "Yes, graduates from Sresakthimayeil Institute Of Nursing And Research are eligible for international nursing careers. With an INC-approved B.Sc Nursing degree, you can appear for licensing exams like HAAD/DHA (Gulf), NMC-CBT (UK), NCLEX (US), or AHPRA (Australia).",
    },
    {
      q: "What is the fee structure for B.Sc Nursing near Sankagiri?",
      a: "Fee structures for B.Sc Nursing at JKKN College of Nursing and Research follow Tamil Nadu government and university norms. For the latest fee details for the 2026-27 academic year, contact the admission office at +91 93458 55001 or visit https://nursing.sresakthimayeil.jkkn.ac.in/",
    },
  ],
  cities: [
    { name: "Komarapalayam", distance: "5 km", href: "/komarapalayam" },
    { name: "Salem", distance: "57 km", href: "/salem" },
    { name: "Tiruchengode", distance: "26 km", href: "/tiruchengode" },
    { name: "Erode", distance: "22 km", href: "/erode" },
  ],
  successCityText:
    "Share your experience and inspire future nursing learners from Sankagiri",
  areaServedSameAs: "https://en.wikipedia.org/wiki/Sankagiri",
};

export const metadata: Metadata = {
  title: "Nursing College near Sankagiri | B.Sc Nursing — JKKN",
  description:
    "Nursing college near Sankagiri: JKKN College of Nursing and Research in Komarapalayam is 17 km straight down NH-544 — about 20-30 minutes. INC approved, NAAC accredited. B.Sc, M.Sc, Post Basic B.Sc Nursing. Admissions 2026-27 open.",
  keywords:
    "nursing college near sankagiri, nursing college in sankagiri, bsc nursing sankagiri, nursing colleges in salem district, jkkn nursing sankagiri",
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/sankagiri",
  },
  openGraph: {
    title: "Nursing College near Sankagiri | B.Sc Nursing — JKKN",
    description:
      "JKKN College of Nursing and Research in Komarapalayam is 17 km from Sankagiri straight along NH-544. INC approved, NAAC accredited. Admissions 2026-27 open.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/sankagiri",
    siteName: "JKKN College of Nursing and Research",
    type: "website",
  },
};

export default function SankagiriPage() {
  return <CityLandingPage config={config} />;
}
