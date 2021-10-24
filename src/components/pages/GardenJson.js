import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Garden.css";

export default function GardenJson() {
  const query = window.location.search;
  const current = new URLSearchParams(query).get("id");
  const [garden, setData] = useState([]);

  const getData = () => {
    fetch("http://symphart.test/get/" + current, { crossDomain: true })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (!garden || garden.length === 0) {
    //todo: add a nice error or default page
    return <p>No file!</p>;
  }

  return (
    <div className="garden">
      <div className="garden__story">
        <h1>{garden.address}</h1>
        <p>{garden.description}</p>
        <p>
          Postcode:
          {garden.zip} {garden.municipality}
        </p>
        <p>Oppervlakte: {garden.size}</p>
        <p>Bouwjaar huis: {garden.anno}</p>
      </div>
      <div className="garden__images">
        {
          //todo: images should go into the database
          /* {garden.images.map((image) => (
          <img
            src={"/images/" + image}
            key={image}
            alt={garden.title}
            className="garden__image"
          ></img>
        ))} */
        }
      </div>
    </div>
  );
}
