import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import { Button } from "./ui/Button";
import { BookingTrigger } from "./BookingTrigger";
import { Eyebrow } from "./ui/Eyebrow";
import { BackgroundFX } from "./ui/BackgroundFX";
import { CONTACT } from "@/lib/contact";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-16">
      <BackgroundFX variant="hero" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:pt-28">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ── Left: text ── */}
          <div className="lg:col-span-7">
            <Eyebrow tone="mint">
              <Sparkles className="h-3 w-3" />
              Now serving PAN India &amp; NRIs globally
            </Eyebrow>

            <h1 className="mt-5 text-balance text-[clamp(36px,7vw,78px)] font-medium leading-[1.0] tracking-tightest text-white sm:mt-6">
              <span className="glow-text">Inheritance,</span>
              <br />
              <span className="gradient-text">simplified for life.</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-[15.5px] leading-relaxed text-white/65 sm:mt-7 sm:text-[16.5px]">
              EasyInherit is the Indian inheritance platform for
              wills, succession, property transfer, death claims, and dispute
              resolution. One platform. Zero confusion. Built for families and NRIs.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <BookingTrigger variant="mint" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                To claim your inheritance
              </BookingTrigger>
              <Button href={CONTACT.whatsapp} variant="ghost" size="lg" icon={<MessageCircle className="h-4 w-4" />}>
                {CONTACT.phone}
              </Button>
            </div>
          </div>

          {/* ── Right: bento composition ── */}
          <div className="lg:col-span-5">
            <HeroBento />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────
   HERO BENTO
   Reference: Synflow-style 3-card bento.
   - Card 1 (wide top, dark) — Vault / Trust statement
   - Card 2 (square, vivid mint) — Coverage with 3D illustration
   - Card 3 (square, light glass) — Stat with 3D bar chart
   ─────────────────────────────────────────────────────────── */

function HeroBento() {
  return (
    <div className="mx-auto grid w-full max-w-[560px] grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
      <VaultCard />
      <CoverageCard />
      <GrowthCard />
    </div>
  );
}

