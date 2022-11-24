import React from "react";

import { FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <img className="card__image" src={image} alt="" />
      <div className="card__block">
        <h1 className="card__title">{title}</h1>
        <p className="card__desc">{description}</p>
        <a href={link} target="_blank" className="card__link" rel="noreferrer">
          View on Github: <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

export default Card;
