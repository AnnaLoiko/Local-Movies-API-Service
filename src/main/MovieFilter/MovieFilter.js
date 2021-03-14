import React, { useState } from "react";
import PropTypes from 'prop-types';

import FilterItem from './FilterItem/FilterItem';
import useUpdateEffect from '@/hooks/useUpdateEffect';
import data from "@/data/data";

const MovieFilter = (props) => {
  const [typeFilter, setTypeFilter] = useState("All");

  useUpdateEffect(() => {
    if (typeFilter === "All") {
      props.setCurrentMovies(props.moviesList);
      return;
    }
    const fileredMovies = props.moviesList.filter(item => item.genre.includes(typeFilter))
    props.setCurrentMovies(fileredMovies);
  }, [typeFilter])


  return (
    <ul>
      {data.filterOptions.map((item, index) => (
        <FilterItem
          key={index}
          title={item}
          isSelected={item === typeFilter}
          handleClick={() => setTypeFilter(item)}
        />
      ))}
    </ul>
  )
};


MovieFilter.propTypes = {
  moviesList: PropTypes.array,
  setCurrentMovies: PropTypes.func,
};

export default MovieFilter;
