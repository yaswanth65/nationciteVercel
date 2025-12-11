import React from "react";

export default function ThreeBlocksSection() {
  return (
    <section className="w-full py-24 bg-white px-[76px]">
      <div className="w-full flex flex-col gap-6">
        {/* Block 1 - Now a single connected card */}
        <div className="w-full rounded-3xl overflow-hidden border border-gray-200 bg-[#F5F5F5] shadow-[0_20px_40px_rgba(2,6,23,0.06)] flex flex-col md:flex-row">
          {/* Left Side: Content */}
          <div className="p-12 md:p-16 flex-1 flex flex-col justify-center">
            <h4 className="text-[#1E1E1E] mb-6 font-semibold text-3xl">
              Lorem ipsum dolor slef amet
            </h4>
            <p className="p2 text-[#5C5C5C] mb-10 text-lg leading-relaxed max-w-lg">
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

          {/* Right Side: Visual/Placeholder */}
          <div className="w-full md:w-1/2 min-h-[400px] relative bg-transparent flex items-center justify-center p-8 md:pr-16 md:py-16">
             {/* Checkerboard Pattern Area */}
             <div className="w-full h-full relative" 
                  style={{
                    backgroundImage: `linear-gradient(45deg, #E5E5E5 25%, transparent 25%), linear-gradient(-45deg, #E5E5E5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #E5E5E5 75%), linear-gradient(-45deg, transparent 75%, #E5E5E5 75%)`,
                    backgroundSize: `40px 40px`,
                    backgroundPosition: `0 0, 0 20px, 20px -20px, -20px 0`,
                    opacity: 0.6,
                    maskImage: 'linear-gradient(to right, transparent, black 20%)', 
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%)'
                  }}
             >
             </div>
          </div>
        </div>

        {/* Block 2 - Bottom two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bottom Card 1 */}
          <div className="relative rounded-3xl min-h-[420px] overflow-hidden border border-gray-200 bg-[#F5F5F5] shadow-[0_18px_40px_rgba(2,6,23,0.06)]">
            <div className="p-12 md:p-16 flex flex-col justify-start h-full">
              <h4 className="text-[#1E1E1E] mb-6 font-semibold text-2xl">
                Lorem ipsum dolor slef amet
              </h4>
              <p className="p2 text-[#5C5C5C] mb-10 text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="text-[#1E1E1E] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all mt-auto"
              >
                Learn more about lorem ipsum &gt;
              </a>
            </div>
          </div>

          {/* Bottom Card 2 */}
          <div className="relative rounded-3xl min-h-[420px] overflow-hidden border border-gray-200 bg-[#F5F5F5] shadow-[0_18px_40px_rgba(2,6,23,0.06)]">
            <div className="p-12 md:p-16 flex flex-col justify-start h-full">
              <h4 className="text-[#1E1E1E] mb-6 font-semibold text-2xl">
                Lorem ipsum dolor slef amet
              </h4>
              <p className="p2 text-[#5C5C5C] mb-10 text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="text-[#1E1E1E] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all mt-auto"
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