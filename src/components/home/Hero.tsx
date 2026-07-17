"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { scale: imageScale }}
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

      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal-deep/80 to-transparent" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-28 pt-36 sm:px-8 md:pb-32"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="ornament mb-6 justify-start"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.36em] text-gold">
            Brasserie · Rodez
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-[2.75rem] font-medium leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          initial={reduce ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          Brasserie
          <br />
          <span className="text-champagne">Jo De Bruges</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/80 sm:text-lg md:mt-8 md:text-xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          {SITE.tagline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-3 sm:gap-4"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <Button href="#reservation" size="lg">
            Réserver une table
            <ArrowRight size={18} />
          </Button>
          <Button href="#menu" variant="outlineLight" size="lg">
            Découvrir notre menu
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#experience"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50 transition-colors hover:text-gold"
        aria-label="Découvrir l'expérience"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
