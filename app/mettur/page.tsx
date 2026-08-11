import type { Metadata } from "next";
import CityLandingPage, { CityPageConfig } from "@/components/CityLandingPage";

const config: CityPageConfig = {
  slug: "mettur",
  cityName: "Mettur",
  heroTitlePrefix: "Nursing College near",
  heroDescription:
    "Searching for a nursing college near Mettur? Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) in Komarapalayam is about 40-50 km away via Bhavani along the Cauvery. INC-approved B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc programmes with hospital-based training and secure hostels.",
  heroStats: [
    { value: "90%+", label: "PLACEMENTS" },
    { value: "6-8", label: "LPA HIGHEST" },
    { value: "~45km", label: "FROM METTUR" },
    { value: "3", label: "PROGRAMMES" },
  ],
  distanceKm: "~45",
  distanceHeading: "From Mettur to JKKN Nursing",
  distanceSub:
    "Around 1 to 1.5 hours by road via the Mettur-Bhavani route along the Cauvery; the campus is on NH-544 at Natarajapuram, Komarapalayam",
  landscapeHeading: "Nursing Education for Mettur Learners",
  landscapeParagraphs: [
    "Mettur is best known for the Mettur Dam (Stanley Reservoir) on the Cauvery, its hydro and thermal power stations, and its chemical industrial belt. Families here value stable, professional careers — and healthcare is one of the strongest options for learners from Mettur, Kolathur and the surrounding blocks.",
    "For nursing aspirants from Mettur, JKKN College of Nursing (Sresakthimayeil Institute Of Nursing And Research) at Komarapalayam is one of the closest INC-approved options — about 40-50 km away, roughly 1 to 1.5 hours via Bhavani along the river route. Learners can choose the hostel or, from nearby blocks, even consider day travel.",
    "The institute is approved by the Indian Nursing Council (INC), accredited by NAAC, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Clinical training takes place at the JKKN group's multi-specialty teaching hospital, so learners build real patient-care skills from the first year of the programme.",
    "Many Mettur learners choose the secure on-campus hostels — separate blocks for boys and girls with mess facilities and warden supervision — and go home on weekends, barely an hour and a half away. With 90%+ placement support and international nursing pathways (UK NHS, Gulf HAAD/DHA, Australia AHPRA), a global nursing career starts close to home.",
  ],
  whyHeading: "Why Mettur Learners Choose JKKN",
  whyIntro:
    "JKKN College of Nursing is about 40-50 km from Mettur — close enough for easy weekend trips home, far enough for a focused residential campus life. INC approved, NAAC accredited, hospital-attached, with secure separate hostels.",
  commuteDesc:
    "About 40-50 km from Mettur (~1-1.5 hours) via Bhavani. Hostel stay with weekend trips home is the popular choice; day travel is possible from nearer blocks.",
  programmesHeading: "Nursing Courses Available for Mettur Learners",
  reachHeading: "How to Reach from Mettur",
  reachRouteSummary: "40-50 km • about 1-1.5 hours",
  reachRoute:
    "Mettur → Bhavani (river-side road) → Komarapalayam; the campus is on NH-544 (Salem-Coimbatore highway)",
  reachBus:
    "Buses run from Mettur towards Bhavani and Erode; get down at Bhavani or Komarapalayam — the campus is on NH-544",
  reachRail:
    "Erode Junction is the nearest major railhead (~20 km from campus); Salem Junction also connects Mettur side",
  faqSubtitle: "Nursing College near Mettur — Your Questions Answered",
  faqs: [
    {
      q: "Which nursing college is close to Mettur?",
      a: "Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) at Komarapalayam is one of the closest INC-approved nursing colleges for Mettur learners — about 40-50 km away via Bhavani. It is NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "How far is JKKN Nursing from Mettur?",
      a: "JKKN College of Nursing is approximately 40-50 km from Mettur — about 1 to 1.5 hours by road via the Mettur-Bhavani route along the Cauvery. Erode Junction, about 20 km from campus, is the nearest major railhead.",
    },
    {
      q: "Does JKKN Nursing provide hostel for Mettur learners?",
      a: "Yes. Separate, secure hostels for boys and girls with mess facilities and warden supervision are available on campus. With Mettur just 1-1.5 hours away, learners can easily travel home on weekends.",
    },
    {
      q: "What nursing courses are available for Mettur learners?",
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
      q: "What is the fee structure for B.Sc Nursing for Mettur learners?",
      a: "Fee structures for B.Sc Nursing at JKKN College of Nursing follow Tamil Nadu government and university norms. For the latest fee details for the 2026-27 academic year, contact the admission office at +91 93458 55001 or visit https://nursing.sresakthimayeil.jkkn.ac.in/",
    },
    {
      q: "How can I apply for admission at JKKN Nursing from Mettur?",
      a: "You can apply online through the official website at https://nursing.sresakthimayeil.jkkn.ac.in/ or call the admission office at +91 93458 55001. Campus visits are welcome any working day. Admissions for 2026-27 are currently open.",
    },
  ],
  cities: [
    { name: "Bhavani", distance: "35-45 km", href: "/bhavani" },
    { name: "Edappadi", distance: "25-35 km", href: "/edappadi" },
    { name: "Salem", distance: "50-60 km", href: "/salem" },
    { name: "Komarapalayam", distance: "40-50 km", href: "/komarapalayam" },
  ],
  successCityText:
    "Share your experience and inspire future nursing learners from Mettur",
  areaServedSameAs: "https://en.wikipedia.org/wiki/Mettur",
};

export const metadata: Metadata = {
  title: "Nursing College near Mettur | B.Sc Nursing — JKKN",
  description:
    "Nursing college near Mettur: JKKN College of Nursing in Komarapalayam is ~40-50 km via Bhavani. INC approved, NAAC accredited. B.Sc, M.Sc, Post Basic B.Sc Nursing with secure hostels. Admissions 2026-27 open.",
  keywords:
    "nursing college near mettur, nursing colleges mettur, bsc nursing mettur, nursing college mettur dam, jkkn nursing mettur",
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/mettur",
  },
  openGraph: {
    title: "Nursing College near Mettur | B.Sc Nursing — JKKN",
    description:
      "JKKN College of Nursing in Komarapalayam is ~40-50 km from Mettur via Bhavani. INC approved, NAAC accredited, secure hostels. Admissions 2026-27 open.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/mettur",
    siteName: "JKKN College of Nursing",
    type: "website",
  },
};

export default function MetturPage() {
  return <CityLandingPage config={config} />;
}
