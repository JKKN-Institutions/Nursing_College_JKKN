import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Image from "next/image";

export default function Library() {
  return (
    <>
      <Header />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Library", url: "https://nursing.sresakthimayeil.jkkn.ac.in/library" }
      ]} />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Main Title */}
        <div className="bg-[#FBFBEE] py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#002309] mb-8">
              Library
            </h1>
          </div>
        </div>

        {/* Library Images */}
        <div className="bg-[#FBFBEE] pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="w-full">
                <Image
                  src="/images/library-1.jpg"
                  alt="Library Interior View 1"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/library-2.jpg"
                  alt="Library Interior View 2"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/library-3.jpg"
                  alt="Library Interior View 3"
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
              Library is equipped with adequate books,latest National and International Journals.
            </p>

            {/* Library Rules Section */}
            <h2 className="text-2xl font-bold text-[#002309] mb-6">
              Library Rules
            </h2>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  Strict silence must be maintained in the Library.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  Reference books may be referred only within the premises of the library. It cannot be taken bythe students from the library at any time.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  The library will be kept open on all working days from 9.00 am to 6.00 pm. It will remain closed on Sundays and other recognized holidays.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  If the same book is required bymore than one applicant, it will be issued in the order of priority of their application.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  Each student will be supplied with two library tickets. Books will be issued against these ticketsonly. As soon as the book is returned the respective ticket will be returned to the student.Loss of library tickets should be brought to the notice of librarian immediately. Therespective student is responsible for all the books borrowed against her ticket.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  All markings, underlines etc. ofbooks are punishable with fine or replacement or both.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  The student must satisfy herself,whether the book issued to her is in sound condition and if the matteris not brought to the notice of the librarian, the borrower will beheld responsible for all damages to books noticed at the time of their return and they have to pay for its replacement.
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
