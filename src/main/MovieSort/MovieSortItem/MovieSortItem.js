import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

const FilterItem = ( props ) => (
  <li className={`${props.isSelected && style.active} ${style.itemDrop}`} onClick={props.handleClick}>
    {props.title}
  </li>
)


FilterItem.propTypes = {
  title: PropTypes.string,
  isSelected: PropTypes.bool,  
};

export default FilterItem;

