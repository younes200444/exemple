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
    <Section id="pourquoi" divider className="!py-10 sm:!py-12 md:!py-14 lg:!py-16 xl:!py-20">
      <ScrollReveal>
        <div className="mb-6 text-center md:mb-8 lg:mb-10">
          <h2 className="font-display text-4xl font-bold text-fg sm:text-5xl md:text-6xl lg:text-7xl">
            Pourquoi nous
          </h2>
          <div className="gold-rule-center mt-4" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6 xl:gap-8">
        {whyUs.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <ScrollReveal key={item.id} delay={i * 0.05} direction="up">
              <motion.article
                className="flex min-h-[9.5rem] flex-col items-center justify-center border border-border bg-cream/70 p-4 text-center transition-colors duration-300 hover:border-ember/50 hover:bg-cream sm:min-h-[11rem] sm:p-6 lg:min-h-[13rem] lg:p-8 xl:min-h-[14rem]"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
              >
                <div className={`mb-3 lg:mb-4 ${accents[i % accents.length]}`}>
                  <Icon size={26} aria-hidden />
                </div>
                <h3 className="font-display text-xl text-fg sm:text-2xl lg:text-[1.65rem]">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-[14rem] text-xs tracking-wide text-fg-muted sm:text-sm lg:mt-2 lg:text-[15px]">
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
