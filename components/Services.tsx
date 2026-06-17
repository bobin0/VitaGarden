"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Scissors,
  Leaf,
  Sun,
  Snowflake,
  Sprout,
  Wrench,
} from "lucide-react";
import { FadeIn, SectionLabel, SectionHeading } from "./ui";

const SERVICES = [
  {
    icon: Scissors,
    title: "Kosenie trávnikov",
    desc: "Pravidelné alebo jednorazové kosenie trávnikov — starostlivosť o dokonale rovný a svieži trávnik počas celej sezóny.",
    color: "bg-leaf-500",
    light: "bg-leaf-500/8",
  },
  {
    icon: Leaf,
    title: "Strihanie živých plotov",
    desc: "Tvarovanie a strihanie živých plotov, krovia a okrasných kríkov. Presné ručné aj strojové strihanie na mieru.",
    color: "bg-forest-700",
    light: "bg-forest-700/8",
  },
  {
    icon: Wrench,
    title: "Údržba záhrad",
    desc: "Komplexná starostlivosť o záhradu počas celého roka — plev, okopávanie, hnojenie, zavlažovanie a ošetrovanie rastlín.",
    color: "bg-earth-500",
    light: "bg-earth-500/8",
  },
  {
    icon: Sun,
    title: "Jarné upratovanie",
    desc: "Kompletné jarné upratovanie záhrady — hrabanie lístia, čistenie záhonov, odvoz bioodpadu a príprava na sezónu.",
    color: "bg-leaf-500",
    light: "bg-leaf-500/8",
  },
  {
    icon: Snowflake,
    title: "Jesenné upratovanie",
    desc: "Jesenná príprava záhrady na zimné obdobie — orezávanie, mulčovanie, zakrývanie trvaliek a odvoz lístia.",
    color: "bg-forest-700",
    light: "bg-forest-700/8",
  },
  {
    icon: Sprout,
    title: "Výsadba rastlín",
    desc: "Výber, dovoz a výsadba kvetov, kríkov, stromov a okrasných rastlín. Navrhneme aj realizujeme váš záhradný dizajn.",
    color: "bg-earth-500",
    light: "bg-earth-500/8",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="sluzby" ref={ref} className="py-28 bg-cream-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <SectionLabel>Naše služby</SectionLabel>
          <SectionHeading className="text-4xl lg:text-5xl mb-4">
            Všetko, čo vaša záhrada
            <br />
            <span className="text-leaf-500">potrebuje</span>
          </SectionHeading>
          <p className="font-body text-forest-600 text-lg max-w-xl mx-auto leading-relaxed mt-4">
            Od pravidelnej údržby až po kompletné záhradné riešenia. Postaráme
            sa o vašu záhradu tak, aby ste vy mohli si ju jednoducho užívať.
          </p>
        </FadeIn>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white rounded-3xl p-7 border border-forest-100 hover:border-leaf-300 hover:shadow-xl hover:shadow-forest-900/6 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-leaf-500/0 to-leaf-500/0 group-hover:from-leaf-500/3 group-hover:to-transparent transition-all duration-500 rounded-3xl" />

              {/* Icon */}
              <div
                className={`w-12 h-12 ${svc.light} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <svc.icon className={`w-5 h-5 text-forest-700`} strokeWidth={1.8} />
              </div>

              <h3 className="font-display font-bold text-forest-800 text-lg mb-2.5">
                {svc.title}
              </h3>
              <p className="font-body text-forest-600 text-sm leading-relaxed">
                {svc.desc}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-7 right-7 h-0.5 bg-gradient-to-r from-leaf-400 to-leaf-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <FadeIn delay={0.3} className="text-center mt-14">
          <button
            onClick={() =>
              document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-cream-100 font-semibold font-body px-8 py-4 rounded-2xl transition-colors cursor-pointer text-sm"
          >
            Dopytovať sa na záhradnícke práce →
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
