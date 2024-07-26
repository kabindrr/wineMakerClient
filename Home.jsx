import React from "react";
import { TopNav } from "./src/layout/TopNav";
import { Footer } from "./src/layout/Footer";
import { Container } from "react-bootstrap";
import { CustomCarousel } from "./src/components/customCarouse/CustomCarousel";

export const Home = () => {
  return (
    <div>
      <TopNav />
      <CustomCarousel />

      <Footer />
    </div>
  );
};
