import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module";

const Logo = () => {
  return (
    <Link 
      className={style.logo}
      to="/"
    >
      <strong>netflix</strong>roulette
    </Link>
  )
}

export default Logo;
