import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function ResearchCommittee() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Research Committee" },
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Research Committee", url: "https://nursing.sresakthimayeil.jkkn.ac.in/research-committee" }
      ]} />
      <Header />
      <div className="pt-20 sm:pt-24 lg:pt-28">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <main className="bg-[#FBFBEE]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 py-8 lg:py-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-black mb-8">
            Research Committee
          </h1>

          <div className="space-y-6 text-gray-700">
            <p className="leading-relaxed">
              The research committee of the sresakthimayeil Institute of Nursing and Research comprises highly qualified senior staff members with considerable research experience. The Research Committee advises on matters relating to the quality and standard of research being conducted at the Institution. It also encourages staff and students to come up with quality scientific publications.
            </p>

            <p className="leading-relaxed">
              To monitor and ensure the smooth conduct of research activities and ethical regulations at the Sresakthimayeil Institute of Nursing and Research, the following Research Committee has been formulated
            </p>

            <div className="mt-8 mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="py-2 pr-4 font-semibold text-black">s.no</th>
                    <th className="py-2 px-4 font-semibold text-black">Name</th>
                    <th className="py-2 px-4 font-semibold text-black">Designation</th>
                    <th className="py-2 px-4 font-semibold text-black">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4">1</td>
                    <td className="py-3 px-4 font-semibold">Mrs.R.Jamunarani</td>
                    <td className="py-3 px-4">Principal</td>
                    <td className="py-3 px-4">Convener</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4">2</td>
                    <td className="py-3 px-4 font-semibold">Mrs.Gowri.B</td>
                    <td className="py-3 px-4">Vice Principal</td>
                    <td className="py-3 px-4">Research coordinator</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4">3</td>
                    <td className="py-3 px-4 font-semibold">Mrs.Arockia mary.M</td>
                    <td className="py-3 px-4">Professor,HOD community Health Nursing</td>
                    <td className="py-3 px-4">Member</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4">4</td>
                    <td className="py-3 px-4 font-semibold">Mrs.Uma.K</td>
                    <td className="py-3 px-4">Associate professor,HOD,Mental Health</td>
                    <td className="py-3 px-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-black mb-4">Nursing</h3>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-black mb-4">Member</h3>
              <div className="space-y-2">
                <p>5. <span className="font-semibold">Mrs.Kalamani.P</span> Associate professor,HOD,OBG Member</p>
                <p>6. <span className="font-semibold">Mrs.Gayathri Devi.M</span> Associate professor,HOD,Child Health</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-black mb-4">Nursing</h3>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-black mb-4">Member</h3>
              <div className="space-y-2">
                <p>7. <span className="font-semibold">Mrs.valarmathi.K</span> Associate professor Member</p>
                <p>8 <span className="font-semibold">Mrs.Ratha.K</span> Associate professor Member</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="leading-relaxed">
                To monitor and ensure the smooth conduct of research activities and ethical regulations at the Sresakthimayeil Institute of Nursing and Research, the following Research Committee has been formulated:
              </p>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-black mb-3">
                • The key objectives and main functions of the Research Committee are as follows:
              </p>
              <div className="space-y-2 ml-4">
                <p>
                  • To identify priority areas for research in clinical , community and promote research excellence at the Institution
                </p>
                <p>
                  • To oversee the protocols for animal and human subject research with the help of the ethics committee
                </p>
                <p>
                  • To monitor the progress and timely completion of research thesis work
                </p>
                <p>
                  • To promote overall research activities and performance at the Institution
                </p>
                <p>
                  • To encourage staff to submit research proposals to various funding agencies for external grants
                </p>
                <p>
                  • To monitor the research performance of the Institution in terms of maintaining the research quality and outcomes
                </p>
                <p>
                  • To encourage the staff and students to come up with quality scientific publications
                </p>
                <p>
                  • To receive annual updates in terms of research outcomes and publications from all the departments
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-black mb-3">
                • To ensure the smooth functioning of Research &amp; Innovation activities at the Institution
              </p>
              <p className="ml-4">
                • To provide exposure to staff and students with regard to basic concepts of scientific research and communication by organizing seminars and workshops
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
