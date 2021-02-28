import React from "react";
import style from "./style.module";

const LayoutTopContentWrap = ({ children }) => {

  return (
    <div className={style.layoutTopContentWrap}>
      {children}
    </div>
  )
}

export default LayoutTopContentWrap;