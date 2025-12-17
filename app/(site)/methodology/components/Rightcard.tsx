import React from "react";

export default function RightCard() {
  return (
    <section className="w-full py-12 md:py-16 bg-white px-4 md:px-[120px]">
      <div className="w-full bg-[#FFF9F5] rounded-[32px] p-6 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 ">
          {/* Left Column: Text Content */}
          <div>
            <h3 className="text-[#1E1E1E] text-3xl md:text-4xl font-semibold leading-tight mb-2">
              Lorem ipsum dolor sit amet
            </h3>
            <span className="text-[#FF7A00] font-medium mb-4 md:mb-6 block text-sm tracking-wide uppercase">
              Lorem ipsum dolor sit amet
            </span>

            <div className="space-y-6 text-[#5C5C5C]">
              <p className="text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis.
              </p>
              <p className="text-base leading-relaxed">
                Tempus leo eu aenean sed diam urna tempor, Pulvinar vivamus
                fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
                malesuada lacinia integer nunc posuere.
              </p>
              <br className="hidden md:block" />
              <p className="text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis.
              </p>
            </div>
          </div>

          {/* Right Column: Image Placeholder */}
          <div className="w-full h-[250px] md:h-[450px] relative rounded-2xl overflow-hidden bg-gray-100">
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
      </div>
    </section>
  );
}
