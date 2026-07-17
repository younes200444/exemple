"use client";

import { motion } from "framer-motion";
import { menuItems, menuSections } from "@/data/content";
import { formatPrice, cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Menu() {
  const chefPicks = menuItems.filter((i) => i.chefPick);

  return (
    <Section id="menu" divider className="!py-16 sm:!py-20 md:!py-28">
      <ScrollReveal>
        <div className="mb-12 text-center md:mb-16">
          <p className="text-[10px] uppercase tracking-[0.34em] text-gold">
            La carte
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-fg sm:text-5xl md:text-6xl">
            À table
          </h2>
          <div className="gold-rule-center mt-5" />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="punchy" className="mb-14 md:mb-20">
        <div className="glow-gold border border-gold/40 bg-cream/80 px-5 py-8 sm:px-10 sm:py-10">
          <p className="mb-6 text-center text-[10px] font-medium uppercase tracking-[0.3em] text-wine">
            Suggestions du chef
          </p>
          <ul>
            {chefPicks.map((item, i) => (
              <li
                key={item.id}
                className={cn(
                  "flex items-baseline gap-3 py-4",
                  i < chefPicks.length - 1 && "border-b border-gold/20"
                )}
              >
                <h3 className="font-display text-xl text-fg sm:text-2xl">
                  {item.name}
                </h3>
                <span className="menu-dots hidden sm:block" aria-hidden />
                <motion.span
                  className="ml-auto shrink-0 font-display text-lg text-gold sm:text-xl"
                  whileHover={{ scale: 1.12, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                >
                  {formatPrice(item.price)}
                </motion.span>
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>

      <div className="space-y-14 md:space-y-16">
        {menuSections.map((section, si) => {
          const items = menuItems.filter((i) => i.category === section.id);
          return (
            <ScrollReveal
              key={section.id}
              delay={si * 0.03}
              direction={si % 2 === 0 ? "up" : "scale"}
            >
              <h3 className="mb-6 text-center font-display text-3xl text-fg sm:text-4xl">
                {section.label}
              </h3>
              <ul className="mx-auto max-w-2xl">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="group flex items-baseline gap-2 border-b border-border/40 py-4 last:border-0"
                  >
                    <div className="min-w-0 flex-1">
                      <h4 className="font-display text-lg text-fg transition-colors group-hover:text-gold sm:text-xl">
                        {item.name}
                        {item.signature && (
                          <span className="ml-2 text-[9px] uppercase tracking-[0.18em] text-gold">
                            ★
                          </span>
                        )}
                      </h4>
                      <p className="mt-0.5 text-xs tracking-wide text-fg-subtle">
                        {item.description}
                      </p>
                    </div>
                    <span className="menu-dots hidden sm:block" aria-hidden />
                    <span className="shrink-0 text-sm font-medium text-gold">
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
