import Image from 'next/image';
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function AntiRaggingCommittee() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Anti-Ragging Committee", url: "https://nursing.sresakthimayeil.jkkn.ac.in/anti-ragging-committee" }
      ]} />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Anti-Ragging Committee — Sresakthimayeil Institute of Nursing and Research</h1>
      <div className="flex justify-center">
        <iframe
          src="/pdf/antiragging-comittee.pdf"
          className="w-full h-[800px] border-2 border-gray-300 rounded-lg"
          title="Anti Ragging Committee"
        />
      </div>
    </div>
    </>
  );
}
