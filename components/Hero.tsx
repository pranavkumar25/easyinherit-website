import {
  ArrowRight,
  Sparkles,
  MessageCircle,
  Globe2,
  ShieldCheck,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import { Button } from "./ui/Button";
import { BookingTrigger } from "./BookingTrigger";
import { Eyebrow } from "./ui/Eyebrow";
import { CONTACT } from "@/lib/contact";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28"
    >
      <HeroBackdrop />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Eyebrow */}
          <Eyebrow tone="mint">
            <Sparkles className="h-3 w-3" />
            Now serving Pan-India &amp; NRIs globally
          </Eyebrow>

          {/* Headline */}
          <h1 className="mt-5 text-balance text-[clamp(36px,8.4vw,112px)] font-medium leading-[0.98] tracking-tightest text-white sm:mt-6 sm:leading-[0.96]">
            <span className="glow-text">Inheritance,</span>
            <br />
            <span className="gradient-text">simplified for life.</span>
          </h1>

          {/* Deck */}
          <p className="mt-5 max-w-2xl text-pretty text-[16px] leading-relaxed text-white/65 sm:mt-6 sm:text-[17.5px]">
            EasyInherit is the Indian inheritance platform for
            wills, succession, property transfer, death claims, and dispute
            resolution. One platform. Zero confusion. Built for families and NRIs.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <BookingTrigger
              variant="mint"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              To claim your inheritance
            </BookingTrigger>
            <Button
              href={CONTACT.whatsapp}
              variant="ghost"
              size="lg"
              icon={<MessageCircle className="h-4 w-4" />}
            >
              {CONTACT.phone}
            </Button>
          </div>

          {/* Trust bar — cohesive inline metrics (replaces scattered floats) */}
          <TrustBar />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────
   TRUST BAR — centred metrics inside one subtle pill,
   hairline-separated. Wraps gracefully on mobile.
   ─────────────────────────────────────────────────────────── */

function TrustBar() {
  return (
    <div className="mt-8 sm:mt-10">
      <div className="mx-auto flex flex-col items-stretch gap-y-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-x-9 sm:px-8">
        <Metric icon={Landmark} tone="mint" value="247+" label="Estates handled" />
        <Divider />
        <Metric icon={Globe2} tone="electric" value="8" label="Countries served" />
        <Divider />
        <Metric icon={ShieldCheck} tone="mint" value="Sama" label="Verified partner" />
      </div>
    </div>
  );
}

function Divider() {
  return <span className="hidden h-8 w-px bg-white/10 sm:block" />;
}

function Metric({
  icon: Icon,
  tone,
  value,
  label,
}: {
  icon: LucideIcon;
  tone: "mint" | "electric";
  value: string;
  label: string;
}) {
  const accent =
    tone === "mint"
      ? "bg-mint/12 text-mint"
      : "bg-electric/15 text-electric-200";
  return (
    <div className="flex items-center gap-3">
      <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${accent}`}>
        <Icon className="h-4 w-4" strokeWidth={2.2} />
      </div>
      <div className="flex flex-col text-left leading-tight">
        <span className="text-[15px] font-semibold text-white">{value}</span>
        <span className="text-[11.5px] uppercase tracking-[0.12em] text-white/45">
          {label}
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────
   HERO BACKDROP — clean, light-led
   - Soft aurora glow as the light source
   - Faint grid that fades out toward the edges
   - Bottom fade into the next section
   ─────────────────────────────────────────────────────────── */

function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      {/* Aurora light source */}
      <div className="absolute left-1/2 top-[-10%] h-[560px] w-[920px] max-w-[150vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(46,99,255,0.22),rgba(34,232,155,0.10)_55%,transparent_80%)] blur-[40px]" />

      {/* Faint grid, fading toward the edges */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_38%,black,transparent_88%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-midnight" />
    </div>
  );
}
