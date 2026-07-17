"use client";

import { motion } from "framer-motion";
import { menuItems, menuSections } from "@/data/content";
import { formatPrice, cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/** Editorial menu — calm after Signature; chef badge is the only accent punch. */
export function Menu() {
  const chefPicks = menuItems.filter((i) => i.chefPick);

  return (
    <Section id="menu" divider className="!py-10 sm:!py-12 md:!py-14">
      <ScrollReveal>
        <div className="mb-6 text-center md:mb-8">
          <p className="text-[10px] uppercase tracking-[0.34em] text-ember">
            La carte
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-fg sm:text-5xl md:text-6xl">
            À table
          </h2>
          <div className="gold-rule-center mt-4" />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" className="mb-10 md:mb-12">
        <div className="glow-wine relative overflow-hidden border border-wine/35 bg-gradient-to-br from-cream via-[#fff0e4] to-[#f8dcc8] px-5 py-8 sm:px-10 sm:py-10">
          <p className="mb-6 inline-flex items-center gap-2 border border-ember/45 bg-ember/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-ember">
            <span className="h-1.5 w-1.5 bg-ember" aria-hidden />
            Suggestions du chef
          </p>
          <ul>
            {chefPicks.map((item, i) => (
              <li
                key={item.id}
                className={cn(
                  "flex items-baseline gap-3 py-4",
                  i < chefPicks.length - 1 && "border-b border-wine/20"
                )}
              >
                <h3 className="font-display text-xl text-fg sm:text-2xl">
                  {item.name}
                </h3>
                <span className="menu-dots hidden sm:block" aria-hidden />
                  <motion.span
                    className="ml-auto shrink-0 font-display text-lg text-fg sm:text-xl"
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  >
                  {formatPrice(item.price)}
                </motion.span>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

        <div className="space-y-10 md:space-y-12">
          {menuSections.map((section, si) => {
            const items = menuItems.filter((i) => i.category === section.id);
            return (
              <ScrollReveal key={section.id} delay={si * 0.03} direction="up">
                <h3 className="mb-4 text-center font-display text-3xl text-fg sm:text-4xl">
                  {section.label}
                </h3>
              <ul className="mx-auto max-w-2xl">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="group flex items-baseline gap-2 border-b border-border/40 py-4 last:border-0"
                  >
                    <div className="min-w-0 flex-1">
                      <h4 className="font-display text-lg text-fg transition-colors duration-300 group-hover:text-ember sm:text-xl">
                        {item.name}
                        {item.signature && (
                          <span className="ml-2 text-[10px] font-medium uppercase tracking-[0.14em] text-ember">
                            Signature
                          </span>
                        )}
                      </h4>
                      <p className="mt-0.5 text-sm tracking-wide text-fg-muted">
                        {item.description}
                      </p>
                    </div>
                    <span className="menu-dots hidden sm:block" aria-hidden />
                    <span className="shrink-0 text-sm font-medium text-fg sm:text-base">
                      {formatPrice(item.price)}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
