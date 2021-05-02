import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

const FilterItem = (props) => {
  const { title, isSelected, handleClick } = props;

  return (
    <li
      className={`${style.filterItem} ${isSelected && style.active}`}
      onClick={handleClick}
    >
      {title}
    </li>
  )
};

FilterItem.propTypes = {
  title: PropTypes.string,
  isSelected: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default FilterItem;

