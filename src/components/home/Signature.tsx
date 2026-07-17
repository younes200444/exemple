"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Signature() {
  return (
    <section
      id="signature"
      className="relative scroll-mt-24 overflow-hidden bg-charcoal py-20 sm:py-24 md:py-32"
    >
      <div className="absolute inset-0 opacity-[0.14]">
        <Image
          src="https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1600&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal lg:bg-gradient-to-r lg:from-charcoal lg:via-charcoal/95 lg:to-charcoal/65" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-gold sm:text-[11px]">
            Notre spécialité
          </p>
          <h2 className="mt-3 font-display text-[2.35rem] font-medium leading-[1.08] text-white sm:mt-4 sm:text-5xl lg:text-6xl">
            Moules Frites
            <br />
            <span className="italic text-champagne">Traditionnelles</span>
          </h2>
          <div className="gold-rule mt-5 sm:mt-6" />
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70 sm:mt-6 sm:text-base md:text-lg">
            Le plat qui fait la réputation de Jo De Bruges à Rodez. Moules de
            bouchot soigneusement préparées — marinière ou crème — accompagnées
            de frites maison croustillantes. Un classique généreux, servi avec
            passion.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <p className="font-display text-3xl text-gold sm:text-4xl">18,50 €</p>
            <Button href="#reservation" size="lg" className="w-full sm:w-auto">
              Réserver pour y goûter
              <ArrowRight size={17} />
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="img-zoom relative mx-auto aspect-[4/5] max-w-sm overflow-hidden border border-white/10 sm:max-w-md lg:max-w-none">
            <Image
              src="https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1100&q=80"
              alt="Moules frites traditionnelles — spécialité Jo De Bruges"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/95 to-transparent p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.24em] text-gold">
                Coup de cœur
              </p>
              <p className="mt-1 font-display text-lg text-white sm:text-xl">
                La signature de la maison
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
