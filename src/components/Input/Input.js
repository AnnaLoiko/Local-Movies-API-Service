import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';


const Input = (props) => {
  const {id, type = 'text', label, placeholder = '', value, disabled = false, handleInputChange} = props;

  return (
    <>
      {label && <label className={style.label}>{label}</label>}

      <input
        id={id}
        type={type}
        className={style.input}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={handleInputChange}
      />
    </>
  )
};


Input.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleInputChange: PropTypes.func,
};

export default Input;
