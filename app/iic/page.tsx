import Image from 'next/image';
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function IIC() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "IIC", url: "https://nursing.sresakthimayeil.jkkn.ac.in/iic" }
      ]} />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">Institution's Innovation Council (IIC) — JKKN College of Nursing</h1>
      <div className="flex justify-center">
        <iframe
          src="/pdf/IIC.pdf"
          className="w-full h-[800px] border-2 border-gray-300 rounded-lg"
          title="IIC Certificate"
        />
      </div>
    </div>
    </>
  );
}
