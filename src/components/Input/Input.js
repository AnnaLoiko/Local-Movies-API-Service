import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

const Input = (props) => <>
  {props.label && <label className={style.label}>{props.label}</label>}
  <input
    className={style.input}
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    title={props.title}
    disable={props.disable}
    onChange={props.handleInputChange}
  />
</>


Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func,
};

export default Input;
