import React from "react";
import { icons } from "../data/icons";
const Logo: React.FC<{}> = () => {
  return (
    <div className="logo-container">
      {icons[0].svg({ size: "2.5rem", className: "birds-svg" })}
    </div>
  );
};

export default Logo;
