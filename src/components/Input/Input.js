import React from "react";
import style from "./style.module";

const Input = ( props ) => {
  return (
    <>
      {props.label && <label className={style.label}>{props.label}</label>}
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={style.input}
        value={props.value}
      />
    </>
  )
}

export default Input;
