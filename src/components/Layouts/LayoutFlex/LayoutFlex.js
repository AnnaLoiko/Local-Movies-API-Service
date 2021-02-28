import React from "react";
import style from "./style.module";

const LayoutFlex = ({ children, flexOption, addClass}) => {

  return (
    <div className={ addClass ? `${style[flexOption]} ${style[addClass]}` :  `${style[flexOption]}` }>
      {children}
    </div>
  )
}

export default LayoutFlex;