/* ─────────── CARD 1 — Vault (dark, wide) ─────────── */
function VaultCard() {
  return (
    <div className="relative aspect-[5/3] overflow-hidden rounded-[24px] border border-white/[0.07] bg-[linear-gradient(160deg,#0E1632_0%,#0A0F22_55%,#0B1230_100%)] p-5 shadow-[0_24px_60px_-20px_rgba(46,99,255,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] sm:col-span-2 sm:aspect-[16/8] sm:p-6">

      {/* Top-right star dots */}
      <div
        className="absolute inset-0 [mask-image:linear-gradient(135deg,transparent_45%,black_100%)]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(34,232,155,0.40) 0.8px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Soft inner glow */}
      <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full bg-mint/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-electric/25 blur-3xl" />

      {/* Centered emblem */}
      <div className="relative flex h-full items-center gap-4 sm:gap-6">
        <div className="relative flex-shrink-0">
          {/* Concentric rings */}
          <div className="relative grid h-[78px] w-[78px] place-items-center sm:h-[96px] sm:w-[96px]">
            <div className="absolute inset-0 rounded-full bg-mint/[0.06] ring-1 ring-inset ring-mint/15" />
            <div className="absolute inset-3 rounded-full bg-mint/[0.10] ring-1 ring-inset ring-mint/25" />
            <div className="absolute inset-6 rounded-full bg-mint/[0.16] ring-1 ring-inset ring-mint/35" />

            {/* Shield */}
            <div className="relative grid h-[36px] w-[36px] place-items-center rounded-full bg-gradient-to-br from-mint to-mint-500 text-midnight shadow-[0_0_30px_rgba(34,232,155,0.7),inset_0_1px_0_rgba(255,255,255,0.5)] sm:h-[44px] sm:w-[44px]">
              <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
            </div>

            {/* Sparkles around */}
            <Sparkle className="absolute -right-2 top-1 h-2 w-2 text-mint" />
            <Sparkle className="absolute -left-1 bottom-2 h-1.5 w-1.5 text-mint/70" />
            <Sparkle className="absolute right-2 -bottom-1 h-2.5 w-2.5 text-mint" />
          </div>
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1">
          <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-mint/80 sm:text-[10.5px]">
            Estate Vault
          </div>
          <div className="mt-2 text-[18px] font-medium leading-[1.15] tracking-tight text-mint-50 sm:text-[22px] lg:text-[24px]">
            Witnessed wills.
            <br />
            Verified transfers.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────── CARD 2 — Coverage (vibrant mint) ─────────── */
function CoverageCard() {
  return (
    <div className="relative aspect-square overflow-hidden rounded-[24px] bg-[linear-gradient(160deg,#22E89B_0%,#16C783_50%,#0FA169_100%)] p-5 shadow-[0_24px_60px_-20px_rgba(34,232,155,0.55),inset_0_1px_0_rgba(255,255,255,0.5)]">

      {/* Subtle inner texture */}
      <div
        className="absolute inset-0 opacity-[0.16] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Top edge sheen */}
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

      {/* 3D documents illustration */}
      <div className="relative flex h-[58%] items-center justify-center">
        <DocumentsIllustration />
        {/* Sparkles */}
        <Sparkle className="absolute right-6 top-2 h-3.5 w-3.5 text-white/80" />
        <Sparkle className="absolute left-4 bottom-6 h-2.5 w-2.5 text-white/65" />
        <Sparkle className="absolute right-12 bottom-2 h-2 w-2 text-white/70" />
      </div>

      {/* Text */}
      <div className="relative mt-2">
        <div className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-midnight/65">
          Coverage
        </div>
        <div className="mt-2 text-[17px] font-semibold leading-[1.2] tracking-tight text-midnight">
          Pan-India.
          <br />
          8 NRI countries.
        </div>
      </div>
    </div>
  );
}

/* ─────────── CARD 3 — Growth stat (light glass) ─────────── */
function GrowthCard() {
  return (
    <div className="relative aspect-square overflow-hidden rounded-[24px] border border-white/[0.10] bg-gradient-to-br from-mint-50/[0.10] via-white/[0.07] to-mint-50/[0.06] p-5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.20)] backdrop-blur-xl">

      {/* Inner glow */}
      <div className="pointer-events-none absolute -inset-x-4 -top-12 h-32 rounded-full bg-mint/15 opacity-70 blur-2xl" />

      {/* Top */}
      <div className="relative">
        <div className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/55">
          Estates Vaulted
        </div>
        <div className="mt-1.5 font-mono text-[32px] font-semibold leading-none tracking-tight text-white">
          247+
        </div>
        <div className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-medium text-mint">
          <TrendingUp className="h-3 w-3" />
          <span className="font-mono">+18 this month</span>
        </div>
      </div>

      {/* 3D cylinder bar chart — fixed-height container so cylinders compute correctly */}
      <div className="absolute bottom-5 left-5 right-5 flex h-[42%] items-end justify-around gap-3">
        <Cylinder heightPct={48} />
        <Cylinder heightPct={70} />
        <Cylinder heightPct={94} highlight />
      </div>
    </div>
  );
}

/* ─────────── Helpers ─────────── */

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0 L13.5 9 L22 12 L13.5 15 L12 24 L10.5 15 L2 12 L10.5 9 Z" opacity="0.95" />
    </svg>
  );
}

