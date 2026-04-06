import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";

export default function Community() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-28">
        {/* Main Title */}
        <div className="bg-[#FBFBEE] py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#0b7845] mb-8">
              Community Facilities
            </h1>
          </div>
        </div>

        {/* Community Images */}
        <div className="bg-[#FBFBEE] pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="w-full">
                <Image
                  src="/images/Community_Facilities-1.webp"
                  alt="Nursing Students Group 1"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/Community_Facilities-2.webp"
                  alt="Nursing Students Group 2"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/Community_Facilities-3.webp"
                  alt="Nursing Students Group 3"
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
            {/* Paragraph 1 */}
            <p className="text-gray-700 mb-6 leading-relaxed text-justify">
              If you are seeking exceptional maternity care services in the urban area of Erode, look no further than the Maternity Centre. Our dedicated team of healthcare professionals is committed to providing comprehensive and compassionate care to expectant mothers and their newborns. With state-of-the-art facilities and a warm, welcoming environment, we strive to make your pregnancy and childbirth journey a comfortable and memorable experience.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gray-700 mb-6 leading-relaxed text-justify">
              For those residing in the serene rural area of Olapalayam village, Elanthakuttai PHC is the go-to primary health center. We understand the unique healthcare needs of rural communities and offer a range of medical services to promote the well-being of individuals and families. Our dedicated team of doctors and nurses is dedicated to providing quality healthcare with a personal touch. Whether you require routine check-ups, immunizations, or specialized treatments, we are here to serve you with professionalism and care.
            </p>

            {/* Paragraph 3 */}
            <p className="text-gray-700 leading-relaxed text-justify">
              Choose Maternity Centre in Erode's urban area or Elanthakuttai PHC in Olapalayam village for reliable healthcare services that cater to the distinct needs of both urban and rural populations. Our commitment to excellence and patient-centered care ensures that you receive the best possible medical attention in a comfortable and supportive environment.
            </p>
          </div>
        </div>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
