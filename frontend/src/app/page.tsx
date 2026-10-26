import React from "react";
import "@/styles/home.css";
import HeroSection from "@/components/home/HeroSection";
import ClothingSection from "@/components/home/ClothingSection";
import WordCyclerSection from "@/components/home/WordCyclerSection";
import AccessoriesSection from "@/components/home/AccessoriesSection";
import VisionSection from "@/components/home/VisionSection";
import BoardSection from "@/components/home/BoardSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClothingSection />
      <WordCyclerSection />
      <AccessoriesSection />
      <VisionSection />
      <BoardSection />
    </main>
  );
}

