import type {
  GalleryImage,
  MenuItem,
  StatItem,
  Testimonial,
} from "@/types";

export const menuItems: MenuItem[] = [
  {
    id: "foie-gras",
    name: "Foie gras maison",
    description: "Figues · brioche",
    price: 16.5,
    category: "entrees",
    signature: true,
    chefPick: true,
  },
  {
    id: "salade",
    name: "Salade fraîcheur",
    description: "Mesclun · noix · vinaigrette",
    price: 11.0,
    category: "entrees",
  },
  {
    id: "charcuterie",
    name: "Assiette de charcuterie",
    description: "Aveyron · cornichons",
    price: 14.0,
    category: "entrees",
  },
  {
    id: "moules",
    name: "Moules frites",
    description: "Bouchot · marinière · frites",
    price: 18.5,
    category: "plats",
    signature: true,
    chefPick: true,
    image:
      "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1200&q=80",
  },
  {
    id: "entrecote",
    name: "Entrecôte grillée",
    description: "Beurre · frites · salade",
    price: 24.0,
    category: "plats",
    chefPick: true,
  },
  {
    id: "poisson",
    name: "Poisson du marché",
    description: "Plancha · légumes · citron",
    price: 22.0,
    category: "plats",
  },
  {
    id: "creme-brulee",
    name: "Crème brûlée",
    description: "Vanille · cassonade",
    price: 8.5,
    category: "desserts",
  },
  {
    id: "cafe-gourmand",
    name: "Café gourmand",
    description: "Mignardises maison",
    price: 9.5,
    category: "desserts",
    chefPick: true,
  },
  {
    id: "dessert-maison",
    name: "Dessert maison",
    description: "Selon l'inspiration",
    price: 8.0,
    category: "desserts",
    signature: true,
  },
];

export const menuSections = [
  { id: "entrees" as const, label: "Entrées", subtitle: "" },
  { id: "plats" as const, label: "Plats", subtitle: "" },
  { id: "desserts" as const, label: "Desserts", subtitle: "" },
];

export const whyUs = [
  {
    id: "1",
    title: "Frais",
    description: "Du jour",
    icon: "Leaf" as const,
  },
  {
    id: "2",
    title: "Tradition",
    description: "Brasserie",
    icon: "UtensilsCrossed" as const,
  },
  {
    id: "3",
    title: "Accueil",
    description: "Chaleureux",
    icon: "HeartHandshake" as const,
  },
  {
    id: "4",
    title: "Ambiance",
    description: "Conviviale",
    icon: "Users" as const,
  },
];

export const stats: StatItem[] = [
  { id: "1", value: "20", suffix: "+", label: "Ans" },
  { id: "2", value: "100", suffix: "%", label: "Frais" },
  { id: "3", value: "5", suffix: "★", label: "Avis" },
  { id: "4", value: "1", suffix: "", label: "Signature" },
];

export const philosophy = [
  { id: "1", title: "Recettes", text: "Traditions" },
  { id: "2", title: "Saison", text: "Circuits courts" },
  { id: "3", title: "Héritage", text: "Brasserie française" },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marie L.",
    role: "Rodez",
    quote: "Les meilleures moules frites de Rodez. On y revient en famille.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: "2",
    name: "Philippe R.",
    role: "Habitué",
    quote: "Authentique, sans chichi. L'entrecôte est parfaite.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: "3",
    name: "Sophie M.",
    role: "Google",
    quote: "Ambiance chaleureuse, foie gras maison excellent.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    id: "4",
    name: "Jean-Pierre D.",
    role: "Aveyron",
    quote: "Enfin une vraie brasserie. Accueil impeccable.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80",
    alt: "Intérieur",
    span: "tall",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1000&q=80",
    alt: "Moules frites",
    span: "normal",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=80",
    alt: "Table",
    span: "wide",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1000&q=80",
    alt: "Grillades",
    span: "normal",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1000&q=80",
    alt: "Salle",
    span: "tall",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1000&q=80",
    alt: "Dessert",
    span: "normal",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1000&q=80",
    alt: "Ambiance",
    span: "wide",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&q=80",
    alt: "Viande",
    span: "normal",
  },
];
