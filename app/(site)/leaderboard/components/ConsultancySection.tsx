import React from "react";

export default function ConsultancySection() {
  return (
    <section className="w-full py-24 bg-white px-4 md:px-[108px] overflow-hidden">
      <div className="max-w-[1000px] mx-auto relative flex flex-col items-center text-center">
        {/* Floating Icons (Decorative) */}
        <div className="hidden md:block absolute top-0 left-10 text-gray-400">
          <IconUser />
        </div>
        <div className="hidden md:block absolute top-10 right-20 text-gray-400">
          <IconUser />
        </div>
        <div className="hidden md:block absolute bottom-20 left-0 text-gray-400">
          <IconUser />
        </div>
        <div className="hidden md:block absolute bottom-10 right-10 text-gray-400">
          <IconUser />
        </div>
        <div className="hidden md:block absolute top-1/2 left-[-50px] text-gray-400">
          <IconUser />
        </div>
        <div className="hidden md:block absolute top-1/2 right-[-50px] text-gray-400">
          <IconUser />
        </div>

        <div className="mb-8">
          <span className="bg-[#FFF5EB] text-[#FF7A00] px-4 py-1 rounded-full text-xs font-medium border border-[#FFD6B3]">
            CTA Goes Here
          </span>
        </div>

        <h2 className="text-[#1E1E1E] leading-tight mb-8 max-w-2xl relative z-10">
          Custom Consultancy Calls Powered by Industry Experts
        </h2>

        <p className="text-large text-[#5C5C5C] max-w-md mb-10 relative z-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex flex-col items-start gap-3 mb-10 relative z-10">
          {[
            "Verified profile badge",
            "Monthly auto-refresh",
            "Premium Profile Coach access",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#FF7A00] flex items-center justify-center text-white text-xs">
                ✓
              </div>
              <span className="text-[#1E1E1E] font-medium">{item}</span>
            </div>
          ))}
        </div>

        <button className="bg-[#FF7A00] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e66e00] transition-colors relative z-10">
          CTA Button
        </button>
      </div>
    </section>
  );
}

function IconUser() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth="0.5"
        strokeDasharray="4 4"
      ></circle>
    </svg>
  );
}
