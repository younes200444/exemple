"use client";

import { useScrollProgress } from "@/hooks/useScroll";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[3px]"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progression de lecture"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-wine via-gold to-champagne shadow-[0_0_12px_rgba(201,146,58,0.55)] transition-[width] duration-100 ease-out will-change-[width]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
