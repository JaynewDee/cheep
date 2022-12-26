import React from "react";
import Disclaimer from "./Disclaimer";
import Logo from "./Logo";
import Subtitle from "./Subtitle";
import Title from "./Title";

const Header: React.FC<{}> = () => {
  return (
    <>
      <Disclaimer />
      <header>
        <Title />
        <Subtitle />
        <Logo />
        <hr className="hr-lg"></hr>
      </header>
    </>
  );
};
export default Header;
