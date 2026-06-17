"use client";
import { useState } from "react";
import { Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const INFO = [
  { icon: Phone, label: "Telefón",     value: "+421 900 000 000", href: "tel:+421900000000" },
  { icon: Mail,  label: "E-mail",      value: "info@vitagarden.sk", href: "mailto:info@vitagarden.sk" },
  { icon: Clock, label: "Dostupnosť",  value: "Po–So: 7:00 – 18:00", href: null },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="relative z-20 bg-[#060d08] py-28">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10">

        {/* Big CTA block */}
        <div className="vg-reveal relative rounded-[32px] overflow-hidden mb-20 text-center px-8 py-20"
          style={{ background: "linear-gradient(135deg,#0d2218 0%,#142d1e 55%,#0a1a12 100%)", border: "1px solid rgba(74,158,112,.14)" }}>
          <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(74,158,112,.1) 0%, transparent 70%)" }} />

          <div className="flex items-center justify-center gap-2.5 mb-4">
            <span className="block w-5 h-px bg-[#4a9e70]" />
            <span className="text-[#4a9e70] text-[11px] font-semibold tracking-[.2em] uppercase">Začnite ešte dnes</span>
            <span className="block w-5 h-px bg-[#4a9e70]" />
          </div>

          <h2 className="font-display font-extrabold text-[#f0ede6] tracking-[-2px] mb-4 leading-[1.0]"
            style={{ fontSize: "clamp(32px,5vw,68px)" }}>
            Vaša záhrada si zaslúží
            <br />
            <span className="vg-gradient-text">to najlepšie</span>
          </h2>

          <p className="text-[rgba(240,237,230,.45)] text-[17px] max-w-[420px] mx-auto mb-10 leading-[1.7]">
            Zavolajte nám alebo napíšte. Bezplatná cenová ponuka do 2 hodín.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+421900000000"
              data-hover
              className="relative inline-flex items-center gap-3 bg-[#4a9e70] hover:bg-[#86c99a] text-[#060d08] font-display font-extrabold text-[20px] px-10 py-5 rounded-[16px] transition-all duration-300 shadow-[0_0_60px_rgba(74,158,112,.3)] hover:shadow-[0_0_80px_rgba(74,158,112,.5)] hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              +421 900 000 000
              <span className="absolute top-3.5 right-3.5 w-2 h-2 bg-[#060d08] rounded-full">
                <span className="absolute inset-0 rounded-full bg-[#060d08] animate-ping opacity-70" />
              </span>
            </a>
            <a
              href="mailto:info@vitagarden.sk"
              data-hover
              className="inline-flex items-center gap-3 border border-[rgba(240,237,230,.15)] hover:border-[rgba(74,158,112,.4)] text-[rgba(240,237,230,.75)] hover:text-[#f0ede6] font-display font-semibold text-[16px] px-8 py-5 rounded-[16px] transition-all duration-300 hover:bg-[rgba(74,158,112,.05)]"
            >
              <Mail className="w-4 h-4" />
              info@vitagarden.sk
            </a>
          </div>
        </div>

        {/* Form + Info */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <div className="vg-reveal-l lg:col-span-2">
            <div className="rounded-[28px] p-8 h-full" style={{ background: "#0a1810", border: "1px solid rgba(74,158,112,.08)" }}>
              <h3 className="font-display font-bold text-[#f0ede6] text-[20px] mb-8">Kontaktné informácie</h3>
              <div className="space-y-5">
                {INFO.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[rgba(74,158,112,.1)] border border-[rgba(74,158,112,.15)] rounded-[12px] flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-[#4a9e70]" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-[rgba(240,237,230,.3)] text-[11px] mb-0.5 tracking-[.04em]">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-[#f0ede6] font-semibold text-[15px] hover:text-[#86c99a] transition-colors cursor-none">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-[#f0ede6] font-semibold text-[15px]">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-[rgba(240,237,230,.06)] text-[rgba(240,237,230,.3)] text-[12px] leading-relaxed">
                Pôsobíme na celom území Slovenska. Odpoveď garantujeme do 2 hodín v pracovné dni.
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="vg-reveal-r lg:col-span-3">
            <div className="rounded-[28px] p-8" style={{ background: "rgba(240,237,230,.03)", border: "1px solid rgba(240,237,230,.07)" }}>
              {sent ? (
                <div className="flex flex-col items-center text-center py-14">
                  <div className="w-16 h-16 bg-[rgba(74,158,112,.1)] border border-[rgba(74,158,112,.2)] rounded-full flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-[#4a9e70]" />
                  </div>
                  <h3 className="font-display font-bold text-[#f0ede6] text-[24px] mb-2">Správa odoslaná!</h3>
                  <p className="text-[rgba(240,237,230,.4)] text-[14px]">Ozveme sa do 2 hodín s cenovou ponukou.</p>
                  <button onClick={() => setSent(false)} className="mt-5 text-[#4a9e70] text-[13px] underline underline-offset-2 cursor-none">
                    Odoslať ďalší dopyt
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <h3 className="font-display font-bold text-[#f0ede6] text-[20px] mb-6">Napíšte nám</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[rgba(240,237,230,.3)] text-[10px] font-bold tracking-[.12em] uppercase mb-2">Meno *</label>
                      <input required type="text" placeholder="Ján Novák"
                        className="w-full bg-[rgba(240,237,230,.04)] border border-[rgba(240,237,230,.08)] rounded-[12px] px-4 py-3.5 text-[#f0ede6] text-[14px] placeholder-[rgba(240,237,230,.2)] outline-none focus:border-[rgba(74,158,112,.5)] focus:bg-[rgba(74,158,112,.04)] transition-all cursor-none" />
                    </div>
                    <div>
                      <label className="block text-[rgba(240,237,230,.3)] text-[10px] font-bold tracking-[.12em] uppercase mb-2">Telefón *</label>
                      <input required type="tel" placeholder="+421 9XX XXX XXX"
                        className="w-full bg-[rgba(240,237,230,.04)] border border-[rgba(240,237,230,.08)] rounded-[12px] px-4 py-3.5 text-[#f0ede6] text-[14px] placeholder-[rgba(240,237,230,.2)] outline-none focus:border-[rgba(74,158,112,.5)] focus:bg-[rgba(74,158,112,.04)] transition-all cursor-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[rgba(240,237,230,.3)] text-[10px] font-bold tracking-[.12em] uppercase mb-2">Typ prác</label>
                    <select className="w-full bg-[rgba(240,237,230,.04)] border border-[rgba(240,237,230,.08)] rounded-[12px] px-4 py-3.5 text-[#f0ede6] text-[14px] outline-none focus:border-[rgba(74,158,112,.5)] transition-all cursor-none appearance-none">
                      <option className="bg-[#0a1810]">Kosenie trávnika</option>
                      <option className="bg-[#0a1810]">Strihanie živého plotu</option>
                      <option className="bg-[#0a1810]">Výsadba rastlín</option>
                      <option className="bg-[#0a1810]">Jarné / jesenné upratovanie</option>
                      <option className="bg-[#0a1810]">Komplexná starostlivosť</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[rgba(240,237,230,.3)] text-[10px] font-bold tracking-[.12em] uppercase mb-2">Správa *</label>
                    <textarea required rows={4} placeholder="Opíšte vašu záhradu — rozloha, lokalita, čo potrebujete…"
                      className="w-full bg-[rgba(240,237,230,.04)] border border-[rgba(240,237,230,.08)] rounded-[12px] px-4 py-3.5 text-[#f0ede6] text-[14px] placeholder-[rgba(240,237,230,.2)] outline-none focus:border-[rgba(74,158,112,.5)] focus:bg-[rgba(74,158,112,.04)] transition-all resize-none cursor-none" />
                  </div>
                  <button type="submit" disabled={loading} data-hover
                    className="w-full flex items-center justify-center gap-2.5 bg-[#4a9e70] hover:bg-[#86c99a] disabled:opacity-60 text-[#060d08] font-display font-extrabold text-[15px] py-4 rounded-[12px] transition-all duration-200 shadow-[0_8px_30px_rgba(74,158,112,.25)] hover:shadow-[0_12px_40px_rgba(74,158,112,.4)] cursor-none">
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-[rgba(6,13,8,.25)] border-t-[#060d08] rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {loading ? "Odosielam…" : "Odoslať dopyt zadarmo"}
                  </button>
                  <p className="text-center text-[11px] text-[rgba(240,237,230,.2)] tracking-[.04em]">
                    BEZ ZÁVÄZKOV · ODPOVEĎ DO 2 HODÍN · GDPR
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
