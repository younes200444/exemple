"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 639px)");
  const len = testimonials.length;
  const spacing = isMobile ? 52 : 180;

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % len), 6500);
    return () => clearInterval(t);
  }, [len]);

  const getOffset = (i: number) => {
    let d = i - index;
    if (d > len / 2) d -= len;
    if (d < -len / 2) d += len;
    return d;
  };

  return (
    <Section id="reviews" muted divider aurora="soft" className="texture-wine-light">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Avis"
          title="Ils en parlent"
        />
      </ScrollReveal>

      <ScrollReveal direction="scale">
        <div className="relative mx-auto max-w-5xl">
          <div
            className="relative flex h-[400px] items-center justify-center overflow-hidden sm:h-[440px] md:h-[460px]"
            style={{ perspective: "1200px" }}
          >
            {testimonials.map((t, i) => {
              const offset = getOffset(i);
              const abs = Math.abs(offset);
              const isActive = offset === 0;

              return (
                <motion.article
                  key={t.id}
                  className={cn(
                    "absolute w-[min(88vw,22rem)] border bg-cream p-6 shadow-[var(--shadow-lift)] will-change-transform sm:w-[24rem] sm:p-8 md:w-[26rem] md:p-10",
                    isActive ? "border-gold/40" : "border-border/40"
                  )}
                  animate={{
                    x: offset * spacing,
                    scale: isActive ? 1 : Math.max(0.78, 0.86 - abs * 0.04),
                    opacity: abs > 1 ? 0 : isActive ? 1 : 0.38,
                    filter: isActive ? "blur(0px)" : "blur(2.5px)",
                    rotateY: offset * -7,
                    zIndex: 20 - abs,
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 28 }}
                >
                  <div className="mb-5 flex gap-1 text-gold">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="font-display text-lg leading-relaxed text-fg sm:text-xl md:text-[1.35rem]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-8 flex items-center gap-3 border-t border-gold/20 pt-5">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-gold/40">
                      <Image
                        src={t.avatar}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <cite className="not-italic text-sm font-medium text-fg">
                        {t.name}
                      </cite>
                      <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-fg-subtle">
                        {t.role}
                      </p>
                    </div>
                  </footer>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + len) % len)}
              className="inline-flex h-11 w-11 items-center justify-center border border-border text-fg transition-colors hover:border-gold hover:text-gold"
              aria-label="Avis précédent"
              data-cursor="Préc."
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
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === index
                      ? "w-7 bg-gold"
                      : "w-1.5 bg-border hover:bg-gold/50"
                  )}
                  aria-label={`Avis ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % len)}
              className="inline-flex h-11 w-11 items-center justify-center border border-border text-fg transition-colors hover:border-gold hover:text-gold"
              aria-label="Avis suivant"
              data-cursor="Suiv."
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
