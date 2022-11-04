import React from "react";

import { FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ image, title, description, link }) => {
  return (
    <div className="card">
      {/* img */}
      <img className="card__image" src={image} alt="" />
      {/* title */}
      <div className="card__block">
        <h1 className="card__title">{title}</h1>
        {/* description */}
        <p className="card__desc">{description}</p>
        {/* link */}
        <a href={link} target="_blank" className="card__link">
          View on Github: <FaExternalLinkAlt />{" "}
        </a>
      </div>
    </div>
  );
};

export default Card;
