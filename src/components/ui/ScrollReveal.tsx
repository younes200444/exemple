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

/** Shared motion language across the site. */
export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;
export const MOTION_DURATION = 0.75;

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

  if (direction === "punchy") {
    return (
      <motion.div
        className={cn("will-change-transform", className)}
        initial={{ opacity: 0, y: 36, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once, margin: "-48px" }}
        transition={{ duration: 0.65, delay, ease: MOTION_EASE }}
      >
        {children}
      </motion.div>
    );
  }

  if (direction === "clip") {
    return (
      <motion.div
        className={cn("will-change-transform", className)}
        initial={{ clipPath: "inset(0 0 88% 0)", opacity: 0.4 }}
        whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
        viewport={{ once, margin: "-8%" }}
        transition={{ duration: 0.95, delay, ease: MOTION_EASE }}
      >
        {children}
      </motion.div>
    );
  }

  if (direction === "scale") {
    return (
      <motion.div
        className={cn("will-change-transform", className)}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once, margin: "-56px" }}
        transition={{ duration: MOTION_DURATION, delay, ease: MOTION_EASE }}
      >
        {children}
      </motion.div>
    );
  }

  const offset =
    direction === "left"
      ? { x: -48, y: 0 }
      : direction === "right"
        ? { x: 48, y: 0 }
        : direction === "fade"
          ? { x: 0, y: 0 }
          : { x: 0, y: 40 };

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-56px" }}
      transition={{ duration: MOTION_DURATION, delay, ease: MOTION_EASE }}
    >
      {children}
    </motion.div>
  );
}
