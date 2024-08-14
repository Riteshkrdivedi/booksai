import Navbar from "@/components/Navbar";
import StarBackground from "../components/StarBackground";
import HeroContent from "@/components/HeroContent";

export default function Home() {
  return (
    <div className=" h-full w-full ">
      <Navbar />
      <StarBackground />
      <HeroContent />
    </div>
  );
}
