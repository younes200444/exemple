"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(t);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <Section id="reviews" muted divider className="bg-shift-cream overflow-hidden">
      <ScrollReveal direction="blur">
        <SectionHeading
          eyebrow="Avis clients"
          title="Ils en parlent mieux que nous"
          description="Des retours sincères de clients de Rodez et des environs."
        />
      </ScrollReveal>

      <ScrollReveal delay={0.08}>
        <div className="relative mx-auto max-w-5xl">
          {/* Depth stack — desktop */}
          <div className="relative hidden h-[420px] items-center justify-center md:flex">
            {testimonials.map((t, i) => {
              const offset =
                (i - index + testimonials.length) % testimonials.length;
              const normalized =
                offset > testimonials.length / 2
                  ? offset - testimonials.length
                  : offset;
              const isActive = normalized === 0;
              const abs = Math.abs(normalized);

              if (abs > 1) return null;

              return (
                <motion.article
                  key={t.id}
                  className={cn(
                    "absolute w-[min(100%,520px)] border border-gold/25 bg-cream p-10 shadow-[var(--shadow-lift)]",
                    isActive ? "z-20" : "z-10"
                  )}
                  animate={{
                    x: normalized * 210,
                    scale: isActive ? 1 : 0.86,
                    opacity: isActive ? 1 : 0.45,
                    filter: reduce
                      ? undefined
                      : isActive
                        ? "blur(0px)"
                        : "blur(2.5px)",
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 26 }}
                >
                  <ReviewCard t={t} />
                </motion.article>
              );
            })}
          </div>

          {/* Mobile — single card */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.article
                key={testimonials[index].id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="border border-gold/25 bg-cream p-6 shadow-[var(--shadow-lift)] sm:p-8"
              >
                <ReviewCard t={testimonials[index]} />
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-11 w-11 items-center justify-center border border-border text-fg transition-colors hover:border-gold hover:text-gold"
              aria-label="Avis précédent"
              data-cursor="←"
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
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-gold" : "w-2 bg-border hover:bg-gold/50"
                  }`}
                  aria-label={`Avis ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center border border-border text-fg transition-colors hover:border-gold hover:text-gold"
              aria-label="Avis suivant"
              data-cursor="→"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}

function ReviewCard({
  t,
}: {
  t: (typeof testimonials)[number];
}) {
  return (
    <blockquote className="text-center">
      <div
        className="mb-5 flex justify-center gap-1 text-gold"
        aria-label={`${t.rating} sur 5 étoiles`}
      >
        {Array.from({ length: t.rating }).map((_, idx) => (
          <Star key={idx} size={15} fill="currentColor" />
        ))}
      </div>
      <p className="font-display text-xl leading-relaxed text-fg md:text-2xl">
        &ldquo;{t.quote}&rdquo;
      </p>
      <footer className="mt-8 flex flex-col items-center gap-3">
        <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-gold/40">
          <Image src={t.avatar} alt="" fill sizes="56px" className="object-cover" />
        </div>
        <div>
          <cite className="not-italic font-medium text-fg">{t.name}</cite>
          <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-fg-subtle">
            {t.role}
          </p>
        </div>
      </footer>
    </blockquote>
  );
}
