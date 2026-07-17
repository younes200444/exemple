"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Reviews() {
  return (
    <Section id="reviews" muted>
      <ScrollReveal>
        <SectionHeading
          eyebrow="Avis clients"
          title="Ils en parlent mieux que nous"
          description="Des retours sincères de clients de Rodez et des environs."
        />
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.id} delay={i * 0.1}>
            <blockquote className="flex h-full flex-col bg-white p-7 shadow-[0_1px_0_rgba(26,26,26,0.06)] md:p-8">
              <div
                className="mb-4 flex gap-0.5 text-gold"
                aria-label={`${t.rating} sur 5 étoiles`}
              >
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-fg-muted md:text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <cite className="not-italic font-medium text-fg">{t.name}</cite>
                <p className="mt-0.5 text-xs text-fg-subtle">{t.role}</p>
              </footer>
            </blockquote>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
