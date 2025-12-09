import React from "react";
import { Metadata } from "next";
import ThreeCardsSection from "../leaderboard/components/ThreeCardsSection";
import ConsultancySection from "../leaderboard/components/ConsultancySection";
import ThreeBlocksSection from "../leaderboard/components/ThreeBlocksSection";
import LeaderboardFinalCTA from "../leaderboard/components/LeaderboardFinalCTA";
import FAQSection from "@/components/site/FAQSection";
import TrustedBy from "@/components/site/TrustedBy";

export const metadata: Metadata = {
  title: "Methodology | Nationcite",
  description: "Nationcite's H-Index Methodology",
};

export default function MethodologyPage() {
  return (
    <main className="w-full bg-white font-sans text-black">
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-[#FFF5EE] via-[#FFE4C8] to-[#FFD9B3] pt-32 pb-24 px-4 md:px-12 lg:px-[108px] overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-20 -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-50 rounded-full opacity-30 -ml-36 -mb-36"></div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="mb-12">
            <span className="text-[#FF7A00] font-medium mb-4 block text-sm tracking-wide uppercase">
              Methodology
            </span>
            <h1 className="text-[#1E1E1E] mb-6 max-w-3xl leading-tight text-5xl md:text-6xl font-medium">
              Nationcite's H-Index
              <br />
              Methodology
            </h1>
            <p className="text-base md:text-lg text-[#5C5C5C] max-w-xl leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-wrap gap-4 mt-7">
              <button className="bg-[#FF7A00] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e66e00] transition-colors">
                CTA Button
              </button>
              <button className="bg-transparent border border-[#1E1E1E] text-[#1E1E1E] px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
                CTA Button
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="w-full py-20 bg-white px-4 md:px-[108px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[#FF7A00] font-medium mb-4 block text-sm">
              Lorem ipsum
            </span>
            <h2 className="text-[#1E1E1E] text-4xl md:text-5xl leading-tight font-medium">
              Lorem ipsum
              <br />
              dolor self amet
            </h2>
          </div>
          <div className="space-y-6 text-[#5C5C5C] text-lg leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos.
            </p>
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <div className="w-[80vw] h-[80vh] bg-gray-100 border-2  border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-xl">
             
            </div>
          </div>
        </div>
      </section>

      <TrustedBy />
      {/* Repeated Sections */}
      <ThreeCardsSection />

      <ThreeBlocksSection />

      <ConsultancySection />

      <FAQSection />

      <LeaderboardFinalCTA />
    </main>
  );
}
