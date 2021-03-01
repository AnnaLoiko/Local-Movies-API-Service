import React from "react";
import PropTypes from 'prop-types';

import FilterNavItem from './FilterNavItem/FilterNavItem';

const FilterNav = (props) => {
  return (
    <ul>
      {props.filterNav.map((item) => (
        <FilterNavItem
          key={item.id}
          title={item.title}
          isSelected={item.isSelected}
        />
      ))}
    </ul>
  )
}

FilterNav.propTypes = {
  filterNav: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      isSelected: PropTypes.bool,
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
    }),
  )
};

export default FilterNav;

