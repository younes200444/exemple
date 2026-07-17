"use client";

import { stats } from "@/data/content";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-gold/20 bg-charcoal py-16 sm:py-20 md:py-24">
      <p
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[28vw] font-medium leading-none text-white/[0.03]"
      >
        20
      </p>
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-48 bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 sm:gap-12 sm:px-8 md:grid-cols-4 md:gap-8">
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
              <p className="font-display text-5xl font-semibold tracking-tight text-gradient-gold sm:text-6xl md:text-7xl">
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
