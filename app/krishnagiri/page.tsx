import type { Metadata } from "next";
import CityLandingPage, { CityPageConfig } from "@/components/CityLandingPage";

const config: CityPageConfig = {
  slug: "krishnagiri",
  cityName: "Krishnagiri",
  heroTitlePrefix: "Nursing College near",
  heroDescription:
    "Searching for a nursing college near Krishnagiri? Sresakthimayeil Institute of Nursing and Research (JKKN College of Nursing) in Komarapalayam is around 150 km away via Salem on the NH-44/NH-544 corridor — a Tamil Nadu option under The Tamil Nadu Dr. M.G.R. Medical University, with INC-approved programmes and secure hostels.",
  heroStats: [
    { value: "90%+", label: "PLACEMENTS" },
    { value: "6-8", label: "LPA HIGHEST" },
    { value: "~150km", label: "FROM KRISHNAGIRI" },
    { value: "3", label: "PROGRAMMES" },
  ],
  distanceKm: "~150",
  distanceHeading: "From Krishnagiri to JKKN Nursing",
  distanceSub:
    "Around 3 hours by road — NH-44 to Salem, then NH-544 towards Erode; the campus is at Natarajapuram, Komarapalayam",
  landscapeHeading: "Nursing Education for Krishnagiri Learners",
  landscapeParagraphs: [
    "Krishnagiri district, in the north-western corner of Tamil Nadu, is famous as the state's mango capital and for the fast-growing Hosur industrial belt. Because the district borders Karnataka, many learners from Krishnagiri, Hosur and Denkanikottai look towards Bangalore for higher education.",
    "For nursing aspirants, staying within Tamil Nadu has real advantages — Tamil Nadu state counselling, affiliation under The Tamil Nadu Dr. M.G.R. Medical University, and clinical postings in Tamil-speaking hospitals. JKKN College of Nursing (Sresakthimayeil Institute of Nursing and Research) at Komarapalayam offers exactly that, around 150 km from Krishnagiri along the well-served NH-44/NH-544 corridor via Salem.",
    "The institute is approved by the Indian Nursing Council (INC), accredited by NAAC, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. Clinical training takes place at the JKKN group's multi-specialty teaching hospital, so learners work with real patients from the first year of the programme.",
    "Krishnagiri learners stay in the secure on-campus hostels — separate blocks for boys and girls with mess facilities and warden supervision — with direct Salem-route buses making trips home easy during holidays. With 90%+ placement support and international nursing pathways (UK NHS, Gulf HAAD/DHA, Australia AHPRA), learners from Krishnagiri district can build a global nursing career while studying in their home state.",
  ],
  whyHeading: "Why Krishnagiri Learners Choose JKKN",
  whyIntro:
    "JKKN College of Nursing is around 150 km from Krishnagiri via the NH-44/NH-544 corridor — a Tamil Nadu option with TNMGRMU affiliation and state counselling, instead of crossing into Karnataka. INC approved, NAAC accredited, hospital-attached, with secure hostels.",
  commuteDesc:
    "Around 150 km via Salem (~3 hours) on the NH-44/NH-544 corridor. Hostel stay with holiday travel home is the standard choice.",
  programmesHeading: "Nursing Courses Available for Krishnagiri Learners",
  reachHeading: "How to Reach from Krishnagiri",
  reachRouteSummary: "~150 km • about 3 hours",
  reachRoute:
    "Krishnagiri → Salem via NH-44, then Salem → Komarapalayam via NH-544; the campus is on the highway at Natarajapuram",
  reachBus:
    "Frequent Salem-bound buses run from Krishnagiri and Hosur on NH-44; from Salem, all Erode/Coimbatore-bound NH-544 buses stop at Komarapalayam",
  reachRail:
    "Salem Junction is the major rail hub on the route; Erode Junction (~35 km from campus) is the junction nearest to campus",
  faqSubtitle: "Nursing College near Krishnagiri — Your Questions Answered",
  faqs: [
    {
      q: "Which nursing college is accessible from Krishnagiri?",
      a: "Sresakthimayeil Institute of Nursing and Research (JKKN College of Nursing) at Komarapalayam is an accessible INC-approved nursing college for Krishnagiri learners — around 150 km via Salem on the NH-44/NH-544 corridor. It is NAAC accredited and affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai.",
    },
    {
      q: "How far is JKKN Nursing from Krishnagiri?",
      a: "JKKN College of Nursing is roughly 150 km from Krishnagiri — about 3 hours by road. Take a Salem-bound bus on NH-44, then any NH-544 bus towards Erode; the campus is on the highway at Komarapalayam.",
    },
    {
      q: "Why study nursing in Tamil Nadu instead of Bangalore for Krishnagiri learners?",
      a: "Studying within Tamil Nadu keeps you in the Tamil Nadu state counselling system, under The Tamil Nadu Dr. M.G.R. Medical University, with clinical postings in Tamil-speaking hospitals — factors many Krishnagiri families prefer over crossing into Karnataka. JKKN College of Nursing offers all three with INC approval and NAAC accreditation.",
    },
    {
      q: "Does JKKN Nursing provide hostel for Krishnagiri learners?",
      a: "Yes. Separate, secure hostels for boys and girls with mess facilities and warden supervision are available on campus. Direct Salem-route buses make travel between Krishnagiri and campus straightforward during holidays.",
    },
    {
      q: "What nursing courses are available for Krishnagiri learners?",
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
      q: "What is the fee structure for B.Sc Nursing for Krishnagiri learners?",
      a: "Fee structures for B.Sc Nursing at JKKN College of Nursing follow Tamil Nadu government and university norms. For the latest fee details for the 2026-27 academic year, contact the admission office at +91 93458 55001 or visit https://nursing.sresakthimayeil.jkkn.ac.in/",
    },
  ],
  cities: [
    { name: "Dharmapuri", distance: "45-55 km", href: "/dharmapuri" },
    { name: "Salem", distance: "90-100 km", href: "/salem" },
    { name: "Sankagiri", distance: "115-125 km", href: "/sankagiri" },
    { name: "Komarapalayam", distance: "~150 km", href: "/komarapalayam" },
  ],
  successCityText:
    "Share your experience and inspire future nursing learners from Krishnagiri",
  areaServedSameAs: "https://en.wikipedia.org/wiki/Krishnagiri",
};

export const metadata: Metadata = {
  title: "Nursing College near Krishnagiri | B.Sc Nursing — JKKN",
  description:
    "Nursing college near Krishnagiri: JKKN College of Nursing in Komarapalayam is ~150 km via Salem (NH-44/NH-544). Tamil Nadu counselling, TNMGRMU affiliation, INC approved, secure hostels. Admissions 2026-27 open.",
  keywords:
    "nursing college near krishnagiri, nursing colleges in krishnagiri, bsc nursing krishnagiri, nursing college hosur, nursing college krishnagiri district, jkkn nursing krishnagiri",
  alternates: {
    canonical: "https://nursing.sresakthimayeil.jkkn.ac.in/krishnagiri",
  },
  openGraph: {
    title: "Nursing College near Krishnagiri | B.Sc Nursing — JKKN",
    description:
      "JKKN College of Nursing in Komarapalayam is ~150 km from Krishnagiri via Salem. TN counselling, TNMGRMU affiliation, INC approved, secure hostels.",
    url: "https://nursing.sresakthimayeil.jkkn.ac.in/krishnagiri",
    siteName: "JKKN College of Nursing",
    type: "website",
  },
};

export default function KrishnagiriPage() {
  return <CityLandingPage config={config} />;
}
