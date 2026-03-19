import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function VisionMission() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Vision & Mission", url: "https://nursing.sresakthimayeil.jkkn.ac.in/vision-mission" }
      ]} />
      <Header />
      <main className="bg-cream min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Content Section */}
        <div className="container-custom py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Vision &amp; Mission — Sresakthimayeil Institute of Nursing and Research</h1>
          {/* Vision Section */}
          <div className="mb-12 md:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left - Vision Content */}
              <div className="lg:col-span-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-6">
                  Vision
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  To be a Leading Global Innovative Solutions provider for the ever changing needs of the society.
                </p>
              </div>

              {/* Right - Vision Icon */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end items-center">
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 140"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Eye shape */}
                    <path
                      d="M100 30C60 30 25 50 10 70C25 90 60 110 100 110C140 110 175 90 190 70C175 50 140 30 100 30Z"
                      fill="#006837"
                    />
                    {/* White of the eye */}
                    <ellipse cx="100" cy="70" rx="35" ry="38" fill="white" />
                    {/* Iris */}
                    <circle cx="100" cy="70" r="22" fill="#006837" />
                    {/* Pupil */}
                    <circle cx="100" cy="70" r="12" fill="#002309" />
                    {/* Eye shine */}
                    <circle cx="95" cy="65" r="5" fill="white" opacity="0.8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mb-12 md:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left - Mission Content */}
              <div className="lg:col-span-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-6">
                  Mission
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Empower learners with deep nursing knowledge , desirable attitude , practical skills, critical thinking & efficient communication as well as help them to understand bio-convergence and guide them to become nursing leaders and problem solvers in delivering patient-centred care.
                </p>
              </div>

              {/* Right - Mission Icon */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end items-center">
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Outer circle */}
                    <circle cx="100" cy="100" r="90" fill="#006837" />
                    {/* White ring */}
                    <circle cx="100" cy="100" r="75" fill="white" />
                    {/* Middle green ring */}
                    <circle cx="100" cy="100" r="50" fill="#006837" />
                    {/* Inner white circle */}
                    <circle cx="100" cy="100" r="35" fill="white" />
                    {/* Center circle */}
                    <circle cx="100" cy="100" r="18" fill="#006837" />
                    {/* Arrow */}
                    <g transform="translate(100, 100) rotate(-45)">
                      {/* Arrow shaft */}
                      <rect x="-3" y="-80" width="6" height="95" fill="#006837" />
                      {/* Arrow head */}
                      <path d="M0,-80 L-12,-65 L12,-65 Z" fill="#006837" />
                      {/* Arrow fletching */}
                      <path d="M-8,10 L-15,20 L-8,15 Z" fill="#006837" />
                      <path d="M8,10 L15,20 L8,15 Z" fill="#006837" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer hideLifeAtJKKN />
      <FloatingButtons />
    </>
  );
}
