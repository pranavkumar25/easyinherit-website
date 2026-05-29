import { AlertTriangle, Files, Clock, Users } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { BackgroundFX } from "./ui/BackgroundFX";

const stats = [
  {
    icon: AlertTriangle,
    value: "75%",
    label: "of Indian families don't have a structured will",
    accent: "electric",
  },
  {
    icon: Files,
    value: "9+",
    label: "institutions a family must coordinate after a death",
    accent: "mint",
  },
  {
    icon: Clock,
    value: "2-5 yrs",
    label: "average time to settle property without preparation",
    accent: "electric",
  },
  {
    icon: Users,
    value: "₹128T",
    label: "wealth transferring across generations in India",
    accent: "mint",
  },
] as const;

export function Problem() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32">
      <BackgroundFX variant="section" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="The Transition"
          tone="mint"
          title={
            <>
              India's largest <span className="mint-text">wealth transfer</span>
              <br /> has already begun.
            </>
          }
          description="Property, savings, investments, insurance and family businesses are quietly moving between generations, yet inheritance preparedness remains the most overlooked part of Indian financial planning."
        />

        <div className="mt-12 sm:mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]"
              >
                <div
                  className={`grid h-10 w-10 place-items-center rounded-xl ${
                    s.accent === "mint" ? "bg-mint/15 text-mint" : "bg-electric/15 text-electric-300"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-6 text-4xl font-medium tracking-tighter2 text-white">
                  {s.value}
                </div>
                <div className="mt-3 text-[13.5px] leading-relaxed text-white/55">
                  {s.label}
                </div>
                <div
                  className={`pointer-events-none absolute inset-x-0 -bottom-px h-px ${
                    s.accent === "mint"
                      ? "bg-gradient-to-r from-transparent via-mint/40 to-transparent"
                      : "bg-gradient-to-r from-transparent via-electric/40 to-transparent"
                  } opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
