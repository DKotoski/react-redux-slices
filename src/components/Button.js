import React from "react";

const Button = ({ text, buttonClass, clickHandler, spanClass = "title" }) => { 
  return (
  <button
    className={buttonClass}
    onClick={() => (clickHandler ? clickHandler(text) : null)}
  >
    <span className={spanClass}>{text}</span>
  </button>
);
};

export default Button;
