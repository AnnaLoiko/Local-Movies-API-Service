import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

const ButtonSecondary = ({ text }) => {
  return (
    <button className={style.buttonSecondary}><span>{text}</span></button>
  )
}

ButtonSecondary.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonSecondary;
