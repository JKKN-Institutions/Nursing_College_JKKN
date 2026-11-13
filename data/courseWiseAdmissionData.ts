export type CourseKey = "bsc" | "msc" | "pbsc";

export interface CourseAdmission {
  key: CourseKey;
  slug: string;
  short: string;
  full: string;
  tagline: string;
  duration: string;
  durationISO: string;
  seats: string;
  feeShort: string;
  feeDetailed: { label: string; value: string }[];
  intake: string;
  ageLimit: string;
  eligibility: string[];
  entranceExam: string;
  reservation: string;
  process: { title: string; desc: string }[];
  documents: string[];
  dates: { label: string; date: string }[];
  specializations?: string[];
  career: string[];
  whyThis: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  // Optional 40-55 word direct answer shown right under the hero. Only a course that has
  // one renders the block, so msc and pbsc are unchanged.
  topAnswer?: { heading: string; text: string; source: string };
  // One-line summary of the same official cycle as `dates`, for the /admissions hub cards. It
  // lives here, next to `dates`, so the hub and the course page are updated in one edit - the
  // hub's hand-typed "March / July / September 2026" cards went wrong because they lived apart.
  dateSummary?: { applied: string; allotted: string };
}

// Status of the next cycle, shown on the /admissions hub. Change it the day a 2027-28
// prospectus appears on tnmedicalselection.net.
export const NEXT_CYCLE = {
  label: "2027-28",
  status: "Not announced as of 2 Nov 2026",
  note: "Watch tnmedicalselection.net",
};
export const DATES_SOURCE =
  "Source: Selection Committee notices on tnmedicalselection.net, read 2 November 2026.";

export const APPLY_URL = "https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=nursing.sresakthimayeil.jkkn.ac.in&utm_campaign=site";
export const SITE_URL = "https://nursing.sresakthimayeil.jkkn.ac.in";

