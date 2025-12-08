import React from "react";

export default function TransparencySection() {
  return (
    <section className="w-full py-20 bg-white px-4 md:px-[108px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-[#1E1E1E] leading-tight mb-6">
              Built on Transparency.
              <br />
              Governed by Data Integrity.
            </h2>
            <h5 className=" text-[#5C5C5C] mt-6 max-w-xl">
              NationCite follows a reproducible, evidence-backed methodology
              using global open and licensed bibliometric sources. Every metric
              is source-labeled, auditable, and continuously updated.
            </h5>
          </div>
          <button className="bg-[#FF7A00] text-white px-6 py-3 rounded-full font-medium hover:bg-[#e66e00] transition-colors">
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
              className="bg-[#F5F5F5] p-10 rounded-2xl min-h-[450px] flex flex-col justify-end"
            >
              <h4 className="text-[#1E1E1E] mb-8 text-xl font-medium leading-relaxed">
                {item.title}
              </h4>
              <p className="text-small text-[#5C5C5C] leading-loose">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
