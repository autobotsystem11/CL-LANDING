"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#why-us" },
  { label: "Services", href: "#features" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1c1c2e]/95 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center">
            <span className="text-white font-black text-sm" style={{ fontFamily: "var(--font-barlow)" }}>
              CL
            </span>
          </div>
          <span
            className="text-white font-bold text-lg tracking-wide hidden sm:block"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            CL SDN BHD
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-slate-300 hover:text-white text-sm font-medium tracking-widest uppercase transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — Free Tool Button */}
        <div className="hidden md:flex items-center gap-3 relative">
          {/* HOT badge */}
          <span
            className="absolute -top-2 -right-2 z-10 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full"
            style={{ background: "#ef4444", letterSpacing: "0.05em", lineHeight: 1 }}
          >
            FREE
          </span>
          <a
            href="https://ad-dashboard-orcin.vercel.app/calculator.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-black text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f97316 0%, #ec4899 50%, #a855f7 100%)",
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease infinite, popPulse 2s ease-in-out infinite",
              boxShadow: "0 0 24px rgba(249,115,22,0.6), 0 0 48px rgba(168,85,247,0.3)",
              letterSpacing: "0.02em",
            }}
          >
            🚀 免费预测广告效果
          </a>
        </div>
        <style>{`
          @keyframes gradientShift {
            0%   { background-position: 0% 50%; }
            50%  { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes popPulse {
            0%, 100% { box-shadow: 0 0 20px rgba(249,115,22,0.55), 0 0 40px rgba(168,85,247,0.25); transform: scale(1); }
            50%       { box-shadow: 0 0 36px rgba(249,115,22,0.9), 0 0 70px rgba(168,85,247,0.5); transform: scale(1.04); }
          }
        `}</style>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1c1c2e] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white text-sm font-medium tracking-widest uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-orange-500 text-white font-bold text-sm px-5 py-2.5 rounded-full text-center mt-2"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
