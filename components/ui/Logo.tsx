import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  height?: number;
}

export function Logo({ className, height = 32 }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt="EasyInherit"
      className={cn("w-auto select-none", className)}
      style={{ height }}
    />
  );
}
