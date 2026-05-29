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
  Check,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { BackgroundFX } from "./ui/BackgroundFX";

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-32">
      <BackgroundFX />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader
          eyebrow="Services"
          tone="electric"
          title={
            <>
              Everything inheritance demands.{" "}
              <span className="gradient-text">With us.</span>
            </>
          }
          description="From planning a will to claiming an insurance policy, transferring an ancestral property to mediating a family dispute, handled with structure, sensitivity and modern coordination."
        />

        {/* Bento grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-12 gap-4">
          {/* Featured large card */}
          <FeatureCard
            className="col-span-12 lg:col-span-7 lg:row-span-2"
            badge="Most requested"
            title="Property Transfer After Death"
            description="Mutation, ownership changes, joint property and ancestral land — organised and coordinated across states so the title reaches the right hands without confusion."
            icon={Home}
            tone="mint"
            features={[
              "Mutation & title transfer across municipalities",
              "Joint, ancestral & self-acquired property handling",
              "Multi-state coordination & documentation",
              "Updated heirship and ownership records",
            ]}
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
            title="Will Drafting & Estate Planning"
            description="Structure your intentions, identify key assets and reduce future confusion for your family."
            icon={FileSignature}
            tag="03"
            badge="Foundation"
            tone="electric"
          />

          <Card
            className="col-span-12 sm:col-span-6 lg:col-span-4"
            title="Letter of Administration"
            description="Demystified jurisdictions, paperwork and timelines."
            icon={ScrollText}
            tag="04"
          />

          <Card
            className="col-span-12 sm:col-span-6 lg:col-span-4"
            title="Death Claims"
            description="Banks, insurance, mutual funds, pension, coordinated end-to-end."
            icon={Banknote}
            tag="05"
            tone="mint"
          />

          <Card
            className="col-span-12 sm:col-span-6 lg:col-span-4"
            title="Legal Heir Documentation"
            description="Heirship, eligibility and entitlement, structured, ready, accepted."
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
  features,
}: {
  className?: string;
  title: string;
  description: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  tone?: "electric" | "mint";
  features?: string[];
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 backdrop-blur transition-all duration-300 hover:border-white/15 ${className ?? ""}`}
    >
      <div
        className={`pointer-events-none absolute -inset-x-12 -top-32 h-72 ${
          tone === "mint" ? "bg-mint/15" : "bg-electric/20"
        } opacity-60 blur-3xl`}
      />

      <div className="relative flex h-full flex-col">
        {/* Top: icon + badge */}
        <div className="flex items-start justify-between">
          <div
            className={`grid h-12 w-12 place-items-center rounded-xl ${
              tone === "mint" ? "bg-mint/15 text-mint" : "bg-electric/15 text-electric-300"
            }`}
          >
            <Icon className="h-5 w-5" />
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

        {/* Title + description */}
        <div className="mt-7">
          <h3 className="text-2xl font-medium leading-[1.15] tracking-tight text-white sm:text-[28px]">
            {title}
          </h3>
          <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-white/55">
            {description}
          </p>
        </div>

        {/* Feature list */}
        {features && features.length > 0 && (
          <ul className="mt-7 space-y-2.5">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2.5 text-[13.5px] leading-snug text-white/75"
              >
                <span
                  className={`mt-[3px] grid h-4 w-4 flex-shrink-0 place-items-center rounded-full ${
                    tone === "mint" ? "bg-mint/20 text-mint" : "bg-electric/20 text-electric-300"
                  }`}
                >
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>
        )}

        {/* CTA pinned to bottom */}
        <div className="mt-auto pt-7">
          <div className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/80">
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
      className={`group relative flex min-h-[210px] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04] ${className ?? ""}`}
    >
      {/* Top: icon + tag/badge */}
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

      {/* Title + description */}
      <div className="mt-5">
        <h3 className="text-[17px] font-medium leading-snug tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-white/55">
          {description}
        </p>
      </div>
    </div>
  );
}
