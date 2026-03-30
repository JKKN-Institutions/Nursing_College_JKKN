import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Affiliation() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-[60vh] pt-20">
        {/* Main Content */}
        <div className="bg-[#FBFBEE] py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-[#002309] mb-8">
              Affiliation
            </h1>

            {/* Bullet Points */}
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="text-gray-700 text-base lg:text-lg">
                  Affiliated to The Tamil Nadu Dr. MGR Medical University.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="text-gray-700 text-base lg:text-lg">
                  Recognized by Indian Nursing Council
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span className="text-gray-700 text-base lg:text-lg">
                  Recognized by Tamil Nadu Nurses and Midwives Council
                </span>
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
