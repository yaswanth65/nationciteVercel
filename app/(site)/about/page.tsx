"use client";

import React from "react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import TrustedBy from "@/components/site/TrustedBy";
import FAQSection from "@/components/site/FAQSection";
import FinalCTA from "@/components/site/FinalCTA";
import { Check } from "lucide-react";

export default function AboutPage() {
  const scrollToNextSection = () => {
    const heroSection = document.querySelector("section");
    const nextSection = heroSection?.nextElementSibling;
    nextSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-[76px] py-12 md:py-24 text-center">
        <span className="text-[#F76A23] font-medium mb-4 md:mb-6 block text-sm tracking-wide uppercase">
          About Nationcite
        </span>
        <h1 className="mb-6 md:mb-8 text-3xl md:text-5xl">
          Building the Digital Infrastructure for Tomorrow's Brands.
        </h1>
        <div className=" p-6 md:p-8 rounded-2xl inline-block mb-8 md:mb-10 ">
          <p className="p1 text-[#5C5C5C]">
            Nationcite is a technology-first company creating intelligent
            digital solutions for businesses that want to scale with clarity,
            speed, and long-term impact.
          </p>
        </div>
        <div className="flex justify-center">
          <PrimaryButton
            onClick={scrollToNextSection}
            className="bg-[#FF7A00] text-white px-8 w-auto md:px-16 md:w-[250px] py-4 rounded-full hover:bg-[#ff8d28] transition-colors"
          >
            Explore Our Ecosystem
          </PrimaryButton>
        </div>
      </section>

      {/* Who We Are */}
      <section className="w-full px-4 md:px-[76px] py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
        <div>
          <span className="text-[#F76A23] font-bold mb-4 block text-sm uppercase tracking-wider">
            Who We Are
          </span>
          <h3 className="text-2xl md:text-3xl">
            Where Vision Meets Engineering Excellence
          </h3>
        </div>
        <div className="space-y-6 md:space-y-8 text-[#5C5C5C]">
          <p className="p1">
            Nationcite was born from a simple realization: businesses don't fail
            due to lack of ideas, they fail due to lack of execution-grade
            systems. We exist to bridge this gap by building digital products,
            platforms, and infrastructures that are reliable, scalable, and
            future-ready.
          </p>
          <p className="p1">
            At our core, we are architects of digital ecosystems. We blend
            strategy, design, engineering, and automation to create solutions
            that remove friction from growth. Every product we build is designed
            with one intention: to help brands operate smarter, move faster, and
            scale stronger.
          </p>
          <p className="p1">
            Today, Nationcite partners with startups, enterprises, and
            innovators across industries, powering their digital journeys with
            precision, accountability, and long-term thinking.
          </p>
        </div>
      </section>

      {/* The Minds Powering Nationcite Section */}
      <section className="w-full py-20 md:py-32 px-4 md:px-[76px] bg-white">
        <div className="flex flex-col items-center gap-12">
          <h3 className=" md:text-4xl font-bold text-center text-[#1E1E1E]">
            The Minds Powering Nationcite
          </h3>

          {/* Placeholder Image */}
          <div className="w-full rounded-2xl overflow-hidden aspect-video bg-slate-100">
            <img
              src="https://via.placeholder.com/1200x675?text=The+Minds+Powering+Nationcite"
              alt="The Minds Powering Nationcite"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <TrustedBy />

      {/* 15 Reasons to Join Us */}
      <section className="w-full px-4 md:px-[76px] py-12 md:py-24 flex flex-col lg:flex-row gap-8 md:gap-16">
        <div className="lg:w-1/4">
          <h3 className="mb-6 text-2xl md:text-3xl">15 Reasons to Join Us</h3>
          <p className="p2 text-[#5C5C5C]">
            Discover why top talent chooses to build their careers with us.
          </p>
        </div>
        <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {[
            "Innovation",
            "Scalability",
            "Precision",
            "Transparency",
            "Reliability",
            "Speed",
            "Security",
            "Ownership",
            "Performance",
            "Adaptability",
            "Vision",
            "Automation",
            "Growth",
            "Excellence",
            "Trust",
          ].map((reason, i) => (
            <div
              key={i}
              className="bg-[#F9F9F9] p-4 md:p-6 rounded-xl flex flex-col gap-3 md:gap-4 border border-transparent"
            >
              <div className="w-8 md:w-10 h-8 md:h-10 text-[#5C5C5C] bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                <Check size={18} className="md:w-5 md:h-5" />
              </div>
              <p className="font-medium text-sm md:text-lg text-neutral-800">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection />
    </main>
  );
}
