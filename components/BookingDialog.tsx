"use client";

import { useEffect, useState } from "react";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingDialog({ isOpen, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Reset success state on close
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => setSubmitted(false), 250);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    // For now: just log. Replace with API call when backend is ready.
    // eslint-disable-next-line no-console
    console.log("Booking request:", payload);
    setSubmitted(true);
    setTimeout(() => onClose(), 2800);
  }

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-black/70 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative my-8 w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-midnight-200 to-midnight-400 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background fx */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-electric/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-mint/25 blur-3xl" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-colors hover:bg-white/[0.10] hover:text-white"
          aria-label="Close"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative p-7 sm:p-9">
          {!submitted ? (
            <>
              <div className="text-[10.5px] font-medium uppercase tracking-[0.20em] text-mint">
                Book a consultation
              </div>
              <h2 className="mt-2 text-[26px] font-semibold leading-tight tracking-tight text-white">
                Let&apos;s simplify inheritance for your family.
              </h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/55">
                Tell us a bit about your situation. Our team will reach out within 24 hours.
              </p>

              <form className="mt-7 space-y-3.5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <Field label="Full name" name="name" type="text" required placeholder="Your name" />
                  <Field label="Phone" name="phone" type="tel" required placeholder="+91 ..." />
                </div>
                <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
                <Field label="City / Country" name="location" type="text" placeholder="Mumbai · India / UAE / US ..." />
                <SelectField label="What can we help with?" name="service" required>
                  <option value="">Select a service</option>
                  <option>Will drafting &amp; estate planning</option>
                  <option>Succession certificate</option>
                  <option>Property transfer after death</option>
                  <option>Probate &amp; administration</option>
                  <option>Death claims (bank/insurance/MF)</option>
                  <option>Legal heir documentation</option>
                  <option>Family settlement coordination</option>
                  <option>Inheritance dispute / ODR</option>
                  <option>NRI inheritance</option>
                  <option>Not sure / just exploring</option>
                </SelectField>
                <Field label="Brief note (optional)" name="message" type="textarea" placeholder="Anything you'd like us to know..." />

                <button
                  type="submit"
                  className="mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-mint text-[14.5px] font-medium text-midnight shadow-[0_0_0_1px_rgba(34,232,155,0.3),0_18px_50px_-10px_rgba(34,232,155,0.5)] transition-all hover:bg-mint-300"
                >
                  Book my consultation
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="pt-1 text-center text-[10.5px] tracking-tight text-white/40">
                  By submitting, you agree to be contacted by EasyInherit.
                </p>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center py-12 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-mint/15 text-mint shadow-[0_0_30px_rgba(34,232,155,0.4)]">
                <CheckCircle2 className="h-8 w-8" strokeWidth={2.4} />
              </div>
              <h2 className="mt-5 text-[22px] font-semibold tracking-tight text-white">
                Thanks for reaching out.
              </h2>
              <p className="mt-2 max-w-sm text-[13.5px] leading-relaxed text-white/55">
                Our team will get back to you within 24 hours to schedule your consultation.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: "text" | "email" | "tel" | "textarea";
  required?: boolean;
  placeholder?: string;
}) {
  const baseInput =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-[14px] text-white placeholder:text-white/30 outline-none transition-all focus:border-mint/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-mint/20";

  if (type === "textarea") {
    return (
      <label className="block">
        <span className="mb-1 block text-[10.5px] font-medium uppercase tracking-[0.14em] text-white/45">
          {label}
        </span>
        <textarea
          name={name}
          required={required}
          rows={3}
          placeholder={placeholder}
          className={`${baseInput} py-2.5`}
        />
      </label>
    );
  }

  return (
    <label className="block">
      <span className="mb-1 block text-[10.5px] font-medium uppercase tracking-[0.14em] text-white/45">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={`${baseInput} h-11`}
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[10.5px] font-medium uppercase tracking-[0.14em] text-white/45">
        {label}
      </span>
      <select
        name={name}
        required={required}
        className="h-11 w-full appearance-none rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-[14px] text-white outline-none transition-all focus:border-mint/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-mint/20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-opacity='0.5' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
        }}
      >
        {children}
      </select>
    </label>
  );
}
