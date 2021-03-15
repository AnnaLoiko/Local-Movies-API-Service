import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

const Input = ( props ) => {
  return (
    <>
      {props.label && <label className={style.label}>{props.label}</label>}
      <input
        className={style.input}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e)=>{}}
      />
    </>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
