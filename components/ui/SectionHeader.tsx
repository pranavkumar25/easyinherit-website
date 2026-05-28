import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "default" | "mint" | "electric";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  tone = "default",
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "text-balance text-[clamp(34px,5vw,60px)] font-medium leading-[1.02] tracking-tighter2 glow-text",
          align === "center" && "max-w-3xl"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-pretty text-[15px] leading-relaxed text-white/60 sm:text-base",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
