import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';


const Input = ({ field, form, ...props }) => {

  return (
    <>
      {props.label && <label className={style.label}>{props.label}</label>}

      <input {...field} {...props} className={style.input} />
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
