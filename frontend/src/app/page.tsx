import React from "react";
import "@/styles/home.css";
import HeroSection from "@/components/home/HeroSection";
import ServicesIntroSection from "@/components/home/ServicesIntroSection";
import WordCyclerSection from "@/components/home/WordCyclerSection";
import AccessoriesSection from "@/components/home/AccessoriesSection";
import VisionSection from "@/components/home/VisionSection";
import BoardSection from "@/components/home/BoardSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesIntroSection />
      <WordCyclerSection />
      <AccessoriesSection />
      <VisionSection />
      <BoardSection />
    </main>
  );
}

