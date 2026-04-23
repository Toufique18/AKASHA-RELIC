"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "METAVERSE", href: "#" },
    { name: "VR/AR", href: "#" },
    { name: "COMMUNITY", href: "#" },
    { name: "EDUCATION", href: "#" },
    { name: "RELIC TECH", href: "#" },
  ];

  return (
    <>
      <nav className="w-full border-none bg-blue-950 backdrop-blur-xl top-0 z-50 sticky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="bg-gradient-to-t from-[#FFFFFF] to-[#7C3AED] bg-clip-text text-transparent text-xl sm:text-2xl font-bold tracking-wider hover:opacity-80 transition-opacity"
          >
            AKASHA RELIC
          </Link>

          {/* Desktop Navigation Links - Hidden on mobile/tablet */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xs lg:text-sm font-medium tracking-widest text-white/90 hover:text-[#B594FF] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Action Button - Hidden on mobile/tablet */}
          <button className="hidden lg:block px-6 py-2.5 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-[#7C4DFF] text-white text-xs lg:text-sm font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(142,93,255,0.3)] hover:scale-105 active:scale-95">
            CONNECT AVATAR
          </button>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile Action Button - Smaller version */}
            <button className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-[#7C4DFF] text-white text-[10px] sm:text-xs font-bold tracking-wider transition-all shadow-[0_0_15px_rgba(142,93,255,0.3)] hover:scale-105 active:scale-95">
              CONNECT
            </button>

            {/* Hamburger Icon */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-blue-950/95 backdrop-blur-xl z-40 transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen space-y-6 p-4">
          {/* Mobile Navigation Links */}
          <ul className="flex flex-col items-center gap-6 w-full max-w-xs">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className="w-full text-center transform transition-all duration-300"
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg sm:text-xl font-medium tracking-widest text-white/90 hover:text-[#B594FF] transition-colors py-2 hover:scale-110 transform"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Action Button Full */}
          <button
            className="mt-8 px-8 py-3 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-[#7C4DFF] text-white text-sm sm:text-base font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(142,93,255,0.3)] hover:scale-105 active:scale-95"
            onClick={() => setIsMenuOpen(false)}
          >
            CONNECT AVATAR
          </button>

          {/* Close hint */}
          <p className="absolute bottom-8 text-white/40 text-xs tracking-wider">
            Tap outside or click menu to close
          </p>
        </div>
      </div>
    </>
  );
}