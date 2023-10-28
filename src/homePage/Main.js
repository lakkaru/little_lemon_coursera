import React from "react";
import HeroSection from "./main/HeroSection";
import SpecialsSection from "./main/SpecialsSection";
import Testimonials from "./main/Testimonials";
import AboutSection from "./main/AboutSection";

export default function Main() {
  return (
    <main>
      <HeroSection />
      <SpecialsSection />
      <Testimonials />
      <AboutSection />
    </main>
  );
}
