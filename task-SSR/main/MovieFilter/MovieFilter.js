import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import * as actions from '@/redux/actions';

import FilterItem from './FilterItem/FilterItem';

const MovieFilter = (props) => {
  const { filterKeys, params } = props;

  const dispatch = useDispatch();

  return (
    <ul>
      {filterKeys.map((item, index) => (
        <FilterItem
          key={index}
          title={item}
          isSelected={item === params.filterActiveKey}
          handleClick={() => {
            dispatch(actions.updateParams({ filterActiveKey: item })), 
            dispatch(actions.getMovies({ filterActiveKey: item }))}
          }
        />
      ))}
    </ul>
  )
};


MovieFilter.propTypes = {
  filterKeys: PropTypes.array,
  params: PropTypes.object,
};

export default MovieFilter;
