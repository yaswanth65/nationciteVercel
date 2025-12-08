import React from "react";

export default function FAQSection() {
  return (
    <section className="w-full py-20 bg-white px-4 md:px-[108px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <span className="text-[#FF7A00] font-medium mb-3 block">
            Lorem ipsum
          </span>
          <h2 className="text-[#1E1E1E] leading-tight mb-6">
            Lorem ipsum dolor self amet consectetyr alit
          </h2>
          <p className="text-large text-[#5C5C5C] max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="border border-[#E0E0E1] rounded-lg overflow-hidden"
            >
              <button className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors">
                <span className="font-medium text-[#1E1E1E] text-sm">
                  Lorem ipsum dolor self amet, consectetur
                </span>
                <span className="text-gray-400 text-xl font-light">
                  {i === 0 ? "−" : "+"}
                </span>
              </button>
              {i === 0 && (
                <div className="p-4 pt-0 bg-[#F5F5F5] text-sm text-[#5C5C5C] leading-relaxed border-t border-[#E0E0E1]">
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <br />
                  <br />
                  <a
                    href="#"
                    className="text-[#FF7A00] underline decoration-[#FF7A00]"
                  >
                    Learn More
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
