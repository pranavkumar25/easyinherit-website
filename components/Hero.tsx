import { ArrowRight, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { BackgroundFX } from "./ui/BackgroundFX";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-16">
      <BackgroundFX variant="hero" />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:pt-28">
        <div className="flex flex-col items-center text-center">
          <Eyebrow tone="mint">
            <Sparkles className="h-3 w-3" />
            Now serving 14+ Indian cities &amp; NRIs globally
          </Eyebrow>

          <h1 className="mt-6 text-balance text-[clamp(48px,8.2vw,108px)] font-medium leading-[0.96] tracking-tightest text-white">
            <span className="glow-text">Inheritance,</span>
            <br />
            <span className="gradient-text">simplified for life.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-[17px] leading-relaxed text-white/65 sm:text-lg">
            EasyInherit is the modern operating layer for Indian inheritance —
            wills, succession, property transfer, death claims, and dispute
            resolution. One platform. Zero confusion. Built for families and NRIs.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button href="#contact" variant="mint" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              Start your inheritance plan
            </Button>
            <Button href="tel:+919902435733" variant="ghost" size="lg" icon={<Phone className="h-4 w-4" />}>
              +91 99024 35733
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-white/45">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-mint" />
              SEBI &amp; legally compliant frameworks
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <div>Trusted by 1,200+ Indian families</div>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <div>ODR partner — Sama</div>
          </div>
        </div>

        {/* Product preview / glass dashboard mockup */}
        <div className="relative mx-auto mt-20 max-w-6xl">
          <div className="absolute inset-x-10 -top-10 h-40 bg-gradient-to-b from-electric/30 to-transparent blur-3xl" />
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-2 shadow-[0_50px_120px_-20px_rgba(46,99,255,0.35)] backdrop-blur-2xl">
      <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-midnight-200">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <div className="hidden items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] text-white/50 md:flex">
            easyinherit.in / vault
          </div>
          <div className="text-[11px] text-white/40">v2.4</div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-2 p-3">
          {/* Sidebar */}
          <div className="col-span-3 hidden flex-col gap-1 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 lg:flex">
            {["Overview", "Will & Estate", "Assets", "Heirs", "Claims", "Documents", "Disputes", "Settings"].map(
              (item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[12px] ${
                    i === 1 ? "bg-electric/15 text-white" : "text-white/55 hover:bg-white/[0.04]"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${i === 1 ? "bg-mint" : "bg-white/20"}`} />
                  {item}
                </div>
              )
            )}
          </div>

          {/* Main area */}
          <div className="col-span-12 flex flex-col gap-2 lg:col-span-9">
            {/* Top cards */}
            <div className="grid grid-cols-12 gap-2">
              <Stat
                label="Estate readiness"
                value="92%"
                bar={92}
                accent="mint"
                className="col-span-12 sm:col-span-4"
              />
              <Stat
                label="Assets mapped"
                value="₹4.8 Cr"
                bar={68}
                accent="electric"
                className="col-span-12 sm:col-span-4"
              />
              <Stat
                label="Heirs verified"
                value="6 / 6"
                bar={100}
                accent="mint"
                className="col-span-12 sm:col-span-4"
              />
            </div>

            {/* Two-column */}
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 md:col-span-7">
                <div className="flex items-center justify-between">
                  <div className="text-[12px] uppercase tracking-[0.16em] text-white/40">
                    Succession timeline
                  </div>
                  <div className="text-[11px] text-white/50">Auto-updated</div>
                </div>
                <div className="mt-4 space-y-2.5">
                  {(
                    [
                      { label: "Will drafted & e-signed", status: "Done", tone: "mint" },
                      { label: "Asset register locked", status: "Done", tone: "mint" },
                      { label: "Heir nominations updated", status: "In review", tone: "electric" },
                      { label: "Probate readiness", status: "Pending", tone: "muted" },
                    ] as const
                  ).map((row, i) => (
                    <TimelineRow key={i} {...row} />
                  ))}
                </div>
              </div>

              <div className="col-span-12 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 md:col-span-5">
                <div className="text-[12px] uppercase tracking-[0.16em] text-white/40">
                  Coverage map
                </div>
                <div className="mt-3 grid grid-cols-3 gap-1.5">
                  {["MUM", "DEL", "BLR", "CHE", "HYD", "PUN", "KOL", "AMD", "KOC"].map((c) => (
                    <div
                      key={c}
                      className="grid place-items-center rounded-md border border-white/[0.06] bg-white/[0.02] py-2 text-[11px] font-medium text-white/65"
                    >
                      {c}
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-md border border-mint/20 bg-mint/[0.06] p-2.5 text-[11px] text-mint-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_8px_rgba(34,232,155,0.7)]" />
                  Pan-India coverage active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  bar,
  accent,
  className,
}: {
  label: string;
  value: string;
  bar: number;
  accent: "mint" | "electric";
  className?: string;
}) {
  return (
    <div className={`rounded-lg border border-white/[0.06] bg-white/[0.02] p-3.5 ${className ?? ""}`}>
      <div className="text-[11px] uppercase tracking-[0.14em] text-white/45">{label}</div>
      <div className="mt-2 flex items-end justify-between">
        <div className="text-[22px] font-medium tracking-tight text-white">{value}</div>
        <div
          className={`text-[11px] font-medium ${
            accent === "mint" ? "text-mint" : "text-electric-300"
          }`}
        >
          +12%
        </div>
      </div>
      <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className={`h-full rounded-full ${
            accent === "mint" ? "bg-mint" : "bg-electric"
          }`}
          style={{ width: `${bar}%` }}
        />
      </div>
    </div>
  );
}

function TimelineRow({
  label,
  status,
  tone,
}: {
  label: string;
  status: string;
  tone: "mint" | "electric" | "muted";
}) {
  const dot =
    tone === "mint" ? "bg-mint shadow-[0_0_8px_rgba(34,232,155,0.7)]" : tone === "electric" ? "bg-electric shadow-[0_0_8px_rgba(46,99,255,0.7)]" : "bg-white/30";
  const pill =
    tone === "mint"
      ? "border-mint/20 bg-mint/[0.07] text-mint-100"
      : tone === "electric"
      ? "border-electric/30 bg-electric/[0.10] text-electric-200"
      : "border-white/10 bg-white/[0.04] text-white/55";
  return (
    <div className="flex items-center justify-between rounded-md border border-white/[0.05] bg-white/[0.02] px-3 py-2.5">
      <div className="flex items-center gap-2.5">
        <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
        <span className="text-[12.5px] text-white/80">{label}</span>
      </div>
      <span className={`rounded-full border px-2 py-0.5 text-[10.5px] ${pill}`}>{status}</span>
    </div>
  );
}
