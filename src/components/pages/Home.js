import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Map from "../Map";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Map />
      <Footer />
    </>
  );
}

export default Home;
