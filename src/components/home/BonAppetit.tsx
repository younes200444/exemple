"use client";

import { ScrambleText } from "@/components/ui/ScrambleText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/** Short interstitial — scramble is a bonus on desktop hover, not required. */
export function BonAppetit() {
  return (
    <section className="texture-wine relative overflow-hidden py-10 sm:py-12 md:py-14">
      <ScrollReveal direction="up">
        <div className="relative z-10 mx-auto max-w-6xl px-5 text-center sm:px-8">
          <h2 className="font-display text-4xl font-bold tracking-[-0.03em] text-cream drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl lg:text-7xl">
            <ScrambleText text="BON APPÉTIT" className="text-gradient-gold" />
          </h2>
          <p className="mx-auto mt-5 max-w-xs text-sm text-champagne/80">
            Une table à Rodez. Jo De Bruges.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
