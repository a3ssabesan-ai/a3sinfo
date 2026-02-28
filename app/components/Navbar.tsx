"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#ai-strategy", label: "AI Strategy" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/90 backdrop-blur-md border-b border-[rgba(79,195,247,0.15)] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="#home"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4fc3f7] to-[#7c4dff] rounded-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 border border-[rgba(79,195,247,0.4)] rounded-lg" />
              <span className="relative text-[#4fc3f7] font-black text-sm tracking-widest">
                A3S
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-sm leading-tight">A3S Consulting</div>
              <div className="text-[#8892b0] text-xs">& Business Services</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#8892b0] hover:text-[#4fc3f7] text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4fc3f7] transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2 bg-gradient-to-r from-[#4fc3f7] to-[#7c4dff] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#8892b0] hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-[rgba(79,195,247,0.15)]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[#8892b0] hover:text-[#4fc3f7] text-sm font-medium text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full px-5 py-2.5 bg-gradient-to-r from-[#4fc3f7] to-[#7c4dff] text-white text-sm font-semibold rounded-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
