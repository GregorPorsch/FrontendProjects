import React from "react";
import "../../assets/styles/common/Button.css";

const Button = ({ className, action, children }) => {
  return (
    <button className={`btn ${className}`} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
