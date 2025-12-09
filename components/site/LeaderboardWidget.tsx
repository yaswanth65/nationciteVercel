"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  Building2,
  Stethoscope,
  Search,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

// --- Mock Data ---
const MOCK_DATA = [
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

const LeaderboardWidget = () => {
  const [activeTab, setActiveTab] = useState("Scholars");
  const [searchTerm, setSearchTerm] = useState("");

  // Map tabs to icons
  const tabs = [
    { id: "Scholars", icon: GraduationCap, label: "Scholars" },
    { id: "Universities", icon: Building2, label: "Universities" },
    { id: "Doctors", icon: Stethoscope, label: "Doctors" },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 w-full max-w-[1200px] flex flex-col border border-slate-100 overflow-hidden min-h-[700px]">
      {/* HEADER SECTION: Title, Search, and Tabs on Top */}
      <div className="px-6 md:px-10 py-8 bg-white border-b border-slate-100 z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h3 className="h3-bento font-bold text-slate-900 flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg text-[#FF7A00]">
                <Sparkles size={20} />
              </div>
              Researched H-Index Portal
            </h3>
            <p className="text-sm text-slate-500 mt-2 ml-[52px]">
              Browsing top ranked{" "}
              <span className="font-medium text-slate-900 lowercase">
                {activeTab}
              </span>
            </p>
          </div>

          <div className="relative group w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400 group-focus-within:text-[#FF7A00] transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search researchers, institutions..."
              className="pl-10 pr-4 py-3 w-full md:w-[320px] bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Bottom Row: Tabs Selection */}
        <div className="flex flex-wrap items-center gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                  isActive
                    ? "bg-[#FF7A00] text-white border-[#FF7A00] shadow-lg shadow-orange-200 transform -translate-y-0.5"
                    : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* TABLE CONTENT */}
      <div className="flex-1 bg-slate-50/30 p-6 md:p-8 overflow-auto">
        <div className="w-full">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <div className="col-span-1">Rank</div>
            <div className="col-span-4 flex items-center gap-2">Name</div>
            <div className="col-span-3 flex items-center gap-2">
              Institution
            </div>
            <div className="col-span-2 text-center">H-Index</div>
            <div className="col-span-2 text-right">Articles</div>
          </div>

          {/* Table Body */}
          <div className="space-y-2">
            {MOCK_DATA.map((row, index) => (
              <div
                key={row.id}
                className="group grid grid-cols-12 gap-4 items-center px-6 py-3 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all duration-300"
              >
                {/* Rank */}
                <div className="col-span-1">
                  <span className="font-bold text-sm text-slate-400">
                    #{row.rank}
                  </span>
                </div>

                {/* Name */}
                <div className="col-span-4 flex items-center gap-3">
                  <div className="relative flex-shrink-0">
                    <img
                      src={row.avatar}
                      alt={row.name}
                      className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Top-3 badge removed to keep uniform rows */}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-medium text-slate-800 truncate group-hover:text-[#FF7A00] transition-colors">
                      {row.name}
                    </h4>
                  </div>
                </div>

                {/* Institution */}
                <div className="col-span-3 flex items-center gap-2 text-sm text-slate-600 font-medium truncate">
                  <div className="p-1 rounded-full bg-slate-100 text-slate-400 flex-shrink-0">
                    <Building2 size={12} />
                  </div>
                  <span className="truncate">{row.institution}</span>
                </div>

                {/* H-Index Badge */}
                <div className="col-span-2 flex justify-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50/50 border border-orange-100 group-hover:bg-[#FF7A00] group-hover:border-[#FF7A00] transition-all duration-300">
                    <span className="text-sm font-bold text-[#FF7A00] group-hover:text-white transition-colors">
                      {row.hIndex}
                    </span>
                    <span className="ml-1.5 text-[10px] font-semibold text-orange-300 group-hover:text-orange-100 uppercase tracking-wide">
                      Score
                    </span>
                  </div>
                </div>

                {/* Articles & Action */}
                <div className="col-span-2 flex items-center justify-between pl-4">
                  <div className="text-center w-full pr-8">
                    <span className="block text-sm font-bold text-slate-700">
                      {row.articles}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium uppercase">
                      Pubs
                    </span>
                  </div>
                  <button className="p-1.5 text-slate-300 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors opacity-0 group-hover:opacity-100">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER PAGINATION */}
      <div className="h-20 border-t border-slate-100 bg-white px-10 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors text-slate-500">
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center bg-slate-50 rounded-lg p-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white shadow-sm font-bold text-sm text-[#FF7A00]">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/50 font-medium text-sm text-slate-500 transition-colors">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/50 font-medium text-sm text-slate-500 transition-colors">
              3
            </button>
          </div>
          <span className="text-slate-300 px-1 font-medium">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 font-medium text-sm text-slate-500 transition-colors">
            100
          </button>

          <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors text-slate-500">
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="text-sm text-slate-400 font-medium">
          Showing <span className="text-slate-900 font-bold">1-10</span> of{" "}
          <span className="text-slate-900 font-bold">1,000</span>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardWidget;
