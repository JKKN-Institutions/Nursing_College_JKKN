import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";

export default function CodeOfConduct() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-28">
        {/* Main Title */}
        <div className="bg-[#FBFBEE] py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#002309] mb-12">
              CODE OF CONDUCT
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-[#FBFBEE] pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">

            {/* Committees Section */}
            <h2 className="text-2xl lg:text-3xl font-bold text-[#002309] mb-6">
              COMMITTEES FOR CODE OF CONDUCT
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Sresakthimayeil Institute of Nursing and Research has framed a committee for code of conduct in order to maintain discipline, dignity and smooth conduction of Institutional work.
            </p>

            {/* Three Columns for Committee Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Column 1: Students */}
              <div>
                <h3 className="text-xl font-bold text-[#002309] mb-4">
                  I. COMPOSITION OF MEMBERS FOR STUDENTS
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>PRINCIPAL</strong> : Dr.R.JAMUNA RANI,M.Sc.,(N),PhD.,</p>
                  <p><strong>VICE – PRINCIPAL</strong> :Mrs.GOWRI.B,M.sc(N).,</p>
                  <p><strong>PROFESSOR</strong>: Mrs. AROCKIAMARY.M,M.sc(N).,</p>
                  <p><strong>All Class – Coordinators</strong></p>
                  <p><strong>WARDEN</strong>: SEETHALAKSHMI (GIRLS hostel) MR.SINGARAVEL (Boys hostel)</p>
                </div>
              </div>

              {/* Column 2: Staffs */}
              <div>
                <h3 className="text-xl font-bold text-[#002309] mb-4">
                  II. COMPOSITION OF MEMBERS FOR STAFFS
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Principal</strong> : Dr.R.JAMUNA RANI,M.Sc.,(N),PhD.,</p>
                  <p><strong>Vice Principal</strong> :Mrs.GOWRI.B,M.sc(N).,</p>
                  <p><strong>Professor</strong>: Mrs. AROCKIAMARY.M,M.sc(N).,</p>
                </div>
              </div>
            </div>

            {/* Column 3: Non-Teaching Staffs */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#002309] mb-4">
                III. COMPOSITION OF MEMBERS FOR NON-TEACHING STAFFS
              </h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Principal</strong>: Dr.R.JAMUNARANI, M.Sc.,(N),PhD.,MUNARAN</p>
                <p><strong>Vice Principal</strong> :Mrs. GOWRI.B, M.sc(N).,</p>
                <p><strong>Associate Professor</strong> : Mrs.UMA.K,M.sc(N).,</p>
                <p><strong>Housekeeping Supervisor</strong>: Mrs.Lalitha</p>
              </div>
            </div>

            {/* Code of Conduct for Nursing Students */}
            <h2 className="text-2xl lg:text-3xl font-bold text-[#002309] mb-6">
              CODE OF CONDUCT FOR NURSING STUDENTS:
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              According to Tamil Nadu Government Educational rules, the Principal is authorized to initiate legal action, withhold certificates, and suspend or expel any student if deemed necessary.
            </p>

            <ul className="space-y-4 text-gray-700 mb-12 list-disc list-inside">
              <li>Punctuality is expected for all sessions, including theory, practical classes, and clinical /community postings.</li>

              <li>An ID card must be worn at all times within the college, hospital, and community premises. Students without ID cards will not be permitted on campus.</li>

              <li>Everyone can greet each other and offer vanakkam through holding hands in front and Smile Act according to hospital protocol. Never put a patient in harm's way. Safety first. Ask an excuse when overtaking a senior person..</li>

              <li>Be polite, enthusiastic, eager to be helpful and positive. Maintain silence</li>
            </ul>

            <p className="text-gray-700 mb-6 leading-relaxed">
              wherever and whenever it is necessary.
            </p>

            <ul className="space-y-4 text-gray-700 mb-12 list-disc list-inside">
              <li>Students should arrive in the classroom at least five minutes before each session. Unnecessary roaming on campus is prohibited.</li>

              <li>Students should take Tests and assignments seriously.</li>

              <li>Students are expected to go through the course fully, in which they have joined. If any student wants to discontinue in the middle, Transfer Certificate</li>
            </ul>

            <p className="text-gray-700 mb-6 leading-relaxed">
              will be issued only if he or she pays the entire college fees in full, for the remaining forthcoming semesters of the course.
            </p>

            <ul className="space-y-4 text-gray-700 mb-12 list-disc list-inside">
              <li>While on hospital /community duty never use any form of jewels that may interfere with work.</li>

              <li>Cell phone use is restricted to college-related activities. Texting or talking during class, clinical/community duties is strictly prohibited.</li>
            </ul>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Any change in student/parent/guardian residence should be promptly reported to the Principal.
            </p>

            <ul className="space-y-4 text-gray-700 mb-12 list-disc list-inside">
              <li>Students are advised to utilize the college transport facility to be safe and be on time.</li>

              <li>No leave will be availed unless it is permitted by the Principal and If any medical leave has been taken, a medical certificate has to be produced on the day of arrival.</li>

              <li>Smoking, use of tobacco products, alcohol, and addictive drugs are strictly forbidden on college premises.</li>

              <li>Avoid using disrespectful language, engaging in demeaning or insulting behavior, or criticizing peers in front of patients, their families, or colleagues.</li>

              <li>Refrain from discussing topics like religion, politics, salary, personal problems, or making distasteful jokes.</li>

              <li>Eve-teasing, ragging, and harassment are strictly prohibited within the college campus. Offenders will face severe consequences.</li>

              <li>Respect gender boundaries; boys should not enter girls' common areas and vice versa.</li>

              <li>Maintain a clean college campus. Damaging college property results in punishment and associated charges.</li>

              <li>Organizing tours, meetings, or collecting money without prior Principal permission is prohibited.</li>

              <li>Mass absence, agitation, demonstrations, and instigating violence are serious breaches of discipline and will be met with severe action.</li>
            </ul>

            {/* Dress Code Section */}
            <h2 className="text-2xl lg:text-3xl font-bold text-[#002309] mb-6">
              Dress Code:
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Students must adhere strictly to the following dress code in college, hospital, and
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              community settings:
            </p>

            {/* Boys and Girls Dress Code Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Boys */}
              <div>
                <h3 className="text-xl font-bold text-[#002309] mb-4">Boys:</h3>
                <ul className="space-y-3 text-gray-700 list-disc list-inside">
                  <li>Formal pants and shirts (half or full sleeves) are required.</li>
                  <li>Jeans, casual wear, and T-Shirts are not permitted.</li>
                  <li>Formal shoes only; slippers and sports shoes are prohibited.</li>
                  <li>Maintain well-groomed nails, hair, mustache, and beard.</li>
                </ul>
              </div>

              {/* Girls */}
              <div>
                <h3 className="text-xl font-bold text-[#002309] mb-4">Girls:</h3>
                <ul className="space-y-3 text-gray-700 list-disc list-inside">
                  <li>Wear only chudithar with a long top and neatly pinned dupatta.</li>
                  <li>Short tops without dupatta, jeans, and T-Shirts are not allowed.</li>
                  <li>Avoid tight bottoms, leggings, and revealing attire.</li>
                  <li>Normal sandals/shoes are appropriate.</li>
                </ul>
              </div>
            </div>

            {/* Hostel Rules and Anti-Ragging Rules Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Hostel Rules */}
              <div>
                <h3 className="text-xl font-bold text-[#002309] mb-4">Hostel Rules:</h3>
                <p className="text-gray-700 mb-4">For hostel residents, the following rules apply:</p>
                <ul className="space-y-3 text-gray-700 list-disc list-inside">
                  <li>Hostellers must Occupy allotted rooms and maintain cleanliness.</li>
                  <li>All the inmates should leave the hostel at the correct time before the</li>
                </ul>
                <p className="text-gray-700 my-3">commencement of the classes.</p>
                <ul className="space-y-3 text-gray-700 list-disc list-inside">
                  <li>No student is allowed to stay in the hostel during the college hours without</li>
                </ul>
                <p className="text-gray-700 my-3">prior permission of the warden.</p>
                <ul className="space-y-3 text-gray-700 list-disc list-inside">
                  <li>The main gate of the hostel will close at 6:00 pm and reopen at 6:00 am.</li>
                  <li>Sick students should inform the warden for necessary treatment.</li>
                  <li>Avoid unlawful or undesirable activities.</li>
                  <li>Students are responsible for room damages and will be charged accordingly</li>
                  <li>Valuables are discouraged; management is not liable for losses.</li>
                  <li>Opposite-sex parents/guardians cannot stay in the hostel.</li>
                  <li>Limit electrical appliance usage.</li>
                  <li>Cell phones are permitted for educational purposes.</li>
                  <li>Lock rooms when away; keys are for warden only.</li>
                  <li>Gender separation is enforced; no entry into opposite-sex hostels.</li>
                  <li>Ragging is strictly banned; offenders face expulsion.</li>
                  <li>Celebrations and parties are not allowed.</li>
                  <li>Off-campus activities require Principal and warden permission.</li>
                </ul>
              </div>

              {/* Anti-Ragging Rules */}
              <div>
                <h3 className="text-xl font-bold text-[#002309] mb-4">Anti-Ragging Rules:</h3>
                <p className="text-gray-700 mb-4">
                  The Institution follows anti-ragging rules set by the Nursing Council ofIndia and the TamilNadu Dr. M.G.R. Medical University. Administrative actions incases of ragging include:
                </p>
                <ul className="space-y-3 text-gray-700 list-disc list-inside">
                  <li>Suspension from classes and academic privileges.</li>
                  <li>Withholding scholarships and benefits.</li>
                  <li>Examination-related penalties.</li>
                  <li>Suspension/expulsion from the hostel.</li>
                  <li>Cancellation of admission.</li>
                  <li>Expulsion and debarring from other institutions.</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  These measures aim to maintain discipline, safety, and respect within our institution and ensure a conducive learning environment for all.
                </p>
              </div>
            </div>

            {/* Code of Conduct for the Principal */}
            <h2 className="text-2xl lg:text-3xl font-bold text-[#002309] mb-6">
              CODE OF CONDUCT FOR THE PRINCIPAL:
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              The Principal is expected to adhere to the following codes of conduct in their professional conduct:
            </p>

            <ol className="space-y-4 text-gray-700 mb-12 list-decimal list-outside ml-6">
              <li>Principal should actively strive for the institution's development, recognizing the collective interests of various segments within the institution to achieve outstanding results.</li>

              <li>Fair treatment of all staff members is paramount, with no room for discrimination based on religion, caste, political affiliation, economic status, social background, or gender.</li>

              <li>The Principal is obligated to take decisive measures to prevent and eliminate incidents of sexual harassment and ragging among both students and staff.</li>

              <li>Financial transparency must be upheld in all matters pertaining to the institution's finances, ensuring accountability and clarity.</li>

              <li>The Principal must instill a culture of professional conduct among the staff, adhering to established standards.</li>

              <li>Encouragement of faculty participation in seminars, workshops, symposiums, and conferences is a priority, fostering intellectual growth and</li>
            </ol>

            <p className="text-gray-700 mb-6 leading-relaxed">development.</p>

            <ol start={7} className="space-y-4 text-gray-700 mb-12 list-decimal list-outside ml-6">
              <li>The Principal should actively promote research initiatives, motivating the submission of scientific papers for publication.</li>

              <li>Extracurricular activities should be championed to boost students' self-esteem and foster a sense of community and social involvement.</li>

              <li>Embracing a decentralized approach is recommended to foster employee confidence and empowerment.</li>

              <li>Upholding an enriching educational environment while respecting the fundamental rights of both staff and students is a fundamental responsibility.</li>

              <li>Creating an atmosphere conducive to learning and growth for both students and staff is a key objective.</li>
            </ol>

            {/* Code of Conduct for the Faculty */}
            <h2 className="text-2xl lg:text-3xl font-bold text-[#002309] mb-6">
              CODE OF CONDUCT FOR THE FACULTY:
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              The main aim of the teaching profession, particularly in the context of a nursing faculty, encompasses a wide range of responsibilities and contributions that collectively contribute to the overall functioning and success of the institution.
            </p>

            <ul className="space-y-4 text-gray-700 mb-12 list-disc list-inside">
              <li>Faculty members should maintain an open and receptive stance towards students' viewpoints, taking extra measures to support those who require additional assistance.</li>

              <li>faculty members must lead by example, inspiring students to be inquisitive explorers of knowledge, attitude, and practice. Beyond professional</li>
            </ul>

            <p className="text-gray-700 mb-6 leading-relaxed">
              competence, faculty members should instill values of patriotism, community service, and social responsibility among students.
            </p>

            <ul className="space-y-4 text-gray-700 mb-12 list-disc list-inside">
              <li>Preserving the dignity of the profession is of utmost importance for nursing faculty members.</li>

              <li>Nursing faculties are encouraged to stay enthusiastic about learning recent advances and innovations, integrating this newfound knowledge into their teaching.</li>

              <li>Dedicating time to research is essential for faculty members, providing students with opportunities to engage in research pursuits as well.</li>

              <li>Mentorship roles are embraced by faculty members, guiding students through seminars, CNEs (Continuing Nursing Education), workshops,</li>
            </ul>

            <p className="text-gray-700 mb-6 leading-relaxed">
              interactive sessions, as well as sports and cultural activities. Functioning in alignment with the institution's guidelines, nursing faculty
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              members collectively contribute to students' educational, mental health, and social well-being.
            </p>

            <ul className="space-y-4 text-gray-700 mb-12 list-disc list-inside">
              <li>Active participation in Parent Teacher Meetings, conducted thrice a year, facilitates valuable interaction between faculty and parents.</li>
            </ul>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Adherence to the principles of scientific research and writing enhances the credibility of nursing faculty contributions.
            </p>

            <ul className="space-y-4 text-gray-700 mb-12 list-disc list-inside">
              <li>To ensure the seamless operation of the institution, nursing faculty members minimize unnecessary absences and prioritize regular attendance.</li>
            </ul>

            {/* Code of Conduct for Maintenance Staff */}
            <h2 className="text-2xl lg:text-3xl font-bold text-[#002309] mb-6">
              CODE OF CONDUCT FOR MAINTENANCE STAFF:
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Supporting staff should follow and observe the following rules of conduct.
            </p>

            <ul className="space-y-4 text-gray-700 mb-12 list-disc list-inside">
              <li>Supporting staff should understand policies of the institution and should sincerely carry out the duties delegated to them.</li>

              <li>Unless in cases of extreme emergencies, inform both supervisory authorities and the institution well in advance regarding any planned leaves of absence.</li>

              <li>Refrain from engaging in any other professional endeavors during designated working hours and abstain from participating in or promoting any personal business activities within the institution.</li>

              <li>Demonstrate the utmost respect towards peers, supervisors, fellow officers, management, and students, refraining from actions that may hurt the sentiments of individuals or groups.</li>

              <li>Prioritize punctuality in daily tasks to fulfill the requirement of their presence and contribute to the smooth operation of the institution.</li>

              <li>Handle equipment with care to ensure their longevity and optimal functionality.</li>

              <li>Abstain from the use of drugs, tobacco, pan chewing, or alcohol while on duty.</li>

              <li>Refrain from falsifying any original documents to which they may have access.</li>

              <li>Maintain a high standard of honesty and integrity while carrying out their duties.</li>

              <li>Avoid forming emotional relationships with students or their parents/guardians, maintaining professional boundaries at all times.</li>

              <li>Show deference to management decisions and strive to resolve conflicts through amicable means.</li>

              <li>Foster an environment of mutual trust and goodwill among colleagues, contributing to a harmonious atmosphere on campus. Individuals should not hinder this positive environment through their actions, words, or thoughts.</li>
            </ul>

          </div>
        </div>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
