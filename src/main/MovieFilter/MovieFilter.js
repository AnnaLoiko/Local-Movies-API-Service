import React from "react";
import PropTypes from 'prop-types';

import FilterItem from './FilterItem/FilterItem';

const MovieFilter = (props) => {
  const { filterKeys, params, getFilterMovies } = props;


  return (
    <ul>
      {filterKeys.map((item, index) => (
        <FilterItem
          key={index}
          title={item}
          isSelected={item === params.filterActiveKey}
          handleClick={() => getFilterMovies({ ...params, filterActiveKey: item })}
        />
      ))}
    </ul>
  )
};


MovieFilter.propTypes = {
  filterKeys: PropTypes.array,
  params: PropTypes.object,
  getFilterMovies: PropTypes.func,
};

export default MovieFilter;
