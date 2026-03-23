import Image from 'next/image';

export default function Antiragging() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">Anti-Ragging Policy — JKKN College of Nursing</h1>
      <div className="flex justify-center">
        <iframe
          src="/pdf/antiragging.pdf"
          className="w-full h-[800px] border-2 border-gray-300 rounded-lg"
          title="Anti Ragging"
        />
      </div>
    </div>
  );
}
