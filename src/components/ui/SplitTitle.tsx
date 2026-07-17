"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTitleProps {
  text: string;
  className?: string;
  gradientClassName?: string;
  delay?: number;
  /** Animate when scrolled into view (Signature). Default: on mount (Hero). */
  inView?: boolean;
}

/** Letter-by-letter reveal with a warm gold→ember sweep across the word. */
export function SplitTitle({
  text,
  className,
  gradientClassName,
  delay = 0,
  inView = false,
}: SplitTitleProps) {
  const reduce = useReducedMotion();
  const letters = text.split("");
  const len = Math.max(letters.length - 1, 1);

  if (reduce) {
    return (
      <span className={cn(gradientClassName, className)}>{text}</span>
    );
  }

  return (
    <span className={cn("inline-block", className)} aria-label={text}>
      {letters.map((char, i) => {
        const t = i / len;
        // Warm sweep only: champagne → gold → ember (no green hue-rotate)
        const color = gradientClassName
          ? undefined
          : undefined;
        const warmStyle = gradientClassName
          ? {
              backgroundImage: `linear-gradient(115deg, #ffe0a8 ${t * 40}%, #e0a030 ${40 + t * 30}%, #e05a28 ${70 + t * 30}%)`,
              WebkitBackgroundClip: "text" as const,
              backgroundClip: "text" as const,
              color: "transparent",
            }
          : undefined;

        return (
          <motion.span
            key={`${char}-${i}`}
            className={cn(
              "inline-block origin-bottom",
              char === " " ? "w-[0.3em]" : color
            )}
            initial={{ opacity: 0, y: 56, rotateX: 55, scale: 0.85 }}
            {...(inView
              ? {
                  whileInView: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
                  viewport: { once: true, margin: "-10%" },
                }
              : {
                  animate: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
                })}
            transition={{
              duration: 0.55,
              delay: delay + i * 0.038,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={char === " " ? undefined : warmStyle}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </span>
  );
}
