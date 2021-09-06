import React, { useState } from "react";
import "./Button.css";

// const size=["btn--ExtraLarge","btn--large","btn--medium","btn--small"]
// const variant = ["btn--primary","btn--secondary","btn--outlined"];
const Button = ({ size, variant, label }) => {
  const [label2, setLable2] = useState(`${label}`);

  const handleClick = () => {
    setLable2("label");

    document.querySelector(".header").textContent = "Hello World";
  };

  return (
    <div className="flex">
      <button
        className={`btn ${size} ${variant}`}
        onClick={handleClick}
        data-testid="button"
      >
        {label2}
      </button>
    </div>
  );
};

export default Button;
