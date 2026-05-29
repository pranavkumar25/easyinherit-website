/* eslint-disable @next/next/no-img-element */
import { Quote } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { BackgroundFX } from "./ui/BackgroundFX";

interface PressItem {
  image: string;
  person: string;
  role: string;
  quote: string;
  source: string;
}

const items: PressItem[] = [
  {
    image: "/recognition/amitabh-kant.jpeg",
    person: "Amitabh Kant",
    role: "CEO, NITI Aayog",
    quote:
      "EasyInherit is a unique FinTech startup that is digitizing inheritance claims and unlocking wealth. Their platform is built on India Stack and is leveraging eGov & Digital India facilities to enhance ease of living for citizens.",
    source: "NITI Aayog · Office of the CEO",
  },
  {
    image: "/recognition/finance-minister.jpeg",
    person: "Smt. Nirmala Sitharaman",
    role: "Hon'ble Union Finance Minister of India",
    quote:
      "EasyInherit presented a paper to the Hon'ble Finance Minister on simplifying inheritance and asset transmission across India — covering succession, transmission and the broader avenues of inheritance modernisation.",
    source: "Ministry of Finance, Government of India",
  },
];

export function Recognition() {
  return (
    <section id="recognition" className="relative py-20 sm:py-24 lg:py-32">
      <BackgroundFX />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="Recognition"
          tone="mint"
          title={
            <>
              In conversation with{" "}
              <span className="gradient-text">India&apos;s leadership.</span>
            </>
          }
          description="EasyInherit has presented its vision for simplifying inheritance to the policymakers shaping India's digital and financial future."
        />

        <div className="mt-12 sm:mt-16 grid gap-5 lg:grid-cols-2">
          {items.map((it) => (
            <PressCard key={it.person} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PressCard({ image, person, role, quote, source }: PressItem) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-midnight-300">
        <img
          src={image}
          alt={`EasyInherit founders with ${person}`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
        {/* Bottom fade so the badge below reads on any photo */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-midnight-200/60 to-transparent" />
        {/* Top-left badge */}
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/85 backdrop-blur">
          <span className="h-1 w-1 rounded-full bg-mint shadow-[0_0_8px_rgba(34,232,155,0.9)]" />
          Recognition
        </div>
      </div>

      {/* Content */}
      <div className="relative p-7 sm:p-8">
        <Quote className="h-6 w-6 text-mint/70" />

        <p className="mt-4 text-[15px] leading-relaxed text-white/75">
          {quote}
        </p>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/[0.06] pt-5">
          <div>
            <div className="text-[14.5px] font-medium tracking-tight text-white">
              {person}
            </div>
            <div className="mt-0.5 text-[12.5px] text-white/55">{role}</div>
          </div>
          <div className="text-right text-[10.5px] uppercase tracking-[0.14em] text-white/40">
            {source}
          </div>
        </div>
      </div>
    </article>
  );
}
