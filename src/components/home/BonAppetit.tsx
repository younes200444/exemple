"use client";

import { ScrambleText } from "@/components/ui/ScrambleText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/** One playful beat — scramble on hover only, static wine field (no aurora). */
export function BonAppetit() {
  return (
    <section className="texture-wine relative overflow-hidden py-20 sm:py-24 md:py-28">
      <ScrollReveal direction="up">
        <div className="relative z-10 mx-auto max-w-6xl px-5 text-center sm:px-8">
          <p className="text-[10px] uppercase tracking-[0.34em] text-ember">
            Survolez
          </p>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-[-0.03em] text-cream drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-6xl md:text-7xl lg:text-8xl">
            <ScrambleText text="BON APPÉTIT" className="text-gradient-gold" />
          </h2>
          <p className="mx-auto mt-6 max-w-xs text-sm text-champagne/70">
            Un clin d&apos;œil. Une table. Jo De Bruges.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
