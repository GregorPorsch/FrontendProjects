import React from "react";
import { Button } from "../common";
import img from "../../assets/images/illustration-working.svg";
import "../../assets/styles/sections/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed
          <br /> insights on how your links are performing.
        </p>
        <Button action={() => console.log("Get Started")}>Get Started</Button>
      </div>
      <div className="banner-right">
        <img src={img} alt="Illustration of a person working" />
      </div>
    </div>
  );
};

export default Banner;
