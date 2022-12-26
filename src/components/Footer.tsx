import React from "react";

const Footer: React.FC<{}> = () => {
  return (
    <footer
      style={{ marginBottom: "0", fontSize: ".66rem", fontStyle: "bold" }}
    >
      <p>built by Joshua Newell Diehl</p>
      <p>---</p>
      <a href="mailto:jdiehl2236@gmail.com" style={{ color: "black" }}>
        EMAIL
      </a>
    </footer>
  );
};

export default Footer;
