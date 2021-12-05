import React from "react";
import "./ImageModal.css";

export default function ImageModal({ closeImageModal, imageData }) {
  return (
    <div className="modalBackground" onClick={() => closeImageModal(false)}>
      <div className="modalContainer">
        <img className="image" src={imageData.image}></img>
        <p className="caption">
          {imageData.title}
          <span className="copyright">
            {imageData.copyright ? " ©" + imageData.copyright : ""}
          </span>
        </p>
      </div>
    </div>
  );
}
