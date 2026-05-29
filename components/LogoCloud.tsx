/* eslint-disable @next/next/no-img-element */

const partners = [
  { name: "Sahamati", src: "/partners/sahamati.svg", h: "h-9" },
  { name: "iCreate", src: "/partners/icreate.png", h: "h-14" },
  { name: "IIT Madras Research Park", src: "/partners/iit-madras.png", h: "h-14" },
  { name: "Sama", src: "/partners/agami.avif", h: "h-8" },
  { name: "Vayah Vikas", src: "/partners/vayah-vikas.svg", h: "h-9" },
  { name: "Gen S", src: "/partners/gen-s.png", h: "h-12" },
];

export function LogoCloud() {
  return (
    <section id="partners" className="relative border-y border-white/[0.06] bg-midnight-300/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-14">
        <div className="flex flex-col items-center gap-12">
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
            Partnerships &amp; Affiliations
          </div>
          <div className="grid w-full grid-cols-2 items-center gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((p) => (
              <div
                key={p.name}
                className="group flex h-16 items-center justify-center"
                title={p.name}
              >
                <img
                  src={p.src}
                  alt={p.name}
                  className={`${p.h} w-auto max-w-[180px] object-contain opacity-70 brightness-0 invert transition-opacity duration-300 group-hover:opacity-100`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
