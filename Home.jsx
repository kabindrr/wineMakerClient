import React from "react";
import { TopNav } from "./src/layout/TopNav";
import { Footer } from "./src/layout/Footer";
import { CustomCarousel } from "./src/components/customCarouse/CustomCarousel";
import { WineNavbar } from "./src/layout/Header";

export const Home = () => {
  return (
    <div>
      {/* <TopNav /> */}
      <WineNavbar />
      {/* <Header /> */}
      <CustomCarousel />

      <Footer />
    </div>
  );
};
