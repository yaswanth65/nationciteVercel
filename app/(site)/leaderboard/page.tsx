"use client";

import React from "react";
import ThreeCardsSection from "./components/ThreeCardsSection";
import ConsultancySection from "./components/ConsultancySection";
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

      {/* Content Blocks */}
<section className="w-full py-24 bg-white px-4 md:px-[108px]">
  <div className="max-w-[1400px] mx-auto flex flex-col gap-24">

    {/* Block 1 */}
    <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-12 items-center">
      {/* Left Large Text Card */}
      <div className="relative rounded-3xl min-h-[520px] overflow-hidden
                      border border-gray-200 bg-[#F5F5F5] 
                      shadow-[0_20px_40px_rgba(2,6,23,0.06)]">
        {/* inner padding container so border remains visible */}
        <div className="p-12 md:p-16 flex flex-col justify-start h-full">
          <h3 className="text-[#1E1E1E] mb-6">
            Lorem ipsum dolor slef amet
          </h3>
          <p className="text-small text-[#5C5C5C] mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            className="text-[#1E1E1E] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
          >
            Learn more about lorem ipsum &gt;
          </a>
        </div>
      </div>

      {/* Right Big Placeholder */}
      <div className="relative rounded-3xl min-h-[520px] overflow-hidden
                      border border-gray-200 bg-white
                      shadow-[0_20px_40px_rgba(2,6,23,0.06)] flex items-center justify-center p-8">
        {/* placeholder box — put a contrast border and keep checkerboard inside so outer border remains visible */}
        <div
          className="w-full max-w-[520px] aspect-square rounded-2xl border border-gray-200 relative"
          style={{
            backgroundImage:
              `linear-gradient(45deg, #dcdcdc 25%, transparent 25%), 
               linear-gradient(-45deg, #dcdcdc 25%, transparent 25%), 
               linear-gradient(45deg, transparent 75%, #dcdcdc 75%), 
               linear-gradient(-45deg, transparent 75%, #dcdcdc 75%)`,
            backgroundSize: `28px 28px`,
            backgroundPosition: `0 0, 0 14px, 14px -14px, -14px 0`,
            opacity: 0.95, // keep visible but not washed out
          }}
        />
      </div>
    </div>

    {/* Block 2 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Bottom Card 1 */}
      <div className="relative rounded-3xl min-h-[420px] overflow-hidden
                      border border-gray-200 bg-[#F5F5F5]
                      shadow-[0_18px_40px_rgba(2,6,23,0.06)]">
        <div className="p-12 md:p-16 flex flex-col justify-start h-full">
          <h3 className="text-[#1E1E1E] mb-6">
            Lorem ipsum dolor slef amet
          </h3>
          <p className="text-small text-[#5C5C5C] mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            className="text-[#1E1E1E] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
          >
            Learn more about lorem ipsum &gt;
          </a>
        </div>
      </div>

      {/* Bottom Card 2 */}
      <div className="relative rounded-3xl min-h-[420px] overflow-hidden
                      border border-gray-200 bg-[#F5F5F5]
                      shadow-[0_18px_40px_rgba(2,6,23,0.06)]">
        <div className="p-12 md:p-16 flex flex-col justify-start h-full">
          <h3 className="text-[#1E1E1E] mb-6">
            Lorem ipsum dolor slef amet
          </h3>
          <p className="text-small text-[#5C5C5C] mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            className="text-[#1E1E1E] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
          >
            Learn more about lorem ipsum &gt;
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



      <FAQSection />

      <LeaderboardFinalCTA />
    </div>
  );
}
