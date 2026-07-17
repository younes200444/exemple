"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/Section";
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
    <Section id="gallery" soft>
      <ScrollReveal>
        <SectionHeading
          eyebrow="Galerie"
          title="L'ambiance Jo De Bruges"
          description="Salle, assiettes et moments partagés — un aperçu de l'esprit de la maison."
        />
      </ScrollReveal>

      <div className="masonry">
        {galleryImages.map((img, i) => (
          <ScrollReveal
            key={img.id}
            delay={(i % 3) * 0.05}
            className="masonry-item"
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "group relative block w-full overflow-hidden bg-bg-muted text-left focus-visible:outline-none",
                img.span === "tall" && "min-h-[420px]",
                img.span === "wide" && "min-h-[280px]",
                img.span === "normal" && "min-h-[320px]"
              )}
              aria-label={`Agrandir : ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/35" />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-sm text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </span>
            </button>
          </ScrollReveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal-deep/92 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Visionneuse galerie"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center text-white/80 transition-colors hover:text-gold"
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
              className="absolute left-3 z-10 inline-flex h-11 w-11 items-center justify-center text-white/80 hover:text-gold md:left-6"
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
              className="absolute right-3 z-10 inline-flex h-11 w-11 items-center justify-center text-white/80 hover:text-gold md:right-16"
              aria-label="Image suivante"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={galleryImages[active].id}
              className="relative h-[70vh] w-full max-w-5xl"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[active].src}
                alt={galleryImages[active].alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
              <p className="absolute inset-x-0 -bottom-10 text-center text-sm text-white/70">
                {galleryImages[active].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
