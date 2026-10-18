import React from "react";
import HeroCarousel from "@/components/home/HeroCarousel";
import ClothingSection from "@/components/home/ClothingSection";
import WordCyclerSection from "@/components/home/WordCyclerSection";
import AccessoriesSection from "@/components/home/AccessoriesSection";
import VisionSection from "@/components/home/VisionSection";
import BoardSection from "@/components/home/BoardSection";

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <ClothingSection />
      <WordCyclerSection />
      <AccessoriesSection />
      <VisionSection />
      <BoardSection />
    </main>
  );
}
