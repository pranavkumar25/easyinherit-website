import {
  ArrowRight,
  Sparkles,
  MessageCircle,
  FileSignature,
  Globe2,
  ShieldCheck,
  TrendingUp,
  Stamp,
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
      className="relative isolate overflow-hidden pb-20 pt-24 sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-36"
    >
      <HeroBackdrop />

      {/* Floating UI-style decorations — desktop+ only */}
      <FloatingDecorations />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Eyebrow */}
          <Eyebrow tone="mint">
            <Sparkles className="h-3 w-3" />
            Now serving PAN India &amp; NRIs globally
          </Eyebrow>

          {/* Headline */}
          <h1 className="mt-7 text-balance text-[clamp(44px,8.4vw,112px)] font-medium leading-[0.96] tracking-tightest text-white sm:mt-8">
            <span className="glow-text">Inheritance,</span>
            <br />
            <span className="gradient-text">simplified for life.</span>
          </h1>

          {/* Deck */}
          <p className="mt-7 max-w-2xl text-pretty text-[16px] leading-relaxed text-white/65 sm:mt-8 sm:text-[17.5px]">
            EasyInherit is the Indian inheritance platform for
            wills, succession, property transfer, death claims, and dispute
            resolution. One platform. Zero confusion. Built for families and NRIs.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
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

        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────
   HERO BACKDROP — grid-led, clean
   - Strong grid pattern with radial fade
   - Subtle centred glow (light source, not "weird gradient")
   - Bottom fade
   ─────────────────────────────────────────────────────────── */

function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      {/* Big grid */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(75%_70%_at_50%_42%,black,transparent_90%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Subtle centred light source (very faint, not gradient blob) */}
      <div className="absolute left-1/2 top-[28%] h-[420px] w-[820px] max-w-[140vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(46,99,255,0.20),rgba(34,232,155,0.10)_50%,transparent_80%)] blur-[20px]" />

      {/* Top hairline */}
      <div className="absolute inset-x-20 top-16 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-midnight" />
    </div>
  );
}

/* ───────────────────────────────────────────────────────────
   FLOATING UI DECORATIONS — cards, pills, buttons scattered
   ─────────────────────────────────────────────────────────── */

function FloatingDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      {/* ─── Tablet + Desktop (md+): 4 corner pills/badges ─── */}

      {/* Top-left — mini Stamp badge */}
      <Floating className="left-[5%] top-[7%]" rotate="-rotate-[6deg]" delay="-2.0s">
        <MiniBadge icon={Stamp} tone="electric" />
      </Floating>

      {/* Top-right — Pan-India · Active pill */}
      <Floating className="right-[5%] top-[7%]" rotate="rotate-[5deg]" delay="-1.6s">
        <StatusPill icon={Globe2} label="Pan-India · Active" tone="mint" />
      </Floating>

      {/* Bottom-left — Trend pill */}
      <Floating className="bottom-[10%] left-[6%]" rotate="-rotate-[3deg]" delay="-4.2s">
        <TrendPill />
      </Floating>

      {/* Bottom-right — Verified pill */}
      <Floating className="bottom-[10%] right-[6%]" rotate="rotate-[4deg]" delay="-1.0s">
        <StatusPill icon={ShieldCheck} label="Verified · Sama" tone="electric" />
      </Floating>

      {/* ─── Large desktop (xl+) only: bigger cards in the side padding ─── */}

      {/* Top-far-left — Stat card */}
      <Floating className="left-[3%] top-[22%] hidden xl:block" rotate="-rotate-[5deg]" delay="-0.4s">
        <StatCard />
      </Floating>

      {/* Top-far-right — NRI icon button card */}
      <Floating className="right-[3%] top-[22%] hidden xl:block" rotate="rotate-[5deg]" delay="-3.4s">
        <IconButtonCard icon={Globe2} label="NRI" sub="8 countries" tone="mint" />
      </Floating>

      {/* Bottom-far-left — Wills icon button card */}
      <Floating className="bottom-[26%] left-[3%] hidden xl:block" rotate="rotate-[4deg]" delay="-2.6s">
        <IconButtonCard icon={FileSignature} label="Wills" sub="Drafted" tone="electric" />
      </Floating>

      {/* Bottom-far-right — Mini Shield badge */}
      <Floating className="bottom-[28%] right-[3%] hidden xl:block" rotate="-rotate-[6deg]" delay="-3.0s">
        <MiniBadge icon={ShieldCheck} tone="mint" />
      </Floating>
    </div>
  );
}

function Floating({
  children,
  className,
  rotate,
  delay,
}: {
  children: React.ReactNode;
  className: string;
  rotate: string;
  delay: string;
}) {
  return (
    <div className={`absolute ${className} ${rotate}`}>
      <div className="animate-float-soft" style={{ animationDelay: delay }}>
        {children}
      </div>
    </div>
  );
}

