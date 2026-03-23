"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function NAAC() {
  const [activeSection, setActiveSection] = useState("overview");

  const menuItems = [
    { id: "overview", label: "Over View" },
    { id: "vision", label: "Vision and Mission" },
    { id: "values", label: "Core Values" },
    { id: "assessment", label: "Assessment And Accreditation" },
    { id: "iiqa", label: "IIQA" },
    { id: "ssr", label: "SSR" },
    { id: "undertaking", label: "IIQA- UNDERTAKING" },
    { id: "declaration", label: "IIQA-Self Declaration" },
    { id: "criterion1", label: "Criterion I" },
    { id: "criterion2", label: "Criterion II" },
    { id: "criterion3", label: "Criterion III" },
    { id: "criterion4", label: "Criterion IV" },
    { id: "criterion5", label: "Criterion V" },
    { id: "criterion6", label: "Criterion VI" },
    { id: "criterion7", label: "Criterion VII" },
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "NAAC", url: "https://nursing.sresakthimayeil.jkkn.ac.in/naac" }
      ]} />
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 py-8 lg:py-12">
          {/* Header */}
          <h1 className="text-3xl lg:text-4xl font-bold text-[#0b7845] mb-2">
            OVER VIEW
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">
            IIQA
          </h2>

          {/* Layout with Sidebar and Content */}
          <div className="flex flex-col lg:flex-row gap-0">
            {/* Sidebar */}
            <div className="lg:w-64 flex-shrink-0 mb-8 lg:mb-0">
              <div className="bg-white lg:bg-transparent rounded-lg lg:rounded-none shadow-md lg:shadow-none">
                {menuItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left px-6 py-3 font-semibold transition-colors ${
                      activeSection === item.id
                        ? "bg-[#7ba643] text-white"
                        : "bg-[#8fbc4b] text-white hover:bg-[#7ba643]"
                    } ${index === 0 ? "rounded-t-lg lg:rounded-t-none" : ""} ${
                      index === menuItems.length - 1 ? "rounded-b-lg lg:rounded-b-none" : ""
                    } border-b border-white/20`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 lg:ml-8 bg-white lg:bg-transparent p-6 lg:p-0 rounded-lg lg:rounded-none shadow-md lg:shadow-none">
              {activeSection === "overview" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#0b7845] mb-6">
                    INTRODUCTION
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                    <p>
                      India has one of the largest and most diverse education systems in the world. Privatization, widespread expansion, increased autonomy and introduction of Programmes in new and emerging areas have improved access to higher education. At the same time, it has also led to widespread concern on the quality and relevance of higher education. To address these Mconcerns, the National Policy on Education (NPE, 1986) and the Programme of Action (PoA, 1992) spelt out strategic plans for the policies and advocated the establishment of an independent National Accreditation Agency. Consequently, the <a href="https://www.naac.gov.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">National Assessment and Accreditation Council (NAAC)</a> was established in 1994 as an autonomous institution of the University Grants Commission (UGC) with its Head Quarter in Bengaluru. The mandate of NAAC as reflected in its vision statement is to make quality assurance an integral part of the functioning of Higher Education Institutions (HEIs).
                    </p>
                    <p>
                      The NAAC functions through its General Council (GC) and Executive Committee (EC) comprising educational administrators, policy makers, and senior academicians from a cross-section of the Indian higher education system. The Chairperson of the UGC is the President of the
                    </p>
                    <p>
                      GC of the NAAC and the Chairperson of the EC is an eminent academician nominated by the president of GC (NAAC). The Director is the academic and administrative head of NAAC and is the member-secretary of both the GC and the EC. In addition to the statutory bodies that steer its policies and core staff to support its activities, the NAAC is advised by the advisory and consultative committees constituted from time to time.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "vision" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#0b7845] mb-6">
                    Vision and Mission
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                    <p>
                      The vision of NAAC is: To make quality the defining element of higher education in India through a combination of self and external quality evaluation, promotion and sustenance initiatives. The mission statements of the NAAC aim at translating the NAAC's vision into action plans and define NAAC's engagement and endeavor as given below:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>
                        To arrange for periodic assessment and accreditation of Institutions of Higher Education or units thereof, or specific academic programmes or projects;
                      </li>
                      <li>
                        To stimulate the academic environment for promotion of quality in teaching-learning and research in Higher Education Institutions;
                      </li>
                      <li>
                        To encourage self-evaluation, accountability, autonomy and innovations in Higher Education;
                      </li>
                      <li>
                        To undertake quality-related research studies, consultancy and training programmes, and To collaborate with other stakeholders of higher education for quality evaluation, promotion and sustenance.
                      </li>
                    </ul>
                    <p>
                      Striving to achieve its goals as guided by its vision and mission statements, NAAC primarily focuses on assessment of the quality of Higher Education Institutions in the country. The NAAC methodology for Assessment and Accreditation is very much similar to that followed by Quality Assurance (QA) agencies across the world and consists of self-assessment by the Institution along with external peer assessment organized by NAAC.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "values" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#0b7845] mb-6">
                    Core Values
                  </h2>
                  <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                    <p>
                      Throughout the world, Higher Education Institutions (HEIs) function in a dynamic environment. The need to expand the system of higher education, the impact of technology on the educational delivery, the increasing private participation in higher education and the impact of globalization (including liberal cross-border and trans-national educational imperatives), have necessitated marked changes in the Indian higher education system. These changes and the consequent shift in values have been taken into cognizance by NAAC while formulating the core values. Accordingly, in order to ensure external and internal validity and credibility, the QA process of NAAC is grounded within a value framework which is suitable and appropriate to the National context.
                    </p>
                    <p>
                      The accreditation framework of NAAC is thus based on five core values detailed below.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-black mb-3">
                          (i) Contributing to National Development:
                        </h3>
                        <p>
                          Most of the HEIs have a capacity to adapt to changes and at the same time, pursue the goals and objectives that they have set forth for themselves. Contributing to national development has always been an implicit goal of Indian HEIs. The role of HEIs is significant in human resource development and capacity building of individuals, to cater to the needs of the economy, society and the country as a whole, thereby, contributing to the development of the Nation. Serving the cause of social justice, ensuring equity and increasing access to higher education are a few ways by which HEIs can contribute to the national development. It is therefore appropriate that the Assessment and Accreditation (A&A) process of NAAC looks into the ways HEIs have been responding to and contributing towards National Development.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-black mb-3">
                          (ii) Fostering Global Competencies among Students:
                        </h3>
                        <p>
                          The spiraling developments at the global level also warrant that the NAAC includes in its scope of assessment skill development of students, on par with their counterparts elsewhere in the world. With liberalization and globalization of economic activities, the need to develop skilled human resources of a high caliber is imperative. Consequently, the demand for internationally acceptable standards in higher education is evident. Therefore, the accreditation process of NAAC needs to examine the role of HEIs in preparing the students to achieve core competencies, to face the global challenges successfully. This requires that the HEIs be innovative, creative andentrepreneurial in their approach. Towards achieving this, HEIs may establish collaborations with industries, network with the neighborhood agencies/bodies and foster a closer relationship between the "world of competent-learning" and the "world of skilled work".
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-black mb-3">
                          (iii) Inculcating a Value System among Students:
                        </h3>
                        <p>
                          Although skill development is crucial to the success of students in the job market, skills are of less value in the absence of appropriate value systems. The HEIs have to shoulder the responsibility of inculcating acceptable value systems among students. In a country like India, with cultural pluralities and diversities, it is essential that students imbibe the appropriate values commensurate with social, cultural, economic and environmental realities, at the local, national and universal levels. Whatever be the pluralities and diversities that exist in the country, there is a persisting concern for inculcating the core universal values like truth and righteousness apart from other values emphasized in the various policy documents of the country. The seeds of values such as cooperation and mutual understanding during the early stages of education have to be reiterated and re emphasized at the higher education also through appropriate learning experiences and opportunities. The NAAC assessment therefore examines how these essential and desirable values are being inculcated in the students, by the HEIs.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-black mb-3">
                          (iv) Promoting the Use of Technology:
                        </h3>
                        <p>
                          Most of the significant developments that one can observe today can be attributed to the impact of Science and Technology. While the advantages of using modern tools and technological innovations in the day-to-day-life are well recognized, the corresponding changes in the use of new technologies, for teaching learning and governance of HEIs is an ongoing process. Technological advancement and innovations in educational transactions have to be undertaken by all HEIs, to make a visible impact on academic development as well as administration. At a time when our educational Institutions are expected to perform as good as their global partners, significant technological innovations have to be adopted. Traditional methods of delivering higher education have become less motivating to a large number of students. To keep pace with the developments in other spheres of human endeavor, HEIs have to enrich the learning experiences of their students by providing them with state-of-the-art educational technologies. The campus community must be adequately prepared to make use of Information and Communication Technology (ICT) optimally. Conscious effort is also needed to invest in hardware and to orient the faculty suitably. In addition to using technology as a learning resource, managing the activities of the Institution in a technology-enabled way will ensure effective Institutional functioning. For example, documentation and data management in the HEIs are areas where the process of assessment by NAAC has made a significant impact. Moving towards electronic data management and having Institutional website to provide ready and relevant information to stakeholders are desirable steps in this direction. In other words, effective use of ICT in HEIs will be able to provide ICT literacy to the campus community, using ICT for resource sharing and networking, as well as adoptingICT-enabled administrative processes. Therefore, NAAC accreditation would look at how the HEIs have put in place their electronic data management systems and electronic resources and their access to internal and external stakeholders particularly the student community.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-black mb-3">
                          (v) Quest for Excellence:
                        </h3>
                        <p>
                          Contributing to nation-building and skills development of students, HEIs should demonstrate a drive to develop themselves into centers of excellence. Excellence in all that they will contribute to the overall development of the system of higher education of the country as a whole.
                        </p>
                        <p>
                          This „Quest for Excellence" could start with the assessment or even earlier, by the establishment of the Steering Committee for the preparation of the Self – Study Report (SSR) of an Institution. Another step in this direction could be the identification of the strengths and weaknesses in the teaching and learning processes as carried out by the Institution. The five core values as outlined above form the foundation for assessment of Institutions that volunteer for accreditation by NAAC. The HEIs may also add their own core values to these in conformity with the goals and mission.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "assessment" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#0b7845] mb-6">
                    ASSESSMENT AND ACCREDITATION OF HIGHER EDUCATION INSTITUTIONS
                  </h2>
                  <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                    <p>
                      The NAAC has been carrying out the process of quality assessment and accreditation of HEIs over the past two decades. Several HEIs have gone through this process and a sizeable number has also undergone subsequent cycles of accreditation. True to its commitment for promoting quality culture in HEIs in consonance with the overall developments in the field of education as well as the outside world, NAAC has strived to be sensitive to these and adequately reflect these in its processes. The A&A process of NAAC continue to be an exercise in partnership of NAAC with the HEI being assessed. As is known by now, the A&A process of NAAC is being revised and this revision attempts to enhance such a partnership. Over years the feedback procured from the HEIs, other stakeholders and the developments in the national scene – all have contributed for the revision process of NAAC. Revised Assessment and Accreditation(A&A)Framework The Revised Assessment and Accreditation Framework is launched in July 2017. It represents an explicit Paradigm Shift making it ICT enabled, objective, transparent, scalable and robust. The Shift is:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>from qualitative peer judgement to data based quantitative indicator evaluation with increased objectivity and transparency</li>
                      <li>towards extensive use of ICT confirming scalability and robustness</li>
                      <li>in terms of simplification of the process resulting in drastic reduction in number of questions, size of the report, visit days, and so on</li>
                      <li>introducing Pre-qualifier for peer team visit, as 25% of system</li>
                      <li>generated score introducing System Generated Scores (SGS) with the combination of online evaluation (about 70%) and peer judgement (about 30%)</li>
                      <li>in introducing the element of third party validation of data</li>
                      <li>in providing appropriate differences in the metrics, weightages and benchmarks to universities and affiliated/constituent colleges</li>
                      <li>in revising several metrics to bring in enhanced participation of students and alumni in the assessment process</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-black mt-8 mb-4">
                      Focus of Assessment:
                    </h3>
                    <p>
                      The NAAC continues with its focus on quality culture of the Institution in terms of Quality Initiatives, Quality Sustenance and Quality Enhancement, as reflected in its vision, objectives, operations and the processes. Experience has reiterated that these can be ascertained either by on site observations and/or through the facts and figures about the various aspects of Institutional functioning. The Revised Manual places greater emphasis in the latter as reflective of internal Institutional processes. In line with NAAC's conviction that quality concerns are Institutional, Quality Assessment (QA) can better be done through self-evaluation. The self-evaluation process and the subsequent preparation of the Self Study Report (SSR) to be submitted to NAAC involves the participation of all the stakeholders – management, faculty members, administrativestaff, students, parents, employers, community and alumni. While the participation of internal stakeholders i.e. management, staff and students provide credibility and ownership to the activity and could lead to newer initiatives, interaction with the external stakeholders facilitate the development process of the Institution and their educational services. Overall, the QA is expected to serve as a catalyst for Institutional self-improvement, promote innovation and strengthen the urge to excel. It is attempted to enlarge the digital coverage of the entire process of A&A. This, it is believed, will not only accelerate the process but also bring in greater objectivity into the process. The possible differentiation required in respect of HEIs which are going for subsequent cycles of A&A, appropriate scope has been provided in the Process. This will allow the HEIs to appropriately represent the developments they have attempted after the previous A&A cycle.
                    </p>

                    <h3 className="text-2xl font-bold text-black mt-8 mb-4">
                      III. QUALITY INDICATOR FRAMEWORK (QIF) – DESCRIPTION
                    </h3>
                    <p>
                      The criteria based assessment forms the backbone of A&A process of NAAC. The seven criteria represent the core functions and activities of a HEI. In the revised framework not only the academic and administrative aspects of Institutional functioning but also the emerging issues have been included. The seven Criteria that would serve as basis for assessment of HEIs are:
                    </p>
                    <ol className="list-decimal ml-6 space-y-2">
                      <li>Curricular Aspects</li>
                      <li>Teaching-Learning and Evaluation</li>
                      <li>Research, Innovations and Extension</li>
                      <li>Infrastructure and Learning Resources</li>
                      <li>Student Support and Progression</li>
                      <li>Governance, Leadership and Management</li>
                      <li>Institutional Values and Best Practices</li>
                    </ol>
                    <p className="mt-4">
                      Under each Criterion, a set of few Key Indicators are identified. These Key Indicators (KIs) are further delineated as Metrics which actually elicit responses from the HEIs. These seven criteria along with their KIs are detailed below explicating the aspects they represent.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "iiqa" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">
                    Institutional Information for Quality Assessment(IIQA)
                  </h2>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded transition-colors">
                    View Document
                  </button>
                </div>
              )}

              {activeSection === "ssr" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">
                    SSR
                  </h2>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded transition-colors">
                    View Document
                  </button>
                </div>
              )}

              {activeSection === "undertaking" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">
                    IIQA- UNDERTAKING
                  </h2>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded transition-colors">
                    View Document
                  </button>
                </div>
              )}

              {activeSection === "declaration" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">
                    IIQA-Self Declaration
                  </h2>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded transition-colors">
                    View Document
                  </button>
                </div>
              )}

              {activeSection === "criterion1" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">
                    Curricular Aspects
                  </h2>

                  {/* 1.1 - Curricular Planning and Implementation */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      1.1 – Curricular Planning and Implementation
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-32">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">1.1.1 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution ensures effective curriculum planning, delivery and evaluation through a well defined process as prescribed by the respective regulatory councils and the affiliating University.<br />
                              Provide description of above mentioned process within 500 words
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">1.1.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Percentage of fulltime teachers participating in BoS /Academic Council of Universities during the last five years. (Restrict data to BoS /Academic Council only)<br />
                              Number of teachers of the Institution participating in BoS/Academic Council of universities year-wise during the last five years
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 1.2 - Academic Flexibility */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      1.2 – Academic Flexibility
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-32">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">1.2.1 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Percentage of inter-disciplinary / inter-departmental courses /training across all the Programmes offered by the College during the last five years
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">1.2.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average percentage of students enrolled in subject-related Certificate/Diploma/Add-on courses as against the total number of students during the last five years
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 1.3 - Curriculum Enrichment */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      1.3 – Curriculum Enrichment
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-32">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">1.3.1 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution integrates cross-cutting issues relevant to gender, environment and sustainability, human values, health determinants, Right to Health and emerging demographic issues and Professional Ethics into the Curriculum as prescribed by the University / respective regulative councils
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">1.3.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Number of value-added courses offered during the last five years that impart transferable and life skills
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">1.3.3 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average percentage of students enrolled in the value-added courses during the last five years
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">1.3.4 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Percentage of students undertaking field visits/Clinical/industry internships/research projects/industry visits/community postings (data for the preceding academic year)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 1.4 - Feedback System */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      1.4 – Feedback System
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-32">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">1.4.1 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Mechanism is in place to obtain structured feedback on curricula/syllabi from various stakeholders<br />
                              Structured feedback received from<br />
                              1) Students<br />
                              2) Teachers<br />
                              3) Employers<br />
                              4) Alumni<br />
                              5) Professionals
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">1.4.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Feedback on curricula and syllabi obtained from stakeholders is processed in terms of:<br />
                              Options (Choose one that is applicable):<br />
                              A. Feedback collected, analysed and action taken on feedback and relevant documents made available on the institutional website<br />
                              B. Feedback collected, analysed and action has been taken<br />
                              C. Feedback collected and analysed<br />
                              D. Feedback collected<br />
                              E. Feedback not collected
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "criterion2" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">
                    Teaching- Learning and Evaluation
                  </h2>

                  {/* 2.1 Student Enrolment and Profile */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      2.1 Student Enrolment and Profile
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.1.1 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Due consideration is given to equity and inclusiveness by providing reservation of seats to all categories during the admission process.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.1.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average percentage of seats filled in for the various programmes as against the approved intake
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.1.3 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average percentage of Students enrolled demonstrates a national spread and includes students from other states
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 2.2 Catering to Student Diversity */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      2.2 Catering to Student Diversity
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.2.1 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution assesses the learning levels of the students, after admission and organises special Programmes for advanced learners and slow performers
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.2.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Student – Fulltime teacher ratio (data for the preceding academic year)
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.2.3 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Institution facilitates building and sustenance of innate talent/aptitude of individual students (extramural activities/beyond the classroom activities such as student clubs, cultural societies, etc)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 2.3 Teaching-Learning Process */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      2.3 Teaching-Learning Process
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.3.1 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Student-centric methods are used for enhancing learning experiences by…
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.3.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Institution facilitates the use of Clinical Skills Laboratory / Simulation Based Learning
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.3.3 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Teachers use ICT-enabled tools for effective teaching and learning process including online e-resources
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.3.4 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Student : Mentor Ratio (preceding academic year)
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.3.5 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The teaching learning process of the institution nurtures creativity, analytical skills and innovation among students
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 2.4 Teacher Profile and Quality */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      2.4 Teacher Profile and Quality
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.4.1 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average percentage of fulltime teachers against sanctioned posts during the last five years
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.4.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average percentage of fulltime teachers with Ph.D./D.Sc./D.Lit./DM/M Ch/DNB in super specialities /other PG degrees
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.4.3 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average Teaching experience of fulltime teachers in number of years
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.4.4 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average percentage of teachers trained for development and delivery of e-content / e-courses during the last 5 years
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.4.5 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average Percentage of fulltime teachers who received awards and recognitions
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 2.5 Evaluation Process and Reforms */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      2.5 Evaluation Process and Reforms
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.5.1 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution adheres to the academic calendar for the conduct of Continuous Internal Evaluation and ensures that it is robust and transparent
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.5.2 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Mechanism to deal with examination-related grievances is transparent, time-bound and efficient
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.5.3 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Reforms in the process and procedure in the conduct of evaluation/examination; including the automation of the examination system
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.5.4 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution provides opportunities to students for midcourse improvement of performance through specific interventions
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 2.6 Student Performance and Learning Outcome */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      2.6 Student Performance and Learning Outcome
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.6.1 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution has stated the learning outcomes (generic and programme-specific)…
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.6.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Incremental performance in Pass percentage of final year students in the last five years
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.6.3 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The teaching learning and assessment processes of the Institution are aligned with the stated learning outcomes.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.6.4 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Presence and periodicity of parent-teachers meetings, remedial measures undertaken and outcome analysis
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 2.7 Student Satisfaction Survey */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      2.7 Student Satisfaction Survey
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">2.7.1 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Online student satisfaction survey regarding teaching learning process
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "criterion3" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">
                    Research, Innovations and Extension
                  </h2>

                  {/* 3.1 Resource Mobilization for Research */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      3.1: Resource Mobilization for Research
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">3.1.1 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Percentage of teachers recognized as PG/Ph.D research guides by the respective University
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">3.1.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average Percentage of teachers awarded national /international fellowships / financial support for advanced studies/collaborative research and participation in conferences during the last five years
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">3.1.3 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Number of research projects/clinical trials funded by government, industries and non-governmental agencies during the last five years
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 3.2 Innovation Ecosystem */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      3.2: Innovation Ecosystem
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">3.2.1 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution has created an ecosystem for innovations including Incubation Centre and other initiatives for creation and transfer of knowledge
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">3.2.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Number of workshops/seminars conducted on Intellectual Property Rights (IPR) Research methodology, Good Clinical, Laboratory, Pharmacy and Collection practices, writing for Research Grants and Industry-Academia Collaborations during the last five years
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 3.3 Research Publications and Awards */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      3.3: Research Publications and Awards
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">3.3.1 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution ensures implementation of its stated Code of Ethics for research.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">3.3.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average number of Ph.D/DM/M Ch/PG Degree in the respective disciplines received per recognized PG teachers* of the Institution during the last five years
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">3.3.3 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average number of papers published per teacher in the Journals notified on UGC -CARE list in the UGC website/Scopus/Web of Science/PubMed during the last five years
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">3.3.4 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Number of books and chapters in edited volumes/books published and papers published in national/international conference proceedings indexed in UGC-CARE list on the UGC website/Scopus/Web of Science/PubMed/ during the last five years
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 3.4 Extension Activities */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      3.4: Extension Activities
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">3.4.1 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Total number of extension and outreach activities carried out in collaboration with National and International agencies, Industry, the community, Government and Non-Government organized bodies through NSS/NCC during the last five years.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">3.4.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average percentage of students participating in extension and outreach activities during the last 5 years
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">3.4.3 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Number of awards and recognitions received for extension and outreach activities from Government / other recognised bodies during the last five years
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">3.4.4 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Institutional social responsibility activities in the neighbourhood community in terms of education, environmental issues like Swachh Bharath, health and hygiene awareness and socio-economic development issues carried out by the students and staff during the last five years.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 3.5 Collaboration */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      3.5: Collaboration
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">3.5.1 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average number of Collaborative activities for research, faculty exchange, student exchange/ Industry-internship etc. per year for the last five years
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">3.5.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Total number of Functional MoUs with Institutions/ Industries in India and abroad for academic, clinical training / internship, on-the job training, project work, student / faculty exchange, collaborative research programmes etc. year-wise during the last five years
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "criterion4" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">
                    Infrastructure and Learning Resources (100)
                  </h2>

                  {/* 4.1 Physical Facilities */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      4.1: Physical Facilities
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.1.1 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution has adequate facilities for teaching-learning.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.1.2 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution has adequate facilities to support physical and recreational requirements of students and staff.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.1.3 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Availability and adequacy of general campus facilities and overall ambience.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.1.4 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average percentage of expenditure incurred, excluding salary, for infrastructure development and augmentation during the last five years.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 4.2 Clinical, Equipment and Laboratory Learning Resources */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      4.2 Clinical, Equipment and Laboratory Learning Resources
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.2.1 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Teaching Hospital, equipment, clinical teaching-learning and laboratory facilities as stipulated by the respective Regulatory Bodies.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.2.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average number of patients per year treated as outpatients and inpatients in the teaching hospital for the last five years.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.2.3 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average number of students per year exposed to learning resource such as Laboratories, Animal House & Herbal Garden (in house OR hired) during the last five years.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.2.4 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Availability of infrastructure for community-based learning.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 4.3 Library as a Learning Resource */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      4.3 Library as a Learning Resource
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.3.1 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Library is automated using Integrated Library Management System (ILMS).
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.3.2 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Total number of textbooks, reference volumes, journals, collection of rare books, manuscripts, Digitalized traditional manuscripts, Discipline-specific learning resources from ancient Indian languages, special reports or any other knowledge resource for library enrichment.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.3.3 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Does the Institution have an e-Library with membership / registration for various resources?
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.3.4 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average annual expenditure for the purchase of books and journals including e-journals during the last five years.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.3.5 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              In-person and remote access usage of library and the learner sessions/library usage programmes organized for the teachers and students (data for the preceding academic year).
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.3.6 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              E-content resources used by teachers.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 4.4 IT Infrastructure */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      4.4 IT Infrastructure
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.4.1 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Percentage of classrooms, seminar halls and demonstration rooms linked with internet /Wi-Fi-enabled ICT facilities (data for the preceding academic year).
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.4.2 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Institution frequently updates its IT facilities and computer availability for students including Wi-Fi.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.4.3 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Available bandwidth of internet connection in the Institution (Leased line).
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 4.5 Maintenance of Campus Infrastructure */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      4.5 Maintenance of Campus Infrastructure
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.5.1 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average expenditure incurred on maintenance of physical facilities and academic support facilities.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">4.5.2 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              There are established systems and procedures for maintaining and utilizing physical, academic and support facilities – laboratory, library, sports facilities, computers, classrooms etc.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "criterion5" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">
                    Student Support and Progression
                  </h2>

                  {/* 5.1 Student Support */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      5.1 Student Support
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">5.1.1 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average percentage of students benefited by scholarships / freeships / fee-waivers by Government / Non-Governmental agencies / Institution during the last five years.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">5.1.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              <div className="mb-2">Capability enhancement and development schemes employed by the Institution for students:</div>
                              <ul className="list-none space-y-1 text-gray-700">
                                <li>▪ Soft skill development</li>
                                <li>▪ Language and communication skill development</li>
                                <li>▪ Yoga and wellness</li>
                                <li>▪ Analytical skill development</li>
                                <li>▪ Human value development</li>
                                <li>▪ Personality and professional development</li>
                                <li>▪ Employability skill development</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">5.1.3 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average percentage of students provided training and guidance for competitive examinations and career counseling offered by the Institution during the last five years.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">5.1.4 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              <div>The Institution has an active international student cell to facilitate study in India program, etc.</div>
                              <div className="mt-2 text-sm">Describe the international student cell activities within 500 words.</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">5.1.5 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution has a transparent mechanism for timely redressal of student grievances / prevention of sexual harassment / prevention of ragging.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 5.2 Student Progression */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      5.2 Student Progression
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">5.2.1 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average percentage of students qualifying in state/ national/ international level examinations (e.g. GATE/GMAT/GPAT/CAT/NEET/GRE/TOEFL/PLAB/USMLE/AYUSH/Civil Services/Defence/UPSC/State Government examinations/AllMSPGET, JIPMER Entrance Test, PGIMER Entrance Test, etc.) during the last five years.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">5.2.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average percentage of placement / self-employment (in relevant field) in professional services of outgoing students during the last five years.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">5.2.3 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Percentage of the batch of graduated students of the preceding year, who have progressed to higher education.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 5.3 Student Participation and Activities */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      5.3 Student Participation and Activities
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">5.3.1 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Number of awards/medals for outstanding performance in sports/cultural activities at State/Regional (zonal)/National/International levels (award for a team event should be counted as one) during the last five years.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">5.3.2 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Presence of a Student Council, its activities related to student welfare and student representation in academic & administrative bodies/committees of the Institution.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">5.3.3 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average number of sports and cultural activities/competitions organized by the Institution during the last five years.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 5.4 Alumni Engagement */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      5.4 Alumni Engagement
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">5.4.1 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Alumni Association is registered and holds regular meetings to plan its involvement and developmental activities with the support of the college during the last five years.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">5.4.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Provide the areas of contribution by the Alumni Association / chapters during the last five years.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "criterion6" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">
                    Governance, Leadership and Management
                  </h2>

                  {/* 6.1 Institutional Vision and Leadership */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      6.1 Institutional Vision and Leadership
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">6.1.1 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution has clearly stated Vision and Mission which are reflected in its academic and administrative governance. Describe the Vision and Mission of the Institution, nature of governance, perspective plans, and stakeholders' participation in the decision-making bodies highlighting the activities leading to Institutional excellence. Response to be provided within 500 words.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">6.1.2 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Effective leadership is reflected in various Institutional practices such as decentralization and participative management. Describe the organogram of the college management structure and its functioning system highlighting decentralized and participatory management and its outcomes in the Institutional governance within 500 words.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 6.2 Strategy Development and Deployment */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      6.2 Strategy Development and Deployment
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">6.2.1 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution has a well-defined organizational structure, Statutory Bodies/committees of the College with relevant rules, norms, and guidelines along with Strategic Plan effectively deployed. Provide the write-up within 500 words.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">6.2.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Implementation of e-governance
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 6.3 Faculty Empowerment Strategies */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      6.3 Faculty Empowerment Strategies
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">6.3.1 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution has effective welfare measures for teaching and non-teaching staff.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">6.3.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average percentage of teachers provided with financial support to attend conferences/workshops and towards the membership fee of professional bodies during the last five years.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">6.3.3 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average number of professional development/administrative training programs organized by the Institution for teaching and non-teaching/technical staff during the last five years.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">6.3.4 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average percentage of teachers undergoing Faculty Development Programs (FDP) including online programs during the last five years (Orientation/Induction Programs, Refresher Course, Short Term Course, etc.).
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">6.3.5 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Institution has Performance Appraisal System for teaching and non-teaching staff.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 6.4 Financial Management and Resource Mobilization */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      6.4 Financial Management and Resource Mobilization
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">6.4.1 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Institutional strategies for mobilization of funds and the optimal utilization of resources.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">6.4.2 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Institution conducts internal and external financial audits regularly.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">6.4.3 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Funds/Grants received from government/non-government bodies, individuals, philanthropists (INR in Lakhs) during the last five years (not covered in Criterion III).
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 6.5 Internal Quality Assurance System */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      6.5 Internal Quality Assurance System
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">6.5.1 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Institution has a streamlined Internal Quality Assurance Mechanism.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">6.5.2 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Average percentage of teachers attending programs/workshops/seminars specific to quality improvement in the last 5 years.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">6.5.3 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution adopts several Quality Assurance initiatives.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "criterion7" && (
                <div className="prose max-w-none">
                  <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">
                    Institutional Values and Best Practices
                  </h2>

                  {/* 7.1 Institutional Values and Social Responsibilities */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      7.1 Institutional Values and Social Responsibilities
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">7.1.1 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Total number of gender equity sensitization programmes organized by the Institution during the last five years.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">7.1.2 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Measures initiated by the Institution for the promotion of gender equity during the last five years.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">7.1.3 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution has facilities for alternate sources of energy and energy conservation devices.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">7.1.4 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Describe the facilities in the Institution for the management of the following types of degradable and non-degradable waste (within 500 words)
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">7.1.5 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Water conservation facilities available in the Institution:
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">7.1.6 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Green campus initiatives of the Institution
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">7.1.7 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution has Divyangjan friendly, barrier-free environment in the campus
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">7.1.8 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Describe the Institutional efforts/initiatives in providing an inclusive environment i.e., tolerance and harmony towards cultural, regional, linguistic, communal socio-economic and other diversities.
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">7.1.9 QnM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Code of conduct handbook exists for students, teachers and academic and administrative staff including the Dean / Principal /Officials and support staff..
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">7.1.10 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              The Institution celebrates / organizes national and international commemorative days, events and festivals
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 7.2 Best Practices */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      7.2 Best Practices
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">7.2.1 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Describe two Institutional Best Practices as per the NAAC format provided in the Manual.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 7.3 Institutional Distinctiveness */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-4">
                      7.3 Institutional Distinctiveness
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black w-40">
                              Metric No.
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-bold text-black">
                              Title
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">7.3.1 QlM</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">
                              Portray the performance of the Institution in one area distinctive to its priority and thrust within 500 words.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
