import React from "react";
import style from "./style.module";

import PropTypes from 'prop-types';

const FilterNavItem = ({ title, isSelected }) => (
  <li className={`${isSelected && style.active}`}>
    {title}
  </li>
)

FilterNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default FilterNavItem;
