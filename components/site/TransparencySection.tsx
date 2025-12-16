import React from "react";

export default function TransparencySection() {
  return (
    <section className="w-full py-12 md:py-20 bg-white px-4 md:px-[76px]">
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 md:gap-8">
          <div>
            <h3 className="text-[#1E1E1E] text-2xl md:text-3xl mb-4 md:mb-6">
              Built on Transparency.
              <br />
              Governed by Data Integrity.
            </h3>
            <p className="p2 text-[#5C5C5C] mt-4 md:mt-6 max-w-xl">
              NationCite follows a reproducible, evidence-backed methodology
              using global open and licensed bibliometric sources. Every metric
              is source-labeled, auditable, and continuously updated.
            </p>
          </div>
          <button className="bg-[#FF7A00] text-white px-4 py-2 rounded-xl font-medium hover:bg-[#e66e00] transition-colors md:-mt-3 md:self-end w-auto">
            View Full Methodology
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Open & Licensed Data Sources",
              desc: "We ingest validated data from OpenAlex (open), and optionally from Scopus & Web of Science (licensed) where available.",
            },
            {
              title: "Evidence-Based Verification",
              desc: "All profile corrections and claims require documentary evidence and undergo structured moderation.",
            },
            {
              title: "Continuous Refresh & Audit",
              desc: "Nightly updates, weekly recomputations, and immutable audit trails ensure metric reliability.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#F5F5F5] p-6 md:p-10 rounded-2xl min-h-[300px] md:min-h-[450px] flex flex-col justify-end transparency-card"
            >
              <h4 className="text-[#1E1E1E] mb-4 md:mb-8 text-xl md:text-2xl">
                {item.title}
              </h4>
              <p className="p3 text-[#5C5C5C]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
