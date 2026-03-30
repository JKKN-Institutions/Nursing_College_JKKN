import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";
import Image from "next/image";

export default function GeneralDiscipline() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20">
        {/* Main Content */}
        <div className="bg-[#FBFBEE] py-8 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-[#0b7845] mb-8 lg:mb-12">
              General Discipline
            </h1>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column - Image */}
              <div className="w-full">
                <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/discipline/general-discipline.jpg"
                    alt="General Discipline"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right Column - Text Content */}
              <div className="w-full">
                <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
                  <li className="text-justify">
                    All students should wear IDs during working hours.
                  </li>
                  <li className="text-justify">
                    All the students should be inside the classroom at 9.00 am in the morning and 2.00 pm in the afternoon
                  </li>
                  <li className="text-justify">
                    The students should get leave permissions from the principal and should intimate the class co-coordinator.
                  </li>
                  <li className="text-justify">
                    The students will be permitted to take leave through phone from the principal in case of any emergency.
                  </li>
                  <li className="text-justify">
                    Do not use cell phones inside the college campus.
                  </li>
                  <li className="text-justify">
                    All the students should utilize library hours daily without fail.
                  </li>
                  <li className="text-justify">
                    All the students should maintain study hours in the hostel properly.
                  </li>
                  <li className="text-justify">
                    Smoking inside the college or hostel premises, throwing out waste paper, defacing the walls, and committing nuisance on the grounds are punishable offenses.
                  </li>
                  <li className="text-justify">
                    No students shall take part in organizing any demonstration or strike.
                  </li>
                  <li className="text-justify">
                    Students on the rolls of the college are forbidden to take an active part in political agitation directed against the authority of the government.
                  </li>
                  <li className="text-justify">
                    To maintain the reputation of the college or hostel.
                  </li>
                </ul>
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
