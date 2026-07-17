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

export default function HomePage() {
  return (
    <>
      <Hero />
      <EditorialBreak text="L'ART DU GOÛT" className="texture-ember" />
      <Experience />
      <EditorialBreak
        text="AUTHENTIQUE"
        speed="punchy"
        className="section-dark"
      />
      <Philosophy />
      <EditorialBreak text="SIGNATURE" className="texture-wine-light" />
      <Signature />
      <Stats />
      <EditorialBreak text="LA CARTE" speed="punchy" className="texture-ember" />
      <Menu />
      <EditorialBreak text="INSTANTS" className="bg-bg-muted" />
      <Gallery />
      <BonAppetit />
      <WhyChooseUs />
      <EditorialBreak
        text="AVIS"
        speed="punchy"
        className="section-dark"
      />
      <Reviews />
      <Location />
      <Reservation />
    </>
  );
}