/* ─── Stat card (top-left) ─── */
function StatCard() {
  return (
    <div className="relative w-[180px] overflow-hidden rounded-2xl border border-white/[0.12] bg-midnight-200/85 p-4 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="pointer-events-none absolute -inset-x-4 -top-12 h-24 rounded-full bg-mint/20 opacity-60 blur-2xl" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-mint/15 text-mint">
            <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.4} />
          </div>
          <div className="flex items-center gap-0.5 text-[10.5px] font-medium text-mint">
            <TrendingUp className="h-3 w-3" />
            <span className="font-mono">+18</span>
          </div>
        </div>
        <div className="mt-3">
          <div className="text-[10.5px] uppercase tracking-[0.14em] text-white/45">
            Estates Vaulted
          </div>
          <div className="mt-0.5 font-mono text-[22px] font-semibold tracking-tight text-white">
            247+
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Icon button card (mid floats) ─── */
function IconButtonCard({
  icon: Icon,
  label,
  sub,
  tone,
}: {
  icon: LucideIcon;
  label: string;
  sub: string;
  tone: "electric" | "mint";
}) {
  const accent =
    tone === "mint"
      ? "border-mint/30 bg-mint/[0.10] text-mint"
      : "border-electric/40 bg-electric/[0.12] text-electric-200";
  const glow =
    tone === "mint"
      ? "shadow-[0_20px_45px_-18px_rgba(34,232,155,0.5)]"
      : "shadow-[0_20px_45px_-18px_rgba(46,99,255,0.55)]";

  return (
    <div
      className={`relative inline-flex items-center gap-2.5 rounded-2xl border border-white/[0.12] bg-midnight-200/85 px-3 py-2.5 backdrop-blur-xl ${glow}`}
    >
      <div className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className={`grid h-9 w-9 place-items-center rounded-xl border ${accent}`}>
        <Icon className="h-4 w-4" strokeWidth={2.2} />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[12.5px] font-semibold text-white">{label}</span>
        <span className="text-[10.5px] text-white/55">{sub}</span>
      </div>
    </div>
  );
}

/* ─── Status pill (Sama / Pan-India / etc.) ─── */
function StatusPill({
  icon: Icon,
  label,
  tone,
}: {
  icon: LucideIcon;
  label: string;
  tone: "mint" | "electric";
}) {
  const accent =
    tone === "mint"
      ? "border-mint/35 bg-mint/[0.12] text-mint shadow-[0_12px_30px_-12px_rgba(34,232,155,0.55)]"
      : "border-electric/45 bg-electric/[0.16] text-electric-200 shadow-[0_12px_30px_-12px_rgba(46,99,255,0.55)]";
  const iconBg =
    tone === "mint" ? "bg-mint text-midnight" : "bg-electric text-midnight";
  const dotColor = tone === "mint" ? "bg-mint" : "bg-electric";
  const dotShadow =
    tone === "mint"
      ? "shadow-[0_0_8px_rgba(34,232,155,0.9)]"
      : "shadow-[0_0_8px_rgba(46,99,255,0.9)]";

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] font-medium backdrop-blur-xl ${accent}`}
    >
      <div className={`grid h-5 w-5 place-items-center rounded-full ${iconBg}`}>
        <Icon className="h-2.5 w-2.5" strokeWidth={2.5} />
      </div>
      <span>{label}</span>
      <span className={`h-1.5 w-1.5 animate-pulse-slow rounded-full ${dotColor} ${dotShadow}`} />
    </div>
  );
}

/* ─── Trend pill (+18 this month) ─── */
function TrendPill() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-mint/35 bg-mint/[0.10] px-3 py-1.5 text-[12px] font-medium text-mint shadow-[0_12px_30px_-12px_rgba(34,232,155,0.5)] backdrop-blur-xl">
      <TrendingUp className="h-3.5 w-3.5" />
      <span className="font-mono">+18 this month</span>
    </div>
  );
}

/* ─── Small icon-only badge ─── */
function MiniBadge({
  icon: Icon,
  tone,
}: {
  icon: LucideIcon;
  tone: "mint" | "electric";
}) {
  const accent =
    tone === "mint"
      ? "border-mint/35 bg-mint/[0.12] text-mint shadow-[0_0_24px_-8px_rgba(34,232,155,0.6)]"
      : "border-electric/45 bg-electric/[0.14] text-electric-200 shadow-[0_0_24px_-8px_rgba(46,99,255,0.6)]";
  return (
    <div className={`grid h-9 w-9 place-items-center rounded-xl border backdrop-blur-xl ${accent}`}>
      <Icon className="h-3.5 w-3.5" strokeWidth={2.4} />
    </div>
  );
}
