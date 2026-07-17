export type MenuCategory = "entrees" | "plats" | "desserts";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  signature?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
}

export interface NavLink {
  href: string;
  label: string;
}
