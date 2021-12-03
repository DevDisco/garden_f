import React from "react";
import "./ImageModal.css";

export default function ImageModal({ closeImageModal, imageData }) {
  return (
    <div className="modalBackground" onClick={() => closeImageModal(false)}>
      <div className="modalContainer">
        <img className="image" src={imageData}></img>
      </div>
    </div>
  );
}
