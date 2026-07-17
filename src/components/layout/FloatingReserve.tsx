"use client";

import { CalendarHeart } from "lucide-react";
import { useScrolled } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

export function FloatingReserve() {
  const scrolled = useScrolled(420);

  return (
    <a
      href="#reservation"
      className={cn(
        "fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-gold px-3.5 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-charcoal shadow-[var(--shadow-gold)] transition-all duration-300 hover:scale-[1.03] hover:bg-gold-hover sm:bottom-8 sm:right-8 sm:px-5 sm:py-3.5",
        scrolled
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0 sm:pointer-events-auto sm:translate-y-0 sm:opacity-100"
      )}
      aria-label="Réserver une table"
    >
      <CalendarHeart size={17} />
      <span>Réserver</span>
    </a>
  );
}
