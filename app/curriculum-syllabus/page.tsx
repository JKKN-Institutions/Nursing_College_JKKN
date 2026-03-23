import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";

export default function CurriculumSyllabus() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Main Title */}
        <div className="bg-[#FBFBEE] py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Curriculum &amp; Syllabus Feedback — Sresakthimayeil Institute of Nursing and Research</h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0b7845] mb-12">
              FEEDBACK ON Curriculum/Syllabus
            </h2>
          </div>
        </div>

        {/* Feedback Sections */}
        <div className="bg-[#FBFBEE] pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="space-y-8">
              {/* Students Feedback */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
                <h3 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  STUDENTS FEEDBACK
                </h3>
                <Link
                  href="#"
                  className="bg-[#7cb983] text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-[#6ba872] transition-colors inline-block text-center"
                >
                  Click Here
                </Link>
              </div>

              {/* Nakshatra Alumni Feedback */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
                <h3 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  NAKSHATRA ALUMNI FEEDBACK
                </h3>
                <Link
                  href="#"
                  className="bg-[#7cb983] text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-[#6ba872] transition-colors inline-block text-center"
                >
                  Click Here
                </Link>
              </div>

              {/* Faculty Feedback */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
                <h3 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  FACULTY FEEDBACK
                </h3>
                <Link
                  href="#"
                  className="bg-[#7cb983] text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-[#6ba872] transition-colors inline-block text-center"
                >
                  Click Here
                </Link>
              </div>

              {/* Employer Feedback */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
                <h3 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  EMPLOYER FEEDBACK
                </h3>
                <Link
                  href="#"
                  className="bg-[#7cb983] text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-[#6ba872] transition-colors inline-block text-center"
                >
                  Click Here
                </Link>
              </div>

              {/* Professionals Feedback */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4">
                <h3 className="text-xl lg:text-2xl font-bold text-[#002309]">
                  PROFESSIONALS FEEDBACK
                </h3>
                <Link
                  href="#"
                  className="bg-[#7cb983] text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-[#6ba872] transition-colors inline-block text-center"
                >
                  Click Here
                </Link>
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
