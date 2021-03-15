import React from "react";
import PropTypes from 'prop-types';

import FilterItem from './FilterItem/FilterItem';

const MovieFilter = (props) => {
  return (
    <ul>
      {props.filterOptions.map((item) => (
        <FilterItem
          key={item.id}
          title={item.title}
          isSelected={item.isSelected}
        />
      ))}
    </ul>
  )
}

MovieFilter.propTypes = {
  filterOptions: PropTypes.arrayOf(
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

export default MovieFilter;

