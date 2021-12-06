//import React, { useState, useEffect } from "react";
import "../App.css";
import "./Info.css";

export default function Info() {
  /*
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

  const info = fetchData;

  if (!info || info.length === 0) {
    //todo: add a nice error or default page
    return <p>...</p>;
  }

  //replace single linebreaks with double linebreaks.
  //easier on the eye.
  const description = garden.description.replace(
    /(^|[^\n])\n([^\n]|$)/g,
    "$1\n\n$2"
  );
*/
  return (
    <>
      <span id="info"></span>
      <div className="info">
        <div className="info-story">
          <h1 className="info-header">Handig om te weten</h1>
          <p className="info-description">blablabla</p>
          <h2 className="info-header">Parkeren</h2>
          <p>Vergeet het maar!</p>
          <h2 className="info-header">Contact</h2>
          <p>Formuliertje naar Diederik</p>
        </div>
      </div>
    </>
  );
}
