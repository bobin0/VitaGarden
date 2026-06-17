const ITEMS = [
  "Kosenie trávnikov",
  "Strihanie živých plotov",
  "Výsadba rastlín",
  "Jarné upratovanie",
  "Jesenné upratovanie",
  "Záhradné práce na mieru",
  "Údržba záhrad",
];

export default function Ticker() {
  const repeated = [...ITEMS, ...ITEMS];
  return (
    <div className="relative z-20 bg-[#4a9e70] overflow-hidden py-3.5">
      <div
        className="flex w-max"
        style={{ animation: "ticker 22s linear infinite" }}
      >
        {repeated.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-6 px-8 whitespace-nowrap font-display font-bold text-[13px] text-[#060d08] uppercase tracking-[.08em]"
          >
            <span>{item}</span>
            <span className="w-1 h-1 rounded-full bg-[rgba(6,13,8,.35)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
