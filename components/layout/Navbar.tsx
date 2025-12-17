"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-sm transition-all duration-300 ${
        isScrolled
          ? "bg-white border-b border-gray-200"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full py-2 md:py-4 flex items-center justify-between px-4 md:px-0">
        {/* Left Logo Section - 120px padding on desktop */}
        <div className="md:pl-[120px]">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-900 font-bold hover:opacity-80 transition-opacity"
          >
            {/* Mobile Logo */}
            <div className="md:hidden h-14 w-14 flex items-center justify-center">
              <Image
                src="/logos/mobilelogo.png"
                alt="NationCite Mobile Logo"
                width={56}
                height={56}
                priority
              />
            </div>

            {/* Desktop Logo */}
            <div className="hidden md:block h-12 w-48">
              <Image
                src="/logos/pcLogo.png"
                alt="NationCite Logo"
                height={48}
                width={192}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
          <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
          <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
        </button>

        {/* Right Nav Section - 120px padding on desktop */}
        <div className="hidden md:flex md:pr-[120px] items-center gap-8">
          <Link
            href="/about"
            className="text-neutral-900 font-medium text-base tracking-normal"
          >
            About
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-1 text-neutral-900 font-medium text-base tracking-normal hover:text-[#FF7A00] transition-colors py-4">
              Leaderboard
              <ChevronDown
                size={16}
                className="group-hover:rotate-180 transition-transform duration-200"
              />
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                <Link
                  href="/leaderboard/scholars"
                  className="block px-4 py-2 text-slate-700 hover:bg-orange-50 hover:text-[#FF7A00] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Scholars
                </Link>
                <Link
                  href="/leaderboard/universities"
                  className="block px-4 py-2 text-slate-700 hover:bg-orange-50 hover:text-[#FF7A00] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Universities
                </Link>
                <Link
                  href="/leaderboard/doctors"
                  className="block px-4 py-2 text-slate-700 hover:bg-orange-50 hover:text-[#FF7A00] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Doctors
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/methodology"
            className="text-neutral-900 font-medium text-base tracking-normal"
          >
            Methodology
          </Link>

          <Link
            href="/pricing"
            className="text-neutral-900 font-medium text-base tracking-normal"
          >
            Pricing Plan
          </Link>

          <Link
            href="/blog"
            className="text-neutral-900 font-medium text-base tracking-normal"
          >
            Blogs
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-1 text-neutral-900 font-medium text-base tracking-normal hover:text-[#FF7A00] transition-colors py-4">
              Signup/in
              <ChevronDown
                size={16}
                className="group-hover:rotate-180 transition-transform duration-200"
              />
            </button>

            <div className="absolute top-full right-0 pt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2">
                <Link
                  href="/signin"
                  className="block px-4 py-2 text-slate-700 hover:bg-orange-50 hover:text-[#FF7A00] transition-colors text-sm font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-2 text-slate-700 hover:bg-orange-50 hover:text-[#FF7A00] transition-colors text-sm font-medium"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white flex flex-col items-center gap-5 p-6 shadow-lg border-t border-gray-200">
          <Link
            href="/about"
            className="text-neutral-900 font-medium text-base tracking-normal"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>

          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => setIsLeaderboardOpen(!isLeaderboardOpen)}
              className="flex items-center gap-2 text-neutral-900 font-medium text-base tracking-normal"
            >
              Leaderboard
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isLeaderboardOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLeaderboardOpen && (
              <div className="flex flex-col items-center gap-3 mt-3 bg-slate-50 w-full py-3 rounded-xl">
                <Link
                  href="/leaderboard/scholars"
                  className="text-slate-600 font-medium text-sm"
                  style={{ fontFamily: "var(--font-inter)" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Scholars
                </Link>
                <Link
                  href="/leaderboard/universities"
                  className="text-slate-600 font-medium text-sm"
                  style={{ fontFamily: "var(--font-inter)" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Universities
                </Link>
                <Link
                  href="/leaderboard/doctors"
                  className="text-slate-600 font-medium text-sm"
                  style={{ fontFamily: "var(--font-inter)" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Doctors
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/methodology"
            className="text-neutral-900 font-medium text-base tracking-normal"
            onClick={() => setIsMenuOpen(false)}
          >
            Methodology
          </Link>

          <Link
            href="/pricing"
            className="text-neutral-900 font-medium text-base tracking-normal"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing Plan
          </Link>

          <Link
            href="/blog"
            className="text-neutral-900 font-medium text-base tracking-normal"
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </Link>

          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => setIsAuthOpen(!isAuthOpen)}
              className="flex items-center gap-2 text-neutral-900 font-medium text-base tracking-normal"
            >
              Account
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isAuthOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isAuthOpen && (
              <div className="flex flex-col items-center gap-3 mt-3 bg-slate-50 w-full py-3 rounded-xl">
                <Link
                  href="/signin"
                  className="text-slate-600 font-medium text-sm"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsAuthOpen(false);
                  }}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="text-slate-600 font-medium text-sm"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsAuthOpen(false);
                  }}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
