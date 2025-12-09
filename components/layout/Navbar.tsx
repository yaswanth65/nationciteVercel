"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-900 font-bold text-xl hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl text-[#F76A23]">✱</span>
            <span>NATIONCITE</span>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
            <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
            <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
          </button>

          {/* NAV LINKS */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex absolute md:relative top-full left-0 right-0 md:top-auto 
            bg-white md:bg-transparent flex-col md:flex-row items-center gap-8 
            p-6 md:p-0 shadow-lg md:shadow-none border-t md:border-0 justify-end`}
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <Link
                href="/"
                className="text-neutral-900 font-medium text-lg tracking-normal"
              >
                Home
              </Link>

              <Link
                href="/leaderboard"
                className="text-neutral-900 font-medium text-lg tracking-normal"
              >
                Leaderboards
              </Link>

              <Link
                href="/methodology"
                className="text-neutral-900 font-medium text-lg tracking-normal"
              >
                Methodology
              </Link>

              <Link
                href="/pricing"
                className="text-neutral-900 font-medium text-lg tracking-normal"
              >
                Pricing Plans
              </Link>

              <Link
                href="/blog"
                className="text-neutral-900 font-medium text-lg tracking-normal"
              >
                Blogs
              </Link>
              <Link
                href="/about"
                className="text-neutral-900 font-medium text-lg tracking-normal"
              >
                About
              </Link>
            </div>

            {/* CTA BUTTON */}
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#ffffff] text-black rounded-full border border-black 
              hover:shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
