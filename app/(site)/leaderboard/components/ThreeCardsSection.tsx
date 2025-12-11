import React from "react";

export default function ThreeCardsSection() {
  return (
    <section className="w-full py-20 bg-white px-[76px]">
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h3 className=" text-[#1E1E1E] mb-6">Lorem Ipsum</h3>
            <p className="p1 text-[#5C5C5C] max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <button className="bg-[#FF7A00] text-white px-4 py-2 rounded-xl font-medium hover:bg-[#e66e00] transition-colors uppercase text-sm tracking-wide">
            CTA Button
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-[#EAEAEA] rounded-2xl p-10 min-h-[320px] flex flex-col justify-end"
            >
              <h5 className="text-[#1E1E1E] mb-4">
                Lorem ipsum dolor sit amet
              </h5>
              <p className="p3 text-[#5C5C5C]">
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
