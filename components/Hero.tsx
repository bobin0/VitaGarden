"use client";
import dynamic from "next/dynamic";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";

const WebGLScene = dynamic(() => import("./WebGLScene"), { ssr: false });

const TRUST = ["Bez záväzkov", "Bezplatná konzultácia", "Odpoveď do 2 hodín"];

export default function Hero() {
  const go = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Three.js canvas */}
      <WebGLScene />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-10 pt-40 pb-24 w-full">
        <div className="max-w-[680px]">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2.5 mb-8 opacity-0 animate-[fadeUp_.8s_cubic-bezier(.22,1,.36,1)_.15s_forwards]"
            style={{ animation: "fadeUp .8s cubic-bezier(.22,1,.36,1) .15s forwards" }}
          >
            <span className="block w-6 h-px bg-[#4a9e70]" />
            <span className="text-[#4a9e70] text-[11px] font-semibold tracking-[.2em] uppercase">
              Profesionálna záhradná starostlivosť
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-display font-extrabold leading-[.95] tracking-[-4px] text-[#f0ede6] mb-8 opacity-0"
            style={{
              fontSize: "clamp(60px,8.5vw,120px)",
              animation: "fadeUp .9s cubic-bezier(.22,1,.36,1) .3s forwards",
            }}
          >
            Vaša záhrada
            <br />
            <em className="not-italic font-bold" style={{
              WebkitTextStroke: "1px #4a9e70",
              color: "transparent",
            }}>
              dokonalá
            </em>
            <br />
            <span className="vg-gradient-text">každý deň</span>
          </h1>

          {/* Sub */}
          <p
            className="text-lg text-[rgba(240,237,230,.5)] leading-[1.75] max-w-[440px] mb-12 opacity-0"
            style={{ animation: "fadeUp .8s cubic-bezier(.22,1,.36,1) .5s forwards" }}
          >
            Kosenie, ploty, výsadba a kompletná údržba záhrad pre rodinné domy
            a firmy na celom Slovensku.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-12 opacity-0"
            style={{ animation: "fadeUp .8s cubic-bezier(.22,1,.36,1) .65s forwards" }}
          >
            <a
              href="tel:+421900000000"
              data-hover
              className="inline-flex items-center gap-2.5 bg-[#4a9e70] hover:bg-[#86c99a] text-[#060d08] font-display font-bold text-[15px] px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_40px_rgba(74,158,112,.3)] hover:shadow-[0_0_60px_rgba(74,158,112,.5)] hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Zavolať teraz
            </a>
            <button
              onClick={() => go("#contact")}
              data-hover
              className="inline-flex items-center gap-2 border border-[rgba(240,237,230,.15)] hover:border-[rgba(74,158,112,.4)] text-[rgba(240,237,230,.8)] hover:text-[#f0ede6] font-display font-semibold text-[15px] px-8 py-4 rounded-xl transition-all duration-300 hover:bg-[rgba(74,158,112,.05)]"
            >
              Cenová ponuka zadarmo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust */}
          <div
            className="flex flex-wrap gap-5 opacity-0"
            style={{ animation: "fadeUp .8s cubic-bezier(.22,1,.36,1) .8s forwards" }}
          >
            {TRUST.map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-[rgba(240,237,230,.4)] text-[13px]">
                <CheckCircle className="w-3.5 h-3.5 text-[#4a9e70] flex-shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Stats — right */}
        <div
          className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col gap-px opacity-0"
          style={{ animation: "fadeUp .8s cubic-bezier(.22,1,.36,1) .9s forwards" }}
        >
          {[
            { v: "200+", l: "Zákazníkov" },
            { v: "8+",   l: "Rokov praxe" },
            { v: "98%",  l: "Spokojnosť" },
          ].map((s, i) => (
            <div
              key={s.l}
              className="px-7 py-5 border border-[rgba(240,237,230,.07)] bg-[rgba(6,13,8,.55)] backdrop-blur-md text-center min-w-[120px]"
              style={{
                borderRadius: i === 0 ? "16px 16px 0 0" : i === 2 ? "0 0 16px 16px" : "0",
              }}
            >
              <div className="font-display font-extrabold text-[36px] text-[#f0ede6] leading-none">
                {s.v.replace(/\d+/, (n) => n)
                  .split(/(\d+)/)
                  .map((p, j) =>
                    /\d/.test(p) ? <span key={j}>{p}</span> : <span key={j} className="text-[#4a9e70]">{p}</span>
                  )}
              </div>
              <div className="text-[11px] text-[rgba(240,237,230,.35)] mt-1 tracking-[.06em]">{s.l.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#060d08] to-transparent z-10 pointer-events-none" />

      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(30px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>
    </section>
  );
}
