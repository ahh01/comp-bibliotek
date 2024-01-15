import React from "react";

const Button = ({ size, color, disabled, children }) => {
  return (
    <button
      className={`bg-${color} text-black px-${size} py-${size} ${
        disabled ? " opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
