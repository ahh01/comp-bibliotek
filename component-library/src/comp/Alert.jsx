import React from "react";
import {
  FaInfoCircle,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";

const Alert = ({ color, icon, children }) => {
  const icons = {
    info: <FaInfoCircle />,
    warning: <FaExclamationTriangle />,
    success: <FaCheckCircle />,
  };

  return (
    <div className={`bg-${color} text-white p-4 flex items- center`}>
      {icon && icons[icon]}
      <span className="ml-2">{children}</span>
    </div>
  );
};

export default Alert;
