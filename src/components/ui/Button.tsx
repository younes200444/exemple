import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "outlineLight";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-charcoal hover:bg-gold-hover shadow-[var(--shadow-gold)] hover:-translate-y-0.5",
  secondary:
    "bg-charcoal text-white hover:bg-charcoal-deep hover:-translate-y-0.5",
  ghost: "bg-transparent text-fg hover:bg-gold-soft",
  outline:
    "border border-border bg-transparent text-fg hover:border-gold hover:text-gold hover:-translate-y-0.5",
  outlineLight:
    "border border-white/50 bg-transparent text-white hover:border-gold hover:text-gold hover:bg-white/5 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[11px] tracking-[0.16em]",
  md: "px-7 py-3.5 text-[12px] tracking-[0.16em]",
  lg: "px-8 py-4 text-[12px] tracking-[0.18em] sm:px-10 sm:text-[13px]",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-none font-medium uppercase transition-all duration-300 ease-out focus-visible:outline-none disabled:opacity-50 disabled:hover:translate-y-0",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
