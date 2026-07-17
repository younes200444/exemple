import { Hero } from "@/components/home/Hero";
import { Experience } from "@/components/home/Experience";
import { Philosophy } from "@/components/home/Philosophy";
import { Signature } from "@/components/home/Signature";
import { Stats } from "@/components/home/Stats";
import { Menu } from "@/components/home/Menu";
import { Gallery } from "@/components/home/Gallery";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Reviews } from "@/components/home/Reviews";
import { Location } from "@/components/home/Location";
import { Reservation } from "@/components/home/Reservation";
import { EditorialBreak } from "@/components/ui/EditorialBreak";
import { BonAppetit } from "@/components/home/BonAppetit";

/**
 * Editorial breaks: only keep moments that earn their space (Option B).
 * Redundant watermarks removed (Option A) — sections chain cleanly.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <EditorialBreak
        title="L'art du goût"
        line="Des produits frais, choisis avec exigence — chaque assiette a une histoire."
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
        imageAlt="Table dressée, lumière chaude"
        tone="warm"
      />
      <Experience />
      <Philosophy />
      <Signature />
      <Stats />
      <Menu />
      <Gallery />
      <BonAppetit />
      <WhyChooseUs />
      <EditorialBreak
        title="La table qui se partage"
        line="Ceux qui sont venus en parlent mieux que nous."
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
        imageAlt="Salle de la brasserie"
        tone="dark"
      />
      <Reviews />
      <Location />
      <Reservation />
    </>
  );
}
