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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <ScrollReveal key={item.id} delay={i * 0.08}>
              <article className="h-full border border-border bg-bg p-6 transition-colors hover:border-gold/40 md:p-7">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center bg-gold-soft text-gold">
                  <Icon size={20} aria-hidden />
                </div>
                <h3 className="font-display text-xl text-fg">{item.title}</h3>
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
