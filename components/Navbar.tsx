"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, Phone } from "lucide-react";

const links = [
  { label: "Služby",    href: "#sluzby" },
  { label: "O nás",     href: "#preco-my" },
  { label: "Galéria",   href: "#galeria" },
  { label: "Kontakt",   href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(
      () => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }),
      open ? 300 : 0
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream-100/95 backdrop-blur-md shadow-sm border-b border-forest-100 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 bg-forest-700 rounded-xl flex items-center justify-center group-hover:bg-forest-600 transition-colors">
              <Leaf className="w-4.5 h-4.5 text-cream-100 w-[18px] h-[18px]" />
            </div>
            <div className="font-display font-bold text-forest-800 text-lg leading-none">
              Vita<span className="text-leaf-500">Garden</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); go(l.href); }}
                className="font-body text-sm font-medium text-forest-700 hover:text-leaf-500 transition-colors cursor-pointer relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-leaf-500 rounded group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="tel:+421900000000"
              className="flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-cream-100 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors cursor-pointer font-body"
            >
              <Phone className="w-3.5 h-3.5" />
              Zavolať teraz
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-forest-100 transition-colors cursor-pointer text-forest-800"
            aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-0 z-40 bg-cream-100 border-b border-forest-100 shadow-lg pt-20 pb-8 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); go(l.href); }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-forest-800 font-display font-semibold text-xl py-3 border-b border-forest-100 hover:text-leaf-500 transition-colors cursor-pointer"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:+421900000000"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-5 flex items-center justify-center gap-2 bg-forest-700 text-cream-100 font-semibold text-base py-4 rounded-2xl cursor-pointer font-body"
              >
                <Phone className="w-4 h-4" />
                Zavolať teraz
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
