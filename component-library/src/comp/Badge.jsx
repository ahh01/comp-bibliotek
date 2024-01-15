import React from "react";
import { FaStar, FaHeart, FaThumbsUp } from "react-icons/fa";

const Badge = ({ color, size, icon, children }) => {
  const icons = {
    star: <FaStar />,
    heart: <FaHeart />,
    thumbsUp: <FaThumbsUp />,
  };

  return (
    <span className={`bg-${color} text-white px-2 py-1 text-${size}`}>
      {icon && icons[icon]}
      {children}
    </span>
  );
};

export default Badge;
