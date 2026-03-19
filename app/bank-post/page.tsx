import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function BankPost() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Facilities", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Bank & Post Office", url: "https://nursing.sresakthimayeil.jkkn.ac.in/bank-post" },
      ]} />
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Main Title */}
        <div className="bg-[#FBFBEE] py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#0b7845] mb-8">
              Bank & Post Office
            </h1>
          </div>
        </div>

        {/* Bank & Post Office Images */}
        <div className="bg-[#FBFBEE] pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="w-full">
                <Image
                  src="/images/bank_postoffice-1.webp"
                  alt="Indian Bank ATM"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/bank_postoffice-2.webp"
                  alt="Post Office Building"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/bank_postoffice-3.webp"
                  alt="ATM Facility"
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
              Looking for hassle-free banking and postal services? Look no further than the JKKN Educational Institutions, where we offer a range of convenient and reliable banking and postal services to our students and staff. Here are some of the key benefits you can enjoy:
            </p>

            {/* Banking Facilities Section */}
            <h2 className="text-lg font-bold text-[#002309] mb-4">
              BANKING FACILITIES:
            </h2>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-gray-700">
                  Our campus has a fully-functional branch of a popular bank, so you can handle all your banking needs right here on campus.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-gray-700">
                  The bank offers a range of services, including account opening, cash deposits and withdrawals, fund transfers, and more.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-gray-700">
                  You can also avail of special offers and discounts exclusively for JKKN students and staff.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-gray-700">
                  With our banking facility, you can save time and effort, and focus on your studies and work without worrying about your financial transactions.
                </p>
              </li>
            </ul>

            {/* Postal Services Section */}
            <h2 className="text-lg font-bold text-[#002309] mb-4">
              POSTAL SERVICES:
            </h2>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-gray-700">
                  money orders, and postal life insurance.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-gray-700">
                  With our postal services, you can stay connected with your loved ones and business associates, and manage your important documents and paWe have a dedicated post office on campus, so you can easily send and receive mail and packages without having to leave the campus.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-gray-700">
                  Our post office offers a range of services, including domestic and international mail, registered post, speed post, parcel delivery, and more.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-gray-700">
                  You can also avail of additional services such as post office savings schemes,ckages with ease.
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
