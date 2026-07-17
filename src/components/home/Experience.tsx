"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ScrambleText } from "@/components/ui/ScrambleText";

/** Calm section after editorial — mobile full-bleed preserved; desktop side-by-side balance. */
export function Experience() {
  return (
    <Section
      id="experience"
      soft
      divider
      className="!pt-4 !pb-12 sm:!pt-6 sm:!pb-14 md:!pt-10 md:!pb-16 lg:!pt-12 lg:!pb-20 xl:!pt-14 xl:!pb-24"
    >
      <div className="grid items-start gap-8 lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-14">
        <ScrollReveal direction="up" className="relative lg:col-span-7">
          <div className="relative w-full">
            <div
              className="img-zoom relative -mx-5 aspect-[5/6] overflow-hidden sm:-mx-8 lg:mx-0 lg:aspect-[4/5] xl:aspect-[5/4] xl:max-h-[min(72vh,720px)]"
              data-cursor="Voir"
            >
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80"
                alt="Table dressée à la Brasserie Jo De Bruges"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-3 left-5 border border-ember/50 bg-charcoal px-5 py-3 text-gold-bright shadow-[var(--shadow-ember)] sm:left-8 lg:-bottom-4 lg:left-auto lg:right-4">
              <p className="font-display text-xl sm:text-2xl lg:text-3xl">
                Rodez
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          delay={0.06}
          direction="right"
          className="flex flex-col justify-center px-0 pt-2 lg:col-span-5 lg:pl-4 lg:pt-0 xl:pl-8"
        >
          <p className="text-[10px] uppercase tracking-[0.34em] text-ember lg:text-[11px]">
            L&apos;expérience
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.02] tracking-[-0.02em] text-fg sm:text-5xl md:text-6xl lg:text-7xl">
            <ScrambleText text="Authentique." />
            <br />
            <span className="text-gradient-gold italic">Généreux.</span>
          </h2>
          <div className="gold-rule mt-5 lg:mt-6 lg:w-20" />
          <p className="mt-5 max-w-sm text-base text-fg-muted md:text-lg lg:mt-6 lg:max-w-md lg:text-xl">
            L&apos;âme d&apos;une brasserie française, au cœur de Rodez.
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
