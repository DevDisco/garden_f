import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Garden.css";
//todo: integrate into garden.js
export default function GardenJson() {
  const [garden, setData] = useState([]);

  useEffect(() => {
    const query = window.location.search;
    const id = new URLSearchParams(query).get("id");
    const table = "garden";
    const url =
      "https://dcslob.nl/api/public/index.php?id=" + id + "&t=" + table;

    console.log(url);

    const getData = () => {
      fetch(url, {
        crossDomain: true,
      })
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          setData(myJson);
        });
    };

    getData();
  }, []);

  console.log(garden);

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
