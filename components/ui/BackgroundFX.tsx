import { cn } from "@/lib/utils";

interface Props {
  variant?: "hero" | "section" | "cta";
  className?: string;
}

export function BackgroundFX({ variant = "section", className }: Props) {
  if (variant === "hero") {
    return (
      <div className={cn("pointer-events-none absolute inset-0 -z-0 overflow-hidden", className)}>
        {/* Grid */}
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_30%,black,transparent_70%)]" />
        {/* Top glow */}
        <div className="absolute -top-40 left-1/2 h-[680px] w-[1100px] -translate-x-1/2 bg-radial-glow" />
        {/* Electric orb */}
        <div className="orb left-[-12%] top-[10%] h-[420px] w-[420px] bg-electric/30 opacity-60" />
        {/* Mint orb */}
        <div className="orb right-[-10%] top-[40%] h-[420px] w-[420px] bg-mint/20 opacity-50" />
        {/* Fade to base */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-grid-fade" />
      </div>
    );
  }

  if (variant === "cta") {
    return (
      <div className={cn("pointer-events-none absolute inset-0 -z-0 overflow-hidden", className)}>
        <div className="orb left-[10%] top-[-20%] h-[420px] w-[420px] bg-electric/35 opacity-60" />
        <div className="orb right-[8%] bottom-[-20%] h-[420px] w-[420px] bg-mint/30 opacity-70" />
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_50%,black,transparent_70%)]" />
      </div>
    );
  }

  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent_80%)]" />
    </div>
  );
}
