import React from "react";

function ContactItemImage({ imageUrl }) {
  return [
    <div className="contact-item__image" key={imageUrl}>
      <img src={imageUrl} alt="Contact Image" />
    </div>,
  ];
}

export default ContactItemImage;
