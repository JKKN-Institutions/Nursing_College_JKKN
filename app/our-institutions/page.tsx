import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function OurInstitutions() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Our Institutions", url: "https://nursing.sresakthimayeil.jkkn.ac.in/our-institutions" }
      ]} />
      <Header />
      <main className="bg-[#FBFBEE] pt-20 sm:pt-24 lg:pt-28">
        {/* Main Title */}
        <div className="bg-[#FBFBEE] py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#002309]">
              Our Institutions
            </h1>
          </div>
        </div>

        {/* Campus Image */}
        <div className="bg-[#FBFBEE]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="w-full max-w-[700px] mx-auto">
              <Image
                src="/images/jkkn_campus.webp"
                alt="JKKN Institutions Campus Gate"
                width={1600}
                height={900}
                className="w-full h-auto object-cover"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-[#FBFBEE] py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-justify">
                At JKKN Institutions, our primary goal is to foster the technical knowledge and skill development of our students, preparing them to thrive in today's competitive world. Through the implementation of effective teaching practices, we strive to establish a strong educational foundation.
              </p>

              <p className="text-justify">
                Our institution boasts well-constructed academic blocks, cutting-edge lab facilities, state-of-the-art operation centers, extensive knowledge resource libraries, and top-notch sports infrastructure. We provide separate accommodation for both male and female students, ensuring a safe and conducive learning environment. Additionally, our general and dental hospitals offer comprehensive healthcare services and practical training opportunities.
              </p>

              <p className="text-justify">
                With actively functioning placement cells, we guarantee promising placements for all our students. Furthermore, we have established valuable partnerships with leading manufacturing and commercial enterprises, facilitating invaluable industrial and corporate exposure for both students and faculty members.
              </p>

              <p className="text-justify">
                Located in Komarapalayam, just 15 km from Erode City, Tamil Nadu, India, our institutions are easily accessible. The Erode railway station and Salem/Coimbatore airports are conveniently nearby, enhancing connectivity for students from various locations.
              </p>

              <p className="text-justify">
                At JKKN Institutions, we foster a culture of commitment, transparency, and teamwork. Our institutions are renowned as knowledge centers that offer abundant opportunities and support, fueling a spirit of initiative and success. We continuously strive for progressive enhancements to cater to the evolving needs of our students and faculty members.
              </p>

              <p className="text-justify">
                JKKN Institutions are committed to providing exceptional educational experiences for our students, empowering them with the skills and knowledge necessary to excel. With a focus on continuous improvement and collaborative partnerships, we ensure that our institutions are recognized as premier centers of education and opportunity.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
