import React from "react";
import "./ImageModal.css";

export default function ImageModal({ closeImageModal, imageData }) {
  return (
    <div
      className="imagemodal-background"
      onClick={() => closeImageModal(false)}
    >
      <div className="imagemodal-container">
        <img
          className="imagemodal-image"
          src={imageData.image}
          alt={imageData.title}
        ></img>
        <p className="imagemodal-caption">
          {imageData.title}
          <span className="imagemodal-copyright">
            {imageData.copyright ? " ©" + imageData.copyright : ""}
          </span>
        </p>
      </div>
    </div>
  );
}
