import React from "react";
import style from "./style.module";

const Header = ({ children }) => {
  return (
    <header className={style.header}>{children}</header>
  )
}

export default Header;
