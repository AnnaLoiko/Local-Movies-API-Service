import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';


const MovieSortItem = (props) => {
  const { title, isSelected, sortOrder, handleClick } = props;

  return (
    <li
      className={`${style.itemDrop} ${isSelected && style.active} ${sortOrder && style.up}`}
      onClick={handleClick}
    >
      {title}
    </li>
  )
};


MovieSortItem.propTypes = {
  title: PropTypes.string,
  sortOrder: PropTypes.bool,
  isSelected: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default MovieSortItem;

