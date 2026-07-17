"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { MOTION_EASE } from "@/components/ui/ScrollReveal";

export interface EditorialMomentProps {
  title: string;
  line: string;
  image: string;
  imageAlt: string;
  /** Dark cinematic vs warmer cream-tinted overlay */
  tone?: "dark" | "warm";
  className?: string;
}

/**
 * Compact editorial beat (≤ ~33vh): photo + overlay + title + line.
 * Not a watermark — a composed moment with scroll parallax.
 */
export function EditorialBreak({
  title,
  line,
  image,
  imageAlt,
  tone = "dark",
  className,
}: EditorialMomentProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.02]);
  const contentY = useTransform(scrollYProgress, [0, 1], [18, -18]);

  return (
    <section
      ref={ref}
      className={cn(
        "relative isolate overflow-hidden",
        "min-h-[28vh] max-h-[34vh] sm:min-h-[30vh] sm:max-h-[32vh]",
        className
      )}
      aria-label={title}
    >
      <motion.div
        className="absolute inset-[-12%] will-change-transform"
        style={reduce ? undefined : { y: imgY, scale: imgScale }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          className={cn(
            "object-cover",
            tone === "dark" && "grayscale-[0.35] contrast-[1.05]"
          )}
        />
      </motion.div>

      <div
        className={cn(
          "absolute inset-0",
          tone === "dark"
            ? "bg-gradient-to-r from-charcoal-deep/92 via-charcoal-deep/78 to-wine/55"
            : "bg-gradient-to-r from-charcoal/80 via-ember/45 to-charcoal-deep/70"
        )}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto flex h-full min-h-[28vh] max-w-6xl flex-col items-start justify-center px-5 py-10 sm:min-h-[30vh] sm:px-8 sm:py-12"
        style={reduce ? undefined : { y: contentY }}
      >
        <motion.p
          className="text-[10px] font-medium uppercase tracking-[0.36em] text-ember sm:text-[11px]"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.55, ease: MOTION_EASE }}
        >
          Jo De Bruges
        </motion.p>
        <motion.h2
          className="mt-3 max-w-xl font-display text-3xl font-bold leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)] sm:text-4xl md:text-5xl"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.06, ease: MOTION_EASE }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="mt-4 h-[2px] w-16 bg-gradient-to-r from-ember via-gold to-transparent"
          initial={reduce ? false : { scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.55, delay: 0.12, ease: MOTION_EASE }}
          style={{ transformOrigin: "left" }}
        />
        <motion.p
          className="mt-4 max-w-md text-[15px] leading-relaxed text-champagne/90 sm:text-base"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.55, delay: 0.14, ease: MOTION_EASE }}
        >
          {line}
        </motion.p>
      </motion.div>
    </section>
  );
}
