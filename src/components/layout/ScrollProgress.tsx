"use client";

import { useScrollProgress } from "@/hooks/useScroll";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[2px]"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progression de lecture"
    >
      <div
        className="h-full bg-gold transition-[width] duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
