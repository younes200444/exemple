"use client";

import { useReducedMotion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: "p" | "span" | "h2";
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZÀÂÉÈÊÔÙ·—★";

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
    const total = 10;

    timer.current = window.setInterval(() => {
      frame.current += 1;
      const progress = frame.current / total;
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
      if (frame.current >= total) {
        if (timer.current) window.clearInterval(timer.current);
        setDisplay(text);
      }
    }, 18);
  }, [reduce, text]);

  return (
    <Tag
      className={cn("inline-block cursor-default", className)}
      onMouseEnter={scramble}
    >
      {display}
    </Tag>
  );
}
