"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
        alt="Ambiance intérieure de la Brasserie Jo De Bruges"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 pt-32 sm:px-8 md:pb-28">
        <motion.p
          className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-gold"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Brasserie · Rodez
        </motion.p>

        <motion.h1
          className="font-display text-4xl leading-[1.05] text-white sm:text-5xl md:text-7xl lg:text-[5.25rem]"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {SITE.name}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/80 sm:text-lg md:mt-6 md:text-xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {SITE.tagline}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap gap-3 sm:gap-4"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button href="#menu" size="lg">
            Voir le menu
            <ArrowRight size={18} />
          </Button>
          <Button href="#reservation" variant="outlineLight" size="lg">
            Réserver une table
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
