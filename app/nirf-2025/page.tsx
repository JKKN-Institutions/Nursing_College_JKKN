import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function NIRF2025() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] pt-20">
        {/* Main Title */}
        <div className="bg-[#FBFBEE] py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#002309] mb-8">
              NIRF-2025
            </h1>
          </div>
        </div>

        {/* NIRF-2025 Buttons */}
        <div className="bg-[#FBFBEE] pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <a
                href="/pdf/nirf-2025-innovation.pdf"
                className="bg-[#7cb983] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#6ba872] transition-colors"
              >
                INNOVATION
              </a>
              <a
                href="/pdf/nirf-2025-sdg.pdf"
                className="bg-[#7cb983] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#6ba872] transition-colors"
              >
                SUSTAINABLE
              </a>
              <a
                href="/pdf/nirf-2025-overall.pdf"
                className="bg-[#7cb983] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#6ba872] transition-colors"
              >
                OVERALL
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
