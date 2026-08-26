import type { Metadata } from "next";
import CityLandingPage, { CityPageConfig } from "@/components/CityLandingPage";

const config: CityPageConfig = {
  slug: "attur",
  cityName: "Attur",
  heroTitlePrefix: "Nursing College near",
  heroDescription:
    "Searching for a nursing college near Attur? Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) in Komarapalayam is about 90-100 km away via Salem and NH-544. INC-approved B.Sc Nursing, M.Sc Nursing, and Post Basic B.Sc programmes with hospital-based training and secure hostels.",
  heroStats: [
    { value: "95%", label: "PLACEMENTS" },
    { value: "6-8", label: "LPA HIGHEST" },
    { value: "~95km", label: "FROM ATTUR" },
    { value: "3", label: "PROGRAMMES" },
  ],
  distanceKm: "~95",
  distanceHeading: "From Attur to JKKN Nursing",
  distanceSub:
    "Around 2.5 hours by road via Salem and the NH-544 Salem-Coimbatore highway; the campus is at Natarajapuram, Komarapalayam",
  landscapeHeading: "Nursing Education for Attur Learners",
  landscapeParagraphs: [
    "Attur is a busy agricultural market town in eastern Salem district, on the Salem-Chennai road, known for its sago (tapioca) processing belt and weekly trade. Learners from Attur and surrounding blocks usually look towards Salem city for professional education — but seats and hostel options there fill up fast every admission season.",
    "For nursing aspirants from Attur, JKKN College of Nursing (Sresakthimayeil Institute Of Nursing And Research) at Komarapalayam is a practical hostel-based option — about 90-100 km away, roughly 2.5 hours via Salem and NH-544. The distance makes it a residential-campus choice, with trips home comfortably possible on longer weekends and holidays.",
    "The institute is approved by the Indian Nursing Council (INC), accredited by NAAC, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Clinical training takes place at the JKKN group's multi-specialty teaching hospital, so learners build real patient-care skills from the first year of the programme.",
    "Most Attur learners choose the secure on-campus hostels — separate blocks for boys and girls with mess facilities and warden supervision. With 95% placement rate and international nursing pathways (UK NHS, Gulf HAAD/DHA, Australia AHPRA), Attur learners can build a global nursing career while staying rooted in the Salem belt.",
  ],
  whyHeading: "Why Attur Learners Choose JKKN",
  whyIntro:
    "JKKN College of Nursing is about 90-100 km from Attur — a hostel-first choice with straightforward travel home via Salem. INC approved, NAAC accredited, hospital-attached, with secure separate hostels.",
  commuteDesc:
    "About 90-100 km from Attur (~2.5 hours) via Salem and NH-544. Hostel stay with trips home on holidays is the popular choice.",
  programmesHeading: "Nursing Courses Available for Attur Learners",
  reachHeading: "How to Reach from Attur",
  reachRouteSummary: "90-100 km • about 2.5 hours",
  reachRoute:
    "Attur → Salem → Sankagiri → Komarapalayam via NH-544 (Salem-Coimbatore highway)",
  reachBus:
    "Frequent buses run from Attur to Salem; from Salem's new bus stand take any Erode/Bhavani-side bus along NH-544 and get down at Komarapalayam",
  reachRail:
    "Salem Junction is the major railhead (~55 km from Attur); campus is ~45 km from Salem Junction by road",
  faqSubtitle: "Nursing College near Attur — Your Questions Answered",
  faqs: [
    {
      q: "Which nursing college is accessible from Attur?",
      a: "Sresakthimayeil Institute Of Nursing And Research (JKKN College of Nursing) at Komarapalayam is an accessible INC-approved nursing college for Attur learners — about 90-100 km away via Salem and NH-544. It is NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "How far is JKKN Nursing from Attur?",
      a: "JKKN College of Nursing is approximately 90-100 km from Attur — about 2.5 hours by road via Salem and the NH-544 Salem-Coimbatore highway. Salem Junction is the nearest major railhead, about 45 km from campus.",
    },
    {
      q: "Does JKKN Nursing provide hostel for Attur learners?",
      a: "Yes. Separate, secure hostels for boys and girls with mess facilities and warden supervision are available on campus. Since Attur is about 2.5 hours away, most Attur learners stay in the hostel and travel home on longer weekends and holidays.",
    },
    {
      q: "What nursing courses are available for Attur learners?",
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
      q: "What is the fee structure for B.Sc Nursing for Attur learners?",
      a: "Fee structures for B.Sc Nursing at JKKN College of Nursing follow Tamil Nadu government and university norms. For the latest fee details for the 2026-27 academic year, contact the admission office at +91 93458 55001 or visit https://nursing.sresakthimayeil.jkkn.ac.in/",
    },
    {
      q: "How can I apply for admission at JKKN Nursing from Attur?",
      a: "You can apply online through the official website at https://nursing.sresakthimayeil.jkkn.ac.in/ or call the admission office at +91 93458 55001. Campus visits are welcome any working day. Admissions for 2026-27 are currently open.",
    },
  ],
  cities: [
    { name: "Salem", distance: "50-60 km", href: "/salem" },
    { name: "Rasipuram", distance: "45-55 km", href: "/rasipuram" },
    { name: "Namakkal", distance: "60-70 km", href: "/namakkal" },
    { name: "Komarapalayam", distance: "90-100 km", href: "/komarapalayam" },
  ],
  successCityText:
    "Share your experience and inspire future nursing learners from Attur",
  areaServedSameAs: "https://en.wikipedia.org/wiki/Attur,_Salem",
};

export const metadata: Metadata = {
  title: "Nursing College near Attur | B.Sc Nursing — JKKN",
  description:
    "Nursing college near Attur: JKKN College of Nursing in Komarapalayam is ~90-100 km via Salem and NH-544. INC approved, NAAC accredited. B.Sc, M.Sc, Post Basic B.Sc Nursing with secure hostels. Admissions 2026-27 open.",
  keywords:
    "nursing college near attur, nursing colleges attur salem, bsc nursing attur, nursing college salem district, jkkn nursing attur",
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/attur",
  },
  openGraph: {
    title: "Nursing College near Attur | B.Sc Nursing — JKKN",
    description:
      "JKKN College of Nursing in Komarapalayam is ~90-100 km from Attur via Salem. INC approved, NAAC accredited, secure hostels. Admissions 2026-27 open.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/attur",
    siteName: "JKKN College of Nursing",
    type: "website",
  },
};

export default function AtturPage() {
  return <CityLandingPage config={config} />;
}
