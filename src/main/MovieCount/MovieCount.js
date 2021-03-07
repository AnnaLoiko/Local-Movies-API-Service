import React from "react";
import style from "./style.module.css";

import PropTypes from 'prop-types';

const MovieCount = ({ count }) => {
  return (
    <p className={style.textCount}>
      <strong>{count}</strong> movies found
    </p>
  )
}

MovieCount.propTypes = {
  count: PropTypes.number
};

MovieCount.defaultProps = {
  count: 'Some movies found'
};

export default MovieCount;