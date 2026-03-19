"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export default function Activities() {
  const [activeTab, setActiveTab] = useState<"staff" | "student">("student");

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "Activities", url: "https://nursing.sresakthimayeil.jkkn.ac.in/activities" },
      ]} />
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen pt-20 sm:pt-24 lg:pt-28">
        {/* Main Content */}
        <div className="bg-[#FBFBEE] pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 max-w-[1400px]">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Activities — Sresakthimayeil Institute of Nursing and Research</h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0b7845] mb-8">
              Activities
            </h2>

            {/* Tabs */}
            <div className="flex gap-0 mb-8">
              <button
                onClick={() => setActiveTab("staff")}
                className={`px-8 py-3 text-base font-medium transition-colors ${
                  activeTab === "staff"
                    ? "bg-[#7cb983] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Staff
              </button>
              <button
                onClick={() => setActiveTab("student")}
                className={`px-8 py-3 text-base font-medium transition-colors ${
                  activeTab === "student"
                    ? "bg-[#7cb983] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Student
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-[#FBFBEE]">
              {activeTab === "student" && (
                <div className="space-y-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-[#002309]">
                    CNE- Continuing Nursing Education
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    We organize one workshop every year. The workshop is mainly conducted with eminent speakers as resource persons from well-known institutions. Journal presentation: It's done monthly once by nursing staff members.
                  </p>
                </div>
              )}

              {activeTab === "staff" && (
                <div className="space-y-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-[#002309]">
                    Curricular Activities & Extra Curricular Activities
                  </h3>
                  <div className="text-gray-700 text-base leading-relaxed space-y-3">
                    <p>1.Workshop</p>
                    <p>2.Rally &amp;other activities</p>
                    <p>3.General Medical Camp</p>
                    <p>4.School Health Camp</p>
                    <p>5.Community field visit</p>
                    <p>6.College day celebrations</p>
                    <p>7.Founders day celebrations</p>
                    <p>8.Pongal day celebrations</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
