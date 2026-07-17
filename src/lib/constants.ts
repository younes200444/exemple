import type { NavLink } from "@/types";

export const SITE = {
  name: "Brasserie Jo De Bruges",
  shortName: "Jo De Bruges",
  tagline: "Les saveurs authentiques de la brasserie française à Rodez",
  description:
    "Brasserie Jo De Bruges à Rodez — cuisine française traditionnelle, célèbre pour ses moules frites. Ambiance conviviale, produits frais, 23 Avenue de la Gineste.",
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
    facebook: "https://www.facebook.com/",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2871.5!2d2.575!3d44.349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ac4f0f0f0f0f0f%3A0x0!2s23%20Avenue%20de%20la%20Gineste%2C%2012000%20Rodez!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
} as const;

export const NAV_LINKS: NavLink[] = [
  { href: "#about", label: "La brasserie" },
  { href: "#menu", label: "La carte" },
  { href: "#gallery", label: "Galerie" },
  { href: "#reviews", label: "Avis" },
  { href: "#location", label: "Accès" },
  { href: "#reservation", label: "Réserver" },
];
