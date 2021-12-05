import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GardenListItem(props) {
  const [fetchData, setData] = useState([]);

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL + "?g=" + props.id + "&i=0";
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

  console.log("image", image);

  if (!image || image.length === 0) {
    image.image = "./placeholder.png";
  }

  return (
    <>
      <div key={props.id} className="cards__item">
        <Link className="cards__item__link" to={"garden?id=" + props.id}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt={props.label}
              src={image.image}
              //src="./placeholder.png"
              key={props.id}
            />
          </figure>

          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </div>
    </>
  );
}

export default GardenListItem;
