import Image from 'next/image';
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function NSS() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "NSS", url: "https://nursing.sresakthimayeil.jkkn.ac.in/nss" }
      ]} />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">National Service Scheme (NSS) — Sresakthimayeil Institute of Nursing and Research</h1>
      <div className="flex justify-center">
        <iframe
          src="/pdf/nss.pdf"
          className="w-full h-[800px] border-2 border-gray-300 rounded-lg"
          title="National Service Scheme"
        />
      </div>
    </div>
    </>
  );
}
