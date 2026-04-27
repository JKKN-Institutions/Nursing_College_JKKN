"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const faqCategories = [
  {
    category: "About the Institution",
    faqs: [
      {
        q: "What is the full name of the institution?",
        a: "The full name is Sresakthimayeil Institute of Nursing and Research, also known as JKKN College of Nursing. It is part of the J.K.K. Nattraja Group of Educational Institutions.",
      },
      {
        q: "How many years of experience does JKKN have in education?",
        a: "J.K.K. Nattraja Group of Educational Institutions has 57 years of experience in the field of educational service, having been established in 1963 by Shri. J.K.K. Nattarajah.",
      },
      {
        q: "What accreditations does the college hold?",
        a: "The institution holds A+ Grade by NAAC and B++ Grade by ARIIA. It is also approved by the Indian Nursing Council (INC).",
      },
      {
        q: "Which university is the college affiliated to?",
        a: "The college is affiliated to Tamil Nadu Dr. MGR Medical University (TNMGRMU), Chennai.",
      },
      {
        q: "Where is the college located?",
        a: "Sresakthimayeil Institute of Nursing and Research, Natarajapuram, NH-544 (Salem to Coimbatore National Highway), Komarapalayam (TK), Namakkal (DT), Tamil Nadu – 638183.",
      },
    ],
  },
  {
    category: "Courses & Programs",
    faqs: [
      {
        q: "What nursing courses are offered at JKKN College of Nursing?",
        a: "Three programs are offered: B.Sc. Nursing (4 years), Post Basic B.Sc. Nursing / P.B.B.Sc. (2 years), and M.Sc. Nursing (2 years).",
      },
      {
        q: "What is the duration of the B.Sc. Nursing program?",
        a: "The B.Sc. Nursing program is a 4-year undergraduate degree recognized by the Indian Nursing Council and affiliated to Dr. MGR Medical University, Chennai.",
      },
      {
        q: "What is the Post Basic B.Sc. Nursing (P.B.B.Sc.) program?",
        a: "It is a 2-year program designed for registered nurses who wish to upgrade their qualifications from a Diploma in General Nursing and Midwifery (GNM) to a Bachelor's degree in nursing.",
      },
      {
        q: "What are the specializations available under M.Sc. Nursing?",
        a: "M.Sc. Nursing is offered in five specializations: Medical-Surgical Nursing, Child Health Nursing, Community Health Nursing, Obstetrics & Gynecological Nursing, and Mental Health Nursing.",
      },
      {
        q: "What is the duration of the M.Sc. Nursing program?",
        a: "The M.Sc. Nursing program is a 2-year postgraduate program with five available specializations.",
      },
    ],
  },
  {
    category: "Admission & Eligibility",
    faqs: [
      {
        q: "What is the eligibility for B.Sc. Nursing admission?",
        a: "Candidates must have completed 10+2 or equivalent with a minimum of 45% marks in Physics, Chemistry, and Biology.",
      },
      {
        q: "What is the eligibility for M.Sc. Nursing admission?",
        a: "Candidates must have a Bachelor's degree in nursing with a minimum of 55% marks from a recognized university.",
      },
      {
        q: "What is the eligibility for Post Basic B.Sc. Nursing (P.B.B.Sc.) admission?",
        a: "Candidates must have completed a Diploma in General Nursing and Midwifery (GNM) and hold a valid nursing registration.",
      },
      {
        q: "Are admissions currently open?",
        a: "Yes, admissions are open for 2025-2026 for B.Sc. Nursing, P.B.B.Sc. Nursing, and M.Sc. Nursing programs. Visit our Admissions page or contact +91 93458 55001 to apply.",
      },
      {
        q: "Where can I find fee structure and refund policy details?",
        a: "Full details are available on the Fee Structure and Fees Refund Policy pages on our website.",
      },
    ],
  },
  {
    category: "Facilities & Campus Life",
    faqs: [
      {
        q: "What facilities are available on campus?",
        a: "The campus offers a Digital Library, State-of-the-Art Nursing Laboratories, Clinical Training at partner hospitals, Hostel accommodation, College Transport, Cafeteria, Sports facilities, and high-speed WiFi across campus.",
      },
      {
        q: "Is hostel accommodation available?",
        a: "Yes, separate hostel facilities are available for boys and girls with all necessary amenities.",
      },
      {
        q: "Does the college provide transport?",
        a: "Yes, a college bus facility is available for safe and convenient commute for students.",
      },
      {
        q: "What clinical training opportunities are provided?",
        a: "Students receive hands-on clinical training at partner hospitals as part of the curriculum, covering real-world nursing scenarios across all departments.",
      },
      {
        q: "Is WiFi available on campus?",
        a: "Yes, high-speed internet connectivity is available across the entire campus.",
      },
    ],
  },
  {
    category: "Contact & Support",
    faqs: [
      {
        q: "How can I contact the college?",
        a: "Phone: +91 93458 55001 | Email: nursing@jkkn.ac.in | Address: Sresakthimayeil Institute of Nursing and Research, Natarajapuram, NH-544, Komarapalayam, Namakkal, Tamil Nadu 638183.",
      },
      {
        q: "What are the social media handles of the college?",
        a: "You can follow us on Facebook, Instagram, LinkedIn, and YouTube under the handle @jkknnursing.",
      },
      {
        q: "Where can I find more information about the institution's research and committees?",
        a: "Detailed information about research proposals, journal publications, committees (Anti-Ragging, Grievance Redressal, Internal Complaints), and IQAC is available in the respective sections of our website.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-[#f0f7f1] transition-colors"
        aria-expanded={open}
      >
        <span className="text-[#002309] font-medium text-sm sm:text-base">{q}</span>
        <span className={`flex-shrink-0 w-5 h-5 rounded-full border-2 border-[#006837] flex items-center justify-center transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          <svg className="w-3 h-3 text-[#006837]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4 pt-2 bg-[#f9fdf9] border-t border-gray-100">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered =
    activeCategory === null
      ? faqCategories
      : faqCategories.filter((c) => c.category === activeCategory);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
          { name: "FAQ", url: "https://nursing.sresakthimayeil.jkkn.ac.in/faq" },
        ]}
      />
      <Header />

      <main className="bg-[#FBFBEE] min-h-screen">

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#006837] to-[#7cb983] text-white pt-28 pb-8 md:pt-32 md:pb-10">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full mb-6 text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Frequently Asked Questions
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              FAQs — JKKN College of Nursing
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Common questions about Sresakthimayeil Institute of Nursing and Research — courses, admissions, facilities, and more.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 pt-10">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === null
                  ? "bg-[#006837] text-white border-[#006837]"
                  : "bg-white text-[#006837] border-[#006837] hover:bg-[#f0f7f1]"
              }`}
            >
              All Topics
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category === activeCategory ? null : cat.category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeCategory === cat.category
                    ? "bg-[#006837] text-white border-[#006837]"
                    : "bg-white text-[#006837] border-[#006837] hover:bg-[#f0f7f1]"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 py-12">
          <div className="max-w-3xl mx-auto space-y-10">
            {filtered.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-xl sm:text-2xl font-bold text-[#006837] mb-4 flex items-center gap-3">
                  <span className="w-1 h-7 bg-[#7cb983] rounded-full inline-block"></span>
                  {cat.category}
                </h2>
                <div className="space-y-3">
                  {cat.faqs.map((item) => (
                    <FaqItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section className="bg-[#e8f5e9] py-12">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#002309]">Still have questions?</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Reach us directly — our admissions team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919345855001"
                className="inline-flex items-center justify-center gap-2 bg-[#006837] text-white font-bold px-7 py-3 rounded-lg hover:bg-[#005a2e] transition-colors text-sm sm:text-base"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 93458 55001
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#006837] text-[#006837] font-bold px-7 py-3 rounded-lg hover:bg-[#006837] hover:text-white transition-colors text-sm sm:text-base"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
