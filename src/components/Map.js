import React from "react";
import "./Map.css";

function Map() {
  return (
    <div className="map" id="map">
      <h1>&nbsp;</h1>
      <iframe
        className="map__frame"
        src="https://www.google.com/maps/d/embed?mid=1Cfylw9o0CFRSka9ZzhqW6jXxoNGAS9kC&z=14&ll=52.472, 4.775"
        title="Kaart Opentuinendag Westzaan 2022"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
