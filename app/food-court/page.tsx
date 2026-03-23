import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function FoodCourt() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Food Court", url: "https://nursing.sresakthimayeil.jkkn.ac.in/food-court" }
      ]} />
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Main Title */}
        <div className="bg-[#FBFBEE] py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#002309] mb-8">
              Food Court
            </h1>
          </div>
        </div>

        {/* Food Court Images */}
        <div className="bg-[#FBFBEE] pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="w-full">
                <Image
                  src="/images/foodcourt-1.webp"
                  alt="Food Court Exterior"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/foodcourt-2.webp"
                  alt="Food Court Interior 1"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/foodcourt-3.webp"
                  alt="Food Court Interior 2"
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
                  As a student, our canteen is the perfect place for you to refuel and recharge between classes. We understand that being a student can be stressful, and we want to provide you with a comfortable and welcoming environment where you can relax and enjoy good food.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  Our menu is designed with students in mind, offering a range of options to cater to different tastes and dietary needs. Whether you're looking for a quick snack or a full meal, we've got you covered. Our diverse menu includes fresh salads and sandwiches, hearty hot meals, and a variety of snacks and drinks.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  We also prioritize providing healthy options for our customers. We understand that eating well is important for maintaining good health and staying focused throughout the day. That's why we offer a range of nutritious options, including fresh fruits and vegetables, lean proteins, and whole grains.
                </p>
              </li>

              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <p className="text-gray-700">
                  Affordability is another important factor for us, and we want to ensure that our canteen is accessible to all students. That's why we offer various meal deals and specials, making it easy for you to get a satisfying meal without breaking the bank.
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
