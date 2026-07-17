"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const specs = [
  { label: "Origine", value: "Moules de bouchot" },
  { label: "Préparation", value: "15–20 min" },
  { label: "Accompagnement", value: "Frites maison" },
  { label: "Prix", value: "18,50 €" },
];

export function Signature() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1.05, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="signature"
      ref={ref}
      className="relative scroll-mt-24 min-h-[92svh] overflow-hidden bg-charcoal-deep"
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={reduce ? undefined : { scale: imageScale, y: imageY }}
      >
        <Image
          src="https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1800&q=80"
          alt="Moules frites traditionnelles — spécialité Jo De Bruges"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/85 to-charcoal-deep/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-transparent to-charcoal-deep/50" />

      <p
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[22vw] font-medium leading-none text-white/[0.035]"
      >
        SIGNATURE
      </p>

      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-5 py-16 sm:px-8 sm:py-20 md:py-28 lg:justify-center">
        <div className="max-w-xl">
          <ScrollReveal direction="blur">
            <p className="text-[10px] font-medium uppercase tracking-[0.36em] text-gold-bright sm:text-[11px]">
              Notre spécialité
            </p>
            <h2 className="mt-4 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Moules Frites
              <br />
              <span className="text-gradient-gold italic">Traditionnelles</span>
            </h2>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/75 sm:text-base md:text-lg">
              Le plat qui fait la réputation de Jo De Bruges à Rodez. Moules de
              bouchot — marinière ou crème — et frites maison croustillantes.
              Un classique généreux, servi avec passion.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.12} className="mt-10">
            <ul className="grid grid-cols-2 gap-4 border border-white/10 bg-charcoal-deep/45 p-5 backdrop-blur-md sm:gap-6 sm:p-6 md:max-w-lg">
              {specs.map((s) => (
                <li key={s.label}>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-gold-bright/80">
                    {s.label}
                  </p>
                  <p className="mt-1 font-display text-lg text-white sm:text-xl">
                    {s.value}
                  </p>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-8">
            <div className="cta-glow inline-flex w-full sm:w-auto">
              <Button
                href="#reservation"
                size="lg"
                className="w-full sm:w-auto"
                data-cursor="Réserver"
              >
                Réserver pour y goûter
                <ArrowRight size={17} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
