/**
 * B.Sc Nursing colleges affiliated to The Tamil Nadu Dr. M.G.R. Medical University,
 * academic year 2026-2027. Source: the university's own affiliated-colleges list
 * dated 03.08.2026 (284 institutions statewide).
 *
 * District is taken from the address the university itself publishes, not from a
 * keyword match on the college name. That distinction is not pedantic: the list
 * contains "Annai College of Nursing, Salem Main Road, Harur - 636 903 Dharmapuri
 * District", which a search for "Salem" picks up and which is a Dharmapuri college.
 * Counting it gave 18 colleges / 1,220 seats for Salem; the real figures are 17 and
 * 1,170. Every row below was read off the published address one at a time.
 *
 * Seats are the sanctioned intake column. Where the university notes an increase for
 * 2025-2026, the column value is the post-increase number and is what appears here.
 */

export type NursingCollege = {
  /** institution code as printed by the university */
  code: string;
  name: string;
  /** town or taluk, as published */
  place: string;
  /** sanctioned B.Sc Nursing intake */
  seats: number;
  government?: true;
};

export type DistrictList = {
  district: string;
  colleges: NursingCollege[];
  /** total sanctioned B.Sc Nursing seats in the district */
  seats: number;
  governmentCount: number;
};

/** Source document, quoted wherever these numbers are shown. */
export const TNMGRMU_SOURCE = {
  label:
    "The Tamil Nadu Dr. M.G.R. Medical University, B.Sc Nursing affiliated colleges 2026-2027 (list dated 03.08.2026)",
  academicYear: "2026-2027",
  dated: "03.08.2026",
} as const;

const SALEM: NursingCollege[] = [
  { code: "976", name: "Kailash Nursing College", place: "Tharamangalam", seats: 50 },
  { code: "619", name: "Kamala College of Nursing", place: "Salem", seats: 40 },
  { code: "909", name: "Mahendra College of Nursing", place: "Valappadi", seats: 60 },
  { code: "158", name: "Shanmuga College of Nursing", place: "Salem", seats: 60 },
  { code: "334", name: "Shri Bharani College of Nursing", place: "Salem", seats: 50 },
  { code: "959", name: "S.K.S. College of Nursing", place: "Panamarathupatty", seats: 60 },
  {
    code: "591",
    name: "SPC Institute of Nursing Education and Research",
    place: "Achankuttapatti",
    seats: 100,
  },
  { code: "217", name: "Sri Gokulam College of Nursing", place: "Neikarapatti", seats: 100 },
  {
    code: "620",
    name: "Sri Krishna Institute of Nursing Education and Research",
    place: "Omalur",
    seats: 50,
  },
  {
    code: "751",
    name: "Sri Shanmugha College of Nursing For Women",
    place: "Sankari",
    seats: 100,
  },
  { code: "478", name: "St. Bonnie White College of Nursing", place: "Paruthikadu", seats: 50 },
  { code: "965", name: "Tagore College of Nursing", place: "Thalaivasal", seats: 60 },
  {
    code: "938",
    name: "Tharamangalam Sengunthar College of Nursing",
    place: "Tharamangalam",
    seats: 60,
  },
  { code: "882", name: "The Kaavery Nursing College", place: "Mecheri, Mettur", seats: 60 },
  { code: "789", name: "Dharan Nursing College", place: "Nilavarapatti", seats: 100 },
  {
    code: "235",
    name: "Vivekananda Nursing College For Women",
    place: "Veerachipalayam, Sankari",
    seats: 100,
  },
  {
    code: "401",
    name: "College of Nursing, Government Mohan Kumaramangalam Medical College",
    place: "Salem",
    seats: 70,
    government: true,
  },
];

const ERODE: NursingCollege[] = [
  { code: "987", name: "Bhavani College of Nursing", place: "Bhavani", seats: 50 },
  {
    code: "216",
    name:
      "College of Nursing, Dharmarathnakara Dr. Mahalingam Institute of Paramedical Sciences and Research",
    place: "Sakthi Nagar, Bhavani",
    seats: 50,
  },
  { code: "261", name: "Nandha College of Nursing", place: "Pitchandampalayam", seats: 100 },
  {
    code: "788",
    name: "Shree Venkateshwara College of Nursing",
    place: "Gobichettipalayam",
    seats: 100,
  },
  {
    code: "1065",
    name: "Sri Sai Sindhu College of Nursing",
    place: "Kolappalur, Gobichettipalayam",
    seats: 60,
  },
  { code: "1048", name: "SSM College of Nursing", place: "Jambai, Bhavani", seats: 60 },
  { code: "321", name: "Vellalar College of Nursing", place: "Thindal", seats: 60 },
];

function build(district: string, colleges: NursingCollege[]): DistrictList {
  const sorted = [...colleges].sort((a, b) => a.name.localeCompare(b.name, "en"));
  return {
    district,
    colleges: sorted,
    seats: sorted.reduce((t, c) => t + c.seats, 0),
    governmentCount: sorted.filter((c) => c.government).length,
  };
}

/** 17 colleges, 1,170 sanctioned seats, 1 government. */
export const SALEM_BSCN = build("Salem", SALEM);

/** 7 colleges, 480 sanctioned seats, none government. */
export const ERODE_BSCN = build("Erode", ERODE);
