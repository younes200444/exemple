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
      <EditorialBreak text="L'ART DU GOÛT" />
      <Experience />
      <EditorialBreak text="AUTHENTIQUE" speed="punchy" className="bg-bg-soft/40" />
      <Philosophy />
      <EditorialBreak text="SIGNATURE" className="bg-bg-soft/50" />
      <Signature />
      <Stats />
      <EditorialBreak text="LA CARTE" speed="punchy" />
      <Menu />
      <EditorialBreak text="INSTANTS" />
      <Gallery />
      <BonAppetit />
      <WhyChooseUs />
      <EditorialBreak text="AVIS" speed="punchy" className="bg-bg-muted/40" />
      <Reviews />
      <Location />
      <Reservation />
    </>
  );
}
