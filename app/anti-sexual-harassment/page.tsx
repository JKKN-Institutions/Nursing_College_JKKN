import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";
import Image from "next/image";

export default function AntiSexualHarassment() {
  const committeeMembers = [
    { sno: 1, name: "Mrs. Dr.Jamuna Rani.R", designation: "Principal", position: "Chairperson", phone: "9788732098" },
    { sno: 2, name: "Mr.S.Rajendran", designation: "Chief Administrative Officer", position: "Convenor", phone: "9942541666" },
    { sno: 3, name: "Mrs.Gowri.B", designation: "Vice-principal", position: "Member", phone: "9894302206" },
    { sno: 4, name: "Mrs.Arockiamary.M", designation: "Professor", position: "Member", phone: "9865219184" },
    { sno: 5, name: "Mrs. Uma.K", designation: "Associate professor", position: "Member", phone: "9943726517" },
  ];

  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Main Title */}
        <div className="bg-[#FBFBEE] py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">Anti-Sexual Harassment Policy — JKKN College of Nursing</h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0b7845] mb-8">
              Internal Compliance Committee
            </h2>
          </div>
        </div>

        {/* Hero Image */}
        <div className="bg-[#FBFBEE] pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="relative w-full aspect-[16/6] bg-gray-200 overflow-hidden">
              <Image
                src="/images/discipline/jkkn-gate.jpg"
                alt="JKKN Nattraja Institutions"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-[#FBFBEE] pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="space-y-6 text-gray-700 text-base leading-relaxed">
              {/* Internal Compliance Committee */}
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Internal Compliance Committee
                </h3>
                <p className="text-justify">
                  Establishing an internal compliance committee for a nursing college is important to ensure rules are followed, especially regarding anti-sexual harassment.
                </p>
              </div>

              {/* Anti-Sexual Harassment Committee */}
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  Anti – Sexual Harassment Committee
                </h3>
                <p className="text-justify">
                  The anti-Sexual Harassment Cell in the Nursing Department is committed to creat a safe, respectful, and inclusive environment for all members of the nursing community. Introduction: The Anti-Sexual Harassment Cell at the nursing college is a dedicated entity committed to preventing and addressing incidents of sexual harassment within the institution.
                </p>
                <p className="text-justify">
                  This cell is essential for creating a safe and respectful environment for all members of the college community. Objective: The primary goal of the Anti-Sexual Harassment Cell is to ensure the prevention of sexual harassment and provide a mechanism for reporting and redressal. The cell works towards creating awareness, promoting a culture of respect, and ensuring the physical and mental well-being of all individuals within the college. Composition: The Anti-Sexual Harassment Cell comprises members from diverse backgrounds, including <strong>faculty,administrative</strong>
                </p>
                <p className="text-justify">
                  staff, legal experts, and external members, to ensure a fair and unbiased approach in handling complaints. Scope: The cell&#39;s jurisdiction covers all areas and activities within the nursing college premises, including classrooms, laboratories, hostels, common areas, transportation, and off- campus events associated with the institution.
                </p>
              </div>

              {/* Functions */}
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  FUNCTIONS :
                </h3>
                <div className="space-y-3">
                  <p className="text-justify">
                    1. Awareness Programs: Conduct regular awareness programs to educate students and staff about what constitutes sexual harassment, its forms, and the consequences.
                  </p>
                  <p className="text-justify">
                    2. Prevention Measures: Implement preventive measures such as orientation sessions Along With Anti-Ragging Seminar to foster a culture of respect and dignity.
                  </p>
                  <p className="text-justify">
                    3. Complaint Reporting: Establish confidential channels for reporting sexual harassment incidents, including a dedicated helpline, email, physical complaint boxes, and an online reporting system.
                  </p>
                  <p className="text-justify">
                    4. Complaint Investigation: The Anti-Sexual Harassment Cell is responsible for impartially and thoroughly investigating reported incidents. This involves gathering information, interviewing witnesses, and examining any available evidence.
                  </p>
                  <p className="text-justify">
                    5. Disciplinary Action: Prompt disciplinary action will be taken against individuals found guilty of sexual harassment, following the institution&#39;s rules and regulations. The consequences may include suspension, expulsion, legal actions, or other measures depending on the severity of the offense.
                  </p>
                  <p className="text-justify">
                    6. Support and Counseling: Provide support and counseling
                  </p>
                  <p className="text-justify">
                    services to victims of sexual harassment, ensuring their physicaland mental well-being. Timely intervention and assistance will be provided to help victims overcome the trauma.
                  </p>
                  <p className="text-justify">
                    7. Awareness and Education: Conduct regular awareness campaigns and educational initiatives to sensitize the college community about the importance of preventing and addressing
                  </p>
                  <p className="text-justify">
                    sexual harassment.
                  </p>
                  <p className="text-justify">
                    8. Compliance and Review: Ensure compliance with all relevant laws and regulations pertaining to sexual harassment prevention. Periodically review and update the anti-sexual harassment policy to align with best practices and address emerging challenges.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="space-y-4">
                <p className="text-justify">
                  <strong>Conclusion</strong>: The Anti-Sexual Harassment Cell plays a crucial role in maintaining a safe and respectful environment within the nursing college. By promoting awareness, providing support, and taking decisive action, the cell contributes to the overall well-being and security of everyone associated with the institution.
                </p>
              </div>

              {/* Committee Table */}
              <div className="mt-12">
                <h3 className="text-xl lg:text-2xl font-bold text-[#002309] mb-6">
                  Anti- Sexual Harassment Cell :
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
