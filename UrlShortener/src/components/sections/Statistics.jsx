import React from "react";
import Statistic from "../common/Statistic";
import "../../assets/styles/sections/Statistics.css";

// Importieren der Bilder
import brandRecognitionImg from "../../assets/images/icon-brand-recognition.svg";
import detailedRecordsImg from "../../assets/images/icon-detailed-records.svg";
import fullyCustomizableImg from "../../assets/images/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics-header">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web
          <br /> with our advanced statistics dashboard.
        </p>
      </div>
      <div className="statistics-cards">
        <div className="statistics-card">
          <Statistic
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
            img={brandRecognitionImg}
          />
        </div>
        <div className="statistics-card">
          <Statistic
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            img={detailedRecordsImg}
          />
        </div>
        <div className="statistics-card">
          <Statistic
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            img={fullyCustomizableImg}
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
