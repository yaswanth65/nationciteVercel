import React from "react";

export default function TrustedBy() {
  return (
    <section className="w-full py-20 bg-white flex flex-col items-center justify-center gap-10">
      <div className="text-center">
        <h2 className="text-[#1E1E1E] font-semibold text-lg mb-6">
          Trusted by Leading Academic Institutions
        </h2>
        <p className="text-[#5C5C5C] text-sm  mx-auto">
          NationCite collaborates with universities, hospitals, and research
          organizations shaping India's academic future.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {/* Placeholders for logos */}
        <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
          <span className="w-6 h-6 bg-gray-300 rounded-full"></span> Luminous
        </div>
        <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
          <span className="w-6 h-6 bg-gray-300 rounded-full"></span> Trace
        </div>
        <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
          <span className="w-6 h-6 bg-gray-300 rounded-full"></span> ProNature
        </div>
        <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
          <span className="w-6 h-6 bg-gray-300 rounded-full"></span> Nextmove
        </div>
      </div>
    </section>
  );
}
