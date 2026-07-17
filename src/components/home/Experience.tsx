"use client";

import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Experience() {
  return (
    <Section id="experience" soft>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1100&q=80"
                alt="Table dressée à la Brasserie Jo De Bruges"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 hidden border border-gold/40 bg-charcoal px-6 py-5 text-white sm:block md:-right-6">
              <p className="font-display text-2xl text-gold">À Rodez</p>
              <p className="mt-1 max-w-[12rem] text-xs leading-relaxed text-white/70">
                Un moment de brasserie française, généreux et authentique
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12} direction="right">
          <SectionHeading
            align="left"
            eyebrow="L'expérience"
            title="Une cuisine authentique, un moment unique"
            className="mb-8"
          />
          <div className="space-y-5 text-[15px] leading-relaxed text-fg-muted md:text-base">
            <p>
              Pousser la porte de{" "}
              <strong className="font-medium text-fg">
                Jo De Bruges
              </strong>
              , c&apos;est retrouver l&apos;âme des brasseries françaises :
              l&apos;odeur des frites maison, le cliquetis des couverts, et
              cette chaleur qui invite à s&apos;attarder.
            </p>
            <p>
              Ici, chaque service est pensé pour vous offrir plus qu&apos;un
              repas — un moment partagé, simple et généreux, au cœur de Rodez.
            </p>
            <p>
              Que vous veniez pour nos{" "}
              <strong className="font-medium text-fg">moules frites</strong>,
              une entrecôte ou un déjeuner entre amis, vous repartez avec le
              goût d&apos;y revenir.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
