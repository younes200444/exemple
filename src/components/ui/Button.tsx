import Link from "next/link";
import { cn } from "@/lib/utils";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "outlineLight"
  | "wine";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
  "data-cursor"?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href">;

const variants: Record<Variant, string> = {
  primary: "btn-gold cta-glow hover:-translate-y-0.5",
  secondary:
    "bg-charcoal text-champagne hover:bg-charcoal-deep hover:-translate-y-0.5",
  wine: "bg-wine text-cream shadow-[var(--shadow-wine)] hover:bg-[#8f3436] hover:-translate-y-0.5",
  ghost: "bg-transparent text-fg hover:bg-gold-soft hover:text-gold",
  outline:
    "border border-gold/40 bg-transparent text-fg hover:border-gold hover:bg-gold-soft hover:text-gold hover:-translate-y-0.5",
  outlineLight:
    "border border-champagne/60 bg-transparent text-white hover:border-gold-bright hover:text-champagne hover:bg-white/5 hover:-translate-y-0.5",
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
      <Link href={href} className={classes} {...props}>
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
