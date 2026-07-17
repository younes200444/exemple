"use client";

import { CalendarHeart } from "lucide-react";

export function FloatingReserve() {
  return (
    <a
      href="#reservation"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-gold px-4 py-3 text-sm font-medium text-white shadow-[0_12px_32px_-10px_rgba(176,141,58,0.7)] transition-transform hover:scale-[1.03] hover:bg-gold-hover sm:bottom-8 sm:right-8 sm:px-5"
      aria-label="Réserver une table"
    >
      <CalendarHeart size={18} />
      <span className="hidden sm:inline">Réserver</span>
    </a>
  );
}
