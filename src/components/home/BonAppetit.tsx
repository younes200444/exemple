"use client";

import { ScrambleText } from "@/components/ui/ScrambleText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/** Playful interstitial — hover/focus scrambles the words. */
export function BonAppetit() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28">
      <ScrollReveal direction="punchy">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <p className="text-[10px] uppercase tracking-[0.34em] text-gold">
            Survolez
          </p>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-[-0.03em] text-fg sm:text-6xl md:text-7xl lg:text-8xl">
            <ScrambleText
              text="BON APPÉTIT"
              className="text-gradient-gold"
            />
          </h2>
          <p className="mx-auto mt-6 max-w-xs text-sm text-fg-subtle">
            Un clin d&apos;œil. Une table. Jo De Bruges.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
