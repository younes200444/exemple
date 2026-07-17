"use client";

import { ScrambleText } from "@/components/ui/ScrambleText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Aurora } from "@/components/ui/Aurora";

/** Playful interstitial — hover/focus scrambles the words. */
export function BonAppetit() {
  return (
    <section className="texture-wine relative overflow-hidden py-20 sm:py-24 md:py-32">
      <Aurora variant="wine" />
      <ScrollReveal direction="punchy">
        <div className="relative z-10 mx-auto max-w-6xl px-5 text-center sm:px-8">
          <p className="text-[10px] uppercase tracking-[0.34em] text-ember">
            Survolez
          </p>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-[-0.03em] text-cream sm:text-6xl md:text-7xl lg:text-8xl">
            <ScrambleText
              text="BON APPÉTIT"
              className="text-gradient-gold drop-shadow-[0_0_40px_rgba(224,90,40,0.5)]"
            />
          </h2>
          <p className="mx-auto mt-6 max-w-xs text-sm text-champagne/70">
            Un clin d&apos;œil. Une table. Jo De Bruges.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
