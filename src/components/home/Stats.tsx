"use client";

import { stats } from "@/data/content";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Aurora } from "@/components/ui/Aurora";

export function Stats() {
  return (
    <section className="section-dark relative overflow-hidden border-y border-gold/25 py-16 sm:py-20 md:py-24">
      <Aurora variant="wine" />
      <p
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display text-[18vw] leading-none text-ember/[0.12]"
        aria-hidden
      >
        JO
      </p>
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[2px] w-56 bg-gradient-to-r from-transparent via-ember to-transparent opacity-80" />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 sm:gap-10 sm:px-8 md:grid-cols-4 md:gap-8">
        {stats.map((stat, i) => {
          const numeric = Number.parseInt(stat.value, 10);
          const isNumeric = !Number.isNaN(numeric);

          return (
            <ScrollReveal
              key={stat.id}
              delay={i * 0.1}
              direction="scale"
              className="text-center"
            >
              <p className="font-display text-5xl font-medium text-gradient-gold drop-shadow-[0_0_24px_rgba(224,90,40,0.45)] sm:text-6xl md:text-7xl">
                {isNumeric ? (
                  <AnimatedCounter value={numeric} suffix={stat.suffix ?? ""} />
                ) : (
                  <>
                    {stat.value}
                    {stat.suffix}
                  </>
                )}
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.26em] text-champagne/70 sm:text-[11px]">
                {stat.label}
              </p>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
