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
    "bg-gold text-white hover:bg-gold-hover shadow-[0_10px_28px_-12px_rgba(176,141,58,0.55)]",
  secondary: "bg-charcoal text-white hover:bg-charcoal/90",
  ghost: "bg-transparent text-fg hover:bg-gold-soft",
  outline: "border border-border bg-transparent text-fg hover:border-gold hover:text-gold",
  outlineLight:
    "border border-white/40 bg-transparent text-white hover:border-gold hover:text-gold",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm tracking-wide",
  lg: "px-8 py-4 text-base tracking-wide",
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
    "inline-flex items-center justify-center gap-2 rounded-none font-medium transition-all duration-300 focus-visible:outline-none disabled:opacity-50",
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
