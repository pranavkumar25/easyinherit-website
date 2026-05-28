import Link from "next/link";
import { Button } from "./ui/Button";
import { Logo } from "./ui/Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#approach" },
  { label: "NRI", href: "#nri" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-midnight/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="#top" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.02] px-1.5 py-1.5 backdrop-blur md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden rounded-full px-3 text-[13px] font-medium text-white/70 transition-colors hover:text-white sm:inline-flex sm:h-9 sm:items-center"
          >
            Sign in
          </Link>
          <Button href="#contact" variant="mint" size="md">
            Book consultation
          </Button>
        </div>
      </div>
    </header>
  );
}
