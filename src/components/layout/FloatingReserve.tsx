"use client";

import { CalendarHeart } from "lucide-react";

export function FloatingReserve() {
  return (
    <a
      href="#reservation"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-gold px-4 py-3.5 text-xs font-medium uppercase tracking-[0.12em] text-charcoal shadow-[0_14px_36px_-10px_rgba(196,163,90,0.75)] transition-transform hover:scale-[1.03] hover:bg-gold-hover sm:bottom-8 sm:right-8 sm:px-5"
      aria-label="Réserver une table"
    >
      <CalendarHeart size={18} />
      <span className="hidden sm:inline">Réserver</span>
    </a>
  );
}
