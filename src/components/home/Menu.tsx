"use client";

import { menuItems, menuSections } from "@/data/content";
import { formatPrice } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export function Menu() {
  const chefPicks = menuItems.filter((i) => i.chefPick);

  return (
    <Section id="menu">
      <ScrollReveal>
        <SectionHeading
          eyebrow="La carte"
          title="Une cuisine de brasserie, généreuse et savoureuse"
          description="Une sélection de nos classiques — la carte complète vous attend en salle."
        />
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-16 border border-gold/30 bg-bg-soft px-6 py-8 md:px-10 md:py-10">
          <div className="ornament mb-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
              Suggestions du chef
            </p>
          </div>
          <ul className="grid gap-6 md:grid-cols-2">
            {chefPicks.map((item) => (
              <li
                key={item.id}
                className="flex items-start justify-between gap-4 border-b border-border/60 pb-4 last:border-0 last:pb-0 md:last:border-b md:last:pb-4"
              >
                <div>
                  <h3 className="font-display text-xl text-fg">{item.name}</h3>
                  <p className="mt-1 text-sm text-fg-muted">{item.description}</p>
                </div>
                <span className="shrink-0 font-medium text-gold">
                  {formatPrice(item.price)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      <div className="space-y-16">
        {menuSections.map((section, si) => {
          const items = menuItems.filter((i) => i.category === section.id);
          return (
            <ScrollReveal key={section.id} delay={si * 0.05}>
              <div>
                <div className="mb-8 flex flex-col items-center text-center">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
                    {section.subtitle}
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-fg md:text-4xl">
                    {section.label}
                  </h3>
                  <div className="gold-rule-center mt-4" />
                </div>

                <ul className="grid gap-5 md:grid-cols-3">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className={cn(
                        "group relative border border-border bg-bg p-6 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_20px_40px_-28px_rgba(23,23,23,0.35)] md:p-7",
                        item.signature && "ring-1 ring-gold/20"
                      )}
                    >
                      {item.signature && (
                        <span className="mb-3 inline-block text-[10px] uppercase tracking-[0.22em] text-gold">
                          Signature
                        </span>
                      )}
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-display text-xl text-fg transition-colors group-hover:text-gold md:text-[1.35rem]">
                          {item.name}
                        </h4>
                        <span className="shrink-0 text-sm font-medium text-gold">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                      <div className="my-4 h-px w-full bg-gradient-to-r from-gold/40 via-border to-transparent" />
                      <p className="text-sm leading-relaxed text-fg-muted">
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
