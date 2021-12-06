import React from "react";
import "../../App.css";
import GardenList from "../GardenList";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Map from "../Map";
import Info from "../Info";

function Home() {
  return (
    <>
      <HeroSection />
      <GardenList />
      <Info />
      <Map />
      <Footer />
    </>
  );
}

export default Home;
