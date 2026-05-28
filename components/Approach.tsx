import { Workflow, ShieldCheck, MessagesSquare, FileCheck2, ArrowRight } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { BackgroundFX } from "./ui/BackgroundFX";

const steps = [
  {
    icon: Workflow,
    step: "01",
    title: "Discover",
    description:
      "We map your family situation — assets, heirs, nominations, jurisdiction and existing documents.",
  },
  {
    icon: FileCheck2,
    step: "02",
    title: "Organise",
    description:
      "Draft, file and verify what's missing. Wills, certificates, asset register, heir documentation.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Coordinate",
    description:
      "Manage transfers, claims and institutional follow-ups with one accountable team — across banks, insurers, registrars.",
  },
  {
    icon: MessagesSquare,
    step: "04",
    title: "Resolve",
    description:
      "Where conflict arises, lean into ODR and structured mediation — protecting both relationships and time.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="relative py-28 lg:py-36">
      <BackgroundFX />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="How it works"
          tone="electric"
          title={
            <>
              A clear path from <span className="gradient-text">first conversation</span>
              <br /> to final transfer.
            </>
          }
          description="Four structured stages designed to replace decades of fragmented, reactive inheritance handling — with one accountable, modern workflow."
        />

        <div className="relative mt-20 grid gap-4 lg:grid-cols-4">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative flex flex-col gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-midnight-200">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-electric/30 to-mint/20 blur-md opacity-70" />
                    <div className="relative grid h-full w-full place-items-center rounded-xl bg-gradient-to-br from-electric/20 to-mint/10 ring-1 ring-inset ring-white/10">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <span className="text-[12px] font-medium tracking-[0.18em] text-white/30">
                    {s.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-medium tracking-tight text-white">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/55">
                    {s.description}
                  </p>
                </div>

                {i < steps.length - 1 && (
                  <ArrowRight className="absolute right-[-14px] top-[44px] hidden h-5 w-5 text-white/30 lg:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