function DocumentsIllustration() {
  return (
    <svg viewBox="0 0 180 130" className="h-full w-auto">
      <defs>
        <linearGradient id="docBack" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.10" />
        </linearGradient>
        <linearGradient id="docMid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="docFront" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#F2FFF8" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#E0FFEF" stopOpacity="0.88" />
        </linearGradient>
        <radialGradient id="sealRad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1E3A2E" />
          <stop offset="100%" stopColor="#0A0F22" />
        </radialGradient>
        <filter id="docShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#0A0F22" floodOpacity="0.20" />
        </filter>
      </defs>

      {/* Document 3 — back */}
      <g transform="translate(40 20) rotate(-12 35 50)" filter="url(#docShadow)">
        <rect x="0" y="0" width="70" height="92" rx="5" fill="url(#docBack)" stroke="rgba(10,15,34,0.10)" strokeWidth="0.6" />
        <line x1="10" y1="20" x2="58" y2="20" stroke="rgba(10,15,34,0.18)" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="10" y1="32" x2="50" y2="32" stroke="rgba(10,15,34,0.14)" strokeWidth="1" strokeLinecap="round" />
        <line x1="10" y1="42" x2="54" y2="42" stroke="rgba(10,15,34,0.14)" strokeWidth="1" strokeLinecap="round" />
      </g>

      {/* Document 2 — middle */}
      <g transform="translate(60 12) rotate(4 35 50)" filter="url(#docShadow)">
        <rect x="0" y="0" width="70" height="96" rx="5" fill="url(#docMid)" stroke="rgba(10,15,34,0.12)" strokeWidth="0.6" />
        <line x1="10" y1="22" x2="60" y2="22" stroke="rgba(10,15,34,0.22)" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="10" y1="34" x2="50" y2="34" stroke="rgba(10,15,34,0.16)" strokeWidth="1" strokeLinecap="round" />
        <line x1="10" y1="44" x2="56" y2="44" stroke="rgba(10,15,34,0.16)" strokeWidth="1" strokeLinecap="round" />
        <line x1="10" y1="54" x2="42" y2="54" stroke="rgba(10,15,34,0.16)" strokeWidth="1" strokeLinecap="round" />
      </g>

      {/* Document 1 — front, prominent with seal */}
      <g transform="translate(54 22)" filter="url(#docShadow)">
        <rect x="0" y="0" width="76" height="100" rx="6" fill="url(#docFront)" stroke="rgba(10,15,34,0.15)" strokeWidth="0.7" />
        {/* Top highlight */}
        <rect x="2" y="2" width="72" height="2" rx="1" fill="rgba(255,255,255,0.7)" />
        {/* Header underline */}
        <line x1="12" y1="22" x2="64" y2="22" stroke="#0A0F22" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
        {/* Body lines */}
        <line x1="12" y1="34" x2="56" y2="34" stroke="#0A0F22" strokeWidth="1.1" strokeLinecap="round" opacity="0.45" />
        <line x1="12" y1="44" x2="62" y2="44" stroke="#0A0F22" strokeWidth="1.1" strokeLinecap="round" opacity="0.45" />
        <line x1="12" y1="54" x2="48" y2="54" stroke="#0A0F22" strokeWidth="1.1" strokeLinecap="round" opacity="0.45" />
        {/* Seal */}
        <g transform="translate(50 70)">
          <circle cx="0" cy="0" r="11" fill="url(#sealRad)" stroke="#0A0F22" strokeWidth="0.6" opacity="0.9" />
          <circle cx="0" cy="0" r="7.5" fill="none" stroke="rgba(34,232,155,0.55)" strokeWidth="0.6" strokeDasharray="1.5 2" />
          <path d="M-3 0 L-1 2 L3 -2.5" stroke="#22E89B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
        {/* Signature swoosh */}
        <path d="M12 84 C 18 78, 22 88, 28 82 S 34 82, 38 86" stroke="#0A0F22" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.65" />
      </g>
    </svg>
  );
}

function Cylinder({ heightPct, highlight = false }: { heightPct: number; highlight?: boolean }) {
  return (
    <div
      className="relative shrink-0 w-[36px]"
      style={{ height: `${heightPct}%` }}
    >
      {/* Bottom ellipse — grounding shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-[10px] rounded-[50%] bg-[#0A4A30]" />

      {/* Cylindrical body with horizontal gradient (dark-light-dark = curvature) */}
      <div
        className="absolute inset-x-0 top-[5px] bottom-[5px]"
        style={{
          background:
            "linear-gradient(90deg, #0B5C3C 0%, #16C783 40%, #22E89B 58%, #0FA169 100%)",
          boxShadow: highlight
            ? "0 14px 32px -6px rgba(34,232,155,0.65)"
            : "0 10px 26px -8px rgba(34,232,155,0.45)",
        }}
      >
        {/* Specular highlight on the left side */}
        <div className="absolute top-1 bottom-1 left-[5px] w-[3px] rounded-full bg-white/55" />
      </div>

      {/* Top ellipse — catches light */}
      <div
        className="absolute top-0 left-0 right-0 h-[10px] rounded-[50%]"
        style={{
          background:
            "linear-gradient(90deg, #16C783 0%, #83F5C2 30%, #BBFCDE 55%, #4FEDA8 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.85)",
        }}
      />
    </div>
  );
}
