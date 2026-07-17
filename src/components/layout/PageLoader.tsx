"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/constants";
import { MOTION_EASE } from "@/components/ui/ScrollReveal";

/** Brief brand beat — keeps Hero content first within ~1s. */
export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal-deep"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: MOTION_EASE }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: MOTION_EASE }}
          >
            <span className="mb-4 text-[10px] uppercase tracking-[0.4em] text-gold">
              Bienvenue
            </span>
            <p className="font-display text-3xl text-white sm:text-4xl">
              {SITE.shortName}
            </p>
            <div className="mt-6 h-px w-16 overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-gold to-ember"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 0.05 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
