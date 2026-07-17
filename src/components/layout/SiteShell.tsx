"use client";

import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { PageLoader } from "@/components/layout/PageLoader";
import { BackToTop } from "@/components/layout/BackToTop";
import { FloatingReserve } from "@/components/layout/FloatingReserve";
import { CustomCursor } from "@/components/layout/CustomCursor";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <div className="signature-rail hidden md:block" aria-hidden />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <FloatingReserve />
      <BackToTop />
    </>
  );
}
