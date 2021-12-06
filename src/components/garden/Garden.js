import React, { useState, useEffect } from "react";
import ImageModal from "./ImageModal";
import GardenImage from "./GardenImage";
import "../../App.css";
import "./Garden.css";

export default function Garden() {
  const [openImageModal, setOpenImageModal] = useState(false);
  const [imageData, setImageData] = useState(false);
  const [fetchData, setData] = useState([]);

  useEffect(() => {
    const query = window.location.search;
    const id = new URLSearchParams(query).get("id");
    const url = process.env.REACT_APP_API_URL + "?g=" + id;

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

  //console.log(fetchData);

  const garden = fetchData.garden;
  const images = fetchData.images;

  //console.log(garden);

  if (!garden || garden.length === 0) {
    //todo: add a nice error or default page
    return <p>...</p>;
  }

  //replace single linebreaks with double linebreaks.
  //easier on the eye.
  const description = garden.description.replace(
    /(^|[^\n])\n([^\n]|$)/g,
    "$1\n\n$2"
  );

  return (
    <div className="garden-garden">
      <div className="garden-story">
        <h1 className="garden-header">{garden.address}</h1>
        <p className="garden-description">{description}</p>
        {garden.favourite_plants && (
          <>
            <h2 className="garden-header">Favoriete plant(en)</h2>
            <p className="garden-description">{garden.favourite_plants}</p>
          </>
        )}
        <h2 className="garden-header">Extra informatie</h2>
        {garden.additional_info && (
          <p className="garden-description">{garden.additional_info}</p>
        )}
        <p>Oppervlakte van de tuin: {" " + garden.size} m2</p>
        <p>
          Volledig adres voor in de routeplanner:
          {" " + garden.address + ", " + garden.zip + " " + garden.municipality}
        </p>
      </div>
      <div className="garden-images">
        {
          //images are stored in the database as a blob
          images.map((image) => (
            <GardenImage
              key={image.image_id}
              image_id={image.image_id}
              id={garden.id}
              title={garden.address}
              setOpenImageModal={setOpenImageModal}
              setImageData={setImageData}
              openImageModal={openImageModal}
            />
          ))
        }
      </div>
      {openImageModal && (
        <ImageModal closeImageModal={setOpenImageModal} imageData={imageData} />
      )}
    </div>
  );
}
