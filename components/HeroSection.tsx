"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          {/* Accreditation Badges */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mb-8">
            {/* AI Empowered College Badge */}
            <div className="bg-[#FFD700] text-green-900 px-4 py-3 md:px-6 md:py-4 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider">INDIA'S FIRST</div>
              <div className="text-2xl md:text-3xl font-black">Ai</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider">EMPOWERED</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider">COLLEGE</div>
            </div>

            {/* NAAC Badge */}
            <div className="relative">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex flex-col items-center justify-center text-white border-4 border-yellow-400">
                  <div className="text-[8px] md:text-[9px] font-bold uppercase tracking-wide">ACCREDITED WITH IQA</div>
                  <div className="text-3xl md:text-4xl font-black my-1">B++</div>
                  <div className="text-xs md:text-sm font-bold uppercase tracking-wider">NAAC</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 text-[#FFD700] drop-shadow-2xl leading-tight px-4 max-w-6xl mx-auto">
            JKKN College of Nursing
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
            <Link
              href="/admissions"
              className="bg-[#0b7845] hover:bg-[#095d36] text-white font-bold px-8 py-4 rounded-md text-base md:text-lg shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Online Admissions 2025 - 2026
            </Link>
            <Link
              href="/academic-calendar"
              className="bg-[#0b7845] hover:bg-[#095d36] text-white font-bold px-8 py-4 rounded-md text-base md:text-lg shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Academic Calendar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
