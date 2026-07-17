"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { Aurora } from "@/components/ui/Aurora";
import { MOTION_EASE } from "@/components/ui/ScrollReveal";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function Hero() {
  const reduce = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? ["0%", "22%"] : ["0%", "8%"]
  );
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.14]);
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? [0, 80] : [0, 32]
  );
  // Keep CTAs readable while leaving the hero — never fade to invisible mid-scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.35]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div
        className="absolute inset-[-8%] will-change-transform"
        style={reduce ? undefined : { y: bgY, scale: bgScale }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: MOTION_EASE }}
        >
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt="Ambiance intérieure de la Brasserie Jo De Bruges à Rodez"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </motion.div>

      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-wine/25 via-transparent to-ember/15 md:hidden"
        aria-hidden
      />
      <div className="hidden md:block">
        <Aurora variant="warm" density="light" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/70 to-transparent" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28 md:pb-36 md:pt-40"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-1/3 -z-10 bg-gradient-to-t from-charcoal-deep/80 via-charcoal-deep/35 to-transparent sm:hidden" />

        <motion.p
          className="mb-5 text-[10px] font-medium uppercase tracking-[0.42em] text-gold-bright drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)] sm:mb-7 sm:text-[11px]"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: MOTION_EASE }}
        >
          Brasserie · Rodez
        </motion.p>

        <h1 className="font-display text-[2.85rem] font-bold leading-[0.94] tracking-[-0.03em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-7xl md:text-8xl lg:text-[7.25rem]">
          <SplitTitle
            text="Jo De Bruges"
            delay={0.08}
            gradientClassName="text-gradient-gold"
          />
        </h1>

        <motion.div
          className="mt-5 h-[2px] bg-gradient-to-r from-ember via-gold to-transparent sm:mt-7"
          initial={reduce ? false : { width: 0, opacity: 0 }}
          animate={{ width: "min(12rem, 42%)", opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.28, ease: MOTION_EASE }}
        />

        <motion.p
          className="mt-4 max-w-md text-[15px] font-light text-champagne/95 drop-shadow-[0_1px_12px_rgba(0,0,0,0.4)] sm:mt-6 sm:text-lg md:text-xl"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26, ease: MOTION_EASE }}
        >
          Moules frites, cuisine française, table conviviale.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36, ease: MOTION_EASE }}
        >
          <Magnetic>
            <Button
              href="#reservation"
              size="lg"
              className="w-full sm:w-auto"
              data-cursor="Réserver"
            >
              Réserver une table
              <ArrowRight size={18} />
            </Button>
          </Magnetic>
          <Button
            href="#menu"
            variant="outlineLight"
            size="lg"
            className="w-full border-2 border-champagne/70 sm:w-auto"
            data-cursor="Menu"
          >
            Découvrir la carte
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#experience"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-gold-bright/60 transition-colors hover:text-ember sm:block"
        aria-label="Découvrir"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
