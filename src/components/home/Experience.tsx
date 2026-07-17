"use client";

import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Experience() {
  return (
    <Section id="experience" soft divider>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal direction="left">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="img-zoom relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1100&q=80"
                alt="Table dressée à la Brasserie Jo De Bruges"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 border border-gold/50 bg-gradient-to-br from-charcoal to-[#2a1514] px-5 py-4 text-white shadow-[var(--shadow-wine)] sm:-bottom-5 sm:left-auto sm:right-[-0.75rem] sm:max-w-[13rem] md:right-[-1.25rem]">
              <p className="font-display text-xl text-gold-bright sm:text-2xl">À Rodez</p>
              <p className="mt-1 text-xs leading-relaxed text-white/70">
                Un moment de brasserie française, généreux et authentique
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12} direction="right" className="pt-6 sm:pt-8 lg:pt-0">
          <SectionHeading
            align="left"
            eyebrow="L'expérience"
            title="Une cuisine authentique, un moment unique"
            className="mb-6 sm:mb-8"
          />
          <div className="space-y-4 text-[15px] leading-relaxed text-fg-muted sm:space-y-5 md:text-base">
            <p>
              Pousser la porte de{" "}
              <strong className="font-medium text-fg">Jo De Bruges</strong>,
              c&apos;est retrouver l&apos;âme des brasseries françaises :
              l&apos;odeur des frites maison, le cliquetis des couverts, et cette
              chaleur qui invite à s&apos;attarder.
            </p>
            <p>
              Ici, chaque service est pensé pour vous offrir plus qu&apos;un repas
              — un moment partagé, simple et généreux, au cœur de Rodez.
            </p>
            <p>
              Que vous veniez pour nos{" "}
              <strong className="font-medium text-fg">moules frites</strong>, une
              entrecôte ou un déjeuner entre amis, vous repartez avec le goût
              d&apos;y revenir.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
