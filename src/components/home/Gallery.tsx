"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/data/content";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setActive((i) =>
      i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);
  const next = useCallback(() => {
    setActive((i) => (i === null ? null : (i + 1) % galleryImages.length));
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, prev, next]);

  return (
    <Section
      id="gallery"
      soft
      divider
      className="!py-10 sm:!py-12 md:!py-14 lg:!py-16 xl:!py-20"
    >
      <ScrollReveal>
        <div className="mb-6 text-center md:mb-8 lg:mb-10">
          <h2 className="font-display text-4xl font-bold text-fg sm:text-5xl md:text-6xl lg:text-7xl">
            Galerie
          </h2>
          <div className="gold-rule-center mt-4" />
        </div>
      </ScrollReveal>

      <div className="masonry">
        {galleryImages.map((img, i) => (
          <ScrollReveal
            key={img.id}
            delay={(i % 3) * 0.04}
            className="masonry-item"
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "gallery-tile group relative block w-full overflow-hidden bg-bg-muted text-left focus-visible:outline-none",
                img.span === "tall" &&
                  "min-h-[280px] sm:min-h-[400px] lg:min-h-[440px]",
                img.span === "wide" &&
                  "min-h-[220px] sm:min-h-[270px] lg:min-h-[300px]",
                img.span === "normal" &&
                  "min-h-[240px] sm:min-h-[310px] lg:min-h-[340px]"
              )}
              aria-label={`Agrandir : ${img.alt}`}
              data-cursor="Zoom"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-3 text-left text-xs text-white/95 sm:p-4 sm:text-sm">
                {img.alt}
              </span>
            </button>
          </ScrollReveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal-deep/94 p-4 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            role="dialog"
            aria-modal="true"
            aria-label="Visionneuse galerie"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center text-white/80 transition-colors hover:text-gold sm:right-5 sm:top-5"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 z-10 inline-flex h-11 w-11 items-center justify-center text-white/80 transition-colors hover:text-gold sm:left-5"
              aria-label="Image précédente"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 z-10 inline-flex h-11 w-11 items-center justify-center text-white/80 transition-colors hover:text-gold sm:right-14"
              aria-label="Image suivante"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={galleryImages[active].id}
              className="relative h-[62vh] w-full max-w-5xl sm:h-[72vh]"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[active].src}
                alt={galleryImages[active].alt}
                fill
                sizes="92vw"
                className="object-contain"
                priority
              />
              <p className="absolute inset-x-0 -bottom-9 text-center text-xs text-white/65 sm:text-sm">
                {galleryImages[active].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
