"use client";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const GRID = [
  { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&q=75", label: "Jarné upratovanie" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=75", label: "Kosenie trávnika" },
  { src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500&q=75", label: "Výsadba kvetov" },
  { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=75", label: "Záhradné práce" },
];

export default function Gallery() {
  const [pct, setPct] = useState(50);
  const dragging = useRef(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const calcPct = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setPct(Math.max(3, Math.min(97, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <section id="gallery" className="relative z-20 bg-[#060d08] py-28">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10">

        {/* Header */}
        <div className="vg-reveal mb-16">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-5 h-px bg-[#4a9e70]" />
            <span className="text-[#4a9e70] text-[11px] font-semibold tracking-[.2em] uppercase">Galéria realizácií</span>
          </div>
          <h2 className="font-display font-extrabold text-[#f0ede6] leading-[1.0] tracking-[-2px]" style={{ fontSize: "clamp(36px,5vw,72px)" }}>
            Výsledky hovoria
            <br />
            <span className="text-[rgba(240,237,230,.2)]">za seba</span>
          </h2>
        </div>

        {/* B/A Slider */}
        <div className="vg-reveal mb-3">
          <div
            ref={wrapRef}
            className="relative overflow-hidden rounded-[24px] select-none"
            style={{ aspectRatio: "21/9", cursor: "col-resize" }}
            onMouseDown={(e) => { dragging.current = true; calcPct(e); }}
            onMouseMove={(e) => { if (dragging.current) calcPct(e); }}
            onMouseUp={() => { dragging.current = false; }}
            onMouseLeave={() => { dragging.current = false; }}
            onTouchStart={(e) => { dragging.current = true; calcPct(e); }}
            onTouchMove={(e) => { if (dragging.current) calcPct(e); }}
            onTouchEnd={() => { dragging.current = false; }}
          >
            {/* After */}
            <Image
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1400&q=80"
              alt="Po"
              fill
              className="object-cover"
              draggable={false}
            />
            {/* Before — clipped */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
              <Image
                src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=1400&q=80"
                alt="Pred"
                fill
                className="object-cover"
                draggable={false}
              />
            </div>
            {/* Divider line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 z-10 pointer-events-none"
              style={{ left: `${pct}%`, background: "linear-gradient(to bottom, transparent, #4a9e70, transparent)", boxShadow: "0 0 20px rgba(74,158,112,.7)" }}
            />
            {/* Handle */}
            <div
              className="absolute top-1/2 z-20 -translate-y-1/2 w-12 h-12 bg-[#4a9e70] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(74,158,112,.6)] pointer-events-none"
              style={{ left: `${pct}%`, transform: `translate(-50%, -50%)` }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#060d08" strokeWidth="2.5">
                <path d="m7 16-4-4 4-4"/><path d="m17 8 4 4-4 4"/>
              </svg>
            </div>
            {/* Labels */}
            <div className="absolute bottom-4 left-4 bg-[rgba(6,13,8,.75)] backdrop-blur-sm border border-[rgba(240,237,230,.1)] text-[#f0ede6] text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-[.08em] pointer-events-none">Pred</div>
            <div className="absolute bottom-4 right-4 bg-[rgba(74,158,112,.8)] backdrop-blur-sm text-[#060d08] text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-[.08em] pointer-events-none">Po</div>
          </div>
          <p className="text-center text-[11px] text-[rgba(240,237,230,.2)] tracking-[.08em] mt-3 uppercase">↔ Potiahnite posuvník</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
          {GRID.map((g, i) => (
            <div
              key={g.src}
              className={`vg-reveal vg-d${(i + 1) as 1|2|3|4} group relative rounded-[18px] overflow-hidden aspect-square cursor-none`}
              onClick={() => setLightbox(g.src)}
            >
              <Image
                src={g.src}
                alt={g.label}
                fill
                sizes="(max-width:640px) 50vw, 25vw"
                className="object-cover group-hover:scale-[1.08] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[rgba(6,13,8,0)] group-hover:bg-[rgba(6,13,8,.35)] transition-colors duration-300 flex items-end p-3.5">
                <span className="text-white text-[12px] font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {g.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] bg-[rgba(6,13,8,.96)] backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 bg-[rgba(240,237,230,.1)] hover:bg-[rgba(240,237,230,.2)] rounded-full flex items-center justify-center text-[#f0ede6] transition-colors cursor-none"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video rounded-[20px] overflow-hidden">
              <Image src={lightbox} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
