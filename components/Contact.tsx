"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { FadeIn, SectionLabel, SectionHeading } from "./ui";

const INFO = [
  { icon: Phone, label: "Telefón",     value: "+421 900 000 000", href: "tel:+421900000000" },
  { icon: Mail,  label: "E-mail",      value: "info@vitagarden.sk", href: "mailto:info@vitagarden.sk" },
  { icon: MapPin, label: "Oblasť pôsobenia", value: "Celé Slovensko", href: null },
  { icon: Clock, label: "Dostupnosť",  value: "Po–So: 7:00 – 18:00", href: null },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="kontakt" className="py-28 bg-cream-100 relative">
      {/* Top accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-leaf-400/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <SectionLabel>Kontakt</SectionLabel>
          <SectionHeading className="text-4xl lg:text-5xl mb-4">
            Získajte bezplatnú{" "}
            <span className="text-leaf-500">cenovú ponuku</span>
          </SectionHeading>
          <p className="font-body text-forest-600 text-lg max-w-xl mx-auto mt-4">
            Opíšte nám vašu záhradu a my vám do 2 hodín pošleme nezáväznú cenovú
            ponuku. Zadarmo, bez záväzkov.
          </p>
        </FadeIn>

        {/* Big phone CTA */}
        <FadeIn delay={0.1} className="flex justify-center mb-14">
          <a
            href="tel:+421900000000"
            className="group relative flex items-center gap-4 bg-forest-700 hover:bg-forest-600 text-cream-100 rounded-3xl px-8 py-5 shadow-2xl shadow-forest-900/25 hover:shadow-forest-900/35 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="w-12 h-12 bg-leaf-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-body text-cream-400 text-xs tracking-widest uppercase mb-0.5">
                Zavolajte nám priamo
              </div>
              <div className="font-display font-bold text-2xl tracking-tight">
                +421 900 000 000
              </div>
            </div>
            {/* Ping animation */}
            <span className="absolute right-5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-leaf-400">
              <span className="absolute inset-0 rounded-full bg-leaf-400 animate-ping opacity-60" />
            </span>
          </a>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <FadeIn direction="left" className="lg:col-span-2 space-y-3">
            <div className="bg-forest-950 rounded-3xl p-7">
              <h3 className="font-display font-bold text-cream-100 text-lg mb-5">
                Kontaktné informácie
              </h3>
              <div className="space-y-4">
                {INFO.map((item) => (
                  <div key={item.label} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 bg-leaf-500/15 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-leaf-400" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-cream-500 text-xs font-body mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-cream-100 font-semibold text-sm font-body hover:text-leaf-400 transition-colors cursor-pointer"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-cream-100 font-semibold text-sm font-body">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-6 border-t border-white/8">
                <div className="text-cream-400 text-xs font-body leading-relaxed">
                  Odpoveď na e-mail garantujeme do 24 hodín, telefonicky sme
                  dostupní počas pracovných dní.
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="right" delay={0.15} className="lg:col-span-3">
            <div className="bg-white border border-forest-100 rounded-3xl p-7 shadow-lg shadow-forest-900/4">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="w-16 h-16 bg-leaf-500/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-leaf-500" />
                  </div>
                  <h3 className="font-display font-bold text-forest-800 text-2xl mb-2">
                    Správa odoslaná!
                  </h3>
                  <p className="font-body text-forest-600 text-sm max-w-xs leading-relaxed">
                    Ďakujeme. Ozveme sa vám do 2 hodín s cenovou ponukou na mieru.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-leaf-600 text-sm font-body underline underline-offset-2 cursor-pointer hover:text-leaf-500"
                  >
                    Odoslať ďalší dopyt
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display font-bold text-forest-800 text-xl mb-5">
                    Napíšte nám
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-forest-700 text-xs font-semibold font-body mb-1.5" htmlFor="name">
                        Meno a priezvisko *
                      </label>
                      <input
                        id="name"
                        required
                        type="text"
                        placeholder="Ján Novák"
                        className="w-full bg-cream-50 border border-forest-100 rounded-xl px-4 py-3 text-forest-800 text-sm font-body placeholder-forest-400 focus:outline-none focus:border-leaf-400 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-forest-700 text-xs font-semibold font-body mb-1.5" htmlFor="phone">
                        Telefón *
                      </label>
                      <input
                        id="phone"
                        required
                        type="tel"
                        placeholder="+421 9XX XXX XXX"
                        className="w-full bg-cream-50 border border-forest-100 rounded-xl px-4 py-3 text-forest-800 text-sm font-body placeholder-forest-400 focus:outline-none focus:border-leaf-400 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-forest-700 text-xs font-semibold font-body mb-1.5" htmlFor="email">
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jan.novak@email.sk"
                      className="w-full bg-cream-50 border border-forest-100 rounded-xl px-4 py-3 text-forest-800 text-sm font-body placeholder-forest-400 focus:outline-none focus:border-leaf-400 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-forest-700 text-xs font-semibold font-body mb-1.5" htmlFor="service">
                      Typ záhradníckych prác
                    </label>
                    <select
                      id="service"
                      className="w-full bg-cream-50 border border-forest-100 rounded-xl px-4 py-3 text-forest-800 text-sm font-body focus:outline-none focus:border-leaf-400 focus:bg-white transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Vyberte typ prác…</option>
                      <option>Kosenie trávnika</option>
                      <option>Strihanie živého plotu</option>
                      <option>Údržba záhrady</option>
                      <option>Jarné/jesenné upratovanie</option>
                      <option>Výsadba rastlín</option>
                      <option>Komplexná starostlivosť</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-forest-700 text-xs font-semibold font-body mb-1.5" htmlFor="msg">
                      Popis záhrady / Správa *
                    </label>
                    <textarea
                      id="msg"
                      required
                      rows={4}
                      placeholder="Opíšte vašu záhradu — rozloha, lokalita, čo potrebujete…"
                      className="w-full bg-cream-50 border border-forest-100 rounded-xl px-4 py-3 text-forest-800 text-sm font-body placeholder-forest-400 focus:outline-none focus:border-leaf-400 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 bg-leaf-500 hover:bg-leaf-400 disabled:opacity-70 text-white font-semibold font-body py-4 rounded-2xl transition-colors cursor-pointer shadow-lg shadow-leaf-500/20 text-base"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Odosielam…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Odoslať dopyt zadarmo
                      </>
                    )}
                  </button>

                  <p className="text-forest-400 text-xs text-center font-body">
                    Bez záväzkov · Odpoveď do 2 hodín · GDPR v poriadku
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
