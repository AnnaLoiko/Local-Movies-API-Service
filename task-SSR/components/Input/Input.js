import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';


const Input = ({ field, form, ...props }) => {
  return (
    <>
      {props.label && <label htmlFor={field.name} className={style.label}>{props.label}</label>}

      <input {...field} {...props} className={`${style.input} ${props.error && style.errorInput}`}/>
    </>
  )
};


Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
