import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

// 2026-10-29. Every fact on this page was read on the body's own portal or document on
// 29-10-2026 and carries that source next to it (official-data report, Desktop
// nursing-official-data-for-site-2026-10-29.html). Not on this page on purpose, until
// the office confirms them: year of establishment (site 2006 vs AISHE 2007), AISHE
// management type, the seat matrix "Minority" mark, NAAC validity end date, B.Sc / Post
// Basic government-quota fees.

const SITE = "https://nursing.sresakthimayeil.jkkn.ac.in";
const INC_LIST = "https://online.indiannursingcouncil.org/Reports/YearlyReportByState.aspx";
const TNMGRMU_BSC = "https://www.tnmgrmu.ac.in/wp-content/uploads/2026/10/Updated-BSCN-Colleges-2026-2027-10.10.2026.pdf";
const TNMGRMU_PB = "https://www.tnmgrmu.ac.in/wp-content/uploads/2025/12/Post-Basic-BSC-Nursing-2023.pdf";
const TNMGRMU_MSC = "https://www.tnmgrmu.ac.in/wp-content/uploads/2025/12/MSC-Nursing-2025-26.pdf";
const NAAC_LIST = "https://www.naac.gov.in/images/docs/ACCREDITATION_STATUS/Institutions_accredited_by_NAAC_having_valid_accreditation-as_on_14082025_1.xlsx";
const AISHE_DIR = "https://dashboard.aishe.gov.in/hedirectory/";
const MSC_PROSPECTUS = "https://stgaccbarathi.blob.core.windows.net/docs/pgahslist/02102026120401.pdf";
const NIRF_PDF = "/pdf/SRESAKTHIMAYEIL.pdf";

const facts: { k: string; v: string; src: string }[] = [
  { k: "Official name", v: "Sresakthimayeil Institute of Nursing and Research (JKKN College of Nursing and Research)", src: "INC; TNMGRMU; NAAC" },
  { k: "Run by", v: "J K K Rangammal Charitable Trust (private)", src: "INC list 2026-2027" },
  { k: "Address", v: "NH-544, Natarajapuram, Komarapalayam, Namakkal district, Tamil Nadu 638183", src: "NAAC list" },
  { k: "Indian Nursing Council", v: "Found suitable for the academic year 2026-2027 (Sections 13 and 14, INC Act)", src: "INC list 2026-2027" },
  { k: "Annual intake", v: "B.Sc Nursing 60 | M.Sc Nursing 25 (5 in each of 5 specialities) | Post Basic B.Sc Nursing 50", src: "INC list 2026-2027" },
  { k: "University", v: "The Tamil Nadu Dr. M.G.R. Medical University, Chennai - institution code 262", src: "TNMGRMU list, 10.10.2026" },
  { k: "State council", v: "Tamil Nadu Nurses and Midwives Council (\"INC & TNN&MC\")", src: "TNMGRMU list, 10.10.2026" },
  { k: "NAAC", v: "B++ (CGPA 2.79), first cycle, declared 05-09-2024", src: "NAAC list as on 14-08-2025" },
  { k: "AISHE code", v: "C-45803", src: "AISHE directory" },
  { k: "Placement, UG 2024-25", v: "58 of 59 placed; median salary Rs 3,60,000", src: "NIRF 2026 data submitted by the college" },
  { k: "M.Sc government-quota tuition 2026-27", v: "Rs 75,000 per year (self-financing colleges)", src: "TN M.Sc (Nursing) prospectus 2026-27" },
];

