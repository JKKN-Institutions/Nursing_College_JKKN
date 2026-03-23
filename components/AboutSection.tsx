import Image from "next/image";
import { siteData } from "@/data/siteData";

export default function AboutSection() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#FBFBEE]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6 sm:mb-8 uppercase">
          ABOUT US
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
          <div className="w-full lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/Simulation-lab-image.webp"
                alt="JKKN Campus"
                width={500}
                height={250}
                className="object-cover w-full"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <p className="text-gray-800 leading-relaxed text-justify text-xs sm:text-sm md:text-base">
              {siteData.aboutText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
