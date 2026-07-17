"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface SplitTitleProps {
  text: string;
  className?: string;
  gradientClassName?: string;
  delay?: number;
  inView?: boolean;
}

const ease = [0.22, 1, 0.36, 1] as const;

/** Letter reveal on desktop; single fade by default (SSR + mobile = instant read). */
export function SplitTitle({
  text,
  className,
  gradientClassName,
  delay = 0,
  inView = false,
}: SplitTitleProps) {
  const reduce = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const letters = text.split("");
  const len = Math.max(letters.length - 1, 1);

  if (reduce || !isDesktop) {
    const inner = (
      <span className={cn(gradientClassName, className)}>{text}</span>
    );
    if (reduce) return inner;
    return (
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: 14 }}
        {...(inView
          ? {
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-8%" },
            }
          : { animate: { opacity: 1, y: 0 } })}
        transition={{ duration: 0.5, delay, ease }}
      >
        {inner}
      </motion.span>
    );
  }

  return (
    <span className={cn("inline-block", className)} aria-label={text}>
      {letters.map((char, i) => {
        const t = i / len;
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
              char === " " && "w-[0.28em]"
            )}
            initial={{ opacity: 0, y: 32, rotateX: 24 }}
            {...(inView
              ? {
                  whileInView: { opacity: 1, y: 0, rotateX: 0 },
                  viewport: { once: true, margin: "-10%" },
                }
              : { animate: { opacity: 1, y: 0, rotateX: 0 } })}
            transition={{
              duration: 0.48,
              delay: delay + i * 0.026,
              ease,
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
