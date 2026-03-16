import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Link from "next/link";

export default function FeeStructure() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">

        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-[#006837] to-[#7cb983] py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px] text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Fee Structure 2026-27
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              Transparent and affordable nursing education at JKKN College of Nursing
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <BreadcrumbSchema items={[
          { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
          { name: "Fee Structure", url: "https://nursing.sresakthimayeil.jkkn.ac.in/fee-structure" },
        ]} />

        {/* Program Fee Table */}
        <section className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b7845] mb-2">
              Program Tuition Fees
            </h2>
            <p className="text-gray-600 mb-8">Annual and total course fee for each nursing program offered at JKKN College of Nursing.</p>
            <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
              <table className="min-w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#006837] text-white">
                    <th className="px-5 py-4 text-left font-semibold">Program</th>
                    <th className="px-5 py-4 text-left font-semibold">Duration</th>
                    <th className="px-5 py-4 text-left font-semibold">Annual Tuition Fee</th>
                    <th className="px-5 py-4 text-left font-semibold">Total Course Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-[#f0f9f4] transition-colors">
                    <td className="px-5 py-4 font-medium text-gray-800">B.Sc Nursing</td>
                    <td className="px-5 py-4 text-gray-600">4 Years</td>
                    <td className="px-5 py-4 text-gray-800 font-semibold">₹95,000</td>
                    <td className="px-5 py-4 text-[#006837] font-bold">₹3,80,000</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-[#fafff8] hover:bg-[#f0f9f4] transition-colors">
                    <td className="px-5 py-4 font-medium text-gray-800">M.Sc Nursing</td>
                    <td className="px-5 py-4 text-gray-600">2 Years</td>
                    <td className="px-5 py-4 text-gray-800 font-semibold">₹1,25,000</td>
                    <td className="px-5 py-4 text-[#006837] font-bold">₹2,50,000</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-[#f0f9f4] transition-colors">
                    <td className="px-5 py-4 font-medium text-gray-800">Post Basic B.Sc Nursing</td>
                    <td className="px-5 py-4 text-gray-600">2 Years</td>
                    <td className="px-5 py-4 text-gray-800 font-semibold">₹85,000</td>
                    <td className="px-5 py-4 text-[#006837] font-bold">₹1,70,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500 italic">
              * Fees are as per university/government norms and subject to revision. Additional examination fees as per Tamil Nadu Dr. MGR Medical University.
            </p>
          </div>
        </section>

        {/* Hostel & Accommodation Fees */}
        <section className="bg-[#FBFBEE] py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b7845] mb-2">
              Hostel & Accommodation Fees
            </h2>
            <p className="text-gray-600 mb-8">On-campus accommodation options with food and basic amenities included.</p>
            <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
              <table className="min-w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#006837] text-white">
                    <th className="px-5 py-4 text-left font-semibold">Accommodation Type</th>
                    <th className="px-5 py-4 text-left font-semibold">Annual Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-[#f0f9f4] transition-colors">
                    <td className="px-5 py-4 font-medium text-gray-800">Hostel (Shared Room — 3/4 Sharing)</td>
                    <td className="px-5 py-4 text-[#006837] font-bold">₹60,000</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-[#fafff8] hover:bg-[#f0f9f4] transition-colors">
                    <td className="px-5 py-4 font-medium text-gray-800">Hostel (Double Sharing)</td>
                    <td className="px-5 py-4 text-[#006837] font-bold">₹75,000</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-[#f0f9f4] transition-colors">
                    <td className="px-5 py-4 font-medium text-gray-800">Mess / Food Charges</td>
                    <td className="px-5 py-4 text-gray-600 italic">Included in hostel fee</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500 italic">
              Hostel fee includes food, accommodation, and basic amenities. Separate charges may apply for AC rooms where available.
            </p>
          </div>
        </section>

        {/* Other Fees */}
        <section className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b7845] mb-2">
              Other Fee Components
            </h2>
            <p className="text-gray-600 mb-8">One-time charges, deposits, and other applicable fees.</p>
            <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
              <table className="min-w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#006837] text-white">
                    <th className="px-5 py-4 text-left font-semibold">Fee Component</th>
                    <th className="px-5 py-4 text-left font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-[#f0f9f4] transition-colors">
                    <td className="px-5 py-4 font-medium text-gray-800">Admission Processing Fee</td>
                    <td className="px-5 py-4 text-gray-700">₹5,000 <span className="text-xs text-gray-500">(one-time)</span></td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-[#fafff8] hover:bg-[#f0f9f4] transition-colors">
                    <td className="px-5 py-4 font-medium text-gray-800">University Registration Fee</td>
                    <td className="px-5 py-4 text-gray-600 italic">As per TNMGRMU norms</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-[#f0f9f4] transition-colors">
                    <td className="px-5 py-4 font-medium text-gray-800">Examination Fee</td>
                    <td className="px-5 py-4 text-gray-600 italic">As per university notification</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-[#fafff8] hover:bg-[#f0f9f4] transition-colors">
                    <td className="px-5 py-4 font-medium text-gray-800">Library & Lab Fee</td>
                    <td className="px-5 py-4 text-gray-600 italic">Included in tuition fee</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-[#f0f9f4] transition-colors">
                    <td className="px-5 py-4 font-medium text-gray-800">Uniform & ID Card</td>
                    <td className="px-5 py-4 text-gray-700">₹3,000 <span className="text-xs text-gray-500">(one-time)</span></td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-[#fafff8] hover:bg-[#f0f9f4] transition-colors">
                    <td className="px-5 py-4 font-medium text-gray-800">Caution Deposit</td>
                    <td className="px-5 py-4 text-gray-700">₹5,000 <span className="text-xs text-green-600 font-medium">(refundable)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Fee Payment Schedule */}
        <section className="bg-[#FBFBEE] py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b7845] mb-8">
              Fee Payment Schedule
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#006837] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#006837] mb-2">At Admission</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Admission processing fee + First semester tuition fee + Hostel fee (if applicable)
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#006837] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#006837] mb-2">Semester-wise Payment</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Tuition fee payable at the beginning of each semester
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#7cb983] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#006837] mb-2">Payment Modes</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      DD / Cheque / NEFT / Online Transfer
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#7cb983] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#006837] mb-2">Late Payment</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      ₹100/day late fee after due date (maximum 30 days)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarships & Financial Aid */}
        <section className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b7845] mb-2">
              Scholarships & Financial Aid
            </h2>
            <p className="text-gray-600 mb-8">Multiple avenues to make nursing education accessible and affordable for every student.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#FBFBEE] rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H13l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-[#006837] mb-2">Government Scholarships</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  BC/MBC/SC/ST/Differently Abled students eligible for state government fee reimbursement
                </p>
              </div>
              <div className="bg-[#FBFBEE] rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-[#006837] mb-2">Merit Scholarship</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Top rankers in NEET-UG eligible for fee concession up to 25%
                </p>
              </div>
              <div className="bg-[#FBFBEE] rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-[#006837] mb-2">JKKN Trust Scholarship</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Special scholarship for economically weaker sections — awarded by JKKN Trust
                </p>
              </div>
              <div className="bg-[#FBFBEE] rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-[#006837] mb-2">Education Loan</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tie-ups with SBI, Indian Bank, Canara Bank, HDFC for education loans
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Loan Guidance */}
        <section className="bg-[#FBFBEE] py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b7845] mb-8">
              Education Loan Guidance
            </h2>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-2 flex-shrink-0"></span>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Loan covers tuition fee, hostel charges, and living expenses
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-2 flex-shrink-0"></span>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Documentation assistance provided by the college — our accounts team guides you through the entire process
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-2 flex-shrink-0"></span>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Interest subsidy available for eligible students under government schemes
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-2 flex-shrink-0"></span>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Contact the placement or accounts office for loan assistance and enquiries
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fee Refund Policy */}
        <section className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b7845] mb-2">
              Fee Refund Policy
            </h2>
            <p className="text-gray-600 mb-8">Refund eligibility based on the date of withdrawal from the program.</p>
            <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
              <table className="min-w-full text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#006837] text-white">
                    <th className="px-5 py-4 text-left font-semibold">Withdrawal Timeline</th>
                    <th className="px-5 py-4 text-left font-semibold">Refund Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-[#f0f9f4] transition-colors">
                    <td className="px-5 py-4 text-gray-800">Before commencement of classes</td>
                    <td className="px-5 py-4 font-semibold text-green-700">Full refund minus processing fee</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-[#fafff8] hover:bg-[#f0f9f4] transition-colors">
                    <td className="px-5 py-4 text-gray-800">Within 15 days of admission</td>
                    <td className="px-5 py-4 font-semibold text-yellow-700">75% refund</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-[#f0f9f4] transition-colors">
                    <td className="px-5 py-4 text-gray-800">After 15 days but before 30 days</td>
                    <td className="px-5 py-4 font-semibold text-orange-600">50% refund</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-[#fafff8] hover:bg-[#f0f9f4] transition-colors">
                    <td className="px-5 py-4 text-gray-800">After 30 days</td>
                    <td className="px-5 py-4 font-semibold text-red-600">No refund</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-sm text-gray-600">
              For the complete refund policy,{" "}
              <Link
                href="/fees-refund-policy"
                className="text-[#006837] underline underline-offset-2 hover:text-[#0b7845] font-medium transition-colors"
              >
                see the Fees Refund Policy
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#006837] to-[#7cb983] py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px] text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Have questions about fees?
            </h2>
            <p className="text-white/90 mb-8 text-base sm:text-lg max-w-xl mx-auto">
              Our admissions team is here to help. Reach out for fee details, scholarship guidance, or loan assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#006837] font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors text-base"
              >
                Apply Now
              </a>
              <Link
                href="/contact"
                className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
