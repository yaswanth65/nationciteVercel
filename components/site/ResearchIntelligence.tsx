import React from "react";

export default function ResearchIntelligence() {
  return (
    <section className="w-full py-16 bg-white px-4 md:px-[108px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-[#1E1E1E] leading-tight">
              Research Intelligence & Academic Insight
            </h2>
            <p className="text-large text-[#5C5C5C] mt-4 max-w-xl">
              Stay informed with data literacy, ranking methodology, and
              research visibility best practices.
            </p>
          </div>
          <button className="bg-[#FF7A00] text-white px-6 py-3 rounded-full font-medium hover:bg-[#e66e00] transition-colors">
            Explore All Resources
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "How the H-Index Shapes Academic Careers in India",
              desc: "A practical guide to understanding how research metrics influence promotions, funding, and reputation.",
            },
            {
              title:
                "OpenAlex vs Scopus vs Web of Science: What's the Difference?",
              desc: "A comparative breakdown of global bibliometric data ecosystems.",
            },
            {
              title:
                "How to Claim & Verify Your Research Profile on NationCite",
              desc: "Step-by-step guide for researchers to gain ownership and improve profile accuracy.",
            },
            {
              title:
                "Preventing Metric Manipulation: Inside NationCite's Anti-Gaming System",
              desc: "Preventing Metric Manipulation: Inside NationCite's Anti-Gaming System",
            },
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-[#F5F5F5] rounded-2xl h-[350px] mb-4 w-full overflow-hidden relative">
                {/* Placeholder for image */}
                <div className="absolute inset-0 bg-gray-200/50 transition-colors"></div>
              </div>
              <h4 className="h4-compact font-semibold text-[#1E1E1E] mb-2 transition-colors leading-relaxed">
                {item.title}
              </h4>
              <p className="text-sm text-[#5C5C5C] mb-3 leading-loose">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
