import React from "react";

export default function ThreeCardsSection() {
  return (
    <section className="w-full py-20 bg-white px-4 md:px-[108px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-[#1E1E1E] leading-tight mb-6">Lorem Ipsum</h2>
            <p className="text-large text-[#5C5C5C] max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="bg-[#FF7A00] text-white px-6 py-3 rounded-full font-medium hover:bg-[#e66e00] transition-colors uppercase text-sm tracking-wide">
            CTA Button
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-[#EAEAEA] rounded-2xl p-10 min-h-[320px] flex flex-col justify-end"
            >
              <h4 className="text-[#1E1E1E] mb-4">
                Lorem ipsum dolor sit amet
              </h4>
              <p className="text-small text-[#5C5C5C] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
