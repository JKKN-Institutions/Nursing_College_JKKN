import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function OurManagement() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Our Management", url: "https://nursing.sresakthimayeil.jkkn.ac.in/our-management" }
      ]} />
      <Header />
      <main className="bg-cream min-h-screen pt-20 sm:pt-24 lg:pt-28">
        <div className="container-custom py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Our Management — Sresakthimayeil Institute of Nursing and Research</h1>
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Chairperson */}
              <div className="flex flex-col items-center">
                {/* Decorative Frame with Photo */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-56 h-56 md:w-64 md:h-64">
                    {/* Ornate Frame SVG */}
                    <svg
                      viewBox="0 0 400 400"
                      className="w-full h-full"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Outer ornate frame */}
                      <path
                        d="M200 40 C180 40, 160 42, 140 46 L120 50 C100 56, 85 65, 75 75 C65 85, 56 100, 50 120 L46 140 C42 160, 40 180, 40 200 C40 220, 42 240, 46 260 L50 280 C56 300, 65 315, 75 325 C85 335, 100 344, 120 350 L140 354 C160 358, 180 360, 200 360 C220 360, 240 358, 260 354 L280 350 C300 344, 315 335, 325 325 C335 315, 344 300, 350 280 L354 260 C358 240, 360 220, 360 200 C360 180, 358 160, 354 140 L350 120 C344 100, 335 85, 325 75 C315 65, 300 56, 280 50 L260 46 C240 42, 220 40, 200 40 Z"
                        fill="#C9A961"
                        stroke="#B8964E"
                        strokeWidth="2"
                      />

                      {/* Decorative scrollwork elements */}
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                        <g key={angle} transform={`rotate(${angle} 200 200)`}>
                          {/* Decorative curls */}
                          <path
                            d="M200 45 Q195 50, 193 55 Q191 60, 193 65 Q195 62, 197 65 Q199 62, 201 65 Q203 60, 201 55 Q199 50, 200 45"
                            fill="#D4AF6A"
                          />
                          <circle cx="200" cy="48" r="6" fill="#B8964E" />
                          <path
                            d="M195 52 Q190 58, 188 63 Q193 60, 195 58"
                            stroke="#8B7355"
                            strokeWidth="1.5"
                            fill="none"
                          />
                          <path
                            d="M205 52 Q210 58, 212 63 Q207 60, 205 58"
                            stroke="#8B7355"
                            strokeWidth="1.5"
                            fill="none"
                          />
                        </g>
                      ))}

                      {/* Inner decorative rings */}
                      <circle cx="200" cy="200" r="115" fill="none" stroke="#B8964E" strokeWidth="3" />
                      <circle cx="200" cy="200" r="108" fill="none" stroke="#D4AF6A" strokeWidth="2" />

                      {/* Inner ornamental pattern */}
                      <circle cx="200" cy="200" r="102" fill="none" stroke="#C9A961" strokeWidth="1" opacity="0.5" />
                    </svg>

                    {/* Photo - positioned absolutely in center */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src="/images/Our_Management-1.webp"
                        alt="Smt. N. Sendamaraai - Chairperson JKKN Educational Institutions"
                        width={208}
                        height={208}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#006837] mb-2">
                    SMT.N.SENDAMARAAI
                  </h2>
                  <p className="text-lg md:text-xl font-semibold text-[#006837]">
                    Chairperson - JKKN Educational Institutions
                  </p>
                </div>

                {/* Description */}
                <div className="text-gray-700 text-base leading-relaxed text-justify px-4">
                  <p>
                    Happy to hold the monumental responsibility as Chairperson of "JKKN Educational Institutions," I am proud to say that we have made exceptional progress and have achieved the status of one of the most prestigious nursing colleges.
                  </p>
                  <p className="mt-4">
                    The institution provides the necessary infrastructure and a team of qualified and motivated faculty, all under one roof for the student community. Besides providing world-class nursing education, we also inculcate a progressive attitude blended with innovation toward the betterment of society.Our hearty welcome to our lush green campus!
                  </p>
                </div>
              </div>

              {/* Right Column - Director */}
              <div className="flex flex-col items-center">
                {/* Decorative Frame with Photo */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-56 h-56 md:w-64 md:h-64">
                    {/* Ornate Frame SVG */}
                    <svg
                      viewBox="0 0 400 400"
                      className="w-full h-full"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Outer ornate frame */}
                      <path
                        d="M200 40 C180 40, 160 42, 140 46 L120 50 C100 56, 85 65, 75 75 C65 85, 56 100, 50 120 L46 140 C42 160, 40 180, 40 200 C40 220, 42 240, 46 260 L50 280 C56 300, 65 315, 75 325 C85 335, 100 344, 120 350 L140 354 C160 358, 180 360, 200 360 C220 360, 240 358, 260 354 L280 350 C300 344, 315 335, 325 325 C335 315, 344 300, 350 280 L354 260 C358 240, 360 220, 360 200 C360 180, 358 160, 354 140 L350 120 C344 100, 335 85, 325 75 C315 65, 300 56, 280 50 L260 46 C240 42, 220 40, 200 40 Z"
                        fill="#C9A961"
                        stroke="#B8964E"
                        strokeWidth="2"
                      />

                      {/* Decorative scrollwork elements */}
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                        <g key={angle} transform={`rotate(${angle} 200 200)`}>
                          {/* Decorative curls */}
                          <path
                            d="M200 45 Q195 50, 193 55 Q191 60, 193 65 Q195 62, 197 65 Q199 62, 201 65 Q203 60, 201 55 Q199 50, 200 45"
                            fill="#D4AF6A"
                          />
                          <circle cx="200" cy="48" r="6" fill="#B8964E" />
                          <path
                            d="M195 52 Q190 58, 188 63 Q193 60, 195 58"
                            stroke="#8B7355"
                            strokeWidth="1.5"
                            fill="none"
                          />
                          <path
                            d="M205 52 Q210 58, 212 63 Q207 60, 205 58"
                            stroke="#8B7355"
                            strokeWidth="1.5"
                            fill="none"
                          />
                        </g>
                      ))}

                      {/* Inner decorative rings */}
                      <circle cx="200" cy="200" r="115" fill="none" stroke="#B8964E" strokeWidth="3" />
                      <circle cx="200" cy="200" r="108" fill="none" stroke="#D4AF6A" strokeWidth="2" />

                      {/* Inner ornamental pattern */}
                      <circle cx="200" cy="200" r="102" fill="none" stroke="#C9A961" strokeWidth="1" opacity="0.5" />
                    </svg>

                    {/* Photo - positioned absolutely in center */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src="/images/Our_Management-2.webp"
                        alt="Mr. S. Ommsharravana - Director JKKN Educational Institutions"
                        width={208}
                        height={208}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#006837] mb-2">
                    MR.S.OMMSHARRAVANA
                  </h2>
                  <p className="text-lg md:text-xl font-semibold text-[#006837]">
                    Director - JKKN Educational Institutions
                  </p>
                </div>

                {/* Description */}
                <div className="text-gray-700 text-base leading-relaxed text-justify px-4">
                  <p>
                    I heartily congratulate the college for taking an ardent and intense interest in molding smart future of students. We are committed to the mission of implementing new education methodologies to enable quality learning that encourages independent thinking and helps students develop a wholesome personality so that they can contribute their best to society and the country. Together, we work to make JKKN the best temple of learning, guiding and encouraging students in their way. JKKN aims to produce top-notch professionals with their colorful flag flying high in the air of success in this pulsating world of competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer hideLifeAtJKKN />
      <FloatingButtons />
    </>
  );
}
