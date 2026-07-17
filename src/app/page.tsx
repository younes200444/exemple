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

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <Philosophy />
      <Signature />
      <Stats />
      <Menu />
      <Gallery />
      <WhyChooseUs />
      <Reviews />
      <Location />
      <Reservation />
    </>
  );
}
