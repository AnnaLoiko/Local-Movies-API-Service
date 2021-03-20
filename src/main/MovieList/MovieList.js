import React from "react";
import PropTypes from 'prop-types';

import Movie from './Movie/Movie';

const MovieList = ({ moviesList }) => {
  return (
    <>
      {moviesList.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </>
  )
}

MovieList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
      date: PropTypes.string,
      src: PropTypes.string,
      overview: PropTypes.string,
      runtime: PropTypes.number,
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    })
  )
}


export default MovieList;
