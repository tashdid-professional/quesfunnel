
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import LatestProjects from "@/components/LatestProjects";
import OurTeam from "@/components/OurTeam";
import Slider from "@/components/Slider";
import Slider2 from "@/components/Slider2";
import Testimonials from "@/components/Testimonials";
import Text from "@/components/Text";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Expertise/>
      <Slider/>
      <Slider2/>
    
      <LatestProjects/>
      <Text/>
      <Testimonials/>
      <OurTeam/>
    </div>
  );
}
