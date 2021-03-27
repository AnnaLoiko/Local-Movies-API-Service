import React, {useEffect} from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

const Button = React.memo((props) => {
  const { text = "Button", className = "btnSecondary", addClassName, disabled = false, handleClick,  autoFocus } = props;


  return (
    <button
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
  text: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
