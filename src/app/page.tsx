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

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <EditorialBreak text="L'ART DU GOÛT" />
      <Philosophy />
      <Signature />
      <Stats />
      <EditorialBreak text="LA CARTE" className="bg-bg" />
      <Menu />
      <Gallery />
      <EditorialBreak text="CONVICTIONS" />
      <WhyChooseUs />
      <Reviews />
      <Location />
      <Reservation />
    </>
  );
}
