import React, { useState, useEffect } from "react";
import "../../App.css";
import ImageModal from "../ImageModal";
import "./Garden.css";

export default function Garden() {
  const [openImageModal, setOpenImageModal] = useState(false);
  const [imageData, setImageData] = useState(false);
  const [fetchData, setData] = useState([]);

  useEffect(() => {
    const query = window.location.search;
    const id = new URLSearchParams(query).get("id");
    const url = process.env.REACT_APP_API_URL + "?id=" + id;

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

  console.log(fetchData);

  const garden = fetchData.garden;
  const images = fetchData.images;

  //console.log(garden);

  if (!garden || garden.length === 0) {
    //todo: add a nice error or default page
    return <p>...</p>;
  }

  return (
    <div className="garden">
      <div className="garden__story">
        <h1>{garden.address}</h1>
        <p>
          {garden.zip} {garden.municipality}
        </p>
        <p>{garden.description}</p>
        <p>Oppervlakte: {garden.size} m2</p>
      </div>
      <div className="garden__images">
        {
          //images are stored in the database as a blob
          images.map((image) => (
            <img
              src={image.image}
              key={image.id}
              alt={garden.title}
              className="garden__image"
              onClick={() => {
                setOpenImageModal(true);
                setImageData(image.image);
              }}
            ></img>
          ))
        }
      </div>
      {openImageModal && (
        <ImageModal closeImageModal={setOpenImageModal} imageData={imageData} />
      )}
    </div>
  );
}
