"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const current = testimonials[index];

  return (
    <Section id="reviews" muted divider>
      <ScrollReveal>
        <SectionHeading
          eyebrow="Avis clients"
          title="Ils en parlent mieux que nous"
          description="Des retours sincères de clients de Rodez et des environs."
        />
      </ScrollReveal>

      <ScrollReveal>
        <div className="relative mx-auto max-w-3xl">
          <div className="overflow-hidden border border-gold/25 bg-cream px-5 py-10 shadow-[var(--shadow-lift)] sm:px-8 sm:py-12 md:px-14 md:py-16">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div
                  className="mb-6 flex justify-center gap-1 text-gold"
                  aria-label={`${current.rating} sur 5 étoiles`}
                >
                  {Array.from({ length: current.rating }).map((_, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.06 }}
                    >
                      <Star size={16} fill="currentColor" />
                    </motion.span>
                  ))}
                </div>

                <p className="font-display text-xl leading-relaxed text-fg md:text-2xl md:leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </p>

                <footer className="mt-8 flex flex-col items-center gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-gold/40">
                    <Image
                      src={current.avatar}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <cite className="not-italic font-medium text-fg">
                      {current.name}
                    </cite>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-fg-subtle">
                      {current.role}
                    </p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
              }
              className="inline-flex h-11 w-11 items-center justify-center border border-border text-fg transition-colors hover:border-gold hover:text-gold"
              aria-label="Avis précédent"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Avis">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === index ? "bg-gold" : "bg-border hover:bg-gold/50"
                  }`}
                  aria-label={`Avis ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="inline-flex h-11 w-11 items-center justify-center border border-border text-fg transition-colors hover:border-gold hover:text-gold"
              aria-label="Avis suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
