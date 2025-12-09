"use client";

import React from "react";
import ThreeCardsSection from "./components/ThreeCardsSection";
import ConsultancySection from "./components/ConsultancySection";
import ThreeBlocksSection from "./components/ThreeBlocksSection";
import FAQSection from "@/components/site/FAQSection";
import LeaderboardFinalCTA from "./components/LeaderboardFinalCTA";
import LeaderboardWidget from "@/components/site/LeaderboardWidget";

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-[#FFF5EE] via-[#FFE4C8] to-[#FFD9B3] pt-20 pb-16 px-4 md:px-12 lg:px-[108px] overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-20 -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-50 rounded-full opacity-30 -ml-36 -mb-36"></div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="mb-12 mt-8">
            <h1 className="text-[#1E1E1E] mb-6 max-w-3xl leading-tight">
              Top Researchers &{" "}
              <span className="text-[#FF7A00]">Institutions</span>
              <br />
              Shaping the Future
            </h1>
            <p className="text-base md:text-lg text-[#5C5C5C] max-w-2xl leading-relaxed">
              Discover the top researchers and institutions driving innovation
              and making an impact in their fields. Our comprehensive rankings
              highlight the leaders in academic research and scholarly
              achievement.
            </p>
          </div>

          {/* LeaderboardWidget Component */}
          <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <LeaderboardWidget />
          </div>
        </div>
      </section>

      <ThreeCardsSection />

      <ConsultancySection />

      <ThreeBlocksSection />

      <FAQSection />

      <LeaderboardFinalCTA />
    </div>
  );
}
