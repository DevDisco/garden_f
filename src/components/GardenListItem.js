import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./GardenListItem.css";

function GardenListItem(props) {
  const [fetchData, setData] = useState([]);

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL + "?g=" + props.id + "&i=0";
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
  }, [props.id]);

  const image = fetchData;

  //console.log("image", image);

  if (!image || image.length === 0) {
    image.image = "./placeholder.png";
  } else {
    console.log("Fetching image " + props.id + ":" + image.image_id);
  }

  return (
    <div className="gardenitemlist-garden">
      <Link className="gardenitemlist-link" to={"garden?id=" + props.id}>
        <figure className="gardenitemlist-figure" data-category={props.label}>
          <img
            className="gardenitemlist-image"
            alt={props.label}
            src={image.image}
          />
        </figure>
        <div className="gardenitemlist-info">
          <h5 className="gardenitemlist-text">{props.text}</h5>
        </div>
      </Link>
    </div>
  );
}

export default GardenListItem;
