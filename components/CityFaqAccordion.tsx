"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface CityFaqAccordionProps {
  faqs: FaqItem[];
}

export function CityFaqAccordion({ faqs }: CityFaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-2xl border transition-all duration-200 ${
            openFaq === i
              ? "border-[#7cb983]/50 bg-white"
              : "border-gray-100 bg-white hover:border-gray-200"
          }`}
        >
          <button
            className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left gap-3"
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
          >
            <span className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">
              {faq.q}
            </span>
            <span
              className={`transition-transform duration-200 flex-shrink-0 ${
                openFaq === i ? "text-[#006837] rotate-180" : "text-gray-400"
              }`}
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          {openFaq === i && (
            <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
