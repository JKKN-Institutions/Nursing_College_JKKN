import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";

export default function AntiRagging() {
  const committeeMembers = [
    { sno: 1, name: "Mrs. Dr.Jamuna Rani", designation: "Principal", position: "Chairperson" },
    { sno: 2, name: "Mr.S.Rajendran", designation: "Chief Administrative Officer", position: "Member" },
    { sno: 3, name: "Thiru.S.Ommsharravana", designation: "Managing Director cum Legal Advisor", position: "Member" },
    { sno: 4, name: "Mrs.Gowri.B", designation: "Vice-principal", position: "Member" },
    { sno: 5, name: "Mrs.Arockiamary.M", designation: "Professor", position: "Member" },
    { sno: 6, name: "Mrs.Radha.S", designation: "Associate professor", position: "Member" },
    { sno: 7, name: "Mrs.Seethalakshmi.K", designation: "Girls Hostel-Warden Member", position: "Member" },
    { sno: 8, name: "Mr.Singaravelan", designation: "Boys Hostel-Warden", position: "Member" },
  ];

  const squadMembers = [
    { sno: 1, name: "Mrs. Dr.Jamuna Rani.R", designation: "Principal", position: "Chairperson", phone: "9788732098" },
    { sno: 2, name: "Mr.S.Rajendran", designation: "Chief Administrative Officer", position: "Convenor", phone: "9942541666" },
    { sno: 3, name: "Mrs.Gowri.B", designation: "Vice-principal", position: "Member", phone: "9894302206" },
    { sno: 4, name: "Mrs.Radha.S", designation: "Associate professor", position: "Member", phone: "9578260537" },
    { sno: 5, name: "Mrs.Sathiya.P", designation: "Clinical Instructor", position: "Member", phone: "9894443401" },
    { sno: 6, name: "Mrs.Seethalakshmi.K", designation: "Girls Hostel-Warden Member", position: "Member", phone: "9566868377" },
    { sno: 7, name: "Mr.Chidambaram", designation: "Boys Hostel-Warden", position: "Member", phone: "9597690165" },
  ];

  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Main Title */}
        <div className="bg-[#FBFBEE] py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">Anti-Ragging Cell — JKKN College of Nursing</h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0b7845] mb-8">
              Anti Ragging Cell
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-[#FBFBEE] pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="space-y-6 text-gray-700 text-base leading-relaxed">
              {/* Introduction */}
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Introduction:
                </h3>
                <p className="text-justify">
                  An anti-ragging policy is a comprehensive set of guidelines, rules, and regulations implemented by educational institutions to prevent and address the issue of ragging. Ragging refers to any form of physical, mental, or emotional harassment, abuse, or humiliation inflicted on new students by their seniors in educational institutions, particularly colleges and universities. It can take various forms such as verbal taunts, practical jokes, forced activities, and even physical violence.
                </p>
              </div>

              {/* Objective */}
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Objective:
                </h3>
                <p className="text-justify">
                  The Revised Anti-Ragging Policy of Sresakthimayeil Institute of Nursing and Research aims to create a safe and supportive environment that is free from any form of ragging. This policy is committed to preventing,prohibiting, and addressing incidents of ragging to ensure the physical and mental well-being of all students. Additionally, the policy promotes awareness through the display of contact information for the Nodal Officer of Anti-Ragging and encourages the use of online procedures for filing the Anti-Ragging Affidavit and accessing guidance in case of ragging.
                </p>
              </div>

              {/* Scope */}
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Scope:
                </h3>
                <p className="text-justify">
                  This policy applies to all students, faculty members, staff, and stakeholders of Sresakthimayeil Institute of Nursing and Research. It covers all areas and activities within the institution & premises, including classrooms, hostels ,common areas, transportation, and off-campus events or activities associated with the institution.
                </p>
              </div>

              {/* Committee Composition */}
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Committee Composition :
                </h3>
                <p className="text-justify">
                  Committee is composed of nursing faculty, administration, legal experts, and others. This mix of perspectives helps cover all aspects of compliance, especially related to anti-ragging and anti-sexual harassment.
                </p>
              </div>

              {/* Anti-Ragging Measures */}
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Anti-Ragging Measures:
                </h3>
                <p className="text-justify">
                  Follow the guidelines from the Supreme Court of India, UGC regulations, The Tamil Nadu Dr. M.G.R. Medical University, The Indian Nursing Council, and The Tamil Nadu Nurses Midwives Council. The committee's job is to make sure there's no ragging in the college. They need to put in place and watch over steps to stop and handle any ragging incidents.
                </p>
              </div>

              {/* Policy Guidelines */}
              <div className="space-y-6 mt-8">
                <h3 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Policy Guidelines:
                </h3>

                {/* Definition of Ragging */}
                <div className="space-y-3">
                  <h4 className="text-lg lg:text-xl font-bold text-[#002309]">
                    Definition of Ragging:
                  </h4>
                  <p className="text-justify">
                    Ragging refers to any act of physical or mental abuse, bullying, humiliation, or harassment inflicted on students by individuals or groups, including seniors, causing physical or psychological harm, discomfort, or apprehension.
                  </p>
                  <p className="text-justify">
                    It includes activities that disturb the peace, create fear, or affect the academic or personal life of the victim.
                  </p>
                </div>

                {/* Prohibition of Ragging */}
                <div className="space-y-3">
                  <h4 className="text-lg lg:text-xl font-bold text-[#002309]">
                    Prohibition of Ragging:
                  </h4>
                  <p className="text-justify">
                    Sresakthimayeil Institute of Nursing and Research maintains a strict zero-tolerance policy towards ragging in any form. Ragging is strictly prohibited and individuals found involved in ragging activities will face disciplinary action.
                  </p>
                  <p className="text-justify">
                    All members of the institution & community are expected to comply with this policy and report any incidents of ragging promptly.
                  </p>
                </div>

                {/* Prevention Measures */}
                <div className="space-y-3">
                  <h4 className="text-lg lg:text-xl font-bold text-[#002309]">
                    Prevention Measures:
                  </h4>
                  <p className="text-justify">
                    Awareness programs and orientation sessions will be conducted for new students, highlighting the consequences of ragging and the importance of a ragging-free environment.
                  </p>
                  <p className="text-justify">
                    Anti-ragging committees and squads will be formed to monitor and prevent incidents of ragging, ensuring a safe environment for students.
                  </p>
                  <p className="text-justify">
                    our Institution will collaborate with local authorities and community organisations to create awareness about the harmful effects of ragging and promote a culture of respect and empathy.
                  </p>
                </div>

                {/* Reporting Mechanism */}
                <div className="space-y-3">
                  <h4 className="text-lg lg:text-xl font-bold text-[#002309]">
                    Reporting Mechanism
                  </h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>A dedicated Anti-Ragging Committee will be established to receive and address complaints related to ragging.</li>
                    <li>Students can report incidents of ragging through multiple channels, including a confidential helpline, email, physical complaint boxes, and an online reporting system.</li>
                    <li>Contact information for the Nodal Officer of Anti-Ragging, including email address and contact number, will be prominently displayed on the institution & website and in various campus areas such as the Admission Centre, Departments, Library, Canteen, Hostel, and Common facilities to create awareness and facilitate reporting.</li>
                  </ul>
                </div>

                {/* Complaint Investigation and Action */}
                <div className="space-y-3">
                  <h4 className="text-lg lg:text-xl font-bold text-[#002309]">
                    Complaint Investigation and Action:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>The Anti-Ragging Committee will conduct impartial and thorough investigations into reported incidents of ragging.</li>
                    <li>The investigation process will include gathering information, interviewing witnesses, and examining any available evidence.</li>
                    <li>Prompt disciplinary action, as per the institution  rules and regulations, will be taken against individuals found guilty of ragging, which may include suspension, expulsion, legal consequences, or imprisonment of up to 3 years ,a fine of up to Rs.25,000/-, and dismissal from the educational institution, depending on the severity of the offence and in accordance with the prevailing laws and regulations.</li>
                  </ul>
                </div>

                {/* Support and Counseling */}
                <div className="space-y-3">
                  <h4 className="text-lg lg:text-xl font-bold text-[#002309]">
                    Support and Counseling:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>The institution will provide support and  counselling  services to victims of ragging, ensuring their physical and mental well-being.</li>
                    <li>Timely intervention and assistance will be provided to help victims overcome the trauma of ragging and continue their studies without disruption.</li>
                  </ul>
                </div>

                {/* Awareness and Education */}
                <div className="space-y-3">
                  <h4 className="text-lg lg:text-xl font-bold text-[#002309]">
                    Awareness and Education:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Regular awareness campaigns, workshops, and seminars will be conducted to educate students about the consequences of ragging and foster a culture of mutual respect and cooperation.</li>
                    <li>Online resources, including an E-admission booklet or brochure and leaflets, will be provided to admitted students, giving details on guidance in case of ragging instead of traditional print/hard copies.</li>
                  </ul>
                </div>

                {/* Compliance and Review */}
                <div className="space-y-3">
                  <h4 className="text-lg lg:text-xl font-bold text-[#002309]">
                    Compliance and Review:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Sresakthimayeil Institute of Nursing and Research will ensure compliance with all applicable laws and regulations related to ragging prevention.</li>
                    <li>The policy will be periodically reviewed and updated to align with best practices and address emerging challenges.</li>
                  </ul>
                </div>
              </div>

              {/* Note */}
              <div className="space-y-4 mt-8">
                <p className="text-justify">
                  <strong>Note:</strong> The policy guidelines above provide an overview of the key components of Sresakthimayeil Institute of Nursing and Research RevisedAnti-Ragging Policy. The contact information for the Nodal Officer of Anti-Ragging will be displayed on the institution & website and in various campus areas to create awareness, and online resources will be provided to students
                </p>
                <p className="text-justify">
                  to access information regarding ragging guidelines. The policy can be further expanded and tailored to align with the institution & specific requirement of  Sresakthimayeil Institute of Nursing and Research.
                </p>
              </div>

              {/* Anti-Ragging Committee Members */}
              <div className="mt-12">
                <h3 className="text-xl lg:text-2xl font-bold text-[#002309] mb-6">
                  Anti –Ragging Committee Members.
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white border border-gray-400">
                    <thead>
                      <tr className="bg-white">
                        <th className="py-3 px-4 text-center font-bold text-[#002309] border border-gray-400">
                          S.No
                        </th>
                        <th className="py-3 px-4 text-center font-bold text-[#002309] border border-gray-400">
                          Name of the faculty
                        </th>
                        <th className="py-3 px-4 text-center font-bold text-[#002309] border border-gray-400">
                          Designation
                        </th>
                        <th className="py-3 px-4 text-center font-bold text-[#002309] border border-gray-400">
                          Position
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

              {/* Anti ragging squad */}
              <div className="mt-12">
                <h3 className="text-xl lg:text-2xl font-bold text-[#002309] mb-6">
                  Anti ragging squad
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white border border-gray-400">
                    <thead>
                      <tr className="bg-white">
                        <th className="py-3 px-4 text-center font-bold text-[#002309] border border-gray-400">
                          S.No
                        </th>
                        <th className="py-3 px-4 text-center font-bold text-[#002309] border border-gray-400">
                          Name of the faculty
                        </th>
                        <th className="py-3 px-4 text-center font-bold text-[#002309] border border-gray-400">
                          Designation
                        </th>
                        <th className="py-3 px-4 text-center font-bold text-[#002309] border border-gray-400">
                          Position
                        </th>
                        <th className="py-3 px-4 text-center font-bold text-[#002309] border border-gray-400">
                          Phone Number
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {squadMembers.map((member) => (
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
                          <td className="py-3 px-4 text-center border border-gray-400">
                            {member.phone}
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
