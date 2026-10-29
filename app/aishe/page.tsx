import Image from 'next/image';
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function AISHE() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "AISHE", url: "https://nursing.sresakthimayeil.jkkn.ac.in/aishe" }
      ]} />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">AISHE Certificate — JKKN College of Nursing and Research</h1>
      <p className="text-gray-700 text-base lg:text-lg mb-2">AISHE code: <strong>C-45803</strong> - Sresakthimayeil Institute of Nursing and Research (JKKN College of Nursing and Research), Namakkal, affiliated to The Tamil Nadu Dr. M.G.R. Medical University.</p>
      <p className="text-xs sm:text-sm text-gray-500 mb-6 break-words">Source: AISHE Higher Education Institution Directory, Ministry of Education, <a href="https://dashboard.aishe.gov.in/hedirectory/" target="_blank" rel="noopener noreferrer" className="text-[#006837] underline">dashboard.aishe.gov.in/hedirectory</a>, as on 29 October 2026</p>
      <div className="flex justify-center">
        <iframe
          src="/pdf/AISHE.pdf"
          className="w-full h-[800px] border-2 border-gray-300 rounded-lg"
          title="AISHE Certificate"
        />
      </div>
    </div>
    </>
  );
}
