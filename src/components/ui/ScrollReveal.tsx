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

const ease = [0.22, 1, 0.36, 1] as const;

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
        initial={{ opacity: 0, y: 48, scale: 0.88, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        viewport={{ once, margin: "-40px" }}
        transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  if (direction === "clip") {
    return (
      <motion.div
        className={cn("will-change-transform", className)}
        initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.35, y: 30 }}
        whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1, y: 0 }}
        viewport={{ once, margin: "-8%" }}
        transition={{ duration: 1.1, delay, ease }}
      >
        {children}
      </motion.div>
    );
  }

  if (direction === "scale") {
    return (
      <motion.div
        className={cn("will-change-transform", className)}
        initial={{ opacity: 0, scale: 0.82 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once, margin: "-60px" }}
        transition={{ duration: 0.85, delay, ease }}
      >
        {children}
      </motion.div>
    );
  }

  const offset =
    direction === "left"
      ? { x: -72, y: 0 }
      : direction === "right"
        ? { x: 72, y: 0 }
        : direction === "fade"
          ? { x: 0, y: 0 }
          : { x: 0, y: 64 };

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
