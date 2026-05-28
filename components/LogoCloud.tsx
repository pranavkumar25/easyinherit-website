const partners = [
  "Sama",
  "iCreate",
  "IIT Madras",
  "Agami",
  "Vayah Vikas",
  "Gen S",
];

export function LogoCloud() {
  return (
    <section className="relative border-y border-white/[0.06] bg-midnight-300/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
            Backed by India's leading innovation &amp; ODR ecosystems
          </div>
          <div className="grid w-full grid-cols-2 items-center gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((p) => (
              <div
                key={p}
                className="flex items-center justify-center text-center text-base font-medium tracking-tight text-white/55 transition-colors hover:text-white"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
