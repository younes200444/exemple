"use client";

import { stats } from "@/data/content";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/** Dark contrast beat after Signature — quiet numbers, no aurora. */
export function Stats() {
  return (
    <section className="section-dark relative overflow-hidden border-y border-gold/20 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
      <p
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display text-[16vw] leading-none text-white/[0.04] lg:text-[12vw]"
        aria-hidden
      >
        JO
      </p>
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 sm:gap-10 sm:px-8 md:grid-cols-4 md:gap-8 lg:max-w-7xl lg:gap-10 xl:max-w-[88rem] xl:px-10">
        {stats.map((stat, i) => {
          const numeric = Number.parseInt(stat.value, 10);
          const isNumeric = !Number.isNaN(numeric);

          return (
            <ScrollReveal
              key={stat.id}
              delay={i * 0.08}
              direction="up"
              className="text-center"
            >
              <p className="font-display text-5xl font-medium text-gradient-gold sm:text-6xl md:text-7xl lg:text-8xl">
                {isNumeric ? (
                  <AnimatedCounter value={numeric} suffix={stat.suffix ?? ""} />
                ) : (
                  <>
                    {stat.value}
                    {stat.suffix}
                  </>
                )}
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.26em] text-champagne/65 sm:text-[11px] lg:text-xs">
                {stat.label}
              </p>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
