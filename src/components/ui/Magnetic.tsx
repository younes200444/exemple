"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

/** Desktop fine-pointer only — no cost on touch devices. */
export function Magnetic({
  children,
  className,
  strength = 22,
}: MagneticProps) {
  const reduce = useReducedMotion();
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.35 });

  if (reduce || !finePointer) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn("inline-flex will-change-transform", className)}
      style={{ x: springX, y: springY }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        x.set(((e.clientX - cx) / rect.width) * strength);
        y.set(((e.clientY - cy) / rect.height) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
