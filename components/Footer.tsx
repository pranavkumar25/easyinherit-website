import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Logo } from "./ui/Logo";
import { BookingTrigger } from "./BookingTrigger";
import { CONTACT } from "@/lib/contact";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Will drafting", href: "/#services" },
      { label: "Succession certificates", href: "/#services" },
      { label: "Property transfer", href: "/#services" },
      { label: "Letter of administration", href: "/#services" },
      { label: "Death claims", href: "/#services" },
      { label: "Family mediation", href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "How it works", href: "/#approach" },
      { label: "Coverage", href: "/#cities" },
      { label: "NRI", href: "/#nri" },
      { label: "Recognition", href: "/#recognition" },
      { label: "Blogs", href: "/blogs" },
      { label: "FAQs", href: "/#faq" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: CONTACT.phone, href: CONTACT.whatsapp, external: true },
      { label: CONTACT.email, href: CONTACT.emailHref },
      { label: "WhatsApp", href: CONTACT.whatsapp, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-midnight-500">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-[120%] -translate-x-1/2 bg-gradient-to-b from-electric/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-[0.08] [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent_80%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo height={36} />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/55">
              A modern operating layer for Indian inheritance, helping families
              and NRIs organise inheritance matters with clarity, structure and
              preparedness.
            </p>

            {/* Social — LinkedIn only */}
            <div className="mt-7 flex items-center gap-3">
              <Link
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EasyInherit on LinkedIn"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[12.5px] font-medium text-white/70 transition-all hover:border-mint/30 hover:bg-mint/[0.08] hover:text-mint"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </Link>

              {/* Quick book consultation */}
              <BookingTrigger variant="ghost" size="md" icon={false}>
                Book a call
              </BookingTrigger>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h5 className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
                  {col.title}
                </h5>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={`${col.title}-${l.label}`}>
                      <Link
                        href={l.href}
                        target={l.external ? "_blank" : undefined}
                        rel={l.external ? "noopener noreferrer" : undefined}
                        className="text-[13.5px] text-white/65 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center">
          <div className="text-[12px] text-white/40">
            © {new Date().getFullYear()} EasyInherit. Inheritance, succession &amp; estate assistance for Indian families.
          </div>
          <div className="flex gap-5 text-[12px] text-white/40">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
            <Link href="#" className="hover:text-white">Security</Link>
          </div>
        </div>

        {/* Massive wordmark */}
        <div className="pointer-events-none mt-12 select-none overflow-hidden">
          <div className="bg-gradient-to-b from-white/[0.06] to-transparent bg-clip-text text-center text-[clamp(80px,18vw,260px)] font-medium leading-none tracking-tighter2 text-transparent">
            EasyInherit
          </div>
        </div>
      </div>
    </footer>
  );
}
