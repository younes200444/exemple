import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  soft?: boolean;
  muted?: boolean;
}

export function Section({ children, className, id, soft, muted }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 md:py-28",
        soft && "bg-bg-soft",
        muted && "bg-bg-muted",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-[11px] font-medium uppercase tracking-[0.28em]",
            light ? "text-gold" : "text-gold"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl leading-[1.15] md:text-5xl",
          light ? "text-white" : "text-fg"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-5",
          align === "center" ? "gold-rule-center" : "gold-rule"
        )}
      />
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            light ? "text-white/75" : "text-fg-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
