"use client";

import { motion } from "framer-motion";
import { Leaf, UtensilsCrossed, HeartHandshake, Users } from "lucide-react";
import { whyUs } from "@/data/content";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const icons = { Leaf, UtensilsCrossed, HeartHandshake, Users };
const accents = ["text-ember", "text-gold", "text-wine", "text-olive"] as const;

export function WhyChooseUs() {
  return (
    <Section
      id="pourquoi"
      divider
      className="!py-16 sm:!py-20 md:!py-24 texture-ember"
    >
      <ScrollReveal>
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-display text-4xl font-bold text-fg sm:text-5xl md:text-6xl">
            Pourquoi nous
          </h2>
          <div className="gold-rule-center mt-5" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {whyUs.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <ScrollReveal key={item.id} delay={i * 0.05} direction="punchy">
              <motion.article
                className="group flex aspect-square flex-col items-center justify-center border border-border bg-cream/70 p-4 text-center transition-all duration-300 hover:border-ember/60 hover:bg-cream hover:shadow-[var(--shadow-ember)] sm:p-6"
                whileHover={{ y: -12, scale: 1.04, rotate: i % 2 === 0 ? -2.5 : 2.5 }}
                transition={{ type: "spring", stiffness: 320, damping: 16 }}
              >
                <motion.div
                  className={`mb-4 ${accents[i % accents.length]}`}
                  whileHover={{ rotate: 18, scale: 1.28 }}
                >
                  <Icon size={30} aria-hidden />
                </motion.div>
                <h3 className="font-display text-2xl text-fg sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-fg-subtle opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.description}
                </p>
              </motion.article>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
