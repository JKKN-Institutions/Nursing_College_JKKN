import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";

export default function Wifi() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Main Title */}
        <div className="bg-[#FBFBEE] py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#0b7845] mb-8">
              Wifi
            </h1>
          </div>
        </div>

        {/* WiFi Images */}
        <div className="bg-[#FBFBEE] pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="w-full">
                <Image
                  src="/images/wifi-1.webp"
                  alt="Student Using Mobile Phone"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/wifi-2.webp"
                  alt="Student with Laptop Outdoors"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/wifi-3.webp"
                  alt="Student with Mobile Device"
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
            {/* Main Paragraph */}
            <p className="text-gray-700 leading-relaxed text-justify">
              Welcome to JKKN College of Nursing! Our campus offers state-of-the-art facilities, including high-speed wifi connectivity, ensuring students stay connected and engaged in their academic journey. With seamless internet access across the campus, students can access online resources, research materials, and collaborate with peers effortlessly. Our robust wifi network enables innovative learning experiences, empowering students to explore new ideas and stay ahead in a rapidly evolving world. Whether it&#39;s attending virtual lectures, participating in e-learning platforms, or connecting with faculty, our reliable wifi infrastructure supports a dynamic and interactive learning environment. At JKKN College of Nursing, we understand the importance of connectivity, and our dedicated IT team ensures smooth, uninterrupted access to the digital realm. Embrace the power of connectivity as you embark on a transformative educational experience at JKKN College of Nursing!
            </p>
          </div>
        </div>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
