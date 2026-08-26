import type { Metadata } from "next";
import CityLandingPage, { CityPageConfig } from "@/components/CityLandingPage";

const config: CityPageConfig = {
  slug: "gobichettipalayam",
  cityName: "Gobichettipalayam",
  heroTitlePrefix: "Nursing College near",
  heroDescription:
    "Searching for a nursing college near Gobichettipalayam? Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) in Komarapalayam is about 45-50 km away via Bhavani — an INC-approved institute offering B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc programmes with hospital-based training and hostel facilities.",
  heroStats: [
    { value: "95%", label: "PLACEMENTS" },
    { value: "6-8", label: "LPA HIGHEST" },
    { value: "~45km", label: "FROM GOBI" },
    { value: "3", label: "PROGRAMMES" },
  ],
  distanceKm: "45",
  distanceHeading: "From Gobichettipalayam to JKKN Nursing",
  distanceSub:
    "About 1 hour via the Gobi-Bhavani road; cross to Komarapalayam and the campus is on NH-544 at Natarajapuram",
  landscapeHeading: "Nursing Education for Gobichettipalayam Learners",
  landscapeParagraphs: [
    "Gobichettipalayam (Gobi) is a major town in the western part of Erode district, known for its agriculture, coconut and turmeric trade, and as a scenic location frequently featured in Tamil cinema. Learners from Gobi taluk looking for professional healthcare education usually have to consider colleges in Erode, Coimbatore or beyond.",
    "JKKN College of Nursing (Sresakthimayeil Institute Of Nursing And Research) in Komarapalayam offers Gobi learners an accessible alternative — about 45-50 km via the Gobi-Bhavani road, roughly an hour's journey. For a hostel-based nursing education, that proximity means easy weekend trips home, a real advantage over colleges in distant cities.",
    "The institute is approved by the Indian Nursing Council (INC), accredited by NAAC, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Clinical training happens at the JKKN group's multi-specialty teaching hospital, so learners build real patient-care skills from the first year onwards.",
    "Most Gobichettipalayam learners choose the secure on-campus hostels (separate blocks for boys and girls with mess facilities), while some commute via Bhavani. With 95% placement rate and international nursing pathways (UK NHS, Gulf HAAD/DHA, Australia AHPRA), Gobi learners get a global career launchpad within an hour of home.",
  ],
  whyHeading: "Why Gobichettipalayam Learners Choose JKKN",
  whyIntro:
    "JKKN College of Nursing is about 45-50 km from Gobichettipalayam via Bhavani — close enough for weekend trips home, far enough to enjoy full campus life. INC approved, NAAC accredited, hospital-attached, with secure hostels.",
  commuteDesc:
    "About 45-50 km from Gobi via the Bhavani road (~1 hour). Hostel stay with easy weekend travel home is the popular choice.",
  programmesHeading: "Nursing Courses Available for Gobichettipalayam Learners",
  reachHeading: "How to Reach from Gobichettipalayam",
  reachRouteSummary: "45-50 km • about 1 hour",
  reachRoute:
    "Gobichettipalayam → Bhavani → Komarapalayam; the campus is on NH-544 at Natarajapuram",
  reachBus:
    "Regular buses run from Gobichettipalayam bus stand towards Bhavani and Komarapalayam; change at Bhavani if there is no direct service",
  reachRail: "Erode Junction (~35 km from campus)",
  faqSubtitle: "Nursing College near Gobichettipalayam — Your Questions Answered",
  faqs: [
    {
      q: "Which is the nearest nursing college to Gobichettipalayam?",
      a: "Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) in Komarapalayam is one of the most accessible INC-approved nursing colleges for Gobichettipalayam learners — about 45-50 km via the Gobi-Bhavani road. It is NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "How far is JKKN Nursing from Gobichettipalayam?",
      a: "JKKN College of Nursing is approximately 45-50 km from Gobichettipalayam — about an hour by road via Bhavani. Buses run regularly from Gobi bus stand towards Bhavani and Komarapalayam.",
    },
    {
      q: "Does JKKN Nursing provide hostel for Gobichettipalayam learners?",
      a: "Yes. Separate, secure hostels for boys and girls with mess facilities and warden supervision are available on campus. Since Gobi is only about an hour away, learners can easily travel home on weekends.",
    },
    {
      q: "What nursing courses are available near Gobichettipalayam?",
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
      q: "What is the fee structure for B.Sc Nursing near Gobichettipalayam?",
      a: "Fee structures for B.Sc Nursing at JKKN College of Nursing follow Tamil Nadu government and university norms. For the latest fee details for the 2026-27 academic year, contact the admission office at +91 93458 55001 or visit https://nursing.sresakthimayeil.jkkn.ac.in/",
    },
    {
      q: "How can I apply for admission at JKKN Nursing?",
      a: "You can apply online through the official website at https://nursing.sresakthimayeil.jkkn.ac.in/ or visit the campus directly. Admissions for 2026-27 are currently open. Call +91 93458 55001 for guidance.",
    },
  ],
  cities: [
    { name: "Bhavani", distance: "35-40 km", href: "/bhavani" },
    { name: "Erode", distance: "30-40 km", href: "/erode" },
    { name: "Komarapalayam", distance: "45-50 km", href: "/komarapalayam" },
    { name: "Tiruppur", distance: "50-60 km", href: "/tiruppur" },
  ],
  successCityText:
    "Share your experience and inspire future nursing learners from Gobichettipalayam",
  areaServedSameAs: "https://en.wikipedia.org/wiki/Gobichettipalayam",
};

export const metadata: Metadata = {
  title: "Nursing College near Gobichettipalayam | B.Sc Nursing — JKKN",
  description:
    "Nursing college near Gobichettipalayam: JKKN College of Nursing in Komarapalayam is ~45-50 km via Bhavani. INC approved, NAAC accredited. B.Sc, M.Sc, Post Basic B.Sc Nursing with hostel. Admissions 2026-27 open.",
  keywords:
    "nursing college near gobichettipalayam, nursing college in gobichettipalayam, bsc nursing gobi, nursing colleges in erode district, jkkn nursing gobichettipalayam",
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/gobichettipalayam",
  },
  openGraph: {
    title: "Nursing College near Gobichettipalayam | B.Sc Nursing — JKKN",
    description:
      "JKKN College of Nursing in Komarapalayam is ~45-50 km from Gobichettipalayam via Bhavani. INC approved, NAAC accredited, hostel available.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/gobichettipalayam",
    siteName: "JKKN College of Nursing",
    type: "website",
  },
};

export default function GobichettipalayamPage() {
  return <CityLandingPage config={config} />;
}
