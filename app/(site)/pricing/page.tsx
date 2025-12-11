"use client";

import React from "react";
import { Check } from "lucide-react";
import PricingSection from "@/components/site/PricingSection";
import FAQSection from "@/components/site/FAQSection";
import LeaderboardFinalCTA from "../leaderboard/components/LeaderboardFinalCTA";
import PricingMidCTA from "@/components/site/PricingMidCTA";

export default function PricingPage() {
  return (
    <div className="bg-white font-sans">
      {/* Hero / Pricing Section */}
      <PricingSection />

      {/* Comparison Tables Section */}
      <section className="w-full pb-20 px-[76px]">
        <div className="w-full space-y-16">
          {/* Table 1: Overview & Pricing */}
          <div>
            <h4 className="text-[#FF7A00] font-bold mb-6 text-lg">
              Overview & Pricing
            </h4>
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-50 p-4 border-b border-gray-200 font-medium text-sm text-gray-500">
                <div>Plan</div>
                <div>Price</div>
                <div>Audience</div>
                <div>Ideal For</div>
              </div>
              <div className="divide-y divide-gray-200">
                {[
                  [
                    "Verified Professional",
                    "₹999/year",
                    "Individual researchers",
                    "Professionals seeking advanced visibility",
                  ],
                  [
                    "Institution Professional",
                    "₹75,000/year",
                    "Universities & research centers",
                    "Medium to large institutions",
                  ],
                  [
                    "Institutional Enterprise",
                    "₹1,50,000+/year (custom)",
                    "Large institutions, govt bodies",
                    "Medium to large institutions",
                  ],
                ].map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-4 p-4 text-sm text-[#1E1E1E]"
                  >
                    <div className="font-medium">{row[0]}</div>
                    <div>{row[1]}</div>
                    <div>{row[2]}</div>
                    <div>{row[3]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Table 2: Researcher Features */}
          <ComparisonTable
            title="Researcher Features"
            headers={[
              "Feature",
              "Verified Professional",
              "Institution Professional",
              "Institutional Enterprise",
            ]}
            rows={[
              ["Verified badge", true, true, true],
              ["Priority support", true, true, "(dedicated)"],
              ["Monthly auto-refresh", true, true, true],
              ["Downloadable profile report", true, true, "(white-labeled)"],
              ["Citation trend charts", true, true, true],
              ["Rank trend analytics", true, true, true],
              ["Premium Profile Coach", true, true, "(advanced)"],
              ["Personalized support", true, true, "(priority, 1:1)"],
            ]}
          />

          {/* Table 3: Institution Workspace & Capacity */}
          <ComparisonTable
            title="Institution Workspace & Capacity"
            headers={[
              "Feature",
              "Verified Professional",
              "Institution Professional",
              "Institutional Enterprise",
            ]}
            rows={[
              ["Number of profiles", "—", "Up to 250 profiles", "Unlimited"],
              ["Institution dashboard", "—", true, "(advanced/customizable)"],
              ["Shared & team library", "—", true, true],
              ["Bulk correction requests", "—", true, true],
              ["CSV/Excel export", "—", true, true],
              ["API access", "—", true, "(advanced/custom endpoints)"],
              ["Quarterly reports", "—", true, "(white-labeled & custom)"],
              ["Dedicated admin panel", "—", "—", true],
              ["Custom onboarding", "—", "—", true],
            ]}
          />

          {/* Table 4: Analytics & Insights */}
          <ComparisonTable
            title="Analytics & Insights"
            headers={[
              "Analytics Feature",
              "Verified Professional",
              "Institution Professional",
              "Institutional Enterprise",
            ]}
            rows={[
              ["Insights dashboard", true, true, true],
              ["Subject mix analytics", true, true, "(advanced/customizable)"],
              ["Institution research trends", "—", true, true],
              ["Advanced filtering", true, true, true],
              ["Duplicate detection", "—", true, "(enhanced)"],
              ["Custom analytics modules", "—", "—", "(custom-developed)"],
              [
                "Annual research impact reports",
                "—",
                "(standard)",
                "(custom white-labeled)",
              ],
            ]}
          />

          {/* Table 5: Support & Service */}
          <ComparisonTable
            title="Support & Service"
            headers={[
              "Service",
              "Verified Professional",
              "Institution Professional",
              "Institutional Enterprise",
            ]}
            rows={[
              ["General support", true, true, true],
              ["Priority SLA", true, true, true],
              ["Dedicated account manager", "—", "—", true],
              ["Custom integrations", "—", "—", true],
              ["Premium onboarding", "—", "—", true],
            ]}
          />

          {/* Table 6: Add-ons */}
          <div>
            <h4 className="text-[#FF7A00] font-bold mb-6 text-lg">
              Add-ons (Optional for all)
            </h4>
            <div className="border border-gray-200 rounded-2xl overflow-hidden max-w-2xl">
              <div className="grid grid-cols-2 bg-gray-50 p-4 border-b border-gray-200 font-medium text-sm text-gray-500">
                <div>Add-On</div>
                <div>Price</div>
              </div>
              <div className="divide-y divide-gray-200">
                {[
                  ["Custom reports", "₹4,999/report"],
                  ["Sponsored collections", "₹15,000/page"],
                  ["Recruitment posts", "₹5,000/post"],
                  ["Premium API access", "₹1,499/year"],
                  ["White-labeled analytics", "Enterprise only"],
                ].map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-2 p-4 text-sm text-[#1E1E1E]"
                  >
                    <div className="font-medium">{row[0]}</div>
                    <div className="font-bold">{row[1]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        kicker="Lorem ipsum"
        title="Lorem ipsum dolor self amet consectetyr alit"
        questions={[
          "Lorem ipsum dolor self amet, consectetur",
          "Lorem ipsum dolor self amet, consectetur",
          "Lorem ipsum dolor self amet, consectetur",
          "Lorem ipsum dolor self amet, consectetur",
          "Lorem ipsum dolor self amet, consectetur",
        ]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </FAQSection>

      <PricingMidCTA />


      {/* Bottom CTA */}
      <LeaderboardFinalCTA />
    </div>
  );
}

function ComparisonTable({
  title,
  headers,
  rows,
}: {
  title: string;
  headers: string[];
  rows: (string | boolean)[][];
}) {
  return (
    <div>
      <h4 className="text-[#FF7A00] font-bold mb-6 text-lg">{title}</h4>
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-4 bg-gray-50 p-4 border-b border-gray-200 font-medium text-sm text-gray-500">
          {headers.map((header, i) => (
            <div key={i}>{header}</div>
          ))}
        </div>

        <div className="divide-y divide-gray-200">
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-4 p-4 text-sm text-[#1E1E1E] items-center"
            >
              <div className="font-medium">{row[0]}</div>
              {row.slice(1).map((cell, j) => (
                <div key={j} className="flex items-center">
                  {cell === true ? (
                    <div className="w-5 h-5 rounded-full bg-[#FF7A00] flex items-center justify-center">
                      <Check
                        className="w-3.5 h-3.5 text-white"
                        strokeWidth={3}
                      />
                    </div>
                  ) : cell === "—" || cell === false ? (
                    <span className="text-gray-300 font-medium">—</span>
                  ) : (
                    <span className="text-[#1E1E1E]">{cell}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
