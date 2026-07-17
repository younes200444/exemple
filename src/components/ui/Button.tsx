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
    "bg-gold text-charcoal hover:bg-gold-hover shadow-[0_12px_32px_-12px_rgba(196,163,90,0.55)]",
  secondary: "bg-charcoal text-white hover:bg-charcoal-deep",
  ghost: "bg-transparent text-fg hover:bg-gold-soft",
  outline:
    "border border-border bg-transparent text-fg hover:border-gold hover:text-gold",
  outlineLight:
    "border border-white/45 bg-transparent text-white hover:border-gold hover:text-gold",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm tracking-[0.04em]",
  lg: "px-9 py-4 text-base tracking-[0.04em]",
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
    "inline-flex items-center justify-center gap-2 rounded-none font-medium uppercase transition-all duration-300 focus-visible:outline-none disabled:opacity-50",
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
