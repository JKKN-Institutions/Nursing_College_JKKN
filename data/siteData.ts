export interface SubmenuItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}

export interface NavItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}

export const siteData = {
  institutionName: "Sresakthimayeil Institute of Nursing and Research",
  tagline: "Best Innovation Focused Multi-Disciplinary Campus",
  contact: {
    phone: "+91 93458 55001",
    email: "nursing@jkkn.ac.in",
    address: "Sresakthimayeil Institute of Nursing and Research, Natarajapuram, NH-544 (Salem To Coimbatore National Highway), Komarapalayam (TK), Namakkal (DT). Tamil Nadu. 638183.",
  },
  socialMedia: {
    facebook: "https://www.facebook.com/jkknnursing",
    instagram: "https://www.instagram.com/jkknnursing",
    linkedin: "https://www.linkedin.com/school/jkknnursing",
    youtube: "https://www.youtube.com/playlist?list=PL6QsTq-__HhteTB3-dqN_8hzc7EKycZnY",
  },
  accreditations: [
    "A+ Grade by NAAC",
    "B++ Grade by ARIIA",
  ],
  aboutText: `J.K.K.Nattraja Group of Educational Institutions runs many colleges of excellence, having 57 years of experience in the field of educational service. The Founder, SHRI.J.K.K.NATTARAJAH, first established girls' school in the year 1963 and J.K.K.Rangammal charitable trust in the year 1959 & later started with dental, pharmacy, nursing, aided engineering school, and matriculation schools with a clear mandate to provide quality education in all fields of education for the welfare of women, poor & downtrodden in this rural area. His work is successfully carried by his daughter SHRIMATHI N.SENDAMARAAI, who established engineering, nursing & education colleges for the welfare of both genders.`,
};

