import React from "react";

import "../../assets/styles/common/Statistic.css";

const Statistic = ({ title, description, img }) => {
  return (
    <div className="statistic">
      <img src={img} alt={title} className="statistic-img" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Statistic;
