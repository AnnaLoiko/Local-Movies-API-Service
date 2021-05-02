import React from "react";
import style from "./style.module.css";

import PropTypes from 'prop-types';


const Input = ({ field, name, id, type, label, placeholder, error }) => {
  return (
    // Apply React optimization techniques “// PATTERN: {use Fragment to avoid additional HTML element wrapper}
    <>
      {label && <label htmlFor={field.name} className={style.label}>{label}</label>}

      <input {...field} placeholder={placeholder} name={name} id={id} type={type} className={`${style.input} ${error && style.errorInput}`}/>
    </>
  )
};


Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
};

export default Input;
