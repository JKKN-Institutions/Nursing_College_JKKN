import Image from 'next/image';

export default function FeedbackAnalysis() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6">Feedback Analysis & Action Taken — JKKN College of Nursing</h1>
      <div className="flex justify-center">
        <iframe
          src="/pdf/feedback-analysis-and-action-taken.pdf"
          className="w-full h-[800px] border-2 border-gray-300 rounded-lg"
          title="Feedback Analysis and Action Taken"
        />
      </div>
    </div>
  );
}
