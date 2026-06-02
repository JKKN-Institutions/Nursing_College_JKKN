import { createClient } from '@/lib/supabase/server';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const dynamic = 'force-dynamic';

export default async function FacultyDetails() {
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID;

  const { data: members } = await supabase
    .from('faculty')
    .select('id, name, designation, department, email, qualification')
    .eq('college_id', collegeId)
    .eq('is_active', true)
    .order('display_order', { ascending: true })
    .order('name', { ascending: true });

  const facultyData = (members ?? []).map((m, i) => ({
    sno: i + 1,
    name: m.name,
    designation: m.designation,
    department: m.department,
    email: m.email,
    qualification: m.qualification,
  }));

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Faculty", url: "https://nursing.sresakthimayeil.jkkn.ac.in/faculty-details" }
      ]} />
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-28">
        <div className="bg-[#FBFBEE] py-6 sm:py-8 lg:py-12">
          <div className="container mx-auto px-3 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">Faculty Details — JKKN College of Nursing</h1>
            <p className="text-sm text-gray-500 mb-2 sm:hidden text-center">
              ← Scroll horizontally to view all columns →
            </p>
            <div className="overflow-x-auto -webkit-overflow-scrolling-touch rounded-lg shadow-sm">
              <table className="w-full border-collapse bg-white border border-gray-400 min-w-[700px]">
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
                <tbody>
                  {facultyData.length > 0 ? (
                    facultyData.map((faculty) => (
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
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-gray-500 border border-gray-400">
                        No faculty members found. Please sync from MyJKKN.
                      </td>
                    </tr>
                  )}
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
