import React from "react";

const Footer: React.FC<{}> = () => {
  return (
    <footer
      style={{ marginBottom: "0", fontSize: ".66rem", fontStyle: "bold" }}
    >
      <p
        style={{
          userSelect: "none",
          cursor: "pointer",
          width: "13rem",
          margin: "0 auto"
        }}
      >
        built by Joshua Newell Diehl
      </p>
      <p>---</p>
      <a
        href="mailto:jdiehl2236@gmail.com"
        style={{ color: "black", userSelect: "none" }}
      >
        EMAIL
      </a>
    </footer>
  );
};

export default Footer;
