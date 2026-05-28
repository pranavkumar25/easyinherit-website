import { Globe2, Clock4, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";

const countries = [
  "United States", "United Kingdom", "Canada", "Australia",
  "Singapore", "UAE", "Germany", "Saudi Arabia",
];

export function NRI() {
  return (
    <section id="nri" className="relative overflow-hidden py-28 lg:py-36">
      {/* Section-wide background */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent_80%)]" />
        <div className="orb left-[5%] top-[20%] h-[400px] w-[400px] bg-electric/25 opacity-50" />
        <div className="orb right-[5%] bottom-[10%] h-[400px] w-[400px] bg-mint/20 opacity-50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow tone="mint">For NRIs</Eyebrow>
            <h2 className="mt-6 text-balance text-[clamp(34px,5vw,60px)] font-medium leading-[1.02] tracking-tighter2 text-white">
              Manage your Indian inheritance
              <br />
              <span className="gradient-text">from anywhere in the world.</span>
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-white/60">
              Distance, time zones and procedural unfamiliarity turn even simple
              inheritance matters into long, uncertain projects. EasyInherit closes
              that gap — coordinating ageing parents&apos; affairs, property
              inheritance, succession documentation and asset transfers remotely.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <FeaturePill icon={Globe2} label="Global coverage" />
              <FeaturePill icon={Clock4} label="Time-zone aware" />
              <FeaturePill icon={FileCheck} label="State-specific" />
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {countries.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[13px] text-white/75 backdrop-blur transition-all hover:border-mint/30 hover:bg-mint/[0.05] hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_8px_rgba(34,232,155,0.7)]" />
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <Button href="#contact" variant="mint" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Talk to an NRI specialist
              </Button>
            </div>
          </div>

          <GlobeVisual />
        </div>
      </div>
    </section>
  );
}

function FeaturePill({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3.5 py-2.5">
      <div className="grid h-7 w-7 place-items-center rounded-md bg-electric/15 text-electric-300">
        <Icon className="h-3.5 w-3.5" />
      </div>
      <span className="text-[13px] font-medium text-white/80">{label}</span>
    </div>
  );
}

function GlobeVisual() {
  return (
    <div className="relative">
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-midnight-200 via-midnight-300 to-midnight-400">
        {/* Glow background */}
        <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-electric/30 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-mint/25 blur-3xl" />

        {/* Spinning conic */}
        <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full opacity-20 [background:conic-gradient(from_0deg,transparent_0%,rgba(46,99,255,0.5)_25%,transparent_50%,rgba(34,232,155,0.5)_75%,transparent_100%)] [mask-image:radial-gradient(closest-side,transparent_50%,black_70%)]" />

        {/* Concentric rings */}
        <div className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center">
          <Ring size={420} dashed />
          <Ring size={320} />
          <Ring size={220} dashed />
          <Ring size={120} />
        </div>

        {/* Center node */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative grid h-16 w-16 place-items-center">
            <div className="absolute inset-0 animate-pulse-slow rounded-full bg-mint/40 blur-xl" />
            <div className="relative grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-mint to-electric text-midnight shadow-[0_0_30px_rgba(34,232,155,0.6)]">
              <span className="text-sm font-bold">IN</span>
            </div>
          </div>
        </div>

        {/* Connection dots */}
        {[
          { top: "16%", left: "20%", label: "USA", tone: "electric" },
          { top: "20%", left: "62%", label: "UAE", tone: "mint" },
          { top: "55%", left: "12%", label: "CAN", tone: "electric" },
          { top: "62%", left: "70%", label: "SGP", tone: "mint" },
          { top: "78%", left: "30%", label: "AUS", tone: "electric" },
          { top: "32%", left: "82%", label: "UK", tone: "mint" },
        ].map((dot) => (
          <div
            key={dot.label}
            className="absolute flex items-center gap-1.5"
            style={{ top: dot.top, left: dot.left }}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                dot.tone === "mint"
                  ? "bg-mint shadow-[0_0_10px_rgba(34,232,155,0.8)]"
                  : "bg-electric shadow-[0_0_10px_rgba(46,99,255,0.8)]"
              }`}
            />
            <span className="rounded-md border border-white/10 bg-midnight-200/80 px-1.5 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur">
              {dot.label}
            </span>
          </div>
        ))}
      </div>

      {/* Stats footer */}
      <div className="absolute -bottom-5 left-1/2 grid w-[88%] -translate-x-1/2 grid-cols-3 overflow-hidden rounded-xl border border-white/10 bg-midnight-200/90 backdrop-blur-xl">
        {[
          { v: "8", l: "Countries" },
          { v: "24/7", l: "Coordination" },
          { v: "100%", l: "Remote" },
        ].map((s, i) => (
          <div
            key={s.l}
            className={`flex flex-col items-center gap-0.5 py-3 ${
              i !== 2 ? "border-r border-white/10" : ""
            }`}
          >
            <div className="text-base font-medium text-white">{s.v}</div>
            <div className="text-[10.5px] uppercase tracking-[0.14em] text-white/45">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Ring({ size, dashed = false }: { size: number; dashed?: boolean }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="col-start-1 row-start-1 rounded-full border border-white/10"
    >
      <div
        className={`h-full w-full rounded-full ${
          dashed ? "border border-dashed border-white/10" : ""
        }`}
      />
    </div>
  );
}
