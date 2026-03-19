import Image from 'next/image';
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function YRC() {
  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Activities", url: "https://nursing.sresakthimayeil.jkkn.ac.in/activities" },
        { name: "YRC", url: "https://nursing.sresakthimayeil.jkkn.ac.in/yrc" },
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Youth Red Cross (YRC) — Sresakthimayeil Institute of Nursing and Research</h1>
      <div className="flex justify-center">
        <iframe
          src="/pdf/YRC.pdf"
          className="w-full h-[800px] border-2 border-gray-300 rounded-lg"
          title="Youth Red Cross"
        />
      </div>
    </div>
  );
}
