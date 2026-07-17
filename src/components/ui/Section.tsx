import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  soft?: boolean;
  muted?: boolean;
  dark?: boolean;
  divider?: boolean;
}

export function Section({
  children,
  className,
  id,
  soft,
  muted,
  dark,
  divider,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 overflow-hidden py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20",
        soft && "texture-paper",
        muted && "bg-bg-muted",
        dark && "bg-charcoal text-white",
        divider && "section-divider",
        className
      )}
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 lg:max-w-7xl xl:max-w-[88rem] xl:px-10">
        {children}
      </div>
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
        "mb-8 max-w-2xl sm:mb-10 md:mb-12 lg:mb-14",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-[10px] font-medium uppercase tracking-[0.34em] sm:mb-4 sm:text-[11px] lg:text-xs",
            light ? "text-gold-bright" : "text-ember"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-[1.95rem] font-bold leading-[1.08] tracking-[-0.02em] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.75rem]",
          light ? "text-white" : "text-fg"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-5 sm:mt-6",
          align === "center" ? "gold-rule-center" : "gold-rule"
        )}
      />
      {description && (
        <p
          className={cn(
            "mt-5 max-w-xl text-[15px] leading-relaxed sm:mt-6 sm:text-base md:text-lg lg:max-w-2xl lg:text-xl",
            align === "center" && "mx-auto",
            light ? "text-white/70" : "text-fg-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
