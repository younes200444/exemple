"use client";

import { Leaf, UtensilsCrossed, HeartHandshake, Users } from "lucide-react";
import { whyUs } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const icons = { Leaf, UtensilsCrossed, HeartHandshake, Users };

export function WhyChooseUs() {
  return (
    <Section id="pourquoi">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Pourquoi nous"
          title="Ce qui fait la différence"
          description="Quatre engagements qui définissent l'expérience Jo De Bruges."
        />
      </ScrollReveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <ScrollReveal key={item.id} delay={i * 0.08}>
              <article className="group h-full border border-border bg-bg p-7 transition-all duration-300 hover:border-gold/45 hover:bg-bg-soft md:p-8">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center bg-gold-soft text-gold transition-transform duration-300 group-hover:scale-105">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="font-display text-xl text-fg md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  {item.description}
                </p>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
