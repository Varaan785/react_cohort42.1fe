import "./styles.css";
import React from "react";

const Button = ({ name, type }) => {
  return (
    <button type={type} className="button-component">
      {name}
    </button>
  );
};

export default Button;