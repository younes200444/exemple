"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealVariant =
  | "up"
  | "left"
  | "right"
  | "clip"
  | "scale"
  | "fade"
  | "punchy";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  direction?: RevealVariant;
}

export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;
export const MOTION_DURATION = 0.55;

/**
 * Reveal early (before fully on screen) so sections never look like empty beige voids
 * while content waits invisible below the fold.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  once = true,
  direction = "up",
}: ScrollRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  // Expand detection upward so animation completes as the section arrives
  const viewport = { once, margin: "20% 0px -5% 0px" as const };

  if (direction === "punchy") {
    return (
      <motion.div
        className={cn(className)}
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={viewport}
        transition={{ duration: 0.5, delay, ease: MOTION_EASE }}
      >
        {children}
      </motion.div>
    );
  }

  if (direction === "clip") {
    return (
      <motion.div
        className={cn(className)}
        initial={{ clipPath: "inset(0 0 20% 0)", opacity: 0.85 }}
        whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.7, delay, ease: MOTION_EASE }}
      >
        {children}
      </motion.div>
    );
  }

  if (direction === "scale") {
    return (
      <motion.div
        className={cn(className)}
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewport}
        transition={{ duration: MOTION_DURATION, delay, ease: MOTION_EASE }}
      >
        {children}
      </motion.div>
    );
  }

  const offset =
    direction === "left"
      ? { x: -20, y: 0 }
      : direction === "right"
        ? { x: 20, y: 0 }
        : direction === "fade"
          ? { x: 0, y: 0 }
          : { x: 0, y: 16 };

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewport}
      transition={{ duration: MOTION_DURATION, delay, ease: MOTION_EASE }}
    >
      {children}
    </motion.div>
  );
}
