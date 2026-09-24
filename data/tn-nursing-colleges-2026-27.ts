/**
 * Every B.Sc Nursing college affiliated to The Tamil Nadu Dr. M.G.R. Medical University
 * for 2026-2027, grouped by district. Source: the university's own affiliated-colleges
 * list dated 03.08.2026 - 284 institutions statewide.
 *
 * GENERATED FILE - do not hand-edit. Regenerate from the source document instead.
 *
 * District is read off the published address in tiers, strongest evidence first: an
 * explicit "<Name> District" token, then an address ending in a district name, then a
 * small table of towns with one unambiguous district. Anything left over stays
 * UNSTATED and is published as such. That rule exists because the opposite one - match
 * the district name anywhere in the address - filed "Annai College of Nursing, Salem
 * Main Road, Harur ... Dharmapuri District" under Salem, and a wrong district on a live
 * page is a wrong fact about someone else's college.
 *
 * 282 of 284 rows resolve to one of 35 districts.
 */

export type TnCollege = {
  /** institution code as printed by the university */
  code: string;
  name: string;
  /** town or taluk, as published */
  place: string;
  /** sanctioned B.Sc Nursing intake */
  seats: number;
  government?: true;
  /** a caveat the university itself records against this row */
  note?: string;
};

export type TnDistrict = {
  district: string;
  colleges: TnCollege[];
  seats: number;
  governmentCount: number;
};

export const TN_SOURCE = {
  label:
    "The Tamil Nadu Dr. M.G.R. Medical University, B.Sc Nursing affiliated colleges 2026-2027 (list dated 03.08.2026)",
  academicYear: "2026-2027",
  dated: "03.08.2026",
} as const;

