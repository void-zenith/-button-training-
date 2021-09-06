import React from "react";
import "./Button.css";

// const size=["btn--ExtraLarge","btn--large","btn--medium","btn--small"]
// const variant = ["btn--primary","btn--secondary","btn--outlined"];
const Button = ({ size, variant, label }) => {
  const handleClick = () => {
    document.querySelector(".header").innerText = "Hello World";
  };
  return (
    <div className="flex">
      <button
        className={`btn ${size} ${variant}`}
        onClick={handleClick}
        data-testid ="button"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
