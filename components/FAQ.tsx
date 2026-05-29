"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./ui/SectionHeader";
import { BackgroundFX } from "./ui/BackgroundFX";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How do I better manage my assets and properties for my family?",
    a: "Record and create an asset portfolio and update it regularly. Write a Will to ensure proper allotment, disposal and distribution of your assets to your beneficiaries after death.",
  },
  {
    q: "Is mutation required if the property is inherited in India?",
    a: "Mutation is the process of transfer of the name of ownership of a property in the register of the municipal authority. When you inherit a property from someone (mostly from deceased parents), the title has to be transferred to your name for the records. This is required for payment of property taxes and transfer/application for utility connections in your name.",
  },
  {
    q: "What should I know about an Asset Portfolio?",
    a: "An Asset Portfolio is a repository where you keep a record of all your tangible and intangible assets. It contains details of your Bank Accounts, Securities, Bonds, Movable and Immovable properties, digital assets etc. Maintaining an Asset Portfolio helps you keep track of your assets and manage them effectively.",
  },
  {
    q: "Can we make a will of gifted property?",
    a: "A property is usually transferred through inheritance to avoid taxation complications. However, if you want to give away a gifted property that is in your name (the name has already been changed through mutation), then it is considered your owned property and can be willed along with anything else that you possess in your name. Advisable to consult an inheritance specialist.",
  },
  {
    q: "Can a married daughter inherit her father's property in India?",
    a: "Yes, a married daughter can inherit her father's property in India. According to the Hindu Succession (Amendment) Act, 2005, a daughter (married or not) is considered a Class I heir and has an equal claim on her father's property along with her male siblings.",
  },
  {
    q: "Is there a registration fee on inherited property in India?",
    a: "Any inherited property must be transmitted in the name of the person who inherited it from the name of the previous owner. This process has to be registered at the municipal corporation and a registration fee is required.",
  },
  {
    q: "What should I know about a Will?",
    a: "A Will/Testament is a legal declaration made in writing containing your final wishes, distribution, allotment, disposal and distribution of your assets. It can also contain detailed instructions of the manner in which your assets must be operated after your death as per your wish.",
  },
  {
    q: "How much does it cost to make a will of a residential flat in India?",
    a: "You can write a will for any property (a residential flat and/or a commercial unit and/or a parcel of land) if the said property is in your name. The only cost involved in this process is the lawyer's fee for drafting a legally sound will, which can be relied upon by the beneficiaries under the will. This can vary according to the complexity of the will and the lawyer's experience.",
  },
  {
    q: "How can a foreign national open a bank account in India to claim inheritance?",
    a: "To open an NRI or NRO account, provide: a valid passport, PAN card or Form 60 (if PAN is unavailable), proof of NRI status (visa, work permit, or Overseas Resident Card), address proof, a photograph, and an initial payment cheque or draft. For selling inherited property or liquidating investments, check the tax implications. Consulting an inheritance expert is advised.",
  },
  {
    q: "Is the amount of money, savings, etc. inherited from parents taxable in India?",
    a: "In India, any inherited asset, movable or immovable, is not taxable. The Inheritance Tax was abolished with effect from 1985. However, if the new owner of the said property earns an income from the inherited asset, then that income will be taxable under the Income Tax Act, 1961.",
  },
  {
    q: "In India, can a person who has inherited ancestral property from his father leave his property to only one of his children?",
    a: "If undivided, it can be claimed by descendants up to four generations. If divided, it can be willed to one child; otherwise, all children inherit equally.",
  },
  {
    q: "Can a succession certificate be challenged?",
    a: "Yes, it can be challenged. After filing, the court sends notices to legal heirs and publishes a notice in the newspaper. There's a 45-day window for objections. If there are no objections, the certificate is issued. If objections arise, the court reviews them before proceeding.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-24 lg:py-32">
      <BackgroundFX />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-6">
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

        <div className="mt-12 sm:mt-16 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
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
