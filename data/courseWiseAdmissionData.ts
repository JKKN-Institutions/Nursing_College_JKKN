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
}

export const APPLY_URL = "https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=nursing.sresakthimayeil.jkkn.ac.in&utm_medium=organic&utm_campaign=site";
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
      { label: "Government Quota Fee", value: "As per TN Govt norms" },
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
      "Government application fee Rs 500, which also covers B.Pharm, B.ASLP, B.P.O and the Allied and Healthcare UG courses",
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
    dates: [
      { label: "Government notification issued", date: "21 June 2026  -  done" },
      { label: "Online application opened", date: "21 June 2026, 12.01 PM  -  done" },
      { label: "Last date to upload the application", date: "12 July 2026, 5.00 PM  -  closed (extended from 03 July)" },
      { label: "Provisional rank list", date: "Published as of 27 Aug 2026 - check your rank at tnmedicalselection.net" },
      { label: "Missing documents upload", date: "Open as of 27 Aug 2026 - act if your application was flagged" },
      { label: "Government-quota counselling", date: "Not announced as of 27 Aug 2026 - watch tnmedicalselection.net" },
      { label: "Management quota at JKKN", date: "Open  -  apply through the admission office" },
    ],
    career: [
      "Staff Nurse — Multi-specialty / Super-specialty hospitals (Apollo, Fortis, Manipal, CMC)",
      "Government Staff Nurse — Tamil Nadu MRB, AIIMS, ESIC, Railways, Defence",
      "ICU / Critical Care / Emergency / OT specialist nurse",
      "International nursing careers — UK (NHS / OSCE), UAE, Saudi Arabia, Singapore, Australia (after IELTS/OET + licensure)",
      "Higher studies — M.Sc Nursing, Ph.D, Nurse Practitioner, MBA in Hospital Administration",
    ],
    whyThis: [
      { title: "INC-Approved Curriculum", desc: "Follows the Indian Nursing Council's revised B.Sc Nursing curriculum with TNMGRMU university framework." },
      { title: "Clinical Posting from Year 1", desc: "Hands-on training at the attached 500+ bed JKKN Multi-Specialty Teaching Hospital." },
      { title: "95% Placement Track Record", desc: "Consistent placements at top corporate hospitals across India and abroad." },
    ],
    faqs: [
      { q: "Is NEET required for B.Sc Nursing admission?", a: "No. NEET is not required for B.Sc Nursing in Tamil Nadu. Admission is merit-based on the 10+2 marks in Physics, Chemistry and Biology, normalised to a base of 200 by the Tamil Nadu Selection Committee, per the Government of Tamil Nadu prospectus for the 2026-27 session." },
      { q: "What is the B.Sc Nursing fee structure at JKKN?", a: "Management Quota annual tuition is ₹1,50,000 for female candidates and ₹1,75,000 for male candidates. Government Quota fees are as per Tamil Nadu government norms. Hostel, mess, examination, and uniform charges are billed separately." },
      { q: "What is the eligibility for B.Sc Nursing?", a: "Candidates must have passed 10+2 with Physics, Chemistry, Biology, and English with a minimum aggregate of 45% (40% for BC/BCM/MBC & DNC and SC/SCA/ST). NEET is NOT required. Applicants must have completed 17 years of age as on 31st December of the admission year." },
      { q: "How many B.Sc Nursing seats are available at JKKN?", a: "60 seats are available for B.Sc Nursing — split across Government Quota (filled via TN state counselling) and Management Quota (filled directly by the institution on academic merit)." },
      { q: "What is the difference between Government Quota and Management Quota?", a: "Government Quota (GQ) seats are filled through Tamil Nadu state counselling on a merit list built from 10+2 marks, with fees as per Govt norms. For nursing the two rates are the SAME - the official fee schedule lists Government Quota and Management Quota at an identical figure for every nursing course. Management Quota (MQ) seats are filled directly by JKKN on academic merit, with institutional fee structure." },
      { q: "Does JKKN offer hostel for B.Sc Nursing learners?", a: "Yes. Separate girls' and boys' hostels are available within campus with 24/7 security, Wi-Fi, hygienic mess, and warden supervision. Hostel allotment is on a first-come, first-served basis." },
      { q: "What career options are available after B.Sc Nursing?", a: "Graduates can work as Staff Nurses in corporate hospitals, Government Staff Nurses via TN MRB/AIIMS/ESIC, ICU/Critical Care specialists, pursue M.Sc Nursing, or take international roles in UK (NHS), UAE, Saudi Arabia, Singapore, Australia after the relevant licensure exam." },
      { q: "When do B.Sc Nursing classes begin?", a: "Classes for the 2026-27 academic year are expected to begin in September 2026. The exact date follows the close of government-quota counselling, and as of 27 August 2026 the Selection Committee has not announced a B.Sc Nursing counselling schedule. Management-quota admission at JKKN is open now, and admitted students receive their reporting date with the admission letter." },
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
      { label: "Government Quota Fee", value: "As per TN Govt norms" },
      { label: "Hostel + Mess (optional)", value: "₹65,000 – ₹85,000 / year" },
      { label: "University Examination Fee", value: "₹15,000 / year" },
      { label: "Thesis / Dissertation Fee", value: "₹10,000 (one-time)" },
      { label: "Specialty Lab & Clinical Kit", value: "₹6,000 (one-time)" },
    ],
    intake: "September – October 2026",
    ageLimit: "No upper age limit · Minimum 1 year post-RN experience required",
    eligibility: [
      "B.Sc Nursing or Post Basic B.Sc Nursing from an INC-recognized college",
      "Minimum 55% aggregate marks in the qualifying degree",
      "Valid Registered Nurse (RN) and Registered Midwife (RM) registration with the State Nursing Council",
      "Minimum 1 year of clinical experience after registration as RN",
      "Qualified in the TN M.Sc Nursing Entrance Exam (state-conducted)",
      "Medical fitness certificate",
    ],
    entranceExam:
      "Tamil Nadu M.Sc Nursing Entrance Examination conducted by the Directorate of Medical Education (DME), Tamil Nadu — June 2026.",
    reservation:
      "Reservation as per Tamil Nadu government policy. In-service quota seats available for working nurses in TN government service.",
    process: [
      { title: "Verify Eligibility", desc: "Confirm 1-year RN experience, B.Sc Nursing 55%+, and active state council registration." },
      { title: "Apply Online", desc: "Submit application at jkkn.ai/apply/jkkn-admission-2026 selecting your preferred specialization." },
      { title: "Entrance Exam", desc: "Appear for the TN M.Sc Nursing Entrance Test. Carry hall ticket and ID proof." },
      { title: "Specialization Selection", desc: "Choose from 5 specializations — Medical-Surgical, Child Health, OBG, Psychiatric, or Community Health." },
      { title: "Counselling & Document Verification", desc: "Attend state counselling (Govt seats) or institutional counselling (MQ seats) with originals." },
      { title: "Fee Payment & Joining", desc: "Pay the tuition fee, receive joining letter, and report on the academic session start date." },
    ],
    documents: [
      "B.Sc Nursing / Post Basic B.Sc Nursing Degree Certificate — Original + 3 copies",
      "B.Sc Nursing Consolidated Mark Sheet (all semesters)",
      "Registered Nurse (RN) & RM Registration Certificate",
      "Experience Certificate — minimum 1 year (in original)",
      "TN M.Sc Nursing Entrance Exam Score Card / Hall Ticket",
      "10th and 12th Mark Sheets",
      "Transfer Certificate from last institution",
      "Community Certificate (if applicable)",
      "Aadhaar Card (self-attested copy)",
      "8 Passport-size Photographs",
      "Medical Fitness Certificate",
      "No-Objection Certificate (NOC) — if currently employed",
    ],
    // N-11. These are the TYPICAL cycle months, not a confirmed 2026-27 schedule. The official
    // site publishes no M.Sc Nursing timeline today (checked live 2026-08-27, Courses.aspx?cid=13
    // returns navigation only), so labelling them as confirmed dates would be inventing them.
    // They are marked "typical" and the reader is sent to the source instead.
    dates: [
      { label: "Application opens", date: "April (typical cycle)" },
      { label: "Entrance exam", date: "June (typical cycle)" },
      { label: "Results", date: "July (typical cycle)" },
      { label: "Counselling", date: "August (typical cycle)" },
      { label: "Confirmed 2026-27 schedule", date: "Published at tnmedicalselection.net  -  confirm there before you plan" },
      { label: "Management quota at JKKN", date: "Open  -  apply through the admission office" },
    ],
    specializations: [
      "Medical-Surgical Nursing",
      "Child Health (Paediatric) Nursing",
      "Obstetrics & Gynaecological Nursing",
      "Psychiatric / Mental Health Nursing",
      "Community Health Nursing",
    ],
    career: [
      "Nursing Tutor / Lecturer / Professor in nursing colleges (INC + TNMGRMU recognized)",
      "Nurse Manager / Clinical Coordinator at corporate hospitals",
      "Nurse Practitioner / Specialty Nurse — ICU, NICU, Oncology, Cardiology, Dialysis",
      "Nurse Researcher — clinical trials, public health, government health programs",
      "International faculty / clinical roles in UK, Canada, Australia (with licensure)",
      "Higher studies — M.Phil, Ph.D in Nursing, Hospital Administration",
    ],
    whyThis: [
      { title: "5 Specializations Under One Roof", desc: "Choose from Medical-Surgical, Child Health, OBG, Psychiatric, or Community Health — all with dedicated senior learners." },
      { title: "Research & Thesis Mentorship", desc: "Guided dissertation with publication support and ethical clearance via JKKN Research Committee." },
      { title: "Clinical Practice + Teaching Exposure", desc: "Dual training — clinical postings in JKKN Hospital plus teaching experience in undergraduate programs." },
    ],
    faqs: [
      { q: "What is the eligibility for M.Sc Nursing at JKKN?", a: "Candidates must hold a B.Sc Nursing or Post Basic B.Sc Nursing degree from an INC-recognized institution with a minimum 55% aggregate, valid Registered Nurse (RN) and Registered Midwife (RM) registration, and at least one year of clinical experience after registration." },
      { q: "Is there an entrance exam for M.Sc Nursing?", a: "Yes. Candidates must qualify in the Tamil Nadu M.Sc Nursing Entrance Examination conducted by the Directorate of Medical Education (DME), Tamil Nadu. It is typically held in June, but the Selection Committee publishes no M.Sc Nursing schedule for 2026-27 on its site as of 27 August 2026 - confirm the date at tnmedicalselection.net before you plan." },
      { q: "What specializations are offered in M.Sc Nursing at JKKN?", a: "JKKN offers 5 M.Sc Nursing specializations: Medical-Surgical Nursing, Child Health (Paediatric) Nursing, Obstetrics & Gynaecological Nursing, Psychiatric/Mental Health Nursing, and Community Health Nursing. Each has 5 seats." },
      { q: "What is the M.Sc Nursing fee structure?", a: "Management Quota tuition fees range from ₹75,000 to ₹1,00,000 per year. Government Quota fees are as per TN Govt norms. Hostel, examination, thesis, and clinical kit are billed separately." },
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
    seats: "30 Seats",
    feeShort: "₹65,000/yr (MQ)",
    feeDetailed: [
      { label: "Tuition Fee (Management Quota)", value: "₹65,000 / year" },
      { label: "Government Quota Fee", value: "As per TN Govt norms" },
      { label: "Hostel + Mess (optional)", value: "₹65,000 – ₹85,000 / year" },
      { label: "University Examination Fee", value: "₹15,000 / year" },
      { label: "Lab & Clinical Kit (one-time)", value: "₹6,000" },
      { label: "Uniform & ID (one-time)", value: "₹5,000" },
    ],
    intake: "September 2026",
    ageLimit: "No upper age limit · Minimum 1 year work experience after GNM",
    eligibility: [
      "10+2 pass (any stream) OR 10th + GNM diploma",
      "GNM (General Nursing & Midwifery) diploma from an INC-recognized institution",
      "Valid Registered Nurse (RN) & Registered Midwife (RM) registration with State Nursing Council",
      "Minimum 1 year of work experience after GNM registration (preferred)",
      "Medical fitness certificate",
    ],
    entranceExam:
      "No separate entrance exam at the institutional level. Merit-based admission via Tamil Nadu state counselling for Government Quota seats.",
    reservation:
      "Reservation as per Tamil Nadu government policy. Working nurses in government service may apply under in-service quota.",
    process: [
      { title: "Check Eligibility", desc: "Verify GNM diploma, RN/RM registration, and minimum 1 year work experience." },
      { title: "Apply Online", desc: "Complete the application form at jkkn.ai/apply/jkkn-admission-2026." },
      { title: "Submit Documents", desc: "Upload GNM certificate, RN/RM registration, experience certificate, and academic records." },
      { title: "Merit List & Counselling", desc: "Counselling based on GNM aggregate marks — for both Govt and Management Quota." },
      { title: "Document Verification", desc: "Carry originals for verification at the JKKN admissions office on the allotted date." },
      { title: "Fee Payment & Joining", desc: "Pay fees, receive admission letter, and report on the course start date." },
    ],
    documents: [
      "GNM Diploma Certificate — Original + 3 copies",
      "GNM Consolidated Mark Sheet",
      "RN & RM Registration Certificate",
      "Experience Certificate (minimum 1 year)",
      "10th and 12th Mark Sheets (or 10th + GNM equivalent)",
      "Transfer Certificate from last institution",
      "Community Certificate (if applicable)",
      "Nativity Certificate (Tamil Nadu domicile, if applicable)",
      "Aadhaar Card (self-attested copy)",
      "8 Passport-size Photographs",
      "Medical Fitness Certificate",
      "NOC from employer (if currently working)",
    ],
    // N-11. Same rule as M.Sc above - typical cycle months, not a confirmed schedule. No Post
    // Basic B.Sc Nursing timeline is published on the official site today (checked live
    // 2026-08-27, Courses.aspx?cid=9 returns navigation only).
    dates: [
      { label: "Application opens", date: "April (typical cycle)" },
      { label: "Application deadline", date: "July (typical cycle)" },
      { label: "Merit list", date: "August (typical cycle)" },
      { label: "Counselling", date: "August (typical cycle)" },
      { label: "Confirmed 2026-27 schedule", date: "Published at tnmedicalselection.net  -  confirm there before you plan" },
      { label: "Management quota at JKKN", date: "Open  -  apply through the admission office" },
    ],
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
      { q: "Who is eligible for Post Basic B.Sc Nursing?", a: "GNM diploma holders from INC-recognized institutions with valid RN and RM registration with the State Nursing Council, and preferably 1 year of post-GNM work experience are eligible. Candidates also need 10+2 (any stream) or 10th + GNM equivalent." },
      { q: "Is there an entrance exam for Post Basic B.Sc Nursing?", a: "No. Admission is merit-based on GNM aggregate marks. Government Quota seats are filled via Tamil Nadu state counselling, and Management Quota seats are filled directly by JKKN based on GNM merit." },
      { q: "What is the Post Basic B.Sc Nursing fee at JKKN?", a: "Management Quota tuition is ₹65,000 per year. Government Quota fees are as per Tamil Nadu government norms. Hostel, examination, and uniform fees are billed separately." },
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
