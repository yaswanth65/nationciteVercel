import React from "react";

const CheckerboardPattern = ({ className }: { className?: string }) => (
  <div className={`overflow-hidden relative bg-gray-50 ${className}`}>
    <div
      className="absolute inset-0 opacity-[0.4]"
      style={{
        backgroundImage: `
          linear-gradient(45deg, #cbd5e1 25%, transparent 25%),
          linear-gradient(-45deg, #cbd5e1 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #cbd5e1 75%),
          linear-gradient(-45deg, transparent 75%, #cbd5e1 75%)
        `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
      }}
    />
  </div>
);

export default function UnderstandingHIndex() {
  return (
    <section className="w-full min-h-screen bg-white py-24 px-[76px] font-sans selection:bg-gray-100">
      <div className="w-full">
        {/* Header Section */}
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-10">
          <h3 className="text-black">
            Understanding the H-Index
            <br />
            The Backbone of Research Impact
          </h3>
          <p className="p2 text-gray-500 md:w-[40%] md:self-end md:-mt-3">
            The H-Index is more than a number. It reflects consistency,
            influence, and academic credibility. Here's what it truly represents
            and why it matters.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Item 1 - Full Width */}
          <div className="md:col-span-5 bg-white rounded-4xl p-12 md:p-16 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-stretch gap-12 min-h-[500px] md:min-h-[450px]">
            <div className="flex flex-col justify-center max-w-md">
              <h4 className="text-black mb-12">What is the H-Index?</h4>
              <p className="p2 text-gray-600">
                It measures both productivity and impact by balancing total
                publications with citation performance.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <CheckerboardPattern className="w-full h-full min-h-[300px] md:min-h-[280px] rounded-2xl" />
            </div>
          </div>

          {/* Item 2 - Bottom Text (60%) */}
          <div className="md:col-span-3 bg-white rounded-4xl p-12 md:p-14 border border-gray-100 shadow-sm flex flex-col justify-between min-h-[600px]">
            <div className="flex flex-1 items-center justify-center mb-10">
              <CheckerboardPattern className="w-full h-full min-h-[250px] rounded-2xl" />
            </div>
            <div>
              <h4 className="text-black mb-8">Why H-Index Matters</h4>
              <p className="p2 text-gray-600">
                It reflects sustained scholarly influence—not just one
                successful paper.
              </p>
            </div>
          </div>

          {/* Item 3 - Centered Alignment (40%) */}
          <div className="md:col-span-2 bg-white rounded-4xl p-12 md:p-14 border border-gray-100 shadow-sm flex flex-col items-center justify-between text-center min-h-[600px]">
            <div className="flex-1 flex flex-col items-center justify-center">
              <h4 className="text-black mb-8">Beyond Citation Counts</h4>
              <p className="p2 text-gray-600 max-w-xs">
                Unlike raw citations, H-Index prevents inflation through a
                single highly-cited work.
              </p>
            </div>
            <div className="w-full flex items-center justify-center mt-8">
              <CheckerboardPattern className="w-full h-64 min-h-[200px] rounded-2xl" />
            </div>
          </div>

          {/* Item 4 - Left Aligned (40%) */}
          <div className="md:col-span-2 bg-white rounded-4xl p-12 md:p-14 border border-gray-100 shadow-sm flex flex-col justify-between min-h-[600px]">
            <div>
              <h4 className="text-black mb-8">Institutional Benchmarking</h4>
              <p className="p2 text-gray-600 max-w-xs">
                Helps universities assess research output and discipline
                strengths.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-start mt-8">
              <CheckerboardPattern className="w-full h-full min-h-[250px] rounded-2xl" />
            </div>
          </div>

          {/* Item 5 - Corner Image (60%) */}
          <div className="md:col-span-3 bg-white rounded-4xl p-12 md:p-14 border border-gray-100 shadow-sm flex flex-col relative min-h-[600px] overflow-hidden">
            <div className="relative z-10 max-w-[65%]">
              <h4 className="text-black mb-8">Academic Visibility</h4>
              <p className="p2 text-gray-600">
                Higher H-index improves visibility in global research databases.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 h-96 w-80">
              <CheckerboardPattern className="w-full h-full rounded-tl-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
