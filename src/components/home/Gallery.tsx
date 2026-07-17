"use client";

import Image from "next/image";
import { galleryImages } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export function Gallery() {
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
            delay={(i % 3) * 0.06}
            className="masonry-item"
          >
            <figure
              className={cn(
                "group relative overflow-hidden bg-bg-muted",
                img.span === "tall" && "min-h-[400px]",
                img.span === "wide" && "min-h-[260px]",
                img.span === "normal" && "min-h-[300px]"
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/75 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm text-white">{img.alt}</span>
              </figcaption>
            </figure>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
