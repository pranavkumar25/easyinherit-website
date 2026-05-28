import {
  FileSignature,
  Stamp,
  Home,
  ScrollText,
  Banknote,
  IdCard,
  Handshake,
  Scale,
  MessagesSquare,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { BackgroundFX } from "./ui/BackgroundFX";

export function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36">
      <BackgroundFX />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Services"
          tone="electric"
          title={
            <>
              Everything inheritance demands —{" "}
              <span className="gradient-text">on one platform.</span>
            </>
          }
          description="From planning a will to claiming an insurance policy, transferring an ancestral property to mediating a family dispute — handled with structure, sensitivity and modern coordination."
        />

        {/* Bento grid */}
        <div className="mt-16 grid grid-cols-12 gap-3">
          {/* Featured large card */}
          <FeatureCard
            className="col-span-12 lg:col-span-7 lg:row-span-2"
            badge="Foundation"
            title="Will Drafting & Estate Planning"
            description="Structure your intentions, identify key assets and reduce future confusion. The most important document a person creates for their family — built right, the first time."
            icon={FileSignature}
            tone="electric"
            visual={<EstateVisual />}
          />

          <Card
            className="col-span-12 sm:col-span-6 lg:col-span-5"
            title="Succession Certificates"
            description="Guidance on when it's needed, which assets require it, and how to navigate authorities."
            icon={Stamp}
            tag="02"
          />

          <Card
            className="col-span-12 sm:col-span-6 lg:col-span-5"
            title="Property Transfer After Death"
            description="Mutation, ownership, joint property, ancestral land — organised across states."
            icon={Home}
            tag="03"
            tone="mint"
          />

          <Card
            className="col-span-12 sm:col-span-6 lg:col-span-4"
            title="Probate & Administration"
            description="Demystified jurisdictions, paperwork and timelines."
            icon={ScrollText}
            tag="04"
          />

          <Card
            className="col-span-12 sm:col-span-6 lg:col-span-4"
            title="Death Claims"
            description="Banks, insurance, mutual funds, pension — coordinated end-to-end."
            icon={Banknote}
            tag="05"
            badge="Most requested"
            tone="mint"
          />

          <Card
            className="col-span-12 sm:col-span-6 lg:col-span-4"
            title="Legal Heir Documentation"
            description="Heirship, eligibility and entitlement — structured, ready, accepted."
            icon={IdCard}
            tag="06"
          />

          <Card
            className="col-span-12 sm:col-span-6 lg:col-span-4"
            title="Family Settlements"
            description="Multi-party coordination, communication and durable settlements."
            icon={Handshake}
            tag="07"
          />

          <Card
            className="col-span-12 sm:col-span-6 lg:col-span-4"
            title="Inheritance Disputes"
            description="Resolution-first support that protects relationships and time."
            icon={Scale}
            tag="08"
          />

          <Card
            className="col-span-12 sm:col-span-6 lg:col-span-4"
            title="Online Dispute Resolution"
            description="Structured mediation outside courtrooms. In partnership with Sama."
            icon={MessagesSquare}
            tag="09"
            badge="With Sama"
            tone="electric"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  className,
  title,
  description,
  badge,
  icon: Icon,
  tone = "electric",
  visual,
}: {
  className?: string;
  title: string;
  description: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  tone?: "electric" | "mint";
  visual?: React.ReactNode;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 backdrop-blur transition-all duration-300 hover:border-white/15 ${className ?? ""}`}
    >
      <div
        className={`absolute -inset-x-12 -top-32 h-72 ${
          tone === "mint" ? "bg-mint/15" : "bg-electric/20"
        } opacity-60 blur-3xl`}
      />
      <div className="relative flex h-full flex-col justify-between gap-8">
        <div className="flex items-start justify-between">
          <div
            className={`grid h-12 w-12 place-items-center rounded-xl ${
              tone === "mint" ? "bg-mint/15 text-mint" : "bg-electric/15 text-electric-300"
            }`}
          >
            <Icon className="h-5.5 w-5.5" />
          </div>
          {badge && (
            <span
              className={`rounded-full border px-2.5 py-1 text-[10.5px] uppercase tracking-[0.14em] ${
                tone === "mint"
                  ? "border-mint/30 bg-mint/[0.08] text-mint-100"
                  : "border-electric/30 bg-electric/[0.08] text-electric-200"
              }`}
            >
              {badge}
            </span>
          )}
        </div>

        {visual && <div className="-mx-2">{visual}</div>}

        <div>
          <h3 className="text-2xl font-medium tracking-tight text-white sm:text-[28px]">
            {title}
          </h3>
          <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-white/55">
            {description}
          </p>
          <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-white/80">
            Explore service
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({
  className,
  title,
  description,
  badge,
  icon: Icon,
  tag,
  tone = "default",
}: {
  className?: string;
  title: string;
  description: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  tone?: "default" | "mint" | "electric";
}) {
  const iconBg =
    tone === "mint"
      ? "bg-mint/15 text-mint"
      : tone === "electric"
      ? "bg-electric/15 text-electric-300"
      : "bg-white/[0.06] text-white/80";
  const badgePill =
    tone === "mint"
      ? "border-mint/30 bg-mint/[0.08] text-mint-100"
      : "border-electric/30 bg-electric/[0.08] text-electric-200";

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04] ${className ?? ""}`}
    >
      <div className="flex h-full flex-col justify-between gap-8">
        <div className="flex items-start justify-between">
          <div className={`grid h-10 w-10 place-items-center rounded-lg ${iconBg}`}>
            <Icon className="h-4.5 w-4.5" />
          </div>
          {badge ? (
            <span className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] ${badgePill}`}>
              {badge}
            </span>
          ) : (
            <span className="text-[11px] font-medium tracking-[0.16em] text-white/30">
              {tag}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-[17px] font-medium tracking-tight text-white">{title}</h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-white/55">{description}</p>
        </div>
      </div>
    </div>
  );
}

function EstateVisual() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-midnight-300/60 p-4">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-7 space-y-2">
          {[
            { label: "Primary residence — Mumbai", val: "₹3.2 Cr", tone: "mint" },
            { label: "Equity portfolio", val: "₹86 L", tone: "electric" },
            { label: "Insurance & EPF", val: "₹42 L", tone: "mint" },
            { label: "Ancestral land — Pune", val: "₹1.1 Cr", tone: "electric" },
          ].map((row, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-md border border-white/[0.05] bg-white/[0.02] px-3 py-2.5"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    row.tone === "mint"
                      ? "bg-mint shadow-[0_0_8px_rgba(34,232,155,0.7)]"
                      : "bg-electric shadow-[0_0_8px_rgba(46,99,255,0.7)]"
                  }`}
                />
                <span className="text-[12.5px] text-white/80">{row.label}</span>
              </div>
              <span className="text-[12.5px] font-medium text-white/90">{row.val}</span>
            </div>
          ))}
        </div>

        <div className="col-span-5 rounded-md border border-white/[0.06] bg-white/[0.02] p-3">
          <div className="text-[11px] uppercase tracking-[0.14em] text-white/40">
            Will status
          </div>
          <div className="mt-2 text-2xl font-medium tracking-tight text-white">
            Active
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-mint">
            <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_8px_rgba(34,232,155,0.7)]" />
            Validated · Sep 2025
          </div>
          <div className="mt-4 space-y-1.5">
            {["Executor assigned", "Witnesses on record", "Vault locked"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-[11.5px] text-white/65">
                <div className="grid h-4 w-4 place-items-center rounded-full bg-mint/20 text-mint">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
