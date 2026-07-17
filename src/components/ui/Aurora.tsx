"use client";

import { cn } from "@/lib/utils";

type AuroraVariant = "warm" | "wine" | "soft";

interface AuroraProps {
  variant?: AuroraVariant;
  /** light = 1–2 blobs; full = 3. Prefer light outside Hero. */
  density?: "full" | "light";
  className?: string;
}

/**
 * Ambient color wash. Animated on desktop only — static & thinner on mobile
 * to keep scroll fluid.
 */
export function Aurora({
  variant = "warm",
  density = "light",
  className,
}: AuroraProps) {
  return (
    <div className={cn("aurora", className)} aria-hidden>
      <div
        className={cn(
          "aurora-blob aurora-blob--gold",
          variant === "soft" && "opacity-35"
        )}
      />
      {density === "full" && (
        <>
          <div
            className={cn(
              "aurora-blob aurora-blob--wine",
              variant === "warm" && "opacity-60"
            )}
          />
          <div className="aurora-blob aurora-blob--ember" />
        </>
      )}
      {density === "light" && variant === "wine" && (
        <div className="aurora-blob aurora-blob--wine opacity-45" />
      )}
      {density === "light" && variant === "warm" && (
        <div className="aurora-blob aurora-blob--ember opacity-40 md:opacity-55" />
      )}
    </div>
  );
}
