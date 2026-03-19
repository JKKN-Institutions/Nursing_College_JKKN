import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function Sports() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Sports", url: "https://nursing.sresakthimayeil.jkkn.ac.in/sports" }
      ]} />
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Main Title */}
        <div className="bg-[#FBFBEE] py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#0b7845] mb-8">
              Sports
            </h1>
          </div>
        </div>

        {/* Sports Images */}
        <div className="bg-[#FBFBEE] pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="w-full">
                <Image
                  src="/images/sports-1.webp"
                  alt="Student in Sports Uniform"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/sports-2.webp"
                  alt="Indoor Sports Hall"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/sports-3.webp"
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
              Welcome to the exciting world of sports at JKKN College .Our college takes immense pride in fostering a vibrant sports culture that promotes physical fitness, teamwork, and sportsmanship. Whether you're a seasoned athlete or a budding enthusiast, our state-of-the-art sports facilities cater to a wide range of interests. From well-maintained cricket pitches and basketball courts to a fully equipped gymnasium, we offer a plethora of opportunities for students to engage in their favorite sports. Our dedicated and experienced coaches are always ready to guide and mentor students, helping them reach their full potential in various sports competitions and events. Embrace the thrill of competition, join our sports community, and unleash your athletic prowess at JKKN College.
            </p>
          </div>
        </div>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
