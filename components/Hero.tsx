"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ArrowRight, Star, CheckCircle } from "lucide-react";

const TRUST = [
  "Bez záväzkov",
  "Bezplatná konzultácia",
  "Odpoveď do 2 hodín",
];

export default function Hero() {
  const goContact = () =>
    document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-forest-950">
      {/* BG image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85"
          alt="Krásna záhrada"
          fill
          priority
          className="object-cover object-center opacity-35"
          sizes="100vw"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/95 via-forest-900/80 to-forest-800/50" />
        {/* subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/12 rounded-full px-4 py-2 mb-8"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-earth-400 fill-earth-400" />
              ))}
            </div>
            <span className="text-cream-200 text-xs font-medium font-body">
              Hodnotenie 5.0 · 200+ spokojných zákazníkov
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-cream-50 text-5xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-tight mb-6"
          >
            Záhrada,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-leaf-300 to-leaf-500">
              ktorá dýcha
            </span>
            <br />
            každou sezónou
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="font-body text-lg text-cream-300 leading-relaxed mb-10 max-w-lg"
          >
            Profesionálna starostlivosť o záhrady pre rodinné domy, firmy a
            správcov nehnuteľností. Kosenie, ploty, výsadba — všetko pod jednou
            strechou.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <a
              href="tel:+421900000000"
              className="group inline-flex items-center justify-center gap-2.5 bg-leaf-500 hover:bg-leaf-400 text-white font-semibold font-body text-base px-7 py-4 rounded-2xl transition-all duration-200 cursor-pointer shadow-lg shadow-leaf-500/25 hover:shadow-leaf-400/30 hover:shadow-xl"
            >
              <Phone className="w-4.5 h-4.5 w-[18px] h-[18px]" />
              Zavolať teraz
            </a>
            <button
              onClick={goContact}
              className="group inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-cream-100 hover:text-white font-semibold font-body text-base px-7 py-4 rounded-2xl transition-all duration-200 cursor-pointer hover:bg-white/5"
            >
              Nezáväzná cenová ponuka
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            {TRUST.map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-cream-400 text-sm font-body">
                <CheckCircle className="w-3.5 h-3.5 text-leaf-400 flex-shrink-0" />
                {t}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating stats card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4"
        >
          {[
            { val: "200+", label: "Zákazníkov" },
            { val: "8+",   label: "Rokov praxe" },
            { val: "98%",  label: "Spokojnosť" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/8 backdrop-blur-md border border-white/12 rounded-2xl px-6 py-4 text-center min-w-[120px]"
            >
              <div className="font-display font-bold text-cream-50 text-3xl">{s.val}</div>
              <div className="text-cream-400 text-xs font-body mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-cream-100 to-transparent" />
    </section>
  );
}
