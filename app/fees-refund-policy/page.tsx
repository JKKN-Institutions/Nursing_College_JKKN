import Image from 'next/image';

export default function FeesRefundPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">Fees Refund Policy — JKKN College of Nursing and Research</h1>
      <p className="text-gray-700 mb-6 max-w-3xl">
        The document below is the University Grants Commission&apos;s Fee Refund Policy circular for 2024-25.
        For the refund rules that apply to 2026-27 admissions, please contact the JKKN College of Nursing
        and Research admission office before you pay any fee.
      </p>
      <div className="flex justify-center">
        <iframe
          src="/pdf/FEES-REFUND-POLICY.pdf"
          className="w-full h-[800px] border-2 border-gray-300 rounded-lg"
          title="Fees Refund Policy"
        />
      </div>
    </div>
  );
}
