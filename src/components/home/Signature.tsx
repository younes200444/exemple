"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Signature() {
  return (
    <section
      id="signature"
      className="relative scroll-mt-24 overflow-hidden bg-charcoal py-24 md:py-32"
    >
      <div className="absolute inset-0 opacity-[0.12]">
        <Image
          src="https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1600&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal/70" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">
            Notre spécialité
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-[1.1] text-white md:text-5xl lg:text-6xl">
            Moules Frites
            <br />
            <span className="text-champagne">Traditionnelles</span>
          </h2>
          <div className="gold-rule mt-6" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
            Le plat qui fait la réputation de Jo De Bruges à Rodez. Moules de
            bouchot soigneusement préparées — marinière ou crème — accompagnées
            de frites maison croustillantes. Un classique généreux, servi avec
            passion.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <p className="font-display text-3xl text-gold">18,50 €</p>
            <Button href="#reservation" size="lg">
              Réserver pour y goûter
              <ArrowRight size={18} />
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden border border-white/10 lg:max-w-none">
            <Image
              src="https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1100&q=80"
              alt="Moules frites traditionnelles — spécialité Jo De Bruges"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-6">
              <p className="text-[11px] uppercase tracking-[0.24em] text-gold">
                Coup de cœur
              </p>
              <p className="mt-1 font-display text-xl text-white">
                La signature de la maison
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
