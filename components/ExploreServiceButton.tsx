"use client";

import { ArrowUpRight } from "lucide-react";
import { useBookingDialog } from "./BookingProvider";

export function ExploreServiceButton() {
  const { open } = useBookingDialog();
  return (
    <button
      type="button"
      onClick={open}
      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/80 transition-colors hover:text-white"
    >
      Explore service
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  );
}
