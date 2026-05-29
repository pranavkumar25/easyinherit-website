import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
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
          <Eyebrow
            tone="mint"
            className="text-[10.5px] tracking-[0.1em] sm:text-xs sm:tracking-[0.18em]"
          >
            <Sparkles className="h-3 w-3 shrink-0" />
            <span>
              Serving clients across India &amp;{" "}
              <span className="whitespace-nowrap">
                NRI<span className="text-[0.75em]">s</span>
              </span>{" "}
              worldwide
            </span>
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
        </div>
      </div>
    </section>
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
