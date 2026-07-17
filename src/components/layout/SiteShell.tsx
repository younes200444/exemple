"use client";

import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { PageLoader } from "@/components/layout/PageLoader";
import { BackToTop } from "@/components/layout/BackToTop";
import { FloatingReserve } from "@/components/layout/FloatingReserve";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <FloatingReserve />
      <BackToTop />
    </>
  );
}
