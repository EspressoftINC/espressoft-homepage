"use client";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import HistorySection from "@/components/sections/HistorySection";
import ServiceSection from "@/components/sections/ServiceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HistorySection />
      <ServiceSection />
      <ContactSection />
    </main>
  );
}
