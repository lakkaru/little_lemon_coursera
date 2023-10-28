import React from "react";
import HeroSection from "./main/HeroSection";
import SpecialsSection from "./main/SpecialsSection";
import Testimonials from "./main/Testimonials";
import AboutSection from "./main/AboutSection";

export default function HomeMain() {
  return (
    <main>
      <HeroSection />
      <SpecialsSection />
      <Testimonials />
      <AboutSection />
    </main>
  );
}
