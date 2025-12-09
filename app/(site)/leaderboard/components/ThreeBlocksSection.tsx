import React from "react";

export default function ThreeBlocksSection() {
  return (
    <section className="w-full py-24 bg-white px-4 md:px-[108px]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-24">
        {/* Block 1 */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-12 items-center">
          {/* Left Large Text Card */}
          <div className="relative rounded-3xl min-h-[520px] overflow-hidden border border-gray-200 bg-[#F5F5F5] shadow-[0_20px_40px_rgba(2,6,23,0.06)]">
            <div className="p-12 md:p-16 flex flex-col justify-start h-full">
              <h3 className="text-[#1E1E1E] mb-6">
                Lorem ipsum dolor slef amet
              </h3>
              <p className="text-small text-[#5C5C5C] mb-10 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="text-[#1E1E1E] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn more about lorem ipsum &gt;
              </a>
            </div>
          </div>

          {/* Right Big Placeholder */}
          <div className="relative rounded-3xl min-h-[520px] overflow-hidden border border-gray-200 bg-white shadow-[0_20px_40px_rgba(2,6,23,0.06)] flex items-center justify-center p-8">
            <div
              className="w-full max-w-[520px] aspect-square rounded-2xl border border-gray-200 relative"
              style={{
                backgroundImage: `linear-gradient(45deg, #dcdcdc 25%, transparent 25%), linear-gradient(-45deg, #dcdcdc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #dcdcdc 75%), linear-gradient(-45deg, transparent 75%, #dcdcdc 75%)`,
                backgroundSize: `28px 28px`,
                backgroundPosition: `0 0, 0 14px, 14px -14px, -14px 0`,
                opacity: 0.95,
              }}
            />
          </div>
        </div>

        {/* Block 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bottom Card 1 */}
          <div className="relative rounded-3xl min-h-[420px] overflow-hidden border border-gray-200 bg-[#F5F5F5] shadow-[0_18px_40px_rgba(2,6,23,0.06)]">
            <div className="p-12 md:p-16 flex flex-col justify-start h-full">
              <h3 className="text-[#1E1E1E] mb-6">
                Lorem ipsum dolor slef amet
              </h3>
              <p className="text-small text-[#5C5C5C] mb-10 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="text-[#1E1E1E] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn more about lorem ipsum &gt;
              </a>
            </div>
          </div>

          {/* Bottom Card 2 */}
          <div className="relative rounded-3xl min-h-[420px] overflow-hidden border border-gray-200 bg-[#F5F5F5] shadow-[0_18px_40px_rgba(2,6,23,0.06)]">
            <div className="p-12 md:p-16 flex flex-col justify-start h-full">
              <h3 className="text-[#1E1E1E] mb-6">
                Lorem ipsum dolor slef amet
              </h3>
              <p className="text-small text-[#5C5C5C] mb-10 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="text-[#1E1E1E] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn more about lorem ipsum &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
