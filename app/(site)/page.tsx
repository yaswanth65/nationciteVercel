"use client";

import React, { useState } from "react";
import TrustedBy from "@/components/site/TrustedBy";
import UnderstandingHIndex from "@/components/site/UnderstandingHIndex";
import TransparencySection from "@/components/site/TransparencySection";
import PricingSection from "@/components/site/PricingSection";
import ResearchIntelligence from "@/components/site/ResearchIntelligence";
import FinalCTA from "@/components/site/FinalCTA";
import LeaderboardWidget from "@/components/site/LeaderboardWidget";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-[#FFF5EE] via-[#FFE4C8] to-[#f8f7f7] pt-16 pb-32 w-full overflow-hidden">
        {/* <-- IMPORTANT: 72px gutters left & right --> */}
        <div className="w-full px-4 md:px-[72px] flex flex-col gap-6 z-10">
          <div className="flex flex-col mt-10 gap-6 w-full text-center mb-12">
            <h1 className="text-[#1E1E1E] mb-3">
              India's H-Index
              <br />
              Leaderboard Portal
            </h1>

            <p className="p1 text-[#5C5C5C] mb-2">
              NationCite is India’s national research visibility and H-Index
              analytics platform bringing transparent rankings, <br /> verified
              researcher profiles, and institution-level intelligence powered by
              open and licensed global data sources.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <button className="bg-[#FF7A00] text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-orange-200/50">
                CTA Button
              </button>
              <button className="bg-white text-[#1E1E1E] border border-[#E0E0E1] px-6 py-2.5 rounded-full font-medium transition-colors">
                CTA Button
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 mt-4  px-4 py-1  border-white/60 w-fit mx-auto">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/150?img=${i + 20}`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-m text-[#1E1E1E] font-medium">
                Lorem ipsum dolor sit amet consectetur
              </span>
            </div>
          </div>

          {/* Leaderboard Widget */}
          <div className="w-full flex flex-col gap-4">
            <LeaderboardWidget />
          </div>
        </div>
      </section>

      <TrustedBy />
      <UnderstandingHIndex />
      <TransparencySection />
      <PricingSection />
      <ResearchIntelligence />
      <FinalCTA />
    </div>
  );
}
