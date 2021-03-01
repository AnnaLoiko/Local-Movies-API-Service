import React from "react";
import style from "./style.module.css";

import PropTypes from 'prop-types';

const ResultCount = ({ count }) => {
  return (
    <p className={style.textCount}>
      <strong>{count}</strong> movies found
    </p>
  )
}

ResultCount.propTypes = {
  count: PropTypes.number
};

export default ResultCount;
