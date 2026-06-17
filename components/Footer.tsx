"use client";
import { Leaf, Phone, Mail } from "lucide-react";

const LINKS = [
  { label: "Služby",   href: "#services" },
  { label: "O nás",    href: "#why" },
  { label: "Galéria",  href: "#gallery" },
  { label: "Kontakt",  href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 bg-[#040a06] border-t border-[rgba(240,237,230,.04)] py-10">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6 pb-8 mb-8 border-b border-[rgba(240,237,230,.05)]">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gradient-to-br from-[#2d5a3d] to-[#4a9e70] rounded-[9px] flex items-center justify-center">
              <Leaf className="w-4 h-4 text-[#f0ede6]" />
            </div>
            <span className="font-display font-extrabold text-[#f0ede6] text-[17px]">
              Vita<span className="text-[#4a9e70]">Garden</span>
            </span>
          </div>

          {/* Nav */}
          <nav className="flex gap-6 flex-wrap">
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-[rgba(240,237,230,.35)] hover:text-[#4a9e70] text-[13px] transition-colors cursor-none"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Contacts */}
          <div className="flex items-center gap-5">
            <a href="tel:+421900000000" className="flex items-center gap-1.5 text-[rgba(240,237,230,.3)] hover:text-[#4a9e70] text-[13px] transition-colors cursor-none">
              <Phone className="w-3.5 h-3.5" /> +421 900 000 000
            </a>
            <a href="mailto:info@vitagarden.sk" className="flex items-center gap-1.5 text-[rgba(240,237,230,.3)] hover:text-[#4a9e70] text-[13px] transition-colors cursor-none">
              <Mail className="w-3.5 h-3.5" /> info@vitagarden.sk
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[rgba(240,237,230,.2)] text-[12px]">
            © {year} VitaGarden. Všetky práva vyhradené.
          </p>
          <div className="flex gap-5">
            <button className="text-[rgba(240,237,230,.2)] hover:text-[rgba(240,237,230,.4)] text-[12px] transition-colors cursor-none">Ochrana údajov</button>
            <button className="text-[rgba(240,237,230,.2)] hover:text-[rgba(240,237,230,.4)] text-[12px] transition-colors cursor-none">Podmienky</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
