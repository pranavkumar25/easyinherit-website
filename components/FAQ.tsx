"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./ui/SectionHeader";
import { BackgroundFX } from "./ui/BackgroundFX";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How can I make a will in India?",
    a: "EasyInherit assists families with will-related planning and inheritance preparedness — from organising assets and intentions to structuring a will that reflects family realities, jurisdictions and execution requirements.",
  },
  {
    q: "What happens if someone dies without a will?",
    a: "Families may require succession certificates, legal heir documentation, probate-related procedures or additional institutional coordination. We help identify which pathway applies and navigate it step by step.",
  },
  {
    q: "What is a succession certificate?",
    a: "A legal document commonly used for claiming certain movable assets after a person's death, where succession validation may be required by banks, institutions or financial intermediaries.",
  },
  {
    q: "How do I transfer inherited property in India?",
    a: "Property transfer after death may involve mutation procedures, wills, family settlements, succession documentation, probate-related processes and coordination with state authorities, housing societies and registrars.",
  },
  {
    q: "Can NRIs manage inheritance matters remotely?",
    a: "Yes. EasyInherit supports NRIs and global Indian families dealing with inheritance matters connected to India — across the US, UK, UAE, Singapore, Canada, Australia, Europe and the Middle East.",
  },
  {
    q: "Can inheritance disputes be resolved without lengthy litigation?",
    a: "Many disputes benefit from mediation and Online Dispute Resolution (ODR) — protecting both relationships and time. We offer this through our association with Sama.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 lg:py-36">
      <BackgroundFX />
      <div className="relative mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="FAQ"
          tone="electric"
          title={
            <>
              The questions families <span className="gradient-text">quietly carry.</span>
            </>
          }
          description="Plain answers to the questions we hear most often."
        />

        <div className="mt-16 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={cn(
                  "border-b border-white/[0.06] last:border-b-0 transition-colors",
                  isOpen && "bg-white/[0.02]"
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
                >
                  <span className="text-[16px] font-medium tracking-tight text-white">
                    {f.q}
                  </span>
                  <span
                    className={cn(
                      "grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] transition-all",
                      isOpen && "rotate-45 border-mint/40 bg-mint/[0.10] text-mint"
                    )}
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-white/60">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