const RAW: Array<[string, TnCollege[]]> = [
  ["Chengalpattu", [
    { code: "1047", name: "Chennais Amirta Nursing College", place: "Chengalpattu District", seats: 60 },
    { code: "348", name: "College of Nursing, Chengalpattu Medical College", place: "Chengalpattu", seats: 70, government: true },
    { code: "1057", name: "Dr.Kamakshi College of Nursing", place: "Tambaram", seats: 60 },
    { code: "1051", name: "Jagannath College of Nursing", place: "Chengalpattu", seats: 60 },
  ]],
  ["Chennai", [
    { code: "352", name: "Annai Veilankanni's College of Nursing", place: "Chennai", seats: 60 },
    { code: "128", name: "Apollo College of Nursing", place: "Chennai", seats: 200 },
    { code: "259", name: "Billroth College of Nursing", place: "Chennai", seats: 50 },
    { code: "546", name: "C.S.I. Kalyani College of Nursing", place: "Chennai", seats: 40 },
    { code: "163", name: "College of Nursing, Madras Medical College", place: "Chennai", seats: 100, government: true },
    { code: "551", name: "Hindu Mission College of Nursing", place: "Chennai", seats: 40 },
    { code: "291", name: "M M M College of Nursing", place: "Chennai", seats: 50 },
    { code: "156", name: "Madha College of Nursing", place: "Chennai", seats: 100 },
    { code: "045", name: "Omayal Achi College of Nursing", place: "Chennai", seats: 60 },
    { code: "839", name: "Panimalar College of Nursing", place: "Chennai", seats: 100 },
    { code: "982", name: "Peri College of Nursing", place: "Chennai", seats: 60 },
    { code: "293", name: "Right College of Nursing", place: "Chennai", seats: 50 },
    { code: "317", name: "Shenbagha College of Nursing", place: "Chennai", seats: 50 },
    { code: "335", name: "Sree Sastha College of Nursing", place: "Chennai", seats: 40 },
    { code: "199", name: "St. Isabels College of Nursing", place: "Chennai", seats: 40 },
    { code: "679", name: "Tagore College of Nursing", place: "Chennai", seats: 100 },
    { code: "487", name: "Vee Care College of Nursing", place: "Chennai", seats: 40 },
    { code: "050", name: "VHS-M.A. Chidambaram College of Nursing", place: "Chennai", seats: 60 },
    { code: "888", name: "Vijaya College of Nursing No.323", place: "Chennai", seats: 100 },
  ]],
  ["Coimbatore", [
    { code: "939", name: "AJK College of Nursing", place: "Coimbatore", seats: 60 },
    { code: "1044", name: "AMC College of Nursing Kittampalayam Village", place: "Coimbatore", seats: 60 },
    { code: "102", name: "Annai Meenakshi College of Nursing", place: "Coimbatore", seats: 100 },
    { code: "061", name: "Cherraan`s College of Nursing", place: "Coimbatore", seats: 50 },
    { code: "034", name: "College of Nursing, Sri Ramakrishna Institute of Paramedical Sciences", place: "Coimbatore", seats: 100 },
    { code: "232", name: "Ellen College of Nursing", place: "Coimbatore", seats: 50 },
    { code: "977", name: "Ennam College of Nursing", place: "Coimbatore District", seats: 60 },
    { code: "1098", name: "FIMS College of Nursing", place: "Coimbatore", seats: 60 },
    { code: "333", name: "Ganga College of Nursing", place: "Coimbatore", seats: 100 },
    { code: "332", name: "Gem Institute of Nursing Education and Research", place: "Coimbatore", seats: 60 },
    { code: "805", name: "Hindusthan College of Nursing", place: "Coimbatore District", seats: 60 },
    { code: "052", name: "J.K. College of Nursing and Paramedicals", place: "Coimbatore", seats: 40 },
    { code: "286", name: "Karpagam Nursing College", place: "Coimbatore", seats: 100 },
    { code: "119", name: "KG College of Nursing", place: "Coimbatore", seats: 100 },
    { code: "078", name: "KMCH College of Nursing", place: "Coimatore", seats: 100 },
    { code: "312", name: "Kongunadu College of Nursing", place: "Coimbatore", seats: 100 },
    { code: "1013", name: "Kumaran College of Nursing", place: "Coimbatore", seats: 60 },
    { code: "1097", name: "Muthus College of Nursing and Research Centre", place: "Madukkarai", seats: 60 },
    { code: "964", name: "Nehru College of Nursing and Research Institute", place: "Coimbatore District", seats: 60 },
    { code: "302", name: "Nightingale Institute of Nursing Education", place: "Coimbatore", seats: 60 },
    { code: "154", name: "P.P.G. College of Nursing", place: "Coimbatore", seats: 100 },
    { code: "109", name: "P.S.G. College of Nursing", place: "Coimbatore", seats: 100 },
    { code: "080", name: "R.V.S. College of Nursing", place: "Coimbatore", seats: 50 },
    { code: "996", name: "Royal Care Institute of Nursing", place: "Coimbatore", seats: 100 },
    { code: "388", name: "Royal College of Nursing", place: "Coimbatore", seats: 50 },
    { code: "298", name: "RVS College of Nursing", place: "Coimbatore District", seats: 50 },
    { code: "1042", name: "Sai Institute of Nursing Education Velanthavalam Road", place: "Coimbatore", seats: 60 },
    { code: "1059", name: "Sasurie Collegc of Nursing & Research", place: "Coimbatore", seats: 60 },
    { code: "879", name: "SNS College of Nursing", place: "Coimbatore", seats: 60 },
    { code: "313", name: "Sree Abirami College of Nursing", place: "Coimbatore", seats: 100 },
    { code: "936", name: "Sri Lakshmi College of Nursing", place: "Coimbatore", seats: 60 },
    { code: "1100", name: "Sri Sai Ranganathan Nursing College", place: "Coimbatore", seats: 60 },
    { code: "231", name: "Texcity College of Nursing", place: "Coimbatore", seats: 50 },
    { code: "843", name: "United College of Nursing", place: "Coimbatore", seats: 60 },
  ]],
  ["Cuddalore", [
    { code: "950", name: "Government College of Nursing", place: "Cuddalore", seats: 100, government: true },
    { code: "920", name: "Kamarajar College of Nursing", place: "Cuddalore District", seats: 60 },
    { code: "1118", name: "MRK College of Nursing and Paramedical Education", place: "Cuddalore", seats: 60 },
    { code: "338", name: "O.P.R. Memorial College of Para Medical Sciences", place: "Vadalur", seats: 60 },
  ]],
  ["Dharmapuri", [
    { code: "595", name: "Annai College of Nursing", place: "Harur", seats: 50 },
    { code: "1099", name: "E.R.K. College of Nursing", place: "Dharmapuri District", seats: 60 },
    { code: "978", name: "Mullai College of Nursing", place: "Dharmapuri District", seats: 60 },
    { code: "324", name: "Om Sakthi College of Nursing", place: "Dharmapuri", seats: 100 },
    { code: "815", name: "Pachamuthu College of Nursing", place: "Dhamapuri Disttict", seats: 60 },
    { code: "088", name: "Padmavathi College of Nursing", place: "Dharmapuri", seats: 50 },
    { code: "1056", name: "SLNC College of Nursing", place: "Sclliampatti", seats: 60 },
    { code: "306", name: "Sri Vijay Vidyalaya College of Nursing", place: "Dharmapuri", seats: 60 },
    { code: "296", name: "Srri Paspo College of Nursing", place: "Dharmapuri", seats: 70 },
    { code: "289", name: "Swami Vivekananda College of Nursing", place: "Dharmapuri", seats: 40 },
  ]],
  ["Dindigul", [
    { code: "453", name: "Bhaarath College of Nursing", place: "Palani", seats: 60 },
    { code: "035", name: "Christian College of Nursing", place: "Ambilikkai", seats: 50 },
    { code: "798", name: "Christian Fellowship Hospital", place: "Dindigul", seats: 60 },
    { code: "922", name: "Claudine College of Nursing", place: "Dindigul District", seats: 60 },
    { code: "813", name: "GTN College of Nursing", place: "Dindigul Dist", seats: 100 },
    { code: "229", name: "Jainee College of Nursing", place: "Dindigul", seats: 50 },
    { code: "912", name: "NPR College of Nursing & Research Institute", place: "Dindugul District", seats: 60 },
    { code: "1104", name: "Our Lady College of Nursing Academic block in", place: "Dindigul", seats: 60 },
    { code: "545", name: "Sacred Heart College of Nursing", place: "Dindigul District", seats: 50 },
    { code: "841", name: "Sai Sakthi College of Nursing", place: "Dindigul District", seats: 60 },
    { code: "233", name: "Sakthi College of Nursing", place: "Oddanchatram", seats: 100 },
  ]],
  ["Erode", [
    { code: "987", name: "Bhavani College of Nursing", place: "Erode", seats: 50 },
    { code: "216", name: "College of Nursing, Dharmarathnakara Dr.Mahalingam Inst. of Paramedical Sciences and Research", place: "Sakthi Nagar", seats: 50 },
    { code: "261", name: "Nandha College of Nursing", place: "Erode", seats: 100 },
    { code: "788", name: "Shree Venkateshwara College of Nursing", place: "Gobichettipalayam", seats: 100 },
    { code: "1065", name: "Sri Sai Sindhu College of Nursing", place: "Erode District", seats: 60 },
    { code: "1048", name: "SSM College of Nursing", place: "Bhavani Taluk Erode", seats: 60 },
    { code: "321", name: "Vellalar College of Nursing", place: "Erode", seats: 60 },
  ]],
  ["Kallakurichi", [
    { code: "877", name: "London College of Nursing", place: "Kallakurichi District", seats: 60 },
  ]],
  ["Kancheepuram", [
    { code: "083", name: "Adhiparasakthi College of Nursing", place: "Melmaruvathur", seats: 100 },
    { code: "622", name: "Bon Secours College of Nursing", place: "Kancheepuram", seats: 50 },
    { code: "378", name: "Karpaga Vinayaga College of Nursing", place: "Kancheepuram District", seats: 100 },
    { code: "218", name: "Mohamed Sathak A.J. College of Nursing", place: "Kanchipuram", seats: 50 },
    { code: "287", name: "Padmasree College of Nursing", place: "Kancheepuram", seats: 60 },
    { code: "966", name: "PSP Nursing College", place: "Kancheepuram District", seats: 100 },
    { code: "310", name: "Rajalakshmi College of Nursing", place: "Kancheepuram", seats: 50 },
    { code: "906", name: "Sankara College of Nursing (Women)", place: "Kanchipuram", seats: 60 },
    { code: "295", name: "Sri Santhoshi College of Nursing", place: "Kancheepuram", seats: 60 },
    { code: "238", name: "Venkateswara Nursing College", place: "Thalambur", seats: 60 },
  ]],
  ["Kanyakumari", [
    { code: "308", name: "Annammal College of Nursing", place: "Kuzhithurai", seats: 50 },
    { code: "1018", name: "Ave Maria College of Nursing", place: "Kanyakumari", seats: 60 },
    { code: "937", name: "Bethlahem College of Nursing", place: "Karungal", seats: 60 },
    { code: "1108", name: "C.S.I College of Nursing", place: "Kanyakumari", seats: 60 },
    { code: "507", name: "CET College of Nursing", place: "Rathnapuram", seats: 50 },
    { code: "187", name: "Christian College of Nursing", place: "Neyoor", seats: 100 },
    { code: "979", name: "Cross College of Nursing", place: "Nagercoil", seats: 50 },
    { code: "550", name: "CSI College of Nursing", place: "Marthandam", seats: 50 },
    { code: "725", name: "Dr. Jeyasekharan College of Nursing", place: "Nagarcoil", seats: 60 },
    { code: "463", name: "Dr. Kumaraswami Health Centre College of Nursing", place: "Kanyakumari", seats: 50 },
    { code: "311", name: "Global College of Nursing", place: "Kanyakumari District", seats: 100 },
    { code: "538", name: "Grace College of Nursing", place: "Kanyakumari District", seats: 50 },
    { code: "1067", name: "Immanuel Arasar College of Nursing", place: "Kanyakumari District", seats: 60 },
    { code: "842", name: "Maria College of Nursing", place: "Moovattumugam", seats: 60 },
    { code: "301", name: "P.S. College of Nursing", place: "Kanyakumari District", seats: 50 },
    { code: "137", name: "Sree Mookambika College of Nursing", place: "Kulasekaram", seats: 100 },
    { code: "496", name: "Sri Ramakrishna College of Nursing", place: "Kanyakumari", seats: 50 },
    { code: "1058", name: "St. Jude's Nursing College. Annai Nagar", place: "Kanyakumari", seats: 60 },
    { code: "1023", name: "St.Antony’s College of Nursing", place: "Kanyakumari", seats: 60 },
    { code: "239", name: "St.Xavier’s Catholic College of Nursing", place: "Nagercoil", seats: 100 },
    { code: "299", name: "Thasiah College of Nursing", place: "Kanyakumari District", seats: 60 },
    { code: "544", name: "The Salvation Army Catherine Booth College of Nursing", place: "Kanyakumari District", seats: 50 },
    { code: "300", name: "White Memorial College of Nursing", place: "Kanyakumari District", seats: 100 },
  ]],
  ["Karur", [
    { code: "290", name: "Sakthi College of Nursing", place: "Karur", seats: 60 },
    { code: "294", name: "Sri Aurobindo College of Nursing", place: "Karur", seats: 50 },
  ]],
  ["Krishnagiri", [
    { code: "467", name: "Jeeva College of Nursing", place: "Krishnagiri", seats: 100 },
    { code: "974", name: "P.S.V. College of Nursing", place: "Krishnagiri", seats: 100 },
    { code: "968", name: "Sri Vijay Vidyalaya College of Nursing & Research", place: "Krishnagiri", seats: 60 },
    { code: "800", name: "St.Peters Nursing College/School & Research Institute", place: "Hosur", seats: 100 },
  ]],
  ["Madurai", [
    { code: "315", name: "Chithirai College of Nursing", place: "Madurai", seats: 40 },
    { code: "275", name: "College of Nursing, Madurai Medical College", place: "Madurai", seats: 100, government: true },
    { code: "069", name: "CSI. Jeyaraj Annapackiam College of Nursing", place: "Madurai", seats: 60 },
    { code: "1079", name: "EASA College of Nursing", place: "Vadipattin", seats: 60 },
    { code: "1052", name: "Glanis Nursing College", place: "Madurai", seats: 60 },
    { code: "359", name: "Madurai Apollo College of Nursing", place: "Madurai South", seats: 100 },
    { code: "703", name: "Meenakshi College of Nursing", place: "Madurai", seats: 100 },
    { code: "1010", name: "Preethi College of Nursing", place: "Madurai", seats: 60 },
    { code: "055", name: "Sacred Heart Nursing College", place: "Madurai", seats: 60 },
    { code: "1103", name: "Solai College of Nursing T. Chettiapatti Village", place: "Madurai dist", seats: 60 },
    { code: "384", name: "Srinidhi College of Health Services and Research", place: "Madurai", seats: 50 },
    { code: "394", name: "V.V. Vanniaperumal Nursing College For Women", place: "Virudhunagar", seats: 50 },
    { code: "661", name: "Velammal College of Nursing", place: "Madurai", seats: 100 },
    { code: "664", name: "Vikram College of Nursing", place: "Madurai", seats: 60 },
  ]],
  ["Mayiladuthurai", [
    { code: "880", name: "Kalaimahal College of Nursing", place: "Mayiladuthurai District", seats: 60 },
  ]],
  ["Nagapattinam", [
    { code: "693", name: "Andavar College of Nursing", place: "Nagappattinam", seats: 60 },
    { code: "907", name: "E.G.S. Pillay College of Nursing", place: "Nagappattinam", seats: 60 },
    { code: "624", name: "Karthikeyan College of Nursing", place: "Nagapattinam", seats: 30 },
    { code: "733", name: "Sir Issac Newton College of Nursing", place: "Nagapattinam", seats: 100 },
  ]],
  ["Namakkal", [
    { code: "320", name: "Anbu College of Nursing", place: "Komarapalayam", seats: 50 },
    { code: "068", name: "Annai JKK. Sampoorani Ammal College of Nursing", place: "Namakkal", seats: 60 },
    { code: "279", name: "Arvinth College of Nursing", place: "Namakkal", seats: 50 },
    { code: "610", name: "Deepthi College of Nursing", place: "Namakkal", seats: 100 },
    { code: "887", name: "Excel Nursing College", place: "Namakkal", seats: 100 },
    { code: "919", name: "K.S.Rangasamy College of Nursing", place: "Namakkal District", seats: 60 },
    { code: "666", name: "Paavai College of Nursing and Research", place: "Namakkal", seats: 60 },
    { code: "230", name: "PGP. College of Nursing & Research", place: "Namakkal District", seats: 50 },
    { code: "934", name: "Sengunthar College of Nursing", place: "Namakkal District", seats: 60 },
    { code: "262", name: "Sresakthimayeil Institute of Nursing& Research", place: "Namakkal", seats: 60 },
    { code: "1008", name: "Sri Rengeswarar College of Nursing Thuraiyur Main Road", place: "Namakkal", seats: 50 },
    { code: "097", name: "Vivekanandha College of Nursing", place: "Namakkal District", seats: 100 },
  ]],
  ["Nilgiris", [
    { code: "1101", name: "Devamatha College of Nursing Kookalthoorai Post", place: "The Nilgiris", seats: 50 },
  ]],
  ["Perambalur", [
    { code: "227", name: "Dhanalakshmi Srinivasan College of Nursing", place: "Perambalaur", seats: 100 },
    { code: "1064", name: "Dhanalakshmi Srinivasan Nursing College", place: "Perambalur", seats: 100 },
    { code: "479", name: "Srinivasan College of Nursing", place: "Perambalur", seats: 100 },
    { code: "741", name: "Srinivasan Nursing College", place: "Perambalur", seats: 100 },
    { code: "222", name: "Thanthai Roever College of Nursing", place: "Perumbalur", seats: 50 },
  ]],
  ["Pudukkottai", [
    { code: "314", name: "Doctor's College of Nursing", place: "Pudukottai", seats: 60 },
    { code: "288", name: "Karpaga Vinayaga College of Nursing", place: "Pudukkottai", seats: 50 },
    { code: "322", name: "Keerai Thamilselvan College of Nursing", place: "Pudukottai District", seats: 50 },
    { code: "658", name: "Mother Teresa College of Nursing", place: "Pudukkottai District", seats: 100 },
    { code: "331", name: "Mount Zion College of Nursing", place: "Pudukottai District", seats: 50 },
  ]],
  ["Ranipet", [
    { code: "1107", name: "Sandhya College of Nursing at Nandiyalam", place: "Ranipet District", seats: 60 },
    { code: "738", name: "Scudder College of Nursing", place: "Ranipet", seats: 50 },
  ]],
  ["Salem", [
    { code: "401", name: "College of Nursing, Government Mohan Kumaramangalam Medical College", place: "Salem", seats: 70, government: true },
    { code: "789", name: "Dharan Nursing College", place: "Salem", seats: 100 },
    { code: "976", name: "Kailash Nursing College", place: "Salem District", seats: 50 },
    { code: "619", name: "Kamala College of Nursing", place: "Salem", seats: 40 },
    { code: "909", name: "Mahendra College of Nursing", place: "Salem", seats: 60 },
    { code: "959", name: "S.K.S. College of Nursing", place: "Salem District", seats: 60 },
    { code: "158", name: "Shanmuga College of Nursing", place: "Salem", seats: 60 },
    { code: "334", name: "Shri Bharani College of Nursing", place: "Salem", seats: 50 },
    { code: "591", name: "SPC Institute of Nursing Education and Research", place: "Salem", seats: 100 },
    { code: "217", name: "Sri Gokulam College of Nursing", place: "Salem", seats: 100 },
    { code: "620", name: "Sri Krishna Institute of Nursing Education and Research", place: "Salem", seats: 50 },
    { code: "751", name: "Sri Shanmugha College of Nursing For Women", place: "Sankari", seats: 100 },
    { code: "478", name: "St. Bonnie White College of Nursing", place: "Salem", seats: 50 },
    { code: "965", name: "Tagore College of Nursing", place: "Salem District", seats: 60 },
    { code: "938", name: "Tharamangalam Sengunthar College of Nursing", place: "Salem District", seats: 60 },
    { code: "882", name: "The Kaavery Nursing College", place: "Mecheri", seats: 60 },
    { code: "235", name: "Vivekananda Nursing College For Women", place: "Veerachipalayam", seats: 100 },
  ]],
  ["Sivaganga", [
    { code: "872", name: "Alagappa College of Nursing", place: "Karaikudi", seats: 50 },
    { code: "1028", name: "Immaculate College of Nursing", place: "Sivangangai", seats: 50 },
    { code: "096", name: "Matha College of Nursing", place: "Manamadurai", seats: 50 },
    { code: "1080", name: "Orange Tree Institute of Nursing ( Co.Ed)", place: "Sivagangai", seats: 60 },
    { code: "1022", name: "Pranav College of Nursing Academy", place: "Sivagangai", seats: 40 },
    { code: "1106", name: "Raaja Rajan College of Nursing", place: "Sivagangai", seats: 60 },
    { code: "228", name: "Rass Academy College of Nursing", place: "Poovanthi", seats: 60 },
    { code: "1110", name: "Vivekananda Global College of Nursing Tirupattur-Karaikudi Main Road Thenkarai Village", place: "Sivaganga", seats: 60 },
  ]],
  ["Tenkasi", [
    { code: "890", name: "A. R College of Nursing A.R Nagar", place: "Kadayam", seats: 60 },
    { code: "1049", name: "S.Thangapazham College of Nursing", place: "Tenkasi", seats: 60 },
    { code: "1075", name: "St. Mary’s Institute of Nursing", place: "Tenkasi District", seats: 60 },
    { code: "1019", name: "St.Mary's College of Nursing", place: "Tenkasi", seats: 50 },
  ]],
  ["Thanjavur", [
    { code: "807", name: "Annai College of Nursing", place: "Kovilacheri Kumbakonam", seats: 100 },
    { code: "339", name: "Mannai Narayanasamy College of Nursing", place: "Thanjavur", seats: 50 },
    { code: "305", name: "Our Lady of Health College of Nursing", place: "Thanjavur", seats: 100 },
    { code: "323", name: "Sacred Heart College of Nursing", place: "Sakkottai", seats: 50 },
    { code: "392", name: "St. Xavier College of Nursing", place: "Thanjavur District", seats: 100 },
  ]],
  ["Theni", [
    { code: "328", name: "Annai Dora College of Nursing", place: "Aundipatti", seats: 50 },
    { code: "615", name: "College of Nursing, Government Theni Medical College", place: "Theni", seats: 70, government: true },
    { code: "742", name: "N.R.T. College of Nursing", place: "ThenI District", seats: 100 },
    { code: "343", name: "Thiravium College of Nursing", place: "Theni", seats: 60 },
  ]],
  ["Thoothukudi", [
    { code: "504", name: "C.S.I. St.Luke's College of Nursing", place: "Nazareth", seats: 50 },
    { code: "468", name: "Padmashri Dr.Sivanthi Aditanar College of Nursing", place: "Tiruchendur", seats: 60 },
    { code: "991", name: "Parimala College of Nursing", place: "Tuticorin District", seats: 60 },
    { code: "197", name: "St. Ann's College of Nursing", place: "Tuticorin", seats: 50 },
  ]],
  ["Tiruchirappalli", [
    { code: "234", name: "Child Jesus College of Nursing", place: "Tiruchirappalli", seats: 50 },
    { code: "189", name: "Dr.G. Sakunthala College of Nursing", place: "Trichy", seats: 50 },
    { code: "1091", name: "GK College of Nursing", place: "Srirangam", seats: 60 },
    { code: "316", name: "Indira College of Nursing", place: "Trichy", seats: 60 },
    { code: "687", name: "Indra Ganesan College of Nursing", place: "Srirangam", seats: 60 },
    { code: "1027", name: "J.J College of Nursing", place: "Trichy", seats: 50 },
    { code: "457", name: "Jennys College of Nursing", place: "Tiruchirappalli", seats: 60 },
    { code: "553", name: "K M C College of Nursing", place: "Tiruchirapalli", seats: 100 },
    { code: "737", name: "Krishna College of Paramedical and Allied Health Science", place: "Trichy", seats: 60 },
    { code: "993", name: "Mahalakshmi College of Nursing", place: "Trichy", seats: 60 },
    { code: "475", name: "MAM College of Nursing", place: "Tiruchirappalli", seats: 50 },
    { code: "935", name: "Mariamman Nursing College", place: "Trichy District", seats: 60 },
    { code: "326", name: "Nehru College of Nursing", place: "Trichy", seats: 60 },
    { code: "303", name: "Servite College of Nursing", place: "Trichy", seats: 50 },
    { code: "997", name: "Sri Amman College of Nursing", place: "Trichy District", seats: 60 },
    { code: "1020", name: "Srinivasan Institute of Nursing", place: "Trichy", seats: 100 },
    { code: "726", name: "SRM Trichy College of Nursing Aykudi - Village", place: "Tiruchirappalli District", seats: 100 },
  ]],
  ["Tirunelveli", [
    { code: "337", name: "Aladi Aruna College of Nursing Tenkasi-Tirunelveli Highway Road", place: "Tirunelveli", seats: 60 },
    { code: "910", name: "Almighty College of Nursing", place: "Tirunelveli", seats: 60 },
    { code: "304", name: "Annasamy Rajammal College of Nursing", place: "Tirunelveli", seats: 50 },
    { code: "341", name: "CSI Eliza Caldwell College of Nursing", place: "Tirunelveli District", seats: 50 },
    { code: "1053", name: "Einstein College of Nursing", place: "Tirunelveli", seats: 60 },
    { code: "469", name: "Ithaya Jyothi College of Nursing", place: "Tirunelveli", seats: 50 },
    { code: "210", name: "Nehru Nursing College", place: "Vallioor", seats: 50 },
    { code: "1082", name: "PSN College of Nursing", place: "PSN College of Nursing", seats: 60, note: "Sanctioned 60; the university's list records no admission for A.Y 2024-2025" },
    { code: "396", name: "Sardar Rajas College of Nursing", place: "Tirunelveli", seats: 50 },
    { code: "1060", name: "SCAD College of Nursing", place: "TIrunelveli", seats: 60 },
    { code: "386", name: "Sri Balaji College of Nursing", place: "Tirunelveli", seats: 50 },
    { code: "136", name: "Sri K.Ramachandran Naidu College of Nursing", place: "Tirunelveli", seats: 60 },
    { code: "1050", name: "St.John’s College of Nursing", place: "Tirunelveli District", seats: 60 },
    { code: "849", name: "St.Mariam College of Nursing", place: "Tirunelveli District", seats: 60 },
  ]],
  ["Tiruppur", [
    { code: "065", name: "Bishop's College of Nursing", place: "Dharapuram", seats: 50 },
    { code: "340", name: "Maharani Nursing College", place: "Dharapuram", seats: 50 },
    { code: "942", name: "P.S.G. Ponnammaal College of Nursing", place: "Tirupur District", seats: 60 },
    { code: "623", name: "Revathi College of Nursing", place: "Tirupur District", seats: 100 },
    { code: "112", name: "Sara Nursing College", place: "Dharapuram", seats: 50 },
    { code: "1068", name: "Sasurie College of Nursing", place: "Tirupur", seats: 50 },
    { code: "278", name: "Shivparvathi Mandradiar Institute of Health Sciences", place: "Tirupur District", seats: 50 },
  ]],
  ["Tiruvallur", [
    { code: "1001", name: "Dr. MKL Nursing College", place: "Thiruvallur District", seats: 60 },
    { code: "325", name: "G R T College of Nursing G R T Mahalakshmi Nagar", place: "Tiruttani", seats: 60 },
    { code: "237", name: "Indira College of Nursing", place: "Pandur", seats: 100 },
    { code: "481", name: "Sri Devi College of Nursing", place: "Ponneri", seats: 50 },
  ]],
  ["Tiruvannamalai", [
    { code: "344", name: "AAB College of Nursing", place: "Vandavasi", seats: 50 },
    { code: "292", name: "Al- Ameen College of Nursing", place: "Somasipadi", seats: 50 },
    { code: "350", name: "Arunai Institute of Nursing Education and Research", place: "Thiruvannamalai", seats: 100 },
    { code: "1062", name: "Dr. Maria Aschhoff College of Nursing", place: "Tiruvannamalai", seats: 60 },
    { code: "1054", name: "Gandhimathi College of Nursing", place: "Tiruvannamalai", seats: 60 },
    { code: "297", name: "Vignesh Nursing College", place: "Tiruvannamalai", seats: 60 },
  ]],
  ["Tiruvarur", [
    { code: "1012", name: "Bharath College of Nursing", place: "Thiruvarur", seats: 60 },
    { code: "1011", name: "Velammal Meignanaguru College of Nursing", place: "Tiruvarur", seats: 60 },
  ]],
  ["Vellore", [
    { code: "692", name: "A.Dr.Vimal College of Nursing", place: "Pennathur", seats: 50 },
    { code: "366", name: "Arcot Sri Mahalakshmi Women's College of Nursing", place: "Vellore", seats: 50 },
    { code: "342", name: "Arun College of Nursing", place: "Vellore", seats: 100 },
    { code: "871", name: "Atthi Nursing College", place: "Vellore District", seats: 60 },
    { code: "033", name: "College of Nursing, Christian Medical College", place: "Vellore", seats: 100 },
    { code: "236", name: "Sri Narayani College of Nursing", place: "Vellore", seats: 100 },
    { code: "191", name: "St.John's College of Nursing", place: "Vellore", seats: 60 },
    { code: "1055", name: "Vellore Nursing College Pillaiyar Kuppam", place: "Vellore", seats: 100 },
  ]],
  ["Viluppuram", [
    { code: "307", name: "E.S College of Nursing", place: "Villupuram", seats: 100 },
    { code: "801", name: "Mailam Nursing College", place: "Tindivanam", seats: 100 },
    { code: "330", name: "Pauls College of Nursing", place: "Villupuram District", seats: 50 },
    { code: "816", name: "PKB College of Nursing", place: "Villupuram District", seats: 60 },
    { code: "1000", name: "Rangapoopathi Nursing College", place: "Villupuram", seats: 60 },
    { code: "318", name: "Sri Rangapoopathi College of Nursing", place: "Vilupuram District", seats: 100 },
  ]],
  ["Virudhunagar", [
    { code: "878", name: "Rathinaam College of Nursing", place: "Virudhunagar District", seats: 60 },
    { code: "309", name: "Suran College of Nursing", place: "Virudhunagar", seats: 50 },
    { code: "534", name: "V.P.M.M. College of Nursing", place: "Virudhunagar District", seats: 50 },
  ]],
  ["District not stated in the source", [
    { code: "215", name: "Dhanvantri College of Nursing", place: "Pallakkapalayam", seats: 100 },
    { code: "1066", name: "Ponjesly College of nursing", place: "Kaliyankadu Road", seats: 60 },
  ]],
];

export const TN_DISTRICTS: TnDistrict[] = RAW.map(([district, colleges]) => ({
  district,
  colleges,
  seats: colleges.reduce((t, c) => t + c.seats, 0),
  governmentCount: colleges.filter((c) => c.government).length,
}));

/** Totals are derived, never typed in - a headline cannot outlive its own table. */
export const TN_TOTALS = {
  colleges: TN_DISTRICTS.reduce((t, d) => t + d.colleges.length, 0),
  seats: TN_DISTRICTS.reduce((t, d) => t + d.seats, 0),
  government: TN_DISTRICTS.reduce((t, d) => t + d.governmentCount, 0),
  districts: TN_DISTRICTS.filter((d) => d.district !== "District not stated in the source").length,
};
