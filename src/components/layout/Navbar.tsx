"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/useScroll";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border/80 bg-[#faf8f5]/94 shadow-[0_8px_30px_-18px_rgba(23,23,23,0.35)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:h-[5rem] sm:px-8"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className={cn(
            "font-display text-lg leading-tight tracking-wide transition-colors sm:text-xl",
            scrolled || open ? "text-fg" : "text-white"
          )}
          onClick={() => setOpen(false)}
        >
          {SITE.shortName}
        </Link>

        <ul className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "relative text-[11px] uppercase tracking-[0.16em] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
                  scrolled
                    ? "text-fg-muted hover:text-gold"
                    : "text-white/75 hover:text-white"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button href="#reservation" size="sm">
              Réserver
            </Button>
          </div>
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center xl:hidden",
              scrolled || open ? "text-fg" : "text-white"
            )}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-[#faf8f5] xl:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 text-base text-fg-muted hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <Button href="#reservation" className="w-full">
                  Réserver une table
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
