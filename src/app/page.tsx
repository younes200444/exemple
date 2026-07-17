import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
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
      <About />
      <Menu />
      <Gallery />
      <WhyChooseUs />
      <Reviews />
      <Location />
      <Reservation />
    </>
  );
}
