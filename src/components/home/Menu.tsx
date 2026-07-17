"use client";

import { menuItems, menuSections } from "@/data/content";
import { formatPrice, cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Menu() {
  const chefPicks = menuItems.filter((i) => i.chefPick);

  return (
    <Section id="menu" divider>
      <ScrollReveal>
        <SectionHeading
          eyebrow="La carte"
          title="Une cuisine de brasserie, généreuse et savoureuse"
          description="Une sélection de nos classiques — la carte complète vous attend en salle."
        />
      </ScrollReveal>

      <ScrollReveal>
        <div className="mb-14 border border-gold/35 bg-bg-soft px-5 py-8 sm:mb-16 sm:px-8 md:px-12 md:py-12">
          <div className="ornament mb-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold sm:text-[11px]">
              Suggestions du chef
            </p>
          </div>
          <ul className="space-y-0">
            {chefPicks.map((item, i) => (
              <li
                key={item.id}
                className={cn(
                  "py-5 first:pt-0 last:pb-0",
                  i < chefPicks.length - 1 && "border-b border-border/70"
                )}
              >
                <div className="flex items-baseline gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-xl text-fg sm:text-2xl">
                        {item.name}
                      </h3>
                      <span className="border border-gold/40 px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] text-gold">
                        Chef
                      </span>
                    </div>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-fg-muted">
                      {item.description}
                    </p>
                  </div>
                  <span className="menu-dots hidden sm:block" aria-hidden />
                  <span className="shrink-0 font-display text-lg text-gold sm:text-xl">
                    {formatPrice(item.price)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      <div className="space-y-14 sm:space-y-16 md:space-y-20">
        {menuSections.map((section, si) => {
          const items = menuItems.filter((i) => i.category === section.id);
          return (
            <ScrollReveal key={section.id} delay={si * 0.04}>
              <div>
                <div className="mb-8 flex flex-col items-center text-center sm:mb-10">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-[11px]">
                    {section.subtitle}
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-fg sm:text-4xl">
                    {section.label}
                  </h3>
                  <div className="gold-rule-center mt-4" />
                </div>

                <ul className="mx-auto max-w-3xl space-y-1">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="group border-b border-border/50 py-5 transition-colors last:border-0 hover:border-gold/30 sm:py-6"
                    >
                      <div className="flex items-baseline gap-2">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <h4 className="font-display text-lg text-fg transition-colors group-hover:text-gold sm:text-xl">
                              {item.name}
                            </h4>
                            {item.signature && (
                              <span className="text-[9px] uppercase tracking-[0.2em] text-gold">
                                Signature
                              </span>
                            )}
                          </div>
                          <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-fg-muted">
                            {item.description}
                          </p>
                        </div>
                        <span className="menu-dots hidden sm:block" aria-hidden />
                        <span className="shrink-0 pt-0.5 text-sm font-medium text-gold sm:text-base">
                          {formatPrice(item.price)}
                        </span>
                      </div>
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
