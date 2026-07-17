"use client";

import { stats } from "@/data/content";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Stats() {
  return (
    <section className="border-y border-border bg-bg-soft py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 sm:px-8 md:grid-cols-4 md:gap-8">
        {stats.map((stat, i) => {
          const numeric = Number.parseInt(stat.value, 10);
          const isNumeric = !Number.isNaN(numeric);

          return (
            <ScrollReveal key={stat.id} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl text-gold md:text-5xl">
                {isNumeric ? (
                  <AnimatedCounter value={numeric} suffix={stat.suffix ?? ""} />
                ) : (
                  <>
                    {stat.value}
                    {stat.suffix}
                  </>
                )}
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-fg-muted">
                {stat.label}
              </p>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
