"use client";

import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useBookingDialog } from "./BookingProvider";

type Variant = "primary" | "secondary" | "ghost" | "mint";
type Size = "md" | "lg";

interface Props {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode | false;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-white text-midnight hover:bg-mint hover:text-midnight border border-white/10",
  secondary:
    "bg-electric text-white hover:bg-electric-500 border border-electric/30 shadow-[0_0_0_1px_rgba(46,99,255,0.3),0_18px_50px_-10px_rgba(46,99,255,0.6)]",
  ghost:
    "bg-white/[0.04] backdrop-blur text-white hover:bg-white/[0.08] border border-white/10",
  mint:
    "bg-mint text-midnight hover:bg-mint-300 border border-mint/30 shadow-[0_0_0_1px_rgba(34,232,155,0.3),0_18px_50px_-10px_rgba(34,232,155,0.5)]",
};

const sizeStyles: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export function BookingTrigger({
  children,
  variant = "mint",
  size = "md",
  className,
  icon,
}: Props) {
  const { open } = useBookingDialog();
  return (
    <button
      type="button"
      onClick={open}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 will-change-transform",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {children}
      {icon !== false && (
        <span className="grid h-5 w-5 place-items-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon ?? <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />}
        </span>
      )}
    </button>
  );
}
