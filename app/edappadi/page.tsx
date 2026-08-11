import type { Metadata } from "next";
import CityLandingPage, { CityPageConfig } from "@/components/CityLandingPage";

const config: CityPageConfig = {
  slug: "edappadi",
  cityName: "Edappadi",
  heroTitlePrefix: "Nursing College near",
  heroDescription:
    "Searching for a nursing college near Edappadi? Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) in Komarapalayam is about 25-35 km away via Sankagiri. INC-approved B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc programmes with hospital-based training, day-travel-friendly distance, and secure hostels.",
  heroStats: [
    { value: "90%+", label: "PLACEMENTS" },
    { value: "6-8", label: "LPA HIGHEST" },
    { value: "~30km", label: "FROM EDAPPADI" },
    { value: "3", label: "PROGRAMMES" },
  ],
  distanceKm: "~30",
  distanceHeading: "From Edappadi to JKKN Nursing",
  distanceSub:
    "Around 45 minutes to 1 hour by road via Sankagiri and NH-544; the campus is at Natarajapuram, Komarapalayam",
  landscapeHeading: "Nursing Education for Edappadi Learners",
  landscapeParagraphs: [
    "Edappadi is a well-known weaving town in western Salem district, with a strong powerloom and handloom tradition and busy agricultural trade. Learners from Edappadi, Poolampatti and nearby blocks often travel to Salem or Erode for professional education — but a closer option sits right on NH-544.",
    "For nursing aspirants from Edappadi, JKKN College of Nursing (Sresakthimayeil Institute Of Nursing And Research) at Komarapalayam is among the closest INC-approved nursing colleges — about 25-35 km away via Sankagiri, roughly 45 minutes to an hour. That makes both day travel and hostel stay genuinely practical choices.",
    "The institute is approved by the Indian Nursing Council (INC), accredited by NAAC, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Clinical training takes place at the JKKN group's multi-specialty teaching hospital, so learners build real patient-care skills from the first year of the programme.",
    "Edappadi learners can commute daily via Sankagiri or choose the secure on-campus hostels — separate blocks for boys and girls with mess facilities and warden supervision. With 90%+ placement support and international nursing pathways (UK NHS, Gulf HAAD/DHA, Australia AHPRA), a global nursing career starts under an hour from home.",
  ],
  whyHeading: "Why Edappadi Learners Choose JKKN",
  whyIntro:
    "JKKN College of Nursing is about 25-35 km from Edappadi — close enough for daily commute, with secure hostels for those who prefer campus stay. INC approved, NAAC accredited, hospital-attached.",
  commuteDesc:
    "About 25-35 km from Edappadi (~45 min-1 hour) via Sankagiri. Day travel and hostel stay are both practical options.",
  programmesHeading: "Nursing Courses Available for Edappadi Learners",
  reachHeading: "How to Reach from Edappadi",
  reachRouteSummary: "25-35 km • about 45 min-1 hour",
  reachRoute:
    "Edappadi → Sankagiri → NH-544 → Komarapalayam (Salem-Coimbatore highway)",
  reachBus:
    "Buses run from Edappadi to Sankagiri; from Sankagiri take any Erode/Bhavani-side bus along NH-544 and get down at Komarapalayam",
  reachRail:
    "Erode Junction (~35 km) and Salem Junction (~40 km) are the nearest major railheads; campus is ~20 km from Erode Junction",
  faqSubtitle: "Nursing College near Edappadi — Your Questions Answered",
  faqs: [
    {
      q: "Which nursing college is close to Edappadi?",
      a: "Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) at Komarapalayam is among the closest INC-approved nursing colleges for Edappadi learners — about 25-35 km away via Sankagiri. It is NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "How far is JKKN Nursing from Edappadi?",
      a: "JKKN College of Nursing is approximately 25-35 km from Edappadi — about 45 minutes to 1 hour by road via Sankagiri and NH-544. The campus is at Natarajapuram, Komarapalayam.",
    },
    {
      q: "Can Edappadi learners commute daily to JKKN Nursing?",
      a: "Yes. With the campus about 45 minutes to an hour away via Sankagiri, daily travel is practical. Learners who prefer campus life can choose the separate, secure hostels for boys and girls with mess facilities and warden supervision.",
    },
    {
      q: "What nursing courses are available for Edappadi learners?",
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
      q: "What is the fee structure for B.Sc Nursing for Edappadi learners?",
      a: "Fee structures for B.Sc Nursing at JKKN College of Nursing follow Tamil Nadu government and university norms. For the latest fee details for the 2026-27 academic year, contact the admission office at +91 93458 55001 or visit https://nursing.sresakthimayeil.jkkn.ac.in/",
    },
    {
      q: "How can I apply for admission at JKKN Nursing from Edappadi?",
      a: "You can apply online through the official website at https://nursing.sresakthimayeil.jkkn.ac.in/ or call the admission office at +91 93458 55001. Campus visits are welcome any working day. Admissions for 2026-27 are currently open.",
    },
  ],
  cities: [
    { name: "Sankagiri", distance: "10-20 km", href: "/sankagiri" },
    { name: "Bhavani", distance: "25-35 km", href: "/bhavani" },
    { name: "Mettur", distance: "25-35 km", href: "/mettur" },
    { name: "Komarapalayam", distance: "25-35 km", href: "/komarapalayam" },
  ],
  successCityText:
    "Share your experience and inspire future nursing learners from Edappadi",
  areaServedSameAs: "https://en.wikipedia.org/wiki/Edappadi",
};

export const metadata: Metadata = {
  title: "Nursing College near Edappadi | B.Sc Nursing — JKKN",
  description:
    "Nursing college near Edappadi: JKKN College of Nursing in Komarapalayam is ~25-35 km via Sankagiri. INC approved, NAAC accredited. B.Sc, M.Sc, Post Basic B.Sc Nursing — day travel or secure hostels. Admissions 2026-27 open.",
  keywords:
    "nursing college near edappadi, nursing colleges edappadi, bsc nursing edappadi, nursing college salem district, jkkn nursing edappadi",
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/edappadi",
  },
  openGraph: {
    title: "Nursing College near Edappadi | B.Sc Nursing — JKKN",
    description:
      "JKKN College of Nursing in Komarapalayam is ~25-35 km from Edappadi via Sankagiri. INC approved, NAAC accredited, day travel or hostels. Admissions 2026-27 open.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/edappadi",
    siteName: "JKKN College of Nursing",
    type: "website",
  },
};

export default function EdappadiPage() {
  return <CityLandingPage config={config} />;
}
