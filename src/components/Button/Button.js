import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

const Button = React.memo((props) => {
  const { text, className, addClassName, handleClick } = props;

  return (
    <button
      className={`${style[className]} ${addClassName && style[addClassName]} `}
      onClick={handleClick}
    >
      <span>{text}</span>
    </button>
  )
});


Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: 'Button',
  className: 'btnSecondary'
};

export default Button;
