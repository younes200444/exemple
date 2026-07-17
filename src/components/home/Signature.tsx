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
import { Magnetic } from "@/components/ui/Magnetic";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SplitTitle } from "@/components/ui/SplitTitle";

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
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1.05, 1.15]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

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
            alt="Moules frites — spécialité Jo De Bruges"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/80 to-wine/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-transparent to-ember/20" />

        <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-5 py-20 sm:px-8 md:min-h-[92svh] md:py-28">
          <ScrollReveal direction="clip">
            <p className="text-[10px] font-medium uppercase tracking-[0.36em] text-ember sm:text-[11px]">
              Notre spécialité
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-[2.8rem] font-bold leading-[0.95] tracking-[-0.02em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              <SplitTitle text="Moules Frites" delay={0.05} inView />
              <br />
              <SplitTitle
                text="★ Signature"
                delay={0.25}
                inView
                gradientClassName="text-gradient-gold"
                className="italic"
              />
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.12} direction="punchy" className="mt-10">
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-gold/30 bg-white/5 backdrop-blur-md sm:grid-cols-4">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="bg-charcoal-deep/60 px-4 py-5 transition-colors hover:bg-wine/40 sm:px-5 sm:py-6"
                >
                  <p className="text-[9px] uppercase tracking-[0.22em] text-ember">
                    {spec.label}
                  </p>
                  <p className="mt-2 font-display text-lg text-champagne sm:text-xl">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-8">
            <Magnetic>
              <Button
                href="#reservation"
                size="lg"
                className="cta-glow w-full sm:w-auto"
                data-cursor="Réserver"
              >
                Réserver
                <ArrowRight size={18} />
              </Button>
            </Magnetic>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
