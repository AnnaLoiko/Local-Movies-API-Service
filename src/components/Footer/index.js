import React from "react";
import style from "./style.module";

const Footer = ({ children }) => {
  return (
    <footer className={style.footer}>{children}</footer>
  )
}

export default Footer;
