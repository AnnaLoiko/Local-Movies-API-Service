import React from "react";
import PropTypes from 'prop-types';

import FilterItem from './FilterItem/FilterItem';

const MovieFilter = (props) => {
  const {getFilterMovies, filterKeys, activeFilter} = props;

  return (
    <ul>
      {filterKeys.map((item, index) => (
        <FilterItem
          key={index}
          title={item}
          isSelected={item === activeFilter}
          handleClick={() => getFilterMovies(item)}
        />
      ))}
    </ul>
  )
};


MovieFilter.propTypes = {
  filterKeys: PropTypes.array,
  getFilterMovies: PropTypes.func,
};

export default MovieFilter;
