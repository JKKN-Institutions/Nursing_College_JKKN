import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function IQAC() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "IQAC", url: "https://nursing.sresakthimayeil.jkkn.ac.in/iqac" }
      ]} />
      <Header />
      <main className="bg-[#FBFBEE] pt-20 sm:pt-24 lg:pt-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 py-8 lg:py-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-black mb-8">
            IQAC
          </h1>

          <h2 className="text-xl lg:text-2xl font-bold text-[#0b7845] mb-8">
            Sresakthimayeil Institute Of Nursing & Research, Komarapalayam.
            <br />
            Internal Quality Assurance Cell (IQAC)
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Sresakthimayeil institute of nursing and research College , has Internal quality assurance mechanism with the well organised IQAC committee, with the IQAC chairperson ,managing director, committee members, external experts, coordinator, management nominee, stakeholders nominee, students nominee and alumni nominee.The Internal Quality Assurance Cell (IQAC) in Sresakthimayeil institute of nursing and research plays a pivotal role in ensuring and enhancing the quality of education and research in our esteemed institution. With a firm commitment to continuous improvement, the IQAC diligently works towards maintaining the highest standards of excellence in nursing education.
            </p>

            <p>
              The Committee will meet once in  month to discuss its monthly  activities and weekly once to discuss its weekly activities. Each member brings unique perspectives and expertise to the table, fostering a collaborative approach to quality assurance. The IQAC coordinator communicates the schedule of meetings to all the members and meetings are conducted periodically and agenda of the meeting are discussed and activities are planned, to improve the quality of education. These meetings serve as forums for in-depth discussions on various aspects of education, research, and institutional development.
            </p>

            <p>
              Transparency is at the heart of our operations. During IQAC meetings, all participants, including the IQAC Chairperson, IQAC coordinator, and core committee members, actively engage in addressing critical issues and strategic planning to elevate the quality of nursing education.Meetings are addressed by the IQAC Chairperson, IQAC coordinator and the core committee members. The meetings of the IQAC are transparent, suggestions given by the core committee members are noted and relevant suggestions are implemented subsequently.. This participatory approach empowers every member to contribute to the institution's growth and success.
            </p>

            <h3 className="text-xl font-bold text-black mt-8 mb-4">
              Objectives:
            </h3>

            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li>To develop a system for improving the academic and administrative performance of the institution.</li>
              <li>To perform updated and relevant nursing curriculum as instructed by the university.</li>
              <li>To provide academic and non-academic support services that enhance student learning, retention, and progression.</li>
              <li>To enhance quality of the institution with best practices.</li>
            </ol>

            <h3 className="text-xl font-bold text-black mt-8 mb-6">
              IQAC -Committee Members.
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-sm">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-300">
                    <th className="py-3 px-4 text-left font-semibold text-black border-r border-gray-300">
                      S.NO
                    </th>
                    <th className="py-3 px-4 text-left font-semibold text-black border-r border-gray-300">
                      NAME
                    </th>
                    <th className="py-3 px-4 text-left font-semibold text-black">
                      Position in IQAC Committee.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 border-r border-gray-200">1</td>
                    <td className="py-3 px-4 border-r border-gray-200">
                      <div>Dr.Jamuna Rani.R</div>
                      <div>Principal</div>
                    </td>
                    <td className="py-3 px-4">Chairperson – IQAC cell</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 border-r border-gray-200">2</td>
                    <td className="py-3 px-4 border-r border-gray-200">
                      <div>Mr.Omm Sharavana,</div>
                      <div>Director, JKKN Institutions</div>
                    </td>
                    <td className="py-3 px-4">Management Member</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 border-r border-gray-200">3.</td>
                    <td className="py-3 px-4 border-r border-gray-200">Mr.Praveen Thiyagarajan</td>
                    <td className="py-3 px-4">Member,Institutional Effectiveness Team</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 border-r border-gray-200">4.</td>
                    <td className="py-3 px-4 border-r border-gray-200">Prof.K.M.Rajendran,CAO.,</td>
                    <td className="py-3 px-4">Administrative Member</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 border-r border-gray-200">5.</td>
                    <td className="py-3 px-4 border-r border-gray-200">Prof.Gowri.B</td>
                    <td className="py-3 px-4">IQAC Coordinator</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 border-r border-gray-200">6.</td>
                    <td className="py-3 px-4 border-r border-gray-200">Prof.Manjula</td>
                    <td className="py-3 px-4">External NAAC consultant</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 border-r border-gray-200">7.</td>
                    <td className="py-3 px-4 border-r border-gray-200">Prof.Arockia mary.M</td>
                    <td className="py-3 px-4"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 border-r border-gray-200">8.</td>
                    <td className="py-3 px-4 border-r border-gray-200">Assoc.Prof.Uma.K</td>
                    <td className="py-3 px-4"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 border-r border-gray-200">9.</td>
                    <td className="py-3 px-4 border-r border-gray-200">Mrs.Kalamani.P</td>
                    <td className="py-3 px-4"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 border-r border-gray-200">10.</td>
                    <td className="py-3 px-4 border-r border-gray-200">Mrs.Sathiya.P</td>
                    <td className="py-3 px-4">Teachers Nominee</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 border-r border-gray-200">11.</td>
                    <td className="py-3 px-4 border-r border-gray-200">Assoc.Prof.Radha.S</td>
                    <td className="py-3 px-4"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 border-r border-gray-200">12.</td>
                    <td className="py-3 px-4 border-r border-gray-200">Asst.Prof.Thilagam.L</td>
                    <td className="py-3 px-4"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 border-r border-gray-200">13.</td>
                    <td className="py-3 px-4 border-r border-gray-200">Lecturer.Mrs.Saranya.M</td>
                    <td className="py-3 px-4"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 border-r border-gray-200">14.</td>
                    <td className="py-3 px-4 border-r border-gray-200">Assoc.Prof.Valarmathi.K</td>
                    <td className="py-3 px-4">Alumni Nominee</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 border-r border-gray-200">15.</td>
                    <td className="py-3 px-4 border-r border-gray-200">
                      <div>1.Ms. Sweety Jose – IV Yr BSc(N)</div>
                      <div>2.Ms. Satharupha – IV Yr BSc(N)</div>
                      <div>3.Subashini surendra babu- III Yr BSC(N)</div>
                      <div>4.Asferrin Jebaraj ,S–II YR BSC (N)</div>
                      <div>5.Pooja.S – I Yr B.SC(N)</div>
                    </td>
                    <td className="py-3 px-4">Student Nominee</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 border-r border-gray-200">16.</td>
                    <td className="py-3 px-4 border-r border-gray-200">Mr. Perumal.R Mrs.Umarani.P</td>
                    <td className="py-3 px-4">Stakeholders Nominee</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
