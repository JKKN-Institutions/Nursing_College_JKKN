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
      <main className="bg-cream min-h-screen pt-28">
        <div className="container-custom py-12 md:py-16">
          {/* Founder Section */}
          <div className="max-w-5xl mx-auto">
            {/* Decorative Frame with Photo */}
            <div className="flex justify-center mb-8">
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="/images/Our_Trust.webp"
                  alt="Shri. J.K.K. Natarajah - Founder J.K.K. Rangammal Charitable Trust"
                  width={240}
                  height={240}
                  className="w-full h-full object-cover"
                />
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
