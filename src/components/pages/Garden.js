import React from "react";
import "../../App.css";
import "./Garden.css";
import { gardens } from "../../data/gardens";

export default function Garden() {
  const query = window.location.search;
  const current = new URLSearchParams(query).get("id");
  const garden = gardens.find(({ id }) => id === parseInt(current));
  console.log(garden);

  return (
    <div className="garden">
      <div className="garden__story">
        <h1>{garden.title}</h1>
        <p>{garden.description}</p>
      </div>
      <div className="garden__images">
        {garden.images.map((image) => (
          <img
            src={"/images/" + image}
            alt={garden.title}
            className="garden__image"
          ></img>
        ))}
      </div>
    </div>
  );
}
