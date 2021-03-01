import React from "react";
import style from "./style.module";

const FilterNavItem = ({ title, isSelected }) => {
  return (
    <li className={isSelected ? style.active : ''}>
      {title}
    </li>
  )
}

export default FilterNavItem;

