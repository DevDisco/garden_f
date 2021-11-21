import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <span id="top"></span>
      <div className="hero-container">
        <video src="./videos/flower.mp4" autoPlay loop muted />
        <h1>Opentuinendag Westzaan 2022</h1>
        <p>Zaterdag 2 juli</p>
        <p>10 tuinen</p>
      </div>
      <span id="gardens"></span>
    </>
  );
}

export default HeroSection;
