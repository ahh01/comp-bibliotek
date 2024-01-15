import React from "react";

const Card = ({ href, imgAlt, imgSrc, children }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <a href={href}>
        <img src={imgSrc} alt={imgAlt} className="mb-2 rounded-md" />
      </a>
      {children}
    </div>
  );
};

export default Card;
