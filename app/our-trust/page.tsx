import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function OurTrust() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Our Trust", url: "https://nursing.sresakthimayeil.jkkn.ac.in/our-trust" }
      ]} />
      <Header />
      <main className="bg-cream min-h-screen pt-20 sm:pt-24 lg:pt-28">
        <div className="container-custom py-12 md:py-16">
          {/* Founder Section */}
          <div className="max-w-5xl mx-auto">
            {/* Decorative Frame with Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
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

                  {/* Decorative elements around frame */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <g key={angle} transform={`rotate(${angle} 200 200)`}>
                      <circle cx="200" cy="45" r="8" fill="#B8964E" />
                      <path
                        d="M200 50 Q195 60, 190 65 Q185 70, 190 75 Q195 70, 200 75 Q205 70, 210 75 Q215 70, 210 65 Q205 60, 200 50 Z"
                        fill="#D4AF6A"
                      />
                    </g>
                  ))}

                  {/* Inner ornate details */}
                  <circle cx="200" cy="200" r="115" fill="none" stroke="#B8964E" strokeWidth="3" />
                  <circle cx="200" cy="200" r="108" fill="none" stroke="#D4AF6A" strokeWidth="2" />

                  {/* Green circular background for photo */}
                  <circle cx="200" cy="200" r="100" fill="#0b7845" />

                  {/* Photo placeholder/mask */}
                  <defs>
                    <clipPath id="photoCircle">
                      <circle cx="200" cy="200" r="95" />
                    </clipPath>
                  </defs>
                </svg>

                {/* Photo - positioned absolutely in center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white">
                  <Image
                    src="/images/Our_Trust.webp"
                    alt="Shri. J.K.K. Natarajah - Founder J.K.K. Rangammal Charitable Trust"
                    width={240}
                    height={240}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Founder Name and Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3">
                SHRI. J.K.K.NATARAJAH
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-[#006837]">
                Founder J.K.K. Rangammal Charitable Trust
              </p>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
              <p>
                In the sixties, the female children in Kumarapalayam had to walk 2.5 km. for their schooling to the nearby town Bhavani. Some parents hesitated to send, some ceased their children's schooling. All resulted in them staying either at home or working in handlooms and dyeing industries. Realizing the need for women's education, a visionary philanthropist of the zone, Shri. J.K.K. Natarajah, initiated a girl's school in the town in 1965, four years before the inception of the trust.
              </p>

              <p>
                The trust, J.K.K.Rangammal Charitable Trust was established, (Reg No:33) in 1969 with the motif of providing literacy, and women empowerment resulting in the upgraded socio-economic status of the people. Walking on the footprints of her father, Shrimathi.N. SENDAMARAAI, Managing trustee, expanded the service by providing multi-disciplinary education to both genders. Now, under the umbrella, there are 10 institutions, inclusive of Dental, Pharmacy, Nursing, Education, Engineering, Arts, and Science colleges and Govt. Aided Girls School, Matriculation schools.
              </p>

              <p>
                The trust involves itself in many social service activities inclusive of health-oriented services such as free dental camps, free treatments, and surgeries, blood donation camps, and motivational and entrepreneurship awareness camps. The trust also extends its charitable hands; medical support to the impoverished, helping the destitute, natural calamities support, education, and scholarship support to poor students, and cultural support. A pioneering establishment of the zone, since its inception, its grandeur service to society not only in terms of education but also community welfare activities is still immense.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer hideLifeAtJKKN />
      <FloatingButtons />
    </>
  );
}
