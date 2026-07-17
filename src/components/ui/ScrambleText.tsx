"use client";

import { useReducedMotion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: "p" | "span" | "h2";
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZÀÂÉÈÊÔÙ·—";

/** Premium playful hover: letters scramble then resolve. */
export function ScrambleText({
  text,
  className,
  as: Tag = "span",
}: ScrambleTextProps) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(text);
  const frame = useRef(0);
  const timer = useRef<number | null>(null);

  const scramble = useCallback(() => {
    if (reduce) return;
    if (timer.current) window.clearInterval(timer.current);
    frame.current = 0;
    const length = text.length;

    timer.current = window.setInterval(() => {
      frame.current += 1;
      const progress = frame.current / 14;
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < progress * length) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      if (frame.current >= 14) {
        if (timer.current) window.clearInterval(timer.current);
        setDisplay(text);
      }
    }, 28);
  }, [reduce, text]);

  return (
    <Tag
      className={cn("inline-block cursor-default", className)}
      onMouseEnter={scramble}
      onFocus={scramble}
      tabIndex={0}
    >
      {display}
    </Tag>
  );
}
