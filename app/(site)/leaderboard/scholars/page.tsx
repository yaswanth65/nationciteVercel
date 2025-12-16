"use client";

import React, { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import LeaderboardTable, {
  LeaderboardEntry,
} from "@/components/site/LeaderboardTable";
import ThreeCardsSection from "../components/ThreeCardsSection";
import ConsultancySection from "../components/ConsultancySection";
import ThreeBlocksSection from "../components/ThreeBlocksSection";
import FAQSection from "@/components/site/FAQSection";
import LeaderboardFinalCTA from "../components/LeaderboardFinalCTA";

const MOCK_DATA: LeaderboardEntry[] = [
  {
    id: 1,
    rank: "01",
    name: "John doe",
    institution: "SRM University, Chennai",
    hIndex: 83,
    articles: 129,
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    rank: "02",
    name: "Sarah Jenkins",
    institution: "Stanford University",
    hIndex: 92,
    articles: 145,
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    rank: "03",
    name: "Aarav Mehta",
    institution: "IIT Bombay",
    hIndex: 78,
    articles: 112,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    rank: "04",
    name: "Sanya Gupta",
    institution: "NIT Delhi",
    hIndex: 81,
    articles: 132,
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 5,
    rank: "05",
    name: "Rohan Sharma",
    institution: "BITS Pilani",
    hIndex: 75,
    articles: 150,
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 6,
    rank: "06",
    name: "Meera Suresh",
    institution: "IISc Bangalore",
    hIndex: 88,
    articles: 148,
    avatar: "https://i.pravatar.cc/150?img=24",
  },
  {
    id: 7,
    rank: "07",
    name: "Anika Reddy",
    institution: "VIT Vellore",
    hIndex: 79,
    articles: 135,
    avatar: "https://i.pravatar.cc/150?img=20",
  },
  {
    id: 8,
    rank: "08",
    name: "Karan Singh",
    institution: "SRM University",
    hIndex: 80,
    articles: 142,
    avatar: "https://i.pravatar.cc/150?img=53",
  },
  {
    id: 9,
    rank: "09",
    name: "Simran Kaur",
    institution: "LPU Jalandhar",
    hIndex: 76,
    articles: 138,
    avatar: "https://i.pravatar.cc/150?img=42",
  },
  {
    id: 10,
    rank: "10",
    name: "Nikhil Verma",
    institution: "Panjab University",
    hIndex: 77,
    articles: 136,
    avatar: "https://i.pravatar.cc/150?img=60",
  },
];

export default function ScholarsLeaderboardPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-[#FFF5EE] via-[#FFE4C8] to-[#FFD9B3] pt-12 pb-12 md:pt-20 md:pb-16 px-4 md:px-[72px] overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full opacity-20 -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-50 rounded-full opacity-30 -ml-36 -mb-36"></div>

        <div className="w-full max-2xl relative z-10">
          <div className="mb-8 mt-4 md:mb-12 md:mt-8">
            <h3 className="text-[#1E1E1E] mb-4 md:mb-6 pt-7 md:pt-0 text-2xl md:text-3xl">
              Top <span className="text-[#FF7A00]">Scholars</span> & Researchers
              <br />
              Shaping the Future
            </h3>
            <p className="p1 text-[#5C5C5C] line-clamp-3 w-full md:w-[40vw]">
              Discover the top scholars driving innovation and making an impact
              in their fields. Our comprehensive rankings highlight the leaders
              in academic research.
            </p>
          </div>

          {/* Leaderboard Container */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 w-full max-w-none flex flex-col border border-slate-100 overflow-hidden min-h-[700px]">
            {/* HEADER SECTION: Title and Search */}
            <div className="px-4 md:px-10 py-6 md:py-8 bg-white border-b border-slate-100 z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3
                    className="h3-bento text-slate-900 flex items-center gap-3"
                    style={{
                      fontFamily:
                        "'Helvetica Rounded', 'Helvetica', sans-serif",
                    }}
                  >
                    <div className="p-2 bg-orange-50 rounded-lg text-[#FF7A00]">
                      <Sparkles size={20} />
                    </div>
                    Scholars Leaderboard
                  </h3>
                </div>

                <div className="relative group w-full md:w-auto">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-slate-400 group-focus-within:text-[#FF7A00] transition-colors" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search scholars..."
                    className="pl-10 pr-4 py-3 w-full md:w-[320px] bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] transition-all shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <LeaderboardTable data={MOCK_DATA} type="Scholars" />
          </div>
        </div>
      </section>

      <ThreeCardsSection />

      <ConsultancySection />

      <ThreeBlocksSection />

      <FAQSection />

      <LeaderboardFinalCTA />
    </div>
  );
}
