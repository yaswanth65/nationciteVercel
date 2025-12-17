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
  const cards = [
    {
      title: "What is the H-Index?",
      description:
        "It measures both productivity and impact by balancing total publications with citation performance.",
    },
    {
      title: "Why H-Index Matters",
      description:
        "It reflects sustained scholarly influence—not just one successful paper.",
    },
    {
      title: "Beyond Citation Counts",
      description:
        "Unlike raw citations, H-Index prevents inflation through a single highly-cited work.",
    },
    {
      title: "Institutional Benchmarking",
      description:
        "Helps universities assess research output and discipline strengths.",
    },
    {
      title: "Academic Visibility",
      description:
        "Higher H-index improves visibility in global research databases.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white py-12 md:py-24 px-4 md:px-[120px] font-sans selection:bg-gray-100">
      <div className="w-full">
        {/* Header Section */}
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6 md:gap-10">
          <h3 className="text-black text-2xl md:text-3xl">
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

        {/* Mobile Layout - Simple Cards */}
        <div className="md:hidden space-y-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="mb-6">
                <CheckerboardPattern className="w-full h-48 rounded-xl" />
              </div>
              <h4 className="text-black mb-3 text-lg font-semibold">
                {card.title}
              </h4>
              <p className="p2 text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Desktop Layout - 2 cards top row, 3 cards bottom row */}
        <div className="hidden md:flex flex-col gap-8">
          {/* First Row - 2 Cards */}
          <div className="grid grid-cols-5 gap-8">
            {/* Item 1 - 60% width */}
            <div className="col-span-3 bg-white rounded-4xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between min-h-[400px]">
              <div className="flex-1 flex items-center justify-center mb-6">
                <CheckerboardPattern className="w-full h-full min-h-[180px] rounded-2xl" />
              </div>
              <div>
                <h4 className="text-black mb-4 text-2xl">{cards[0].title}</h4>
                <p className="p2 text-gray-600">{cards[0].description}</p>
              </div>
            </div>

            {/* Item 2 - 40% width */}
            <div className="col-span-2 bg-white rounded-4xl p-8 border border-gray-100 shadow-sm flex flex-col items-center justify-between text-center min-h-[400px]">
              <div className="flex-1 flex flex-col items-center justify-center">
                <h4 className="text-black mb-4 text-2xl">{cards[1].title}</h4>
                <p className="p2 text-gray-600 max-w-xs">
                  {cards[1].description}
                </p>
              </div>
              <div className="w-full flex items-center justify-center mt-6">
                <CheckerboardPattern className="w-full h-40 rounded-2xl" />
              </div>
            </div>
          </div>

          {/* Second Row - 3 Equal Cards */}
          <div className="grid grid-cols-3 gap-8">
            {/* Item 3 */}
            <div className="bg-white rounded-4xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between min-h-[350px]">
              <div className="flex-1 flex items-center justify-center mb-6">
                <CheckerboardPattern className="w-full h-full min-h-[150px] rounded-2xl" />
              </div>
              <div>
                <h4 className="text-black mb-4 text-2xl">{cards[2].title}</h4>
                <p className="p2 text-gray-600">{cards[2].description}</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-white rounded-4xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between min-h-[350px]">
              <div className="flex-1 flex items-center justify-center mb-6">
                <CheckerboardPattern className="w-full h-full min-h-[150px] rounded-2xl" />
              </div>
              <div>
                <h4 className="text-black mb-4 text-2xl">{cards[3].title}</h4>
                <p className="p2 text-gray-600">{cards[3].description}</p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="bg-white rounded-4xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between min-h-[350px]">
              <div className="flex-1 flex items-center justify-center mb-6">
                <CheckerboardPattern className="w-full h-full min-h-[150px] rounded-2xl" />
              </div>
              <div>
                <h4 className="text-black mb-4 text-2xl">{cards[4].title}</h4>
                <p className="p2 text-gray-600">{cards[4].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
