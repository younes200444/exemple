"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "up" | "left" | "right" | "clip" | "scale" | "fade";

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

  if (direction === "clip") {
    return (
      <motion.div
        className={cn("will-change-transform", className)}
        initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.4 }}
        whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
        viewport={{ once, margin: "-10%" }}
        transition={{ duration: 1.05, delay, ease }}
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
        viewport={{ once, margin: "-80px" }}
        transition={{ duration: 0.9, delay, ease }}
      >
        {children}
      </motion.div>
    );
  }

  const offset =
    direction === "left"
      ? { x: -56, y: 0 }
      : direction === "right"
        ? { x: 56, y: 0 }
        : direction === "fade"
          ? { x: 0, y: 0 }
          : { x: 0, y: 48 };

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
