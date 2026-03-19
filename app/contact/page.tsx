import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact Sresakthimayeil Institute of Nursing and Research | Phone, Email, Location",
  description: "Contact Sresakthimayeil Institute of Nursing and Research at +91 93458 55001 or nursing@jkkn.ac.in. Visit us at Komarapalayam, NH-544, Namakkal, Tamil Nadu 638183.",
};

export default function Contact() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Contact", url: "https://nursing.sresakthimayeil.jkkn.ac.in/contact" }
      ]} />
      <Header />

      <main className="bg-[#FBFBEE] pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 lg:pb-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Contact Sresakthimayeil Institute of Nursing and Research</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3 sm:mb-4">
                Contact Info
              </h2>

              <div className="w-12 sm:w-16 h-1 bg-[#FFD700] mb-4 sm:mb-6"></div>

              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Welcome to our Website. We are glad to have you around.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {/* Phone Box */}
                <div className="bg-[#e8f5e9] rounded-lg p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-[#0b7845]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#002309] mb-1 sm:mb-2">Phone</h3>
                    <a href="tel:+919345855001" className="text-sm sm:text-base text-gray-700 hover:text-[#0b7845]">
                      +91 93458 55001
                    </a>
                  </div>
                </div>

                {/* Email Box */}
                <div className="bg-[#e8f5e9] rounded-lg p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-[#0b7845]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#002309] mb-1 sm:mb-2">Email</h3>
                    <a href="mailto:nursing@jkkn.ac.in" className="text-sm sm:text-base text-[#0b7845] hover:underline break-all">
                      nursing@jkkn.ac.in
                    </a>
                  </div>
                </div>

                {/* Address Box */}
                <div className="bg-[#e8f5e9] rounded-lg p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-[#0b7845]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#002309] mb-2 sm:mb-3">Address</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Sresakthimayeil Institute of Nursing and Research<br />
                      NATARAJAPURAM, NH-544 (SALEM TO COIMBATORE),<br />
                      KOMARAPALAYAM – 638183, NAMAKKAL (DT)
                    </p>
                  </div>
                </div>
              </div>

              {/* Click Here Button */}
              <div className="mt-4 sm:mt-6">
                <a
                  href="https://www.google.com/maps/place/JKKN+College+of+Nursing+and+Research/@11.443322,77.7289915,17z"
                  className="inline-block bg-[#6ba85c] hover:bg-[#5a9149] text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md transition-colors text-sm sm:text-base"
                >
                  View on Map
                </a>
              </div>
            </div>

            {/* Right Column - Send a Message */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-3 sm:mb-4">
                Send a Message
              </h2>

              <div className="w-12 sm:w-16 h-1 bg-[#FFD700] mb-4 sm:mb-6"></div>

              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Your email address will not be published. Required fields are marked.
              </p>

              {/* Online Admissions Button */}
              <a
                href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                className="inline-block bg-[#6ba85c] hover:bg-[#5a9149] text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md transition-colors text-sm sm:text-base"
              >
                Online Admissions 2026 - 2027
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
