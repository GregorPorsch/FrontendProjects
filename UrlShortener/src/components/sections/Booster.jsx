import React from "react";
import { Button } from "../common";

import "../../assets/styles/sections/Booster.css";

const Booster = () => {
  return (
    <div className="booster">
      <h2>Boost your links today</h2>
      <Button action={() => console.log("Get started")}>Get Started</Button>
    </div>
  );
};

export default Booster;
