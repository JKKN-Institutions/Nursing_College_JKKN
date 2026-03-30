import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";

export default function UGCCompliance() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20">
        {/* Main Title */}
        <div className="bg-[#FBFBEE] py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-3xl lg:text-5xl font-bold text-[#002309] mb-8">
              UGC PUBLIC DISCLOSURE COMPLIANCE
            </h1>
          </div>
        </div>

        {/* Social Share Buttons */}
        <div className="bg-[#FBFBEE] pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="bg-[#3b5998] text-white py-3 px-6 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <span className="text-xl">f</span>
                <span>Share on Facebook</span>
              </button>
              <button className="bg-black text-white py-3 px-6 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <span className="text-xl">𝕏</span>
                <span>Share on Twitter</span>
              </button>
              <button className="bg-[#bd081c] text-white py-3 px-6 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <span className="text-xl">P</span>
              </button>
              <button className="bg-gray-300 text-gray-700 py-3 px-6 flex items-center justify-center hover:opacity-90 transition-opacity">
                <span className="text-xl">↗</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-[#FBFBEE] pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            {/* Introduction Paragraph 1 */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              This is to certify that Sresakthimayeil Institute of Nursing and Research has duly complied with the <strong>UGC Guidelines on Public Self-Disclosure by Higher Education Institutions</strong> in accordance with the provisions of the <strong>National Education Policy (NEP) 2020</strong> and the <strong>UGC (Conferment of Autonomous Status Upon Colleges and Measures for Maintenance of Standards in Autonomous Colleges) Regulations, 2023.</strong>
            </p>

            {/* Introduction Paragraph 2 */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              We further confirm that the following Committees/Cells have been duly constituted and are functioning as per the respective UGC Regulations and Guidelines:
            </p>

            {/* Numbered List */}
            <ol className="space-y-6 list-decimal list-outside ml-6">
              {/* Item 1 */}
              <li className="text-gray-700">
                <strong>Internal Complaints Committee (ICC)</strong>
                <div className="mt-2 ml-4">
                  <p className="text-gray-700 mb-2">
                    As per the UGC (Prevention, Prohibition and Redressal of Sexual Harassment of Women Employees and Students in HEIs) Regulations, 2016.
                  </p>
                  <a href="/pdf/INTERNAL-COMPLAINTS-COMMITTEE-MD.pdf" className="text-[#0b7845] hover:underline">
                    View Document
                  </a>
                </div>
              </li>

              {/* Item 2 */}
              <li className="text-gray-700">
                <strong>Student Grievance Redressal Committee (SGRC)</strong>
                <div className="mt-2 ml-4">
                  <p className="text-gray-700 mb-2">
                    As per UGC (Redress of Grievances of Students) Regulations, 2023.
                  </p>
                  <a href="/pdf/Student-Grievance-Redressal-Committee-MD.pdf" className="text-[#0b7845] hover:underline">
                    View Document
                  </a>
                </div>
              </li>

              {/* Item 3 */}
              <li className="text-gray-700">
                <strong>Anti-Ragging Committee and Measures</strong>
                <div className="mt-2 ml-4">
                  <p className="text-gray-700 mb-2">
                    In compliance with the UGC Curbing the Menace of Ragging in Higher Educational Institutions (Second Amendment) Regulations, 2013.
                  </p>
                  <a href="/pdf/Anti-Ragging-Committee-and-Measures-MD.pdf" className="text-[#0b7845] hover:underline">
                    View Page
                  </a>
                </div>
              </li>

              {/* Item 4 */}
              <li className="text-gray-700">
                <strong>Implementation of the Institutional Development Plan (IDP)</strong>
                <div className="mt-2 ml-4">
                  <p className="text-gray-700 mb-2">
                    As per UGC Guidelines.
                  </p>
                  <a href="/pdf/Implementation-of-the-Institutional-Development-Plan-MD.pdf" className="text-[#0b7845] hover:underline">
                    View Document
                  </a>
                </div>
              </li>

              {/* Item 5 */}
              <li className="text-gray-700">
                <strong>Measures for Socio-Economically Disadvantaged Groups (SEDGs)</strong>
                <div className="mt-2 ml-4">
                  <p className="text-gray-700 mb-2">
                    To ensure equitable opportunities for SEDGs.
                  </p>
                  <div className="space-y-1">
                    <div>
                      <a href="/pdf/Equitable-Opportunity-for-SEDG-MD.pdf" className="text-[#0b7845] hover:underline">
                        Equitable Opportunity for SEDG
                      </a>
                    </div>
                    <div>
                      <a href="/pdf/SEDG-Cell-MD.pdf" className="text-[#0b7845] hover:underline">
                        SEDG Cell
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* Item 6 */}
              <li className="text-gray-700">
                <strong>Accessibility Provisions</strong>
                <div className="mt-2 ml-4">
                  <p className="text-gray-700 mb-2">
                    As per "Accessibility Guidelines and Standards for Higher Education Institutions and Universities."
                  </p>
                  <div className="space-y-1">
                    <div>
                      <a href="/pdf/Accessibility-Provisions-ViewPage-MD.pdf" className="text-[#0b7845] hover:underline">
                        View Page
                      </a>
                    </div>
                    <div>
                      <a href="/pdf/Accessibility-Provisions-DISABILITY-FACILITIES-MD.pdf" className="text-[#0b7845] hover:underline">
                        DISABILITY FACILITIES
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* Item 7 */}
              <li className="text-gray-700">
                <strong>Research and Development (R&D) Cell</strong>
                <div className="mt-2 ml-4">
                  <p className="text-gray-700 mb-2">
                    As per "Accessibility Guidelines and Standards for Higher Education Institutions and Universities."
                  </p>
                  <div className="space-y-1">
                    <div>
                      <a href="/pdf/Research-and-Development-RD-ViewPage-1-MD.pdf" className="text-[#0b7845] hover:underline">
                        View Page
                      </a>
                    </div>
                    <div>
                      <a href="/pdf/Research-and-Development-RD-ViewPage-2-MD.pdf" className="text-[#0b7845] hover:underline">
                        View Page
                      </a>
                    </div>
                    <div>
                      <a href="/pdf/Research-and-Development-(R&D)-Cell-Solution-Oriented-MD.pdf" className="text-[#0b7845] hover:underline">
                        Solution-Oriented
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* Item 8 */}
              <li className="text-gray-700">
                <strong>Adherence to the UGC Fee Refund Policy</strong>
                <div className="mt-2 ml-4">
                  <div className="space-y-1">
                    <div>
                      <a href="/pdf/Adherence-to-the-UGC-Fee-Refund-Policy-ViewPolicy-1-MD.pdf" className="text-[#0b7845] hover:underline">
                        View Policy
                      </a>
                    </div>
                    <div>
                      <a href="/pdf/Adherence-to-the-UGC-Fee-Refund-Policy-ViewPolicy-2-MD.pdf" className="text-[#0b7845] hover:underline">
                        View Policy
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ol>

            {/* Compliance Letter Box */}
            <div className="mt-12 bg-gray-200 py-4 px-6 inline-block">
              <a href="/pdf/UGC-Public-Disclosures-compliance-letter-MD.pdf" className="text-gray-700 hover:text-primary font-medium">
                UGC PUBLIC DISCLOSURE COMPLIANCE LETTER
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
