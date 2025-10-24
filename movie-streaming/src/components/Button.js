import React from "react";
import "../styles/Button.css";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  icon,
  className = "",
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className} ${
        disabled ? "disabled" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
