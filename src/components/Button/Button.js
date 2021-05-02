import React, { useEffect } from "react";
import style from "./style.module.css";

import PropTypes from 'prop-types';

// Apply React optimization techniques “// PATTERN: {Memoize React Component}”
const Button = (props) => {
  const { type = "text", text = "Button", className = "btnSecondary", addClassName = "", disabled = false, handleClick, autoFocus = false } = props;


  return (
    <button
      type={type}
      className={`${style[className]} ${addClassName && style[addClassName]} `}
      disabled={disabled}
      onClick={handleClick}
      autoFocus={autoFocus}
    >
      <span>{text}</span>
    </button>
  )
};


Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default React.memo(Button);
