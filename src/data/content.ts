import type { GalleryImage, MenuItem, Testimonial } from "@/types";

export const menuItems: MenuItem[] = [
  {
    id: "foie-gras",
    name: "Foie gras maison",
    description: "Foie gras de canard mi-cuit, chutney de figues et pain brioché toasté.",
    price: 16.5,
    category: "entrees",
    signature: true,
  },
  {
    id: "salade",
    name: "Salade fraîcheur",
    description: "Mesclun, tomates confites, noix croquantes et vinaigrette maison.",
    price: 11.0,
    category: "entrees",
  },
  {
    id: "charcuterie",
    name: "Assiette de charcuterie",
    description: "Sélection de charcuteries artisanales d'Aveyron, cornichons et pain de campagne.",
    price: 14.0,
    category: "entrees",
  },
  {
    id: "moules",
    name: "Moules frites traditionnelles",
    description:
      "Notre signature — moules de bouchot, sauce marinière ou crème, frites maison croustillantes.",
    price: 18.5,
    category: "plats",
    signature: true,
    image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=900&q=80",
  },
  {
    id: "entrecote",
    name: "Entrecôte grillée",
    description: "Entrecôte française, beurre maître d'hôtel, frites et salade verte.",
    price: 24.0,
    category: "plats",
  },
  {
    id: "poisson",
    name: "Poisson du marché",
    description: "Selon arrivage — cuit à la plancha, légumes de saison et beurre citronné.",
    price: 22.0,
    category: "plats",
  },
  {
    id: "creme-brulee",
    name: "Crème brûlée",
    description: "Crème vanille de Madagascar, caramel croustillant à la cassonade.",
    price: 8.5,
    category: "desserts",
  },
  {
    id: "cafe-gourmand",
    name: "Café gourmand",
    description: "Café ou thé accompagné d'une sélection de mignardises maison.",
    price: 9.5,
    category: "desserts",
  },
  {
    id: "dessert-maison",
    name: "Dessert maison",
    description: "Selon l'inspiration du jour — demandez à votre serveur.",
    price: 8.0,
    category: "desserts",
    signature: true,
  },
];

export const menuSections = [
  { id: "entrees" as const, label: "Entrées", subtitle: "Pour commencer" },
  { id: "plats" as const, label: "Plats", subtitle: "Le cœur de la table" },
  { id: "desserts" as const, label: "Desserts", subtitle: "La touche finale" },
];

export const whyUs = [
  {
    id: "1",
    title: "Produits frais",
    description:
      "Fruits de mer, viandes et légumes sélectionnés auprès de producteurs locaux et de marchés de confiance.",
    icon: "Leaf" as const,
  },
  {
    id: "2",
    title: "Cuisine traditionnelle",
    description:
      "Les classiques de la brasserie française, préparés avec soin — des moules frites à l'entrecôte.",
    icon: "UtensilsCrossed" as const,
  },
  {
    id: "3",
    title: "Service chaleureux",
    description:
      "Une équipe accueillante qui connaît ses habitués et veille à ce que chaque repas soit un moment agréable.",
    icon: "HeartHandshake" as const,
  },
  {
    id: "4",
    title: "Ambiance conviviale",
    description:
      "Le cadre idéal pour un déjeuner entre collègues, un dîner en famille ou une soirée entre amis.",
    icon: "Users" as const,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marie L.",
    role: "Habituée de Rodez",
    quote:
      "Une excellente adresse à Rodez. Les moules frites sont généreuses et savoureuses, le service est souriant. On y revient régulièrement en famille.",
    rating: 5,
  },
  {
    id: "2",
    name: "Philippe R.",
    role: "Client régulier",
    quote:
      "Brasserie authentique, sans chichi. L'entrecôte est parfaitement grillée, les frites croustillantes. Une vraie table de quartier où l'on se sent bien.",
    rating: 5,
  },
  {
    id: "3",
    name: "Sophie M.",
    role: "Avis Google",
    quote:
      "Ambiance chaleureuse et cuisine généreuse. Le foie gras maison est un régal. Idéal pour un déjeuner d'affaires ou un dîner détendu.",
    rating: 5,
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80",
    alt: "Intérieur chaleureux de brasserie",
    span: "tall",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1000&q=80",
    alt: "Assiette de moules frites",
    span: "normal",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=80",
    alt: "Table dressée au restaurant",
    span: "wide",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1000&q=80",
    alt: "Entrecôte grillée et frites",
    span: "normal",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1000&q=80",
    alt: "Ambiance de salle de restaurant",
    span: "tall",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1000&q=80",
    alt: "Dessert crème brûlée",
    span: "normal",
  },
];
