"use client";
import Image from "next/image";
import { ShieldCheck, Sparkles, Clock, BadgeEuro } from "lucide-react";

const REASONS = [
  { icon: ShieldCheck, title: "Spoľahlivosť",        desc: "Vždy načas, vždy v poriadku. Bez prekvapení." },
  { icon: Sparkles,    title: "Prémiová kvalita",     desc: "Výsledok vždy prekračuje očakávania zákazníka." },
  { icon: Clock,       title: "Individuálny prístup", desc: "Každá záhrada je iná — riešenie šité na mieru." },
  { icon: BadgeEuro,   title: "Férové ceny",          desc: "Transparentná cena, žiadne skryté poplatky." },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative z-20 bg-[#060d08] py-28 overflow-hidden">
      {/* BG parallax photo */}
      <div className="absolute inset-0 opacity-[.08] pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1800&q=60"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#060d08] via-[rgba(6,13,8,.7)] to-[#060d08]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Photo side */}
          <div className="vg-reveal-l">
            <div className="relative">
              {/* Main */}
              <div className="relative rounded-[28px] overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80"
                  alt="Záhradník"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,13,8,.6)] to-transparent" />
              </div>

              {/* Badge years */}
              <div className="absolute -bottom-5 -left-5 bg-[#4a9e70] rounded-[20px] px-7 py-5 shadow-[0_20px_60px_rgba(74,158,112,.4)]">
                <div className="font-display font-extrabold text-[#060d08] text-[44px] leading-none">8+</div>
                <div className="text-[rgba(6,13,8,.65)] text-[12px] font-semibold mt-1">rokov skúseností</div>
              </div>

              {/* Badge projects */}
              <div className="absolute -top-4 -right-4 bg-[rgba(10,24,16,.9)] backdrop-blur-xl border border-[rgba(74,158,112,.2)] rounded-[18px] px-5 py-4">
                <div className="font-display font-extrabold text-[#f0ede6] text-[28px] leading-none">200+</div>
                <div className="text-[rgba(240,237,230,.35)] text-[11px] mt-1">projektov ročne</div>
              </div>

              {/* Corner deco */}
              <div className="absolute -top-3 -left-3 w-14 h-14 border-t-2 border-l-2 border-[rgba(74,158,112,.35)] rounded-tl-[20px] pointer-events-none" />
            </div>
          </div>

          {/* Text side */}
          <div className="vg-reveal-r">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-5 h-px bg-[#4a9e70]" />
              <span className="text-[#4a9e70] text-[11px] font-semibold tracking-[.2em] uppercase">Prečo VitaGarden</span>
            </div>

            <h2 className="font-display font-extrabold text-[#f0ede6] leading-[1.05] tracking-[-2px] mb-6" style={{ fontSize: "clamp(32px,4vw,58px)" }}>
              Záhrade sa venujeme{" "}
              <span className="vg-gradient-text">s vášňou</span>
            </h2>

            <p className="text-[rgba(240,237,230,.45)] text-[16px] leading-[1.75] mb-12 max-w-[400px]">
              Chceme, aby vaša záhrada bola miestom krásy a oddychu — bez toho,
              aby ste trávili víkend s grabľami v ruke.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {REASONS.map((r) => (
                <div
                  key={r.title}
                  className="group bg-[rgba(240,237,230,.04)] border border-[rgba(240,237,230,.07)] rounded-[20px] p-5 hover:border-[rgba(74,158,112,.3)] hover:bg-[rgba(74,158,112,.05)] transition-all duration-300 tilt-card"
                  style={{ transformStyle: "preserve-3d" }}
                  onMouseMove={(e) => {
                    const el = e.currentTarget;
                    const r2 = el.getBoundingClientRect();
                    const x = ((e.clientX - r2.left) / r2.width  - .5) * 12;
                    const y = ((e.clientY - r2.top)  / r2.height - .5) * 12;
                    el.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${-y}deg) translateZ(8px)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "";
                  }}
                >
                  <div className="w-9 h-9 bg-[rgba(74,158,112,.12)] rounded-xl flex items-center justify-center mb-3">
                    <r.icon className="w-[17px] h-[17px] text-[#4a9e70]" strokeWidth={1.8} />
                  </div>
                  <div className="font-display font-bold text-[#f0ede6] text-[15px] mb-1.5">{r.title}</div>
                  <div className="text-[rgba(240,237,230,.4)] text-[12px] leading-relaxed">{r.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
