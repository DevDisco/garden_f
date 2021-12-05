import React, { useState, useEffect } from "react";

function handleModal(props, image) {
  props.setOpenImageModal(true);
  props.setImageData(image.image);
}

export default function GardenImage(props) {
  const [fetchData, setData] = useState([]);

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL + "?i=" + props.image_id + "";
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

  const image = fetchData;

  if (!image || image.length === 0) {
    image.image = "./../placeholder.png";
  }

  console.log("key=" + props.image_id);
  return (
    <img
      src={image.image}
      alt={props.title}
      className="garden__image"
      onClick={() => {
        handleModal(props, image);
      }}
    ></img>
  );
}
