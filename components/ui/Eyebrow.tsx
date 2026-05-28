import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  tone?: "default" | "mint" | "electric";
}

export function Eyebrow({ children, className, tone = "default" }: Props) {
  const dot =
    tone === "mint"
      ? "bg-mint shadow-[0_0_12px_rgba(34,232,155,0.7)]"
      : tone === "electric"
      ? "bg-electric shadow-[0_0_12px_rgba(46,99,255,0.7)]"
      : "bg-white/40";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur",
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dot)} />
      {children}
    </span>
  );
}