const faqs: { q: string; voice: string; a: string }[] = [
  {
    q: "Is JKKN College of Nursing and Research approved by INC?",
    voice: "JKKN nursing college INC approved ah?",
    a: "Yes. The Indian Nursing Council's list for the academic year 2026-2027 includes Sresakthimayeil Institute of Nursing and Research (JKKN College of Nursing and Research), Kumarapalayam, Namakkal, as found suitable after inspection under Sections 13 and 14 of the INC Act, with 60 B.Sc Nursing, 25 M.Sc Nursing and 50 Post Basic B.Sc Nursing seats.",
  },
  {
    q: "Which university is JKKN College of Nursing affiliated to?",
    voice: "JKKN nursing endha university kitta affiliated?",
    a: "JKKN College of Nursing and Research is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai. The university lists it as Sresakthimayeil Institute of Nursing and Research, institution code 262, in its B.Sc Nursing affiliated colleges list for 2026-2027, updated on 10 October 2026, with 60 sanctioned seats.",
  },
  {
    q: "How many seats does JKKN College of Nursing have?",
    voice: "JKKN la B.Sc nursing ku evlo seats irukku?",
    a: "The Indian Nursing Council's 2026-2027 list shows an annual intake of 60 for B.Sc Nursing, 25 for M.Sc Nursing (5 in each of five specialities) and 50 for Post Basic B.Sc Nursing at JKKN College of Nursing and Research, listed as Sresakthimayeil Institute of Nursing and Research, Namakkal district.",
  },
  {
    q: "What is the NAAC grade of JKKN College of Nursing?",
    voice: "JKKN nursing college NAAC grade enna?",
    a: "JKKN College of Nursing and Research is accredited by NAAC with grade B++ and a CGPA of 2.79 in its first cycle, declared on 5 September 2024. NAAC's list of institutions with valid accreditation as on 14 August 2025 shows it under its registered name, Sresakthimayeil Institute of Nursing and Research.",
  },
  {
    q: "Is there an entrance exam for M.Sc Nursing government-quota seats in Tamil Nadu?",
    voice: "M.Sc nursing ku entrance exam irukka?",
    a: "No entrance test is named in the 2026-2027 Tamil Nadu M.Sc Nursing prospectus. Government-quota seats are filled by counselling from a merit list: 90 marks for B.Sc Nursing results and 10 for experience. Candidates need 55% (50% for SC/SCA/ST); tuition for these seats at self-financing colleges such as JKKN is Rs 75,000 a year.",
  },
];

