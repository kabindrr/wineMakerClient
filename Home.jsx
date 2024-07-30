import React from "react";
import { Footer } from "./src/layout/Footer";
import { CustomCarousel } from "./src/components/customCarouse/CustomCarousel";
import { WineNavbar } from "./src/layout/Header";
import { Hero } from "./src/layout/Hero";

export const Home = () => {
  return (
    <div>
      <WineNavbar />

      <Hero />
      <CustomCarousel />
      <Footer />
    </div>
  );
};
