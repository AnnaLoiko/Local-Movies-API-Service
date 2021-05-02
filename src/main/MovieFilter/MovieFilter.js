import React from "react";
import PropTypes from 'prop-types';

import FilterItem from './FilterItem/FilterItem';

// Apply React optimization techniques “// PATTERN: {Avoid using index as key for map}”
import shortid from 'shortid';

const MovieFilter = (props) => {
  const { filterKeys, params, getFilterMovies } = props;


  return (
    <ul>
      {filterKeys.map((item, index) => (
        <FilterItem
          key={shortid.generate()}
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
