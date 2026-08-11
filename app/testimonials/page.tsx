import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { alumniTestimonials, certifications } from "@/data/partnersData";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Alumni Testimonials | Sresakthimayeil Institute Of Nursing And Research",
  description: "Hear from our alumni working at leading hospitals and nursing colleges. Real experiences from graduates of JKKN College of Nursing — INC approved, NAAC accredited.",
};

export default function TestimonialsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
          { name: "Testimonials", url: "https://nursing.sresakthimayeil.jkkn.ac.in/testimonials" },
        ]}
      />
      <Header />

      <main className="bg-[#FBFBEE] min-h-screen">

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#006837] to-[#7cb983] text-white pt-40 pb-14 md:pt-44 md:pb-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6 text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Alumni Speak
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              What Our Graduates Say
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Our alumni are serving at top hospitals and institutions across India. Here is what they say about their journey at {siteData.institutionName}.
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-[#006837] text-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/20">
              <div className="py-6 text-center">
                <p className="text-2xl sm:text-3xl font-bold">57+</p>
                <p className="text-white/80 text-xs sm:text-sm mt-1">Years of Excellence</p>
              </div>
              <div className="py-6 text-center">
                <p className="text-2xl sm:text-3xl font-bold">3</p>
                <p className="text-white/80 text-xs sm:text-sm mt-1">Nursing Programs</p>
              </div>
              <div className="py-6 text-center">
                <p className="text-2xl sm:text-3xl font-bold">A+</p>
                <p className="text-white/80 text-xs sm:text-sm mt-1">NAAC Grade</p>
              </div>
              <div className="py-6 text-center">
                <p className="text-2xl sm:text-3xl font-bold">INC</p>
                <p className="text-white/80 text-xs sm:text-sm mt-1">Approved</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-14 md:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002309] mb-3">Alumni Testimonials</h2>
              <div className="w-16 h-1 bg-[#7cb983] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {alumniTestimonials.map((alumni) => (
                <div
                  key={alumni.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
                >
                  {/* Quote icon */}
                  <svg className="w-8 h-8 text-[#7cb983] mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  {/* Testimonial text */}
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-grow mb-6">
                    {alumni.testimonial}
                  </p>

                  {/* Alumni info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-[#e8f5e9]">
                      <Image
                        src={alumni.image}
                        alt={alumni.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-[#002309] text-sm sm:text-base">{alumni.name}</p>
                      <p className="text-[#006837] text-xs sm:text-sm">{alumni.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditations */}
        <section className="bg-white py-12">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-[#002309] mb-3">Recognized & Accredited By</h2>
              <div className="w-16 h-1 bg-[#7cb983] mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex flex-col items-center text-center gap-3 p-4 rounded-xl border border-gray-100">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={cert.logo}
                      alt={cert.organization}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="text-[#006837] text-xs font-semibold uppercase tracking-wide">{cert.type}</p>
                    <p className="text-[#002309] text-sm font-medium mt-1">{cert.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#e8f5e9] py-12">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#002309] mb-3">Begin Your Nursing Journey</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Join hundreds of graduates now serving across India&apos;s leading hospitals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 bg-[#006837] text-white font-bold px-7 py-3 rounded-lg hover:bg-[#005a2e] transition-colors text-sm sm:text-base"
              >
                Apply for Admission
              </a>
              <a
                href={`tel:${siteData.contact.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#006837] text-[#006837] font-bold px-7 py-3 rounded-lg hover:bg-[#006837] hover:text-white transition-colors text-sm sm:text-base"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {siteData.contact.phone}
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
