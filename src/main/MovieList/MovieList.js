import React from "react";
import PropTypes from 'prop-types';

import MovieItem from './MovieItem/MovieItem';

const MovieList = ({ moviesList }) => {
  return (
    <>
      {moviesList.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </>
  )
}

MovieList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      date: PropTypes.string,
      src: PropTypes.string,
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    })
  )
}

export default MovieList;