function Source({ body, href, asOn }: { body: string; href: string; asOn: string }) {
  return (
    <p className="text-xs sm:text-sm text-gray-500 mt-2 break-words">
      Source: {body},{" "}
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#006837] underline">
        {href.replace(/^https?:\/\//, "")}
      </a>
      , as on {asOn}
    </p>
  );
}

const h2 = "text-xl sm:text-2xl font-bold text-[#002309] mb-3";
const p = "text-gray-700 text-base lg:text-lg leading-relaxed";
const card = "bg-white rounded-2xl p-5 sm:p-6 shadow-sm";

export default function Affiliation() {
  return (
    <>
      <Header />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE}/` },
          { name: "Affiliation, Approvals & Official Data", url: `${SITE}/affiliation` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <main className="bg-[#FBFBEE] min-h-[60vh] pt-20">
        <div className="bg-[#FBFBEE] py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px] space-y-8">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#002309] mb-4">
                Affiliation, Approvals &amp; Official Data
              </h1>
              <p className={p}>
                JKKN College of Nursing and Research (Sresakthimayeil Institute of Nursing and Research), Kumarapalayam,
                Namakkal, is affiliated to The Tamil Nadu Dr. M.G.R. Medical University (code 262), found suitable by the
                Indian Nursing Council for 2026-2027, recognised by the Tamil Nadu Nurses and Midwives Council and
                accredited by NAAC with grade B++.
              </p>
            </div>

            <section className={card} aria-labelledby="key-facts">
              <h2 id="key-facts" className={h2}>Key facts</h2>
              <dl className="divide-y divide-gray-100">
                {facts.map((f) => (
                  <div key={f.k} className="py-3 grid grid-cols-1 sm:grid-cols-[14rem_1fr] gap-1 sm:gap-4">
                    <dt className="font-semibold text-[#006837]">{f.k}</dt>
                    <dd className="text-gray-700 break-words">
                      {f.v} <span className="block text-xs text-gray-500">Source: {f.src}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className={card}>
              <h2 className={h2}>Indian Nursing Council (INC)</h2>
              <p className={p}>
                The Indian Nursing Council lists Sresakthimayeil Institute of Nursing and Research (JKKN College of
                Nursing and Research), NH-544, Kumarapalayam, Namakkal 638183, run by J K K Rangammal Charitable Trust,
                among the institutions inspected under Sections 13 and 14 of the INC Act and found suitable for the
                academic year 2026-2027. Annual intake: B.Sc (Nursing) 60, M.Sc (Nursing) 25 (5 in each speciality),
                Post Basic B.Sc (Nursing) 50.
              </p>
              <Source
                body="Indian Nursing Council, list of institutions found suitable, Academic Year 2026-2027 (Tamilnadu, Namakkal)"
                href={INC_LIST}
                asOn="29 October 2026"
              />
            </section>

            <section className={card}>
              <h2 className={h2}>Affiliation</h2>
              <p className={p}>
                The college is affiliated to The Tamil Nadu Dr. M.G.R. Medical University, Chennai, as institution code
                262. The university&apos;s B.Sc. Nursing list for 2026-2027 shows a sanctioned intake of 60, approving
                bodies &quot;INC &amp; TNN&amp;MC&quot;, year of PA issued 2007-08 and affiliation status &quot;CCPA
                2025-26&quot; (as printed).
              </p>
              <Source
                body="The Tamil Nadu Dr. M.G.R. Medical University, B.Sc. Nursing affiliated colleges 2026-2027 (updated 10.10.2026)"
                href={TNMGRMU_BSC}
                asOn="10 October 2026"
              />
            </section>

            <section className={card}>
              <h2 className={h2}>Tamil Nadu Nurses and Midwives Council</h2>
              <p className={p}>
                The college is recognised by the Tamil Nadu Nurses and Midwives Council, as recorded against institution
                code 262 in the university&apos;s 2026-2027 affiliated list (&quot;INC &amp; TNN&amp;MC&quot;).
              </p>
              <Source
                body="The Tamil Nadu Dr. M.G.R. Medical University, B.Sc. Nursing affiliated colleges 2026-2027"
                href={TNMGRMU_BSC}
                asOn="10 October 2026"
              />
            </section>

            <section className={card}>
              <h2 className={h2}>NAAC</h2>
              <p className={p}>
                Accredited by the National Assessment and Accreditation Council with grade B++ (CGPA 2.79) in the first
                cycle; result declared on 5 September 2024.
              </p>
              <Source body="NAAC, institutions having valid accreditation as on 14-08-2025" href={NAAC_LIST} asOn="14 August 2025" />
            </section>

            <section className={card}>
              <h2 className={h2}>AISHE</h2>
              <p className={p}>
                AISHE code: <strong>C-45803</strong> (All India Survey on Higher Education, Ministry of Education).
              </p>
              <Source body="AISHE Higher Education Institution Directory" href={AISHE_DIR} asOn="29 October 2026" />
            </section>

            <section className={card}>
              <h2 className={h2}>Sanctioned intake</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm sm:text-base border-collapse">
                  <thead>
                    <tr className="bg-[#006837] text-white">
                      <th className="p-3">Programme</th>
                      <th className="p-3">Annual intake</th>
                      <th className="p-3">Official list</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium">B.Sc (Nursing)</td>
                      <td className="p-3">60</td>
                      <td className="p-3">INC 2026-2027; TNMGRMU 2026-2027 (10.10.2026)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium">M.Sc (Nursing)</td>
                      <td className="p-3">
                        25 - Medical-Surgical 5, Paediatric 5, Obstetrics &amp; Gynaecology 5, Community Health 5,
                        Psychiatric 5
                      </td>
                      <td className="p-3">
                        INC 2026-2027;{" "}
                        <a href={TNMGRMU_MSC} target="_blank" rel="noopener noreferrer" className="text-[#006837] underline">
                          TNMGRMU M.Sc list
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Post Basic B.Sc (Nursing)</td>
                      <td className="p-3">50</td>
                      <td className="p-3">
                        INC 2026-2027;{" "}
                        <a href={TNMGRMU_PB} target="_blank" rel="noopener noreferrer" className="text-[#006837] underline">
                          TNMGRMU Post Basic list
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Source
                body="Indian Nursing Council (AY 2026-2027) and The Tamil Nadu Dr. M.G.R. Medical University affiliated lists"
                href={INC_LIST}
                asOn="29 October 2026"
              />
            </section>

            <section className={card}>
              <h2 className={h2}>Placement and M.Sc government-quota tuition</h2>
              <p className={p}>
                UG 2024-25: 58 of 59 graduating students placed, median salary Rs 3,60,000 - from the{" "}
                <a href={NIRF_PDF} className="text-[#006837] underline">NIRF 2026 data submitted by the college</a>. M.Sc
                (Nursing) government-quota tuition in self-financing colleges is Rs 75,000 per year.
              </p>
              <Source
                body="Selection Committee, Directorate of Medical Education and Research, Tamil Nadu - Prospectus for M.Sc. (Nursing) 2026-2027, G.O.(D) No.1113, dated 30.09.2026"
                href={MSC_PROSPECTUS}
                asOn="2 October 2026"
              />
            </section>

            <section className={card} aria-labelledby="faq">
              <h2 id="faq" className={h2}>Frequently asked questions</h2>
              <div className="divide-y divide-gray-100">
                {faqs.map((f) => (
                  <div key={f.q} className="py-4">
                    <h3 className="font-semibold text-[#002309] text-base sm:text-lg">{f.q}</h3>
                    <p className="text-xs text-gray-500 italic mt-1">Also asked: {f.voice}</p>
                    <p className="text-gray-700 mt-2 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
