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

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-400/40 hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>

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
