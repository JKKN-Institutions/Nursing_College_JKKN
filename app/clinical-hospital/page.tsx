import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function ClinicalHospital() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Facilities", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Hospital Training", url: "https://nursing.sresakthimayeil.jkkn.ac.in/clinical-hospital" },
      ]} />
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Main Title */}
        <div className="bg-[#FBFBEE] py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#0b7845] mb-8">
              Clinical / Hospital Facilities
            </h1>
          </div>
        </div>

        {/* Clinical Hospital Images */}
        <div className="bg-[#FBFBEE] pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="w-full">
                <Image
                  src="/images/Clinical_HospitalFacilities-1.webp"
                  alt="Hospital Corridor"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/Clinical_HospitalFacilities-2.jpg"
                  alt="Clinical Training Session"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/Clinical_HospitalFacilities-3.jpg"
                  alt="Nursing Practice Training"
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
            {/* Introduction Text */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              The institution is affiliated to different hospital which provides rich clinical experience to all students
            </p>

            {/* Affiliated Hospital Section */}
            <h2 className="text-xl font-bold text-[#002309] mb-6">
              Affiliated Hospital:
            </h2>

            <ul className="space-y-3 mb-12">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  Erode Medical center
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  Erode Emergency Care Hospital
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  Senthil Multi Speciality Hospital
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  Govt Headquarters Hospital ,Erode
                </p>
              </li>
            </ul>

            {/* Community Section */}
            <div className="mt-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div className="text-gray-700">
                    <span className="font-bold">COMMUNITY</span>
                  </div>
                </li>

                <li className="flex items-start ml-6">
                  <p className="text-gray-700">
                    RURAL- PALLAKAPALAYAM
                  </p>
                </li>

                <li className="flex items-start ml-6">
                  <p className="text-gray-700">
                    URBAN- R.N PUDUR
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
