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
        className="select-none whitespace-nowrap text-center font-display text-[14vw] font-medium leading-none tracking-[-0.03em] text-fg/[0.045] sm:text-[11vw] md:text-[9vw]"
        initial={reduce ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.p>
      <div className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-px w-24 -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </div>
  );
}
