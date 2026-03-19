import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function Transport() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Transport", url: "https://nursing.sresakthimayeil.jkkn.ac.in/transport" }
      ]} />
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Main Title */}
        <div className="bg-[#FBFBEE] py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#002309] mb-8">
              Transport
            </h1>
          </div>
        </div>

        {/* Transport Images */}
        <div className="bg-[#FBFBEE] pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="w-full">
                <Image
                  src="/images/transport-1.webp"
                  alt="College Transport Buses 1"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/transport-2.webp"
                  alt="College Transport Buses 2"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/transport-3.webp"
                  alt="College Transport Buses 3"
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
                  Our college transport facility is convenient for students who live off-campus and do not have access to public transportation.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  It saves them the hassle of arranging their own transportation and helps them arrive on time for classes and other college activities.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  Safety: Our college transport facility provides a safe and secure mode of transportation for students. This service ensures that students do not have to walk or travel alone, especially during late hours when the campus is less crowded.
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