export const navigationMenu = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    href: "#",
    submenu: [
      { label: "Vision and Mission", href: "/vision-mission" },
      { label: "Our Trust", href: "/our-trust" },
      { label: "Our Management", href: "/our-management" },
      { label: "Our Institutions", href: "/our-institutions" },
      { label: "Affiliation", href: "/affiliation" },
      { label: "ARIIA", href: "/ariia" },
      { label: "AISHE", href: "/aishe" },
      { label: "IIC", href: "/iic" },
    ],
  },
  {
    label: "COURSES OFFERED",
    href: "#",
    submenu: [
      { label: "B.Sc., (Nursing)", href: "/bsc-nursing" },
      { label: "P.B.Sc., (Nursing)", href: "/pbsc-nursing" },
      {
        label: "M.Sc., (Nursing)",
        href: "/msc-nursing",
        submenu: [
          { label: "Medical – Surgical Nursing", href: "/course-msc-medical-surgical" },
          { label: "Child Health Nursing", href: "/course-msc-child-health" },
          { label: "Community Health Nursing", href: "/course-msc-community-health" },
          { label: "Obstetrics & Gynecological Nursing", href: "/course-msc-obstetrics-gynecological" },
          { label: "Mental Health Nursing", href: "/course-msc-mental-health" },
        ]
      },
    ],
  },
  {
    label: "ADMISSIONS",
    href: "#",
    submenu: [
      { label: "How to Apply", href: "/admissions" },
      { label: "Fee Structure", href: "/fee-structure" },
      { label: "Fees Refund Policy", href: "/fees-refund-policy" },
    ],
  },
  {
    label: "PLACEMENT",
    href: "/placement",
  },
  {
    label: "GALLERY",
    href: "/gallery",
  },
  {
    label: "FACILITIES",
    href: "#",
    submenu: [
      { label: "Library", href: "/library" },
      { label: "Laboratories", href: "/laboratories" },
      { label: "Food Court", href: "/food-court" },
      { label: "Hostel", href: "/hostel" },
      { label: "Transport", href: "/transport" },
      { label: "Classroom", href: "/classroom" },
      { label: "Clinical / Hospital Facilities", href: "/clinical-hospital" },
      { label: "Community Facilities", href: "/community-facilities" },
      { label: "Sports", href: "/sports" },
      { label: "Wifi", href: "/wifi" },
      { label: "Bank & Post Office", href: "/bank-post" },
    ],
  },
  {
    label: "MANDATORY DISCLOSURES",
    href: "#",
    submenu: [
      { label: "UGC PUBLIC DISCLOSURE COMPLIANCE", href: "/ugc-compliance" },
      { label: "Public Self disclosure", href: "/public-self-disclosure" },
      { label: "LETTER OF UNDERTAKING", href: "/letter-of-undertaking" },
    ],
  },
  {
    label: "OTHERS",
    href: "#",
    submenu: [
      { label: "Blog", href: "/blog" },
      { label: "NIRF", href: "/nirf-others" },
      { label: "Digital Campus", href: "https://jkkn.ac.in/digital-campus" },
      { label: "Academic Calendar", href: "/academic-calendar" },
      { label: "Best practice", href: "/best-practice" },
      { label: "CODE OF CONDUCT", href: "/code-of-conduct" },
      { label: "IQAC", href: "/iqac" },
      { label: "Institutional Distinctiveness", href: "/institutional-distinctiveness" },
      { label: "NAAC", href: "/naac" },
      { label: "Curriculum/Syllabus", href: "/curriculum-syllabus" },
      { label: "Add On Course", href: "/add-on-course" },
      { label: "Value Added Course Website Link", href: "/value-added-course" },
      { label: "YRC", href: "/yrc" },
      { label: "NSS", href: "/nss" },
      {
        label: "Discipline",
        href: "#",
        submenu: [
          { label: "General Discipline", href: "/general-discipline" },
          { label: "Grievance Redressal Committee", href: "/grievance-redressal" },
          { label: "Anti Sexual Harassment Cell", href: "/anti-sexual-harassment" },
          { label: "Anti Ragging Cell", href: "/anti-ragging-discipline" },
        ]
      },
      { label: "Activities", href: "/activities" },
      { label: "Committee", href: "/committee-page" },
      { label: "Antiragging", href: "/antiragging" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Alumni", href: "https://alumni.jkkn.ac.in/login" },
      { label: "Faculty Details", href: "/faculty-details" },
      { label: "E- CONTENT", href: "/e-content" },
      { label: "Feedback Analysis and Action Taken", href: "/feedback-analysis" },
    ],
  },
  {
    label: "COMMITTEE",
    href: "#",
    submenu: [
      { label: "Anti Ragging Committee", href: "/anti-ragging-committee" },
      { label: "Student Grievance Redressal Committee (SGRC)", href: "/sgrc" },
      { label: "INTERNAL COMPLAINTS COMMITTEE", href: "/internal-complaints-committee" },
    ],
  },
  {
    label: "RESEARCH",
    href: "#",
    submenu: [
      { label: "Research Proposal", href: "/research-proposal" },
      { label: "JOURNAL PUBLICATION", href: "/journal-publication" },
      { label: "Research Committee", href: "/research-committee" },
    ],
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
];

export const heroSlides = [
  {
    id: 1,
    image: "/images/hero/slide1.jpg",
    title: "Sresakthimayeil Institute of Nursing and Research",
    subtitle: "JKKN Educational Institutions",
    buttonText: "Online Admissions 2025-2026",
    buttonLink: "/admissions",
    accreditations: ["A+ NAAC", "B++ ARIIA"],
  },
  {
    id: 2,
    image: "/images/hero/slide2.jpg",
    title: "Excellence in Nursing Education",
    subtitle: "Shaping Future Healthcare Professionals",
    buttonText: "Academic Calendar",
    buttonLink: "/academic-calendar",
  },
  {
    id: 3,
    image: "/images/hero/slide3.jpg",
    title: "State-of-the-Art Facilities",
    subtitle: "Modern Infrastructure for Quality Learning",
    buttonText: "Explore Our Campus",
    buttonLink: "/facilities",
  },
];

export const announcements = [
  {
    id: 1,
    title: "JKKN College Of Nursing & Research –B.SC.,(Nursing),M.SC.,P.B.B.SC.,(Nursing) admissions open apply now!",
    date: "June 23, 2023",
  },
  {
    id: 2,
    title: "Orientation Program for New Students - 2025 Batch",
    date: "August 1, 2025",
  },
  {
    id: 3,
    title: "Online Admissions 2025-2026 - Apply Now for B.Sc., P.B.B.Sc., and M.Sc. Nursing Programs",
    date: "January 15, 2025",
  },
];

export const courses = [
  {
    id: "bsc-nursing",
    title: "B.SC., (NURSING)",
    duration: "4 years",
    description: "Undergraduate nursing degree program recognized by Indian Nursing Council and affiliated to Dr. MGR Medical University, Chennai.",
    eligibility: "10+2 or equivalent with minimum 45% marks in Physics, Chemistry, and Biology",
    image: "/images/courses/bsc-nursing.jpg",
  },
  {
    id: "pbsc-nursing",
    title: "P.B.B.SC.,(NURSING)",
    duration: "2 years",
    description: "Post-Basic B.Sc. Nursing program for registered nurses to upgrade their qualifications.",
    eligibility: "Completed diploma in General Nursing and Midwifery with registration",
    image: "/images/courses/pbsc-nursing.jpg",
  },
  {
    id: "msc-nursing",
    title: "M.SC., (NURSING)",
    duration: "2 years",
    description: "Postgraduate nursing program with five specializations: Medical-Surgical, Child Health, Community Health, Obstetrics & Gynecological, and Mental Health Nursing.",
    eligibility: "Bachelor's degree in nursing with minimum 55% marks from a recognized university",
    image: "/images/courses/msc-nursing.jpg",
  },
];

export const admissionInfo = [
  {
    id: 1,
    text: "UG and PG 1st year Nursing orientation program reporting of the students in the respective hostel's on/oct 13,2022.",
  },
  {
    id: 2,
    text: "To be eligible for admission to Sresakthimayeil Institute of Nursing and Research & Research, candidates must have completed 10+2 or equivalent with a minimum of 45% marks in the science stream (Physics, Chemistry, and Biology).",
  },
  {
    id: 3,
    text: "For admission to the postgraduate nursing programs, candidates must have completed a bachelor's degree in nursing with a minimum of 55% marks from a recognized university.",
  },
];
