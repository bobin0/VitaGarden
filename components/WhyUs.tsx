"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Clock, Sparkles, BadgeEuro } from "lucide-react";
import { FadeIn, SectionLabel, SectionHeading } from "./ui";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Spoľahlivosť",
    desc: "Prídeme v dohodnutom čase, odvedieme prácu načas a zanecháme záhradu v bezchybnom stave. Žiadne prekvapenia.",
  },
  {
    icon: Sparkles,
    title: "Kvalitná práca",
    desc: "Používame profesionálne náradia a overené postupy. Výsledok vždy prekračuje očakávania zákazníka.",
  },
  {
    icon: Clock,
    title: "Individuálny prístup",
    desc: "Každá záhrada je iná. Vždy nájdeme riešenie šité na mieru — bez šablón, len výsledky.",
  },
  {
    icon: BadgeEuro,
    title: "Férové ceny",
    desc: "Transparentná cenotvorba bez skrytých poplatkov. Cenovú ponuku dostanete vopred a bez záväzkov.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="preco-my" ref={ref} className="py-28 bg-forest-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <FadeIn direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-4xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                  alt="Záhradník pri práci"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
              </div>

              {/* Floating card — years */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-leaf-500 rounded-3xl px-7 py-5 shadow-2xl"
              >
                <div className="font-display font-bold text-white text-4xl leading-none">8+</div>
                <div className="text-white/80 text-sm font-body mt-1">rokov skúseností</div>
              </motion.div>

              {/* Floating card — projects */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-4"
              >
                <div className="font-display font-bold text-cream-50 text-2xl">200+</div>
                <div className="text-cream-400 text-xs font-body">projektov ročne</div>
              </motion.div>

              {/* Corner decoration */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-leaf-500/40 rounded-tl-3xl pointer-events-none" />
            </div>
          </FadeIn>

          {/* Right: text */}
          <FadeIn direction="right" delay={0.15}>
            <SectionLabel>Prečo VitaGarden</SectionLabel>
            <SectionHeading className="text-4xl lg:text-5xl text-cream-50 mb-6">
              Záhrade sa venujeme{" "}
              <span className="text-leaf-400">s vášňou</span>
            </SectionHeading>
            <p className="font-body text-cream-400 text-base leading-relaxed mb-10">
              Nie sme len záhradníci. Sme ľudia, ktorí milujú prírodu a chcú,
              aby vaša záhrada bola miestom odpočinku a krásy — bez toho, aby ste
              museli stráviť víkend s grabľami v ruke.
            </p>

            {/* Reasons */}
            <div className="grid sm:grid-cols-2 gap-5">
              {REASONS.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="bg-white/5 border border-white/8 rounded-2xl p-5 hover:border-leaf-500/30 hover:bg-white/8 transition-all"
                >
                  <div className="w-9 h-9 bg-leaf-500/15 rounded-xl flex items-center justify-center mb-3">
                    <r.icon className="w-4.5 h-4.5 text-leaf-400 w-[18px] h-[18px]" strokeWidth={1.8} />
                  </div>
                  <div className="font-display font-bold text-cream-100 text-base mb-1.5">
                    {r.title}
                  </div>
                  <p className="font-body text-cream-500 text-xs leading-relaxed">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
