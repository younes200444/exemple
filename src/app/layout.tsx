import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Brasserie à Rodez | Moules Frites`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "brasserie Rodez",
    "moules frites Rodez",
    "Jo De Bruges",
    "restaurant Avenue de la Gineste",
    "cuisine française Rodez",
    "brasserie Aveyron",
    "restaurant Rodez",
    "réserver table Rodez",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Brasserie française à Rodez`,
    description: SITE.tagline,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ambiance brasserie à Rodez`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Brasserie à Rodez`,
    description: SITE.tagline,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1210",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <JsonLd />
      </head>
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:bg-gold focus:px-4 focus:py-2 focus:text-charcoal"
        >
          Aller au contenu
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
