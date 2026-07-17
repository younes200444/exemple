"use client";

import Image from "next/image";
import { philosophy } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Philosophy() {
  return (
    <Section id="savoir-faire" divider>
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <ScrollReveal>
            <SectionHeading
              align="left"
              eyebrow="Notre savoir-faire"
              title="La tradition, au service du goût"
              description="Des gestes précis, des produits choisis, et le respect de l'héritage des brasseries françaises."
              className="mb-8 sm:mb-10"
            />
          </ScrollReveal>

          <div className="space-y-7 sm:space-y-8">
            {philosophy.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.08}>
                <article className="border-l-2 border-gold/50 pl-5 transition-colors hover:border-gold">
                  <h3 className="font-display text-xl text-fg md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted md:text-[15px]">
                    {item.text}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.15} className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            <div className="img-zoom relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="Préparation en cuisine"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>
            <div className="img-zoom relative mt-6 aspect-[3/4] overflow-hidden sm:mt-8 md:mt-12">
              <Image
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80"
                alt="Plat de brasserie généreux"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
