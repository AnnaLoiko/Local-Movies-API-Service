import React from "react";
import PropTypes from 'prop-types';

import Movie from './Movie/Movie';

const MovieList = ({ moviesList }) => {

  return (
    // Apply React optimization techniques “// PATTERN: {use Fragment to avoid additional HTML element wrapper}
    <>
      {moviesList.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </>
  )
}

MovieList.propTypes = {
  moviesList: PropTypes.array,
}

export default MovieList;
