import type { NavLink } from "@/types";

export const SITE = {
  name: "Brasserie Jo De Bruges",
  shortName: "Jo De Bruges",
  tagline: "Brasserie française · Rodez",
  description:
    "Brasserie Jo De Bruges à Rodez — cuisine française traditionnelle, célèbre pour ses moules frites. Ambiance conviviale, produits frais. 23 Avenue de la Gineste, 12000 Rodez. Réservez votre table.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://brasserie-jodebruges.vercel.app",
  phone: "05 65 78 60 80",
  phoneHref: "+33565786080",
  email: "contact@jodebruges.fr",
  address: {
    street: "23 Avenue de la Gineste",
    city: "Rodez",
    postal: "12000",
    country: "France",
    full: "23 Avenue de la Gineste, 12000 Rodez, France",
  },
  hours: [
    { day: "Lundi", time: "Fermé" },
    { day: "Mardi – Vendredi", time: "12h00 – 14h00 · 19h00 – 22h00" },
    { day: "Samedi", time: "12h00 – 14h30 · 19h00 – 22h30" },
    { day: "Dimanche", time: "12h00 – 14h30" },
  ],
  social: {
    facebook: "",
  },
  mapEmbed:
    "https://www.google.com/maps?q=23+Avenue+de+la+Gineste,+12000+Rodez,+France&hl=fr&z=16&output=embed",
  ogImage:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
} as const;

export const NAV_LINKS: NavLink[] = [
  { href: "#experience", label: "L'expérience" },
  { href: "#menu", label: "La carte" },
  { href: "#signature", label: "Spécialité" },
  { href: "#gallery", label: "Galerie" },
  { href: "#reviews", label: "Avis" },
  { href: "#reservation", label: "Réserver" },
];
