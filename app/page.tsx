"use client";

import { ContactSection } from "@/components/landing/sections/ContactSection";
import { FaqSection } from "@/components/landing/sections/FaqSection";
import { HeroSection } from "@/components/landing/sections/HeroSection";
import { HowItWorksSection } from "@/components/landing/sections/HowItWorksSection";
import { PlansSection } from "@/components/landing/sections/PlansSection";
import { ServicesSection } from "@/components/landing/sections/ServicesSection";
import { TestimonialsSection } from "@/components/landing/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <PlansSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
