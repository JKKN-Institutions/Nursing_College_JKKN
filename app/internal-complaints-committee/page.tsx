import Image from 'next/image';
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function InternalComplaintsCommittee() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Internal Complaints Committee", url: "https://nursing.sresakthimayeil.jkkn.ac.in/internal-complaints-committee" }
      ]} />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">Internal Complaints Committee — JKKN College of Nursing</h1>
      <div className="flex justify-center">
        <iframe
          src="/pdf/INTERNAL-COMPLAINTS-COMMITTEE.pdf"
          className="w-full h-[800px] border-2 border-gray-300 rounded-lg"
          title="Internal Complaints Committee"
        />
      </div>
    </div>
  );
}
