import React from "react";

const openInNewTab = (url: string) => window.open(url, "_blank");

const Footer: React.FC<{}> = () => {
  return (
    <footer style={{ cursor: "pointer" }}>
      <p onClick={() => openInNewTab("https://github.com/JaynewDee")}>
        built by Joshua Newell Diehl
      </p>
    </footer>
  );
};

export default Footer;
