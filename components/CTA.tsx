import { Phone, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { BackgroundFX } from "./ui/BackgroundFX";

export function CTA() {
  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-b from-midnight-200 to-midnight-400 p-10 lg:p-16">
          <BackgroundFX variant="cta" />

          <div className="relative grid gap-12 lg:grid-cols-5 lg:items-end">
            <div className="lg:col-span-3">
              <Eyebrow tone="mint">Get started</Eyebrow>
              <h2 className="mt-6 text-balance text-[clamp(36px,5.5vw,68px)] font-medium leading-[1] tracking-tightest text-white">
                Let&apos;s simplify inheritance for
                <br />
                <span className="gradient-text">your family.</span>
              </h2>
              <p className="mt-6 max-w-xl text-pretty text-[15.5px] leading-relaxed text-white/65">
                Whether you&apos;re drafting your first will, organising documents,
                claiming an asset, or navigating an inheritance from across the world —
                our team will help you take the next step with clarity.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button
                  href="#"
                  variant="mint"
                  size="lg"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Book a consultation
                </Button>
                <Button
                  href="https://wa.me/919902435733"
                  variant="ghost"
                  size="lg"
                  icon={<MessageCircle className="h-4 w-4" />}
                >
                  WhatsApp us
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-midnight-200/70 backdrop-blur-xl">
                <ContactRow
                  icon={Phone}
                  label="Call or WhatsApp"
                  value="+91 99024 35733"
                  href="tel:+919902435733"
                  tone="electric"
                />
                <div className="hairline mx-5" />
                <ContactRow
                  icon={Mail}
                  label="Email"
                  value="info@easyinherit.in"
                  href="mailto:info@easyinherit.in"
                  tone="mint"
                />
                <div className="hairline mx-5" />
                <div className="p-5">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                    Get guidance on
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {[
                      "Wills",
                      "Succession",
                      "Property",
                      "Probate",
                      "NRI",
                      "Mediation",
                      "Claims",
                    ].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11.5px] text-white/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  tone,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  tone: "mint" | "electric";
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 p-5 transition-colors hover:bg-white/[0.03]"
    >
      <div
        className={`grid h-11 w-11 place-items-center rounded-xl ${
          tone === "mint" ? "bg-mint/15 text-mint" : "bg-electric/15 text-electric-300"
        }`}
      >
        <Icon className="h-4.5 w-4.5" />
      </div>
      <div className="flex flex-1 flex-col">
        <span className="text-[10.5px] uppercase tracking-[0.18em] text-white/40">
          {label}
        </span>
        <span className="text-[15px] font-medium text-white">{value}</span>
      </div>
      <ArrowRight className="h-4 w-4 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:text-white" />
    </a>
  );
}
