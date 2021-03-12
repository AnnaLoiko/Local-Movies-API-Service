import React, { useState } from "react";
import PropTypes from 'prop-types';

import FilterItem from './FilterItem/FilterItem';

const MovieFilter = (props) => {

  return (
    <ul>
      {props.items.map((item, index) => (
        <FilterItem
          key={index}
          title={item}
          isSelected={item === props.typeFilter}
          handleClick={() => { props.handleFilter(item); }}
        />
      ))}
    </ul>
  )
}

MovieFilter.propTypes = {
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      isActive: PropTypes.bool,
    }),
  )
};

export default MovieFilter;

