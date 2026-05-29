"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BookingTrigger } from "./BookingTrigger";
import { Logo } from "./ui/Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#approach" },
  { label: "NRI", href: "#nri" },
  { label: "Coverage", href: "#cities" },
  { label: "Recognition", href: "#recognition" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on resize to desktop
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-midnight/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
          <Link
            href="#top"
            className="flex shrink-0 items-center"
            aria-label="EasyInherit — home"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </Link>

          {/* Desktop nav (lg+) */}
          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.02] px-1.5 py-1.5 backdrop-blur lg:flex">
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

          {/* Desktop CTA (sm+) */}
          <div className="hidden items-center gap-2 sm:flex">
            <BookingTrigger variant="mint" size="md">
              Book consultation
            </BookingTrigger>
          </div>

          {/* Mobile hamburger (below sm we use just hamburger) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 top-16 z-40 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className={`absolute inset-0 bg-black/60 backdrop-blur transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          className={`relative mx-3 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-midnight-200/95 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <nav className="flex flex-col p-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium text-white/85 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                <span>{l.label}</span>
                <span className="text-white/30">→</span>
              </Link>
            ))}
          </nav>

          <div className="border-t border-white/[0.06] p-3">
            <div onClick={() => setOpen(false)}>
              <BookingTrigger variant="mint" size="md" className="w-full">
                Book consultation
              </BookingTrigger>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
