import React from "react";
import "../../App.css";
import GardenList from "../GardenList";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Map from "../Map";

function Home() {
  return (
    <>
      <HeroSection />
      <GardenList />
      <Map />
      <Footer />
    </>
  );
}

export default Home;
