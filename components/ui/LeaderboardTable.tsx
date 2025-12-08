import React from "react";

export interface TableRow {
  rank: number;
  name: string;
  institution: string;
  hIndex: string | number;
  articlesPublished: number;
}

interface LeaderboardTableProps {
  rows?: TableRow[];
  rowCount?: number;
  title?: string;
  category?: "Universities" | "Doctors" | "Scholars";
}

export default function LeaderboardTable({
  rows,
  rowCount = 10,
  title = "Researched H-Index Portal",
  category = "Scholars",
}: LeaderboardTableProps) {
  // Default mock data if not provided
  const defaultRows: TableRow[] =
    rows ||
    [...Array(rowCount)].map((_, i) => ({
      rank: i + 1,
      name:
        category === "Universities"
          ? "MIT ADT University, Pune"
          : "Pradhyumn Jagadeeshwar Dhondi",
      institution:
        category === "Universities"
          ? "Pune, India"
          : "MIT ADT University, Pune",
      hIndex: category === "Universities" ? "120" : "6.3",
      articlesPublished: 129 + i * 5,
    }));

  return (
    <div className="bg-white border border-[#E7E4E3] rounded-xl overflow-hidden shadow-[0px_1px_3px_rgba(0,0,0,0.1)] w-full max-w-[1200px]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-4 border-b border-[#E0E0E1] gap-4">
        <div className="flex items-center gap-2">
          <div className="text-[#FF7A00]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
          <h4 className="h4-compact font-semibold text-[#1E1E1E]">{title}</h4>
        </div>
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Search For Educational Institutions, Researchers"
            className="w-full md:w-[320px] pl-10 pr-4 py-2 border border-[#E0E0E1] rounded-lg text-sm focus:outline-none focus:border-[#FF7A00]"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-[#FAFAFA] h-[52px]">
              <th className="w-14 border-b border-[#E0E0E1] px-3 py-3 text-center text-[#5C5C5C] font-medium text-sm">
                #
              </th>
              <th className="text-left border-b border-[#E0E0E1] px-4 py-3 text-[#5C5C5C] font-medium text-sm">
                {category === "Universities" ? "University Name" : "Full Name"}
              </th>
              <th className="text-left border-b border-[#E0E0E1] px-4 py-3 text-[#5C5C5C] font-medium text-sm">
                {category === "Universities" ? "Location" : "Institution"}
              </th>
              <th className="text-left border-b border-[#E0E0E1] px-4 py-3 text-[#5C5C5C] font-medium text-sm">
                H-Index Score
              </th>
              <th className="text-left border-b border-[#E0E0E1] px-4 py-3 text-[#5C5C5C] font-medium text-sm">
                Total Articles Published
              </th>
              <th className="w-10 border-b border-[#E0E0E1]"></th>
            </tr>
          </thead>

          <tbody>
            {defaultRows.map((row, i) => (
              <tr
                key={i}
                className="h-24 border-b border-[#E0E0E1] last:border-0"
              >
                <td className="px-3 py-3 text-center">
                  <span className="font-medium text-sm text-[#1E1E1E] bg-[#F5F5F5] w-8 h-8 flex items-center justify-center rounded-full mx-auto">
                    {String(row.rank).padStart(2, "0")}
                  </span>
                </td>

                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0">
                      <img
                        src={`https://i.pravatar.cc/150?u=${row.name}`}
                        alt={row.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-medium text-sm text-[#1E1E1E]">
                      {row.name}
                    </span>
                  </div>
                </td>

                <td className="px-4 py-3">
                  <span className="text-sm text-[#5C5C5C]">
                    {row.institution}
                  </span>
                </td>

                <td className="px-4 py-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFF5EB] text-[#FF7A00] text-xs font-semibold border border-[#FFD6B3]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] mr-2"></span>
                    {row.hIndex} H-Index Score
                  </span>
                </td>

                <td className="px-4 py-3">
                  <span className="text-sm text-[#1E1E1E]">
                    {row.articlesPublished}
                  </span>
                </td>

                <td className="px-4 py-3 text-center">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-[#E0E0E1]">
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded border border-[#E0E0E1] text-gray-500 hover:bg-gray-50">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-[#1E1E1E] text-white text-sm font-medium">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-[#E0E0E1] text-gray-500 hover:bg-gray-50 text-sm">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-[#E0E0E1] text-gray-500 hover:bg-gray-50 text-sm">
            3
          </button>
          <span className="text-gray-400">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-[#E0E0E1] text-gray-500 hover:bg-gray-50 text-sm">
            100
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-[#E0E0E1] text-gray-500 hover:bg-gray-50">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        <span className="text-sm text-gray-500">
          Showing 1 to {rowCount} of 1800 entries
        </span>
      </div>
    </div>
  );
}
