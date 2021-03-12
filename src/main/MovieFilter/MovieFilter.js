import React from "react";
import PropTypes from 'prop-types';

import FilterItem from './FilterItem/FilterItem';

const MovieFilter = (props) => {

  return (
    <ul>
      {props.filterOptions.map((item, index) => (
        <FilterItem
          key={index}
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
    }),
  )
};

export default MovieFilter;

