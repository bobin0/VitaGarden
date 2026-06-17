"use client";

import { Leaf, Phone, Mail, Facebook, Instagram } from "lucide-react";

const LINKS = [
  { label: "Kosenie trávnikov",     href: "#sluzby" },
  { label: "Strihanie plotov",      href: "#sluzby" },
  { label: "Údržba záhrad",         href: "#sluzby" },
  { label: "Výsadba rastlín",       href: "#sluzby" },
  { label: "Jarné/jesenné práce",   href: "#sluzby" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-forest-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-forest-700 rounded-xl flex items-center justify-center">
                <Leaf className="w-[18px] h-[18px] text-cream-100" />
              </div>
              <span className="font-display font-bold text-cream-100 text-lg">
                Vita<span className="text-leaf-400">Garden</span>
              </span>
            </div>
            <p className="font-body text-cream-500 text-sm leading-relaxed max-w-xs mb-6">
              Profesionálna záhradnícka firma pre rodinné domy, firmy a správcov
              nehnuteľností na celom Slovensku.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+421900000000" className="flex items-center gap-2.5 text-cream-400 hover:text-leaf-400 text-sm font-body transition-colors cursor-pointer">
                <Phone className="w-3.5 h-3.5 text-leaf-500 flex-shrink-0" />
                +421 900 000 000
              </a>
              <a href="mailto:info@vitagarden.sk" className="flex items-center gap-2.5 text-cream-400 hover:text-leaf-400 text-sm font-body transition-colors cursor-pointer">
                <Mail className="w-3.5 h-3.5 text-leaf-500 flex-shrink-0" />
                info@vitagarden.sk
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-cream-200 text-sm mb-4 tracking-wide">
              Služby
            </h4>
            <ul className="space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-body text-cream-500 hover:text-leaf-400 text-sm transition-colors cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h4 className="font-display font-bold text-cream-200 text-sm mb-4 tracking-wide">
              Sledujte nás
            </h4>
            <div className="flex gap-2 mb-7">
              {[
                { icon: Facebook,  label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-leaf-500/20 hover:border-leaf-500/40 transition-all cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-cream-400" />
                </a>
              ))}
            </div>

            <div className="bg-leaf-500/10 border border-leaf-500/20 rounded-2xl p-4">
              <div className="font-display font-bold text-cream-100 text-sm mb-1">
                Bezplatná konzultácia
              </div>
              <div className="font-body text-cream-500 text-xs mb-3">
                Zavolajte alebo napíšte
              </div>
              <a
                href="#kontakt"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block w-full text-center bg-leaf-500 hover:bg-leaf-400 text-white font-semibold font-body text-xs py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Kontaktovať →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-cream-600 text-xs">
            © {year} VitaGarden. Všetky práva vyhradené.
          </p>
          <div className="flex gap-5">
            <button className="font-body text-cream-600 hover:text-cream-400 text-xs transition-colors cursor-pointer">
              Ochrana osobných údajov
            </button>
            <button className="font-body text-cream-600 hover:text-cream-400 text-xs transition-colors cursor-pointer">
              Podmienky použitia
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
