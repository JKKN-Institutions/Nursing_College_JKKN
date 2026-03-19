import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Image from "next/image";

export default function Laboratories() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Main Title */}
        <div className="bg-[#FBFBEE] py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#002309] mb-8">
              Laboratories
            </h1>
          </div>
        </div>

        {/* Laboratory Images */}
        <div className="bg-[#FBFBEE] pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="w-full">
                <Image
                  src="/images/laboratories-1.webp"
                  alt="Nursing Laboratory 1"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/laboratories-2.webp"
                  alt="Nursing Laboratory 2"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/laboratories-3.webp"
                  alt="Nursing Laboratory 3"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-[#FBFBEE] pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  All the laboratories are equipped with Mannequins, Simulators, and Necessary Articles for Procedure Demonstrations.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  Laboratories are utilized for demonstrations and student practice of procedures under supervision.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  The laboratories at JKKN are regularly updated with the latest equipment and technology to ensure that students are prepared for the latest developments in the nursing field.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  The instructors at JKKN are highly trained and experienced in utilizing the laboratories to provide hands-on learning opportunities for their students.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
