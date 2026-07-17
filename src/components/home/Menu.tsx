"use client";

import Image from "next/image";
import { menuItems, menuSections } from "@/data/content";
import { formatPrice } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Menu() {
  return (
    <Section id="menu">
      <ScrollReveal>
        <SectionHeading
          eyebrow="La carte"
          title="Une cuisine de brasserie, généreuse et savoureuse"
          description="Une sélection de nos classiques — la carte complète vous attend en salle."
        />
      </ScrollReveal>

      <div className="mb-14 overflow-hidden">
        <ScrollReveal>
          <div className="relative aspect-[21/9] min-h-[220px] overflow-hidden md:min-h-[280px]">
            <Image
              src="https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1400&q=80"
              alt="Moules frites, spécialité de la maison"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-end p-6 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
                Signature
              </p>
              <p className="mt-2 font-display text-3xl text-white md:text-4xl">
                Moules frites traditionnelles
              </p>
              <p className="mt-2 text-sm text-white/75">
                Le plat qui fait la réputation de Jo De Bruges à Rodez.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="space-y-16">
        {menuSections.map((section, si) => {
          const items = menuItems.filter((i) => i.category === section.id);
          return (
            <ScrollReveal key={section.id} delay={si * 0.05}>
              <div>
                <div className="mb-8 flex items-end justify-between border-b border-border pb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
                      {section.subtitle}
                    </p>
                    <h3 className="mt-1 font-display text-3xl text-fg">
                      {section.label}
                    </h3>
                  </div>
                </div>

                <ul className="grid gap-6 md:grid-cols-3">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="group border border-border bg-bg p-6 transition-colors hover:border-gold/50"
                    >
                      {item.signature && (
                        <span className="mb-3 inline-block text-[10px] uppercase tracking-[0.2em] text-gold">
                          Coup de cœur
                        </span>
                      )}
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-display text-xl text-fg">
                          {item.name}
                        </h4>
                        <span className="shrink-0 text-sm font-medium text-gold">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
