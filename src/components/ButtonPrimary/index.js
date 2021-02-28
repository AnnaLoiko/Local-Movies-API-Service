import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

const ButtonPrimary = ({ text }) => {
  return (
    <input
      type="submit"
      value={text}
      className={style.buttonPrimary}
    />
  )
}

ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonPrimary;
