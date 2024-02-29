import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Scroll  from "@/components/Scroll";
import FeaturedCourses from "@/components/FeaturedCourses";
import { Testomonial } from "@/components/Testomonial";

export default function Home() {
  return (
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection/>
        <FeaturedCourses/>
        {/* <Scroll/> */}
        <Testomonial/>
      </main>
  );
}
