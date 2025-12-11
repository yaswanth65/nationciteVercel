import React from "react";

export default function Thebigcard() {
  return (
    <section className="w-full py-16 bg-white px-[76px]">
      {/* Main Container Card - Cream Background */}
      <div className="w-full bg-[#FFF9F5] rounded-[32px] p-16">
        {/* Top Text Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
          {/* Left Column: Headings */}
          <div>
            <span className="text-[#FF7A00] font-medium mb-6 block text-sm tracking-wide uppercase">
              Lorem ipsum
            </span>
            <h3 className="text-[#1E1E1E] text-5xl font-semibold leading-tight">
              Lorem ipsum
              <br />
              dolor self amet
            </h3>
          </div>

          {/* Right Column: Paragraphs */}
          <div className="space-y-6 text-[#5C5C5C]">
            <p className="text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis.
            </p>
            <br />
            <p className="text-base leading-relaxed">
              Tempus leo eu aenean sed diam urna tempor, Pulvinar vivamus
              fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
              malesuada lacinia integer nunc posuere.
            </p>
            <br />
            <p className="text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis.
            </p>
          </div>
        </div>

        {/* Bottom Image/Placeholder Section */}
        <div className="w-full h-[500px] relative rounded-2xl  overflow-hidden bg-gray-100 border border-gray-300">
          {/* Checkerboard Pattern */}
      <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `linear-gradient(45deg, #E5E5E5 25%, transparent 25%), linear-gradient(-45deg, #E5E5E5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #E5E5E5 75%), linear-gradient(-45deg, transparent 75%, #E5E5E5 75%)`,
                backgroundSize: `40px 40px`,
                backgroundPosition: `0 0, 0 20px, 20px -20px, -20px 0`,
                opacity: 0.8,
              }}
            ></div>
        </div>
      </div>
    </section>
  );
}
