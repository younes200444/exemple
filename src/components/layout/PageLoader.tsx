"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/constants";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1300);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-2xl text-white sm:text-3xl">
            {SITE.shortName}
          </p>
          <div className="mt-5 h-[1px] w-20 overflow-hidden bg-white/15">
            <div className="loader-shimmer h-full w-full" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
