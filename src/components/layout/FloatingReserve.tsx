"use client";

import { CalendarHeart } from "lucide-react";
import { useScrolled } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";

/** Appears after leaving the Hero — avoids competing with Hero CTAs. */
export function FloatingReserve() {
  const scrolled = useScrolled(520);

  return (
    <Magnetic
      strength={18}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-40 sm:bottom-8 sm:right-8"
    >
      <a
        href="#reservation"
        className={cn(
          "cta-glow inline-flex items-center gap-2 bg-gradient-to-r from-gold-bright via-gold to-ember px-3.5 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-charcoal shadow-[var(--shadow-ember)] transition-all duration-300 hover:scale-[1.04] sm:px-5 sm:py-3.5",
          scrolled
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
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