export const coursesAdmission: Record<CourseKey, CourseAdmission> = {
  bsc: {
    key: "bsc",
    slug: "bsc-nursing",
    short: "B.Sc Nursing",
    full: "Bachelor of Science in Nursing (B.Sc Nursing)",
    tagline: "4-year undergraduate program — the gateway to becoming a Registered Nurse (RN)",
    duration: "4 Years (8 Semesters)",
    durationISO: "P4Y",
    seats: "60 Seats",
    feeShort: "₹1,50,000/yr (Female) · ₹1,75,000/yr (Male) — MQ",
    feeDetailed: [
      { label: "Tuition Fee (Female – MQ)", value: "₹1,50,000 / year" },
      { label: "Tuition Fee (Male – MQ)", value: "₹1,75,000 / year" },
      { label: "Government Quota Fee", value: "As Per Government Norm" },
      { label: "Hostel + Mess (optional)", value: "₹65,000 – ₹85,000 / year" },
      { label: "Examination & University Fee", value: "₹15,000 – ₹20,000 / year" },
      { label: "Uniform, Lab Coat, ID Kit (one-time)", value: "₹8,000 (approx.)" },
    ],
    intake: "August – September 2026",
    ageLimit: "Minimum 17 years as on 31st December 2026 · Upper limit 35 years",
    eligibility: [
      "Passed 10+2 (HSC) with Physics, Chemistry, Biology and English",
      "Minimum 45% aggregate in PCB (40% for BC/BCM/MBC & DNC and SC/SCA/ST)",
      "No NEET requirement — merit is built from the 10+2 marks",
      "Medical fitness — physically fit and free from communicable diseases",
      "Indian National (NRI / Foreign nationals via supernumerary quota)",
      // N-05. From the TN DME prospectus G.O. (D) No.657, 03.06.2026. Both matter to a real
      // applicant and neither was anywhere on the page.
      "Candidates from boards other than the TN State Board or CBSE need an Eligibility Certificate from The Tamil Nadu Dr. M.G.R. Medical University, Chennai, before joining",
      "Government application fee: As Per Government Norm (one application also covers B.Pharm, B.ASLP, B.P.O and the Allied and Healthcare UG courses)",
    ],
    entranceExam:
      "None. There is no entrance exam for B.Sc Nursing in Tamil Nadu - the merit list is built from the 10+2 marks in Physics, Chemistry and Biology, normalised to a base of 200.",
    reservation:
      "As per Tamil Nadu government reservation policy — BC, MBC, SC, ST, and other categories.",
    process: [
      { title: "Check Eligibility", desc: "Verify your 10+2 PCB marks against the minimum aggregate for your category." },
      { title: "Apply Online", desc: "Fill the application form at jkkn.ai/apply/jkkn-admission-2026 with academic and personal details." },
      { title: "Submit Documents", desc: "Upload scanned copies of marksheets, photo and ID proof." },
      { title: "Counselling Call", desc: "Attend the counselling session — Government Quota (state merit) or Management Quota (institutional)." },
      { title: "Document Verification", desc: "Carry originals for verification at the JKKN admissions office on the allotted date." },
      { title: "Fee Payment & Joining", desc: "Pay the prescribed fee, receive your admission letter, and report on the joining date." },
    ],
    documents: [
      "10th Standard (SSLC) Mark Sheet — Original + 3 copies",
      "12th Standard (HSC) Mark Sheet — Original + 3 copies",
      
      "Transfer Certificate (TC) from last institution",
      "Migration Certificate (if applicable)",
      "Community Certificate (BC/MBC/SC/ST — if applicable)",
      "Nativity Certificate (Tamil Nadu domicile, if applicable)",
      "Income Certificate (for scholarships / Govt quota)",
      "Aadhaar Card (self-attested copy)",
      "8 Passport-size Photographs (recent, white background)",
      "Medical Fitness Certificate from a registered medical officer",
    ],
    // N-05 + N-11. EVERY ROW IS FROM A PRIMARY SOURCE, re-checked live 2026-08-27. What was
    // here was wrong in every row: "March 2026" when the notification was 21 June, "July 2026
    // (tentative)" for a deadline the government had fixed AND closed, and "Counselling Begins
    // July - August" when no B.Sc Nursing counselling schedule has been announced at all - the
    // counselling notices on tnmedicalselection.net today are MBBS/BDS, MDS and DNB only.
    // Sources: TN DME prospectus G.O. (D) No.657 dated 03.06.2026; tnmedicalselection.net read
    // live 2026-08-27. NO 2027-28 DATE APPEARS - none has been announced.
    // A STATUS WITHOUT A DATE GOES FALSE ON ITS OWN. "Published", "Open" and "Not announced"
    // are all true on 27 Aug 2026 and all become wrong the moment the Selection Committee
    // moves - which is exactly how the block this replaced ("July 2026 (tentative)") went
    // wrong. Every volatile row now carries the date it was observed, so it ages into an
    // old-but-honest reading instead of a false claim.
    // 2026-11-02. The 27 Aug rows aged exactly as the note above said they would: the page still
    // read "counselling not announced" after all three rounds had run. Round dates are from the
    // notice titles on tnmedicalselection.net read live 2026-11-02 - allotment lists "On -
    // 03.09.2026" and "On - 21.09.2026" (a re-allotment list: Allotted From / Allotted To /
    // Retained, so Round 2), Round-3 Batch-1 "on - 27.10.2026" and Batch-2 "on - 29.10.2026",
    // and the Round-3 allotment order names B SC NURSING. No 2027-28 notice appears.
    dates: [
      { label: "Government notification issued", date: "21 June 2026  -  done" },
      { label: "Online application opened", date: "21 June 2026, 12.01 PM  -  done" },
      { label: "Last date to upload the application", date: "12 July 2026, 5.00 PM  -  closed (extended from 03 July)" },
      { label: "Provisional rank list", date: "Published by 27 Aug 2026  -  done" },
      { label: "Round 1 seat allotment (government quota)", date: "3 September 2026  -  done" },
      { label: "Round 2 seat allotment", date: "21 September 2026  -  done" },
      { label: "Round 3 seat allotment (Batch 1 and 2)", date: "27 and 29 October 2026  -  done" },
      { label: "2027-28 counselling", date: "Not announced as of 2 Nov 2026 - watch tnmedicalselection.net" },
      { label: "Management quota at JKKN", date: "Call the JKKN admission office for current seat status" },
    ],
    dateSummary: { applied: "21 Jun - 12 Jul 2026", allotted: "3 Sep, 21 Sep, 27-29 Oct 2026" },
    topAnswer: {
      heading: "BSc Nursing Counselling Date 2027",
      text: "Tamil Nadu has not announced the B.Sc Nursing counselling dates for 2027 yet (checked 2 November 2026 on tnmedicalselection.net). In the 2026-27 cycle, applications opened on 21 June 2026, Round 1 seats were allotted on 3 September, Round 2 on 21 September and Round 3 on 27-29 October 2026.",
      source: "Source: Selection Committee, Directorate of Medical Education and Research, Tamil Nadu - notices on tnmedicalselection.net, read 2 November 2026.",
    },
    career: [
      "Staff Nurse — Multi-specialty / Super-specialty hospitals (Apollo, Fortis, Manipal, CMC)",
      "Government Staff Nurse — Tamil Nadu MRB, AIIMS, ESIC, Railways, Defence",
      "ICU / Critical Care / Emergency / OT specialist nurse",
      "International nursing careers — UK (NHS / OSCE), UAE, Saudi Arabia, Singapore, Australia (after IELTS/OET + licensure)",
      "Higher studies — M.Sc Nursing, Ph.D, Nurse Practitioner, MBA in Hospital Administration",
    ],
    whyThis: [
      { title: "INC-Approved Curriculum", desc: "Follows the Indian Nursing Council's revised B.Sc Nursing curriculum with TNMGRMU university framework." },
      { title: "Clinical Postings", desc: "Hands-on training at four affiliated hospitals in Erode, including Government Headquarters Hospital." },
      { title: "98% Placement Track Record (2024-25)", desc: "Consistent placements at top corporate hospitals across India and abroad." },
    ],
    faqs: [
      { q: "Is NEET required for B.Sc Nursing admission?", a: "No. NEET is not required for B.Sc Nursing in Tamil Nadu. Admission is merit-based on the 10+2 marks in Physics, Chemistry and Biology, normalised to a base of 200 by the Tamil Nadu Selection Committee, per the Government of Tamil Nadu prospectus for the 2026-27 session." },
      { q: "What is the B.Sc Nursing fee structure at JKKN?", a: "Management Quota annual tuition is ₹1,50,000 for female candidates and ₹1,75,000 for male candidates. Government Quota fees are As Per Government Norm. Hostel, mess, examination, and uniform charges are billed separately." },
      { q: "What is the eligibility for B.Sc Nursing?", a: "Candidates must have passed 10+2 with Physics, Chemistry, Biology, and English with a minimum aggregate of 45% (40% for BC/BCM/MBC & DNC and SC/SCA/ST). NEET is NOT required. Applicants must have completed 17 years of age as on 31st December of the admission year." },
      { q: "How many B.Sc Nursing seats are available at JKKN?", a: "60 seats are available for B.Sc Nursing — split across Government Quota (filled via TN state counselling) and Management Quota (filled directly by the institution on academic merit)." },
      { q: "What is the difference between Government Quota and Management Quota?", a: "Government Quota (GQ) seats are filled through Tamil Nadu state counselling on a merit list built from 10+2 marks, with fees As Per Government Norm. Management Quota (MQ) seats are filled directly by JKKN on academic merit, with institutional fee structure." },
      { q: "Does JKKN offer hostel for B.Sc Nursing learners?", a: "Yes. Separate girls' and boys' hostels are available within campus with 24/7 security, Wi-Fi, hygienic mess, and warden supervision. Hostel allotment is on a first-come, first-served basis." },
      { q: "What career options are available after B.Sc Nursing?", a: "Graduates can work as Staff Nurses in corporate hospitals, Government Staff Nurses via TN MRB/AIIMS/ESIC, ICU/Critical Care specialists, pursue M.Sc Nursing, or take international roles in UK (NHS), UAE, Saudi Arabia, Singapore, Australia after the relevant licensure exam." },
      { q: "When is the BSc Nursing counselling date 2027 in Tamil Nadu?", a: "The 2027-28 BSc Nursing counselling dates are not announced yet: the Tamil Nadu Selection Committee had published no 2027 schedule on tnmedicalselection.net as of 2 November 2026. In 2026-27, seats were allotted in three rounds, on 3 September, 21 September and 27-29 October 2026. JKKN's government-quota B.Sc Nursing seats are filled through this counselling." },
      { q: "When do B.Sc Nursing classes begin?", a: "For the 2026-27 batch, the reporting date followed the government-quota counselling, which allotted seats in three rounds on 3 September, 21 September and 27-29 October 2026 (tnmedicalselection.net). Admitted students receive their reporting date with the admission letter. For the 2027-28 batch, no counselling schedule had been announced as of 2 November 2026." },
      // N-08, 2026-08-26. People genuinely ask this, and the page had a measurable blind spot:
      // it wrote "B.Sc" 23 times in visible copy and "BSc" zero times, while GSC shows the
      // register's searchers overwhelmingly type BSc - 357 keywords carrying 9,087 mobile
      // impressions, against 26 keywords and 551 impressions for the dotted spelling. The task
      // had assumed the opposite: that the page targets B.Sc and the variants have nothing to
      // match. It targets the MINORITY spelling. One honest FAQ carries every form a reader
      // might type without stuffing them into headings.
      { q: "Is BSc Nursing the same as B.Sc Nursing?", a: "Yes. BSc Nursing, B.Sc Nursing, B Sc Nursing and BS Nursing all refer to the same four-year Bachelor of Science in Nursing degree. The spelling varies between websites and application forms; the course, the eligibility and the Tamil Nadu Dr. M.G.R. Medical University affiliation are identical. At JKKN it is a four-year programme with 60 seats and no entrance exam." },
    ],
  },

  msc: {
    key: "msc",
    slug: "msc-nursing",
    short: "M.Sc Nursing",
    full: "Master of Science in Nursing (M.Sc Nursing)",
    tagline: "2-year postgraduate program with 5 clinical specializations — advance into leadership, teaching, and research",
    duration: "2 Years (4 Semesters)",
    durationISO: "P2Y",
    seats: "25 Seats (5 per specialization)",
    feeShort: "₹75,000 – ₹1,00,000/yr (MQ)",
    feeDetailed: [
      { label: "Tuition Fee (Management Quota)", value: "₹75,000 – ₹1,00,000 / year" },
      { label: "Government Quota Fee", value: "As Per Government Norm" },
      { label: "Hostel + Mess (optional)", value: "₹65,000 – ₹85,000 / year" },
      { label: "University Examination Fee", value: "₹15,000 / year" },
      { label: "Thesis / Dissertation Fee", value: "₹10,000 (one-time)" },
      { label: "Specialty Lab & Clinical Kit", value: "₹6,000 (one-time)" },
    ],
    intake: "October 2026",
    ageLimit: "No upper age limit · Minimum 1 year post-RN experience required",
    eligibility: [
      "B.Sc Nursing or Post Basic B.Sc Nursing from an INC-recognized college",
      "Minimum 55% aggregate in B.Sc Nursing (50% for SC / SCA / ST)",
      "Valid Registered Nurse (RN) and Registered Midwife (RM) registration with the State Nursing Council",
      "Minimum 1 year of clinical experience after registration as RN",
      "No entrance test for government-quota seats - merit list out of 100 (90 for B.Sc Nursing marks, 10 for experience)",
      "Medical fitness certificate",
    ],
    entranceExam:
      "None for government-quota seats. The Selection Committee, Directorate of Medical Education and Research, Tamil Nadu, fills them by online counselling from a merit list out of 100 marks: 90 for B.Sc (Nursing) academic marks and 10 for experience (Tamil Nadu M.Sc (Nursing) prospectus 2026-27, G.O.(D) No.1113, dated 30.09.2026).",
    reservation:
      "Reservation as per Tamil Nadu government policy. Half of the government-quota seats in each speciality are reserved for service candidates - nurses in Tamil Nadu government service (Tamil Nadu M.Sc (Nursing) prospectus 2026-27).",
    process: [
      { title: "Verify Eligibility", desc: "Confirm 1-year RN experience, B.Sc Nursing 55%+, and active state council registration." },
      { title: "Apply Online", desc: "Submit application at jkkn.ai/apply/jkkn-admission-2026 selecting your preferred specialization." },
      { title: "Merit List", desc: "Government-quota: the Selection Committee ranks applicants out of 100 - 90 for B.Sc Nursing marks, 10 for experience. There is no entrance test." },
      { title: "Specialization Selection", desc: "Choose from 5 specializations — Medical-Surgical, Child Health, OBG, Psychiatric, or Community Health." },
      { title: "Counselling & Document Verification", desc: "Attend state counselling (Govt seats) or institutional counselling (MQ seats) with originals." },
      { title: "Fee Payment & Joining", desc: "Pay the tuition fee, receive joining letter, and report on the academic session start date." },
    ],
    documents: [
      "B.Sc Nursing / Post Basic B.Sc Nursing Degree Certificate — Original + 3 copies",
      "B.Sc Nursing Consolidated Mark Sheet (all semesters)",
      "Registered Nurse (RN) & RM Registration Certificate",
      "Experience Certificate — minimum 1 year (in original)",
      "10th and 12th Mark Sheets",
      "Transfer Certificate from last institution",
      "Community Certificate (if applicable)",
      "Aadhaar Card (self-attested copy)",
      "8 Passport-size Photographs",
      "Medical Fitness Certificate",
      "No-Objection Certificate (NOC) — if currently employed",
    ],
    // 2026-10-29. Replaced the "typical cycle" months (April / June entrance / July / August): the
    // M.Sc (Nursing) prospectus 2026-27 was notified on 02-10-2026 and names no entrance test.
    // Only the notified date is stated; the reader is sent to the source for the round dates.
    // 2026-11-02. The rounds have now run, so the rows name them. Application window from the
    // prospectus "At a glance" (02-10-2026 12 Noon to 07-10-2026 11.55 PM); allotment dates from
    // the notice titles on tnmedicalselection.net read live 2026-11-02 - "ALLOTTED FOR M.SC.,
    // NURSING ... ON 27.10.2026" after the Round I schedule and "ON 30.10.2026" after the Round 2
    // schedule. No 2027-28 notice appears.
    dates: [
      { label: "Government notification (prospectus 2026-27)", date: "2 October 2026  -  done" },
      { label: "Online application", date: "2 Oct 2026, 12 noon to 7 Oct 2026, 11.55 PM  -  closed" },
      { label: "Provisional rank list", date: "Published in October 2026  -  done" },
      { label: "Round 1 seat allotment (government quota)", date: "27 October 2026  -  done" },
      { label: "Round 2 seat allotment", date: "30 October 2026  -  done" },
      { label: "2027-28 counselling", date: "Not announced as of 2 Nov 2026 - watch tnmedicalselection.net" },
      { label: "Management quota at JKKN", date: "Call the JKKN admission office for current seat status" },
    ],
    dateSummary: { applied: "2 - 7 Oct 2026", allotted: "27 + 30 Oct 2026" },
    topAnswer: {
      heading: "MSc Nursing Entrance Exam 2027",
      text: "There is no entrance exam for M.Sc Nursing government-quota seats in Tamil Nadu. The Selection Committee ranks applicants out of 100: 90 for B.Sc Nursing marks and 10 for experience (prospectus 2026-27). In 2026-27, seats were allotted on 27 and 30 October 2026; 2027-28 dates are not announced yet (checked 2 November 2026).",
      source: "Source: Tamil Nadu M.Sc (Nursing) prospectus 2026-27, G.O.(D) No.1113 dated 30.09.2026, and the Selection Committee notices on tnmedicalselection.net, read 2 November 2026.",
    },
    specializations: [
      "Medical-Surgical Nursing",
      "Child Health (Paediatric) Nursing",
      "Obstetrics & Gynaecological Nursing",
      "Psychiatric / Mental Health Nursing",
      "Community Health Nursing",
    ],
    career: [
      "Nursing Tutor / Lecturer / Professor in nursing colleges (INC + TNMGRMU affiliated)",
      "Nurse Manager / Clinical Coordinator at corporate hospitals",
      "Nurse Practitioner / Specialty Nurse — ICU, NICU, Oncology, Cardiology, Dialysis",
      "Nurse Researcher — clinical trials, public health, government health programs",
      "International faculty / clinical roles in UK, Canada, Australia (with licensure)",
      "Higher studies — M.Phil, Ph.D in Nursing, Hospital Administration",
    ],
    whyThis: [
      { title: "5 Specializations Under One Roof", desc: "Choose from Medical-Surgical, Child Health, OBG, Psychiatric, or Community Health — all with dedicated senior learners." },
      { title: "Research & Thesis Mentorship", desc: "Guided dissertation with publication support and ethical clearance via JKKN Research Committee." },
      { title: "Clinical Practice + Teaching Exposure", desc: "Dual training — clinical postings at affiliated hospitals plus teaching experience in undergraduate programs." },
    ],
    faqs: [
      { q: "What is the eligibility for M.Sc Nursing at JKKN?", a: "Candidates must hold a B.Sc Nursing or Post Basic B.Sc Nursing degree from an INC-recognized institution with a minimum 55% aggregate (50% for SC / SCA / ST), valid Registered Nurse (RN) and Registered Midwife (RM) registration, and at least one year of clinical experience after registration." },
      { q: "Is there an entrance exam for M.Sc Nursing?", a: "No entrance test is named in the Tamil Nadu M.Sc (Nursing) prospectus for 2026-2027. Government-quota seats are filled by online counselling from a merit list out of 100 marks: 90 for B.Sc (Nursing) academic marks and 10 for experience. The prospectus was notified on 2 October 2026 at tnmedicalselection.net." },
      { q: "When is the MSc Nursing counselling date 2027 in Tamil Nadu?", a: "The 2027-28 MSc Nursing counselling dates are not announced yet: the Tamil Nadu Selection Committee had published no 2027 schedule as of 2 November 2026. In 2026-27, the prospectus came out on 2 October 2026 and seats were allotted on 27 and 30 October 2026. JKKN's government-quota M.Sc Nursing seats follow this counselling." },
      { q: "What specializations are offered in M.Sc Nursing at JKKN?", a: "JKKN offers 5 M.Sc Nursing specializations: Medical-Surgical Nursing, Child Health (Paediatric) Nursing, Obstetrics & Gynaecological Nursing, Psychiatric/Mental Health Nursing, and Community Health Nursing. Each has 5 seats." },
      { q: "What is the M.Sc Nursing fee structure?", a: "Management Quota tuition fees range from ₹75,000 to ₹1,00,000 per year. Government-quota fees are As Per Government Norm. Hostel, examination, thesis, and clinical kit are billed separately." },
      { q: "Can working nurses join M.Sc Nursing?", a: "Yes. Work experience is actually a prerequisite — minimum 1 year of clinical experience after RN registration is required. In-service quota seats are reserved for nurses working in Tamil Nadu government healthcare." },
      { q: "What is the career scope after M.Sc Nursing?", a: "M.Sc Nursing opens roles such as Nursing Tutor/Lecturer/Professor, Nurse Manager, Specialty Nurse (ICU/NICU/Oncology), Nurse Researcher, international clinical/teaching roles, and pathways to M.Phil and Ph.D in Nursing." },
      { q: "How long is the M.Sc Nursing course?", a: "M.Sc Nursing is a 2-year full-time program (4 semesters) including clinical postings, learning studio teaching, and a research dissertation in the chosen specialization." },
      // N-08, 2026-08-26. The same spelling inversion measured on the B.Sc page holds here, at
      // smaller scale: MSc carries 61 register keywords and 1,415 mobile impressions against 4
      // keywords and 101 impressions for M.Sc. Fixing one course and leaving the other would
      // have left a known defect live for no reason.
      { q: "Is MSc Nursing the same as M.Sc Nursing?", a: "Yes. MSc Nursing, M.Sc Nursing and M Sc Nursing all refer to the same two-year Master of Science in Nursing degree. Only the spelling differs between websites and forms. At JKKN it is a two-year postgraduate programme with 25 seats across five specialisations, affiliated to The Tamil Nadu Dr. M.G.R. Medical University." },
      // N-09. GOAL 6, NOT A LIST PAGE. Five register keywords ask which M.Sc specialisation to
      // pick - "which subject is best for msc nursing", "msc nursing which course is best",
      // "which msc nursing is best", "in msc nursing which course is best" - and they sit at GSC
      // mobile 1.5-2.0, the only distance from #1 that a content edit can actually close. The
      // honest answer is that there is no single best one, so that is what this says. Naming a
      // winner would be a claim we cannot source, and it would be wrong for the reader.
      { q: "Which M.Sc Nursing specialisation is best?", a: "There is no single best specialisation - the right one is the one that matches where you want to work, and all five carry the same M.Sc Nursing degree from The Tamil Nadu Dr. M.G.R. Medical University. Medical-Surgical Nursing is the broadest and leads to ICU, ward and operation-theatre roles. Child Health (Paediatric) Nursing leads to NICU and paediatric wards. Obstetrics & Gynaecological Nursing leads to labour-room and maternity roles. Psychiatric / Mental Health Nursing leads to psychiatric units and counselling roles. Community Health Nursing leads to public-health, government and NGO field roles. JKKN offers all five, with 5 seats in each." },
      { q: "After M.Sc Nursing, which course is best?", a: "The usual next step after M.Sc Nursing is M.Phil Nursing or a Ph.D in Nursing - that is the qualification most nursing college faculty hold, and a master's degree is the entry requirement for both. Nurses who want to stay clinical instead take specialty certifications such as critical care, oncology or neonatal nursing. Which is better depends on whether you want to teach and research or to practise; the M.Sc degree itself qualifies you for either route." },
    ],
  },

  pbsc: {
    key: "pbsc",
    slug: "pbsc-nursing",
    short: "Post Basic B.Sc Nursing",
    full: "Post Basic Bachelor of Science in Nursing (P.B.B.Sc Nursing)",
    tagline: "2-year degree program for GNM diploma holders — upgrade your diploma to a full B.Sc Nursing degree",
    duration: "2 Years (4 Semesters)",
    durationISO: "P2Y",
    seats: "50 Seats",
    feeShort: "₹65,000/yr (MQ)",
    feeDetailed: [
      { label: "Tuition Fee (Management Quota)", value: "₹65,000 / year" },
      { label: "Government Quota Fee", value: "As Per Government Norm" },
      { label: "Hostel + Mess (optional)", value: "₹65,000 – ₹85,000 / year" },
      { label: "University Examination Fee", value: "₹15,000 / year" },
      { label: "Lab & Clinical Kit (one-time)", value: "₹6,000" },
      { label: "Uniform & ID (one-time)", value: "₹5,000" },
    ],
    intake: "October 2026",
    // 2026-11-02. The experience line said "minimum 1 year" here and in four other spots on this
    // page. The Tamil Nadu Post Basic B.Sc (Nursing) prospectus 2026-27 (G.O.(D) No.970,
    // 18.08.2026) has no minimum for non-service candidates - experience only adds merit marks,
    // one per completed year as on 31-05-2026, up to 10 - while service candidates need 2 years
    // of continuous regular service, and the age limit applies to service candidates only
    // (under 50 as on 31 December 2026). Same day, second pass: "10+2 (any stream) OR 10th + GNM"
    // became a Higher Secondary pass - clause 5(a) asks for "a pass in the Higher Secondary course
    // or Equivalent Examination recognized by the University", with no 10th-only route. Intake is
    // October because the 2026-27 government-quota allotments were 21 and 28 October.
    ageLimit: "No upper age limit (non-service) · Service candidates: under 50 as on 31 Dec 2026",
    eligibility: [
      "Pass in the Higher Secondary course (10+2) or an equivalent examination recognised by the University (TN prospectus 2026-27)",
      "GNM (General Nursing & Midwifery) diploma from an INC-recognized institution",
      "Valid Registered Nurse (RN) & Registered Midwife (RM) registration with State Nursing Council",
      "No minimum experience for non-service candidates - each completed year adds 1 merit mark (maximum 10); Tamil Nadu government service candidates need 2 years of continuous regular service (TN prospectus 2026-27)",
      "Medical fitness certificate",
    ],
    entranceExam:
      "None for government-quota seats. The Selection Committee, Directorate of Medical Education and Research, Tamil Nadu, ranks applicants out of 100: 90 for Diploma in Nursing (GNM) marks and 10 for experience, one mark per completed year (Tamil Nadu Post Basic B.Sc (Nursing) prospectus 2026-27, G.O.(D) No.970, dated 18.08.2026).",
    reservation:
      "Reservation as per Tamil Nadu government policy. Working nurses in government service may apply under in-service quota.",
    process: [
      { title: "Check Eligibility", desc: "Verify your GNM diploma and RN/RM registration; service candidates also need 2 years of continuous regular service." },
      { title: "Apply Online", desc: "Complete the application form at jkkn.ai/apply/jkkn-admission-2026." },
      { title: "Submit Documents", desc: "Upload GNM certificate, RN/RM registration, experience certificate, and academic records." },
      { title: "Merit List & Counselling", desc: "Government quota: the Selection Committee ranks applicants out of 100 - 90 for GNM marks, 10 for experience - and allots seats by online counselling. Management-quota seats go through the JKKN admission office." },
      { title: "Document Verification", desc: "Carry originals for verification at the JKKN admissions office on the allotted date." },
      { title: "Fee Payment & Joining", desc: "Pay fees, receive admission letter, and report on the course start date." },
    ],
    documents: [
      "GNM Diploma Certificate — Original + 3 copies",
      "GNM Consolidated Mark Sheet",
      "RN & RM Registration Certificate",
      "Experience Certificate (each completed year adds 1 merit mark, maximum 10)",
      "10th and 12th (Higher Secondary) Mark Sheets",
      "Transfer Certificate from last institution",
      "Community Certificate (if applicable)",
      "Nativity Certificate (Tamil Nadu domicile, if applicable)",
      "Aadhaar Card (self-attested copy)",
      "8 Passport-size Photographs",
      "Medical Fitness Certificate",
      "NOC from employer (if currently working)",
    ],
    // 2026-11-02. Replaces the "typical cycle" months (April / July / August), which the real
    // 2026-27 cycle proved wrong: notified 28-08-2026, applications to 07-09-2026 (extended from
    // 02-09 by Notification No.01/SCSIII/2026 dated 02.09.2026), allotment lists "on 21.10.2026"
    // after the Round 1 schedule and "on 28.10.2026" after the Round-2 schedule - all from
    // tnmedicalselection.net, read live 2026-11-02. No 2027-28 notice appears.
    dates: [
      { label: "Government notification (prospectus 2026-27)", date: "28 August 2026  -  done" },
      { label: "Online application", date: "28 Aug 2026, 12.01 PM to 7 Sep 2026, 5.00 PM (extended from 2 Sep)  -  closed" },
      { label: "Provisional rank list", date: "Published in October 2026  -  done" },
      { label: "Round 1 seat allotment (government quota)", date: "21 October 2026  -  done" },
      { label: "Round 2 seat allotment", date: "28 October 2026  -  done" },
      { label: "2027-28 counselling", date: "Not announced as of 2 Nov 2026 - watch tnmedicalselection.net" },
      { label: "Management quota at JKKN", date: "Call the JKKN admission office for current seat status" },
    ],
    dateSummary: { applied: "28 Aug - 7 Sep 2026", allotted: "21 + 28 Oct 2026" },
    topAnswer: {
      heading: "Post BSc Nursing Entrance Exam 2027",
      text: "There is no entrance exam for Post Basic B.Sc Nursing government-quota seats in Tamil Nadu. The merit list is out of 100: 90 for Diploma in Nursing marks and 10 for experience (prospectus 2026-27). In 2026-27, seats were allotted on 21 and 28 October 2026; 2027-28 dates are not announced yet.",
      source: "Source: Tamil Nadu Post Basic B.Sc (Nursing) prospectus 2026-27, G.O.(D) No.970 dated 18.08.2026, and the Selection Committee notices on tnmedicalselection.net, read 2 November 2026.",
    },
    career: [
      "Promotion to senior staff nurse / ward in-charge in current employment",
      "Eligibility for M.Sc Nursing — opens postgraduate pathway",
      "Government nursing posts requiring a graduate degree (AIIMS, ESIC, Railways)",
      "International nursing roles requiring a 4-year equivalent degree (UK, Australia)",
      "Nursing tutor / clinical instructor positions",
      "Career switch to public health, hospital administration, or community programs",
    ],
    whyThis: [
      { title: "Diploma to Degree Upgrade", desc: "Recognized B.Sc Nursing degree from TNMGRMU — opens doors to higher studies and senior roles." },
      { title: "Working-Nurse Friendly", desc: "Learning framework designed for those with practical experience — bridging theory and clinical practice." },
      { title: "Pathway to M.Sc Nursing", desc: "After P.B.B.Sc, you become eligible for M.Sc Nursing with all its 5 specializations." },
    ],
    faqs: [
      { q: "Is Post B.Sc Nursing the same as Post Basic B.Sc Nursing?", a: "Yes. Post B.Sc Nursing, Post Basic B.Sc Nursing and P.B.B.Sc Nursing are names for the same 2-year degree for GNM diploma holders who are registered nurses. At JKKN College of Nursing and Research it has 50 sanctioned seats in the university's 2023-24 list." },
      { q: "Who is eligible for Post Basic B.Sc Nursing?", a: "GNM diploma holders from INC-recognized institutions with valid RN and RM registration with the State Nursing Council are eligible. Experience is not a minimum requirement for non-service candidates in the Tamil Nadu prospectus 2026-27; each completed year adds one merit mark, up to 10. Candidates also need a pass in the Higher Secondary course (10+2) or an equivalent examination." },
      { q: "Is there an entrance exam for Post Basic B.Sc Nursing?", a: "No. In Tamil Nadu, government-quota seats are filled from a merit list out of 100: 90 for Diploma in Nursing (GNM) marks and 10 for experience, one mark per completed year (Post Basic B.Sc (Nursing) prospectus 2026-27). Seats are allotted by online counselling. Management-quota seats at JKKN are filled through the college admission office." },
      { q: "When is the Post Basic BSc Nursing counselling date 2027?", a: "The 2027-28 Post Basic BSc Nursing counselling dates are not announced yet: the Tamil Nadu Selection Committee had published no 2027 schedule as of 2 November 2026. In 2026-27, the prospectus came out on 28 August 2026 and seats were allotted on 21 and 28 October 2026. JKKN's government-quota seats follow this counselling." },
      { q: "What is the Post Basic B.Sc Nursing fee at JKKN?", a: "Management Quota tuition is ₹65,000 per year. Government Quota fees are As Per Government Norm. Hostel, examination, and uniform fees are billed separately." },
      { q: "How long does Post Basic B.Sc Nursing take?", a: "It is a 2-year full-time degree program (4 semesters). After completion, you receive a B.Sc Nursing degree from Tamil Nadu Dr. M.G.R. Medical University, equivalent to the regular B.Sc Nursing degree." },
      { q: "After Post Basic B.Sc Nursing, can I do M.Sc Nursing?", a: "Yes. After completing Post Basic B.Sc Nursing, you become eligible for M.Sc Nursing (with the standard 55% + 1 year experience requirement). All 5 M.Sc Nursing specializations are open to P.B.B.Sc graduates." },
      { q: "Can I work and study Post Basic B.Sc Nursing?", a: "Post Basic B.Sc Nursing at JKKN is a regular full-time program with mandatory clinical postings — it is not offered as a part-time/distance course. Working nurses typically take leave or NOC from their employer to attend." },
      { q: "What is the career benefit of Post Basic B.Sc Nursing?", a: "Upgrading from GNM diploma to a B.Sc Nursing degree opens senior staff nurse and ward in-charge promotions, eligibility for government nursing posts requiring graduate qualification, international nursing roles in UK/Australia, and the pathway to M.Sc Nursing." },
      // N-09. Register keyword "after gnm nursing which course is best", GSC mobile 2.0. Same
      // rule as the M.Sc one above - answer the question honestly, do not crown a winner.
      { q: "After GNM, which nursing course is best?", a: "For a GNM diploma holder the standard next step is Post Basic B.Sc Nursing. It is a two-year, four-semester degree that upgrades the diploma to a graduate qualification, and it is the degree that government nursing posts requiring a graduate ask for. Nurses who then want a teaching, research or specialist career continue to M.Sc Nursing, for which Post Basic B.Sc graduates are eligible. At JKKN, Post Basic B.Sc Nursing has 50 seats and needs a GNM from an INC-recognised institution with valid RN and RM registration." },
    ],
  },
};

export const courseList: CourseAdmission[] = [
  coursesAdmission.bsc,
  coursesAdmission.msc,
  coursesAdmission.pbsc,
];
