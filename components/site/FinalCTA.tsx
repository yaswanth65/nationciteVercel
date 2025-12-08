import React from "react";

export default function FinalCTA() {
  return (
    <section className="w-full py-28 bg-white px-4 md:px-[108px] flex flex-col items-center text-center">
      <div className="mb-10">
        <span className="bg-[#FFF5EB] text-[#FF7A00] px-4 py-1 rounded-full text-sm font-medium border border-[#FFD6B3]">
          CTA Section
        </span>
      </div>

      <h2 className="text-[#1E1E1E] leading-tight tracking-tight mb-8">
        Claim Your Academic Identity.
        <br />
        Shape Your Research Legacy.
      </h2>

      <p className="text-large text-[#5C5C5C] max-w-2xl mb-12">
        Whether you are a researcher building visibility, or an institution
        managing thousands of profiles NationCite gives you verified control,
        transparent impact measurement, and trusted national recognition.
      </p>

      <div className="flex py-3 flex-col md:flex-row gap-4">
        <button className="bg-[#FF7A00] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#e66e00] transition-colors shadow-lg shadow-orange-200">
          Claim Your Profile
        </button>
        <button className="bg-[#1E1E1E] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-black transition-colors">
          Request Institution Dashboard
        </button>
      </div>
    </section>
  );
}
