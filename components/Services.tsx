"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const SVCS = [
  { n: "01", title: "Kosenie trávnikov",        desc: "Pravidelné alebo jednorazové kosenie. Dokonale rovný a svieži trávnik bez vášho úsilia.", tag: "Od 25 €",       img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=160&q=70" },
  { n: "02", title: "Strihanie živých plotov",  desc: "Tvarovanie plotov, krovia a okrasných kríkov. Presné ručné aj strojové strihanie.",       tag: "Cenová ponuka", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=160&q=70" },
  { n: "03", title: "Výsadba rastlín",          desc: "Výber, dovoz a výsadba kvetov, kríkov a stromov. Záhradný dizajn na mieru.",              tag: "Návrh zadarmo",  img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=160&q=70" },
  { n: "04", title: "Jarné upratovanie",        desc: "Kompletné jarné čistenie záhrady — hrabanie, čistenie záhonov, odvoz bioodpadu.",          tag: "Sezónne",        img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=160&q=70" },
  { n: "05", title: "Jesenné upratovanie",      desc: "Príprava záhrady na zimu — mulčovanie, zakrývanie trvaliek, odvoz lístia.",               tag: "Sezónne",        img: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=160&q=70" },
  { n: "06", title: "Záhradné práce na mieru",  desc: "Komplexná starostlivosť — hnojenie, zavlažovanie, ošetrovanie. Vždy podľa vašich predstáv.", tag: "Na mieru",     img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=160&q=70" },
];

export default function Services() {
  return (
    <section id="services" className="relative z-20 bg-[#060d08] py-28">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="vg-reveal mb-20">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-5 h-px bg-[#4a9e70]" />
            <span className="text-[#4a9e70] text-[11px] font-semibold tracking-[.2em] uppercase">Naše služby</span>
          </div>
          <h2 className="font-display font-extrabold text-[#f0ede6] leading-[1.0] tracking-[-2px]" style={{ fontSize: "clamp(36px,5vw,72px)" }}>
            Čo pre vás
            <br />
            <span className="text-[rgba(240,237,230,.2)]">dokážeme</span>
          </h2>
        </div>

        {/* Rows */}
        <div>
          {SVCS.map((s, i) => (
            <div
              key={s.n}
              className={`vg-reveal vg-d${Math.min(i + 1, 6) as 1|2|3|4|5|6} group grid items-center gap-8 py-7 border-t border-[rgba(240,237,230,.06)] hover:bg-[rgba(74,158,112,.03)] transition-all duration-300 relative overflow-hidden`}
              style={{ gridTemplateColumns: "56px 1fr auto" }}
            >
              {/* Hover bottom line */}
              <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#4a9e70] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <span className="font-display font-bold text-[13px] text-[rgba(240,237,230,.2)] group-hover:text-[#4a9e70] transition-colors">{s.n}</span>

              <div>
                <div className="font-display font-bold text-[#f0ede6] mb-2 group-hover:text-[rgba(240,237,230,.9)] transition-colors" style={{ fontSize: "clamp(20px,2.2vw,30px)" }}>
                  {s.title}
                </div>
                <div className="text-[14px] text-[rgba(240,237,230,.38)] leading-relaxed max-w-[500px]">{s.desc}</div>
              </div>

              <div className="flex items-center gap-4 flex-shrink-0">
                {/* Thumbnail — appears on hover */}
                <div className="w-20 h-14 rounded-lg overflow-hidden opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 hidden sm:block">
                  <Image src={s.img} alt={s.title} width={80} height={56} className="w-full h-full object-cover" />
                </div>
                <span className="text-[11px] font-semibold text-[#4a9e70] bg-[rgba(74,158,112,.1)] border border-[rgba(74,158,112,.2)] px-3 py-1.5 rounded-full whitespace-nowrap">
                  {s.tag}
                </span>
                <div className="w-9 h-9 border border-[rgba(240,237,230,.12)] rounded-full flex items-center justify-center text-[rgba(240,237,230,.3)] group-hover:border-[#4a9e70] group-hover:text-[#4a9e70] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-[rgba(240,237,230,.06)]" />
        </div>
      </div>
    </section>
  );
}
