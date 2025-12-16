import React from "react";

export default function FinalCTA() {
  return (
    <section className="w-full py-16 md:py-28 bg-white px-4 md:px-[76px]">
      <div className="w-full flex flex-col items-center text-center">
        <div className="mb-8 md:mb-10">
          <span className="bg-[#FFF5EB] text-[#FF7A00] px-4 py-1 rounded-full text-sm font-medium border border-[#FFD6B3]">
            CTA Section
          </span>
        </div>

        <h2 className="text-[#1E1E1E] mb-6 md:mb-8 text-3xl md:text-4xl">
          Claim Your Academic Identity.
          <br />
          Shape Your Research Legacy.
        </h2>

        <p className="p1 text-[#5C5C5C] mb-8 md:mb-12 w-full md:w-[900px]">
          Whether you are a researcher building visibility, or an institution
          managing thousands of profiles NationCite gives you verified control,
          transparent impact measurement, and trusted national recognition.
        </p>

        <div className="flex py-3 flex-col md:flex-row gap-4 justify-center">
          <button className="bg-[#FF7A00] text-white px-4 py-2 rounded-xl font-medium text-lg hover:bg-[#e66e00] transition-colors shadow-lg shadow-orange-200 w-fit">
            CTA
          </button>
          <button className="bg-[#1E1E1E] text-white px-4 py-2 rounded-xl font-medium text-lg hover:bg-black transition-colors w-fit">
            CTA
          </button>
        </div>
      </div>
    </section>
  );
}
