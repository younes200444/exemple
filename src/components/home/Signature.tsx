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
import { ScrollReveal, MOTION_EASE } from "@/components/ui/ScrollReveal";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const specs = [
  { label: "Origine", value: "Bouchot" },
  { label: "Sauce", value: "Marinière" },
  { label: "Accompagnement", value: "Frites" },
  { label: "Prix", value: "18,50 €" },
];

/**
 * THE memorable moment of the site — iris reveal + 3-plane parallax.
 * Intentionally unique; do not repeat this language elsewhere.
 */
export function Signature() {
  const reduce = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Iris: closed → fully open as section enters (desktop only — THE moment)
  const irisSize = useTransform(scrollYProgress, [0.02, 0.32], ["0%", "165%"]);
  const clipPath = useTransform(
    irisSize,
    (size) => `circle(${size} at 48% 40%)`
  );
  const useIris = !reduce && isDesktop;

  // Three planes at different speeds (true depth, not a single layer)
  const farY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);
  const farScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.22, 1.08, 1.16]);
  const midY = useTransform(scrollYProgress, [0, 1], ["-5%", "7%"]);
  const nearY = useTransform(
    scrollYProgress,
    [0.2, 1],
    isDesktop ? [36, -20] : [12, -8]
  );
  const ringOpacity = useTransform(scrollYProgress, [0.08, 0.28, 0.45], [0.9, 0.35, 0]);

  return (
    <section
      ref={ref}
      id="signature"
      className="relative scroll-mt-24 overflow-hidden bg-charcoal-deep"
    >
      <div className="relative min-h-[90svh] md:min-h-[94svh]">
        {/* FAR plane — dish photography */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={
            reduce
              ? undefined
              : {
                  y: farY,
                  scale: farScale,
                  clipPath: useIris ? clipPath : undefined,
                }
          }
        >
          <Image
            src="https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1800&q=80"
            alt="Moules frites — spécialité Jo De Bruges"
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
        </motion.div>

        {/* MID plane — color atmosphere drifting slower */}
        <motion.div
          className="pointer-events-none absolute inset-0 will-change-transform"
          style={reduce ? undefined : { y: midY }}
          aria-hidden
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/75 to-wine/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-transparent to-ember/25" />
        </motion.div>

        {/* Iris rim highlight — only during the reveal */}
        {useIris && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{ opacity: ringOpacity }}
            aria-hidden
          >
            <div
              className="absolute left-1/2 top-[40%] h-[min(70vw,520px)] w-[min(70vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(224,160,48,0.45), 0 0 80px 20px rgba(224,90,40,0.25)",
              }}
            />
          </motion.div>
        )}

        {/* NEAR plane — copy & CTA */}
        <motion.div
          className="relative z-10 mx-auto flex min-h-[90svh] max-w-6xl flex-col justify-end px-5 py-14 sm:px-8 md:min-h-[94svh] md:py-20"
          style={reduce ? undefined : { y: nearY }}
        >
          <ScrollReveal direction="up">
            <p className="text-[10px] font-medium uppercase tracking-[0.36em] text-ember drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] sm:text-[11px]">
              Notre spécialité
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-[2.8rem] font-bold leading-[0.95] tracking-[-0.02em] text-white drop-shadow-[0_2px_28px_rgba(0,0,0,0.5)] sm:text-6xl md:text-7xl lg:text-8xl">
              <SplitTitle text="Moules Frites" delay={0.04} inView />
              <br />
              <SplitTitle
                text="Signature"
                delay={0.18}
                inView
                gradientClassName="text-gradient-gold"
                className="italic"
              />
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1} direction="up" className="mt-10">
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-gold/35 bg-charcoal-deep/50 backdrop-blur-sm sm:grid-cols-4">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="bg-charcoal-deep/55 px-4 py-5 transition-colors hover:bg-wine/35 sm:px-5 sm:py-6"
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

          <ScrollReveal delay={0.16} className="mt-8">
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
        </motion.div>
      </div>

      {/* Quiet entry cue for the iris (desktop) */}
      {useIris && (
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: MOTION_EASE }}
          aria-hidden
        />
      )}
    </section>
  );
}
