import React from "react";
import HeaderIcon from "../../assets/images/logo-mark.svg";
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.headerContainer}>
      <img src={HeaderIcon} alt="HeaderIcon" />
      <h2>Coding Conf</h2>
    </header>
  );
};

export default Header;
