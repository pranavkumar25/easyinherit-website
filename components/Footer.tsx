import Link from "next/link";
import { Logo } from "./ui/Logo";

const columns = [
  {
    title: "Services",
    links: [
      "Will drafting",
      "Succession certificates",
      "Property transfer",
      "Probate",
      "Death claims",
      "Family mediation",
    ],
  },
  {
    title: "Company",
    links: ["About", "How it works", "Coverage", "NRI", "Partners", "FAQ"],
  },
  {
    title: "Contact",
    links: ["+91 99024 35733", "info@easyinherit.in", "WhatsApp", "Book a call"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-midnight-500">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-[120%] -translate-x-1/2 bg-gradient-to-b from-electric/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-[0.08] [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent_80%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo height={36} />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/55">
              A modern operating layer for Indian inheritance — helping families
              and NRIs organise inheritance matters with clarity, structure and
              preparedness.
            </p>

            <div className="mt-7 flex gap-2">
              {["X", "in", "M"].map((s) => (
                <Link
                  key={s}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-[12px] font-medium text-white/65 transition-all hover:border-mint/30 hover:bg-mint/[0.08] hover:text-mint"
                >
                  {s}
                </Link>
              ))}
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
                    <li key={l}>
                      <Link
                        href="#"
                        className="text-[13.5px] text-white/65 transition-colors hover:text-white"
                      >
                        {l}
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
