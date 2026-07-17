"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ScrambleText } from "@/components/ui/ScrambleText";

export function Experience() {
  return (
    <Section id="experience" soft divider className="overflow-x-clip !py-16 sm:!py-20 md:!py-28">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
        <ScrollReveal direction="clip" className="relative lg:col-span-7">
          <div className="relative mx-auto max-w-lg lg:mx-0 lg:max-w-none">
            <div
              className="img-zoom relative aspect-[4/5] overflow-hidden lg:aspect-[5/6] lg:-mr-20 xl:-mr-28"
              data-cursor="Voir"
            >
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
                alt="Table dressée à la Brasserie Jo De Bruges"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 border border-gold/50 bg-charcoal px-5 py-3 text-gold-bright shadow-[var(--shadow-wine)] sm:-bottom-5 sm:left-auto sm:right-6 lg:right-4">
              <p className="font-display text-xl sm:text-2xl">Rodez</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          delay={0.1}
          direction="right"
          className="flex flex-col justify-center lg:col-span-5 lg:pl-6"
        >
          <p className="text-[10px] uppercase tracking-[0.34em] text-gold">
            L&apos;expérience
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.02] tracking-[-0.02em] text-fg sm:text-5xl md:text-6xl">
            <ScrambleText text="Authentique." />
            <br />
            <span className="text-gradient-gold italic">Généreux.</span>
          </h2>
          <div className="gold-rule mt-6" />
          <p className="mt-6 max-w-sm text-base text-fg-muted md:text-lg">
            L&apos;âme d&apos;une brasserie française, au cœur de Rodez.
          </p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
