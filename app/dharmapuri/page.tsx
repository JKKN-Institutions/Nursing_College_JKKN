import type { Metadata } from "next";
import CityLandingPage, { CityPageConfig } from "@/components/CityLandingPage";

const config: CityPageConfig = {
  slug: "dharmapuri",
  cityName: "Dharmapuri",
  heroTitlePrefix: "Nursing College near",
  heroDescription:
    "Looking for a nursing college near Dharmapuri? Sresakthimayeil Institute of Nursing and Research (JKKN College of Nursing) in Komarapalayam is around 100 km away via Salem. INC-approved B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc programmes with hospital-based training and secure hostels for outstation learners.",
  heroStats: [
    { value: "90%+", label: "PLACEMENTS" },
    { value: "6-8", label: "LPA HIGHEST" },
    { value: "~100km", label: "FROM DHARMAPURI" },
    { value: "3", label: "PROGRAMMES" },
  ],
  distanceKm: "~100",
  distanceHeading: "From Dharmapuri to JKKN Nursing",
  distanceSub:
    "Around 2-2.5 hours by road via Salem and NH-544; the campus is at Natarajapuram, Komarapalayam",
  landscapeHeading: "Nursing Education for Dharmapuri Learners",
  landscapeParagraphs: [
    "Dharmapuri is a largely agricultural district in north-western Tamil Nadu, famous for its mango cultivation and for Hogenakkal Falls on the Cauvery. Compared to Salem or Coimbatore, the district has fewer professional healthcare institutions, so nursing aspirants from Dharmapuri, Palacode, Pennagaram and Harur often study outside the district.",
    "JKKN College of Nursing (Sresakthimayeil Institute of Nursing and Research) at Komarapalayam is a practical choice for that journey — around 100 km via Salem, roughly 2-2.5 hours by road. Every Salem-bound bus from Dharmapuri connects onward to the NH-544 corridor, where the campus sits right on the highway.",
    "The institute is approved by the Indian Nursing Council (INC), accredited by NAAC, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Clinical training happens at the JKKN group's multi-specialty teaching hospital, giving learners direct patient-care exposure from the first year onwards.",
    "Dharmapuri learners typically stay in the secure on-campus hostels — separate blocks for boys and girls with mess facilities and warden supervision — with the Salem route making weekend and holiday travel home straightforward. With 90%+ placement support and international nursing pathways (UK NHS, Gulf HAAD/DHA, Australia AHPRA), learners from Dharmapuri district can build a global nursing career from a campus that stays within easy reach of home.",
  ],
  whyHeading: "Why Dharmapuri Learners Choose JKKN",
  whyIntro:
    "JKKN College of Nursing is around 100 km from Dharmapuri via Salem — a well-connected hostel option for a district with limited nursing colleges of its own. INC approved, NAAC accredited, hospital-attached, with secure separate hostels.",
  commuteDesc:
    "Around 100 km from Dharmapuri via Salem (~2-2.5 hours). Hostel stay with weekend travel home via the Salem route is the popular choice.",
  programmesHeading: "Nursing Courses Available for Dharmapuri Learners",
  reachHeading: "How to Reach from Dharmapuri",
  reachRouteSummary: "~100 km • about 2-2.5 hours",
  reachRoute:
    "Dharmapuri → Salem via NH-44, then Salem → Komarapalayam via NH-544; the campus is on the highway at Natarajapuram",
  reachBus:
    "Frequent buses run from Dharmapuri to Salem; from Salem, all Erode/Coimbatore-bound NH-544 buses stop at Komarapalayam",
  reachRail:
    "Dharmapuri and Salem Junction are on the rail route; Erode Junction (~35 km from campus) is the major junction near campus",
  faqSubtitle: "Nursing College near Dharmapuri — Your Questions Answered",
  faqs: [
    {
      q: "Which nursing college is accessible from Dharmapuri?",
      a: "Sresakthimayeil Institute of Nursing and Research (JKKN College of Nursing) at Komarapalayam is an accessible INC-approved nursing college for Dharmapuri learners — around 100 km via Salem. It is NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "How far is JKKN Nursing from Dharmapuri?",
      a: "JKKN College of Nursing is roughly 100 km from Dharmapuri — about 2-2.5 hours by road. Take any Salem-bound bus from Dharmapuri, then an NH-544 bus towards Erode; the campus is on the highway at Komarapalayam.",
    },
    {
      q: "Are there nursing colleges in Dharmapuri district?",
      a: "Dharmapuri district has limited INC-approved nursing college options, so many aspirants study in the Salem-Erode belt. JKKN College of Nursing at Komarapalayam is a well-connected choice around 100 km away via Salem, with secure hostels for outstation learners.",
    },
    {
      q: "Does JKKN Nursing provide hostel for Dharmapuri learners?",
      a: "Yes. Separate, secure hostels for boys and girls with mess facilities and warden supervision are available on campus. The Salem route makes weekend and holiday travel between campus and Dharmapuri straightforward.",
    },
    {
      q: "What nursing courses are available for Dharmapuri learners?",
      a: "JKKN College of Nursing offers B.Sc Nursing (4 years, 100 seats), M.Sc Nursing (2 years, 30 seats), and Post Basic B.Sc Nursing (2 years, 50 seats). All programmes are INC approved and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "Is NEET required for B.Sc Nursing?",
      a: "B.Sc Nursing admissions in Tamil Nadu are typically through NEET counselling. Contact the admission office for the latest admission requirements for the current academic year.",
    },
    {
      q: "Can I get a nursing job abroad after studying here?",
      a: "Yes, graduates from Sresakthimayeil Institute of Nursing and Research are eligible for international nursing careers. With an INC-approved B.Sc Nursing degree, you can appear for licensing exams like HAAD/DHA (Gulf), NMC-CBT (UK), NCLEX (US), or AHPRA (Australia).",
    },
    {
      q: "What is the fee structure for B.Sc Nursing for Dharmapuri learners?",
      a: "Fee structures for B.Sc Nursing at JKKN College of Nursing follow Tamil Nadu government and university norms. For the latest fee details for the 2026-27 academic year, contact the admission office at +91 93458 55001 or visit https://nursing.sresakthimayeil.jkkn.ac.in/",
    },
  ],
  cities: [
    { name: "Salem", distance: "45-55 km", href: "/salem" },
    { name: "Sankagiri", distance: "70-80 km", href: "/sankagiri" },
    { name: "Komarapalayam", distance: "~100 km", href: "/komarapalayam" },
    { name: "Krishnagiri", distance: "45-55 km", href: "/krishnagiri" },
  ],
  successCityText:
    "Share your experience and inspire future nursing learners from Dharmapuri",
  areaServedSameAs: "https://en.wikipedia.org/wiki/Dharmapuri",
};

export const metadata: Metadata = {
  title: "Nursing College near Dharmapuri | B.Sc Nursing — JKKN",
  description:
    "JKKN College of Nursing at Komarapalayam is about 100 km from Dharmapuri via Salem. INC approved, NAAC accredited. B.Sc, M.Sc, Post Basic.",
  keywords:
    "nursing college near dharmapuri, nursing colleges in dharmapuri, bsc nursing dharmapuri, nursing college dharmapuri district, jkkn nursing dharmapuri",
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/dharmapuri",
  },
  openGraph: {
    title: "Nursing College near Dharmapuri | B.Sc Nursing — JKKN",
    description:
      "JKKN College of Nursing in Komarapalayam is ~100 km from Dharmapuri via Salem. INC approved, NAAC accredited, secure hostels. Admissions 2026-27 open.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/dharmapuri",
    siteName: "JKKN College of Nursing",
    type: "website",
  },
};

export default function DharmapuriPage() {
  return <CityLandingPage config={config} />;
}
