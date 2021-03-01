import React from "react";
import style from "./style.module";

const Input = () => {
  return (
    <input
      type="text"
      placeholder="What do you want to watch?"
      className={style.input}
    />
  )
}

export default Input;
