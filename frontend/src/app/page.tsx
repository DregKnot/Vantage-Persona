import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ClothingSection from "@/components/home/ClothingSection";
import WordCyclerSection from "@/components/home/WordCyclerSection";
import AccessoriesSection from "@/components/home/AccessoriesSection";
import VisionSection from "@/components/home/VisionSection";
import BoardSection from "@/components/home/BoardSection";
import { homeStyles } from "@/styles/homeStyles";

export default function Home() {
  return (
    <main>
      {/* Internal CSS embedded directly within Home Page */}
      <style
        id="home-internal-css"
        dangerouslySetInnerHTML={{ __html: homeStyles }}
      />
      <HeroSection />
      <ClothingSection />
      <WordCyclerSection />
      <AccessoriesSection />
      <VisionSection />
      <BoardSection />
    </main>
  );
}

