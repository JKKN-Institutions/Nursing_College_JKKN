import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function GrievanceRedressal() {
  const committeeMembers = [
    { sno: 1, name: "Mrs. Dr.Jamuna Rani", designation: "Principal", position: "Chairperson" },
    { sno: 3, name: "Mrs.Gowri.B", designation: "Vice-principal", position: "Member" },
    { sno: 4, name: "Mrs.Arockiamary.M", designation: "Professor", position: "Member" },
    { sno: 5, name: "Mrs.Sasikala.M", designation: "Associate professor", position: "Member" },
    { sno: 6, name: "Mrs.Thangamuneeshwari", designation: "Associate professor", position: "Member" },
    { sno: 7, name: "Mrs.Uma.K", designation: "Associate professor", position: "Member" },
    { sno: 8, name: "Ms.Mounika", designation: "B.sc(N) – IV Year", position: "Member" },
    { sno: 9, name: "Ms.Jothika", designation: "B.sc(N) – III Year", position: "Member" },
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Committees", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Grievance Redressal", url: "https://nursing.sresakthimayeil.jkkn.ac.in/grievance-redressal" },
      ]} />
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Main Content */}
        <div className="bg-[#FBFBEE] py-8 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-[#002309] mb-8">
              Grievance Redressal Policy
            </h1>

            <div className="space-y-6 text-gray-700 text-base leading-relaxed">
              {/* Index/Table of Contents */}
              <div className="mb-8">
                <ul className="list-disc list-inside space-y-2">
                  <li>Objective</li>
                  <li>Scope</li>
                  <li>Definition of Grievance</li>
                  <li>
                    Grievance Redressal Procedure
                    <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                      <li>Informal Resolution</li>
                      <li>Formal Grievance Redressal Process</li>
                    </ul>
                  </li>
                  <li>Timelines</li>
                  <li>Record-Keeping</li>
                  <li>Non-Retaliation</li>
                  <li>Communication</li>
                  <li>Review and Monitoring</li>
                  <li>Grievance Submission</li>
                  <li>Receipt of Grievances</li>
                  <li>Grievance Evaluation and Resolution</li>
                  <li>Grievance Redressal Outcome</li>
                  <li>Confidentiality</li>
                  <li>Timelines</li>
                  <li>Record-Keeping</li>
                  <li>Non-Retaliation</li>
                  <li>Communication</li>
                </ul>
              </div>

              {/* Note */}
              <p className="text-justify mb-8">
                <strong>Note:</strong> The index includes the key sections and subsections of the Grievance Redressal Policy for Sresakthimayeil Institute of Nursing and Research, with a specific focus on the incorporation of a Google form for grievance submission. The policy can be further expanded and organized based on the institution's requirements and preferences.
              </p>

              {/* Objective */}
              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Objective:
                </h2>
                <p className="text-justify">
                  The Grievance Redressal Policy of Sresakthimayeil Institute of Nursing and Research aims to provide a fair, transparent, and efficient mechanism for addressing and resolving grievances raised by students, parents, staff, or any other stakeholders of the institution. The policy ensures that grievances are collected through a Google form, handled promptly, impartially and with utmost confidentiality, thereby promoting a harmonious and conducive learning environment.
                </p>
              </div>

              {/* Scope */}
              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Scope:
                </h2>
                <p className="text-justify">
                  This policy applies to all students, parents, staff members and stakeholders of Sresakthimayeil Institute of Nursing and Research.
                </p>
              </div>

              {/* Definition of Grievance */}
              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Definition of Grievance:
                </h2>
                <p className="text-justify">
                  A grievance is defined as any complaint, concern, or dissatisfaction raised by a student, parent, staff member, or stakeholder regarding any aspect of the institution's operations, policies, procedures, facilities or behavior of individuals associated with the institution.
                </p>
              </div>

              {/* Grievance Redressal Procedure */}
              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Grievance Redressal Procedure:
                </h2>
              </div>

              {/* Grievance Submission */}
              <div className="space-y-4">
                <h3 className="text-lg lg:text-xl font-bold text-[#002309]">
                  Grievance Submission:
                </h3>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>Our institution will provide a dedicated Google form for the submission of grievances.</li>
                  <li>Students, parents, staff members, or stakeholders can access the form through the institution's official website or any other designated platform.</li>
                  <li>The Google form will include fields for capturing relevant information such as the name of the aggrieved individual, contact details, nature of the grievance, and any supporting documents or evidence.</li>
                </ul>
              </div>

              {/* Receipt of Grievances */}
              <div className="space-y-4">
                <h3 className="text-lg lg:text-xl font-bold text-[#002309]">
                  Receipt of Grievances:
                </h3>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>Our institution will ensure that all grievances submitted through the Google form are received and recorded.</li>
                  <li>A designated authority or Grievance Redressal Committee (GRC) will be responsible for regularly monitoring the submissions and acknowledging receipt of grievances.</li>
                </ul>
              </div>

              {/* Grievance Evaluation and Resolution */}
              <div className="space-y-4">
                <h3 className="text-lg lg:text-xl font-bold text-[#002309]">
                  Grievance Evaluation and Resolution:
                </h3>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>The GRC will evaluate each grievance received through the Google form in a fair and unbiased manner.</li>
                  <li>The GRC may request additional information, conduct investigations, or seek inputs from relevant individuals or departments to facilitate the resolution process.</li>
                  <li>Timely updates will be provided to the aggrieved individual regarding the progress and status of their grievance.</li>
                </ul>
              </div>

              {/* Grievance Redressal Outcome */}
              <div className="space-y-4">
                <h3 className="text-lg lg:text-xl font-bold text-[#002309]">
                  Grievance Redressal Outcome:
                </h3>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>The GRC will communicate the resolution or decision regarding the grievance through appropriate channels, including email, phone, or personal meetings.</li>
                  <li>The communication will include details of the actions taken or recommended to address the grievance.</li>
                </ul>
              </div>

              {/* Confidentiality */}
              <div className="space-y-4">
                <h3 className="text-lg lg:text-xl font-bold text-[#002309]">
                  Confidentiality:
                </h3>
                <p className="text-justify">
                  Sresakthimayeil Institute of Nursing and Research will ensure that all grievances submitted through the Google form are treated with strict confidentiality. Only authorized personnel involved in the grievance resolution process will have access to the information provided.
                </p>
              </div>

              {/* Timelines */}
              <div className="space-y-4">
                <h3 className="text-lg lg:text-xl font-bold text-[#002309]">
                  Timelines:
                </h3>
                <p className="text-justify">
                  Our institution will establish specific timelines for acknowledging, evaluating, and resolving grievances submitted through the Google form. These timelines will be communicated to all stakeholders and strictly adhered to.
                </p>
              </div>

              {/* Record-Keeping */}
              <div className="space-y-4">
                <h3 className="text-lg lg:text-xl font-bold text-[#002309]">
                  Record-Keeping:
                </h3>
                <p className="text-justify">
                  Our institution will maintain proper documentation of all grievances received through the Google form, actions taken, and resolutions provided. This will assist in tracking the grievance history and identifying areas for improvement in the institution's policies and procedures.
                </p>
              </div>

              {/* Non-Retaliation */}
              <div className="space-y-4">
                <h3 className="text-lg lg:text-xl font-bold text-[#002309]">
                  Non-Retaliation:
                </h3>
                <p className="text-justify">
                  Our institution strictly prohibits any form of retaliation against individuals raising genuine grievances. Any act of retaliation will be dealt with sternly, and appropriate disciplinary action will be taken against the responsible party.
                </p>
              </div>

              {/* Communication */}
              <div className="space-y-4">
                <h3 className="text-lg lg:text-xl font-bold text-[#002309]">
                  Communication:
                </h3>
                <p className="text-justify">
                  Sresakthimayeil Institute of Nursing and Research will ensure effective communication channels are in place to inform all stakeholders about the availability and usage of the Google form for submitting grievances. This includes displaying information on the institution's website, notice boards, or any other appropriate means.
                </p>
              </div>

              {/* Review and Monitoring */}
              <div className="space-y-4">
                <h3 className="text-lg lg:text-xl font-bold text-[#002309]">
                  Review and Monitoring:
                </h3>
                <p className="text-justify">
                  The Grievance Redressal Policy, including the Google form submission process, will be periodically reviewed by the management of Sresakthimayeil Institute of Nursing and Research to ensure its effectiveness and make any necessary updates. Regular monitoring will be conducted to assess the implementation of the policy and identify areas for improvement.
                </p>
              </div>

              {/* Final Note */}
              <div className="space-y-4">
                <p className="text-justify">
                  <strong>Note:</strong> The usage of a Google form for grievance collection is an additional feature of the grievance redressal policy and can be incorporated into the existing policy framework of Sresakthimayeil Institute of Nursing and Research.
                </p>
              </div>

              {/* Committee Section */}
              <div className="mt-12">
                <h2 className="text-xl lg:text-2xl font-bold text-[#002309] mb-6">
                  STUDENT GRIEVANCE REDRESSAL COMMITTEE
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white border border-gray-400">
                    <thead>
                      <tr className="bg-white">
                        <th className="py-3 px-4 text-center font-bold text-[#002309] border border-gray-400">
                          S.no
                        </th>
                        <th className="py-3 px-4 text-center font-bold text-[#002309] border border-gray-400">
                          NAME
                        </th>
                        <th className="py-3 px-4 text-center font-bold text-[#002309] border border-gray-400">
                          DESIGNATION
                        </th>
                        <th className="py-3 px-4 text-center font-bold text-[#002309] border border-gray-400">
                          POSITION
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {committeeMembers.map((member) => (
                        <tr key={member.sno} className="bg-white">
                          <td className="py-3 px-4 text-center border border-gray-400">
                            {member.sno}
                          </td>
                          <td className="py-3 px-4 text-center border border-gray-400">
                            {member.name}
                          </td>
                          <td className="py-3 px-4 text-center border border-gray-400">
                            {member.designation}
                          </td>
                          <td className="py-3 px-4 text-center border border-gray-400">
                            {member.position}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
