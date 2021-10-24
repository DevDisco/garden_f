import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { gardens } from "../data/gardens";

console.log("Cards.js");

function Cards() {
  return (
    <div className="cards">
      <h1>&nbsp;</h1>
      {gardens.map(({ id, image, title, description, tags, visit }) => (
        <CardItem src={image} text={description} label={title} path={visit} />
      ))}
    </div>
  );
}

export default Cards;
