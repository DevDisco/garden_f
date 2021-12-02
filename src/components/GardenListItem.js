import React from "react";
import { Link } from "react-router-dom";

function GardenListItem(props) {
  console.log(props);
  return (
    <>
      <div key={props.id} className="cards__item">
        <Link className="cards__item__link" to={"garden?id=" + props.id}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt={props.label}
              src={props.image}
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
