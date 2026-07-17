import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  soft?: boolean;
  muted?: boolean;
  dark?: boolean;
}

export function Section({
  children,
  className,
  id,
  soft,
  muted,
  dark,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-24 md:py-32",
        soft && "texture-paper",
        muted && "bg-bg-muted",
        dark && "bg-charcoal text-white",
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
        "mb-14 md:mb-20 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 text-[11px] font-medium uppercase tracking-[0.32em]",
            "text-gold"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-medium leading-[1.12] md:text-5xl lg:text-[3.25rem]",
          light ? "text-white" : "text-fg"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-6",
          align === "center" ? "gold-rule-center" : "gold-rule"
        )}
      />
      {description && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed md:text-lg",
            light ? "text-white/70" : "text-fg-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
