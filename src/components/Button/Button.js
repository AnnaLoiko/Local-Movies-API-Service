import React, { useEffect } from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

const Button = React.memo((props) => {
  const { type = "text", text = "Button", className = "btnSecondary", addClassName, disabled = false, handleClick, autoFocus } = props;


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
});


Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
