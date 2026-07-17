"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 32, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 400, damping: 32, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduce]);

  useEffect(() => {
    if (!enabled) return;

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
        setLabel(target.dataset.cursor ?? "");
      } else {
        setHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver);
    document.documentElement.classList.add("has-custom-cursor");

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[200] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      aria-hidden
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-white/80 bg-white/10 backdrop-blur-[2px]"
        animate={{
          width: hovering ? (label ? 72 : 48) : 14,
          height: hovering ? (label ? 72 : 48) : 14,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        {label && (
          <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
