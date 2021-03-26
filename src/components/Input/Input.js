import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';


const Input = (props) => {
  const {id, label, type, placeholder, value, title, disabled = false, handleInputChange} = props;

  return (
    <>
      {label && <label className={style.label}>{label}</label>}
      <input
        id={id}
        className={style.input}
        type={type}
        placeholder={placeholder}
        value={value}
        title={title}
        disabled={disabled}
        onChange={handleInputChange}
      />
    </>
  )
};


Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  title: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  handleInputChange: PropTypes.func,
};

export default Input;
