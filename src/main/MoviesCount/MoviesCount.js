import React from "react";
import style from "./style.module.css";

import PropTypes from 'prop-types';

const MoviesCount = ({ count }) => {
  return (
    <p className={style.textCount}>
      <strong>{count}</strong> movies found
    </p>
  )
}

MoviesCount.propTypes = {
  count: PropTypes.number
};

export default MoviesCount;
