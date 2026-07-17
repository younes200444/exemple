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
import { SITE } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const mistY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const lineScale = useTransform(scrollYProgress, [0, 0.35], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      {/* Layer 1 — cinematic background */}
      <motion.div
        className="absolute inset-[-8%] will-change-transform"
        style={reduce ? undefined : { y: bgY, scale: bgScale }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.16 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.8, ease }}
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

      {/* Layer 2 — warm mist */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_70%_40%,rgba(201,146,58,0.22),transparent_60%)] will-change-transform"
        style={reduce ? undefined : { y: mistY }}
        aria-hidden
      />

      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/70 to-transparent" />

      {/* Giant watermark */}
      <motion.p
        aria-hidden
        className="pointer-events-none absolute right-[-4%] top-[18%] hidden select-none font-display text-[18vw] font-medium leading-none text-white/[0.04] lg:block"
        initial={reduce ? false : { opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.6, ease }}
      >
        JO
      </motion.p>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 pt-28 sm:px-8 sm:pb-28 md:pb-32 md:pt-36"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="mb-6 flex items-center gap-4 sm:mb-8"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
        >
          <motion.span
            className="h-px w-10 origin-left bg-gold-bright sm:w-14"
            style={reduce ? undefined : { scaleX: lineScale }}
          />
          <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-gold-bright sm:text-[11px]">
            Brasserie · Rodez
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[3.15rem] font-semibold leading-[0.92] tracking-[-0.02em] text-white sm:text-7xl md:text-8xl lg:text-[7.5rem]"
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.15, delay: 0.4, ease }}
          >
            Brasserie
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[3.15rem] font-semibold leading-[0.92] tracking-[-0.02em] sm:text-7xl md:text-8xl lg:text-[7.5rem]"
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.15, delay: 0.52, ease }}
          >
            <span className="text-gradient-gold italic">Jo De Bruges</span>
          </motion.h1>
        </div>

        <motion.p
          className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-white/80 sm:mt-8 sm:max-w-lg sm:text-lg md:mt-10 md:max-w-xl md:text-xl"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.78, ease }}
        >
          {SITE.tagline}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:gap-4"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease }}
        >
          <div className="cta-glow w-full sm:w-auto">
            <Button
              href="#reservation"
              size="lg"
              className="w-full sm:w-auto"
              data-cursor="Réserver"
            >
              Réserver une table
              <ArrowRight size={17} />
            </Button>
          </div>
          <Button
            href="#menu"
            variant="outlineLight"
            size="lg"
            className="w-full sm:w-auto"
            data-cursor="Menu"
          >
            Découvrir notre menu
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#experience"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 text-white/45 transition-colors hover:text-gold sm:block"
        aria-label="Découvrir l'expérience"
        data-cursor="↓"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
