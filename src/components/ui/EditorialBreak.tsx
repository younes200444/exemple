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

/** Breathing watermark between sections — motion only, no competing aurora. */
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
    speed === "slow" ? ["-5%", "5%"] : ["-10%", "10%"]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [0.12, 0.55, 0.55, 0.12]
  );

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden py-10 sm:py-14 md:py-20",
        className
      )}
      aria-hidden
    >
      <motion.p
        className="relative select-none whitespace-nowrap text-center font-display text-[16vw] font-bold leading-none tracking-[-0.045em] text-transparent sm:text-[12vw] md:text-[9.5vw]"
        style={
          reduce
            ? {
                backgroundImage:
                  "linear-gradient(115deg, rgba(224,160,48,0.16), rgba(160,40,48,0.12), rgba(224,90,40,0.14))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }
            : {
                x,
                opacity,
                backgroundImage:
                  "linear-gradient(115deg, rgba(224,160,48,0.2), rgba(160,40,48,0.14), rgba(224,90,40,0.18))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }
        }
      >
        {text}
      </motion.p>
      <div className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-px w-24 -translate-y-1/2 bg-gradient-to-r from-transparent via-ember/70 to-transparent sm:w-32" />
    </div>
  );
}
