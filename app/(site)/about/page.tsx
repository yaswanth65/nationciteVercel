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
      <section className="w-full px-[76px] py-24 text-center">
        <span className="text-[#F76A23] font-medium mb-6 block text-sm tracking-wide uppercase">
          About Nationcite
        </span>
        <h1 className="mb-8">
          Building the Digital Infrastructure for Tomorrow's Brands.
        </h1>
        <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl inline-block mb-10 shadow-sm">
          <p className="p1 text-[#5C5C5C]">
            Nationcite is a technology-first company creating intelligent
            digital solutions for businesses that want to scale with clarity,
            speed, and long-term impact.
          </p>
        </div>
        <div className="flex justify-center">
          <PrimaryButton
            onClick={scrollToNextSection}
            className="bg-[#FF7A00] text-white px-16 w-[250px] py-4 rounded-full hover:bg-[#ff8d28] transition-colors"
          >
            Explore Our Ecosystem
          </PrimaryButton>
        </div>
      </section>

      {/* Who We Are */}
      <section className="w-full px-[76px] py-24 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-[#F76A23] font-bold mb-4 block text-sm uppercase tracking-wider">
            Who We Are
          </span>
          <h3>Where Vision Meets Engineering Excellence</h3>
        </div>
        <div className="space-y-8 text-[#5C5C5C]">
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

      {/* The Minds Powering Nationcite */}
      <section className="w-full px-[76px] py-24 text-center">
        <h3 className="mb-16">The Minds Powering Nationcite</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[120px] md:auto-rows-[180px]">
          {/* Abstract grid layout */}
          <div className="bg-neutral-100 rounded-2xl col-span-1 row-span-2"></div>
          <div className="bg-neutral-100 rounded-2xl col-span-1 row-span-1"></div>
          <div className="bg-neutral-100 rounded-2xl col-span-1 row-span-1"></div>
          <div className="bg-neutral-100 rounded-2xl col-span-1 row-span-2"></div>

          <div className="bg-neutral-100 rounded-2xl col-span-1 row-span-1"></div>
          <div className="bg-neutral-100 rounded-2xl col-span-1 row-span-1"></div>

          <div className="bg-neutral-100 rounded-2xl col-span-1 row-span-2"></div>
          <div className="bg-neutral-100 rounded-2xl col-span-1 row-span-1"></div>
          <div className="bg-neutral-100 rounded-2xl col-span-1 row-span-1"></div>
          <div className="bg-neutral-100 rounded-2xl col-span-1 row-span-2"></div>

          <div className="bg-neutral-100 rounded-2xl col-span-1 row-span-1"></div>
          <div className="bg-neutral-100 rounded-2xl col-span-1 row-span-1"></div>
        </div>
      </section>

      {/* Trusted By */}
      <TrustedBy />

      {/* 15 Reasons to Join Us */}
      <section className="w-full px-[76px] py-24 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/4">
          <h3 className="mb-6">15 Reasons to Join Us</h3>
          <p className="p2 text-[#5C5C5C]">
            Discover why top talent chooses to build their careers with us.
          </p>
        </div>
        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="bg-[#F9F9F9] p-6 rounded-xl flex flex-col gap-4 border border-transparent"
            >
              <div className="w-10 h-10 text-[#5C5C5C] bg-white rounded-lg flex items-center justify-center shadow-sm">
                <Check size={20} />
              </div>
              <p className="font-medium text-lg text-neutral-800">
                Growth Mindset
              </p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection />
    </main>
  );
}
