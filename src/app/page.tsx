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
 * Rhythm: high → calm → contrast → calm → MEMORABLE → calm → …
 * Effects are intentional, not repeated at the same intensity.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <EditorialBreak text="L'ART DU GOÛT" className="bg-bg" />
      <Experience />
      <EditorialBreak text="AUTHENTIQUE" className="section-dark" />
      <Philosophy />
      <EditorialBreak text="SIGNATURE" className="texture-wine-light" />
      <Signature />
      <Stats />
      <EditorialBreak text="LA CARTE" className="bg-bg" />
      <Menu />
      <Gallery />
      <BonAppetit />
      <WhyChooseUs />
      <EditorialBreak text="AVIS" className="section-dark" />
      <Reviews />
      <Location />
      <Reservation />
    </>
  );
}
