"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function Hostel() {
  const [activeTab, setActiveTab] = useState<"about" | "facilities">("facilities");

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Hostel", url: "https://nursing.sresakthimayeil.jkkn.ac.in/hostel" }
      ]} />
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Main Title */}
        <div className="bg-[#FBFBEE] py-6 sm:py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-6 sm:mb-8">
              Hostel
            </h1>
          </div>
        </div>

        {/* Hostel Images */}
        <div className="bg-[#FBFBEE] pb-6 sm:pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="w-full">
                <Image
                  src="/images/hostel-1.webp"
                  alt="Hostel Room 1"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/hostel-2.webp"
                  alt="Hostel Room 2"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/hostel-3.webp"
                  alt="Hostel Room 3"
                  width={450}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-[#FBFBEE] pb-6 sm:pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8">
              <button
                onClick={() => setActiveTab("about")}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded font-semibold transition-colors text-sm sm:text-base min-h-[44px] ${
                  activeTab === "about"
                    ? "bg-[#6B9B4C] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab("facilities")}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded font-semibold transition-colors text-sm sm:text-base min-h-[44px] ${
                  activeTab === "facilities"
                    ? "bg-[#6B9B4C] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Facilities
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-[#FBFBEE] pb-8 sm:pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            {/* Facilities Tab */}
            {activeTab === "facilities" && (
              <div className="space-y-4 text-gray-700">
                <p>Our objective of establishing Hostel within the Campus is to provide</p>

                <p>
                  students "a Home away from Home", wherein they can feel at ease and put in their best efforts for acquiring 'A'ttitude, 'S'kill sets and 'K'nowledge, towards life.
                </p>

                <p>
                  We strongly believe in this formula for life viz., "ASK". The Hostel Environment certainly provides self-confidence, instills discipline in the minds of students and also provides scope for developing their ideals for harmonious and communal living without Nostalgia; these attributes enable them to share the joys of camaraderie, friendship/ fellowship and professional fraternity; senior students have been trained to be more responsible and thus set good examples for the juniors.
                </p>

                <p>
                  Every one should uphold dignity, self respect and reputation of every other student and of the Alma-Mater. 'Self-help', 'Accommodating Intelligence' and 'Team spirit' for the common good are the virtues expected from senior students as well as the freshers.
                </p>

                <p>
                  Computer terminals are available in each hostel for the students. Each room is provided with a telephone.
                </p>

                <p>
                  The rooms are spaciously designed with adequate storage moving areas. The wi-fi facility extends to most of the hostels. In addition, some rooms are provided with a wired connection. Access to internet from hostels is a facility that aids the quest for knowledge.
                </p>
              </div>
            )}

            {/* About Tab */}
            {activeTab === "about" && (
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    24 /& Free Wi-Fi enabled, Aesthetically built architecture.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Multipurpose Separate Gym for Boys and Girls.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Facilities for indoor and outdoor games like table tennis, badminton, football, basketball, Volleyball, Lawn Tennis, Throw ball, Cricket.etc.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Exclusive uninterrupted study room for students after college hours
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Uninterrupted power supply, Separate Generator for Students
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Three aesthetically designed modern hostels with a homely ambiance.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Leisure Hall with TV.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    24/7 Medical facility available with free medicines
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Medical Lab facility also available
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Mineral water provided to all the rooms
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Modern dining hall serving nutritious and hygienic Veg. and Non-Veg. food
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Separate food for all Other-state's students
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Yoga sessions
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    Multi Cuisine Restaurant, Post office and Stationery shop inside the Campus.
                  </p>
                </li>

                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">
                    STD / ISD Telephone facilities are available.
                  </p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
