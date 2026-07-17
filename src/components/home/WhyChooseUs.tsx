"use client";

import { Leaf, UtensilsCrossed, HeartHandshake, Users } from "lucide-react";
import { whyUs } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const icons = { Leaf, UtensilsCrossed, HeartHandshake, Users };

export function WhyChooseUs() {
  return (
    <Section id="pourquoi" divider>
      <ScrollReveal>
        <SectionHeading
          eyebrow="Pourquoi nous"
          title="Ce qui fait la différence"
          description="Quatre engagements qui définissent l'expérience Jo De Bruges."
        />
      </ScrollReveal>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {whyUs.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <ScrollReveal key={item.id} delay={i * 0.08}>
              <article className="card-lift group h-full border border-border bg-cream/60 p-6 sm:p-7 md:p-8">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center bg-gradient-to-br from-gold-soft to-wine-soft text-gold transition-transform duration-300 group-hover:scale-110 group-hover:text-wine sm:h-12 sm:w-12">
                  <Icon size={20} aria-hidden />
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
