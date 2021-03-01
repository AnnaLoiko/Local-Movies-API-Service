import React from "react";
import PropTypes from 'prop-types';

import MovieItem from './MovieItem/MovieItem';

const MovieList = ({ moviesList }) => {
  return (
    <>
     {moviesList.map((movie) => (
       <MovieItem
         title={movie.title}
         genre={movie.genre}
         date={movie.date}
         src={movie.src}
         key={movie.id}
        />
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
  ).isRequired
}

export default MovieList;
