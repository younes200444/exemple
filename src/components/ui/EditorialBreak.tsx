"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface EditorialBreakProps {
  text: string;
  className?: string;
  speed?: "slow" | "punchy";
}

export function EditorialBreak({
  text,
  className,
  speed = "slow",
}: EditorialBreakProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    speed === "slow" ? ["-4%", "4%"] : ["-8%", "8%"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.2, 1, 1, 0.25]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden py-12 sm:py-16 md:py-24",
        className
      )}
      aria-hidden
    >
      <motion.p
        className="select-none whitespace-nowrap text-center font-display text-[16vw] font-medium leading-none tracking-[-0.04em] text-fg/[0.055] sm:text-[12vw] md:text-[10vw]"
        style={reduce ? undefined : { x, opacity }}
        initial={reduce ? false : { opacity: 0 }}
        whileInView={reduce ? undefined : { opacity: 1 }}
        viewport={{ once: true }}
      >
        {text}
      </motion.p>
      <div className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-px w-20 -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent sm:w-28" />
    </div>
  );
}
