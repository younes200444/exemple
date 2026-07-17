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
  primary:
    "btn-gold cta-glow hover:-translate-y-1.5 hover:scale-[1.045] active:scale-[0.98]",
  secondary:
    "bg-charcoal text-champagne shadow-[var(--shadow-lift)] hover:bg-charcoal-deep hover:-translate-y-1.5 hover:scale-[1.04]",
  wine: "bg-gradient-to-br from-wine to-[#7a1e24] text-cream shadow-[var(--shadow-wine)] hover:from-[#b8323a] hover:to-wine hover:-translate-y-1.5 hover:scale-[1.04]",
  ghost: "bg-transparent text-fg hover:bg-ember/10 hover:text-ember",
  outline:
    "border-2 border-gold/50 bg-transparent text-fg hover:border-ember hover:bg-ember/10 hover:text-ember hover:-translate-y-1 hover:scale-[1.03]",
  outlineLight:
    "border-2 border-champagne/70 bg-transparent text-white hover:border-ember hover:text-gold-bright hover:bg-ember/15 hover:-translate-y-1 hover:scale-[1.03]",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[11px] tracking-[0.16em]",
  md: "px-7 py-3.5 text-[12px] tracking-[0.16em]",
  lg: "min-h-[3.25rem] px-10 py-4 text-[13px] tracking-[0.18em] sm:min-h-[3.5rem] sm:px-12 sm:text-sm",
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
