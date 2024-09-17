import React, { useState } from "react";
import { shortenUrl } from "../../services/api";
import { Button, ShortenedLink } from "../common";
import "../../assets/styles/sections/Shortener.css";

const Shortener = () => {
  const [url, setUrl] = useState("");
  const [invalidUrl, setInvalidUrl] = useState(false);
  const [shortenedLinks, setShortenedLinks] = useState({});

  const handleShortenUrl = async (url) => {
    if (!url) {
      setInvalidUrl(true);
      return;
    }
    setInvalidUrl(false);
    const shortenedUrl = await shortenUrl(url);
    if (shortenedUrl) {
      setShortenedLinks((prevLinks) => ({
        ...prevLinks,
        [url]: shortenedUrl,
      }));
    } else {
      setInvalidUrl(true);
    }
  };

  return (
    <div className="shortener">
      <div className="shortener-input">
        <div className="shortener-input-field">
          <input
            className={invalidUrl ? "invalid" : ""}
            type="text"
            value={url}
            placeholder="Shorten a link here..."
            onChange={(event) => {
              setUrl(event.target.value);
              setInvalidUrl(false);
            }}
          />
          <span className="error-message">{invalidUrl && "Please add a link"}</span>
        </div>
        <Button action={() => handleShortenUrl(url)}>Shorten It!</Button>
      </div>
      <div className="shortener-output">
        {Object.entries(shortenedLinks).length > 0 &&
          Object.entries(shortenedLinks)
            .slice(-3)
            .reverse()
            .map(([originalUrl, shortenedUrl], index) => (
              <ShortenedLink key={index} originalUrl={originalUrl} shortenedUrl={shortenedUrl} />
            ))}
      </div>
    </div>
  );
};

export default Shortener;
