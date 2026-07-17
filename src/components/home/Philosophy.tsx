"use client";

import Image from "next/image";
import { philosophy } from "@/data/content";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/** Craftsmanship — desktop uses width; mobile column stack unchanged. */
export function Philosophy() {
  return (
    <Section
      id="savoir-faire"
      divider
      className="!py-10 sm:!py-12 md:!py-14 lg:!py-16 xl:!py-20 texture-wine-light"
    >
      <div className="grid items-start gap-8 lg:grid-cols-12 lg:items-center lg:gap-12 xl:gap-16">
        <div className="lg:col-span-5">
          <ScrollReveal direction="up">
            <p className="text-[10px] uppercase tracking-[0.34em] text-wine lg:text-[11px]">
              Savoir-faire
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.02] text-fg sm:text-5xl md:text-6xl lg:text-7xl">
              Tradition.
            </h2>
            <div className="gold-rule mt-6 lg:w-20" />
            <p className="mt-6 max-w-xs text-base text-fg-muted lg:max-w-sm lg:text-lg">
              Gestes précis. Produits choisis. Héritage français.
            </p>
          </ScrollReveal>

          <div className="mt-10 flex flex-wrap gap-3 lg:mt-12 lg:gap-4">
            {philosophy.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.05}>
                <span className="border border-wine/30 bg-cream px-4 py-2 font-display text-lg text-fg transition-colors duration-300 hover:border-ember hover:bg-wine-soft hover:text-wine lg:px-5 lg:py-2.5 lg:text-xl">
                  {item.title}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.1} direction="up" className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
            <div className="img-zoom relative aspect-[3/4] overflow-hidden lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&q=80"
                alt="Cuisine"
                fill
                sizes="(max-width: 1024px) 50vw, 32vw"
                className="object-cover"
              />
            </div>
            <div className="img-zoom relative mt-8 aspect-[3/4] overflow-hidden md:mt-14 lg:mt-16 lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=900&q=80"
                alt="Plat"
                fill
                sizes="(max-width: 1024px) 50vw, 32vw"
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
