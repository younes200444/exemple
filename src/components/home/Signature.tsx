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
  { label: "Origine", value: "Bouchot" },
  { label: "Sauce", value: "Marinière" },
  { label: "Side", value: "Frites" },
  { label: "Prix", value: "18,50 €" },
];

export function Signature() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={ref}
      id="signature"
      className="relative scroll-mt-24 overflow-hidden bg-charcoal-deep"
    >
      <div className="relative min-h-[88svh] md:min-h-[92svh]">
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={reduce ? undefined : { scale: imageScale, y: imageY }}
        >
          <Image
            src="https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1800&q=80"
            alt="Moules frites traditionnelles — spécialité Jo De Bruges"
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/85 to-charcoal-deep/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-transparent to-charcoal-deep/40" />

        <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-5 py-20 sm:px-8 md:min-h-[92svh] md:py-28">
          <ScrollReveal direction="clip">
            <p className="text-[10px] font-medium uppercase tracking-[0.36em] text-gold-bright sm:text-[11px]">
              Notre spécialité
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-[2.8rem] font-bold leading-[0.95] tracking-[-0.02em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Moules Frites
              <br />
              <span className="text-gradient-gold italic">★ Signature</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="mt-10">
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md sm:grid-cols-4">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="bg-charcoal-deep/55 px-4 py-5 sm:px-5 sm:py-6"
                >
                  <p className="text-[9px] uppercase tracking-[0.22em] text-gold-bright/80">
                    {spec.label}
                  </p>
                  <p className="mt-2 font-display text-lg text-white sm:text-xl">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25} className="mt-8">
            <Button
              href="#reservation"
              size="lg"
              className="cta-glow w-full sm:w-auto"
              data-cursor="Réserver"
            >
              Réserver
              <ArrowRight size={17} />
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
