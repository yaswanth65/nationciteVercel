import React from "react";

export default function PricingSection() {
  return (
    <section className="w-full py-20 bg-white px-4 md:px-[108px]">
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        <h2 className="text-[#1E1E1E] leading-tight mb-6">
          Free Access for Discovery.
          <br />
          Premium Tools for Power Users.
        </h2>
        <div className="flex justify-center mt-8">
          <div className="bg-[#F5F5F5] p-1 rounded-full inline-flex">
            <button className="px-6 py-2 rounded-full bg-white shadow-sm text-[#1E1E1E] font-medium text-sm">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-full text-[#5C5C5C] font-medium text-sm hover:bg-gray-200 transition-colors">
              Annual
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {[
          {
            price: "₹999",
            btnText: "Get Verified",
            btnStyle: "border border-[#FF7A00] text-[#FF7A00] bg-white",
            highlight: false,
          },
          {
            price: "₹999",
            btnText: "Request Access",
            btnStyle: "bg-[#FF7A00] text-white",
            highlight: true,
          },
          {
            price: "₹999",
            btnText: "Contact Sales",
            btnStyle: "border border-[#E0E0E1] text-[#1E1E1E] bg-white",
            highlight: false,
          },
        ].map((plan, i) => (
          <div
            key={i}
            className={`p-8 rounded-2xl border ${
              plan.highlight
                ? "border-[#FF7A00] bg-[#FFF5EB]"
                : "border-[#E0E0E1] bg-white"
            } flex flex-col gap-6 min-h-[550px]`}
          >
            <div>
              <h4 className="font-medium text-[#1E1E1E] mb-8 leading-relaxed">
                Verified Professional
              </h4>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-bold text-[#1E1E1E]">
                  {plan.price}
                </span>
                <span className="text-sm text-[#5C5C5C]">/ year</span>
              </div>
              <p className="text-small text-[#5C5C5C] mt-2">
                Build credibility. Track your research impact.
              </p>
            </div>

            <button
              className={`w-full py-3 rounded-lg font-medium text-sm transition-colors ${plan.btnStyle}`}
            >
              {plan.btnText}
            </button>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-[#1E1E1E]">
                What's Included
              </span>
              {[
                "Citation & rank trend tracking",
                "Downloadable profile report",
                "Verified profile badge",
                "Priority & personalized support",
                "Monthly auto-refresh",
                "Premium Profile Coach access",
              ].map((feature, j) => (
                <div key={j} className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF7A00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-small text-[#5C5C5C]">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-gray-200/50">
              <p className="text-xs font-semibold text-[#1E1E1E]">
                For individual researchers, faculty, authors
              </p>
              <p className="text-xs text-[#FF7A00] mt-1">
                Note: Best value for professionals
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
