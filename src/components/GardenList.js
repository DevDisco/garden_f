import React, { useState, useEffect } from "react";
import "./GardenList.css";
import GardenListItem from "./GardenListItem";

export default function GardenList() {
  const [fetchData, setData] = useState([]);

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL + "?g=0";
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

  const gardens = fetchData;

  //console.log(gardens);

  if (!gardens || gardens.length === 0) {
    return <p>...</p>;
  }

  return (
    <>
      <span id="gardens"></span>
      <div className="gardenlist-gardens">
        {gardens.map(({ id, address, intro }) => (
          <GardenListItem key={id} id={id} label={address} text={intro} />
        ))}
      </div>
    </>
  );
}
