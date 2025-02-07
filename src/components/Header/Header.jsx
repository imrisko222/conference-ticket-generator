import React from "react";
import HeaderIcon from "../../assets/images/logo-mark.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={HeaderIcon} alt="HeaderIcon" />
      <h2>Coding Conf</h2>
    </header>
  );
};

export default Header;
