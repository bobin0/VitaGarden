"use client";
import { useState, useEffect } from "react";
import { Leaf, Phone, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Služby",  href: "#services" },
  { label: "O nás",   href: "#why" },
  { label: "Galéria", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), open ? 300 : 0);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3.5 bg-[rgba(6,13,8,.92)] backdrop-blur-xl border-b border-[rgba(74,158,112,.1)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10 flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top:0, behavior:"smooth" }); }}
            className="flex items-center gap-2.5 cursor-none">
            <div className="w-9 h-9 bg-gradient-to-br from-[#2d5a3d] to-[#4a9e70] rounded-[11px] flex items-center justify-center">
              <Leaf className="w-[17px] h-[17px] text-[#f0ede6]" />
            </div>
            <span className="font-display font-extrabold text-[#f0ede6] text-[18px]">
              Vita<span className="text-[#4a9e70]">Garden</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}
                onClick={(e) => { e.preventDefault(); go(l.href); }}
                className="text-[rgba(240,237,230,.45)] hover:text-[#86c99a] text-[13px] font-medium tracking-[.02em] transition-colors cursor-none relative group">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#4a9e70] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a href="tel:+421900000000" data-hover
              className="flex items-center gap-2 bg-[#4a9e70] hover:bg-[#86c99a] text-[#060d08] font-display font-bold text-[13px] px-5 py-2.5 rounded-[11px] transition-all cursor-none">
              <Phone className="w-3.5 h-3.5" />
              Zavolať teraz
            </a>
          </nav>

          <button onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#f0ede6] cursor-none">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[rgba(6,13,8,.97)] backdrop-blur-xl flex flex-col pt-24 px-6 pb-8">
          <nav className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}
                onClick={(e) => { e.preventDefault(); go(l.href); }}
                className="font-display font-bold text-[28px] text-[#f0ede6] py-4 border-b border-[rgba(240,237,230,.06)] hover:text-[#4a9e70] transition-colors cursor-none">
                {l.label}
              </a>
            ))}
            <a href="tel:+421900000000"
              className="mt-6 flex items-center justify-center gap-2 bg-[#4a9e70] text-[#060d08] font-display font-extrabold text-[18px] py-5 rounded-[16px] cursor-none">
              <Phone className="w-5 h-5" />
              Zavolať teraz
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
