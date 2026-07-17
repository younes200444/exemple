"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 32, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 420, damping: 32, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-agency");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest(
        "a, button, [data-cursor]"
      ) as HTMLElement | null;
      if (target) {
        setHovering(true);
        setLabel(target.dataset.cursor || "");
      } else {
        setHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      document.documentElement.classList.remove("cursor-agency");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[120] mix-blend-difference"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/10 backdrop-blur-[2px]"
        animate={{
          width: hovering ? (label ? 88 : 56) : 14,
          height: hovering ? (label ? 88 : 56) : 14,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
      >
        {label && (
          <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
