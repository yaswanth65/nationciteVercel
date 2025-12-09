"use client";

import React, { useState } from "react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import TrustedBy from "@/components/site/TrustedBy";
import FAQSection from "@/components/site/FAQSection";
import FinalCTA from "@/components/site/FinalCTA";
import { Check, Plus, Minus, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const scrollToNextSection = () => {
    const heroSection = document.querySelector("section");
    const nextSection = heroSection?.nextElementSibling;
    nextSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center max-w-5xl">
        <span className="text-[#F76A23] font-medium mb-6 block text-sm tracking-wide uppercase">
          About Nationcite
        </span>
        <h1 className="mb-8 mx-auto max-w-4xl">
          Building the Digital Infrastructure for Tomorrow's Brands.
        </h1>
        <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl inline-block mb-10 max-w-3xl mx-auto shadow-sm">
          <p className="text-large text-[#5C5C5C]">
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
      <section className="container mx-auto px-4 py-24 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-[#F76A23] font-bold mb-4 block text-sm uppercase tracking-wider">
            Who We Are
          </span>
          <h2 className="max-w-md">
            Where Vision Meets Engineering Excellence
          </h2>
        </div>
        <div className="space-y-8 text-[#5C5C5C] text-large">
          <p>
            Nationcite was born from a simple realization: businesses don't fail
            due to lack of ideas, they fail due to lack of execution-grade
            systems. We exist to bridge this gap by building digital products,
            platforms, and infrastructures that are reliable, scalable, and
            future-ready.
          </p>
          <p>
            At our core, we are architects of digital ecosystems. We blend
            strategy, design, engineering, and automation to create solutions
            that remove friction from growth. Every product we build is designed
            with one intention: to help brands operate smarter, move faster, and
            scale stronger.
          </p>
          <p>
            Today, Nationcite partners with startups, enterprises, and
            innovators across industries, powering their digital journeys with
            precision, accountability, and long-term thinking.
          </p>
        </div>
      </section>

      {/* The Minds Powering Nationcite */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="mb-16">The Minds Powering Nationcite</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[120px] md:auto-rows-[180px] max-w-6xl mx-auto">
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
      <section className="container mx-auto px-4 py-24 flex flex-col lg:flex-row gap-16 max-w-7xl">
        <div className="lg:w-1/4">
          <h2 className="mb-6">15 Reasons to Join Us</h2>
          <p className="text-[#5C5C5C]">
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

      {/* Know Nationcite (FAQ) */}
      <section className="container mx-auto px-4 py-24 grid md:grid-cols-2 gap-16 max-w-7xl">
        <div>
          <span className="text-[#F76A23] font-bold mb-4 block text-sm uppercase tracking-wider">
            Know Nationcite
          </span>
          <h2 className="mb-6">Everything You Need to Know About Us</h2>
          <p className="text-[#5C5C5C] text-large">
            This section answers the most common questions about Nationcite —
            who we are, how we operate, and what makes our company different in
            the digital ecosystem.
          </p>
        </div>
        <div className="space-y-0">
          {/* FAQ Items */}
          {[
            "How does NationCite ensure project quality?",
            "What industries do you specialize in?",
            "Can you handle enterprise-scale infrastructure?",
            "What is your engagement model?",
            "How do you handle data security?",
          ].map((question, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                onClick={() => toggleFaq(i)}
                className="flex justify-between items-center w-full py-6 text-left focus:outline-none"
              >
                <span
                  className={`font-medium text-lg transition-colors ${
                    openFaqIndex === i ? "text-[#F76A23]" : "text-neutral-900"
                  }`}
                >
                  {question}
                </span>
                <span className="text-2xl font-light text-gray-400">
                  {openFaqIndex === i ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaqIndex === i
                    ? "max-h-96 opacity-100 pb-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-[#5C5C5C] leading-relaxed">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                    <br />
                    <br />
                    <a
                      href="#"
                      className="text-[#F76A23] font-medium hover:underline flex items-center gap-1"
                    >
                      Learn More <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
