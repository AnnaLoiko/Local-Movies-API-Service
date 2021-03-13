import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

const Button = ( props ) => {
  console.log('Button', props);
  const { text, className, addClassName, onClick } = props;

  return (
    <button 
      className={`${style[className]} ${addClassName && style[addClassName]} `}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  )
}

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