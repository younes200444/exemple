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
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={reduce ? undefined : { scale: imageScale }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease }}
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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-charcoal-deep to-transparent" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 pt-32 sm:px-8 sm:pb-28 md:pb-32 md:pt-36"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="ornament mb-5 justify-start sm:mb-7"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-gold-bright sm:text-[11px]">
            Brasserie · Rodez
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-[2.6rem] font-medium leading-[0.98] text-white sm:text-6xl md:text-7xl lg:text-[5.75rem]"
          initial={reduce ? false : { opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.45, ease }}
        >
          Brasserie
          <br />
          <span className="text-gradient-gold italic">Jo De Bruges</span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-lg text-[15px] font-light leading-relaxed text-white/78 sm:mt-7 sm:max-w-xl sm:text-lg md:mt-8 md:text-xl"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease }}
        >
          {SITE.tagline}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.82, ease }}
        >
          <Button href="#reservation" size="lg" className="w-full sm:w-auto">
            Réserver une table
            <ArrowRight size={17} />
          </Button>
          <Button
            href="#menu"
            variant="outlineLight"
            size="lg"
            className="w-full sm:w-auto"
          >
            Découvrir notre menu
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#experience"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 text-white/45 transition-colors hover:text-gold sm:block"
        aria-label="Découvrir l'expérience"
        animate={reduce ? undefined : { y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
