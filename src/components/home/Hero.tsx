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
import { SITE } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const mistY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div
        className="absolute inset-[-10%] will-change-transform"
        style={reduce ? undefined : { y: bgY, scale: bgScale }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.18 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.6, ease }}
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

      <motion.div
        className="pointer-events-none absolute inset-0 mix-blend-soft-light will-change-transform"
        style={reduce ? undefined : { y: mistY }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-wine/40 via-transparent to-ember/30" />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
        aria-hidden
      />
      <Aurora variant="warm" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-charcoal-deep to-transparent" />

      <motion.p
        className="pointer-events-none absolute right-[-4%] top-[14%] hidden select-none font-display text-[20vw] font-bold leading-none text-ember/10 lg:block"
        initial={reduce ? false : { opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, delay: 0.5, ease }}
        aria-hidden
      >
        JO
      </motion.p>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 pt-36 sm:px-8 sm:pb-28 md:pb-36 md:pt-40"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          className="ornament mb-6 justify-start sm:mb-8"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-gold-bright sm:text-[11px]">
            Brasserie · Rodez
          </span>
        </motion.div>

        <h1 className="font-display text-[3.1rem] font-bold leading-[0.92] tracking-[-0.03em] text-white sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          <SplitTitle text="Brasserie" delay={0.4} />
          <br />
          <SplitTitle
            text="Jo De Bruges"
            delay={0.55}
            gradientClassName="text-gradient-gold"
            className="italic"
          />
        </h1>

        <motion.div
          className="mt-6 h-[2px] bg-gradient-to-r from-ember via-gold to-transparent sm:mt-8"
          initial={reduce ? false : { width: 0 }}
          animate={{ width: "min(14rem, 45%)" }}
          transition={{ duration: 1, delay: 1.1, ease }}
        />

        <motion.p
          className="mt-5 max-w-md text-[15px] font-light text-champagne/90 sm:mt-7 sm:text-lg md:text-xl"
          initial={reduce ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.05, ease }}
        >
          {SITE.tagline}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col gap-4 sm:mt-11 sm:flex-row sm:flex-wrap"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease }}
        >
          <Magnetic>
            <Button
              href="#reservation"
              size="lg"
              className="cta-glow w-full sm:w-auto"
              data-cursor="Réserver"
            >
              Réserver une table
              <ArrowRight size={18} />
            </Button>
          </Magnetic>
          <Magnetic strength={18}>
            <Button
              href="#menu"
              variant="outlineLight"
              size="lg"
              className="w-full border-2 border-champagne/70 sm:w-auto"
              data-cursor="Menu"
            >
              Découvrir notre menu
            </Button>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.a
        href="#experience"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 text-gold-bright/70 transition-colors hover:text-ember sm:block"
        aria-label="Découvrir"
        animate={reduce ? undefined : { y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
