import React, { useState } from "react";
import Button from "./Button";
import "../../assets/styles/common/ShortenedLink.css";

const ShortenedLink = ({ originalUrl, shortenedUrl }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="shortened-link">
      <div className="shortened-link-left">
        <p>{originalUrl}</p>
      </div>
      <div className="shortened-link-right">
        <p>{shortenedUrl}</p>
        <Button className={copied ? "copied" : ""} action={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  );
};

export default ShortenedLink;
