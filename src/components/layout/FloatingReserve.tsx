"use client";

import { CalendarHeart } from "lucide-react";
import { useScrolled } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";

export function FloatingReserve() {
  const scrolled = useScrolled(420);

  return (
    <Magnetic strength={24} className="fixed bottom-5 right-5 z-40 sm:bottom-8 sm:right-8">
      <a
        href="#reservation"
        className={cn(
          "cta-glow inline-flex items-center gap-2 bg-gradient-to-r from-gold-bright via-gold to-ember px-3.5 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-charcoal shadow-[var(--shadow-ember)] transition-all duration-300 hover:scale-[1.08] hover:shadow-[0_22px_50px_-6px_rgba(224,90,40,0.75)] sm:px-5 sm:py-3.5",
          scrolled
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0 sm:pointer-events-auto sm:translate-y-0 sm:opacity-100"
        )}
        aria-label="Réserver une table"
        data-cursor="Réserver"
      >
        <CalendarHeart size={17} />
        <span>Réserver</span>
      </a>
    </Magnetic>
  );
}
