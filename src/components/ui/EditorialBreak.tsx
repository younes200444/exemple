"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EditorialBreakProps {
  text: string;
  className?: string;
}

export function EditorialBreak({ text, className }: EditorialBreakProps) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn(
        "relative overflow-hidden py-10 sm:py-14 md:py-20",
        className
      )}
      aria-hidden
    >
      <motion.p
        className="select-none whitespace-nowrap text-center font-display text-[14vw] font-medium leading-none tracking-[-0.03em] text-fg/[0.06] sm:text-[12vw] md:text-[10vw]"
        initial={reduce ? false : { opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.p>
      <motion.div
        className="absolute inset-x-[18%] bottom-6 h-px origin-left bg-gradient-to-r from-transparent via-gold to-transparent sm:bottom-8"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
