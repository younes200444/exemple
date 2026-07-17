"use client";

import Image from "next/image";
import { philosophy } from "@/data/content";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ScrambleText } from "@/components/ui/ScrambleText";

export function Philosophy() {
  return (
    <Section
      id="savoir-faire"
      divider
      className="!py-16 sm:!py-20 md:!py-28 texture-wine-light"
    >
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <ScrollReveal direction="up">
            <p className="text-[10px] uppercase tracking-[0.34em] text-wine">
              Savoir-faire
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.02] text-fg sm:text-5xl md:text-6xl">
              <ScrambleText text="Tradition." />
            </h2>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-xs text-base text-fg-muted">
              Gestes précis. Produits choisis. Héritage français.
            </p>
          </ScrollReveal>

          <div className="mt-10 flex flex-wrap gap-3">
            {philosophy.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.06}>
                <span className="border border-wine/30 bg-cream px-4 py-2 font-display text-lg text-fg transition-all duration-300 hover:scale-105 hover:border-ember hover:bg-wine-soft hover:text-wine hover:shadow-[var(--shadow-wine)]">
                  {item.title}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.12} direction="clip" className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="img-zoom relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="Cuisine"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>
            <div className="img-zoom relative mt-8 aspect-[3/4] overflow-hidden md:mt-14">
              <Image
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80"
                alt="Plat"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
