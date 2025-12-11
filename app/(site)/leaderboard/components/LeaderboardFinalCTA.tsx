import React from "react";

export default function LeaderboardFinalCTA() {
  return (
    <section className="w-full py-20 bg-white px-[76px]">
      <div className="w-full bg-[#EAEAEA] rounded-2xl p-12 md:p-28 text-center">
        <h2 className="text-[#1E1E1E] mb-10">
          Lorem ipsum dolor
          <br />
          self amet consectetur
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-[#FF7A00] text-white px-4 py-2 rounded-xl font-medium hover:bg-[#e66e00] transition-colors">
            CTA Button
          </button>
          <button className="bg-[#1E1E1E] text-white px-4 py-2 rounded-xl font-medium hover:bg-black transition-colors">
            CTA Button
          </button>
        </div>
      </div>
    </section>
  );
}
