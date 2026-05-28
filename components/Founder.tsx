import { Quote } from "lucide-react";
import { Eyebrow } from "./ui/Eyebrow";
import { BackgroundFX } from "./ui/BackgroundFX";

export function Founder() {
  return (
    <section className="relative py-28 lg:py-36">
      <BackgroundFX />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 backdrop-blur sm:p-12 lg:p-16">
          <div className="absolute -top-32 left-1/2 h-56 w-[120%] -translate-x-1/2 bg-gradient-to-b from-electric/15 via-mint/10 to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-grid-sm opacity-[0.06] [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent_80%)]" />

          <div className="relative flex flex-col items-center text-center">
            <Eyebrow tone="electric">Founder's Vision</Eyebrow>
            <Quote className="mt-8 h-8 w-8 text-mint/70" />
            <blockquote className="mt-6 max-w-3xl text-balance text-[clamp(22px,2.8vw,34px)] font-medium leading-[1.25] tracking-tight text-white">
              "What should ideally be a structured transition often becomes a confusing
              and stressful administrative experience.{" "}
              <span className="gradient-text">EasyInherit was built to change that.</span>"
            </blockquote>

            <div className="mt-10 flex items-center gap-3">
              <div className="relative h-12 w-12">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric to-mint opacity-70 blur-md" />
                <div className="relative grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-electric to-mint text-sm font-semibold text-midnight">
                  SS
                </div>
              </div>
              <div className="text-left">
                <div className="text-[15px] font-medium text-white">Sejal Sheth</div>
                <div className="text-[12.5px] text-white/55">Founder, EasyInherit</div>
              </div>
            </div>

            <div className="mt-10 text-[12.5px] text-white/40">
              Co-developed with <span className="text-white/70">Soubir Bose</span> ·
              Associated with Sama, iCreate, IIT Madras Research Park, Agami, Vayah Vikas, Gen S
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
