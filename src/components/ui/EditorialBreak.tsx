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
    speed === "slow" ? ["-8%", "8%"] : ["-14%", "14%"]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.15, 1, 1, 0.2]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.04, 0.94]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden py-14 sm:py-20 md:py-28",
        className
      )}
      aria-hidden
    >
      <div className="aurora">
        <div className="aurora-blob aurora-blob--gold opacity-30" />
        <div className="aurora-blob aurora-blob--ember opacity-25" />
      </div>
      <motion.p
        className="relative select-none whitespace-nowrap text-center font-display text-[18vw] font-bold leading-none tracking-[-0.045em] text-transparent sm:text-[13vw] md:text-[11vw]"
        style={
          reduce
            ? {
                backgroundImage:
                  "linear-gradient(115deg, rgba(224,160,48,0.18), rgba(160,40,48,0.14), rgba(224,90,40,0.16))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }
            : {
                x,
                opacity,
                scale,
                backgroundImage:
                  "linear-gradient(115deg, rgba(224,160,48,0.22), rgba(160,40,48,0.18), rgba(224,90,40,0.2))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }
        }
      >
        {text}
      </motion.p>
      <div className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-[2px] w-28 -translate-y-1/2 bg-gradient-to-r from-transparent via-ember to-transparent sm:w-36" />
    </div>
  );
}
