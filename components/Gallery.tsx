"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { X, ArrowLeftRight } from "lucide-react";
import { FadeIn, SectionLabel, SectionHeading } from "./ui";

const BEFORE_AFTER = [
  {
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=75",
    after:  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=75",
    label: "Trávnik — pred a po kosení",
    tag: "Kosenie",
  },
  {
    before: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=700&q=75",
    after:  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&q=75",
    label: "Živý plot — pred a po strihani",
    tag: "Ploty",
  },
  {
    before: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=75",
    after:  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=700&q=75",
    label: "Záhon — pred a po výsadbe",
    tag: "Výsadba",
  },
];

const GRID = [
  { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=75", label: "Záhrada po jarnom upratovaní" },
  { src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=75", label: "Tvarovaný živý plot" },
  { src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&q=75", label: "Výsadba kvetov a trvaliek" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75", label: "Dokonale skosený trávnik" },
];

function BeforeAfterCard({
  item,
  onClick,
}: {
  item: (typeof BEFORE_AFTER)[0];
  onClick: () => void;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative rounded-3xl overflow-hidden cursor-pointer group aspect-[4/3]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {/* After image (always visible) */}
      <Image src={item.after} alt={`Po: ${item.label}`} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />

      {/* Before overlay (slides in on hover) */}
      <motion.div
        animate={{ clipPath: hover ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image src={item.before} alt={`Pred: ${item.label}`} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-forest-950/20" />
        <div className="absolute bottom-3 left-3 bg-white/90 text-forest-800 text-xs font-semibold font-body px-3 py-1.5 rounded-full">
          PRED
        </div>
      </motion.div>

      {/* Divider line */}
      <motion.div
        animate={{ left: hover ? "50%" : "100%" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.5)] z-10"
      />

      {/* After label */}
      {!hover && (
        <div className="absolute bottom-3 right-3 bg-leaf-500/90 text-white text-xs font-semibold font-body px-3 py-1.5 rounded-full">
          PO
        </div>
      )}

      {/* Tag */}
      <div className="absolute top-3 left-3 bg-forest-800/80 backdrop-blur-sm text-cream-100 text-xs font-body px-3 py-1.5 rounded-full">
        {item.tag}
      </div>

      {/* Hover icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
          <ArrowLeftRight className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [lightbox, setLightbox] = useState<null | { src: string; label: string }>(null);

  return (
    <section id="galeria" ref={ref} className="py-28 bg-cream-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <SectionLabel>Galéria realizácií</SectionLabel>
          <SectionHeading className="text-4xl lg:text-5xl mb-4">
            Výsledky hovoria{" "}
            <span className="text-leaf-500">za seba</span>
          </SectionHeading>
          <p className="font-body text-forest-600 text-lg max-w-xl mx-auto mt-4">
            Najezte sa pohľadom na naše realizácie. Ukážeme vám rozdiel pred a po —
            rovnako to dokážeme aj vo vašej záhrade.
          </p>
        </FadeIn>

        {/* Before/After cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {BEFORE_AFTER.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <BeforeAfterCard
                item={item}
                onClick={() => setLightbox({ src: item.after, label: item.label })}
              />
              <p className="text-center text-xs text-forest-500 font-body mt-2.5">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
          {GRID.map((g, i) => (
            <motion.div
              key={g.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.07 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => setLightbox(g)}
            >
              <Image
                src={g.src}
                alt={g.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width:640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/30 transition-colors duration-300 flex items-end p-3">
                <span className="text-white text-xs font-body font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {g.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-forest-950/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Zavrieť"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden">
                <Image src={lightbox.src} alt={lightbox.label} fill className="object-cover" />
              </div>
              <p className="text-cream-300 text-sm font-body text-center mt-4">{lightbox.label}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
