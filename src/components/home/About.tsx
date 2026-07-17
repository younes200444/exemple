"use client";

import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function About() {
  return (
    <Section id="about" soft>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1000&q=80"
              alt="Salle de restaurant conviviale"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-charcoal/90 px-6 py-5 text-white">
              <p className="font-display text-xl text-gold">Spécialité</p>
              <p className="mt-1 text-sm text-white/80">
                Moules frites traditionnelles — la signature de la maison
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <SectionHeading
            align="left"
            eyebrow="À propos"
            title="Une brasserie française, authentique et généreuse"
            className="mb-6"
          />
          <div className="space-y-4 text-sm leading-relaxed text-fg-muted md:text-base">
            <p>
              Au cœur de Rodez, la{" "}
              <strong className="font-medium text-fg">
                Brasserie Jo De Bruges
              </strong>{" "}
              cultive l&apos;esprit des grandes tables françaises : une cuisine
              franche, des assiettes généreuses et une ambiance où l&apos;on se
              sent immédiatement chez soi.
            </p>
            <p>
              Réputée pour ses{" "}
              <strong className="font-medium text-fg">moules frites</strong>,
              la maison mise sur des produits frais, une cuisine traditionnelle
              et un accueil chaleureux — idéal en famille, entre amis ou pour un
              déjeuner d&apos;affaires.
            </p>
            <p>
              Ici, chaque service est une invitation à partager un moment
              authentique, loin des artifices, fidèle à l&apos;âme de la
              brasserie.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
