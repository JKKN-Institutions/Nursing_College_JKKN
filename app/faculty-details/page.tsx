import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function FacultyDetails() {
  const facultyData = [
    { sno: 1, name: "Jamuna Rani R", designation: "Principal cum HOD", department: "Medical-Surgical Nursing", email: "nursingprincipal@jkkn.ac.in", qualification: "MSC NURSING P.HD" },
    { sno: 2, name: "Gowri B", designation: "Professor", department: "Medical-Surgical Nursing", email: "hodmedicalsurgical@jkkn.ac.in", qualification: "MSC NURSING" },
    { sno: 3, name: "Arockiamary M", designation: "Professor", department: "Community Health Nursing", email: "hodcommunityhealth@jkkn.ac.in", qualification: "MSC NURSING" },
    { sno: 4, name: "Buvaneswari J", designation: "Professor", department: "Obstetrics and Gynaecological Nursing", email: "buvaneswari@jkkn.ac.in", qualification: "MSC NURSING" },
    { sno: 5, name: "Sasikala M", designation: "Associate Professor", department: "Community Health Nursing", email: "sasikala@jkkn.ac.in", qualification: "MSC NURSING" },
    { sno: 6, name: "Thangamunishwari.S", designation: "Professor", department: "Community Health Nursing", email: "thangamunishwari@jkkn.ac.In", qualification: "MSC NURSING" },
    { sno: 7, name: "Uma K", designation: "Associate Professor", department: "Psychiatric Nursing", email: "hodmentalhealth@jkkn.ac.in", qualification: "MSC NURSING" },
    { sno: 8, name: "Valarmathi K", designation: "Associate Professor", department: "Medical Surgical Nursing", email: "valarmathi.k@jkkn.ac.in", qualification: "MSC NURSING" },
    { sno: 9, name: "Julyet vidhya M", designation: "Associate Professor", department: "Child health nursing", email: "julyetvidhya@jkkn.ac.in", qualification: "MSC NURSING" },
    { sno: 10, name: "Prabhakaran B", designation: "Associate Professor", department: "Psychiatric Nursing", email: "prabhakaran.b@jkkn.ac.in", qualification: "MSC NURSING" },
    { sno: 11, name: "Saranya S", designation: "Associate Professor", department: "Child health nursing", email: "", qualification: "MSC NURSING" },
    { sno: 12, name: "Radha S", designation: "Associate Professor", department: "Psychiatric Nursing", email: "radha_s@jkkn.ac.in", qualification: "MSC NURSING" },
    { sno: 13, name: "kalamani", designation: "Assistant Professor", department: "Obstetrics and Gynaecological Nursing", email: "hodobg@jkkn.ac.in", qualification: "MSC NURSING" },
    { sno: 14, name: "Thilagam.L", designation: "Assistant Professor", department: "Community Health Nursing", email: "thilagam.g@jkkn.ac.in", qualification: "MSC NURSING" },
    { sno: 15, name: "saranya.s", designation: "Assistant Professor", department: "Child health nursing", email: "saranya_m@jkkn.ac.in", qualification: "MSC NURSING" },
    { sno: 16, name: "sathya.p", designation: "Assistant Professor", department: "Child health nursing", email: "sathiya.p@jkkn.ac.in", qualification: "MSC NURSING" },
    { sno: 17, name: "Hema Devi G", designation: "Nursing Tutor", department: "B.Sc(N)", email: "hemadevi@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 18, name: "Shabnathai N", designation: "Nursing Tutor", department: "B.Sc(N)", email: "shabnathaj@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 19, name: "Kaniyamuthan S", designation: "Nursing Tutor", department: "B.Sc(N)", email: "kaniyamuthan@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 20, name: "Geetha J", designation: "Nursing Tutor", department: "B.Sc(N)", email: "geetha@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 21, name: "Prasad R", designation: "Nursing Tutor", department: "B.Sc(N)", email: "prasad@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 22, name: "Bhaktha vivekananda king", designation: "Nursing Tutor", department: "B.Sc(N)", email: "bakthvivekanandha@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 23, name: "Kerly C Johnson B", designation: "Nursing Tutor", department: "B.Sc(N)", email: "kerlycjohnson@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 24, name: "Renuka G", designation: "Nursing Tutor", department: "B.Sc(N)", email: "renuka_m@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 25, name: "Revathi E", designation: "Nursing Tutor", department: "B.Sc(N)", email: "revathie@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 26, name: "Ranjith Kumar V", designation: "Nursing Tutor", department: "B.Sc(N)", email: "ranjithkumar@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 27, name: "Sevanthi.P", designation: "Nursing Tutor", department: "B.Sc(N)", email: "sevanthi@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 28, name: "Keerthana.C", designation: "Nursing Tutor", department: "B.Sc(N)", email: "keerthana.c@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 29, name: "Gunasundari.s", designation: "Nursing Tutor", department: "B.Sc(N)", email: "gunasundari@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 30, name: "Gokulapriya.K", designation: "Nursing Tutor", department: "B.Sc(N)", email: "gokulapriya.k@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 31, name: "Suresh.R", designation: "Nursing Tutor", department: "B.Sc(N)", email: "suresh@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 32, name: "Madhiyarasan.V", designation: "Nursing Tutor", department: "B.Sc(N)", email: "mathiyarasan@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 33, name: "Haribalaji.M", designation: "Nursing Tutor", department: "B.Sc(N)", email: "haribalaji@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 34, name: "Sathya.G", designation: "Nursing Tutor", department: "B.Sc(N)", email: "sathya.g@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 35, name: "Umadevi.P", designation: "Nursing Tutor", department: "B.Sc(N)", email: "umadevi@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 36, name: "Mekala.t", designation: "Nursing Tutor", department: "B.Sc(N)", email: "mekala.t@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 37, name: "Sankar.C", designation: "Nursing Tutor", department: "B.Sc(N)", email: "sankar.c@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 38, name: "Vijayalakshmi.S", designation: "Nursing Tutor", department: "B.Sc(N)", email: "vijayalakshmi@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 39, name: "Ayyammal.M", designation: "Nursing Tutor", department: "B.Sc(N)", email: "ayyammal@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 40, name: "Mythili.m", designation: "Nursing Tutor", department: "B.Sc(N)", email: "mythilim1@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 41, name: "keerthana.k", designation: "Nursing Tutor", department: "B.Sc(N)", email: "keerthanak@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 42, name: "Apsarakumar", designation: "Nursing Tutor", department: "B.Sc(N)", email: "apsarakumar@jkkn.ac.in", qualification: "B.Sc(N)" },
    { sno: 43, name: "Gobika k", designation: "Nursing Tutor", department: "B.Sc(N)", email: "gobikak@jkkn.ac.in", qualification: "B.Sc(N)" },
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Faculty", url: "https://nursing.sresakthimayeil.jkkn.ac.in/faculty-details" }
      ]} />
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Main Content */}
        <div className="bg-[#FBFBEE] py-6 sm:py-8 lg:py-12">
          <div className="container mx-auto px-3 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">Faculty Details — JKKN College of Nursing</h1>
            {/* Mobile scroll indicator */}
            <p className="text-sm text-gray-500 mb-2 sm:hidden text-center">
              ← Scroll horizontally to view all columns →
            </p>
            {/* Table Container with improved scrolling */}
            <div className="overflow-x-auto -webkit-overflow-scrolling-touch rounded-lg shadow-sm">
              <table className="w-full border-collapse bg-white border border-gray-400 min-w-[700px]">
                {/* Table Header */}
                <thead>
                  <tr>
                    <th colSpan={6} className="py-3 sm:py-4 px-2 sm:px-4 text-center text-base sm:text-lg lg:text-xl font-bold text-[#002309] border border-gray-400 bg-white">
                      STAFF NAME LIST
                    </th>
                  </tr>
                  <tr className="bg-gray-50">
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm font-bold text-[#002309] border border-gray-400 whitespace-nowrap">
                      S.No
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm font-bold text-[#002309] border border-gray-400 min-w-[120px]">
                      NAME OF<br />FACULTY
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm font-bold text-[#002309] border border-gray-400 min-w-[100px]">
                      DESIGNATION
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm font-bold text-[#002309] border border-gray-400 min-w-[140px]">
                      DEPARTMENT
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm font-bold text-[#002309] border border-gray-400 min-w-[160px]">
                      EMAIL
                    </th>
                    <th className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm font-bold text-[#002309] border border-gray-400 min-w-[100px]">
                      QUALIFICATION
                    </th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                  {facultyData.map((faculty) => (
                    <tr key={faculty.sno} className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm border border-gray-400">
                        {faculty.sno}
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm border border-gray-400">
                        {faculty.name}
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm border border-gray-400">
                        {faculty.designation}
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm border border-gray-400">
                        {faculty.department}
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm border border-gray-400 break-all">
                        {faculty.email && (
                          <a href={`mailto:${faculty.email}`} className="text-primary hover:underline">
                            {faculty.email}
                          </a>
                        )}
                      </td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm border border-gray-400">
                        {faculty.qualification}
                      </td>
                    </tr>
                  ))}
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
