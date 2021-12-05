import React, { useState, useEffect } from "react";
import "./GardenImage.css";

function handleModal(props, image) {
  props.setOpenImageModal(true);
  props.setImageData(image);
}

export default function GardenImage(props) {
  const [fetchData, setData] = useState([]);

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL + "?i=" + props.image_id + "";

    //console.log(url);

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

  const image = fetchData;

  if (!image || image.length === 0) {
    image.image = "./../placeholder.png";
  }

  //console.log(image);

  if (image.title === "") {
    image.title = props.title;
  }

  return (
    <img
      src={image.image}
      alt={image.title}
      title={image.title}
      className="smallImage"
      onClick={() => {
        handleModal(props, image);
      }}
    ></img>
  );
}
